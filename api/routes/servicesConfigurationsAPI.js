var express = require("express");
const process = require("process");
// const AbortController = require('abort-controller');
const fetch = require("node-fetch");
const { protocolConfigPromise } = require("../protocol/protocol");
const {
    dbTypeEnumerator,
    configForLinux,
    configForWindows,
} = require("../constants/server_constants");
const {
    getDBBaseObj,
    getConvertedParameterStructure,
    modifyDBWithTransaction,
} = require("../database/db");
// const {promisify} = require('util');
// const exec = promisify(require('child_process').exec);
const { spawnSync } = require("child_process");
var path = require("path");
var fs = require("fs").promises;
var xml2js = require("xml2js");

const { getFileData } = require("../constants/helper");
const configUrl = process.platform === "win32" ? configForWindows : configForLinux;
// console.log(config);

var app = express();

app.use(express.json());

// creating SQL code for Monitoring_Data
const getMonitoringDataUpdateSQL = (configUpdateStatus, serverStatus) => {
    return `Update Monitoring_Server set configstatus = ${configUpdateStatus} where serverstatus = ${serverStatus}`;
};

const getConfData = async (forNotifier = false) => {
    var parser = new xml2js.Parser();
    // let { device, event, gateway } = config;
    let configResultObjList = [];

    let configString = await getFileData(configUrl);
    const config = JSON.parse(configString);

    const configDataList = await Promise.all(
        Object.keys(config).map((key, val) => {
            return forNotifier ? fs.readFile(config[key], "utf-8") : fs.readFile(config[key]);
        })
    );

    if (!forNotifier)
        configResultObjList = await Promise.all(
            configDataList.map((conf) => {
                return parser.parseStringPromise(conf);
            })
        );

    return {
        device: forNotifier ? configDataList[0] : configResultObjList[0],
        event: forNotifier ? configDataList[1] : configResultObjList[1],
        gateway: forNotifier ? configDataList[2] : configResultObjList[2],
    };
};

const isServiceActive = (cmdOutput) => {
    if (process.platform === "linux") {
        // For Linux
        return cmdOutput === "active\n";
    } else if (process.platform === "win32") {
        // For Windows
        return (
            cmdOutput
                .toString()
                .split("\n")
                .map((service) => service.trim())
                .indexOf("Configuration Update  TigerIT Service") != -1
        );
    }
};

const callScheduler = async (paramObj) => {
    try {
        const isActiveCheck = spawnSync(paramObj.cmdName, paramObj.cmdArrForActiveCheck);
        if (isActiveCheck.error) return false;

        if (isServiceActive(isActiveCheck.stdout.toString())) {
            const stop = spawnSync(paramObj.cmdName, paramObj.cmdArrForStop);
            if (stop.error) return false;
        }

        const isActiveCheckBeforeStart = spawnSync(paramObj.cmdName, paramObj.cmdArrForActiveCheck);
        if (isActiveCheckBeforeStart.error) return false;

        if (!isServiceActive(isActiveCheckBeforeStart.stdout.toString())) {
            const start = spawnSync(paramObj.cmdName, paramObj.cmdArrForStart);
            if (start.error) return false;
        }
    } catch (err) {
        return false;
    }
    return true;
};



let getCmd = () => {
    if (process.platform === "win32") {
        return {
            cmdName: "net",
            cmdArrForStart: ["start", "ConfigurationUpdateService"],
            cmdArrForStop: ["stop", "ConfigurationUpdateService"],
            cmdArrForActiveCheck: ["start"],
        };
    } else if (process.platform === "win32") {
        return {
            cmdName: "systemctl",
            cmdArrForStart: ["start", "Schedular-Management-Service.service"],
            cmdArrForStop: ["stop", "Schedular-Management-Service.service"],
            cmdArrForActiveCheck: ["is-active", "Schedular-Management-Service.service"],
        };
    }
};

const parseOlderData = async (params) => {
    var parser = new xml2js.Parser();

    let configString = await getFileData(configUrl);
    const config = JSON.parse(configString);
    let { device, event, gateway } = config;

    var builder = new xml2js.Builder({ headless: true });
    var xmlForDevice = builder.buildObject(params[0]);
    var xmlForEvent = builder.buildObject(params[1]);
    var xmlForGateway = builder.buildObject(params[2]);

    await Promise.all([
        fs.writeFile(device, xmlForDevice, { encoding: "utf-8", flag: "w" }),
        fs.writeFile(event, xmlForEvent, { encoding: "utf-8", flag: "w" }),
        fs.writeFile(gateway, xmlForGateway, { encoding: "utf-8", flag: "w" }),
    ]);

    return true;
};

app.post("/save", async (req, res, next) => {
    let isStarted = false;
    try {
        const deviceObj = req.body.apiResponse.res.device;
        const eventObj = req.body.apiResponse.res.event;
        const gatewayObj = req.body.apiResponse.res.gateway;
        const data = await parseOlderData([deviceObj, eventObj, gatewayObj]);

        // changed flags in Monitoring_Data
        const paramsArray = [
            getDBBaseObj("configstatus", dbTypeEnumerator.INT, 1),
            getDBBaseObj("serverstatus", dbTypeEnumerator.INT, 1),
        ];

        const paramsArrayConverted = await getConvertedParameterStructure(paramsArray);
        const queryForMonitoringServerUpdate = getMonitoringDataUpdateSQL(
            paramsArrayConverted.name[0],
            paramsArrayConverted.name[1]
        );

        const response = await modifyDBWithTransaction(
            [queryForMonitoringServerUpdate],
            [paramsArrayConverted.paramOrBindingObj],
            [-1]
        );

        if (response) {
            const cmdObj = getCmd();
            isStarted = await callScheduler(cmdObj);
        }
    } catch (err) {
        return res.json(err);
    }
    res.json({ msg: isStarted ? "Done" : "Error" });
});

app.post("/getConfigurations", async (req, res, next) => {
    let confFiles = {};
    try {
        confFiles = await getConfData();
        // console.log({'res': confFiles});
    } catch (err) {
        return res.json(err);
    }
    res.json({ res: confFiles });
});

async function callNotifier(serverID, configs) {
    const protocolConfig = await protocolConfigPromise;
    const postUrl =
        protocolConfig.protocol +
        serverID +
        protocolConfig.localPort +
        "/configUpdateAPI/setNewConfig/";
    // const postUrl = protocolConfig.protocol + serverID + ":6000" + "/configUpdateAPI/setNewConfig/";

    // const result = await fetch(postUrl, {signal: controller.signal}, {
    const result = await fetch(postUrl, {
        method: "POST",
        headers: {
            Accept: "text/xml",
            "Content-Type": "text/xml",
        },

        body: JSON.stringify({
            device_value: configs.device,
            gateway_value: configs.gateway,
            event_value: configs.event,
        }),
    });
    const logFileData = await result.text();
    return logFileData;
}

app.post("/runNotification", async (req, res, next) => {
    let output = false;
    try {
        const confFiles = await getConfData(true);
        const result = await callNotifier(req.body.serverIP, confFiles);
        var parser = new xml2js.Parser();
        const localResponse = await parser.parseStringPromise(result);
        output = localResponse.ROOT.STATUS[0] === "OK";
    } catch (err) {
        output = false;
        // return res.json(err);
    }
    res.json({ msg: output });
});

app.post("/runScheduler", async (req, res, next) => {
    let output = false;
    try {
        const cmdObj = getCmd();
        output = await callScheduler(cmdObj);
    } catch (err) {
        output = false;
        // return res.json(err);
    }
    res.json({ msg: output });
});

app.post("/sentDirectConfig", async (req, res, next) => {
    let totalConf = "<ROOT></ROOT>";
    res.set("Content-Type", "text/xml");
    try {
        const configs = await getConfData(true);
        totalConf =
            "<ROOT><DEVICECONFIG>" +
            configs.device +
            "</DEVICECONFIG><GATEWAYCONFIG>" +
            configs.gateway +
            "</GATEWAYCONFIG><EVENTCONFIG>" +
            configs.event +
            "</EVENTCONFIG></ROOT>";
        console.log(totalConf);
    } catch (err) {
        console.log(err);
        // return res.json(err);
    }
    res.send(totalConf);
});

module.exports = app;

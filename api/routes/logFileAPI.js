const { getDBResult } = require("../database/db");
var express = require("express");
const fetch = require("node-fetch");
const { monitoringServerIDSelectDBQueryHeader } = require("../database/dbQueries");
const { protocolConfigPromise } = require("../protocol/protocol");
const { dbNameEnum } = require("../constants/server_constants");

var app = express();

app.use(express.json());

//gets log file based on a server ID, day of the week and result type.
async function getLogFile(serverID, day, resulttype) {
    try {
        const protocolConfig = await protocolConfigPromise;
        const postUrl =
            protocolConfig.protocol +
            serverID +
            protocolConfig.localPort +
            "/loggerAPI/getLogFile/";
        const result = await fetch(postUrl, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: day,
                resulttype: resulttype,
            }),
        });
        const logFileData = await result.json();
        return logFileData;
    } catch (error) {
        return error;
    }
}

//reponds with all Monitring_Server IDs
app.post("/getServerList", async (req, res, next) => {
    try {
        const sqlQuery = `${monitoringServerIDSelectDBQueryHeader}`;
        const serverList = await getDBResult(sqlQuery);
        res.json(serverList);
    } catch (err) {
        res.json(err);
    }
});

//requesr server ID, week day and result type
//responds with error log file.
app.post("/getLogFile", async (req, res, next) => {
    try {
        const logFile = await getLogFile(req.body.serverid, req.body.day, req.body.resulttype);
        res.json(logFile);
    } catch (err) {
        res.json(err);
    }
});

module.exports = app;

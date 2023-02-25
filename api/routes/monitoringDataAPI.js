const { getDBResult, getDBBaseObj, getConvertedParameterStructure } = require("../database/db");
var express = require("express");
const { dbTypeEnumerator, dbNameEnum } = require("../constants/server_constants");
const {
    monitoringServerSelectDBQueryHeader,
    monitoringDataSelectDBQueryHeader,
    getServerIDDBParameterObject,
} = require("../database/dbQueries");

var app = express();

app.use(express.json());

// requests a daterange, server ID, server status
// responds with Monitoring_Server list matching the filtering criteria
app.post("/getMonitoringServerListInRange", async (req, res, next) => {
    try {
        if (
            req.body.startdate == null &&
            req.body.enddate == null &&
            req.body.serverid === "Select a Server" &&
            req.body.serverstatus === "Select Server Status"
        ) {
            const serverList = await getDBResult(monitoringServerSelectDBQueryHeader);
            res.json(serverList);
        } else {
            const sqlQueryParams = [];
            var sqlQuery = `${monitoringServerSelectDBQueryHeader} where `;
            const isExistArray = [false, false, false];
            if (req.body.serverstatus !== "Select Server Status") {
                const stsVal = req.body.serverstatus === "Enabled" ? 1 : 0;
                sqlQueryParams.push(getDBBaseObj("serverStatus", dbTypeEnumerator.TINYINT, stsVal));
                isExistArray[0] = true;
            }
            if (req.body.serverid !== "Select a Server") {
                sqlQueryParams.push(getServerIDDBParameterObject(req.body.serverid));
                isExistArray[1] = true;
            }
            if (req.body.startdate != null && req.body.enddate != null) {
                sqlQueryParams.push(
                    getDBBaseObj("startDate", dbTypeEnumerator.DATE, req.body.startdate),
                    getDBBaseObj("endDate", dbTypeEnumerator.DATE, req.body.enddate)
                );
                isExistArray[2] = true;
            }

            const sqlQueryParamsConverted = await getConvertedParameterStructure(sqlQueryParams);

            let idx = 0;
            if (isExistArray[0]) {
                sqlQuery += `ServerStatus=${sqlQueryParamsConverted.name[idx]} `;
                idx++;
            }

            if (isExistArray[1]) {
                const linker = !isExistArray[0] ? "" : " and ";
                sqlQuery += linker + `ServerID=${sqlQueryParamsConverted.name[idx]} `;
                idx++;
            }

            if (isExistArray[2]) {
                const linker = !isExistArray[0] && !isExistArray[1] ? "" : " and ";
                sqlQuery +=
                    linker +
                    `StatusDateTime between ${sqlQueryParamsConverted.name[idx]} and ${
                        sqlQueryParamsConverted.name[idx + 1]
                    }`;
            }

            const paramOrBindingArray = sqlQueryParamsConverted.paramOrBindingObj;

            const serverList = await getDBResult(sqlQuery, paramOrBindingArray);
            res.json(serverList);
        }
    } catch (err) {
        res.json(err);
    }
});

// requests a server ID
// responds with Monitoring_Data list matching the server ID
app.post("/getMonitoringDataonServerIDList", async (req, res, next) => {
    try {
        const sqlQueryParams = [getServerIDDBParameterObject(req.body.serverid)];
        const sqlQueryParamsConverted = await getConvertedParameterStructure(sqlQueryParams);
        const sqlQuery = `${monitoringDataSelectDBQueryHeader} where ServerId=${sqlQueryParamsConverted.name[0]}`;
        const params = sqlQueryParamsConverted.paramOrBindingObj;

        const serviceList = await getDBResult(sqlQuery, params);
        res.json(serviceList);
    } catch (err) {
        res.json(err);
    }
});

module.exports = app;

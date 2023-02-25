var express = require("express");
const { getDBBaseObj, getDBResult, getConvertedParameterStructure } = require("../database/db");
const { dbTypeEnumerator, dbNameEnum } = require("../constants/server_constants");
const {
    monitoringDetailsSelectDBQueryHeader,
    getServerIDDBParameterObject,
} = require("../database/dbQueries");

var app = express();

app.use(express.json());

//creating SQL code and parameter obj list for Monitoring_Details
const getMonitoringDetailsonServerIDListQuery = async (serverId) => {
    const sqlQueryParams = [getServerIDDBParameterObject(serverId)];
    const sqlQueryParamsConverted = await getConvertedParameterStructure(sqlQueryParams);
    const params = sqlQueryParamsConverted.paramOrBindingObj;

    return {
        sqlQueryParams: params,
        sqlQuery: `${monitoringDetailsSelectDBQueryHeader} where ServerId=${sqlQueryParamsConverted.name[0]}`,
    };
};

// requests a daterange, service name, service status
// responds with Monitoring_Details list matching the filtering criteria
app.post("/getMonitoringDetailsListonServerIDInRange", async (req, res, next) => {
    try {
        if (req.body.serverid == null) {
            throw new Error("No ServerID Found");
        }
        if (
            req.body.startdate == null &&
            req.body.enddate == null &&
            req.body.servicename === "Select a Service" &&
            req.body.servicestatus === "Select Service Status"
        ) {
            const sqlObj = await getMonitoringDetailsonServerIDListQuery(req.body.serverid);
            const detailList = await getDBResult(sqlObj.sqlQuery, sqlObj.sqlQueryParams);
            res.json(detailList);
        } else {
            const sqlQueryParams = [];
            sqlQueryParams.push(getServerIDDBParameterObject(req.body.serverid));

            const isExistArray = [false, false, false];

            if (req.body.servicestatus !== "Select Service Status") {
                const stsVal =
                    req.body.servicestatus === "Enabled"
                        ? 1
                        : req.body.servicestatus === "Disabled"
                        ? 0
                        : 2;
                sqlQueryParams.push(
                    getDBBaseObj("serviceStatus", dbTypeEnumerator.TINYINT, stsVal)
                );
                isExistArray[0] = true;
            }
            if (req.body.servicename !== "Select a Service") {
                sqlQueryParams.push(
                    getDBBaseObj("serviceName", dbTypeEnumerator.VARCHAR, req.body.servicename)
                );
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
            var sqlQuery = `${monitoringDetailsSelectDBQueryHeader} where ServerId=${sqlQueryParamsConverted.name[0]}`;

            var idx = 1;
            if (isExistArray[0]) {
                sqlQuery += ` and ServiceStatus=${sqlQueryParamsConverted.name[idx]} `;
                idx++;
            }

            if (isExistArray[1]) {
                sqlQuery += ` and ServiceName=${sqlQueryParamsConverted.name[idx]} `;
                idx++;
            }

            if (isExistArray[2]) {
                sqlQuery += ` and LogDateTime between ${sqlQueryParamsConverted.name[idx]} and ${
                    sqlQueryParamsConverted.name[idx + 1]
                }`;
            }

            const params = sqlQueryParamsConverted.paramOrBindingObj;

            const detailList = await getDBResult(sqlQuery, params);
            res.json(detailList);
        }
    } catch (err) {
        res.json(err);
    }
});

module.exports = app;

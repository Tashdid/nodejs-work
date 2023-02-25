var express = require("express");
const {
  getDBBaseObj,
  getDBResult,
  getConvertedParameterStructure,
  getJoinString,
} = require("../database/db");
const {
  dbTypeEnumerator,
  dbNameEnum,
} = require("../constants/server_constants");
const {
  monitoringDataSelectDBQueryHeader,
  monitoringServerSelectDBQueryHeader,
  getCountQuery,
  getServerIDDBParameterObject,
  getRowNumberQueryParameterObject,
} = require("../database/dbQueries");

var app = express();

app.use(express.json());

//creating SQL code and parameter obj list for Monitoring_Data
const getDBQueryObjForMonitoringData = async (serverID) => {
  try {
    const serviceDataQueryParams = [getServerIDDBParameterObject(serverID)];
    const serviceListQueryParamsConverted =
      await getConvertedParameterStructure(serviceDataQueryParams);

    return {
      sqlQuery: `${monitoringDataSelectDBQueryHeader} \
            where ServerID=${serviceListQueryParamsConverted.name[0]} \
            ORDER BY ServiceStatus, StatusTime DESC`,
      params: serviceListQueryParamsConverted,
    };
  } catch (err) {
    return err;
  }
};

//gets Monitoring_Server based on which pageno and how many rows.
//gets corresponding Monitoring_Data for the Monitoring_Server
app.post("/getSortedSlidingWindowServerList", async (req, res, next) => {
  try {
    const noOfRows = req.body.noofrows;
    let pageNo = req.body.pageno;

    const sqlQueryForCount = getCountQuery(`Monitoring_Server`);

    const serverCount = await getDBResult(sqlQueryForCount);

    const serverCountInInt = serverCount[0].COUNT;
    if (serverCountInInt == 0) return res.json({ pageno: 0, serverlist: [] });

    const availablePagesCount =
      Math.floor(serverCountInInt / noOfRows) +
      (serverCountInInt % noOfRows === 0 ? 0 : 1);

    pageNo = pageNo > availablePagesCount ? availablePagesCount : pageNo;

    const serverDataQueryParams = [
      getDBBaseObj("offSet", dbTypeEnumerator.INT, (pageNo - 1) * noOfRows),
      getRowNumberQueryParameterObject(parseInt(noOfRows)),
    ];

    const serverDataQueryParamsConverted = await getConvertedParameterStructure(
      serverDataQueryParams
    );

    const joinString = await getJoinString();
    const sqlQueryForServerData = `Select a1.SERVERID, a1.SERVERNAME, a1.SERVERSTATUS, a1.SERVERDETAIL, a1.STATUSDATETIME,
            SERVICENAME, SERVICESTATUS, STATUSTIME from
            (SELECT SERVERID, SERVERNAME, SERVERSTATUS, SERVERDETAIL, STATUSDATETIME
            FROM Monitoring_Server ORDER BY ServerStatus, StatusDateTime
            DESC OFFSET ${serverDataQueryParamsConverted.name[0]} ROWS \
            FETCH NEXT ${serverDataQueryParamsConverted.name[1]} ROWS ONLY)
            ${joinString} a1 left outer join Monitoring_Data on a1.ServerId = Monitoring_Data.ServerId
            ORDER BY ServiceStatus, StatusTime DESC`;

    const fullList = await getDBResult(
      sqlQueryForServerData,
      serverDataQueryParamsConverted.paramOrBindingObj
    );

    const unfilteredServerList = fullList.map((row) => {
      return {
        SERVERID: row.SERVERID,
        SERVERNAME: row.SERVERNAME,
        SERVERSTATUS: row.SERVERSTATUS,
        SERVERDETAIL: row.SERVERDETAIL,
        STATUSDATETIME: row.STATUSDATETIME,
      };
    });

    const filteredServerList = unfilteredServerList.filter((obj, idx) => {
      return (
        unfilteredServerList.findIndex((objNested) => {
          return objNested.SERVERID == obj.SERVERID;
        }) == idx
      );
    });

    const unfilteredServiceList = fullList.map((row) => {
      return {
        SERVERID: row.SERVERID,
        SERVICENAME: row.SERVICENAME,
        SERVICESTATUS: row.SERVICESTATUS,
        STATUSTIME: row.STATUSTIME,
      };
    });

    const serverList = filteredServerList.map((row) => {
      return {
        SERVERID: row.SERVERID,
        SERVERNAME: row.SERVERNAME,
        SERVERSTATUS: row.SERVERSTATUS,
        SERVERDETAIL: row.SERVERDETAIL,
        STATUSDATETIME: row.STATUSDATETIME,
        SERVICES: unfilteredServiceList.filter((objNested) => {
          return (
            row.SERVERID == objNested.SERVERID && objNested.SERVICENAME != null
          );
        }),
      };
    });

    if (serverCount[0].COUNT > 0 && serverList.length > 0) {
      serverList[0].COUNT = serverCount[0].COUNT;
    }

    res.json({ pageno: pageNo, serverlist: serverList });
  } catch (err) {
    res.json(err);
  }
});

//gets Monitoring_Data based on a server id
app.post("/getSortedServiceListOnServerData", async (req, res, next) => {
  try {
    const serviceListObj = await getDBQueryObjForMonitoringData(
      req.body.serverid
    );

    const serviceList = await getDBResult(
      serviceListObj.sqlQuery,
      serviceListObj.params.paramOrBindingObj
    );
    res.json(serviceList);
  } catch (err) {
    res.json(err);
  }
});

//gets a single Monitoring_Server and all of it's Monitoring_Data based on a server id
app.post("/getServerDataOnServerID", async (req, res, next) => {
  try {
    const serverOrServiceQueryObj = await getDBQueryObjForMonitoringData(
      req.body.serverid
    );

    const sqlQuery = `${monitoringServerSelectDBQueryHeader} \
            Where ServerId=${serverOrServiceQueryObj.params.name[0]}`;

    const params = serverOrServiceQueryObj.params.paramOrBindingObj;
    const [server, serviceList] = await Promise.all([
      getDBResult(sqlQuery, params),
      getDBResult(serverOrServiceQueryObj.sqlQuery, params),
    ]);

    server[0].SERVICES = serviceList;
    res.json(server);
  } catch (err) {
    res.json(err);
  }
});

module.exports = app;

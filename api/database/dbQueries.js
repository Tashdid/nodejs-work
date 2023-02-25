const {getDBBaseObj} = require('./db');
const {dbTypeEnumerator} = require('../constants/server_constants');

const monitoringServerSelectDBQueryHeader =
    `SELECT SERVERID, SERVERNAME, SERVERSTATUS, SERVERDETAIL, \
STATUSDATETIME, CONFIGSTATUS FROM Monitoring_Server `;

const monitoringServerIDSelectDBQueryHeader =
    `SELECT SERVERID FROM Monitoring_Server `;

const monitoringDataSelectDBQueryHeader =
    `SELECT SERVERID, SERVICENAME, SERVICESTATUS, STATUSTIME \
FROM Monitoring_Data `;

const monitoringDetailsSelectDBQueryHeader =
    `select SERVERID, SERVICENAME, LOGDATETIME, SERVICESTATUS, SERVICEMESSAGE \
from Monitoring_Details `;

const resultFailureSelectDBQueryHeader =
    `select RESULTID, RESULTTYPE, RELEVENTID, RELEVENTTYPE, COMMANDID, INFO, UPDATEDTIME \
from Result_Failure_View`;  // From Ataur Vai.

const systemUsersDetailsSelectDBQueryHeader =
    `SELECT USERNAME, EMPLOYEEID, USEREMAIL, FIRSTNAME, LASTNAME \
FROM System_Users_Details`;

// get row count for a table
const getCountQuery = (tableName) =>
    `Select COUNT(*) as COUNT from ${tableName}`;

// creating a parameter obj called rowNumber and setting it's type and value.
const getRowNumberQueryParameterObject = (val) =>
    getDBBaseObj('rowNumber', dbTypeEnumerator.INT, val);

// creating a parameter obj called serverID and setting it's type and value.
const getServerIDDBParameterObject = (val) =>
    getDBBaseObj('serverID', dbTypeEnumerator.CHAR, val);

module.exports = Object.freeze({
    monitoringServerSelectDBQueryHeader: monitoringServerSelectDBQueryHeader,
    monitoringServerIDSelectDBQueryHeader:
        monitoringServerIDSelectDBQueryHeader,
    monitoringDataSelectDBQueryHeader: monitoringDataSelectDBQueryHeader,
    monitoringDetailsSelectDBQueryHeader: monitoringDetailsSelectDBQueryHeader,
    resultFailureSelectDBQueryHeader: resultFailureSelectDBQueryHeader,
    systemUsersDetailsSelectDBQueryHeader:
        systemUsersDetailsSelectDBQueryHeader,
    getCountQuery: getCountQuery,
    getRowNumberQueryParameterObject: getRowNumberQueryParameterObject,
    getServerIDDBParameterObject: getServerIDDBParameterObject,
});

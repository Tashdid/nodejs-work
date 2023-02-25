var { promises: fs } = require("fs");
const Base = require("./base");
const MSSQL = require("./mssql");
const Oracle = require("./oracle");
const { dbConfigUrl } = require("../constants/server_constants");
const { getFileData } = require("../constants/helper");

/*
    calling asynchronus function and using promises means all these functions are resolved once 
    and every time we await the promise we only get the resolved result of the promise.
    If we call the asynchronus function directly, it will lead to creation of new promise and 
    resolving them for each call.
*/

//asynchronously reading db configuration file
const getDBConfiguration = async (configuration) => {
    try {
        var data = await getFileData(configuration);
        const dbConfig = JSON.parse(data);
        return dbConfig;
    } catch (err) {
        return err;
    }
};

const dbConfiguration = getDBConfiguration(dbConfigUrl);
const dbConfigPromise = dbConfiguration;

// setting up MSSQL/Oracle obj based on the configuration
const initClass = async () => {
    try {
        const dbConfig = await getDBConfiguration(dbConfigUrl);
        let db = new Base();
        switch (dbConfig.dbname) {
            case "MSSQL":
                db = new MSSQL(dbConfig);
                break;
            case "ORACLE":
                db = new Oracle(dbConfig);
                break;
        }
        return db;
    } catch (err) {
        return err;
    }
};

const dbObjPromise = initClass();

// getting a single pool/two pools depending on db type.
const getPoolPromise = async (index) => {
    try {
        const dbObj = await dbObjPromise;
        const dbConfig = await getDBConfiguration(dbConfigUrl);
        dbObj._setConfig(dbConfig);
        return dbObj._getPoolPromise(index);
    } catch (err) {
        return err;
    }
};

var poolPromise = getPoolPromise(-1);

// db parameter obj strucure
const getDBBaseObj = (name, type, value) => {
    return {
        name: name,
        type: type,
        value: value,
    };
};

//query execution result
const getDBResult = async (
    sqlQuery,
    // isDBNameTigerITSystemOrMDM,
    params = [],
    isInsertSql = false
) => {
    try {
        const dbObj = await dbObjPromise;
        const pool = await poolPromise;
        const queryResult = await dbObj._getDBResult(
            pool,
            sqlQuery,
            // isDBNameTigerITSystemOrMDM,
            params,
            isInsertSql
        );
        return queryResult;
    } catch (error) {}
};

//query execution result
const modifyDBWithTransaction = async (sqlQueryArray, paramsArray, rowArray) => {
    try {
        const dbObj = await dbObjPromise;
        const pool = await poolPromise;
        const queryResult = await dbObj._modifyDBWithTransaction(
            pool,
            sqlQueryArray,
            paramsArray,
            rowArray
        );
        return queryResult;
    } catch (error) {
        return false;
    }
};

//changing base paramter objects to suitable paramter objects based on dbconfig
const getConvertedParameterStructure = async (params) => {
    try {
        const dbObj = await dbObjPromise;
        return dbObj._getConvertedParameterStructure(params);
    } catch (error) {}
};

//getting where clause for result_failure data based on today's date
const getWhereClauseForCurrentResultFailure = async () => {
    try {
        const dbObj = await dbObjPromise;
        return dbObj._getWhereClauseForCurrentResultFailure();
    } catch (err) {
        return err;
    }
};

const currentResultFailureWhereClausePromise = getWhereClauseForCurrentResultFailure();

//closing connection pool(s)
const closingPool = async () => {
    try {
        const dbObj = await dbObjPromise;
        const pool = await poolPromise;
        await dbObj._closingPool(pool);
    } catch (err) {}
};

const getJoinString = async () => {
    try {
        const dbObj = await dbObjPromise;
        return dbObj._getJoinString();
    } catch (error) {}
};

module.exports = {
    getDBBaseObj,
    getDBResult,
    getConvertedParameterStructure,
    getPoolPromise,
    getJoinString,
    modifyDBWithTransaction,
    currentResultFailureWhereClausePromise,
    poolPromise,
    dbConfigPromise,
    closingPool,
};

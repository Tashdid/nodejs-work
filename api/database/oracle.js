const Base = require('./base');
const {dbTypeEnumerator} = require('../constants/server_constants');

class Oracle extends Base {
    oracledb;
    dbConfig;

    // setting dbConfig and lazy loading oracledb module and environments
    constructor(dbConfig) {
        super();
        this.dbConfig = dbConfig;
        process.env.ORA_SDTZ = 'UTC';
        this.oracledb = require('oracledb');
        this.oracledb.outFormat = this.oracledb.OUT_FORMAT_OBJECT;
    }

    _setConfig(dbConfig) {
        this.dbConfig = dbConfig;
    }

    // getting Oracle paramter types
    getTypeList() {
        return [
            this.oracledb.DB_TYPE_VARCHAR,
            this.oracledb.DB_TYPE_NUMBER,
            this.oracledb.DB_TYPE_CHAR,
            this.oracledb.DB_TYPE_TIMESTAMP,
            this.oracledb.DB_TYPE_NUMBER,
        ];
    }

    //-------------------------------
    // creating Oracle Pool Promises
    getOraclePoolInstance = (oracleconfig) => {
        return this.oracledb.createPool(oracleconfig)
            .then((pool) => {
                console.log(`Connected to Oracle db:${oracleconfig.poolAlias}`);
                return pool;
            })
            .catch(
                (err) => console.log(
                    'Database Connection Failed! Bad Config: ', err));
    };

    _getPoolPromise(index) {
        const oraclemonitorconfig = this.dbConfig.oraclemonitorconfig;

        return index == -1 ? [this.getOraclePoolInstance(oraclemonitorconfig)] :
                             this.getOraclePoolInstance(oraclemonitorconfig);
    }

    //-------------------------------

    // Oracle query execution result
    async _getDBResult(pools, sqlQuery, params, isInsertSql) {
        let connection;
        let result;
        try {
            const pool = await pools[0];
            connection = await pool.getConnection();
            result = await (
                !isInsertSql ?
                    connection.execute(sqlQuery, params) :
                    connection.execute(sqlQuery, params, {autoCommit: true}));
        } catch (error) {
            // console.log(error);
            return error;
        } finally {
            if (connection) {
                try {
                    await connection.close();
                    return !isInsertSql ? result.rows : result.rowsAffected;
                } catch (err) {
                    return err;
                }
            }
        }
    }

    // Oracle query execution result
    async _modifyDBWithTransaction(
        pools, sqlQueryArray, paramsArray, rowArray) {
        let connection;
        let result;
        let response = true;
        let idx = 0;
        try {
            const pool = await pools[0];
            connection = await pool.getConnection();
            let sqlQueriesLen = sqlQueryArray.length;
            if (sqlQueriesLen == 0) return false;
            for (idx = 0; idx < sqlQueriesLen - 1; ++idx) {
                result = await connection.execute(
                    sqlQueryArray[idx], paramsArray[idx]);
                if (rowArray[idx] !== -1 &&
                    rowArray[idx] !== result.rowsAffected) {
                    response = false;
                    break;
                }
            }

            if (response) {
                result = await connection.execute(
                    sqlQueryArray[idx], paramsArray[idx]);
                if (rowArray[idx] !== -1 &&
                    rowArray[idx] !== result.rowsAffected)
                    response = false;
                else
                    await connection.commit();
            }
        } catch (error) {
            response = false;
            console.log(error);
        } finally {
            if (connection) {
                try {
                    await connection.close();
                    return response;
                } catch (err) {
                    return false;
                }
            }
        }
    }

    // changing base paramter objects to suitable Oracle paramter objects based
    // on dbconfig
    _getConvertedParameterStructure(params) {
        const nameList = [];
        params.map((param) => {
            nameList.push(`:${param.name}`);
            return;
        });
        const paramsOrBindingObjList = [];
        params.map((param) => {
            paramsOrBindingObjList.push({
                type: this.getTypeList()[param.type],
                val: param.type === dbTypeEnumerator.DATE ?
                    new Date(param.value) :
                    param.value,
            });
            return;
        });
        return {name: nameList, paramOrBindingObj: paramsOrBindingObjList};
    }

    // getting Oracle where clause for result_failure data based on today's date
    _getWhereClauseForCurrentResultFailure() {
        return ` trunc(updatedtime) = trunc(sysdate)`;
    }

    // closing Oracle connection pools
    async _closingPool(pool) {
        try {
            console.log('closing oracle pool......');
            const poolMonitor = await pool[0];
            await poolMonitor.close();
            console.log('oracle pool is now closed......');
        } catch (err) {
            return err;
        }
    }

    _getJoinString() {
        return '';
    }
}

module.exports = Oracle;

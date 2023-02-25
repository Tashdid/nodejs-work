const Base = require('./base');
const {resultType} = require('../constants/server_constants');

class MSSQL extends Base {
    sql;
    dbConfig;

    // setting dbConfig and lazy loading mssql module
    constructor(dbConfig) {
        super();
        this.dbConfig = dbConfig;
        this.sql = require('mssql');
    }

    _setConfig(dbConfig) {
        this.dbConfig = dbConfig;
    }

    // getting MSSQL paramter types
    getTypeList() {
        return [
            this.sql.VarChar, this.sql.TinyInt, this.sql.Char,
            this.sql.DateTime, this.sql.Int
        ];
    }

    //-------------------------------
    // creating an MSSQL Pool Promise
    getMSSQLConnectionPoolInstance(mssqlconfig) {
        return new this.sql.ConnectionPool(mssqlconfig)
            .connect()
            .then((pool) => {
                console.log('Connected to MSSQL');
                return pool;
            })
            .catch(
                (err) => console.log(
                    'Database Connection Failed! Bad Config: ', err));
    }

    _getPoolPromise(index) {
        const mssqlconfig = this.dbConfig.mssqlconfig;
        return index == 0 ? this.getMSSQLConnectionPoolInstance(mssqlconfig) :
                            [this.getMSSQLConnectionPoolInstance(mssqlconfig)];
    }
    //-------------------------------

    // MSSQL query execution result
    async _getDBResult(pool, sqlQuery, params, isInsertSql) {
        try {
            const poolConnection = await pool[0];
            const req = poolConnection.request();
            params.forEach((sqlParam) => {
                req.input(sqlParam.name, sqlParam.type, sqlParam.value);
            });
            const result = await req.query(sqlQuery);
            return !isInsertSql ? result.recordset : result.rowsAffected[0];
        } catch (err) {
            return err;
        }
    }

    // changing base paramter objects to suitable MSSQL paramter objects based
    // on dbconfig
    _getConvertedParameterStructure(params) {
        const nameList = [];
        params.map((param) => {
            nameList.push(`@${param.name}`);
            return;
        });
        const paramsOrBindingObjList = [];
        params.map((param) => {
            paramsOrBindingObjList.push({
                name: param.name,
                type: this.getTypeList()[param.type],
                value: param.value,
            });
            return;
        });
        return {name: nameList, paramOrBindingObj: paramsOrBindingObjList};
    }

    // getting MSSQL where clause for result_failure data based on today's date
    _getWhereClauseForCurrentResultFailure() {
        return ` cast(updatedtime as date) = cast(getdate() as date)`;
    }

    // closing MSSQL connection pool
    async _closingPool(pool) {
        try {
            console.log('closing mssql pool.....');
            const poolConnection = await pool[0];
            poolConnection.close();
            console.log('mssql pool are now closed......');
        } catch (err) {
            return err;
        }
    }

    // MSSQL query execution result
    async _modifyDBWithTransaction(pool, sqlQueryArray, paramsArray, rowArray) {
        let transaction = null;
        let response = true;
        try {
            let sqlQueriesLen = sqlQueryArray.length;
            if (sqlQueriesLen === 0) return false;
            const poolConnection = await pool[0];
            transaction = new this.sql.Transaction(poolConnection);
            await transaction.begin();
            for (let idx = 0; idx < sqlQueriesLen; ++idx) {
                const req = new this.sql.Request(transaction);
                paramsArray[idx].forEach((sqlParam) => {
                    req.input(sqlParam.name, sqlParam.type, sqlParam.value);
                });
                const result = await req.query(sqlQueryArray[idx]);
                if (rowArray[idx] !== -1 &&
                    rowArray[idx] !== result.rowsAffected[0]) {
                    response = false;
                    break;
                }
            }
            if (response)
                await transaction.commit();
            else
                await transaction.rollback();

            return response;
        } catch (err) {
            if (transaction != null) await transaction.rollback();
            return false;
        }
    }
    _getJoinString() {
        return 'as';
    }
}

module.exports = MSSQL;

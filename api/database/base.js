//check Oracle and MSSQL classes for more details on implementations
class Base {
    _setConfig(dbConfig) {}
    _getPoolPromise(index) {}
    async _closingPool(pool) {}
    async _getDBResult(pool, sqlQuery, params, isInsertSql) {}
    _getConvertedParameterStructure() {}
    _getWhereClauseForCurrentResultFailure() {}
    _getJoinString() {}
    async _modifyDBWithTransaction(pools, sqlQueryArray, paramsArray, rowArray) {}
}

module.exports = Base;

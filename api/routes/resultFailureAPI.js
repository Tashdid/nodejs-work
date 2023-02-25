var express = require("express");
const {
    getDBBaseObj,
    currentResultFailureWhereClausePromise,
    getDBResult,
    getConvertedParameterStructure,
} = require("../database/db");
const { dbTypeEnumerator, dbNameEnum } = require("../constants/server_constants");
const { resultFailureSelectDBQueryHeader } = require("../database/dbQueries");

var app = express();

app.use(express.json());

//creating two parameter objects called startdate-enddate and setting their type as Date and their value.
const getDateObjects = (startDate, endDate) => {
    return [
        getDBBaseObj("startdate", dbTypeEnumerator.DATE, startDate),
        getDBBaseObj("enddate", dbTypeEnumerator.DATE, endDate),
    ];
};

/*Creating two parameter objects called resultTypeMinRange-resultTypeMaxRange
and setting their type as INT and their value.*/
const getResultTypeRangeObjects = (resultMinRange, resultMaxRange) => {
    return [
        getDBBaseObj("resultTypeMinRange", dbTypeEnumerator.INT, resultMinRange),
        getDBBaseObj("resultTypeMaxRange", dbTypeEnumerator.INT, resultMaxRange),
    ];
};

// creating the SQL string based on different filters used in the "/getResultFailure" API.
const getResultFailuresWithFilterSQL = async (startdate, enddate, resulttype) => {
    var sqlQuery = `${resultFailureSelectDBQueryHeader} where `;
    var resultTypeMinRange = 0,
        resultTypeMaxRange = 0;
    if (resulttype !== "Select Result Type") {
        switch (resulttype) {
            case "Device":
                resultTypeMinRange = 0;
                resultTypeMaxRange = 99;
                break;
            case "Gateway":
                resultTypeMinRange = 100;
                resultTypeMaxRange = 199;
                break;
            case "Event":
                resultTypeMinRange = 201;
                resultTypeMaxRange = 203;
                break;
            default:
                break;
        }
    }

    let sqlQueryParams = [];

    var isExist = [false, false];
    if (startdate != null && enddate != null) {
        const dateDBObjArray = getDateObjects(startdate, enddate);
        sqlQueryParams.push(dateDBObjArray[0]);
        sqlQueryParams.push(dateDBObjArray[1]);
        isExist[0] = true;
    }

    if (resulttype !== "Select Result Type") {
        if (!isExist[0]) {
            var endDateForToday = new Date();
            endDateForToday.setHours(23, 59, 59, 59);

            var startDateThirtyDaysFromToday = new Date(
                new Date().setDate(new Date().getDate() - 30)
            );
            startDateThirtyDaysFromToday.setHours(0, 0, 0, 0);

            var endDateForTodayIso = endDateForToday.toISOString();
            var startDateThirtyDaysFromTodayIso = startDateThirtyDaysFromToday.toISOString();

            const dateTypeObj = getDateObjects(startDateThirtyDaysFromTodayIso, endDateForTodayIso);
            sqlQueryParams.push(dateTypeObj[0]);
            sqlQueryParams.push(dateTypeObj[1]);
        }
        const resultTypeObj = getResultTypeRangeObjects(resultTypeMinRange, resultTypeMaxRange);
        sqlQueryParams.push(resultTypeObj[0]);
        sqlQueryParams.push(resultTypeObj[1]);
        isExist[1] = true;
    }

    const sqlQueryParamsConverted = await getConvertedParameterStructure(sqlQueryParams);

    sqlQuery += ` updatedtime between ${sqlQueryParamsConverted.name[0]} and ${sqlQueryParamsConverted.name[1]} `;

    if (isExist[1]) {
        sqlQuery += ` and Resulttype>=${sqlQueryParamsConverted.name[2]} and Resulttype<=${sqlQueryParamsConverted.name[3]}`;
    }

    const params = sqlQueryParamsConverted.paramOrBindingObj;

    return { sqlQueryParams: params, sqlQuery: sqlQuery };
};

// requests a daterange, resulttype
// responds with Result_Failures list matching the filtering criteria
app.post("/getResultFailure", async (req, res, next) => {
    try {
        var resultFailureList = [];
        if (
            req.body.resulttype === "Select Result Type" &&
            req.body.startdate == null &&
            req.body.enddate == null
        ) {
            const currentResultFailureWhereClause = await currentResultFailureWhereClausePromise;
            const sqlQuery = `${resultFailureSelectDBQueryHeader} where ${currentResultFailureWhereClause}`;
            resultFailureList = await getDBResult(sqlQuery); // From Ataur Vai
        } else {
            const sqlObject = await getResultFailuresWithFilterSQL(
                req.body.startdate,
                req.body.enddate,
                req.body.resulttype
            );
            resultFailureList = await getDBResult(sqlObject.sqlQuery, sqlObject.sqlQueryParams);
        }
        res.json(resultFailureList);
    } catch (err) {
        res.json(err.toString());
    }
});

module.exports = app;

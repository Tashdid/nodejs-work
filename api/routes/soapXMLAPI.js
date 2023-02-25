var express = require("express");

var soapClientCheck = require("../soap/soapClientCheck");
const { getStringToJSONObject } = require("../soap/helperSoapXMLParseFunctions");

const {
    // eventSoapClient,
    // deviceSoapClient,
    // gatewaySoapClient,
    soapClientList,
    getResultXML,
} = require("../soap/soapConsumeFunctions");

const server_constants = require("../constants/server_constants");
const { getDBBaseObj, getDBResult, getConvertedParameterStructure } = require("../database/db");
const { dbTypeEnumerator, dbNameEnum } = require("../constants/server_constants");
const {
    resultFailureSelectDBQueryHeader,
    getCountQuery,
    getRowNumberQueryParameterObject,
} = require("../database/dbQueries");
const resultTypeList = server_constants.resultType;

var app = express();

app.use(express.json());

// requests a result ID and a result type
// responds with SOAP XML for RetrieveResult/RetrievwHistory based on result id and type
app.post("/getSoapDataOnResultID", soapClientCheck, async (req, res, next) => {
    try {
        const resultID = req.body.resultid;
        if (resultID == null) throw new Error("Result ID can't be found!");
        const resultType = req.body.resulttype;
        let resultTypeInInt = -1;
        let args = { sKey: "" };
        let client = null;

        switch (resultType) {
            case "Gateway":
                resultTypeInInt = resultTypeList.Gateway;
                args.sResultID = resultID;
                client = await soapClientList[resultTypeList.Gateway];
                break;
            case "Device":
                resultTypeInInt = resultTypeList.Device;
                args.sResultID = resultID;
                client = await soapClientList[resultTypeList.Device];
                break;
            case "Event":
                resultTypeInInt = resultTypeList.Event;
                args.sXmlParameters = `<PARAMETERS><EVENTHISTORYID>${resultID}</EVENTHISTORYID><MAXCOUNT>1</MAXCOUNT></PARAMETERS>`;
                client = await soapClientList[resultTypeList.Event];
                break;
            default:
                throw new Error("ResultType doesn't match!");
        }
        var resultXML = await getResultXML(client, args, resultTypeInInt);
        // console.log(resultXML);

        let stringifiedXML =
            resultTypeInInt === resultTypeList.Device || resultTypeInInt === resultTypeList.Gateway
                ? resultXML[0].RetrieveResultResult
                : resultXML[0].RetrieveHistoryResult;
        const XMLtoJSONbjectValue = await getStringToJSONObject(stringifiedXML, resultTypeInInt);

        // console.log(XMLtoJSONbjectValue);
        // console.log(XMLtoJSONbjectValue.RETURNS.APIPAYLOAD);

        res.json(XMLtoJSONbjectValue);
    } catch (err) {
        res.json(err);
    }
});

//responds with Result_Failures based on which pageno and how many rows.
app.post("/getSortedSlidingWindowResultFailureList", soapClientCheck, async (req, res, next) => {
    try {
        const noOfRows = req.body.noofrows;
        let pageNo = req.body.pageno;

        const sqlQueryForCount = getCountQuery(`Result_Failure_View`); // From Ataur Vai

        const resultFailureCount = await getDBResult(sqlQueryForCount); // From Ataur Vai

        const resultFailureCountInInt = resultFailureCount[0].COUNT;
        if (resultFailureCountInInt == 0) return res.json({ pageno: 0, resultfailurelist: [] });

        const availablePagesCount =
            Math.floor(resultFailureCountInInt / noOfRows) +
            (resultFailureCountInInt % noOfRows === 0 ? 0 : 1);

        pageNo = pageNo > availablePagesCount ? availablePagesCount : pageNo;

        const resultFailureDataQueryParams = [
            getDBBaseObj("offSet", dbTypeEnumerator.INT, (pageNo - 1) * noOfRows),
            getRowNumberQueryParameterObject(parseInt(noOfRows)),
        ];

        const resultFailureDataQueryParamsConverted = await getConvertedParameterStructure(
            resultFailureDataQueryParams
        );

        const sqlQueryForResultFailureData = `${resultFailureSelectDBQueryHeader} order by UPDATEDTIME desc \
            OFFSET ${resultFailureDataQueryParamsConverted.name[0]} ROWS \
            FETCH NEXT ${resultFailureDataQueryParamsConverted.name[1]} ROWS ONLY`;

        const resultFailureList = await getDBResult(
            sqlQueryForResultFailureData,
            resultFailureDataQueryParamsConverted.paramOrBindingObj
        );

        if (resultFailureCount[0].COUNT > 0 && resultFailureList.length > 0) {
            resultFailureList[0].COUNT = resultFailureCount[0].COUNT;
        }
        res.json({ pageno: pageNo, resultfailurelist: resultFailureList });
    } catch (err) {
        res.json(err);
    }
});

module.exports = app;

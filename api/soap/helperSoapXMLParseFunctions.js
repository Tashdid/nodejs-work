var xml2js = require("xml2js");
const { Constants } = require("../constants/Constants");

const DecodeConstantsMapping = require("../constants/DecodeConstantsMapping");

const {
    dummyXMLForDevice,
    dummyXMLForGateway,
    dummyXMLForEvent,
    resultType,
} = require("../constants/server_constants");
const resultTypeList = resultType;

const xmlReaderIdx = 0;

// In Javascript objects are passed by reference.
// That's why in some cases, when child objects are created/passed as parameters,
// only child object manipulation implemented.
// This automatically manipulates the source object.

//---------------------------------------
/* 
    Parsing fields with 32 length which are constants and then switching their IDs to human readable values.
*/
//decoder for fields common in all three result types
const decodeCommonPart = (resultOrEventXML) => {
    try {
        if (resultOrEventXML.hasOwnProperty("PROCESSEDSTATUSTYPEID")) {
            const processStatusType = DecodeConstantsMapping.decodeConstantsProcessedStatusTypes(
                resultOrEventXML.PROCESSEDSTATUSTYPEID[xmlReaderIdx]
            );
            if (processStatusType !== "")
                resultOrEventXML.PROCESSEDSTATUSTYPEID[xmlReaderIdx] = processStatusType;
        }
        if (resultOrEventXML.hasOwnProperty("DATACOLLECTIONTYPEID")) {
            const dataCollectionType = DecodeConstantsMapping.decodeConstantsDataCollectionTypes(
                resultOrEventXML.DATACOLLECTIONTYPEID[xmlReaderIdx]
            );
            if (dataCollectionType !== "")
                resultOrEventXML.DATACOLLECTIONTYPEID[xmlReaderIdx] = dataCollectionType;
        }
    } catch (err) {
        return err;
    }
};

// decoder for Device/Gateway
const decodeConstantsForDeviceOrGateway = (apiPayloadXML, resultTypeInInt) => {
    try {
        let resultXML = apiPayloadXML.APIPAYLOAD[xmlReaderIdx].RESULT[xmlReaderIdx];

        decodeCommonPart(resultXML);

        if (resultXML.hasOwnProperty("TYPEID")) {
            const gatewayResultType =
                resultTypeInInt === resultTypeList.Gateway
                    ? DecodeConstantsMapping.decodeConstantsGatewayResultTypes(
                          resultXML.TYPEID[xmlReaderIdx]
                      )
                    : DecodeConstantsMapping.decodeConstantsDeviceResultTypes(
                          resultXML.TYPEID[xmlReaderIdx]
                      );
            if (gatewayResultType !== "") resultXML.TYPEID[xmlReaderIdx] = gatewayResultType;
        }

        if (resultXML.hasOwnProperty("OPTION")) {
            const option = DecodeConstantsMapping.decodeConstantsResultOptions(
                resultXML.OPTION[xmlReaderIdx]
            );
            if (option !== "") resultXML.OPTION[xmlReaderIdx] = option;
        }

        if (resultXML.hasOwnProperty("GATEWAY")) {
            let gatewayResultXML = resultXML.GATEWAY[xmlReaderIdx];
            if (gatewayResultXML.hasOwnProperty("TYPEID")) {
                const gatewayType = DecodeConstantsMapping.decodeConstantsGatewayTypes(
                    gatewayResultXML.TYPEID[xmlReaderIdx]
                );
                if (gatewayType !== "") gatewayResultXML.TYPEID[xmlReaderIdx] = gatewayType;
            }
        }

        if (resultXML.hasOwnProperty("DEVICE")) {
            let deviceResultXML = resultXML.DEVICE[xmlReaderIdx];
            if (deviceResultXML.hasOwnProperty("TYPEID")) {
                const deviceType = DecodeConstantsMapping.decodeConstantsDeviceTypes(
                    deviceResultXML.TYPEID[xmlReaderIdx]
                );
                if (deviceType !== "") deviceResultXML.TYPEID[xmlReaderIdx] = deviceType;
            }
        }
    } catch (err) {
        return err;
    }
};

//decoder for Event
const decodeConstantsForEvent = (apiPayloadXML) => {
    try {
        let eventDataXML =
            apiPayloadXML.APIPAYLOAD[xmlReaderIdx].EVENTHISTORYLIST[xmlReaderIdx].EVENTHISTORY[
                xmlReaderIdx
            ];

        decodeCommonPart(eventDataXML);

        if (eventDataXML.hasOwnProperty("EVENTTYPEID")) {
            const eventType = DecodeConstantsMapping.decodeConstantsEventTypes(
                eventDataXML.EVENTTYPEID[xmlReaderIdx]
            );

            if (eventDataXML.hasOwnProperty("EVENTDEFINITIONID")) {
                let eventDefinitionID = "";
                switch (eventDataXML.EVENTTYPEID[xmlReaderIdx]) {
                    case Constants.EventTypes.DEVICE:
                        eventDefinitionID = DecodeConstantsMapping.decodeConstantsDeviceEvents(
                            eventDataXML.EVENTDEFINITIONID[xmlReaderIdx]
                        );
                        break;
                    case Constants.EventTypes.GATEWAY:
                        eventDefinitionID = DecodeConstantsMapping.decodeConstantsGatewayEvents(
                            eventDataXML.EVENTDEFINITIONID[xmlReaderIdx]
                        );
                        break;
                    case Constants.EventTypes.SYSTEM:
                        eventDefinitionID = DecodeConstantsMapping.decodeConstantsSystemEvents(
                            eventDataXML.EVENTDEFINITIONID[xmlReaderIdx]
                        );
                        break;
                }

                if (eventDefinitionID !== "")
                    eventDataXML.EVENTDEFINITIONID[xmlReaderIdx] = eventDefinitionID;
            }

            if (eventType !== "") eventDataXML.EVENTTYPEID[xmlReaderIdx] = eventType;
        }

        if (eventDataXML.hasOwnProperty("ENTITYTYPEID")) {
            const entityType = DecodeConstantsMapping.decodeConstantsEntityTypes(
                eventDataXML.ENTITYTYPEID[xmlReaderIdx]
            );
            if (entityType !== "") eventDataXML.ENTITYTYPEID[xmlReaderIdx] = entityType;
        }

        if (eventDataXML.hasOwnProperty("TYPEOFENTITYTYPEID")) {
            const typeOfEntityType = DecodeConstantsMapping.decodeConstantsDeviceTypes(
                eventDataXML.TYPEOFENTITYTYPEID[xmlReaderIdx]
            );
            if (typeOfEntityType !== "")
                eventDataXML.TYPEOFENTITYTYPEID[xmlReaderIdx] = typeOfEntityType;
        }

        if (eventDataXML.hasOwnProperty("EVENTDELIVERYTYPEID")) {
            const eventDeliveryType = DecodeConstantsMapping.decodeConstantsEventDeliveryTypes(
                eventDataXML.EVENTDELIVERYTYPEID[xmlReaderIdx]
            );
            if (eventDeliveryType !== "")
                eventDataXML.EVENTDELIVERYTYPEID[xmlReaderIdx] = eventDeliveryType;
        }

        if (eventDataXML.hasOwnProperty("EVENTDELIVERYSTATUSTYPEID")) {
            const eventDeliveryStatusType =
                DecodeConstantsMapping.decodeConstantsEventDeliveryStatuses(
                    eventDataXML.EVENTDELIVERYSTATUSTYPEID[xmlReaderIdx]
                );
            if (eventDeliveryStatusType !== "")
                eventDataXML.EVENTDELIVERYSTATUSTYPEID[xmlReaderIdx] = eventDeliveryStatusType;
        }

        if (apiPayloadXML.APIPAYLOAD[xmlReaderIdx].hasOwnProperty("DATASET")) {
            let xmlDataSet = apiPayloadXML.APIPAYLOAD[xmlReaderIdx].DATASET[xmlReaderIdx];
            if (xmlDataSet.hasOwnProperty("NEXT")) {
                let xmlDataNext = xmlDataSet.NEXT[xmlReaderIdx];
                if (xmlDataNext.hasOwnProperty("ADDITIONAL")) {
                    const additionalVal = DecodeConstantsMapping.decodeConstantsStandardAPIOptions(
                        xmlDataNext.ADDITIONAL[xmlReaderIdx]
                    );
                    if (additionalVal !== "") xmlDataNext.ADDITIONAL[xmlReaderIdx] = additionalVal;
                }
            }
        }
    } catch (err) {
        return err;
    }
};
/* Parsing is done here */
//---------------------------------------

//Preparing the APIPAYLOAD XML part for decoding as Device-Gateway & Event XML are structured differently
const getPartialJSONObjectToXML = (xmlReturnData, resultTypeInInt) => {
    try {
        const xmlBuilder = new xml2js.Builder();

        let xmlAPILoadData = null;
        if (xmlReturnData.hasOwnProperty("APIPAYLOAD"))
            xmlAPILoadData = xmlReturnData.APIPAYLOAD[xmlReaderIdx];
        else return;

        switch (resultTypeInInt) {
            case resultTypeList.Device:
            case resultTypeList.Gateway:
                let xmlResultData = null;
                if (xmlAPILoadData.hasOwnProperty("RESULT"))
                    xmlResultData = xmlAPILoadData.RESULT[xmlReaderIdx];
                else return;

                let xmlDataInResult = null;
                if (xmlResultData.hasOwnProperty("DATA"))
                    xmlDataInResult = xmlResultData.DATA[xmlReaderIdx];
                else return;

                const dataXMLForDeviceOrGateway = xmlBuilder.buildObject({
                    DATA: xmlDataInResult,
                });
                xmlResultData.DATA = dataXMLForDeviceOrGateway;

                //call a decoder function here
                decodeConstantsForDeviceOrGateway(
                    { APIPAYLOAD: [xmlAPILoadData] },
                    resultTypeInInt
                );

                return { APIPAYLOAD: [xmlAPILoadData] };
            case resultTypeList.Event:
                let xmlEventHistoryList = null;
                if (xmlAPILoadData.hasOwnProperty("EVENTHISTORYLIST"))
                    xmlEventHistoryList = xmlAPILoadData.EVENTHISTORYLIST[xmlReaderIdx];
                else return;

                let xmlEventHistory = null;
                if (xmlEventHistoryList.hasOwnProperty("EVENTHISTORY"))
                    xmlEventHistory = xmlEventHistoryList.EVENTHISTORY[xmlReaderIdx];
                else return;

                let xmlEventData = null;
                if (xmlEventHistory.hasOwnProperty("EVENTDATA"))
                    xmlEventData = xmlEventHistory.EVENTDATA[xmlReaderIdx];
                else return;

                let xmlEventDetail = null;
                if (xmlEventData.hasOwnProperty("EVENTDETAIL"))
                    xmlEventDetail = xmlEventData.EVENTDETAIL;
                else return;

                const dataXMLForEvent = xmlBuilder.buildObject({
                    EVENTDETAIL: xmlEventData,
                });

                xmlEventData.EVENTDETAIL = dataXMLForEvent;

                //call a decoder function here
                decodeConstantsForEvent({ APIPAYLOAD: [xmlAPILoadData] });
                return { APIPAYLOAD: [xmlAPILoadData] };
            default:
                throw new Error("Parsing error");
        }
    } catch (err) {
        return err;
    }
};

//Getting the original result from SOAP client and calling above functions if STATUS is successful
const getStringToJSONObject = async (stringifiedXML, resultTypeInInt) => {
    try {
        const parser = new xml2js.Parser();

        //uncomment the following code for actual results
        const XMLData = await parser.parseStringPromise(stringifiedXML);

        //console.log(XMLData);
        // delete the declaration and switch code in the future

        //uncomment the following code for demonstrative purpose
        //-----------------------------------------------

        // let XMLData = null;
        // switch (resultTypeInInt) {
        //     case resultTypeList.Gateway:
        //         XMLData = await parser.parseStringPromise(dummyXMLForGateway);
        //         break;
        //     case resultTypeList.Device:
        //         XMLData = await parser.parseStringPromise(dummyXMLForDevice);
        //         break;
        //     case resultTypeList.Event:
        //         XMLData = await parser.parseStringPromise(dummyXMLForEvent);
        //         break;
        //     default:
        //         throw new Error("Resulttype doesn't exists error");
        // }

        //-----------------------------------------------

        let xmlReturnData = null;
        if (XMLData.hasOwnProperty("RETURNS")) xmlReturnData = XMLData.RETURNS;
        else return XMLData;

        if (xmlReturnData.hasOwnProperty("STATUS")) {
            xmlReturnData.STATUS[xmlReaderIdx] =
                DecodeConstantsMapping.decodeConstantsExternalServiceReturnCodes(
                    xmlReturnData.STATUS[xmlReaderIdx]
                );
        } else {
            return XMLData;
        }

        switch (xmlReturnData.STATUS[xmlReaderIdx]) {
            case "SUCCEEDED":
                getPartialJSONObjectToXML(xmlReturnData, resultTypeInInt);
                return XMLData;
            default:
                return XMLData;
        }
    } catch (err) {
        return err;
    }
};

module.exports = {
    getStringToJSONObject,
};

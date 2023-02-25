var soap = require("soap");
const { resultType, soapConfigUrl } = require("../constants/server_constants");
const { getFileData } = require("../constants/helper");

/*
    calling asynchronus function and using promises means all these functions are resolved once 
    and every time we await the promise we only get the resolved result of the promise.
    If we call the asynchronus function directly, it will lead to creation of new promise and 
    resolving them for each call.
*/

//getting configuration file for SOAP XML
const getSoapConfig = async () => {
    try {
        const soapConfigObj = await getFileData(soapConfigUrl);
        const soapConfigJSON = JSON.parse(soapConfigObj);
        return soapConfigJSON;
    } catch (err) {
        return err;
    }
};

//Promisifying the asynchronus function.
const soapConfigPromise = getSoapConfig();

//resolving soap configuration and creating SOAP client based on the Configuration.
const getSoapClient = async (soap, alias) => {
    try {
        const soapConfig = await getSoapConfig();
        const client = await soap.createClientAsync(soapConfig[alias]);
        console.log(`Created ${alias} client`);
        return client;
    } catch (err) {
        console.log(`Couldn't create a client for: ${err}`);
    }
};

// const eventSoapClient = getSoapClient(soap, "event");
// const gatewaySoapClient = getSoapClient(soap, "gateway");
// const deviceSoapClient = getSoapClient(soap, "device");
var soapClientList = [
    getSoapClient(soap, "device"),
    getSoapClient(soap, "gateway"),
    getSoapClient(soap, "event"),
];

//Retrieving XMLs based on Result ID and type.
const getResultXML = async (client, args, type) => {
    try {
        switch (type) {
            case resultType.Gateway:
            case resultType.Device:
                var resultXMLForDeviceOrGateway = await client.RetrieveResultAsync(args);
                return resultXMLForDeviceOrGateway;
            case resultType.Event:
                var resultXMLForEvent = await client.RetrieveHistoryAsync(args);
                return resultXMLForEvent;
            default:
                return "";
        }
    } catch (err) {}
};

module.exports = {
    getResultXML,
    soapClientList,
    soap,
    getSoapClient,
    // deviceSoapClient,
    // gatewaySoapClient,
    // eventSoapClient,
};

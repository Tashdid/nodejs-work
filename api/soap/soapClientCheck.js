const { soap, getSoapClient, soapClientList } = require("./soapConsumeFunctions");
const { resultType } = require("../constants/server_constants");

// a middleware to check whether the soap clients are present or not before each api call where we use soap clients.
async function soapClientCheck(req, res, next) {
    try {
        let soapClientListResolved = await Promise.all(soapClientList);
        if (soapClientListResolved[resultType.Device] == null)
            soapClientList[resultType.Device] = getSoapClient(soap, "device");
        if (soapClientListResolved[resultType.Gateway] == null)
            soapClientList[resultType.Gateway] = getSoapClient(soap, "gateway");
        if (soapClientListResolved[resultType.Event] == null)
            soapClientList[resultType.Event] = getSoapClient(soap, "event");
    } catch (err) {}
    next();
}

module.exports = soapClientCheck;

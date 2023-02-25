const { protocolConfigUrl } = require("../constants/server_constants");
const { getFileData } = require("../constants/helper");

/*
    calling asynchronus function and using promises means all these functions are resolved once 
    and every time we await the promise we only get the resolved result of the promise.
    If we call the asynchronus function directly, it will lead to creation of new promise and 
    resolving them for each call.
*/

// reading protocolConfig.json file asynchronously
const getProtocolConfig = async () => {
    try {
        const protocolConfig = await getFileData(protocolConfigUrl);
        return JSON.parse(protocolConfig);
    } catch (err) {
        return err;
    }
};

// promisifying getProtocolConfig() function
const protocolConfigPromise = getProtocolConfig();

module.exports = { protocolConfigPromise: protocolConfigPromise };

var { promises: fs } = require("fs");

//checking whether a file exists
const fileExists = async (path) => !!(await fs.stat(path).catch((e) => false));

//getting data from a file
const getFileData = async (url) => {
    try {
        if (await fileExists(url)) {
            var data = await fs.readFile(url, "utf-8");
            return data;
        }
    } catch (err) {
        return err;
    }
};

module.exports = {
    fileExists: fileExists,
    getFileData: getFileData,
};

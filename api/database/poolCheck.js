var {getPoolPromise, poolPromise} = require('./db');
// let {mutex} = require('../constants/server_constants');
const {mutex} = require('../constants/server_constants');
let {Mutex, withTimeout} = require('async-mutex');

// a middleware to check whether the connection pool is present or not before
// each api call.
async function poolCheck(req, res, next) {
    // const mutex = new Mutex();
    try {
        if (typeof poolPromise === 'object') {
            let pool = await poolPromise;

            const release = await mutex.acquire();
            const poolVal = await pool[0];
            if (poolVal == null) pool[0] = getPoolPromise(0);
            release();

            // TODO: check in the future!!
            poolPromise = new Promise((resolve, reject) => {
                try {
                    resolve(pool);
                } catch (err) {
                    return err;
                }
            });
        }
    } catch (err) {
        return err;
    }

    next();
}

module.exports = poolCheck;

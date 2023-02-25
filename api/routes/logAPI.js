const {
  getDBBaseObj,
  getDBResult,
  getConvertedParameterStructure,
} = require("../database/db");
var express = require("express");
var app = express();
var bcrypt = require("bcrypt");

const {
  dbTypeEnumerator,
  saltRound,
} = require("../constants/server_constants");
const config = require("../config/AuthConfig.json");
const jwt = require("jsonwebtoken");

app.use(express.json());

// creating SQL code for System_Users
const getUserPasswordExistSQL = (username) => {
  return `select USERPASSWORD, ACCESSLEVEL, STATUS from system_users where username = ${username}`;
};

// requests email and password.
// responds with whether the user exists in System_Users
app.post("/login", async (req, res, next) => {
  try {
    const paramsArray = [
      getDBBaseObj("username", dbTypeEnumerator.VARCHAR, req.body.username),
    ];
    const paramsArrayConverted = await getConvertedParameterStructure(
      paramsArray
    );
    const queryForUserCheck = getUserPasswordExistSQL(
      paramsArrayConverted.name[0]
    );
    const result = await getDBResult(
      queryForUserCheck,
      paramsArrayConverted.paramOrBindingObj
    );

    if (result.length == 1) {
      const userHash = result[0]["USERPASSWORD"];
      const accessLevel = result[0]["ACCESSLEVEL"];
      const status = result[0]["STATUS"];

      if (status != null && status !== 0) {
        return res.send({ validation: "invalid" });
      }

      const accessLevelString =
        typeof accessLevel === "boolean"
          ? accessLevel
            ? "1"
            : "0"
          : accessLevel + "";
      const isMatched = await bcrypt.compare(req.body.pass, userHash);
      const accessLevelHash = await bcrypt.hash(accessLevelString, saltRound);
      if (isMatched) {
        const token = jwt.sign({ sub: req.body.email }, config.secret, {
          expiresIn: "5d",
        });
        res.json({
          validation: "valid",
          token,
          accessLevel: accessLevelHash + accessLevelString,
          username: req.body.username,
        });
      } else res.send({ validation: "invalid" });
    } else res.send({ validation: "invalid" });
  } catch (err) {
    res.json(err.toString());
  }
});

module.exports = app;

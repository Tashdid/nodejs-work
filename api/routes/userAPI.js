var express = require("express");
var bcrypt = require("bcrypt");
var router = express.Router();

const {
  dbTypeEnumerator,
  dbNameEnum,
  saltRound,
  userType,
} = require("../constants/server_constants");
const {
  getDBBaseObj,
  getConvertedParameterStructure,
  getDBResult,
  modifyDBWithTransaction,
} = require("../database/db");
const accessChecker = require("../authentication/accessChecker");
const { getJoinString } = require("../database/db");

// creating SQL code for System_Users
const createUserSQL = (username, pass, accesslevel, status) => {
  return `Insert into System_Users values(${username}, ${pass}, ${accesslevel}, ${status})`;
};

// creating SQL code for System_Users_Details
const createUserDetailsSQL = (
  username,
  firstname,
  lastname,
  employeeid,
  useremail
) => {
  return `Insert into System_Users_Details values(${username}, ${firstname}, ${lastname}, ${employeeid}, ${useremail})`;
};

// create a user based on email and password
router.post("/create", accessChecker, async (req, res, next) => {
  try {
    const hashValuePass = await bcrypt.hash(req.body.pass, saltRound);
    const paramsUserArray = [
      getDBBaseObj("username", dbTypeEnumerator.VARCHAR, req.body.username),
      getDBBaseObj("userpassword", dbTypeEnumerator.VARCHAR, hashValuePass),
      getDBBaseObj("accesslevel", dbTypeEnumerator.INT, 1),
      getDBBaseObj("status", dbTypeEnumerator.INT, 0),
    ];

    const paramsUserArrayConverted = await getConvertedParameterStructure(
      paramsUserArray
    );
    const queryForUserCreate = createUserSQL(
      paramsUserArrayConverted.name[0],
      paramsUserArrayConverted.name[1],
      paramsUserArrayConverted.name[2],
      paramsUserArrayConverted.name[3]
    );

    const paramsUserDetailsArray = [
      getDBBaseObj("username", dbTypeEnumerator.VARCHAR, req.body.username),
      getDBBaseObj("firstname", dbTypeEnumerator.VARCHAR, req.body.firstname),
      getDBBaseObj("lastname", dbTypeEnumerator.VARCHAR, req.body.lastname),
      getDBBaseObj("employeeid", dbTypeEnumerator.VARCHAR, req.body.employeeid),
      getDBBaseObj("useremail", dbTypeEnumerator.VARCHAR, req.body.email),
    ];

    const paramsUserDetailsArrayConverted =
      await getConvertedParameterStructure(paramsUserDetailsArray);
    const queryForUserDetailsCreate = createUserDetailsSQL(
      paramsUserDetailsArrayConverted.name[0],
      paramsUserDetailsArrayConverted.name[1],
      paramsUserDetailsArrayConverted.name[2],
      paramsUserDetailsArrayConverted.name[3],
      paramsUserDetailsArrayConverted.name[4]
    );

    const response = await modifyDBWithTransaction(
      [queryForUserCreate, queryForUserDetailsCreate],
      [
        paramsUserArrayConverted.paramOrBindingObj,
        paramsUserDetailsArrayConverted.paramOrBindingObj,
      ],
      [1, 1]
    );

    const msg = response ? "valid" : "invalid";
    res.json({ message: msg });
  } catch (err) {
    res.json(err);
  }
});

// getting old password from System_Users SQL code to check with the input old password
const getUserPasswordSQL = (username) => {
  return `select USERPASSWORD from System_Users where UserName=${username}`;
};

// updating password for System_Users SQL code
const updateUserPasswordSQL = (username, pass) => {
  return `update system_users set userpassword=${pass} where username=${username}`;
};

// update a user password based on email and old password
// TODO: fix this!!!
router.post("/updatePassword", async (req, res, next) => {
  try {
    const mode = req.body.mode;
    const paramsArray = [
      getDBBaseObj("username", dbTypeEnumerator.VARCHAR, req.body.username),
    ];

    const paramsArrayConverted = await getConvertedParameterStructure(
      paramsArray
    );
    const queryForSelectUserPass = getUserPasswordSQL(
      paramsArrayConverted.name[0]
    );
    const result = await getDBResult(
      queryForSelectUserPass,
      paramsArrayConverted.paramOrBindingObj
    );

    if (result.length == 0)
      return res.status(404).json({ msg: "No password found!!!" });
    if (mode === userType.NONADMIN) {
      const hashValPass = result[0].USERPASSWORD;
      const isPasswordMatched = await bcrypt.compare(
        req.body.oldpass,
        hashValPass
      );
      if (!isPasswordMatched)
        return res.status(404).json({ msg: "Old password didn't match!!!" });
    }

    const hashedNewPass = await bcrypt.hash(req.body.newpass, saltRound);
    const paramsArrayForUpdate = [
      getDBBaseObj("userpassword", dbTypeEnumerator.VARCHAR, hashedNewPass),
      getDBBaseObj("username", dbTypeEnumerator.VARCHAR, req.body.username),
    ];
    const paramsArrayConvertedForUpdate = await getConvertedParameterStructure(
      paramsArrayForUpdate
    );

    const queryForUserUpdate = updateUserPasswordSQL(
      paramsArrayConvertedForUpdate.name[1],
      paramsArrayConvertedForUpdate.name[0]
    );

    const resultForUpdate = await getDBResult(
      queryForUserUpdate,
      paramsArrayConvertedForUpdate.paramOrBindingObj,
      true // flag for insert/update query
    );

    const msg = resultForUpdate === 1 ? "valid" : "invalid";
    res.json({ message: msg });
  } catch (err) {
    res.json(err);
  }
});

router.post("/getSystemUsers", async (req, res, next) => {
  let systemUsers = null;
  try {
    const username = req.body.username;
    const joinString = await getJoinString();
    const queryForSelectUserHeader = `SELECT a.STATUS, b.USERNAME, b.EMPLOYEEID, b.USEREMAIL, b.FIRSTNAME, b.LASTNAME \
FROM System_Users ${joinString} a inner join system_users_details ${joinString} b on b.username = a.username`;
    if (username == null) {
      systemUsers = await getDBResult(queryForSelectUserHeader);
    } else {
      const paramsArray = [
        getDBBaseObj("username", dbTypeEnumerator.VARCHAR, username),
      ];
      const paramsArrayConverted = await getConvertedParameterStructure(
        paramsArray
      );
      const queryForSelectUser =
        queryForSelectUserHeader +
        ` and b.username=${paramsArrayConverted.name[0]}`;
      systemUsers = await getDBResult(
        queryForSelectUser,
        paramsArrayConverted.paramOrBindingObj
      );
    }
    res.json(systemUsers);
  } catch (err) {
    res.json(err);
  }
});

// updating SQL code for System_Users_Details
const updateUserDetailsSQL = (
  firstname,
  lastname,
  employeeid,
  useremail,
  username
) => {
  return `update system_users_details set firstname=${firstname}, lastname=${lastname}, employeeid=${employeeid}, useremail=${useremail} where username=${username}`;
};

// updating SQL code for System_Users
const updateUserSQL = (status, username) => {
  return `update system_users set status=${status} where username=${username}`;
};

router.post("/update", async (req, res, next) => {
  try {
    const paramsUserDetailsArray = [
      getDBBaseObj("firstname", dbTypeEnumerator.VARCHAR, req.body.firstname),
      getDBBaseObj("lastname", dbTypeEnumerator.VARCHAR, req.body.lastname),
      getDBBaseObj("employeeid", dbTypeEnumerator.VARCHAR, req.body.employeeid),
      getDBBaseObj("useremail", dbTypeEnumerator.VARCHAR, req.body.email),
      getDBBaseObj("username", dbTypeEnumerator.VARCHAR, req.body.username),
    ];

    const paramsUserDetailsArrayConverted =
      await getConvertedParameterStructure(paramsUserDetailsArray);
    const queryForUserDetailsUpdate = updateUserDetailsSQL(
      paramsUserDetailsArrayConverted.name[0],
      paramsUserDetailsArrayConverted.name[1],
      paramsUserDetailsArrayConverted.name[2],
      paramsUserDetailsArrayConverted.name[3],
      paramsUserDetailsArrayConverted.name[4]
    );

    const paramsUserArray = [
      getDBBaseObj(
        "status",
        dbTypeEnumerator.INT,
        req.body.status === "Active"
          ? 0
          : req.body.status === "Inactive"
            ? 1
            : 2
      ),
      getDBBaseObj("username", dbTypeEnumerator.VARCHAR, req.body.username),
    ];

    const paramsUserArrayConverted = await getConvertedParameterStructure(
      paramsUserArray
    );
    const queryForUserUpdate = updateUserSQL(
      paramsUserArrayConverted.name[0],
      paramsUserArrayConverted.name[1]
    );

    // console.log(paramsUserArrayConverted.paramOrBindingObj);
    // console.log(queryForUserUpdate);

    const response = await modifyDBWithTransaction(
      [queryForUserDetailsUpdate, queryForUserUpdate],
      [
        paramsUserDetailsArrayConverted.paramOrBindingObj,
        paramsUserArrayConverted.paramOrBindingObj,
      ],
      [1, 1]
    );

    const msg = response ? "valid" : "invalid";
    res.json({ message: msg });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;

let { Mutex, withTimeout } = require("async-mutex");
const process = require("process");

/*Please, go to logFileAPI.js 19 line to change code for production.
 */
const protocolConfigUrl = "./config/ProtocolConfig.json";

const dbConfigUrl = "./config/DBConfig.json";

const soapConfigUrl = "./config/SoapConfig.json";

const dbNameEnum = {
    System: true,
    MDM: false,
};

const configForLinux = "./config/DaemonsConfigLinux.json";
const configForWindows = "./config/DaemonsConfigWindows.json";

const dummyXMLForEvent =
    "<RETURNS>" +
    "<STATUS>A92A7EBEE897499fA8B06D5FE94B8A30</STATUS>" +
    "<APIPAYLOAD>" +
    "<COUNT>1</COUNT>" +
    "<EVENTHISTORYLIST>" +
    "<EVENTHISTORY>" +
    "<ID>CAvjsYLnfdn4ZPKidKC1i5JCNAtKUZiO</ID>" +
    "<EVENTTYPEID>2b4a334dc7104645bddeec9c44090cde</EVENTTYPEID>" +
    "<EVENTDEFINITIONID>7bd38a557c4641d7bebe59edbb328064</EVENTDEFINITIONID>" +
    "<PROCESSEDSTATUSTYPEID>d433acf3ffa14ba291e9420f9633ba9c</PROCESSEDSTATUSTYPEID>" +
    "<DATACOLLECTIONTYPEID>a9b91760980b45cd91ce6d74021b938f</DATACOLLECTIONTYPEID>" +
    "<ENTITYTYPEID>E3F076689EB84094B6A06FC71EF81214</ENTITYTYPEID>" +
    "<TYPEOFENTITYTYPEID>fdfac94660b04fdcbdfc399cbb2c743d</TYPEOFENTITYTYPEID>" +
    "<EVENTDELIVERYTYPEID>3c3d5784292a4e3b9224fcda703a6348</EVENTDELIVERYTYPEID>" +
    "<EVENTDELIVERYSTATUSTYPEID>183a3c523dc6454da08774f5c2ec8c4e</EVENTDELIVERYSTATUSTYPEID>" +
    "<COMMANDHISTORYID>" +
    "</COMMANDHISTORYID>" +
    "<EVENTDATA>" +
    "<EVENTDETAIL>" +
    "<STARTDATETIME>2019-11-07 05:23:09.877</STARTDATETIME>" +
    "<ENDDATETIME>2019-12-07 05:23:09.877</ENDDATETIME>" +
    "<RECORDSAFFECTED>5</RECORDSAFFECTED>" +
    "</EVENTDETAIL>" +
    "</EVENTDATA>" +
    "</EVENTHISTORY>" +
    "</EVENTHISTORYLIST>" +
    "<DATASET>" +
    "<NEXT>" +
    "<ADDITIONAL>5af8a532523c4c6e9f9344c0827391ee</ADDITIONAL>" +
    "<EVENTHISTORYEVENTDATETIME>2019-07-03 03:59:26.000</EVENTHISTORYEVENTDATETIME>" +
    "<EVENTHISTORYID>qK56MC8kzY6X9HKR4dR6ioFML80BjPr1</EVENTHISTORYID>" +
    "</NEXT>" +
    "</DATASET>" +
    "</APIPAYLOAD>" +
    "</RETURNS>";

const dummyXMLForDevice =
    "<RETURNS>" +
    "<STATUS>A92A7EBEE897499fA8B06D5FE94B8A30</STATUS>" +
    "<APIPAYLOAD>" +
    '<RESULT ResultDeprecatedInVersion="X.X.X">' +
    "<ID>c36128847bc84e9796b395fdec0d24f1</ID>" +
    // For Gateway
    /*"<TYPEID>b256b1ed2b9842d2b39c0358212e5f18</TYPEID>"+*/
    // For Device
    "<TYPEID>60381e83d07945649a86c193cdc40d6b</TYPEID>" +
    "<PROCESSEDSTATUSTYPEID>d433acf3ffa14ba291e9420f9633ba9c</PROCESSEDSTATUSTYPEID>" +
    "<DATETIME>2019-07-03 03:59:26.000</DATETIME>" +
    "<SAVEDINSYSTEMDATETIME>2019-07-03 03:59:31.527</SAVEDINSYSTEMDATETIME>" +
    "<COMMANDHISTORYID></COMMANDHISTORYID>" +
    "<BATCHID>9838f735325c47dda27a100c4734db3e</BATCHID>" +
    "<DEVICE>" +
    "<ID>ae891041d25a49aaba5d788c0f0884e2</ID>" +
    "<SOFTWAREVERSION>0.0.0</SOFTWAREVERSION>" +
    "<TYPEID>fdfac94660b04fdcbdfc399cbb2c743d</TYPEID>" +
    "<PARENTDEVICE>" +
    "<ID>dummy</ID>" +
    "<SOFTWAREVERSION>0.0.0</SOFTWAREVERSION>" +
    "<NAME>parent</NAME>" +
    "<SERIALNUMBER>1</SERIALNUMBER>" +
    "</PARENTDEVICE>" +
    "</DEVICE>" +
    "<GATEWAY>" +
    "<ID>ae891041d25a49aaba5d788c0f0883d1</ID>" +
    "<TYPEID>7428ddbc573941f683c28212f8a0a746</TYPEID>" +
    "<NAME>LK02056951</NAME>" +
    "<SERIALNUMBER>LK02056951</SERIALNUMBER>" +
    "<SOFTWAREVERSION>4.53.25</SOFTWAREVERSION>" +
    "</GATEWAY>" +
    "<OPTION>" +
    "</OPTION>" +
    "<DATACOLLECTIONTYPEID>a9b91760980b45cd91ce6d74021b938f</DATACOLLECTIONTYPEID>" +
    "<DATA>" +
    "<ATMCONFIGURATION>" +
    "<ATMMODETYPEID>ee79dbcf1b3d4e83866e4d6e94f2735a</ATMMODETYPEID>" +
    "</ATMCONFIGURATION>" +
    "</DATA>" +
    "</RESULT>" +
    "</APIPAYLOAD>" +
    "</RETURNS>";

const dummyXMLForGateway =
    "<RETURNS>" +
    "<STATUS>A92A7EBEE897499fA8B06D5FE94B8A30</STATUS>" +
    "<APIPAYLOAD>" +
    '<RESULT ResultDeprecatedInVersion="X.X.X">' +
    "<ID>c36128847bc84e9796b395fdec0d24f1</ID>" +
    "<TYPEID>b256b1ed2b9842d2b39c0358212e5f18</TYPEID>" +
    "<PROCESSEDSTATUSTYPEID>d433acf3ffa14ba291e9420f9633ba9c</PROCESSEDSTATUSTYPEID>" +
    "<DATETIME>2019-07-03 03:59:26.000</DATETIME>" +
    "<SAVEDINSYSTEMDATETIME>2019-07-03 03:59:31.527</SAVEDINSYSTEMDATETIME>" +
    "<COMMANDHISTORYID></COMMANDHISTORYID>" +
    "<BATCHID>9838f735325c47dda27a100c4734db3e</BATCHID>" +
    "<GATEWAY>" +
    "<ID>ae891041d25a49aaba5d788c0f0883d1</ID>" +
    "<TYPEID>7428ddbc573941f683c28212f8a0a746</TYPEID>" +
    "<NAME>LK02056951</NAME>" +
    "<SERIALNUMBER>LK02056951</SERIALNUMBER>" +
    "<SOFTWAREVERSION>4.53.25</SOFTWAREVERSION>" +
    "</GATEWAY>" +
    "<OPTION>" +
    "</OPTION>" +
    "<DATACOLLECTIONTYPEID>a9b91760980b45cd91ce6d74021b938f</DATACOLLECTIONTYPEID>" +
    "<DATA>" +
    "<LVGM>" +
    "<SEGMENTS>" +
    "<SEGMENT>" +
    "<HANDLE>4</HANDLE>" +
    "<PARENT>5</PARENT>" +
    "<DISTANCE>6</DISTANCE>" +
    "<CROSSPHASEADJUSTMENT>7</CROSSPHASEADJUSTMENT>" +
    "<VARIANCE>8</VARIANCE>" +
    "<DEVICES>" +
    "<DEVICE>" +
    "<ID>CkfLhXxDcT0I79tTc7ED6YhtFbVZiz6T</ID>" +
    "<SIGNALSTRENGTHDISCREPANCY>5</SIGNALSTRENGTHDISCREPANCY>" +
    "<PRIMARY />" +
    "</DEVICE>" +
    "</DEVICES>" +
    "<PATH>tttt</PATH>" +
    "</SEGMENT>" +
    "<SEGMENT>" +
    "<HANDLE>11</HANDLE>" +
    "<PARENT>5</PARENT>" +
    "<DISTANCE>3</DISTANCE>" +
    "<CROSSPHASEADJUSTMENT>7</CROSSPHASEADJUSTMENT>" +
    "<VARIANCE>8</VARIANCE>" +
    "<DEVICES>" +
    "<DEVICE>" +
    "<ID>XqTDzRyBgEIvcU36bnbd42XWFhFI0CaZ</ID>" +
    "<SIGNALSTRENGTHDISCREPANCY>5</SIGNALSTRENGTHDISCREPANCY>" +
    "</DEVICE>" +
    "</DEVICES>" +
    "<PATH>tttt</PATH>" +
    "</SEGMENT>" +
    "</SEGMENTS>" +
    "<UNASSIGNEDDEVICES>" +
    "<DEVICE>" +
    "<ID>5iqcoptWD6jRzHLR0NEvcTpMcoFgG0vB</ID>" +
    "</DEVICE>" +
    "<DEVICE>" +
    "<ID>J6H0ZD547guR5rgSBG29zcA0MaId1ACP</ID>" +
    "</DEVICE>" +
    "</UNASSIGNEDDEVICES>" +
    "</LVGM>" +
    "</DATA>" +
    "</RESULT>" +
    "</APIPAYLOAD>" +
    "</RETURNS>";

const resultType = {
    Device: 0,
    Gateway: 1,
    Event: 2,
};

const dbTypeEnumerator = {
    VARCHAR: 0,
    TINYINT: 1,
    CHAR: 2,
    DATE: 3,
    INT: 4,
};

const saltRound = 12;

const userType = {
    ADMIN: 0,
    NONADMIN: 1,
};

const mutex = new Mutex();

module.exports = Object.freeze({
    protocolConfigUrl: protocolConfigUrl,
    resultType: resultType,
    dummyXMLForGateway: dummyXMLForGateway,
    dummyXMLForDevice: dummyXMLForDevice,
    dummyXMLForEvent: dummyXMLForEvent,
    dbTypeEnumerator: dbTypeEnumerator,
    dbConfigUrl: dbConfigUrl,
    soapConfigUrl: soapConfigUrl,
    dbNameEnum: dbNameEnum,
    saltRound: saltRound,
    userType: userType,
    mutex: mutex,
    configForLinux: configForLinux,
    configForWindows: configForWindows,
});

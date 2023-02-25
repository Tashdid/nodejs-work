const { Constants } = require('./Constants');

class DecodeConstantsMapping {
    static decodeConstantsVersions(params) {
        if (Constants.Versions.CURRENT_PANORAMIX_SOFTWARE_VERSION === params) return "CURRENT_PANORAMIX_SOFTWARE_VERSION";
        else if (Constants.Versions.SysSw_6_0_001 === params) return "SysSw_6_0_001";
        else if (Constants.Versions.SysSw_6_0_000 === params) return "SysSw_6_0_000";
        else if (Constants.Versions.SysSw_5_4_030 === params) return "SysSw_5_4_030";
        else if (Constants.Versions.SysSw_5_4_020 === params) return "SysSw_5_4_020";
        else if (Constants.Versions.SysSw_5_4_010 === params) return "SysSw_5_4_010";
        else if (Constants.Versions.SysSw_5_4_000 === params) return "SysSw_5_4_000";
        else if (Constants.Versions.SysSw_5_3_002 === params) return "SysSw_5_3_002";
        else if (Constants.Versions.SysSw_5_3_001 === params) return "SysSw_5_3_001";
        else if (Constants.Versions.SysSw_5_3_0 === params) return "SysSw_5_3_0";
        else if (Constants.Versions.SysSw_5_2_020 === params) return "SysSw_5_2_020";
        else if (Constants.Versions.SysSw_5_2_010 === params) return "SysSw_5_2_010";
        else if (Constants.Versions.SysSw_5_2_0 === params) return "SysSw_5_2_0";
        else if (Constants.Versions.SysSw_5_1_01 === params) return "SysSw_5_1_01";
        else if (Constants.Versions.SysSw_5_1_0 === params) return "SysSw_5_1_0";
        else if (Constants.Versions.SysSw_5_0_0 === params) return "SysSw_5_0_0";
        else if (Constants.Versions.SysSw_4_1_0 === params) return "SysSw_4_1_0";
        else if (Constants.Versions.SysSw_4_0_0 === params) return "SysSw_4_0_0";
        else if (Constants.Versions.SysSw_3_0_0 === params) return "SysSw_3_0_0";
        else if (Constants.Versions.SysSw_2_3_0 === params) return "SysSw_2_3_0";
        else if (Constants.Versions.SysSw_2_2_0 === params) return "SysSw_2_2_0";
        else if (Constants.Versions.SysSw_2_1_0 === params) return "SysSw_2_1_0";
        else if (Constants.Versions.SysSw_2_0_0 === params) return "SysSw_2_0_0";
        else if (Constants.Versions.SysSw_1_2_0 === params) return "SysSw_1_2_0";

        return "";
    }

    //Contains the list of types of Logs entries for the solution.
    static decodeConstantsLogType(params) {
        if (Constants.LogType.ERROR === params) return "ERROR";
        else if (Constants.LogType.USERACTIVITY === params) return "USERACTIVITY";
        else if (Constants.LogType.DEBUG === params) return "DEBUG";
        else if (Constants.LogType.SQL_TRACE === params) return "SQL_TRACE";
        else if (Constants.LogType.DC1000_ADAPTER_ENHANCED_DEBUG === params) return "DC1000_ADAPTER_ENHANCED_DEBUG";
        else if (Constants.LogType.INTERNAL_TESTING === params) return "INTERNAL_TESTING";
        else if (Constants.LogType.PERFORMANCE === params) return "PERFORMANCE";
        else if (Constants.LogType.DIAGNOSTIC === params) return "DIAGNOSTIC";
        else if (Constants.LogType.ENGINE_MESSAGE === params) return "ENGINE_MESSAGE";
        else if (Constants.LogType.INFORMATIONAL === params) return "INFORMATIONAL";

        /*        [Obsolete("v5.0 - use ENGINE_MESSAGE instead")]*/
        else if (Constants.LogType.TCPIP_TRACE === params) return "TCPIP_TRACE";

        return "";
    }

    //Contains the list of databases supported.
    static decodeConstantsDatabaseTypeID(params) {
        if (Constants.DatabaseTypeID.CORE === params) return "CORE";
        else if (Constants.DatabaseTypeID.DISTRIBUTION === params) return "DISTRIBUTION";

        return "";
    }

    // Contains the list of categories of Types
    static decodeConstantsCategories(params) {
        if (Constants.Categories.TASK_STATUS_TYPE === params) return "TASK_STATUS_TYPE";
        else if (Constants.Categories.TASK_TASK_TYPE === params) return "TASK_TASK_TYPE";
        else if (Constants.Categories.ATTRIBUTE_TYPE === params) return "ATTRIBUTE_TYPE";
        else if (Constants.Categories.MESSAGE_LOG_STATUS_TYPE === params) return "MESSAGE_LOG_STATUS_TYPE";
        else if (Constants.Categories.EXTERNAL_RETURN_CODES === params) return "EXTERNAL_RETURN_CODES";
        else if (Constants.Categories.SCHEDULE_RECURRENCE_TYPE === params) return "SCHEDULE_RECURRENCE_TYPE";
        else if (Constants.Categories.SCHEDULE_STATUS_TYPE === params) return "SCHEDULE_STATUS_TYPE";
        else if (Constants.Categories.DATABASE_TYPE === params) return "DATABASE_TYPE";
        else if (Constants.Categories.GATEWAY_TYPE === params) return "GATEWAY_TYPE";
        else if (Constants.Categories.GATEWAY_STATUS === params) return "GATEWAY_STATUS";
        else if (Constants.Categories.SETTING_VALUE_TYPES === params) return "SETTING_VALUE_TYPES";
        else if (Constants.Categories.SCHEDULE_TIMEOUTINTERVAL_TYPE === params) return "SCHEDULE_TIMEOUTINTERVAL_TYPE";
        else if (Constants.Categories.HIERARCHY_RESTRICTION_TYPE === params) return "HIERARCHY_RESTRICTION_TYPE";
        else if (Constants.Categories.HIERARCHY_LEVEL_MEMBER_DELETE_TYPE === params) return "HIERARCHY_LEVEL_MEMBER_DELETE_TYPE";
        else if (Constants.Categories.GATEWAY_COMMUNICATION_TYPE === params) return "GATEWAY_COMMUNICATION_TYPE";
        else if (Constants.Categories.GATEWAY_TEMPLATE_TYPE === params) return "GATEWAY_TEMPLATE_TYPE";
        else if (Constants.Categories.ID_TYPE === params) return "ID_TYPE";
        else if (Constants.Categories.DEVICE_STATUS === params) return "DEVICE_STATUS";
        else if (Constants.Categories.DEVICE_TYPE === params) return "DEVICE_TYPE";
        else if (Constants.Categories.ENTITY_TYPE === params) return "ENTITY_TYPE";
        else if (Constants.Categories.TASK_PROCESSOR_TYPES === params) return "TASK_PROCESSOR_TYPES";
        else if (Constants.Categories.COMMAND_HISTORY_STATUS_TYPE === params) return "COMMAND_HISTORY_STATUS_TYPE";
        else if (Constants.Categories.METER_LONTALK_KEY_STATUS === params) return "METER_LONTALK_KEY_STATUS";
        else if (Constants.Categories.GATEWAY_COMMUNICATION_REQUEST_TYPE === params) return "GATEWAY_COMMUNICATION_REQUEST_TYPE";
        else if (Constants.Categories.GATEWAY_COMMUNICATION_STATUS_TYPE === params) return "GATEWAY_COMMUNICATION_STATUS_TYPE";
        else if (Constants.Categories.PHASE_TYPES === params) return "PHASE_TYPES";
        else if (Constants.Categories.RESULT_TYPES === params) return "RESULT_TYPES";
        else if (Constants.Categories.EVENT_DEFINITION_STATUS_TYPES === params) return "EVENT_DEFINITION_STATUS_TYPES";
        else if (Constants.Categories.EVENT_DEFINITION_DELIVERY_TYPE === params) return "EVENT_DEFINITION_DELIVERY_TYPE";
        else if (Constants.Categories.FIRMWARE_TYPES === params) return "FIRMWARE_TYPES";
        else if (Constants.Categories.CHANGE_TYPE === params) return "CHANGE_TYPE";
        else if (Constants.Categories.EXPIRED_INTERVAL_TYPE === params) return "EXPIRED_INTERVAL_TYPE";
        else if (Constants.Categories.SCHEDULE_ASSIGNMENT_STATUS_TYPE === params) return "SCHEDULE_ASSIGNMENT_STATUS_TYPE";
        else if (Constants.Categories.SCHEDULE_TYPE === params) return "SCHEDULE_TYPE";
        else if (Constants.Categories.SETTING_TYPE === params) return "SETTING_TYPE";
        else if (Constants.Categories.SORT_ORDER_TYPES === params) return "SORT_ORDER_TYPES";
        else if (Constants.Categories.INFORMATION_RETURN_TYPES === params) return "INFORMATION_RETURN_TYPES";
        else if (Constants.Categories.METER_DISPLAY_CATEGORY_TYPES === params) return "METER_DISPLAY_CATEGORY_TYPES";
        else if (Constants.Categories.PROPERTY_DATA_TYPES === params) return "PROPERTY_DATA_TYPES";
        else if (Constants.Categories.TOUCALENDARTYPES === params) return "TOUCALENDARTYPES";
        else if (Constants.Categories.CONTROL_RELAY_STATUS === params) return "CONTROL_RELAY_STATUS";
        else if (Constants.Categories.MAXIMUM_POWER_LEVEL_ENABLE_TYPES === params) return "MAXIMUM_POWER_LEVEL_ENABLE_TYPES";
        else if (Constants.Categories.LAST_GATEWAY_TO_DEVICE_COMMUNICATION_STATUS_TYPES === params) return "LAST_GATEWAY_TO_DEVICE_COMMUNICATION_STATUS_TYPES";
        else if (Constants.Categories.REPEATER_PATH_STATUS === params) return "REPEATER_PATH_STATUS";
        else if (Constants.Categories.ADD_METER_FAILURE_TYPES === params) return "ADD_METER_FAILURE_TYPES";
        else if (Constants.Categories.DEVICE_DISCOVERED_TYPES === params) return "DEVICE_DISCOVERED_TYPES";
        else if (Constants.Categories.BILLING_DATA_STRUCTURE_TYPES === params) return "BILLING_DATA_STRUCTURE_TYPES";
        else if (Constants.Categories.IP_ADDRESS_TYPE === params) return "IP_ADDRESS_TYPE";
        else if (Constants.Categories.APPLICATION_LEVEL_AUTHENTICATION_TYPES === params) return "APPLICATION_LEVEL_AUTHENTICATION_TYPES";
        else if (Constants.Categories.GATEWAY_ENCRYPTION_STATUS_TYPES === params) return "GATEWAY_ENCRYPTION_STATUS_TYPES";
        else if (Constants.Categories.GATEWAY_WAN_CONFIGURATION_STATUS_TYPES === params) return "GATEWAY_WAN_CONFIGURATION_STATUS_TYPES";
        else if (Constants.Categories.GATEWAY_OUTBOUND_CHAP_STATUS_TYPES === params) return "GATEWAY_OUTBOUND_CHAP_STATUS_TYPES";
        else if (Constants.Categories.GATEWAY_INBOUND_CHAP_STATUS_TYPES === params) return "GATEWAY_INBOUND_CHAP_STATUS_TYPES";
        else if (Constants.Categories.GATEWAY_PAP_STATUS_TYPES === params) return "GATEWAY_PAP_STATUS_TYPES";
        else if (Constants.Categories.GATEWAY_PORT_SPEED_TYPES === params) return "GATEWAY_PORT_SPEED_TYPES";
        else if (Constants.Categories.GATEWAY_MODEM_COMMAND_TYPES === params) return "GATEWAY_MODEM_COMMAND_TYPES";
        else if (Constants.Categories.GATEWAY_MODEM_CONNECT_TYPES === params) return "GATEWAY_MODEM_CONNECT_TYPES";
        else if (Constants.Categories.GATEWAY_PPP_CONNECTION_TYPES === params) return "GATEWAY_PPP_CONNECTION_TYPES";
        else if (Constants.Categories.GATEWAY_MODEM_ANSWER_TYPES === params) return "GATEWAY_MODEM_ANSWER_TYPES";
        else if (Constants.Categories.GATEWAY_AUTHENTICATION_TYPES === params) return "GATEWAY_AUTHENTICATION_TYPES";
        else if (Constants.Categories.PING_GATEWAY_STATUS_TYPE === params) return "PING_GATEWAY_STATUS_TYPE";
        else if (Constants.Categories.MBUS_STATUS_TYPES === params) return "MBUS_STATUS_TYPES";
        else if (Constants.Categories.RESERVED_IDS === params) return "RESERVED_IDS";
        else if (Constants.Categories.DEVICE_MBUS_AUTO_DISCOVERY_STATUS_TYPE === params) return "DEVICE_MBUS_AUTO_DISCOVERY_STATUS_TYPE";
        else if (Constants.Categories.CONNECTION_FAILURE_TYPES === params) return "CONNECTION_FAILURE_TYPES";
        else if (Constants.Categories.PERFORMANCE_LOG_TYPES === params) return "PERFORMANCE_LOG_TYPES";
        else if (Constants.Categories.APPLICATION_LEVEL_AUTHENTICATION_STATUS_TYPES === params) return "APPLICATION_LEVEL_AUTHENTICATION_STATUS_TYPES";
        else if (Constants.Categories.COMMAND_FAILURE_TYPES === params) return "COMMAND_FAILURE_TYPES";
        else if (Constants.Categories.COMMUNICATION_FAILURE_STATUS_TYPES === params) return "COMMUNICATION_FAILURE_STATUS_TYPES";
        else if (Constants.Categories.DATA_ORDER_TYPES === params) return "DATA_ORDER_TYPES";
        else if (Constants.Categories.DC1000_RESOURCE_ENTRY_PRIORITIES === params) return "DC1000_RESOURCE_ENTRY_PRIORITIES";
        else if (Constants.Categories.DC1000_RESOURCES === params) return "DC1000_RESOURCES";
        else if (Constants.Categories.EVENT_DELIVERY_STATUS_TYPES === params) return "EVENT_DELIVERY_STATUS_TYPES";
        else if (Constants.Categories.EVENT_SECURITY_ALERT_TYPES === params) return "EVENT_SECURITY_ALERT_TYPES";
        else if (Constants.Categories.EVENT_STATE_TYPE === params) return "EVENT_STATE_TYPE";
        else if (Constants.Categories.GATEWAY_DATA_AVAILABLE_TYPES === params) return "GATEWAY_DATA_AVAILABLE_TYPES";
        else if (Constants.Categories.GATEWAY_INITIAL_COMMUNICATION_STATUS_TYPES === params) return "GATEWAY_INITIAL_COMMUNICATION_STATUS_TYPES";
        else if (Constants.Categories.KEY_AVAILABILITY_TYPES === params) return "KEY_AVAILABILITY_TYPES";
        else if (Constants.Categories.MBUS_SECURITY_STATUS_TYPES === params) return "MBUS_SECURITY_STATUS_TYPES";
        else if (Constants.Categories.MBUS_AUTHENTICATION_TYPES === params) return "MBUS_AUTHENTICATION_TYPES";
        else if (Constants.Categories.MBUS_BILLING_SCHEDULE_FREQUENCY_TYPES === params) return "MBUS_BILLING_SCHEDULE_FREQUENCY_TYPES";
        else if (Constants.Categories.MBUS_ALARMS === params) return "MBUS_ALARMS";
        else if (Constants.Categories.REPEATER_TYPES === params) return "REPEATER_TYPES";
        else if (Constants.Categories.SERVER_TO_GATEWAY_PROTOCOL_TYPES === params) return "SERVER_TO_GATEWAY_PROTOCOL_TYPES";
        else if (Constants.Categories.STANDARD_API_OPTIONS === params) return "STANDARD_API_OPTIONS";
        else if (Constants.Categories.TIMEZONE_DST_TYPES === params) return "TIMEZONE_DST_TYPES";
        else if (Constants.Categories.PREPAY_ADD_CREDIT_OPTION_TYPES === params) return "PREPAY_ADD_CREDIT_OPTION_TYPES";
        else if (Constants.Categories.PREPAY_CLEAR_CREDIT_OPTION_TYPES === params) return "PREPAY_CLEAR_CREDIT_OPTION_TYPES";
        else if (Constants.Categories.PREPAY_STATUS_TYPES === params) return "PREPAY_STATUS_TYPES";
        else if (Constants.Categories.PREPAY_EMERGENCY_CREDIT_STATUS_TYPES === params) return "PREPAY_EMERGENCY_CREDIT_STATUS_TYPES";
        else if (Constants.Categories.PREPAY_REVERSE_POWER_DEDUCTION_STATUS_TYPES === params) return "PREPAY_REVERSE_POWER_DEDUCTION_STATUS_TYPES";
        else if (Constants.Categories.PREPAY_MAXIMUM_POWER_STATUS_TYPE_ID === params) return "PREPAY_MAXIMUM_POWER_STATUS_TYPE_ID";
        else if (Constants.Categories.PREPAY_AUDIBLE_ALARM_STATUS_TYPES === params) return "PREPAY_AUDIBLE_ALARM_STATUS_TYPES";
        else if (Constants.Categories.PREPAY_CREDIT_TYPES === params) return "PREPAY_CREDIT_TYPES";
        else if (Constants.Categories.ENGINE_IP_ADDRESS_ASSIGNMENT_TYPE_ID === params) return "ENGINE_IP_ADDRESS_ASSIGNMENT_TYPE_ID";
        else if (Constants.Categories.DEVICE_TEST_POINT_STATUS_TYPES === params) return "DEVICE_TEST_POINT_STATUS_TYPES";
        else if (Constants.Categories.GATEWAY_MESH_DETECTION_STATUS_TYPES === params) return "GATEWAY_MESH_DETECTION_STATUS_TYPES";
        else if (Constants.Categories.READ_TOU_CALENDAR_OPTION_TYPES === params) return "READ_TOU_CALENDAR_OPTION_TYPES";
        else if (Constants.Categories.CONNECT_REQUEST_SOURCE_TYPES === params) return "CONNECT_REQUEST_SOURCE_TYPES";
        else if (Constants.Categories.DEVICE_LOAD_VOLTAGE_STATUS_TYPES === params) return "DEVICE_LOAD_VOLTAGE_STATUS_TYPES";
        else if (Constants.Categories.TEST_TCPIP_PORT_STATUS_TYPES === params) return "TEST_TCPIP_PORT_STATUS_TYPES";
        else if (Constants.Categories.EVENT_HISTORY_SORT_BY_TYPES === params) return "EVENT_HISTORY_SORT_BY_TYPES";
        else if (Constants.Categories.PROCESSED_STATUS_TYPES === params) return "PROCESSED_STATUS_TYPES";
        else if (Constants.Categories.PASSIVE_FTP_IP_ADDRESS_SOURCE_TYPES === params) return "PASSIVE_FTP_IP_ADDRESS_SOURCE_TYPES";
        else if (Constants.Categories.CONTINUOUS_EVENT_LOG_CONFIGURATION_STATUS_TYPES === params) return "CONTINUOUS_EVENT_LOG_CONFIGURATION_STATUS_TYPES";
        else if (Constants.Categories.CONTINUOUS_EVENT_LOG_CONFIGURATION_PRIORITY_LEVEL_TYPES === params) return "CONTINUOUS_EVENT_LOG_CONFIGURATION_PRIORITY_LEVEL_TYPES";
        else if (Constants.Categories.METER_ALARM_STATUS_TYPES === params) return "METER_ALARM_STATUS_TYPES";
        else if (Constants.Categories.MEP_ALARM_STATUS_TYPES === params) return "MEP_ALARM_STATUS_TYPES";
        else if (Constants.Categories.METER_ALARM_EVENT_LOG_STATUS_TYPES === params) return "METER_ALARM_EVENT_LOG_STATUS_TYPES";
        else if (Constants.Categories.GATEWAY_EVENT_STATUS_TYPES === params) return "GATEWAY_EVENT_STATUS_TYPES";
        else if (Constants.Categories.GATEWAY_EVENT_ON_CLEAR_STATUS_TYPES === params) return "GATEWAY_EVENT_ON_CLEAR_STATUS_TYPES";
        else if (Constants.Categories.COMMAND_TYPES === params) return "COMMAND_TYPES";
        else if (Constants.Categories.INTERFACE_READ_STATUS_TYPES === params) return "INTERFACE_READ_STATUS_TYPES";
        else if (Constants.Categories.BILLING_INTERFACE_MISMATCH_TYPES === params) return "BILLING_INTERFACE_MISMATCH_TYPES";
        else if (Constants.Categories.GATEWAY_PLC_STATUS_TYPES === params) return "GATEWAY_PLC_STATUS_TYPES";
        else if (Constants.Categories.SELF_READ_RETRIEVAL_STATUS_TYPES === params) return "SELF_READ_RETRIEVAL_STATUS_TYPES";
        else if (Constants.Categories.ONE_TIME_READ_REQUEST_TYPES === params) return "ONE_TIME_READ_REQUEST_TYPES";
        else if (Constants.Categories.CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_STATUS_TYPES === params) return "CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_STATUS_TYPES";
        else if (Constants.Categories.CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_STOPPED_REASON_TYPES === params) return "CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_STOPPED_REASON_TYPES";
        else if (Constants.Categories.CUMULATIVE_DEMAND_STATUS_TYPES === params) return "CUMULATIVE_DEMAND_STATUS_TYPES";
        else if (Constants.Categories.CONTINUOUS_CUMULATIVE_DEMAND_STATUS_TYPES === params) return "CONTINUOUS_CUMULATIVE_DEMAND_STATUS_TYPES";
        else if (Constants.Categories.PRESENT_DEMAND_CALCULATION_TYPES === params) return "PRESENT_DEMAND_CALCULATION_TYPES";
        else if (Constants.Categories.DEMAND_CONFIGURATION_FAILURE_TYPES === params) return "DEMAND_CONFIGURATION_FAILURE_TYPES";
        else if (Constants.Categories.PHASE_STATUS_TYPES === params) return "PHASE_STATUS_TYPES";
        else if (Constants.Categories.LOAD_PROFILE_CONFIGURATION_ANSI_COMPLIANCE_STATUS_TYPES === params) return "LOAD_PROFILE_CONFIGURATION_ANSI_COMPLIANCE_STATUS_TYPES";
        else if (Constants.Categories.LOAD_PROFILE_CONFIGURATION_SKIPPED_INTERVAL_VALUES_TYPES === params) return "LOAD_PROFILE_CONFIGURATION_SKIPPED_INTERVAL_VALUES_TYPES";
        else if (Constants.Categories.AGENT_TYPES === params) return "AGENT_TYPES";
        else if (Constants.Categories.DISCONNECT_SWITCH_LED_BEHAVIOR === params) return "DISCONNECT_SWITCH_LED_BEHAVIOR";
        else if (Constants.Categories.DISCONNECT_SWITCH_LED_STATUS === params) return "DISCONNECT_SWITCH_LED_STATUS";
        else if (Constants.Categories.MANUAL_DISCONNECT_STATUS === params) return "MANUAL_DISCONNECT_STATUS";
        else if (Constants.Categories.REMOTE_RECONNECT_STATUS === params) return "REMOTE_RECONNECT_STATUS";
        else if (Constants.Categories.POWER_QUALITY_STATISTIC_TYPES === params) return "POWER_QUALITY_STATISTIC_TYPES";
        else if (Constants.Categories.COMMAND_FAILURE_REASONS === params) return "COMMAND_FAILURE_REASONS";
        else if (Constants.Categories.LOAD_PROFILE_UPLOAD_TYPES === params) return "LOAD_PROFILE_UPLOAD_TYPES";
        else if (Constants.Categories.PENDING_CHANGE_ENTITY_TYPES === params) return "PENDING_CHANGE_ENTITY_TYPES";
        else if (Constants.Categories.DEMAND_CONFIGURATION_STATUS_TYPES === params) return "DEMAND_CONFIGURATION_STATUS_TYPES";
        else if (Constants.Categories.GATEWAY_POWER_LINE_CARRIER_COMMUNICATION_STATUS_TYPES === params) return "GATEWAY_POWER_LINE_CARRIER_COMMUNICATION_STATUS_TYPES";
        else if (Constants.Categories.USER_AUTHENTICATION_TYPES === params) return "USER_AUTHENTICATION_TYPES";
        else if (Constants.Categories.IMPORT_DATA_TYPES === params) return "IMPORT_DATA_TYPES";
        else if (Constants.Categories.IMPORT_PROCESSING_COMPLETION_STATUS_TYPES === params) return "IMPORT_PROCESSING_COMPLETION_STATUS_TYPES";
        else if (Constants.Categories.METER_ALARMS === params) return "METER_ALARMS";

        //-----added in V4------
        else if (Constants.Categories.DEVICE_KEY_CATEGORIES === params) return "DEVICE_KEY_CATEGORIES";
        else if (Constants.Categories.DATA_CONTENT_RETURN_TYPES === params) return "DATA_CONTENT_RETURN_TYPES";
        else if (Constants.Categories.GATEWAY_KEY_CATEGORIES === params) return "GATEWAY_KEY_CATEGORIES";
        else if (Constants.Categories.LOGICAL_RESTRICTION_TYPES === params) return "LOGICAL_RESTRICTION_TYPES";
        else if (Constants.Categories.GATEWAY_RETRIEVE_LIST_SORT_BY_TYPES === params) return "GATEWAY_RETRIEVE_LIST_SORT_BY_TYPES";
        else if (Constants.Categories.VALUE_MATCH_TYPES === params) return "VALUE_MATCH_TYPES";
        else if (Constants.Categories.GATEWAY_ATM_MODE_TYPES === params) return "GATEWAY_ATM_MODE_TYPES";
        else if (Constants.Categories.DEVICE_ATM_MODE_TYPES === params) return "DEVICE_ATM_MODE_TYPES";
        else if (Constants.Categories.COMMAND_HISTORY_SORT_BY_TYPES === params) return "COMMAND_HISTORY_SORT_BY_TYPES";
        else if (Constants.Categories.GATEWAY_RETRIEVE_COMMUNICATION_HISTORY_SORT_BY_TYPES === params) return "GATEWAY_RETRIEVE_COMMUNICATION_HISTORY_SORT_BY_TYPES";
        else if (Constants.Categories.DEVICE_RETRIEVE_LIST_SORT_BY_TYPES === params) return "DEVICE_RETRIEVE_LIST_SORT_BY_TYPES";
        else if (Constants.Categories.GATEWAY_EVENT_RETRIEVE_TYPES === params) return "GATEWAY_EVENT_RETRIEVE_TYPES";
        else if (Constants.Categories.EVENT_TYPES === params) return "EVENT_TYPES";
        else if (Constants.Categories.HIERARCHY_RETRIEVE_TYPES === params) return "HIERARCHY_RETRIEVE_TYPES";
        else if (Constants.Categories.ATTRIBUTE_RETRIEVE_TYPES === params) return "ATTRIBUTE_RETRIEVE_TYPES";
        else if (Constants.Categories.COMMAND_FAILURE_REASON_TYPES === params) return "COMMAND_FAILURE_REASON_TYPES";
        else if (Constants.Categories.DATA_CONCENTRATOR_LOAD_PROFILE_SOURCE_TYPES === params) return "DATA_CONCENTRATOR_LOAD_PROFILE_SOURCE_TYPES";
        else if (Constants.Categories.MEP_READ_SCHEDULE_FREQUENCY_TYPES === params) return "MEP_READ_SCHEDULE_FREQUENCY_TYPES";
        else if (Constants.Categories.DATA_URGENCY_TYPES === params) return "DATA_URGENCY_TYPES";
        else if (Constants.Categories.DISCONNECT_RECONNECT_WITH_LSV_STATUS_TYPES === params) return "DISCONNECT_RECONNECT_WITH_LSV_STATUS_TYPES";
        else if (Constants.Categories.DISCONNECT_RECONNECT_WITH_LS_STATUS_TYPES === params) return "DISCONNECT_RECONNECT_WITH_LS_STATUS_TYPES";

        //------added in V4.1 ------
        else if (Constants.Categories.FILE_RETRIEVE_LIST_SORT_BY_TYPES === params) return "FILE_RETRIEVE_LIST_SORT_BY_TYPES";
        else if (Constants.Categories.FILE_TYPES === params) return "FILE_TYPES";
        else if (Constants.Categories.DEVICE_DISCONNECT_LOCKED_OPEN_STATUS_TYPES === params) return "DEVICE_DISCONNECT_LOCKED_OPEN_STATUS_TYPES";

        //------added in V5.0 ------
        else if (Constants.Categories.LOAD_PROFILE_CONFIGURATION_READ_TYPES === params) return "LOAD_PROFILE_CONFIGURATION_READ_TYPES";
        else if (Constants.Categories.LOAD_PROFILE_CONFIGURATION_TYPES === params) return "LOAD_PROFILE_CONFIGURATION_TYPES";
        else if (Constants.Categories.TRUSTED_SOURCE_TYPES === params) return "TRUSTED_SOURCE_TYPES";
        else if (Constants.Categories.GATEWAY_EXPORT_DATA_TYPES === params) return "GATEWAY_EXPORT_DATA_TYPES";
        else if (Constants.Categories.DEVICE_EXPORT_DATA_TYPES === params) return "DEVICE_EXPORT_DATA_TYPES";
        else if (Constants.Categories.EXPORT_PROCESSING_COMPLETION_STATUS_TYPES === params) return "EXPORT_PROCESSING_COMPLETION_STATUS_TYPES";
        else if (Constants.Categories.IMPORT_FAILURE_REASON_TYPES === params) return "IMPORT_FAILURE_REASON_TYPES";
        else if (Constants.Categories.EXPORT_FAILURE_REASON_TYPES === params) return "EXPORT_FAILURE_REASON_TYPES";
        else if (Constants.Categories.CONNECT_FAILURE_REASONS === params) return "CONNECT_FAILURE_REASONS";
        else if (Constants.Categories.DATA_COLLECTION_TYPES === params) return "DATA_COLLECTION_TYPES";
        else if (Constants.Categories.ASYMMETRIC_KEY_TYPES === params) return "ASYMMETRIC_KEY_TYPES";
        else if (Constants.Categories.COMMAND_CANCELLED_TYPES === params) return "COMMAND_CANCELLED_TYPES";
        else if (Constants.Categories.AUTO_APPLY_STATUS_TYPES === params) return "AUTO_APPLY_STATUS_TYPES";

        //------added in V5.1----------
        else if (Constants.Categories.BATCH_TYPES === params) return "BATCH_TYPES";
        else if (Constants.Categories.PROPERTY_DATA_TYPE === params) return "PROPERTY_DATA_TYPE";
        else if (Constants.Categories.COMMISSION_STATUS_TYPES === params) return "COMMISSION_STATUS_TYPES";

        else if (Constants.Categories.REGISTERED_OBJECT_EVENT_TYPE === params) return "REGISTERED_OBJECT_EVENT_TYPE";
        else if (Constants.Categories.METER_DOMAIN_ID_STATUS_TYPE === params) return "METER_DOMAIN_ID_STATUS_TYPE";
        else if (Constants.Categories.DEVICE_METER_SOURCE_TYPES === params) return "DEVICE_METER_SOURCE_TYPES";
        else if (Constants.Categories.INTERNAL_EVENT_TYPES === params) return "INTERNAL_EVENT_TYPES";

        //---5.2------
        else if (Constants.Categories.CLEAR_CREDITS_BEFORE_ADD_OPTION_TYPES === params) return "CLEAR_CREDITS_BEFORE_ADD_OPTION_TYPES";

        //---5.3------
        else if (Constants.Categories.EVENT_LOG_TYPES === params) return "EVENT_LOG_TYPES";
        else if (Constants.Categories.METER_DISPLAY_LIST_TYPES === params) return "METER_DISPLAY_LIST_TYPES";
        else if (Constants.Categories.AVERAGE_POWER_CONFIGURATION_TYPES === params) return "AVERAGE_POWER_CONFIGURATION_TYPES";

        //---5.4------
        else if (Constants.Categories.METER_PLC_SECURITY_SUITES === params) return "METER_PLC_SECURITY_SUITES";
        else if (Constants.Categories.REMOTE_FILE_MANAGEMENT_WAN_SELECTION === params) return "REMOTE_FILE_MANAGEMENT_WAN_SELECTION";

        //---6.0------
        else if (Constants.Categories.MEP_ALARMS === params) return "MEP_ALARMS";

        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.Categories.MAXIMUM_POWER_TYPES === params) return "MAXIMUM_POWER_TYPES";
        /*        [Obsolete("v5.4.000 - no replacement, not used")]*/
        else if (Constants.Categories.SCHEDULEDTASKSPENDING_STATUS_TYPE === params) return "SCHEDULEDTASKSPENDING_STATUS_TYPE";
        /*        [Obsolete("v6.0.000 - no replacement, not used")]*/
        else if (Constants.Categories.ESS_CREDENTIALS_BYPASS_SSL_TYPES === params) return "ESS_CREDENTIALS_BYPASS_SSL_TYPES";
        /////////////////////////////////////////////////////////////////////////////////////////

        return "";
    }

    static decodeConstantsEventLogTypes(params) {
        if (Constants.EventLogTypes.LOG_1 === params) return "LOG_1";
        else if (Constants.EventLogTypes.LOG_2 === params) return "LOG_2";

        return "";
    }
    // Contains the list of database servers supported
    static decodeConstantsDatabaseServerType(params) {
        if (Constants.DatabaseServerType.SQL_SERVER === params) return "SQL_SERVER";

        return "";
    }

    // Contains the list of types supported in the Task Distribution Framework
    static decodeConstantsTaskProcessorTypes(params) {
        if (Constants.TaskProcessorTypes.ARCHIVE === params) return "ARCHIVE";
        else if (Constants.TaskProcessorTypes.SCHEDULE_CONTROLLER === params) return "SCHEDULE_CONTROLLER";
        else if (Constants.TaskProcessorTypes.GLOBAL_TASK_MANAGER === params) return "GLOBAL_TASK_MANAGER";
        else if (Constants.TaskProcessorTypes.LOCAL_TASK_MANAGER === params) return "LOCAL_TASK_MANAGER";
        else if (Constants.TaskProcessorTypes.TASK_TIMEOUT === params) return "TASK_TIMEOUT";
        else if (Constants.TaskProcessorTypes.DC1000_ADAPTER === params) return "DC1000_ADAPTER";
        else if (Constants.TaskProcessorTypes.EVENT === params) return "EVENT";
        else if (Constants.TaskProcessorTypes.ALWAYS_ON_IP_ADAPTER === params) return "ALWAYS_ON_IP_ADAPTER";
        else if (Constants.TaskProcessorTypes.ATM === params) return "ATM";
        else if (Constants.TaskProcessorTypes.NES_SYSTEM_SOFTWARE === params) return "NES_SYSTEM_SOFTWARE";
        else if (Constants.TaskProcessorTypes.REMOTE_FILE_MANAGEMENT === params) return "REMOTE_FILE_MANAGEMENT";

        /*        [Obsolete("v5.4.000 - no replacement, no longer used")]*/
        else if (Constants.TaskProcessorTypes.SCHEDULE_PROCESSOR === params) return "SCHEDULE_PROCESSOR";

        return "";
    }

    // Contains the list of statuses used by the Task Distribution Framework
    static decodeConstantsTaskStatusTypes(params) {
        if (Constants.TaskStatusTypes.WAITING === params) return "WAITING";
        else if (Constants.TaskStatusTypes.IN_PROGRESS === params) return "IN_PROGRESS";
        else if (Constants.TaskStatusTypes.SLEEPING === params) return "SLEEPING";
        else if (Constants.TaskStatusTypes.ERROR === params) return "ERROR";

        return "";
    }

    // Contains the list of types of attributes supported
    static decodeConstantsAttributeTypes(params) {
        if (Constants.AttributeTypes.DEFINED === params) return "DEFINED";
        else if (Constants.AttributeTypes.STRING === params) return "STRING";
        else if (Constants.AttributeTypes.NUMERIC === params) return "NUMERIC";

        return "";
    }

    // Contains the list of external service return codes
    static decodeConstantsExternalServiceReturnCodes(params) {
        if (Constants.ExternalServiceReturnCodes.SUCCEEDED === params) return "SUCCEEDED";
        else if (Constants.ExternalServiceReturnCodes.FAILURE === params) return "FAILURE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_XML_PARAMETERS_FORMAT === params) return "INVALID_XML_PARAMETERS_FORMAT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PARAMETERS_NODE_MISSING === params) return "INVALID_PARAMETERS_NODE_MISSING";

        else if (Constants.ExternalServiceReturnCodes.NO_DATA_TO_SET === params) return "NO_DATA_TO_SET";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_LOG_TYPE_ID === params) return "INVALID_EVENT_LOG_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_EVENT_LOG_TYPE_ID === params) return "DUPLICATE_EVENT_LOG_TYPE_ID";

        else if (Constants.ExternalServiceReturnCodes.INVALID_NONRECURRING_DATE_ACTION === params) return "INVALID_NONRECURRING_DATE_ACTION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NONRECURRING_DATE_DATE === params) return "INVALID_NONRECURRING_DATE_DATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NONRECURRING_DATE_COUNT === params) return "INVALID_NONRECURRING_DATE_COUNT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NONRECURRING_DATE_PERFORM_BILLING_READ === params) return "INVALID_NONRECURRING_DATE_PERFORM_BILLING_READ";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NONRECURRING_DATE_PERFORM_DEMAND_RESET === params) return "INVALID_NONRECURRING_DATE_PERFORM_DEMAND_RESET";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULES_SWITCH_COUNT === params) return "INVALID_DAY_SCHEDULES_SWITCH_COUNT";

        //added in v5.1
        else if (Constants.ExternalServiceReturnCodes.HARDWARE_CONFIGURATION_UNKNOWN === params) return "HARDWARE_CONFIGURATION_UNKNOWN";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COS_APP_DELTA_LP_SETS === params) return "INVALID_COS_APP_DELTA_LP_SETS";

        //added in v5
        else if (Constants.ExternalServiceReturnCodes.INVALID_MOVE_LOCAL_METER === params) return "INVALID_MOVE_LOCAL_METER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NODE_MISSING === params) return "INVALID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RETURN_HARDWARE_CONFIGURATION_OPTION_BIT_OFFSET === params) return "INVALID_RETURN_HARDWARE_CONFIGURATION_OPTION_BIT_OFFSET";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RETURN_HARDWARE_CONFIGURATION_OPTION_BIT_LENGTH === params) return "INVALID_RETURN_HARDWARE_CONFIGURATION_OPTION_BIT_LENGTH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_ID === params) return "INVALID_DEVICE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_INDEX === params) return "INVALID_MBUS_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GROUP_ACTION === params) return "INVALID_GROUP_ACTION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TYPE_OF_ENTITY_TYPE_ID === params) return "INVALID_TYPE_OF_ENTITY_TYPE_ID";

        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_DATA_SET_ID === params) return "UNSUPPORTED_DATA_SET_ID";

        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_MEMBER_ID_NODE_MISSING === params) return "INVALID_HIERARCHY_LEVEL_MEMBER_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NAME_NODE_MISSING === params) return "INVALID_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.HIERARCHY_LEVEL_MEMBER_ID_BLANK === params) return "HIERARCHY_LEVEL_MEMBER_ID_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_NAME_BLANK === params) return "INVALID_DEVICE_NAME_BLANK";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_DEVICE_NAME === params) return "DUPLICATE_DEVICE_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_ID === params) return "INVALID_ATTRIBUTE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_VALUE === params) return "INVALID_ATTRIBUTE_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NUMERIC_ATTRIBUTE_VALUE === params) return "INVALID_NUMERIC_ATTRIBUTE_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_TYPE_ID === params) return "INVALID_ATTRIBUTE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_DEFINEDVALUE_ID === params) return "INVALID_ATTRIBUTE_DEFINEDVALUE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_NAME_DUPLICATE === params) return "INVALID_ATTRIBUTE_NAME_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_DEFINEDVALUE_NAME_DUPLICATE === params) return "INVALID_ATTRIBUTE_DEFINEDVALUE_NAME_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_NAME_BLANK === params) return "INVALID_ATTRIBUTE_NAME_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_DEFINEDVALUE_NAME_BLANK === params) return "INVALID_ATTRIBUTE_DEFINEDVALUE_NAME_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_ID_NOT_DEFINED === params) return "INVALID_ATTRIBUTE_ID_NOT_DEFINED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_ID_NOT_STRING === params) return "INVALID_ATTRIBUTE_ID_NOT_STRING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_ID_NOT_NUMERIC === params) return "INVALID_ATTRIBUTE_ID_NOT_NUMERIC";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_HIERARCHY_ASSIGNMENT === params) return "DUPLICATE_HIERARCHY_ASSIGNMENT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_MEMBER_ID === params) return "INVALID_HIERARCHY_LEVEL_MEMBER_ID";

        else if (Constants.ExternalServiceReturnCodes.INVALID_TYPE_CATEGORY === params) return "INVALID_TYPE_CATEGORY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TYPE_ID === params) return "INVALID_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_TYPE_ID === params) return "INVALID_DATA_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_USER_AUTHENTICATION_TYPE_ID === params) return "INVALID_USER_AUTHENTICATION_TYPE_ID";

        else if (Constants.ExternalServiceReturnCodes.PARTIAL_SUCCESS === params) return "PARTIAL_SUCCESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_ID === params) return "INVALID_HIERARCHY_LEVEL_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_ID === params) return "INVALID_HIERARCHY_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_NAME_DUPLICATE === params) return "INVALID_HIERARCHY_NAME_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_NAME_DUPLICATE === params) return "INVALID_HIERARCHY_LEVEL_NAME_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_MEMBER_NAME_DUPLICATE === params) return "INVALID_HIERARCHY_LEVEL_MEMBER_NAME_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_MULTIPLE_CHILDREN === params) return "INVALID_HIERARCHY_LEVEL_MULTIPLE_CHILDREN";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_NAME_BLANK === params) return "INVALID_HIERARCHY_NAME_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_NAME_BLANK === params) return "INVALID_HIERARCHY_LEVEL_NAME_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_MEMBER_NAME_BLANK === params) return "INVALID_HIERARCHY_LEVEL_MEMBER_NAME_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_PARENT_ID === params) return "INVALID_HIERARCHY_LEVEL_PARENT_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_MEMBER_PARENT_ID === params) return "INVALID_HIERARCHY_LEVEL_MEMBER_PARENT_ID";
        // Level specified for the Hierarchy Level Member as the parent is not valid for this member.
        // May be because the Level Member specified as the parent is lower in the hierarchy tree than the
        // member or because the level member specified is not in the same hierarchy.
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_MEMBER_PARENT_LEVEL === params) return "INVALID_HIERARCHY_LEVEL_MEMBER_PARENT_LEVEL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_RESTRICTION_TYPE_ID === params) return "INVALID_HIERARCHY_RESTRICTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_MEMBER_NAME_CHARACTERS === params) return "INVALID_HIERARCHY_LEVEL_MEMBER_NAME_CHARACTERS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_DELETION_TYPE_ID === params) return "INVALID_HIERARCHY_DELETION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_NAME_CHARACTERS === params) return "INVALID_HIERARCHY_LEVEL_NAME_CHARACTERS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_STRUCTURE === params) return "INVALID_HIERARCHY_LEVEL_STRUCTURE";

        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRENCE_TYPE_ID === params) return "INVALID_RECURRENCE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_STATUS_TYPE_ID === params) return "INVALID_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIMEZONE_ID === params) return "INVALID_TIMEZONE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIMEZONE_ID_NODE_MISSING === params) return "INVALID_TIMEZONE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_STARTDATE === params) return "INVALID_STARTDATE";

        else if (Constants.ExternalServiceReturnCodes.INVALID_ENDDATE === params) return "INVALID_ENDDATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIORITY === params) return "INVALID_PRIORITY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIORITY_NOT_SUPPORTED === params) return "INVALID_PRIORITY_NOT_SUPPORTED";

        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_SOFTWARE_VERSION_NOT_SUPPORTED === params) return "INVALID_METER_SOFTWARE_VERSION_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TRACKING_ID === params) return "INVALID_TRACKING_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TRACKING_ID_NODE_MISSING === params) return "INVALID_TRACKING_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_KEY_CATEGORY_TYPE_ID_NODE_MISSING === params) return "INVALID_KEY_CATEGORY_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_KEY_CATEGORY_TYPE_ID === params) return "INVALID_KEY_CATEGORY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_KEY_CATEGORIES_NODE_MISSING === params) return "INVALID_KEY_CATEGORIES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_KEY_CATEGORY_NODE_MISSING === params) return "INVALID_KEY_CATEGORY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_CONTENT_RETURN_TYPE_ID_NODE_MISSING === params) return "INVALID_DATA_CONTENT_RETURN_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_CONTENT_RETURN_TYPE_ID === params) return "INVALID_DATA_CONTENT_RETURN_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_DATA_CONTENT_RETURN_TYPE_ID === params) return "UNSUPPORTED_DATA_CONTENT_RETURN_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.NO_DISCOVERY_DATA_FOUND === params) return "NO_DISCOVERY_DATA_FOUND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_VERSION_ID_MATCH_TYPE_ID === params) return "INVALID_VERSION_ID_MATCH_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXTERNAL_TASK_IDENTIFIER === params) return "INVALID_EXTERNAL_TASK_IDENTIFIER";

        //Attribute Manager
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_NAME_MATCH_TYPE_ID === params) return "INVALID_ATTRIBUTE_NAME_MATCH_TYPE_ID";

        // Gateway Manager
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_ID === params) return "INVALID_GATEWAY_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_TYPE_ID === params) return "INVALID_GATEWAY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_TYPE_ID_NODE_MISSING === params) return "INVALID_GATEWAY_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_TEMPLATE_PARAMETER_ID === params) return "INVALID_GATEWAY_TEMPLATE_PARAMETER_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_TEMPLATE_NAME === params) return "INVALID_GATEWAY_TEMPLATE_NAME";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_GATEWAY_TEMPLATE_NAME === params) return "DUPLICATE_GATEWAY_TEMPLATE_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_STATUS_TYPE_ID === params) return "INVALID_GATEWAY_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_GATEWAY_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_NAME === params) return "INVALID_GATEWAY_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TAKE_HIERARCHIES_PARAMETER_ID === params) return "INVALID_TAKE_HIERARCHIES_PARAMETER_ID";

        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_VALUE_NODE_MISSING === params) return "INVALID_ATTRIBUTE_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_ID_NODE_MISSING === params) return "INVALID_ATTRIBUTE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATETIME === params) return "INVALID_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_TEMPLATE_ID === params) return "INVALID_GATEWAY_TEMPLATE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_NAME_BLANK === params) return "INVALID_GATEWAY_NAME_BLANK";
        else if (Constants.ExternalServiceReturnCodes.DEVICES_IN_USE === params) return "DEVICES_IN_USE";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_GATEWAY_TYPE_ID === params) return "UNSUPPORTED_GATEWAY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PPP_USERNAME === params) return "INVALID_PPP_USERNAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PPP_USERNAME_DUPLICATE === params) return "INVALID_PPP_USERNAME_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PPP_PASSWORD === params) return "INVALID_PPP_PASSWORD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_COMMUNICATION_HISTORY_ID === params) return "INVALID_GATEWAY_COMMUNICATION_HISTORY_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_COMMUNICATION_HISTORY_INITIATED_START_DATETIME === params) return "INVALID_GATEWAY_COMMUNICATION_HISTORY_INITIATED_START_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_COMMUNICATION_HISTORY_INITIATED_END_DATETIME === params) return "INVALID_GATEWAY_COMMUNICATION_HISTORY_INITIATED_END_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_COMMUNICATION_HISTORY_INITIATED_DATETIME_RANGE === params) return "INVALID_GATEWAY_COMMUNICATION_HISTORY_INITIATED_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_COMMUNICATION_HISTORY_REQUESTED_START_DATETIME === params) return "INVALID_GATEWAY_COMMUNICATION_HISTORY_REQUESTED_START_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_COMMUNICATION_HISTORY_REQUESTED_END_DATETIME === params) return "INVALID_GATEWAY_COMMUNICATION_HISTORY_REQUESTED_END_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_COMMUNICATION_HISTORY_REQUESTED_DATETIME_RANGE === params) return "INVALID_GATEWAY_COMMUNICATION_HISTORY_REQUESTED_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_COMMUNICATION_HISTORY_STATUS_TYPE_ID === params) return "INVALID_GATEWAY_COMMUNICATION_HISTORY_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMUNICATION_REQUEST_TYPE_ID === params) return "INVALID_COMMUNICATION_REQUEST_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMUNICATION_REQUEST_TYPE_ID_NODE_MISSING === params) return "INVALID_COMMUNICATION_REQUEST_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_COMMUNICATION_TYPE_ID === params) return "INVALID_GATEWAY_COMMUNICATION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_COMMUNICATION_TYPE_ID_NODE_MISSING === params) return "INVALID_GATEWAY_COMMUNICATION_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.GATEWAY_INITIATED_COMMUNICATION_IN_PROGRESS === params) return "GATEWAY_INITIATED_COMMUNICATION_IN_PROGRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ACTIVATION_DATETIME === params) return "INVALID_ACTIVATION_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.GATEWAY_NOT_ENABLED === params) return "GATEWAY_NOT_ENABLED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_IP_ADDRESS === params) return "INVALID_IP_ADDRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MODEM_INIT_STRING === params) return "INVALID_MODEM_INIT_STRING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEARCH_CRITERIA === params) return "INVALID_SEARCH_CRITERIA";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_NODE_MISSING === params) return "INVALID_ATTRIBUTE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_MEMBER_NODE_MISSING === params) return "INVALID_HIERARCHY_LEVEL_MEMBER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_CONCENTRATOR_IP_ADDRESS === params) return "INVALID_DATA_CONCENTRATOR_IP_ADDRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_IP_ADDRESS_DUPLICATE === params) return "INVALID_IP_ADDRESS_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_IP_ADDRESS_OUT_OF_RANGE === params) return "INVALID_IP_ADDRESS_OUT_OF_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENABLE_TOTAL_ENERGY_VALUE === params) return "INVALID_ENABLE_TOTAL_ENERGY_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_APPLICATION_LEVEL_AUTHENTICATION_VALUE === params) return "INVALID_APPLICATION_LEVEL_AUTHENTICATION_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_NODE_MISSING === params) return "INVALID_SCHEDULE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_ID_NODE_MISSING === params) return "INVALID_SCHEDULE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_DISCONNECT_COMMAND === params) return "INVALID_GATEWAY_DISCONNECT_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_DISCONNECT_IN_PROGRESS === params) return "INVALID_GATEWAY_DISCONNECT_IN_PROGRESS";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_GATEWAY_COMMUNICATION_REQUEST_TYPE_ID === params) return "UNSUPPORTED_GATEWAY_COMMUNICATION_REQUEST_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_SOFTWARE_VERSION_NOT_SUPPORTED === params) return "INVALID_GATEWAY_SOFTWARE_VERSION_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NEURON_ID_MISSING === params) return "INVALID_NEURON_ID_MISSING";
        else if (Constants.ExternalServiceReturnCodes.GATEWAY_DISABLED === params) return "GATEWAY_DISABLED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTROL_RELAY_STATUS_TYPE_ID === params) return "INVALID_CONTROL_RELAY_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENABLE_MAXIMUM_POWER_NODE_MISSING === params) return "INVALID_ENABLE_MAXIMUM_POWER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INITIAL_GATEWAY_COMMUNICATION_NOT_COMPLETE === params) return "INITIAL_GATEWAY_COMMUNICATION_NOT_COMPLETE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_GATEWAY_TO_DEVICE_COMMUNICATION_STATUS_TYPE_ID === params) return "INVALID_LAST_GATEWAY_TO_DEVICE_COMMUNICATION_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.MULTIPLE_GATEWAYS_WITH_SERIAL_NUMBER === params) return "MULTIPLE_GATEWAYS_WITH_SERIAL_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIORITY_NODE_MISSING === params) return "INVALID_PRIORITY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_GATEWAY_COMMUNICATION_TYPE_ID === params) return "UNSUPPORTED_GATEWAY_COMMUNICATION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SERVER_ROUTABLE_IP_ADDRESS_NODE_MISSING === params) return "INVALID_SERVER_ROUTABLE_IP_ADDRESS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.WAN_CONFIGURATION_ASSIGNMENT_LIMIT_REACHED === params) return "WAN_CONFIGURATION_ASSIGNMENT_LIMIT_REACHED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIORITY_DUPLICATE === params) return "INVALID_PRIORITY_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ASSIGNMENT_NAME_NODE_MISSING === params) return "INVALID_ASSIGNMENT_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ASSIGNMENT_NAME === params) return "INVALID_ASSIGNMENT_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ASSIGNMENT_NAME_DUPLICATE === params) return "INVALID_ASSIGNMENT_NAME_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SERVER_ROUTABLE_IP_ADDRESS === params) return "INVALID_SERVER_ROUTABLE_IP_ADDRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SERVER_ROUTABLE_IP_ADDRESS_DUPLICATE === params) return "INVALID_SERVER_ROUTABLE_IP_ADDRESS_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEFAULT_ASSIGNMENT_NAME_NOT_FOUND === params) return "INVALID_DEFAULT_ASSIGNMENT_NAME_NOT_FOUND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_WAN_CONFIGURATION_ASSIGNMENT === params) return "INVALID_WAN_CONFIGURATION_ASSIGNMENT";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_WAN_CONFIGURATION_COMMUNICATION_TYPE_ID === params) return "UNSUPPORTED_WAN_CONFIGURATION_COMMUNICATION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_IP_ADDRESS_NODE_MISSING === params) return "INVALID_IP_ADDRESS_NODE_MISSING";

        //same value as INVALID_IP_ADDRESS_NODE_MISSING, used for register.
        else if (Constants.ExternalServiceReturnCodes.INVALID_WAN_CONFIGURATION_ASSIGNMENTS_NODE_MISSING === params) return "INVALID_WAN_CONFIGURATION_ASSIGNMENTS_NODE_MISSING";
        //
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEFAULT_WAN_CONFIGURATION_NOT_FOUND === params) return "INVALID_DEFAULT_WAN_CONFIGURATION_NOT_FOUND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_WAN_CONFIGURATION_ASSIGNMENT_NODE_MISSING === params) return "INVALID_WAN_CONFIGURATION_ASSIGNMENT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_WAN_CONFIGURATION_ID_NODE_MISSING === params) return "INVALID_WAN_CONFIGURATION_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_WAN_CONFIGURATION_ID === params) return "INVALID_WAN_CONFIGURATION_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NUMBER_OF_GATEWAY_WAN_CONFIGURATIONS === params) return "INVALID_NUMBER_OF_GATEWAY_WAN_CONFIGURATIONS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_WAN_CONFIGURATION_NODE_MISSING === params) return "INVALID_WAN_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CURRENT_WAN_NAME_NODE_MISSING === params) return "INVALID_CURRENT_WAN_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CURRENT_WAN_NAME === params) return "INVALID_CURRENT_WAN_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_WAN_CONFIGURATION_NAME_NODE_MISSING === params) return "INVALID_WAN_CONFIGURATION_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENCRYPTION_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_ENCRYPTION_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENCRYPTION_STATUS_TYPE_ID === params) return "INVALID_ENCRYPTION_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_APPLICATION_LEVEL_AUTHENTICATION_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_APPLICATION_LEVEL_AUTHENTICATION_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_APPLICATION_LEVEL_AUTHENTICATION_STATUS_TYPE_ID === params) return "INVALID_APPLICATION_LEVEL_AUTHENTICATION_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_CONFIGURATION_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_GATEWAY_WAN_CONFIGURATION_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_CONFIGURATION_STATUS_TYPE_ID === params) return "INVALID_GATEWAY_WAN_CONFIGURATION_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.ENABLED_GATEWAY_WAN_CONFIGURATION_MISSING === params) return "ENABLED_GATEWAY_WAN_CONFIGURATION_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MODEM_INITIALIZATION_STRING_NODE_MISSING === params) return "INVALID_MODEM_INITIALIZATION_STRING_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_CONFIGURATION_PRIORITY_NODE_MISSING === params) return "INVALID_GATEWAY_WAN_CONFIGURATION_PRIORITY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_CONFIGURATION_PRIORITY === params) return "INVALID_GATEWAY_WAN_CONFIGURATION_PRIORITY";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_GATEWAY_WAN_CONFIGURATION_PRIORITY === params) return "DUPLICATE_GATEWAY_WAN_CONFIGURATION_PRIORITY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_CONFIGURATION_PHONE_NUMBER_NODE_MISSING === params) return "INVALID_GATEWAY_WAN_CONFIGURATION_PHONE_NUMBER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_CONFIGURATION_PHONE_NUMBER === params) return "INVALID_GATEWAY_WAN_CONFIGURATION_PHONE_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_CONFIGURATION_IP_ADDRESS_NODE_MISSING === params) return "INVALID_GATEWAY_WAN_CONFIGURATION_IP_ADDRESS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_CONFIGURATION_IP_ADDRESS === params) return "INVALID_GATEWAY_WAN_CONFIGURATION_IP_ADDRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OUTBOUND_CHAP_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_OUTBOUND_CHAP_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OUTBOUND_CHAP_STATUS_TYPE_ID === params) return "INVALID_OUTBOUND_CHAP_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INBOUND_CHAP_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_INBOUND_CHAP_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INBOUND_CHAP_STATUS_TYPE_ID === params) return "INVALID_INBOUND_CHAP_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PAP_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_PAP_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PAP_STATUS_TYPE_ID === params) return "INVALID_PAP_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MODEM_MONITOR_INTERVAL_NODE_MISSING === params) return "INVALID_MODEM_MONITOR_INTERVAL_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MODEM_MONITOR_INTERVAL === params) return "INVALID_MODEM_MONITOR_INTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CALL_RETRY_WAIT_NODE_MISSING === params) return "INVALID_CALL_RETRY_WAIT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CALL_RETRY_WAIT === params) return "INVALID_CALL_RETRY_WAIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_LIMIT_NODE_MISSING === params) return "INVALID_SWITCH_LIMIT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_LIMIT === params) return "INVALID_SWITCH_LIMIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PING_NODE_MISSING === params) return "INVALID_PING_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PING_IP_ADDRESS_NODE_MISSING === params) return "INVALID_PING_IP_ADDRESS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PING_IP_ADDRESS === params) return "INVALID_PING_IP_ADDRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PING_INTERVAL_NODE_MISSING === params) return "INVALID_PING_INTERVAL_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PING_INTERVAL === params) return "INVALID_PING_INTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MODEM_CONFIGURATION_NODE_MISSING === params) return "INVALID_MODEM_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PORT_SPEED_TYPE_ID_NODE_MISSING === params) return "INVALID_PORT_SPEED_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PORT_SPEED_TYPE_ID === params) return "INVALID_PORT_SPEED_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MODEM_COMMAND_TYPE_ID_NODE_MISSING === params) return "INVALID_MODEM_COMMAND_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MODEM_COMMAND_TYPE_ID === params) return "INVALID_MODEM_COMMAND_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MODEM_CONNECT_TYPE_ID_NODE_MISSING === params) return "INVALID_MODEM_CONNECT_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MODEM_CONNECT_TYPE_ID === params) return "INVALID_MODEM_CONNECT_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PPP_CONNECTION_TYPE_ID_NODE_MISSING === params) return "INVALID_PPP_CONNECTION_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PPP_CONNECTION_TYPE_ID === params) return "INVALID_PPP_CONNECTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MODEM_ANSWER_TYPE_ID_NODE_MISSING === params) return "INVALID_MODEM_ANSWER_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MODEM_ANSWER_TYPE_ID === params) return "INVALID_MODEM_ANSWER_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ISP_NODE_MISSING === params) return "INVALID_ISP_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_AUTHENTICATION_TYPE_ID_NODE_MISSING === params) return "INVALID_GATEWAY_AUTHENTICATION_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_AUTHENTICATION_TYPE_ID === params) return "INVALID_GATEWAY_AUTHENTICATION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ISP_USERNAME_NODE_MISSING === params) return "INVALID_ISP_USERNAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ISP_USERNAME === params) return "INVALID_ISP_USERNAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ISP_PASSWORD_NODE_MISSING === params) return "INVALID_ISP_PASSWORD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ISP_PASSWORD === params) return "INVALID_ISP_PASSWORD";
        else if (Constants.ExternalServiceReturnCodes.GATEWAY_DEVICE_LIMIT_KEY_NOT_FOUND === params) return "GATEWAY_DEVICE_LIMIT_KEY_NOT_FOUND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FORCE_DISCONNECT === params) return "INVALID_FORCE_DISCONNECT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FORCE_DISCONNECT_COMMAND === params) return "INVALID_FORCE_DISCONNECT_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NEURON_ID_NOT_FOUND === params) return "INVALID_NEURON_ID_NOT_FOUND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SERIAL_NUMBER_NOT_FOUND === params) return "INVALID_SERIAL_NUMBER_NOT_FOUND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_CONNECTION_START_DATE_TIME === params) return "INVALID_LAST_CONNECTION_START_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_CONNECTION_END_DATE_TIME === params) return "INVALID_LAST_CONNECTION_END_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_CONNECTION_DATE_TIME_RANGE === params) return "INVALID_LAST_CONNECTION_DATE_TIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DELETE_CRITERIA === params) return "INVALID_DELETE_CRITERIA";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONNECT_NO_WAN_CONFIGURATION_ASSIGNED === params) return "INVALID_CONNECT_NO_WAN_CONFIGURATION_ASSIGNED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESOURCES_NODE_MISSING === params) return "INVALID_RESOURCES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESOURCE_NODE_MISSING === params) return "INVALID_RESOURCE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESOURCE_ID_NODE_MISSING === params) return "INVALID_RESOURCE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESOURCE_ID === params) return "INVALID_RESOURCE_ID";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_RESOURCE_ID === params) return "DUPLICATE_RESOURCE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_ID_TYPE_ID === params) return "UNSUPPORTED_ID_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCOVERING_GATEWAY_NODE_MISSING === params) return "INVALID_DISCOVERING_GATEWAY_NODE_MISSING";

        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_CONFIGURATION_NODE_MISSING === params) return "INVALID_EVENT_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_CONFIGURATION_CHILD_NODE_MISSING === params) return "INVALID_EVENT_CONFIGURATION_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_EVENT_NODE_MISSING === params) return "INVALID_GATEWAY_EVENT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_ALARM_NODE_MISSING === params) return "INVALID_METER_ALARM_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_EVENT_ID_NODE_MISSING === params) return "INVALID_GATEWAY_EVENT_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_EVENT_ID === params) return "INVALID_GATEWAY_EVENT_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_GATEWAY_EVENT_ID === params) return "UNSUPPORTED_GATEWAY_EVENT_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_EVENT_STATUS_TYPE_ID === params) return "INVALID_GATEWAY_EVENT_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_EVENT_URGENT_COUNT === params) return "INVALID_GATEWAY_EVENT_URGENT_COUNT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_EVENT_LIMIT === params) return "INVALID_GATEWAY_EVENT_LIMIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_EVENT_ON_CLEAR_STATUS_TYPE_ID === params) return "INVALID_GATEWAY_EVENT_ON_CLEAR_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_EVENT_CHILD_NODE_MISSING === params) return "INVALID_GATEWAY_EVENT_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_GATEWAY_EVENT_ID === params) return "DUPLICATE_GATEWAY_EVENT_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_ALARM_ID_NODE_MISSING === params) return "INVALID_METER_ALARM_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_ALARM_ID === params) return "INVALID_METER_ALARM_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_ALARM_STATUS_CHILD_NODE_MISSING === params) return "INVALID_METER_ALARM_STATUS_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_ALARM_STATUS_TYPE_ID === params) return "INVALID_METER_ALARM_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_METER_ALARM_CHILD_NODE === params) return "UNSUPPORTED_METER_ALARM_CHILD_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_ALARM_EVENT_LOG_STATUS_TYPE_ID === params) return "INVALID_METER_ALARM_EVENT_LOG_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_METER_ALARM_ID === params) return "DUPLICATE_METER_ALARM_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION_NODE_MISSING === params) return "INVALID_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULES_NODE_MISSING === params) return "INVALID_SCHEDULES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INTERVALS_NODE_MISSING === params) return "INVALID_INTERVALS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INTERVAL_NODE_MISSING === params) return "INVALID_INTERVAL_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_LINE_CARRIER_COMMUNICATION_STATUS_TYPE_ID === params) return "INVALID_POWER_LINE_CARRIER_COMMUNICATION_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_START_TIME_NODE_MISSING === params) return "INVALID_START_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_START_TIME_FORMAT === params) return "INVALID_START_TIME_FORMAT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_TIME_FORMAT === params) return "INVALID_END_TIME_FORMAT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_START_TIME_HOUR === params) return "INVALID_START_TIME_HOUR";
        else if (Constants.ExternalServiceReturnCodes.INVALID_START_TIME_MINUTE === params) return "INVALID_START_TIME_MINUTE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_TIME_NODE_MISSING === params) return "INVALID_END_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_TIME_HOUR === params) return "INVALID_END_TIME_HOUR";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_TIME_MINUTE === params) return "INVALID_END_TIME_MINUTE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIME_RANGE === params) return "INVALID_TIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_LINE_CARRIER_COMMUNICATION_SCHEDULE_INTERVAL_OVERLAP === params) return "INVALID_POWER_LINE_CARRIER_COMMUNICATION_SCHEDULE_INTERVAL_OVERLAP";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_LINE_CARRIER_COMMUNICATION_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_POWER_LINE_CARRIER_COMMUNICATION_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_COMMUNICATION_HISTORY_REQUESTED_DATE_TIME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_COMMUNICATION_HISTORY_REQUESTED_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_COMMUNICATION_HISTORY_GATEWAY_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_COMMUNICATION_HISTORY_GATEWAY_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_COMMUNICATION_HISTORY_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_COMMUNICATION_HISTORY_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_COMMUNICATION_HISTORY_REQUESTED_DATE_TIME === params) return "INVALID_DATASET_NEXT_COMMUNICATION_HISTORY_REQUESTED_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_COMMUNICATION_HISTORY_REQUESTED_DATE_TIME_RANGE === params) return "INVALID_DATASET_NEXT_COMMUNICATION_HISTORY_REQUESTED_DATE_TIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DISCOVERED_GATEWAY_GATEWAY_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_DISCOVERED_GATEWAY_GATEWAY_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DISCOVERED_GATEWAY_NEURON_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_DISCOVERED_GATEWAY_NEURON_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DISCOVERED_GATEWAY_NEURON_ID === params) return "INVALID_DATASET_NEXT_DISCOVERED_GATEWAY_NEURON_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DISCOVERED_GATEWAY_LAST_UPDATE_DATE_TIME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_DISCOVERED_GATEWAY_LAST_UPDATE_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DISCOVERED_GATEWAY_LAST_UPDATE_DATE_TIME === params) return "INVALID_DATASET_NEXT_DISCOVERED_GATEWAY_LAST_UPDATE_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_GATEWAY_NAME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_GATEWAY_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_GATEWAY_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_GATEWAY_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_RESULT_RECORDED_FROM_GATEWAY_DATE_TIME === params) return "INVALID_DATASET_NEXT_RESULT_RECORDED_FROM_GATEWAY_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_RESULT_RECORDED_FROM_GATEWAY_DATE_TIME_RANGE === params) return "INVALID_DATASET_NEXT_RESULT_RECORDED_FROM_GATEWAY_DATE_TIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_RESULT_RECORDED_FROM_GATEWAY_DATE_TIME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_RESULT_RECORDED_FROM_GATEWAY_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_GATEWAY_NEURON_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_GATEWAY_NEURON_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_GATEWAY_SERIAL_NUMBER_NODE_MISSING === params) return "INVALID_DATASET_NEXT_GATEWAY_SERIAL_NUMBER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_GATEWAY_LAST_CONNECTION_DATE_TIME === params) return "INVALID_DATASET_NEXT_GATEWAY_LAST_CONNECTION_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_GATEWAY_SERIAL_NUMBER === params) return "INVALID_DATASET_NEXT_GATEWAY_SERIAL_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_GATEWAY_LAST_CONNECTION_DATE_TIME_RANGE === params) return "INVALID_DATASET_NEXT_GATEWAY_LAST_CONNECTION_DATE_TIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_GATEWAY_LAST_CONNECTION_DATE_TIME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_GATEWAY_LAST_CONNECTION_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_GATEWAY_NEURON_ID === params) return "INVALID_DATASET_NEXT_GATEWAY_NEURON_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_GATEWAY_NAME === params) return "INVALID_DATASET_NEXT_GATEWAY_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_GATEWAY_ID === params) return "INVALID_DATASET_NEXT_GATEWAY_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REINITIALIZE_TYPE_NODE_MISSING === params) return "INVALID_REINITIALIZE_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESOURCE_REINITIALIZE_TYPE === params) return "INVALID_RESOURCE_REINITIALIZE_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESOURCE_REINITIALIZE_TYPE_ID === params) return "INVALID_RESOURCE_REINITIALIZE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SET_WAN_CONFIGURATION_COMMAND === params) return "INVALID_SET_WAN_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INACTIVE_LIMIT === params) return "INVALID_INACTIVE_LIMIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MODEM_DOWN_LIMIT === params) return "INVALID_MODEM_DOWN_LIMIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_NODE_MISSING === params) return "INVALID_HIERARCHY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_ID_NODE_MISSING === params) return "INVALID_HIERARCHY_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_RETRIEVE_TYPE_ID_NODE_MISSING === params) return "INVALID_HIERARCHY_RETRIEVE_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_RETRIEVE_TYPE_ID === params) return "INVALID_HIERARCHY_RETRIEVE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_RETRIEVE_TYPE_ID === params) return "INVALID_ATTRIBUTE_RETRIEVE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UPDATE_GATEWAY_FIRMWARE_COMMAND_EXISTS === params) return "UPDATE_GATEWAY_FIRMWARE_COMMAND_EXISTS";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_FIRMWARE_VERSION_ID === params) return "UNSUPPORTED_FIRMWARE_VERSION_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_COMMUNICATION_STATUS_TYPE_NODE_MISSING === params) return "INVALID_LAST_COMMUNICATION_STATUS_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_COMMUNICATION_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_LAST_COMMUNICATION_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_COMMUNICATION_STATUS_TYPE_ID === params) return "INVALID_LAST_COMMUNICATION_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_TO_REPLACE_NODE_MISSING === params) return "INVALID_GATEWAY_TO_REPLACE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_TO_REPLACE_CHILD_NODE_MISSING === params) return "INVALID_GATEWAY_TO_REPLACE_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NUMBER_OF_GATEWAY_TO_REPLACE_CHILD_NODES === params) return "INVALID_NUMBER_OF_GATEWAY_TO_REPLACE_CHILD_NODES";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_GATEWAY_TO_REPLACE_TYPE_ID === params) return "UNSUPPORTED_GATEWAY_TO_REPLACE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_TO_REPLACE_NOT_FOUND === params) return "INVALID_GATEWAY_TO_REPLACE_NOT_FOUND";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_GATEWAY_TO_REPLACE_NAME === params) return "DUPLICATE_GATEWAY_TO_REPLACE_NAME";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_GATEWAY_TO_REPLACE_SERIAL_NUMBER === params) return "DUPLICATE_GATEWAY_TO_REPLACE_SERIAL_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_NODE_MISSING === params) return "INVALID_REPLACEMENT_GATEWAY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_REPLACEMENT_GATEWAY_SERIAL_NUMBER === params) return "DUPLICATE_REPLACEMENT_GATEWAY_SERIAL_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_DATA_CONCENTRATOR_CHILD_NODE_MISSING === params) return "INVALID_REPLACEMENT_GATEWAY_DATA_CONCENTRATOR_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_SERIAL_NUMBER_NODE_MISSING === params) return "INVALID_REPLACEMENT_GATEWAY_SERIAL_NUMBER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_SERIAL_NUMBER === params) return "INVALID_REPLACEMENT_GATEWAY_SERIAL_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_NEURON_ID === params) return "INVALID_REPLACEMENT_GATEWAY_NEURON_ID";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_REPLACEMENT_GATEWAY_NEURON_ID === params) return "DUPLICATE_REPLACEMENT_GATEWAY_NEURON_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_SERIAL_NUMBER_NEURON_ID_MISMATCH === params) return "INVALID_REPLACEMENT_GATEWAY_SERIAL_NUMBER_NEURON_ID_MISMATCH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_INSTALLATION_DATE_TIME === params) return "INVALID_REPLACEMENT_GATEWAY_INSTALLATION_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TRANSFORMER_NODE_MISSING === params) return "INVALID_TRANSFORMER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.TRANSACTION_CLOSED === params) return "TRANSACTION_CLOSED";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_GATEWAY_SERIAL_NUMBER === params) return "DUPLICATE_GATEWAY_SERIAL_NUMBER";

        //v5 return codes
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_NODE_MISSING === params) return "INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_READ_ONLY_PORT_STATUS_NODE_MISSING === params) return "INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_READ_ONLY_PORT_STATUS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_READ_ONLY_PORT_STATUS === params) return "INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_READ_ONLY_PORT_STATUS";



        //v5.3 return codes
        else if (Constants.ExternalServiceReturnCodes.INVALID_CO_LOCATION_THRESHOLD === params) return "INVALID_CO_LOCATION_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEFAULT_CROSS_PHASE_ADJUSTMENT === params) return "INVALID_DEFAULT_CROSS_PHASE_ADJUSTMENT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INACTIVE_PHASE_TYPE_ID === params) return "INVALID_INACTIVE_PHASE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GENERATION_LIMIT === params) return "INVALID_GENERATION_LIMIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GPS_ANTENNA_POWER === params) return "INVALID_GPS_ANTENNA_POWER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_OFF_CALL_DELAY === params) return "INVALID_POWER_OFF_CALL_DELAY";
        else if (Constants.ExternalServiceReturnCodes.DUPLCIATE_INACTVE_PHASE_TYPE_ID === params) return "DUPLCIATE_INACTVE_PHASE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OPTICAL_PORT_CONFIGURATION_OPTICAL_SESSION_TIMEOUT === params) return "INVALID_OPTICAL_PORT_CONFIGURATION_OPTICAL_SESSION_TIMEOUT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OPTICAL_PORT_CONFIGURATION_OPTICAL_DOS_TIMER_STATUS === params) return "INVALID_OPTICAL_PORT_CONFIGURATION_OPTICAL_DOS_TIMER_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OPTICAL_PORT_CONFIGURATION_OPTICAL_SESSION_HOLDOFF === params) return "INVALID_OPTICAL_PORT_CONFIGURATION_OPTICAL_SESSION_HOLDOFF";

        // End Gateway Manager

        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_TYPE_ID === params) return "INVALID_DATABASE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_TYPE_ID_NODE_MISSING === params) return "INVALID_DATABASE_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TRANSFORMER_ID === params) return "INVALID_TRANSFORMER_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TRANSFORMER_ID_NODE_MISSING === params) return "INVALID_TRANSFORMER_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INSTALLATION_DATE_TIME === params) return "INVALID_INSTALLATION_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NEURON_ID === params) return "INVALID_NEURON_ID";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_NEURON_ID === params) return "DUPLICATE_NEURON_ID";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_TRANSFORMER_ID === params) return "DUPLICATE_TRANSFORMER_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TEMPLATE_TYPE_ID === params) return "INVALID_TEMPLATE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.RESULTS_PENDING === params) return "RESULTS_PENDING";
        else if (Constants.ExternalServiceReturnCodes.CURRENTLY_COMMUNICATING === params) return "CURRENTLY_COMMUNICATING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ID === params) return "INVALID_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ID_TYPE === params) return "INVALID_ID_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_START_INSTALLATION_DATETIME === params) return "INVALID_START_INSTALLATION_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_INSTALLATION_DATETIME === params) return "INVALID_END_INSTALLATION_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INSTALLATION_DATETIME_RANGE === params) return "INVALID_INSTALLATION_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_IP_ADDRESS_CONFLICTING_SPECIFICATION === params) return "INVALID_IP_ADDRESS_CONFLICTING_SPECIFICATION";

        // Schedule
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIMEOUTINTERVAL_TYPE_ID === params) return "INVALID_TIMEOUTINTERVAL_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIMEOUT_INTERVAL_TYPE_ID_NODE_MISSING === params) return "INVALID_TIMEOUT_INTERVAL_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_ID === params) return "INVALID_SCHEDULE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIMEOUTINTERVAL === params) return "INVALID_TIMEOUTINTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_INTERVAL === params) return "INVALID_SCHEDULE_INTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_MINUTE_INTERVAL === params) return "INVALID_SCHEDULE_MINUTE_INTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_TYPE_ID === params) return "INVALID_TASK_PROCESSOR_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_STATUS_TYPEID === params) return "INVALID_SCHEDULE_STATUS_TYPEID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_TYPE_ID === params) return "INVALID_SCHEDULE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_SCHEDULE_TYPE_ID === params) return "UNSUPPORTED_SCHEDULE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_ALREADY_ASSIGNED === params) return "INVALID_SCHEDULE_ALREADY_ASSIGNED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIMEOUT_INTERVAL_MINUTE === params) return "INVALID_TIMEOUT_INTERVAL_MINUTE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIMEOUT_INTERVAL_NODE_MISSING === params) return "INVALID_TIMEOUT_INTERVAL_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_NAME_BLANK === params) return "INVALID_SCHEDULE_NAME_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_NAME_DUPLICATE === params) return "INVALID_SCHEDULE_NAME_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_OCCURRENCE_LIST === params) return "INVALID_SCHEDULE_OCCURRENCE_LIST";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_TYPE_ID_NODE_MISSING === params) return "INVALID_SCHEDULE_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_START_SCHEDULE_START_DATETIME === params) return "INVALID_START_SCHEDULE_START_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_SCHEDULE_START_DATETIME === params) return "INVALID_END_SCHEDULE_START_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_START_SCHEDULE_END_DATETIME === params) return "INVALID_START_SCHEDULE_END_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_SCHEDULE_END_DATETIME === params) return "INVALID_END_SCHEDULE_END_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_START_AND_END_DATETIME_RANGE === params) return "INVALID_SCHEDULE_START_AND_END_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_START_DATETIME_RANGE === params) return "INVALID_SCHEDULE_START_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_END_DATETIME_RANGE === params) return "INVALID_SCHEDULE_END_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_REMOVAL === params) return "INVALID_SCHEDULE_REMOVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_STATUS_UPDATE === params) return "INVALID_SCHEDULE_STATUS_UPDATE";

        // Data Access Manager
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_LOCATION_BLANK === params) return "INVALID_DATABASE_LOCATION_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_LOCATION_TOO_LONG === params) return "INVALID_DATABASE_LOCATION_TOO_LONG";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_NAME_BLANK === params) return "INVALID_DATABASE_NAME_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_LOGIN_BLANK === params) return "INVALID_DATABASE_LOGIN_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_LOGIN_TOO_LONG === params) return "INVALID_DATABASE_LOGIN_TOO_LONG";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_LOGIN_WITHOUT_PASSWORD === params) return "INVALID_DATABASE_LOGIN_WITHOUT_PASSWORD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_PASSWORD_TOO_LONG === params) return "INVALID_DATABASE_PASSWORD_TOO_LONG";
        else if (Constants.ExternalServiceReturnCodes.FAILED_SENDING_UPDATE_TO_GLOBAL_TASK_MANAGER === params) return "FAILED_SENDING_UPDATE_TO_GLOBAL_TASK_MANAGER";
        else if (Constants.ExternalServiceReturnCodes.FAILED_DATABASE_CONNECTION === params) return "FAILED_DATABASE_CONNECTION";
        else if (Constants.ExternalServiceReturnCodes.FAILED_GLOBAL_TASK_MANAGER_NOT_FOUND === params) return "FAILED_GLOBAL_TASK_MANAGER_NOT_FOUND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PORT === params) return "INVALID_PORT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_TIMEOUT_SECONDS === params) return "INVALID_DATABASE_TIMEOUT_SECONDS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_NAME_MASTER === params) return "INVALID_DATABASE_NAME_MASTER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_NAME_TOO_LONG === params) return "INVALID_DATABASE_NAME_TOO_LONG";

        // MessageLog
        else if (Constants.ExternalServiceReturnCodes.INVALID_EMAIL_ADDRESS_FORMAT === params) return "INVALID_EMAIL_ADDRESS_FORMAT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGELOGDEFINITIONID === params) return "INVALID_MESSAGELOGDEFINITIONID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGELOG_STATUSID === params) return "INVALID_MESSAGELOG_STATUSID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGELOG_TYPE_ID === params) return "INVALID_MESSAGELOG_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGELOG_USERID === params) return "INVALID_MESSAGELOG_USERID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGELOG_TEXT === params) return "INVALID_MESSAGELOG_TEXT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGELOG_LOCATION === params) return "INVALID_MESSAGELOG_LOCATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOGTYPE_ENABLE === params) return "INVALID_LOGTYPE_ENABLE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOGTYPE_DISABLE === params) return "INVALID_LOGTYPE_DISABLE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EMAIL_ADDRESS_MUST_BE_BLANK === params) return "INVALID_EMAIL_ADDRESS_MUST_BE_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGELOG_START_DATETIME === params) return "INVALID_MESSAGELOG_START_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGELOG_END_DATETIME === params) return "INVALID_MESSAGELOG_END_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGELOG_DATETIME_RANGE === params) return "INVALID_MESSAGELOG_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGELOG_SOURCEIPADDRESS === params) return "INVALID_MESSAGELOG_SOURCEIPADDRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SMTP_SERVER_LOCATION === params) return "INVALID_SMTP_SERVER_LOCATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_MESSAGELOG_DATE_TIME_STAMP === params) return "INVALID_DATASET_NEXT_MESSAGELOG_DATE_TIME_STAMP";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_MESSAGELOG_DATE_TIME_STAMP_NODE_MISSING === params) return "INVALID_DATASET_NEXT_MESSAGELOG_DATE_TIME_STAMP_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_MESSAGELOG_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_MESSAGELOG_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_NODE_MISSING === params) return "INVALID_DATASET_NEXT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_MESSAGELOG_DATE_TIME_STAMP_RANGE === params) return "INVALID_DATASET_NEXT_MESSAGELOG_DATE_TIME_STAMP_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_MESSAGELOG_ID === params) return "INVALID_DATASET_NEXT_MESSAGELOG_ID";

        else if (Constants.ExternalServiceReturnCodes.INVALID_MAX_COUNT === params) return "INVALID_MAX_COUNT";

        else if (Constants.ExternalServiceReturnCodes.INVALID_SORT_BY_TYPE_ID === params) return "INVALID_SORT_BY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SORT_BY_ORDER_TYPE_ID === params) return "INVALID_SORT_BY_ORDER_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SORT_OPTION_NODE_MISSING === params) return "INVALID_SORT_OPTION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SORT_BY_TYPE_ID_NODE_MISSING === params) return "INVALID_SORT_BY_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SORT_BY_ORDER_TYPE_ID_NODE_MISSING === params) return "INVALID_SORT_BY_ORDER_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SORT_ORDER_TYPE_ID_NODE_MISSING === params) return "INVALID_SORT_ORDER_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SORT_ORDER_TYPE_ID === params) return "INVALID_SORT_ORDER_TYPE_ID";

        // DeviceManager
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_MEMBER_RETRIEVAL_TYPE_ID === params) return "INVALID_HIERARCHY_LEVEL_MEMBER_RETRIEVAL_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_TYPE_ID === params) return "INVALID_DEVICE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SERIAL_NUMBER === params) return "INVALID_SERIAL_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SERIAL_NUMBER_NODE_MISSING === params) return "INVALID_SERIAL_NUMBER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PHASE_TYPE_ID === params) return "INVALID_PHASE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESULT_ID === params) return "INVALID_RESULT_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESULT_TYPE_ID === params) return "INVALID_RESULT_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_START_DATETIME === params) return "INVALID_START_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_DATETIME === params) return "INVALID_END_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATETIME_RANGE === params) return "INVALID_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIMEOUT_DATETIME === params) return "INVALID_TIMEOUT_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIMEOUT_DATETIME_NODE_MISSING === params) return "INVALID_TIMEOUT_DATETIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.LOAD_PROFILE_IN_PROGRESS === params) return "LOAD_PROFILE_IN_PROGRESS";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_DEVICE_TYPE_ID === params) return "UNSUPPORTED_DEVICE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_POWER_LEVEL === params) return "INVALID_MAXIMUM_POWER_LEVEL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_POWER_LEVEL_DURATION === params) return "INVALID_MAXIMUM_POWER_LEVEL_DURATION";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_MAXIMUM_POWER_LEVEL_DURATION === params) return "UNSUPPORTED_MAXIMUM_POWER_LEVEL_DURATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ASSOCIATED_WITH_GATEWAY === params) return "INVALID_ASSOCIATED_WITH_GATEWAY";
        else if (Constants.ExternalServiceReturnCodes.DEVICE_NOT_ENABLED === params) return "DEVICE_NOT_ENABLED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENABLE_MAXIMUM_POWER === params) return "INVALID_ENABLE_MAXIMUM_POWER";
        else if (Constants.ExternalServiceReturnCodes.PERFORM_SELF_BILLING_READ_IN_PROGRESS === params) return "PERFORM_SELF_BILLING_READ_IN_PROGRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENABLE_CONTROL_RELAY_TIERS_VALUE === params) return "INVALID_ENABLE_CONTROL_RELAY_TIERS_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_CHANNEL_SOURCE_ID === params) return "INVALID_LOAD_PROFILE_CHANNEL_SOURCE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_CHANNEL_SOURCES_COUNT === params) return "INVALID_LOAD_PROFILE_CHANNEL_SOURCES_COUNT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_CHANNEL_SOURCE_ID_NODE_MISSING === params) return "INVALID_LOAD_PROFILE_CHANNEL_SOURCE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_INTERVAL_PERIOD === params) return "INVALID_LOAD_PROFILE_INTERVAL_PERIOD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_INTERVAL_NODE_MISSING === params) return "INVALID_LOAD_PROFILE_INTERVAL_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_ID_NODE_MISSING === params) return "INVALID_DEVICE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_NODE_MISSING === params) return "INVALID_DEVICE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICES_NODE_MISSING === params) return "INVALID_DEVICES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_ID_NODE_MISSING === params) return "INVALID_GATEWAY_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_NODE_MISSING === params) return "INVALID_GATEWAY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_QUALITY_THRESHOLD === params) return "INVALID_POWER_QUALITY_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROGRAM_ID === params) return "INVALID_PROGRAM_ID";
        else if (Constants.ExternalServiceReturnCodes.UPDATE_METER_FIRMWARE_IN_PROGRESS === params) return "UPDATE_METER_FIRMWARE_IN_PROGRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FORCE_DELETE === params) return "INVALID_FORCE_DELETE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ALARM_TYPE_NODE_MISSING === params) return "INVALID_ALARM_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SET_ALARM_DISPLAY_CONFIGURATION_COMMAND === params) return "INVALID_SET_ALARM_DISPLAY_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ALARM_INDEX === params) return "INVALID_ALARM_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ALARM_DISPLAY_OPTION === params) return "INVALID_ALARM_DISPLAY_OPTION";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_ALARM_INDEX === params) return "DUPLICATE_ALARM_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CAUTION_ID_INDEX_NODE_MISSING === params) return "INVALID_CAUTION_ID_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_CAUTION_ID_INDEX === params) return "UNSUPPORTED_CAUTION_ID_INDEX";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_CAUTION_ID_INDEX === params) return "DUPLICATE_CAUTION_ID_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ERROR_ID_INDEX_NODE_MISSING === params) return "INVALID_ERROR_ID_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_ERROR_ID_INDEX === params) return "UNSUPPORTED_ERROR_ID_INDEX";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_ERROR_ID_INDEX === params) return "DUPLICATE_ERROR_ID_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENABLE_ALL_SEGMENTS_LIT === params) return "INVALID_ENABLE_ALL_SEGMENTS_LIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENABLE_ALL_SEGMENTS_LIT_NODE_MISSING === params) return "INVALID_ENABLE_ALL_SEGMENTS_LIT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SECONDS_TO_DISPLAY === params) return "INVALID_SECONDS_TO_DISPLAY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SECONDS_TO_DISPLAY_NODE_MISSING === params) return "INVALID_SECONDS_TO_DISPLAY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_CATEGORY_TYPE_ID === params) return "INVALID_METER_DISPLAY_CATEGORY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_CATEGORY_TYPE_ID_NODE_MISSING === params) return "INVALID_METER_DISPLAY_CATEGORY_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_CATEGORY_INDEX === params) return "INVALID_METER_DISPLAY_CATEGORY_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_CATEGORY_INDEX_NODE_MISSING === params) return "INVALID_METER_DISPLAY_CATEGORY_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_SOURCE_CODE_ID === params) return "INVALID_METER_DISPLAY_SOURCE_CODE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_SOURCE_CODE_ID_NODE_MISSING === params) return "INVALID_METER_DISPLAY_SOURCE_CODE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_ID_TEXT === params) return "INVALID_METER_DISPLAY_ID_TEXT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_ID_TEXT_NODE_MISSING === params) return "INVALID_METER_DISPLAY_ID_TEXT_NODE_MISSING";

        else if (Constants.ExternalServiceReturnCodes.INVALID_FIELDS_AFTER_DECIMAL_POINT === params) return "INVALID_FIELDS_AFTER_DECIMAL_POINT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FIELDS_AFTER_DECIMAL_POINT_NODE_MISSING === params) return "INVALID_FIELDS_AFTER_DECIMAL_POINT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FIELDS_BEFORE_DECIMAL_POINT === params) return "INVALID_FIELDS_BEFORE_DECIMAL_POINT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FIELDS_BEFORE_DECIMAL_POINT_NODE_MISSING === params) return "INVALID_FIELDS_BEFORE_DECIMAL_POINT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DECIMAL_POINT_FIELDS === params) return "INVALID_DECIMAL_POINT_FIELDS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SUPPRESS_ZEROS === params) return "INVALID_SUPPRESS_ZEROS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SUPPRESS_ZEROS_NODE_MISSING === params) return "INVALID_SUPPRESS_ZEROS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NUMBER_OF_METER_DISPLAY_ITEMS === params) return "INVALID_NUMBER_OF_METER_DISPLAY_ITEMS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SERIAL_NUMBER_NEURON_ID_MISMATCH === params) return "INVALID_SERIAL_NUMBER_NEURON_ID_MISMATCH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_ITEMS_NODE_MISSING === params) return "INVALID_DISPLAY_ITEMS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_ITEM_NODE_MISSING === params) return "INVALID_DISPLAY_ITEM_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_SOURCE_NODE_MISSING === params) return "INVALID_METER_DISPLAY_SOURCE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_ID_NODE_MISSING === params) return "INVALID_METER_DISPLAY_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_VALUE_NODE_MISSING === params) return "INVALID_METER_DISPLAY_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_CONFIGURATION_NODE_MISSING === params) return "INVALID_METER_DISPLAY_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_INDEX_NODE_MISSING === params) return "INVALID_CHANNEL_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PULSE_INPUT_CONFIGURATION_NODE_MISSING === params) return "INVALID_PULSE_INPUT_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PULSE_INPUT_CONFIGURATION_CHANNEL_NODE_MISSING === params) return "INVALID_PULSE_INPUT_CONFIGURATION_CHANNEL_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PULSE_INPUT_CONFIGURATION_COMMAND === params) return "INVALID_PULSE_INPUT_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_INDEX === params) return "INVALID_CHANNEL_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PULSE_INPUT_CHANNEL_STATUS === params) return "INVALID_PULSE_INPUT_CHANNEL_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PULSE_INPUT_IDLE_STATE === params) return "INVALID_PULSE_INPUT_IDLE_STATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PULSE_INPUT_CHANNEL_STATUS_NODE_MISSING === params) return "INVALID_PULSE_INPUT_CHANNEL_STATUS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PULSE_INPUT_TAMPER_URGENT_ALARM_STATUS === params) return "INVALID_PULSE_INPUT_TAMPER_URGENT_ALARM_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PULSE_INPUT_TAMPER_REGULAR_ALARM_STATUS === params) return "INVALID_PULSE_INPUT_TAMPER_REGULAR_ALARM_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_MINIMUM_PULSE_WIDTH === params) return "INVALID_CHANNEL_MINIMUM_PULSE_WIDTH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_ADC_LOW_LIMIT_VALUE === params) return "INVALID_CHANNEL_ADC_LOW_LIMIT_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_ADC_HIGH_LIMIT_VALUE === params) return "INVALID_CHANNEL_ADC_HIGH_LIMIT_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PULSE_INPUT_DIGITAL_INPUT_TAMPER_STATUS === params) return "INVALID_PULSE_INPUT_DIGITAL_INPUT_TAMPER_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_ADC_LIMIT_RANGE === params) return "INVALID_CHANNEL_ADC_LIMIT_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_ADC_LOW_LIMIT_MISSING === params) return "INVALID_CHANNEL_ADC_LOW_LIMIT_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_ADC_HIGH_LIMIT_MISSING === params) return "INVALID_CHANNEL_ADC_HIGH_LIMIT_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PULSE_INPUT_NODE_FOR_METER_VERSION === params) return "INVALID_PULSE_INPUT_NODE_FOR_METER_VERSION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPEATER_COUNT === params) return "INVALID_REPEATER_COUNT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCOVERED_TYPE_NODE_MISSING === params) return "INVALID_DISCOVERED_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCOVERED_TYPE_ID_NODE_MISSING === params) return "INVALID_DISCOVERED_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCOVERED_TYPE_ID === params) return "INVALID_DISCOVERED_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_CONTACT_START_DATETIME === params) return "INVALID_LAST_CONTACT_START_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_CONTACT_END_DATETIME === params) return "INVALID_LAST_CONTACT_END_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_CONTACT_DATETIME_RANGE === params) return "INVALID_LAST_CONTACT_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INFORMATION_RETURN_TYPE_ID === params) return "INVALID_INFORMATION_RETURN_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DOWN_LIMIT === params) return "INVALID_DOWN_LIMIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DOWN_LIMIT_NODE_MISSING === params) return "INVALID_DOWN_LIMIT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_DEVICE_STATUS_TYPE_ID === params) return "UNSUPPORTED_DEVICE_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_CHILD_DEVICE_STATUS_TYPE_ID === params) return "UNSUPPORTED_CHILD_DEVICE_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_NO_TRANSFORMER_ID === params) return "INVALID_GATEWAY_NO_TRANSFORMER_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_TYPE_NODE_MISSING === params) return "INVALID_DEVICE_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_TYPE_ID_NODE_MISSING === params) return "INVALID_DEVICE_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_DEVICE_TYPE_NODE_MISSING === params) return "INVALID_MBUS_DEVICE_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_DEVICE_TYPE_VALUE_NODE_MISSING === params) return "INVALID_MBUS_DEVICE_TYPE_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_DEVICE_TYPE_VALUE === params) return "INVALID_MBUS_DEVICE_TYPE_VALUE";
        else if (Constants.ExternalServiceReturnCodes.SERIAL_NUMBER_NOT_SUPPORTED === params) return "SERIAL_NUMBER_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.MULTIPLE_DEVICES_WITH_SERIAL_NUMBER === params) return "MULTIPLE_DEVICES_WITH_SERIAL_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.CHILD_DEVICES_EXIST === params) return "CHILD_DEVICES_EXIST";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ALARM_POLLING_RATE_NODE_MISSING === params) return "INVALID_ALARM_POLLING_RATE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ALARM_POLLING_RATE === params) return "INVALID_ALARM_POLLING_RATE";
        else if (Constants.ExternalServiceReturnCodes.BILLING_SCHEDULE_NODE_MISSING === params) return "BILLING_SCHEDULE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.FREQUENCY_TYPE_ID_NODE_MISSING === params) return "FREQUENCY_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FREQUENCY_TYPE_ID === params) return "INVALID_FREQUENCY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.DAY_NODE_MISSING === params) return "DAY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY === params) return "INVALID_DAY";
        else if (Constants.ExternalServiceReturnCodes.HOUR_NODE_MISSING === params) return "HOUR_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HOUR === params) return "INVALID_HOUR";
        else if (Constants.ExternalServiceReturnCodes.MINUTE_NODE_MISSING === params) return "MINUTE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MINUTE === params) return "INVALID_MINUTE";
        else if (Constants.ExternalServiceReturnCodes.DEVICE_NOT_ASSOCIATED_WITH_GATEWAY === params) return "DEVICE_NOT_ASSOCIATED_WITH_GATEWAY";
        else if (Constants.ExternalServiceReturnCodes.PARENT_DEVICE_NOT_ENABLED === params) return "PARENT_DEVICE_NOT_ENABLED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIERS_NODE_MISSING === params) return "INVALID_TIERS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_STATE_NODE_MISSING === params) return "INVALID_TIER_STATE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_STATE === params) return "INVALID_TIER_STATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_NODE_COUNT === params) return "INVALID_TIER_NODE_COUNT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_VOLTAGE_STATUS_TYPE_ID === params) return "INVALID_LOAD_VOLTAGE_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_POWER_NODE_MISSING === params) return "INVALID_MAXIMUM_POWER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_POWER_CHILD_NODE_MISSING === params) return "INVALID_MAXIMUM_POWER_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NEGATIVE_PREPAY_CREDIT_STATUS === params) return "INVALID_NEGATIVE_PREPAY_CREDIT_STATUS";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_NEGATIVE_PREPAY_CREDIT_STATUS === params) return "UNSUPPORTED_NEGATIVE_PREPAY_CREDIT_STATUS";

        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_CHANNEL_SOURCE_ID_ORDER === params) return "INVALID_LOAD_PROFILE_CHANNEL_SOURCE_ID_ORDER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_MBUS_BYTES_TO_READ_NODE_MISSING === params) return "INVALID_LOAD_PROFILE_MBUS_BYTES_TO_READ_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_MBUS_BYTES_TO_READ_VALUE === params) return "INVALID_LOAD_PROFILE_MBUS_BYTES_TO_READ_VALUE";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_LOAD_PROFILE_MBUS_BYTES_TO_READ_VALUE === params) return "UNSUPPORTED_LOAD_PROFILE_MBUS_BYTES_TO_READ_VALUE";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_LOAD_PROFILE_CHANNEL_SOURCE_ID === params) return "DUPLICATE_LOAD_PROFILE_CHANNEL_SOURCE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_CONFIGURATION_NODE_MISSING === params) return "INVALID_LOAD_PROFILE_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_LOAD_PROFILE_MBUS_BYTES_TO_READ === params) return "UNSUPPORTED_LOAD_PROFILE_MBUS_BYTES_TO_READ";

        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_RESULT_TYPE_ID === params) return "UNSUPPORTED_RESULT_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_RECORDED_FROM_DEVICE_DATE_TIME === params) return "INVALID_END_RECORDED_FROM_DEVICE_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_START_RECORDED_FROM_DEVICE_DATE_TIME === params) return "INVALID_START_RECORDED_FROM_DEVICE_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECORDED_FROM_DEVICE_DATE_TIME_RANGE === params) return "INVALID_RECORDED_FROM_DEVICE_DATE_TIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_START_SAVED_IN_SYSTEM_DATE_TIME === params) return "INVALID_START_SAVED_IN_SYSTEM_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_SAVED_IN_SYSTEM_DATE_TIME === params) return "INVALID_END_SAVED_IN_SYSTEM_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SAVED_IN_SYSTEM_DATE_TIME_RANGE === params) return "INVALID_SAVED_IN_SYSTEM_DATE_TIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BATCH_NODE_MISSING === params) return "INVALID_BATCH_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BATCH_ID_NODE_MISSING === params) return "INVALID_BATCH_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BATCH_ID === params) return "INVALID_BATCH_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_BATCH_TYPE_ID === params) return "UNSUPPORTED_BATCH_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCESSED_STATUS_RESTRICTION_NODE_MISSING === params) return "INVALID_PROCESSED_STATUS_RESTRICTION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCESSED_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_PROCESSED_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCESSED_STATUS_TYPE_ID === params) return "INVALID_PROCESSED_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESULTS_NODE_MISSING === params) return "INVALID_RESULTS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESULT_ID_NOT_IN_A_BATCH === params) return "INVALID_RESULT_ID_NOT_IN_A_BATCH";
        else if (Constants.ExternalServiceReturnCodes.NO_RESULTS_FOUND === params) return "NO_RESULTS_FOUND";

        else if (Constants.ExternalServiceReturnCodes.INVALID_RETRIEVAL_STATUS_TYPE_ID === params) return "INVALID_RETRIEVAL_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIORITY_LEVELS_NODE_MISSING === params) return "INVALID_PRIORITY_LEVELS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTINUOUS_EVENT_LOG_CONFIGURATION_NODE_MISSING === params) return "INVALID_CONTINUOUS_EVENT_LOG_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIORITY_LEVEL_NODE_MISSING === params) return "INVALID_PRIORITY_LEVEL_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIORITY_LEVEL_TYPE_ID === params) return "INVALID_PRIORITY_LEVEL_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_PRIORITY_LEVEL_TYPE_ID === params) return "DUPLICATE_PRIORITY_LEVEL_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIORITY_LEVEL_TYPE_ID_NODE_MISSING === params) return "INVALID_PRIORITY_LEVEL_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_POWER_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_MAXIMUM_POWER_STATUS_TYPE_ID_NODE_MISSING";

        else if (Constants.ExternalServiceReturnCodes.INVALID_STATISTICS_NODE_MISSING === params) return "INVALID_STATISTICS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_STATISTIC_NODE_MISSING === params) return "INVALID_STATISTIC_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_QUALITY_STATISTIC_TYPE_ID === params) return "INVALID_POWER_QUALITY_STATISTIC_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TYPE_ID_NODE_MISSING === params) return "INVALID_TYPE_ID_NODE_MISSING";

        else if (Constants.ExternalServiceReturnCodes.INVALID_SELF_READ_RETRIEVAL_CONFIGURATION_NODE_MISSING === params) return "INVALID_SELF_READ_RETRIEVAL_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SELF_READ_RETRIEVAL_CONFIGURATION_CHILD_NODE_MISSING === params) return "INVALID_SELF_READ_RETRIEVAL_CONFIGURATION_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEMAND_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_DEMAND_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEMAND_RETRIEVAL_STATUS_TYPE_ID === params) return "INVALID_DEMAND_RETRIEVAL_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SUM_OF_TIERS_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_SUM_OF_TIERS_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SUM_OF_TIERS_RETRIEVAL_STATUS_TYPE_ID === params) return "INVALID_SUM_OF_TIERS_RETRIEVAL_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEMAND_RETRIEVAL_STATUS_TYPE_ID_SET_TO_INCLUDE === params) return "INVALID_DEMAND_RETRIEVAL_STATUS_TYPE_ID_SET_TO_INCLUDE";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_INDEX === params) return "DUPLICATE_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIERS_CHILD_NODE_MISSING === params) return "INVALID_TIERS_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.CONFLICTING_DELTA_LOAD_PROFILE_SYSTEM_CONFIGURATION === params) return "CONFLICTING_DELTA_LOAD_PROFILE_SYSTEM_CONFIGURATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTINUOUS_DELTA_LOAD_PROFILE_CONFIGURATION_NODE_MISSING === params) return "INVALID_CONTINUOUS_DELTA_LOAD_PROFILE_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BLOCK_INTERVAL_COUNT === params) return "INVALID_BLOCK_INTERVAL_COUNT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BLOCK_START_TIME === params) return "INVALID_BLOCK_START_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ANSI_COMPLIANCE_STATUS_TYPE_ID === params) return "INVALID_ANSI_COMPLIANCE_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SKIPPED_INTERVAL_VALUES_TYPE_ID === params) return "INVALID_SKIPPED_INTERVAL_VALUES_TYPE_ID";

        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_START_DATE_TIME_NODE_MISSING === params) return "INVALID_LOAD_PROFILE_START_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_START_DATE_TIME === params) return "INVALID_LOAD_PROFILE_START_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_END_DATE_TIME === params) return "INVALID_LOAD_PROFILE_END_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_DATE_TIME_RANGE === params) return "INVALID_LOAD_PROFILE_DATE_TIME_RANGE";

        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_SOURCE_ID_CHILD_NODE_INCLUDED === params) return "INVALID_CHANNEL_SOURCE_ID_CHILD_NODE_INCLUDED";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_CHANNEL_SOURCE_ID_CHILD_NODE === params) return "UNSUPPORTED_CHANNEL_SOURCE_ID_CHILD_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_CONFIGURATION_COMMAND === params) return "INVALID_LOAD_PROFILE_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_SOURCE_ID_CHILD_INDEX === params) return "INVALID_CHANNEL_SOURCE_ID_CHILD_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_SOURCE_ID_CHILD_INDEX_NODE_MISSING === params) return "INVALID_CHANNEL_SOURCE_ID_CHILD_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHILD_LOAD_PROFILE_CONFIGURATION_CHILD_INDEX === params) return "INVALID_CHILD_LOAD_PROFILE_CONFIGURATION_CHILD_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHILD_LOAD_PROFILE_CONFIGURATION_CHILD_INDEX_NODE_MISSING === params) return "INVALID_CHILD_LOAD_PROFILE_CONFIGURATION_CHILD_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_SOURCE_CONFIGURATION === params) return "INVALID_CHANNEL_SOURCE_CONFIGURATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INTERVAL_NODE_INCLUDED === params) return "INVALID_INTERVAL_NODE_INCLUDED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BLOCK_INTERVAL_COUNT_NODE_INCLUDED === params) return "INVALID_BLOCK_INTERVAL_COUNT_NODE_INCLUDED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BLOCK_START_TIME_NODE_INCLUDED === params) return "INVALID_BLOCK_START_TIME_NODE_INCLUDED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ANSI_COMPLIANCE_STATUS_TYPE_ID_NODE_INCLUDED === params) return "INVALID_ANSI_COMPLIANCE_STATUS_TYPE_ID_NODE_INCLUDED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SKIPPED_INTERVAL_VALUES_TYPE_ID_NODE_INCLUDED === params) return "INVALID_SKIPPED_INTERVAL_VALUES_TYPE_ID_NODE_INCLUDED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHILD_LOAD_PROFILE_CONFIGURATION_NODE_MISSING === params) return "INVALID_CHILD_LOAD_PROFILE_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHILD_LOAD_PROFILE_CONFIGURATION_COMMAND === params) return "INVALID_CHILD_LOAD_PROFILE_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POLL_RATE === params) return "INVALID_POLL_RATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POLL_WAIT === params) return "INVALID_POLL_WAIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POLL_ATTEMPTS === params) return "INVALID_POLL_ATTEMPTS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POLL_RETRY_WAIT === params) return "INVALID_POLL_RETRY_WAIT";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_CHILD_LOAD_PROFILE_CHILD_INDEX === params) return "DUPLICATE_CHILD_LOAD_PROFILE_CHILD_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIMARY_NODE_NOT_INCLUDED === params) return "INVALID_PRIMARY_NODE_NOT_INCLUDED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_SET_ID === params) return "INVALID_DATA_SET_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NUMBER_OF_BLOCKS_NODE_INCLUDED === params) return "INVALID_NUMBER_OF_BLOCKS_NODE_INCLUDED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NUMBER_OF_BLOCKS === params) return "INVALID_NUMBER_OF_BLOCKS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_DATA_SET_COLLECTION_TYPE === params) return "INVALID_LOAD_PROFILE_DATA_SET_COLLECTION_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_DATA_SET_ID === params) return "INVALID_LOAD_PROFILE_DATA_SET_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_DATA_SET_STATUS === params) return "INVALID_LOAD_PROFILE_DATA_SET_STATUS";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_LOAD_PROFILE_DATA_SET === params) return "DUPLICATE_LOAD_PROFILE_DATA_SET";

        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_SERIAL_NUMBER === params) return "INVALID_GATEWAY_SERIAL_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MOVE_DEVICE_COMMAND === params) return "INVALID_MOVE_DEVICE_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.MULTIPLE_GATEWAYS_WITH_NAME === params) return "MULTIPLE_GATEWAYS_WITH_NAME";
        else if (Constants.ExternalServiceReturnCodes.DEVICE_ALREADY_ASSOCIATED_WITH_GATEWAY === params) return "DEVICE_ALREADY_ASSOCIATED_WITH_GATEWAY";

        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_ATTRIBUTE_NODE_MISSING === params) return "INVALID_GATEWAY_ATTRIBUTE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_ATTRIBUTE_ID_NODE_MISSING === params) return "INVALID_GATEWAY_ATTRIBUTE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_ATTRIBUTE_VALUE_NODE_MISSING === params) return "INVALID_GATEWAY_ATTRIBUTE_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_HIERARCHY_LEVEL_MEMBER_NODE_MISSING === params) return "INVALID_GATEWAY_HIERARCHY_LEVEL_MEMBER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_HIERARCHY_LEVEL_MEMBER_ID_NODE_MISSING === params) return "INVALID_GATEWAY_HIERARCHY_LEVEL_MEMBER_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_ATTRIBUTE_ID === params) return "INVALID_GATEWAY_ATTRIBUTE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_ATTRIBUTE_VALUE === params) return "INVALID_GATEWAY_ATTRIBUTE_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_ATTRIBUTES_LOGICAL_RESTRICTION_TYPE_ID === params) return "INVALID_GATEWAY_ATTRIBUTES_LOGICAL_RESTRICTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_ATTRIBUTE_SEARCH_CRITERIA === params) return "INVALID_GATEWAY_ATTRIBUTE_SEARCH_CRITERIA";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_HIERARCHY_LEVEL_MEMBER_ID === params) return "INVALID_GATEWAY_HIERARCHY_LEVEL_MEMBER_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_HIERARCHY_LEVEL_MEMBER_RETRIEVE_TYPE_ID === params) return "INVALID_GATEWAY_HIERARCHY_LEVEL_MEMBER_RETRIEVE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_HIERARCHY_LEVEL_MEMBERS_LOGICAL_RESTRICTION_TYPE_ID === params) return "INVALID_GATEWAY_HIERARCHY_LEVEL_MEMBERS_LOGICAL_RESTRICTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_HIERARCHY_LEVEL_MEMBER_SEARCH_CRITERIA === params) return "INVALID_GATEWAY_HIERARCHY_LEVEL_MEMBER_SEARCH_CRITERIA";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_SEARCH_CRITERIA === params) return "INVALID_DEVICE_SEARCH_CRITERIA";
        else if (Constants.ExternalServiceReturnCodes.INVALID_UPDATE_HISTORY === params) return "INVALID_UPDATE_HISTORY";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_GATEWAY_VERSION_FOR_CHILD_DEVICE === params) return "UNSUPPORTED_GATEWAY_VERSION_FOR_CHILD_DEVICE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROVISIONING_IDENTIFIERS_NODE_MISSING === params) return "INVALID_PROVISIONING_IDENTIFIERS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROGRAM_NUMBER_NODE_MISSING === params) return "INVALID_PROGRAM_NUMBER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROGRAM_NUMBER === params) return "INVALID_PROGRAM_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_URGENCY_TYPE_ID_NODE_MISSING === params) return "INVALID_DATA_URGENCY_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_URGENCY_TYPE_ID === params) return "INVALID_DATA_URGENCY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RETURN_GENERAL_INFORMATION_NODE_MISSING === params) return "INVALID_RETURN_GENERAL_INFORMATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_TIMEOUT_DATETIME === params) return "INVALID_GATEWAY_TIMEOUT_DATETIME";

        else if (Constants.ExternalServiceReturnCodes.INVALID_SET_MEASUREMENT_RATIO_CONFIGURATION_COMMAND === params) return "INVALID_SET_MEASUREMENT_RATIO_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.DEVICE_SUPPORT_FOR_CURRENT_TRANSFORMER_UNKNOWN === params) return "DEVICE_SUPPORT_FOR_CURRENT_TRANSFORMER_UNKNOWN";
        else if (Constants.ExternalServiceReturnCodes.DEVICE_CURRENT_TRANSFORMER_UNSUPPORTED === params) return "DEVICE_CURRENT_TRANSFORMER_UNSUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.CURRENT_TRANSFORMER_PRIMARY_NODE_MISSING === params) return "CURRENT_TRANSFORMER_PRIMARY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CURRENT_TRANSFORMER_PRIMARY === params) return "INVALID_CURRENT_TRANSFORMER_PRIMARY";
        else if (Constants.ExternalServiceReturnCodes.CURRENT_TRANSFORMER_SECONDARY_NODE_MISSING === params) return "CURRENT_TRANSFORMER_SECONDARY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CURRENT_TRANSFORMER_SECONDARY === params) return "INVALID_CURRENT_TRANSFORMER_SECONDARY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CURRENT_TRANSFORMER_RATIO === params) return "INVALID_CURRENT_TRANSFORMER_RATIO";
        else if (Constants.ExternalServiceReturnCodes.VOLTAGE_TRANSFORMER_PRIMARY_NODE_MISSING === params) return "VOLTAGE_TRANSFORMER_PRIMARY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_VOLTAGE_TRANSFORMER_PRIMARY === params) return "INVALID_VOLTAGE_TRANSFORMER_PRIMARY";
        else if (Constants.ExternalServiceReturnCodes.VOLTAGE_TRANSFORMER_SECONDARY_NODE_MISSING === params) return "VOLTAGE_TRANSFORMER_SECONDARY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_VOLTAGE_TRANSFORMER_SECONDARY === params) return "INVALID_VOLTAGE_TRANSFORMER_SECONDARY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_VOLTAGE_TRANSFORMER_RATIO === params) return "INVALID_VOLTAGE_TRANSFORMER_RATIO";
        else if (Constants.ExternalServiceReturnCodes.INVALID_APPLIED === params) return "INVALID_APPLIED";
        else if (Constants.ExternalServiceReturnCodes.DEVICE_SUPPORT_FOR_CURRENT_TRANSFORMER_READ_FAILURE === params) return "DEVICE_SUPPORT_FOR_CURRENT_TRANSFORMER_READ_FAILURE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SET_MEASUREMENT_RATIO_CONFIGURATION_COMMAND_NODE_MISSING === params) return "INVALID_SET_MEASUREMENT_RATIO_CONFIGURATION_COMMAND_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_FORMAT_NODE_MISSING === params) return "INVALID_DISPLAY_FORMAT_NODE_MISSING";
        //Prepay
        else if (Constants.ExternalServiceReturnCodes.INVALID_PREPAY_NODE_MISSING === params) return "INVALID_PREPAY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ADD_CREDIT_OPTION_TYPES_NODE_MISSING === params) return "INVALID_ADD_CREDIT_OPTION_TYPES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ADD_CREDIT_OPTION_TYPE_NODE_MISSING === params) return "INVALID_ADD_CREDIT_OPTION_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ADD_CREDIT_OPTION_TYPE_ID_NODE_MISSING === params) return "INVALID_ADD_CREDIT_OPTION_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ADD_CREDIT_OPTION_TYPE_ID === params) return "INVALID_ADD_CREDIT_OPTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CREDIT_VALUE_NODE_MISSING === params) return "INVALID_CREDIT_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CREDIT_VALUE === params) return "INVALID_CREDIT_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CLEAR_CREDIT_OPTION_TYPE_ID_NODE_MISSING === params) return "INVALID_CLEAR_CREDIT_OPTION_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CLEAR_CREDIT_OPTION_TYPE_ID === params) return "INVALID_CLEAR_CREDIT_OPTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PREPAY_CONFIGURATION_NODE_MISSING === params) return "INVALID_PREPAY_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PREPAY_STATUS_TYPE_ID === params) return "INVALID_PREPAY_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EMERGENCY_CREDIT_STATUS_TYPE_ID === params) return "INVALID_EMERGENCY_CREDIT_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_EMERGENCY_CREDIT === params) return "INVALID_MAXIMUM_EMERGENCY_CREDIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REVERSE_POWER_DEDUCTION_STATUS_TYPE_ID === params) return "INVALID_REVERSE_POWER_DEDUCTION_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_POWER_STATUS_TYPE_ID === params) return "INVALID_MAXIMUM_POWER_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_AUDIBLE_ALARM_STATUS_TYPE_ID === params) return "INVALID_AUDIBLE_ALARM_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOW_CREDIT_ALARM_LEVEL === params) return "INVALID_LOW_CREDIT_ALARM_LEVEL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_NODE_MISSING === params) return "INVALID_TIER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_COUNT === params) return "INVALID_TIER_COUNT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_INDEX_NODE_MISSING === params) return "INVALID_TIER_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_INDEX === params) return "INVALID_TIER_INDEX";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_TIER_INDEX === params) return "DUPLICATE_TIER_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_RATE_NODE_MISSING === params) return "INVALID_TIER_RATE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_RATE === params) return "INVALID_TIER_RATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SET_PREPAY_CONFIGURATION_COMMAND === params) return "INVALID_SET_PREPAY_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CLEAR_CREDITS_BEFORE_ADD_OPTION_TYPE_ID === params) return "INVALID_CLEAR_CREDITS_BEFORE_ADD_OPTION_TYPE_ID";

        //2.0 tou stuff
        else if (Constants.ExternalServiceReturnCodes.INVALID_CALENDAR_ID_NODE_MISSING === params) return "INVALID_CALENDAR_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOU_RECURRING_DATES_NODE_MISSING === params) return "INVALID_TOU_RECURRING_DATES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_SCHEDULE_NODE_MISSING === params) return "INVALID_RECURRING_DATES_SCHEDULE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_INDEX_NODE_MISSING === params) return "INVALID_RECURRING_DATES_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATE_NODE_MISSING === params) return "INVALID_RECURRING_DATE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_RECURRING_DATES_SCHEDULE_INDEX === params) return "DUPLICATE_RECURRING_DATES_SCHEDULE_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATE_MONTH_NODE_MISSING === params) return "INVALID_RECURRING_DATE_MONTH_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATE_OFFSET_NODE_MISSING === params) return "INVALID_RECURRING_DATE_OFFSET_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATE_WEEKDAY_NODE_MISSING === params) return "INVALID_RECURRING_DATE_WEEKDAY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATE_PERIOD_NODE_MISSING === params) return "INVALID_RECURRING_DATE_PERIOD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATE_DAY_NODE_MISSING === params) return "INVALID_RECURRING_DATE_DAY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATE_DELTA_NODE_MISSING === params) return "INVALID_RECURRING_DATE_DELTA_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATE_ACTION_NODE_MISSING === params) return "INVALID_RECURRING_DATE_ACTION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ACTIVATE_PENDING_TOU_CALENDAR_DATE_TIME_NODE_MISSING === params) return "INVALID_ACTIVATE_PENDING_TOU_CALENDAR_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATE_PERFORM_BILLING_READ_NODE_MISSING === params) return "INVALID_RECURRING_DATE_PERFORM_BILLING_READ_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_SCHEDULE_INDEX_NODE_MISSING === params) return "INVALID_RECURRING_DATES_SCHEDULE_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_DST_ACTION === params) return "INVALID_RECURRING_DATES_DST_ACTION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_SPECIAL_SCHEDULE_ACTION === params) return "INVALID_RECURRING_DATES_SPECIAL_SCHEDULE_ACTION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_SCHEDULE_INDEX === params) return "INVALID_RECURRING_DATES_SCHEDULE_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_MONTH === params) return "INVALID_RECURRING_DATES_MONTH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_OFFSET === params) return "INVALID_RECURRING_DATES_OFFSET";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_WEEKDAY === params) return "INVALID_RECURRING_DATES_WEEKDAY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_DAY === params) return "INVALID_RECURRING_DATES_DAY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_PERIOD === params) return "INVALID_RECURRING_DATES_PERIOD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_DELTA === params) return "INVALID_RECURRING_DATES_DELTA";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_RECURRING_DATES_ACTION === params) return "DUPLICATE_RECURRING_DATES_ACTION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_ACTION === params) return "INVALID_RECURRING_DATES_ACTION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_MONTH_ORDER === params) return "INVALID_RECURRING_DATES_MONTH_ORDER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECURRING_DATES_PERFORM_BILLING_READ === params) return "INVALID_RECURRING_DATES_PERFORM_BILLING_READ";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ACTIVATE_PENDING_TOU_CALENDAR_DATE_TIME === params) return "INVALID_ACTIVATE_PENDING_TOU_CALENDAR_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULES_NODE_MISSING === params) return "INVALID_DAY_SCHEDULES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULES_SCHEDULE_NODE_MISSING === params) return "INVALID_DAY_SCHEDULES_SCHEDULE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_INDEX_NODE_MISSING === params) return "INVALID_DAY_SCHEDULE_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_SWITCH_NODE_MISSING === params) return "INVALID_DAY_SCHEDULE_SWITCH_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_SWITCH_INDEX_NODE_MISSING === params) return "INVALID_DAY_SCHEDULE_SWITCH_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_TIER_NODE_MISSING === params) return "INVALID_DAY_SCHEDULE_TIER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_START_HOUR_NODE_MISSING === params) return "INVALID_DAY_SCHEDULE_START_HOUR_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_START_MINUTE_NODE_MISSING === params) return "INVALID_DAY_SCHEDULE_START_MINUTE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_DAY_SCHEDULE_SWITCH_INDEX === params) return "DUPLICATE_DAY_SCHEDULE_SWITCH_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CALENDAR_ID === params) return "INVALID_CALENDAR_ID";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_DAY_SCHEDULE_INDEX === params) return "DUPLICATE_DAY_SCHEDULE_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_INDEX === params) return "INVALID_DAY_SCHEDULE_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_SWITCH_INDEX === params) return "INVALID_DAY_SCHEDULE_SWITCH_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_START_HOUR_START_MINUTE === params) return "INVALID_DAY_SCHEDULE_START_HOUR_START_MINUTE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_START_HOUR_START_MINUTE_NON_ZERO === params) return "INVALID_DAY_SCHEDULE_START_HOUR_START_MINUTE_NON_ZERO";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_TIER === params) return "INVALID_DAY_SCHEDULE_TIER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_START_HOUR === params) return "INVALID_DAY_SCHEDULE_START_HOUR";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAY_SCHEDULE_START_MINUTE === params) return "INVALID_DAY_SCHEDULE_START_MINUTE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULES_NODE_MISSING === params) return "INVALID_SEASON_SCHEDULES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULES_SCHEDULE_NODE_MISSING === params) return "INVALID_SEASON_SCHEDULES_SCHEDULE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULE_INDEX_NODE_MISSING === params) return "INVALID_SEASON_SCHEDULE_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULE_SATURDAY_NODE_MISSING === params) return "INVALID_SEASON_SCHEDULE_SATURDAY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULE_SUNDAY_NODE_MISSING === params) return "INVALID_SEASON_SCHEDULE_SUNDAY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULE_WEEKDAY_NODE_MISSING === params) return "INVALID_SEASON_SCHEDULE_WEEKDAY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULE_SPECIAL_0_NODE_MISSING === params) return "INVALID_SEASON_SCHEDULE_SPECIAL_0_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULE_SPECIAL_1_NODE_MISSING === params) return "INVALID_SEASON_SCHEDULE_SPECIAL_1_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULE_INDEX === params) return "INVALID_SEASON_SCHEDULE_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULE_SATURDAY === params) return "INVALID_SEASON_SCHEDULE_SATURDAY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULE_SUNDAY === params) return "INVALID_SEASON_SCHEDULE_SUNDAY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULE_WEEKDAY === params) return "INVALID_SEASON_SCHEDULE_WEEKDAY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULE_SPECIAL_0 === params) return "INVALID_SEASON_SCHEDULE_SPECIAL_0";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEASON_SCHEDULE_SPECIAL_1 === params) return "INVALID_SEASON_SCHEDULE_SPECIAL_1";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CALENDAR_PERFORM_SELF_READ_VALUE === params) return "INVALID_CALENDAR_PERFORM_SELF_READ_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_READ_SCHEDULE_NODE_MISSING === params) return "INVALID_READ_SCHEDULE_NODE_MISSING";

        //2.3 tou stuff
        else if (Constants.ExternalServiceReturnCodes.INVALID_READ_TOU_CALENDAR_OPTION_TYPE_ID === params) return "INVALID_READ_TOU_CALENDAR_OPTION_TYPE_ID";

        //3.0 tou stuff
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOU_CALENDAR_NODE_MISSING === params) return "INVALID_TOU_CALENDAR_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOU_RECURRING_DATES_PERFORM_DEMAND_RESET === params) return "INVALID_TOU_RECURRING_DATES_PERFORM_DEMAND_RESET";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOU_CALENDAR_PERFORM_DEMAND_RESET === params) return "INVALID_TOU_CALENDAR_PERFORM_DEMAND_RESET";

        //v5.0 LDA Configuration
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_SOURCES_NODE_MISSING === params) return "INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_SOURCES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_SOURCES_SOURCE_ID === params) return "INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_SOURCES_SOURCE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_SOURCES_SOURCE_COLLECTION_RATE === params) return "INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_SOURCES_SOURCE_COLLECTION_RATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_SOURCES_SOURCE_COLLECTION_RATE_NODE_MISSING === params) return "INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_SOURCES_SOURCE_COLLECTION_RATE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_SOURCES_SOURCE_ID_NODE_MISSING === params) return "INVALID_LOCAL_DATA_ACCESS_CONFIGURATION_SOURCES_SOURCE_ID_NODE_MISSING";

        // Retrieve List Enhancements
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_COMMAND_HISTORY_REQUEST_DATE_TIME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_COMMAND_HISTORY_REQUEST_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_COMMAND_HISTORY_COMMAND_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_COMMAND_HISTORY_COMMAND_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_COMMAND_HISTORY_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_COMMAND_HISTORY_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_COMMAND_HISTORY_COMMAND_ID === params) return "INVALID_DATASET_NEXT_COMMAND_HISTORY_COMMAND_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_COMMAND_HISTORY_REQUEST_DATE_TIME === params) return "INVALID_DATASET_NEXT_COMMAND_HISTORY_REQUEST_DATE_TIME";

        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DEVICE_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_DEVICE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DEVICE_NEURON_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_DEVICE_NEURON_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DEVICE_NEURON_ID === params) return "INVALID_DATASET_NEXT_DEVICE_NEURON_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DEVICE_LAST_UPDATE_DATE_TIME === params) return "INVALID_DATASET_NEXT_DEVICE_LAST_UPDATE_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DEVICE_LAST_UPDATE_DATE_TIME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_DEVICE_LAST_UPDATE_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DEVICE_NAME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_DEVICE_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_RESULT_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_RESULT_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_RESULT_RECORDED_FROM_DEVICE_DATE_TIME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_RESULT_RECORDED_FROM_DEVICE_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_RESULT_RECORDED_FROM_DEVICE_DATE_TIME === params) return "INVALID_DATASET_NEXT_RESULT_RECORDED_FROM_DEVICE_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_RESULT_RECORDED_FROM_DEVICE_DATE_TIME_RANGE === params) return "INVALID_DATASET_NEXT_RESULT_RECORDED_FROM_DEVICE_DATE_TIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_RESULT_ID === params) return "INVALID_DATASET_NEXT_RESULT_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DEVICE_ID === params) return "INVALID_DATASET_NEXT_DEVICE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_DEVICE_NAME === params) return "INVALID_DATASET_NEXT_DEVICE_NAME";

        else if (Constants.ExternalServiceReturnCodes.INVALID_GEOGRAPHIC_COORDINATES_CHILD_NODE_MISSING === params) return "INVALID_GEOGRAPHIC_COORDINATES_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GEOGRAPHIC_COORDINATES_LONGITUDE_NODE_MISSING === params) return "INVALID_GEOGRAPHIC_COORDINATES_LONGITUDE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GEOGRAPHIC_COORDINATES_LATITUDE_NODE_MISSING === params) return "INVALID_GEOGRAPHIC_COORDINATES_LATITUDE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GEOGRAPHIC_COORDINATES_LONGITUDE === params) return "INVALID_GEOGRAPHIC_COORDINATES_LONGITUDE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GEOGRAPHIC_COORDINATES_LATITUDE === params) return "INVALID_GEOGRAPHIC_COORDINATES_LATITUDE";

        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_FEEDBACK_STATUS_NODE_MISSING === params) return "INVALID_DISCONNECT_FEEDBACK_STATUS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_FEEDBACK_STATUS_TYPE_NODE_MISSING === params) return "INVALID_DISCONNECT_FEEDBACK_STATUS_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_FEEDBACK_STATUS_TYPE === params) return "INVALID_DISCONNECT_FEEDBACK_STATUS_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_LOCKED_OPEN_STATUS_TYPE_NODE_MISSING === params) return "INVALID_DISCONNECT_LOCKED_OPEN_STATUS_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_LOCKED_OPEN_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_DISCONNECT_LOCKED_OPEN_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_LOCKED_OPEN_STATUS_TYPE_ID === params) return "INVALID_DISCONNECT_LOCKED_OPEN_STATUS_TYPE_ID";

        // SettingManager codes
        else if (Constants.ExternalServiceReturnCodes.INVALID_SETTING_NOT_NUMERIC === params) return "INVALID_SETTING_NOT_NUMERIC";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SETTING_OUT_OF_RANGE === params) return "INVALID_SETTING_OUT_OF_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SETTING_EMAIL === params) return "INVALID_SETTING_EMAIL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SETTING_VALUE_LENGTH === params) return "INVALID_SETTING_VALUE_LENGTH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SETTING_ID === params) return "INVALID_SETTING_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SETTING_TYPE_ID === params) return "INVALID_SETTING_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SETTING_TYPE_ID_NODE_MISSING === params) return "INVALID_SETTING_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SETTING_VALUE === params) return "INVALID_SETTING_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SOLUTION_SETTING_VALUE_TYPE_ID === params) return "INVALID_SOLUTION_SETTING_VALUE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_SOLUTION_SETTING_VALUE_TYPE_ID === params) return "UNSUPPORTED_SOLUTION_SETTING_VALUE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TABLE_NAME === params) return "INVALID_TABLE_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TABLE_NAME_NODE_MISSING === params) return "INVALID_TABLE_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COLUMN_NAME === params) return "INVALID_COLUMN_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COLUMN_NAME_NODE_MISSING === params) return "INVALID_COLUMN_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXPIRED_INTERVAL_TYPE_ID === params) return "INVALID_EXPIRED_INTERVAL_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXPIRED_INTERVAL_TYPE_ID_NODE_MISSING === params) return "INVALID_EXPIRED_INTERVAL_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXPIRED_INTERVAL === params) return "INVALID_EXPIRED_INTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXPIRED_INTERVAL_NODE_MISSING === params) return "INVALID_EXPIRED_INTERVAL_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_SETTING_TYPE_ID === params) return "UNSUPPORTED_SETTING_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OUTBOUND_CONNECTIONS === params) return "INVALID_OUTBOUND_CONNECTIONS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_ASSIGNMENT_ID === params) return "INVALID_SCHEDULE_ASSIGNMENT_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULE_NULL === params) return "INVALID_SCHEDULE_NULL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RETRIEVE_ENCRYPTED_VALUE === params) return "INVALID_RETRIEVE_ENCRYPTED_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SETTING_NODE_MISSING === params) return "INVALID_SETTING_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SETTING_ID_NODE_MISSING === params) return "INVALID_SETTING_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_WAN_CONFIGURATION_GATEWAY_COMM_TYPE_MISMATCH === params) return "INVALID_WAN_CONFIGURATION_GATEWAY_COMM_TYPE_MISMATCH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SETTING_VALUE_RANGE === params) return "INVALID_SETTING_VALUE_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONNECTION_GUARD_TIME === params) return "INVALID_CONNECTION_GUARD_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NUMBER_OF_RETRY_ATTEMPTS === params) return "INVALID_NUMBER_OF_RETRY_ATTEMPTS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RETRY_ATTEMPTS_INTERVAL === params) return "INVALID_RETRY_ATTEMPTS_INTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_TIME_TO_CONNECT === params) return "INVALID_MAXIMUM_TIME_TO_CONNECT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEND_HELLO === params) return "INVALID_SEND_HELLO";
        else if (Constants.ExternalServiceReturnCodes.INVALID_USE_AS_DEFAULT === params) return "INVALID_USE_AS_DEFAULT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_USE_AS_DEFAULT_MULTIPLE === params) return "INVALID_USE_AS_DEFAULT_MULTIPLE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEFAULT_ASSIGNMENT_NAME === params) return "INVALID_DEFAULT_ASSIGNMENT_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEFAULT_ASSIGNMENT_NAME_NODE_MISSING === params) return "INVALID_DEFAULT_ASSIGNMENT_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_IP_ADDRESS_TYPE_ID === params) return "INVALID_IP_ADDRESS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_WAN_CONFIGURATION_NAME === params) return "INVALID_WAN_CONFIGURATION_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_WAN_CONFIGURATION_NAME_DUPLICATE === params) return "INVALID_WAN_CONFIGURATION_NAME_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PING_GATEWAY_STATUS_TYPE_ID === params) return "INVALID_PING_GATEWAY_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_UNSUCCESSFUL_PING_RESPONSE_GUARD_TIME === params) return "INVALID_UNSUCCESSFUL_PING_RESPONSE_GUARD_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TEST_TCPIP_PORT_STATUS_TYPE_ID === params) return "INVALID_TEST_TCPIP_PORT_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.CONFLICTING_PING_AND_TEST_TCPIP_STATUS_TYPES === params) return "CONFLICTING_PING_AND_TEST_TCPIP_STATUS_TYPES";
        else if (Constants.ExternalServiceReturnCodes.CONFLICTING_UNSUCCESSFUL_PING_RESPONSE_GUARD_TIME_AND_MAXIMUM_TIME_TO_CONNECT === params) return "CONFLICTING_UNSUCCESSFUL_PING_RESPONSE_GUARD_TIME_AND_MAXIMUM_TIME_TO_CONNECT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PASSIVE_FTP_IP_ADDRESS_SOURCE_TYPE_ID === params) return "INVALID_PASSIVE_FTP_IP_ADDRESS_SOURCE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER1_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_TIER1_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER2_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_TIER2_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER3_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_TIER3_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER4_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_TIER4_RETRIEVAL_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER1_RETRIEVAL_STATUS_TYPE_ID === params) return "INVALID_TIER1_RETRIEVAL_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER2_RETRIEVAL_STATUS_TYPE_ID === params) return "INVALID_TIER2_RETRIEVAL_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER3_RETRIEVAL_STATUS_TYPE_ID === params) return "INVALID_TIER3_RETRIEVAL_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER4_RETRIEVAL_STATUS_TYPE_ID === params) return "INVALID_TIER4_RETRIEVAL_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_BYTE_QUEUE_SIZE === params) return "INVALID_MAXIMUM_BYTE_QUEUE_SIZE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BYTE_QUEUE_INACTIVITY_TIMEOUT === params) return "INVALID_BYTE_QUEUE_INACTIVITY_TIMEOUT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ADDITIONAL_CRITERIA === params) return "INVALID_ADDITIONAL_CRITERIA";
        else if (Constants.ExternalServiceReturnCodes.CONFLICTING_ADDITIONAL_CRITERIA_PARAMETERS === params) return "CONFLICTING_ADDITIONAL_CRITERIA_PARAMETERS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TEST_TCPIP_PORT === params) return "INVALID_TEST_TCPIP_PORT";

        //TypeManager Return Codes
        else if (Constants.ExternalServiceReturnCodes.CATEGORY_NODE_NOT_FOUND === params) return "CATEGORY_NODE_NOT_FOUND";

        //FirmwareManager Return Codes
        else if (Constants.ExternalServiceReturnCodes.INVALID_FIRMWARE_IMAGE === params) return "INVALID_FIRMWARE_IMAGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_VERSION_NUMBER === params) return "INVALID_VERSION_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENTITY_TYPE_ID === params) return "INVALID_ENTITY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENTITY_TYPE_TYPE_ID === params) return "INVALID_ENTITY_TYPE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BUILD_DATETIME === params) return "INVALID_BUILD_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FIRMWARE_VERSION_ID === params) return "INVALID_FIRMWARE_VERSION_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FIRMWARE_VERSION_ID_NODE_MISSING === params) return "INVALID_FIRMWARE_VERSION_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FIRMWARE_VERSION_NUMBER_NOT_DEFINED === params) return "INVALID_FIRMWARE_VERSION_NUMBER_NOT_DEFINED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_VERSION_NUMBER_DUPLICATE === params) return "INVALID_VERSION_NUMBER_DUPLICATE";

        // Engine Manager return codes
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_PORT === params) return "INVALID_TASK_PROCESSOR_PORT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_PORT_DUPLICATE === params) return "INVALID_TASK_PROCESSOR_PORT_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HEARTBEAT_INTERVAL === params) return "INVALID_HEARTBEAT_INTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOCAL_TASK_MANAGER_ID === params) return "INVALID_LOCAL_TASK_MANAGER_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOCAL_TASK_MANAGER_ID_BLANK === params) return "INVALID_LOCAL_TASK_MANAGER_ID_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOCAL_TASK_MANAGER_ID_NODE_MISSING === params) return "INVALID_LOCAL_TASK_MANAGER_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_ID === params) return "INVALID_TASK_PROCESSOR_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DELETE_TASK_PROCESSOR_RUNNING === params) return "INVALID_DELETE_TASK_PROCESSOR_RUNNING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_COMMAND_ID === params) return "INVALID_TASK_PROCESSOR_COMMAND_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_COMMAND_ID_NODE_MISSING === params) return "INVALID_TASK_PROCESSOR_COMMAND_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_COMMAND === params) return "INVALID_TASK_PROCESSOR_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_ID_NODE_MISSING === params) return "INVALID_TASK_PROCESSOR_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_STOP_COMMAND === params) return "INVALID_TASK_PROCESSOR_STOP_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_START_COMMAND === params) return "INVALID_TASK_PROCESSOR_START_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_HISTORY_ID === params) return "INVALID_COMMAND_HISTORY_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ROUTING_ENTITY_TYPE_ID === params) return "INVALID_ROUTING_ENTITY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_START_REQUEST_DATETIME === params) return "INVALID_START_REQUEST_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_REQUEST_DATETIME === params) return "INVALID_END_REQUEST_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REQUEST_DATETIME_RANGE === params) return "INVALID_REQUEST_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_START_COMPLETE_DATETIME === params) return "INVALID_START_COMPLETE_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_COMPLETE_DATETIME === params) return "INVALID_END_COMPLETE_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMPLETE_DATETIME_RANGE === params) return "INVALID_COMPLETE_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_TYPE_ID_DUPLICATE === params) return "INVALID_TASK_PROCESSOR_TYPE_ID_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_NAME_DUPLICATE === params) return "INVALID_TASK_PROCESSOR_NAME_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_NAME_BLANK === params) return "INVALID_TASK_PROCESSOR_NAME_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAX_CONCURRENT_TASKS === params) return "INVALID_MAX_CONCURRENT_TASKS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENGINE_CREATION_NOT_ALLOWED === params) return "INVALID_ENGINE_CREATION_NOT_ALLOWED";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_TASK_PROCESSOR_TYPE_ID === params) return "UNSUPPORTED_TASK_PROCESSOR_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_RUNNING === params) return "INVALID_TASK_PROCESSOR_RUNNING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENGINE_IP_ADDRESS_ASSIGNMENT_TYPE_ID_NODE_MISSING === params) return "INVALID_ENGINE_IP_ADDRESS_ASSIGNMENT_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENGINE_IP_ADDRESS_ASSIGNMENT_TYPE_ID === params) return "INVALID_ENGINE_IP_ADDRESS_ASSIGNMENT_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DELETE_TASK_PROCESSOR_TYPE === params) return "INVALID_DELETE_TASK_PROCESSOR_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PROCESSOR_TYPE_ID_NODE_MISSING === params) return "INVALID_TASK_PROCESSOR_TYPE_ID_NODE_MISSING";
        // New in v5.0
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_POLLING_THREADS_MAXIMUM === params) return "INVALID_DATABASE_POLLING_THREADS_MAXIMUM";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_POLLING_THREADS_MINIMUM === params) return "INVALID_DATABASE_POLLING_THREADS_MINIMUM";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_POLLING_THREADS_CREATION_DELAY === params) return "INVALID_DATABASE_POLLING_THREADS_CREATION_DELAY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_POLLING_THREADS_DESTRUCTION_DELAY === params) return "INVALID_DATABASE_POLLING_THREADS_DESTRUCTION_DELAY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATABASE_POLLING_THREADS_RANGE === params) return "INVALID_DATABASE_POLLING_THREADS_RANGE";


        // Command History return codes
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_HISTORY_TYPE === params) return "INVALID_COMMAND_HISTORY_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_ID === params) return "INVALID_COMMAND_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_NODE_MISSING === params) return "INVALID_COMMAND_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_ID_NODE_MISSING === params) return "INVALID_COMMAND_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ROUTING_ENTITY_NODE_MISSING === params) return "INVALID_ROUTING_ENTITY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_STATUS_TYPE_NODE_MISSING === params) return "INVALID_STATUS_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ROUTING_ENTITY_TYPE_ID_NODE_MISSING === params) return "INVALID_ROUTING_ENTITY_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ROUTING_ENTITY_ID_NODE_MISSING === params) return "INVALID_ROUTING_ENTITY_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESULT_TYPE_NODE_MISSING === params) return "INVALID_RESULT_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESULT_TYPE_ID_NODE_MISSING === params) return "INVALID_RESULT_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_HISTORY_NODE_MISSING === params) return "INVALID_COMMAND_HISTORY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_HISTORY_ID_NODE_MISSING === params) return "INVALID_COMMAND_HISTORY_ID_NODE_MISSING";

        // EventManager return codes
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_DEFINITION_DELIVERY_TYPE_ID === params) return "INVALID_EVENT_DEFINITION_DELIVERY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_DEFINITION_ID === params) return "INVALID_EVENT_DEFINITION_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_DEFINITION_NAME_BLANK === params) return "INVALID_EVENT_DEFINITION_NAME_BLANK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_DEFINITION_NAME_DUPLICATE === params) return "INVALID_EVENT_DEFINITION_NAME_DUPLICATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_DEFINITION_PRIORITY === params) return "INVALID_EVENT_DEFINITION_PRIORITY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_DEFINITION_STATUS_TYPE_ID === params) return "INVALID_EVENT_DEFINITION_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_HISTORY_DATETIME_RANGE === params) return "INVALID_EVENT_HISTORY_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_HISTORY_END_DATETIME === params) return "INVALID_EVENT_HISTORY_END_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_HISTORY_ID === params) return "INVALID_EVENT_HISTORY_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_HISTORY_START_DATETIME === params) return "INVALID_EVENT_HISTORY_START_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HISTORY_NODE_MISSING === params) return "INVALID_HISTORY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HISTORY_ID_NODE_MISSING === params) return "INVALID_HISTORY_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_HISTORY_LIST_NODE_MISSING === params) return "INVALID_EVENT_HISTORY_LIST_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_DELIVERY_STATUS_TYPE_ID === params) return "INVALID_EVENT_DELIVERY_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_EVENT_HISTORY_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_EVENT_HISTORY_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_EVENT_HISTORY_EVENT_DATE_TIME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_EVENT_HISTORY_EVENT_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_EVENT_HISTORY_EVENT_DATE_TIME === params) return "INVALID_DATASET_NEXT_EVENT_HISTORY_EVENT_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_EVENT_HISTORY_EVENT_DATE_TIME_RANGE === params) return "INVALID_DATASET_NEXT_EVENT_HISTORY_EVENT_DATE_TIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_EVENT_HISTORY_ID === params) return "INVALID_DATASET_NEXT_EVENT_HISTORY_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_HISTORY_NODE_MISSING === params) return "INVALID_EVENT_HISTORY_NODE_MISSING";

        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_TYPE_ID === params) return "INVALID_EVENT_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_TYPE_ID_NODE_MISSING === params) return "INVALID_EVENT_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_TYPE_NODE_MISSING === params) return "INVALID_EVENT_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_DEFINITION_NODE_MISSING === params) return "INVALID_EVENT_DEFINITION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_DEFINITION_ID_NODE_MISSING === params) return "INVALID_EVENT_DEFINITION_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_EVENT_RETRIEVE_TYPE_ID === params) return "INVALID_GATEWAY_EVENT_RETRIEVE_TYPE_ID";

        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_ATTRIBUTE_SEARCH_CRITERIA === params) return "INVALID_DEVICE_ATTRIBUTE_SEARCH_CRITERIA";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_ATTRIBUTES_LOGICAL_RESTRICTION_TYPE_ID === params) return "INVALID_DEVICE_ATTRIBUTES_LOGICAL_RESTRICTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_ATTRIBUTE_VALUE === params) return "INVALID_DEVICE_ATTRIBUTE_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_ATTRIBUTE_VALUE_NODE_MISSING === params) return "INVALID_DEVICE_ATTRIBUTE_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_ATTRIBUTE_ID === params) return "INVALID_DEVICE_ATTRIBUTE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_ATTRIBUTE_ID_NODE_MISSING === params) return "INVALID_DEVICE_ATTRIBUTE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_ATTRIBUTE_NODE_MISSING === params) return "INVALID_DEVICE_ATTRIBUTE_NODE_MISSING";

        else if (Constants.ExternalServiceReturnCodes.INVALID_RECEIVED_DATE_TIME_SEARCH_CRITERIA === params) return "INVALID_RECEIVED_DATE_TIME_SEARCH_CRITERIA";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECEIVED_DATE_TIME_START_DATE_TIME === params) return "INVALID_RECEIVED_DATE_TIME_START_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECEIVED_DATE_TIME_END_DATE_TIME === params) return "INVALID_RECEIVED_DATE_TIME_END_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECEIVED_DATE_TIME_RANGE === params) return "INVALID_RECEIVED_DATE_TIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.NO_EVENT_HISTORY_FOUND === params) return "NO_EVENT_HISTORY_FOUND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_HISTORY_ID_NOT_IN_A_BATCH === params) return "INVALID_EVENT_HISTORY_ID_NOT_IN_A_BATCH";

        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_HIERARCHY_LEVEL_MEMBER_SEARCH_CRITERIA === params) return "INVALID_DEVICE_HIERARCHY_LEVEL_MEMBER_SEARCH_CRITERIA";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_HIERARCHY_LEVEL_MEMBERS_LOGICAL_RESTRICTION_TYPE_ID === params) return "INVALID_DEVICE_HIERARCHY_LEVEL_MEMBERS_LOGICAL_RESTRICTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_HIERARCHY_LEVEL_MEMBER_RETRIEVE_TYPE_ID === params) return "INVALID_DEVICE_HIERARCHY_LEVEL_MEMBER_RETRIEVE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_HIERARCHY_LEVEL_MEMBER_ID === params) return "INVALID_DEVICE_HIERARCHY_LEVEL_MEMBER_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_HIERARCHY_LEVEL_MEMBER_ID_NODE_MISSING === params) return "INVALID_DEVICE_HIERARCHY_LEVEL_MEMBER_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_HIERARCHY_LEVEL_MEMBER_NODE_MISSING === params) return "INVALID_DEVICE_HIERARCHY_LEVEL_MEMBER_NODE_MISSING";

        // TaskManager return codes
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_ID === params) return "INVALID_TASK_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_PRIORITY === params) return "INVALID_TASK_PRIORITY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_STATUS_TYPE_ID === params) return "INVALID_TASK_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_TIMEOUT_DATETIME === params) return "INVALID_TASK_TIMEOUT_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_TO_DELETE === params) return "INVALID_TASK_TO_DELETE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_TO_REQUEUE === params) return "INVALID_TASK_TO_REQUEUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_TYPE_ID === params) return "INVALID_TASK_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CREATION_DATETIME_RANGE === params) return "INVALID_CREATION_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CREATION_END_DATETIME === params) return "INVALID_CREATION_END_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CREATION_START_DATETIME === params) return "INVALID_CREATION_START_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXECUTION_DATETIME_RANGE === params) return "INVALID_EXECUTION_DATETIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXECUTION_END_DATETIME === params) return "INVALID_EXECUTION_END_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXECUTION_START_DATETIME === params) return "INVALID_EXECUTION_START_DATETIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TASK_TYPE_ID_NODE_MISSING === params) return "INVALID_TASK_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENTITY_NODE_MISSING === params) return "INVALID_ENTITY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENTITY_TYPE_ID_NODE_MISSING === params) return "INVALID_ENTITY_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENTITY_ID_NODE_MISSING === params) return "INVALID_ENTITY_ID_NODE_MISSING";

        // General Core service return codes
        else if (Constants.ExternalServiceReturnCodes.INVALID_PARAMETER_NULL === params) return "INVALID_PARAMETER_NULL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_NAME_NODE_MISSING === params) return "INVALID_GATEWAY_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_NAME_NODE_MISSING === params) return "INVALID_DEVICE_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NAME_SEARCH_TYPE_ID === params) return "INVALID_NAME_SEARCH_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESULT_NODE_MISSING === params) return "INVALID_RESULT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESULT_ID_NODE_MISSING === params) return "INVALID_RESULT_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXECUTION_DATETIME === params) return "INVALID_EXECUTION_DATETIME";

        //RETURN CODES FOR SetGatewayProcessConfiguration
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCESS_CONFIGURATION_NODE_MISSING === params) return "INVALID_PROCESS_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCESS_CONFIGURATION_ID_NODE_MISSING === params) return "INVALID_PROCESS_CONFIGURATION_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCESS_CONFIGURATION_ID === params) return "INVALID_PROCESS_CONFIGURATION_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCESS_CONFIGURATION_COMMAND === params) return "INVALID_PROCESS_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_STATUS === params) return "INVALID_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RUN_DATE_TIME === params) return "INVALID_RUN_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MINIMUM_ACTIVATION_INTERVAL === params) return "INVALID_MINIMUM_ACTIVATION_INTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_ACTIVATION_INTERVAL === params) return "INVALID_MAXIMUM_ACTIVATION_INTERVAL";
        //New return codes for Set Gateway Process Configuration
        else if (Constants.ExternalServiceReturnCodes.INVALID_RUN_TIME_WINDOW === params) return "INVALID_RUN_TIME_WINDOW";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_DELTA_LOAD_PROFILE_LIMIT === params) return "UNSUPPORTED_DELTA_LOAD_PROFILE_LIMIT";

        // This return code is not currently being used, but if new functions are added to a DC in the future, this may be used with the
        // Set Gateway Process Configuration command again
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_PROCESS_CONFIGURATION_ID === params) return "UNSUPPORTED_PROCESS_CONFIGURATION_ID";

        //Return codes for On Demand Billing
        else if (Constants.ExternalServiceReturnCodes.INVALID_BILLING_DATA_TIERS_NODE_MISSING === params) return "INVALID_BILLING_DATA_TIERS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BILLING_DATA_TIERS_INDEX_NODE_MISSING === params) return "INVALID_BILLING_DATA_TIERS_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BILLING_DATA_TIER_COUNT === params) return "INVALID_BILLING_DATA_TIER_COUNT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BILLING_DATA_TIER === params) return "INVALID_BILLING_DATA_TIER";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_BILLING_DATA_TIERS === params) return "DUPLICATE_BILLING_DATA_TIERS";
        else if (Constants.ExternalServiceReturnCodes.READ_BILLING_DATA_ON_DEMAND_IN_PROGRESS === params) return "READ_BILLING_DATA_ON_DEMAND_IN_PROGRESS";
        else if (Constants.ExternalServiceReturnCodes.READ_DATA_ON_DEMAND_IN_PROGRESS === params) return "READ_DATA_ON_DEMAND_IN_PROGRESS";

        //Return codes for Set Device Auto Discovery Configuration command
        else if (Constants.ExternalServiceReturnCodes.INVALID_AUTO_DISCOVERY_CONFIGURATION_NODE_MISSING === params) return "INVALID_AUTO_DISCOVERY_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_AUTO_DISCOVERY_CONFIGURATION_MBUS_NODE_MISSING === params) return "INVALID_AUTO_DISCOVERY_CONFIGURATION_MBUS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_AUTO_DISCOVERY_CONFIGURATION_MBUS_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_AUTO_DISCOVERY_CONFIGURATION_MBUS_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_AUTO_DISCOVERY_CONFIGURATION_MBUS_STATUS_TYPE_ID === params) return "INVALID_AUTO_DISCOVERY_CONFIGURATION_MBUS_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_AUTO_DISCOVERY_CONFIGURATION_COMMAND === params) return "INVALID_AUTO_DISCOVERY_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHILD_DEVICE_NODE_MISSING === params) return "INVALID_CHILD_DEVICE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_TYPE === params) return "INVALID_DEVICE_TYPE";

        //Return codes for Set Device Utility Information command
        else if (Constants.ExternalServiceReturnCodes.INVALID_UTILITY_INFORMATION_NODE_MISSING === params) return "INVALID_UTILITY_INFORMATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_UTILITY_INFORMATION_COMMAND === params) return "INVALID_UTILITY_INFORMATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_UTILITY_INFORMATION_OWNER_NAME === params) return "INVALID_UTILITY_INFORMATION_OWNER_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_UTILITY_INFORMATION_OWNER_NAME_LENGTH === params) return "INVALID_UTILITY_INFORMATION_OWNER_NAME_LENGTH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_UTILITY_INFORMATION_UTILITY_DIVISION === params) return "INVALID_UTILITY_INFORMATION_UTILITY_DIVISION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_UTILITY_INFORMATION_UTILITY_DIVISION_LENGTH === params) return "INVALID_UTILITY_INFORMATION_UTILITY_DIVISION_LENGTH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_UTILITY_INFORMATION_MISCELLANEOUS_IDENTIFICATION === params) return "INVALID_UTILITY_INFORMATION_MISCELLANEOUS_IDENTIFICATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_UTILITY_INFORMATION_MISCELLANEOUS_IDENTIFICATION_LENGTH === params) return "INVALID_UTILITY_INFORMATION_MISCELLANEOUS_IDENTIFICATION_LENGTH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_UTILITY_INFORMATION_POINT_IDENTIFIER === params) return "INVALID_UTILITY_INFORMATION_POINT_IDENTIFIER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_UTILITY_INFORMATION_POINT_IDENTIFIER_LENGTH === params) return "INVALID_UTILITY_INFORMATION_POINT_IDENTIFIER_LENGTH";

        //Return codes for Set Device Time Zone Configuration command
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIME_ZONE_CONFIGURATION_NODE_MISSING === params) return "INVALID_TIME_ZONE_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIME_ZONE_CONFIGURATION_COMMAND === params) return "INVALID_TIME_ZONE_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAYLIGHT_SAVING_TIME === params) return "INVALID_DAYLIGHT_SAVING_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAYLIGHT_SAVING_TIME_END_TIME_NODE_MISSING === params) return "INVALID_DAYLIGHT_SAVING_TIME_END_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAYLIGHT_SAVING_TIME_START_TIME_NODE_MISSING === params) return "INVALID_DAYLIGHT_SAVING_TIME_START_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAYLIGHT_SAVING_TIME_START_TIME === params) return "INVALID_DAYLIGHT_SAVING_TIME_START_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAYLIGHT_SAVING_TIME_END_TIME === params) return "INVALID_DAYLIGHT_SAVING_TIME_END_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAYLIGHT_SAVING_TIME_ADJUSTMENT_OFFSET === params) return "INVALID_DAYLIGHT_SAVING_TIME_ADJUSTMENT_OFFSET";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAYLIGHT_SAVING_TIME_TIME_ZONE_OFFSET === params) return "INVALID_DAYLIGHT_SAVING_TIME_TIME_ZONE_OFFSET";

        //Return codes for Connect and Disconnect Load Commands
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_DISCONNECT_PRIORITY_LEVEL_NODE === params) return "UNSUPPORTED_DISCONNECT_PRIORITY_LEVEL_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_PRIORITY_LEVEL === params) return "INVALID_DISCONNECT_PRIORITY_LEVEL";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_FORCE_CONNECT_NODE === params) return "UNSUPPORTED_FORCE_CONNECT_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FORCE_CONNECT === params) return "INVALID_FORCE_CONNECT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_READ_LOAD_STATUS === params) return "INVALID_READ_LOAD_STATUS";
        else if (Constants.ExternalServiceReturnCodes.DISCONNECT_DEVICE_LOAD_COMMAND_TASK_LIMIT_EXCEEDED === params) return "DISCONNECT_DEVICE_LOAD_COMMAND_TASK_LIMIT_EXCEEDED";
        else if (Constants.ExternalServiceReturnCodes.CONNECT_DEVICE_LOAD_COMMAND_TASK_LIMIT_EXCEEDED === params) return "CONNECT_DEVICE_LOAD_COMMAND_TASK_LIMIT_EXCEEDED";

        //Return codes for Read and Set Device Disconnect Configuration Commands
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_CONFIGURATION_NODE_MISSING === params) return "INVALID_DISCONNECT_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_MANUAL_DISCONNECT_STATUS_TYPE_ID_NODE === params) return "UNSUPPORTED_MANUAL_DISCONNECT_STATUS_TYPE_ID_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MANUAL_DISCONNECT_STATUS_TYPE_ID === params) return "INVALID_MANUAL_DISCONNECT_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_REMOTE_RECONNECT_STATUS_TYPE_ID_NODE === params) return "UNSUPPORTED_REMOTE_RECONNECT_STATUS_TYPE_ID_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REMOTE_RECONNECT_STATUS_TYPE_ID === params) return "INVALID_REMOTE_RECONNECT_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LED_CONFIGURATION === params) return "INVALID_LED_CONFIGURATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LED_STATUS_TYPE_ID === params) return "INVALID_LED_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_LED_CONFIGURATION_SWITCH_STATUS_NODE === params) return "UNSUPPORTED_LED_CONFIGURATION_SWITCH_STATUS_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LED_CONFIGURATION_SWITCH_STATUS_MISSING === params) return "INVALID_LED_CONFIGURATION_SWITCH_STATUS_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_STATUS_DISCONNECTED_LED_BEHAVIOR_TYPE_ID_NODE_MISSING === params) return "INVALID_SWITCH_STATUS_DISCONNECTED_LED_BEHAVIOR_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_STATUS_DISCONNECTED_LED_BEHAVIOR_TYPE_ID === params) return "INVALID_SWITCH_STATUS_DISCONNECTED_LED_BEHAVIOR_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_STATUS_CONNECTED_LED_BEHAVIOR_TYPE_ID_NODE_MISSING === params) return "INVALID_SWITCH_STATUS_CONNECTED_LED_BEHAVIOR_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_STATUS_CONNECTED_LED_BEHAVIOR_TYPE_ID === params) return "INVALID_SWITCH_STATUS_CONNECTED_LED_BEHAVIOR_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_STATUS_LOCKED_DISCONNECTED_LED_BEHAVIOR_TYPE_ID_NODE_MISSING === params) return "INVALID_SWITCH_STATUS_LOCKED_DISCONNECTED_LED_BEHAVIOR_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_STATUS_LOCKED_DISCONNECTED_LED_BEHAVIOR_TYPE_ID === params) return "INVALID_SWITCH_STATUS_LOCKED_DISCONNECTED_LED_BEHAVIOR_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_CONFIGURATION_COMMAND === params) return "INVALID_DISCONNECT_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_AUTO_RECONNECT_STATUS_NODE === params) return "UNSUPPORTED_AUTO_RECONNECT_STATUS_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_AUTO_RECONNECT_STATUS === params) return "INVALID_AUTO_RECONNECT_STATUS";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_RECONNECT_TIME_THRESHOLD_NODE === params) return "UNSUPPORTED_RECONNECT_TIME_THRESHOLD_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECONNECT_TIME_THRESHOLD === params) return "INVALID_RECONNECT_TIME_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_PUSH_BUTTON_CLOSE_BEFORE_RECONNECT_TIME_THRESHOLD_STATUS === params) return "UNSUPPORTED_PUSH_BUTTON_CLOSE_BEFORE_RECONNECT_TIME_THRESHOLD_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PUSH_BUTTON_CLOSE_BEFORE_RECONNECT_TIME_THRESHOLD_STATUS === params) return "INVALID_PUSH_BUTTON_CLOSE_BEFORE_RECONNECT_TIME_THRESHOLD_STATUS";

        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_FIRMWARE_IMAGE === params) return "UNSUPPORTED_FIRMWARE_IMAGE";

        //Return codes for Write Device Data Command
        else if (Constants.ExternalServiceReturnCodes.INVALID_RAW_DATA_NODE_MISSING === params) return "INVALID_RAW_DATA_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RAW_DATA_NUMBER_OF_BYTES === params) return "INVALID_RAW_DATA_NUMBER_OF_BYTES";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RAW_DATA_NOT_HEXADECIMAL === params) return "INVALID_RAW_DATA_NOT_HEXADECIMAL";
        else if (Constants.ExternalServiceReturnCodes.CONFLICTING_TIMEOUT_INTERVAL === params) return "CONFLICTING_TIMEOUT_INTERVAL";

        //Return codes for Set Stop Mode Configuration
        else if (Constants.ExternalServiceReturnCodes.INVALID_STOP_MODE_CONFIGURATION_NODE_MISSING === params) return "INVALID_STOP_MODE_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NUMBER_OF_DAYS_NODE_MISSING === params) return "INVALID_NUMBER_OF_DAYS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NUMBER_OF_DAYS === params) return "INVALID_NUMBER_OF_DAYS";

        // Return Codes for Power Quality Configuration
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_QUALITY_CONFIGURATION_NODE_MISSING === params) return "INVALID_POWER_QUALITY_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OUTAGE_DURATION_THRESHOLD === params) return "INVALID_OUTAGE_DURATION_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SAG_SURGE_DURATION_THRESHOLD === params) return "INVALID_SAG_SURGE_DURATION_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SET_POWER_QUALITY_CONFIGURATION_COMMAND === params) return "INVALID_SET_POWER_QUALITY_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_QUALITY_DURATION_THRESHOLDS_MISMATCH === params) return "INVALID_POWER_QUALITY_DURATION_THRESHOLDS_MISMATCH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SAG_VOLTAGE_PERCENT_THRESHOLD === params) return "INVALID_SAG_VOLTAGE_PERCENT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SURGE_VOLTAGE_PERCENT_THRESHOLD === params) return "INVALID_SURGE_VOLTAGE_PERCENT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OVER_CURRENT_PERCENT_THRESHOLD === params) return "INVALID_OVER_CURRENT_PERCENT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAX_CURRENT === params) return "INVALID_MAX_CURRENT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PHASE_LOSS_VOLTAGE_PERCENT_THRESHOLD === params) return "INVALID_PHASE_LOSS_VOLTAGE_PERCENT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_QUALITY_CONFIGURATION_COMMAND === params) return "INVALID_POWER_QUALITY_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REVERSE_POWER_ALARM_CURRENT_THRESHOLD === params) return "INVALID_REVERSE_POWER_ALARM_CURRENT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OVER_CURRENT_DURATION_THRESHOLD === params) return "INVALID_OVER_CURRENT_DURATION_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOTAL_HARMONIC_DISTORTION_CHILD_NODE_MISSING === params) return "INVALID_TOTAL_HARMONIC_DISTORTION_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOTAL_HARMONIC_DISTORTION_CALCULATION_METHOD === params) return "INVALID_TOTAL_HARMONIC_DISTORTION_CALCULATION_METHOD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOTAL_HARMONIC_DISTORTION_VOLTAGE_DURATION_THRESHOLD === params) return "INVALID_TOTAL_HARMONIC_DISTORTION_VOLTAGE_DURATION_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOTAL_HARMONIC_DISTORTION_VOLTAGE_PERCENT_THRESHOLD === params) return "INVALID_TOTAL_HARMONIC_DISTORTION_VOLTAGE_PERCENT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOTAL_HARMONIC_DISTORTION_CURRENT_DURATION_THRESHOLD === params) return "INVALID_TOTAL_HARMONIC_DISTORTION_CURRENT_DURATION_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOTAL_HARMONIC_DISTORTION_CURRENT_PERCENT_THRESHOLD === params) return "INVALID_TOTAL_HARMONIC_DISTORTION_CURRENT_PERCENT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOTAL_HARMONIC_DISTORTION_APPARENT_POWER_DURATION_THRESHOLD === params) return "INVALID_TOTAL_HARMONIC_DISTORTION_APPARENT_POWER_DURATION_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOTAL_HARMONIC_DISTORTION_APPARENT_POWER_PERCENT_THRESHOLD === params) return "INVALID_TOTAL_HARMONIC_DISTORTION_APPARENT_POWER_PERCENT_THRESHOLD";
        //4.0 additions
        else if (Constants.ExternalServiceReturnCodes.INVALID_REVERSE_POWER_ALARM_DURATION_THRESHOLD === params) return "INVALID_REVERSE_POWER_ALARM_DURATION_THRESHOLD";
        //4.1 additions
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_UP_HOLD_DURATION === params) return "INVALID_POWER_UP_HOLD_DURATION";
        //6.0 additions
        else if (Constants.ExternalServiceReturnCodes.INVALID_SAG2_SURGE2_DURATION_THRESHOLD === params) return "INVALID_SAG2_SURGE2_DURATION_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SAG2_VOLTAGE_PERCENT_THRESHOLD === params) return "INVALID_SAG2_VOLTAGE_PERCENT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MINIMUM_NEUTRAL_DEVIATION_EARTH_FAULT_CURRENT === params) return "INVALID_MINIMUM_NEUTRAL_DEVIATION_EARTH_FAULT_CURRENT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NEUTRAL_DEVIATION_PERCENT_THRESHOLD === params) return "INVALID_NEUTRAL_DEVIATION_PERCENT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NEUTRAL_DEVIATION_DURATION_THRESHOLD === params) return "INVALID_NEUTRAL_DEVIATION_DURATION_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOG_EARLY_SAG_SURGE_EVENTS === params) return "INVALID_LOG_EARLY_SAG_SURGE_EVENTS";

        // Return codes for Add Device One-time Read Request command
        else if (Constants.ExternalServiceReturnCodes.INVALID_ONE_TIME_READ_REQUEST_DATE_TIME_NODE_MISSING === params) return "INVALID_ONE_TIME_READ_REQUEST_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ONE_TIME_READ_REQUEST_DATE_TIME === params) return "INVALID_ONE_TIME_READ_REQUEST_DATE_TIME";

        // Return codes for Clear Device One-time Read Requests command
        else if (Constants.ExternalServiceReturnCodes.INVALID_ONE_TIME_READ_REQUEST_TYPE_ID_NODE_MISSING === params) return "INVALID_ONE_TIME_READ_REQUEST_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ONE_TIME_READ_REQUEST_TYPE_ID === params) return "INVALID_ONE_TIME_READ_REQUEST_TYPE_ID";

        //Return codes for Event Log Configuration
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_LOG_CONFIGURATION_NODE_MISSING === params) return "INVALID_EVENT_LOG_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_NODE_MISSING === params) return "INVALID_EVENT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_ID_NODE_MISSING === params) return "INVALID_EVENT_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_ID === params) return "INVALID_EVENT_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_LOG_STATUS_NODE_MISSING === params) return "INVALID_EVENT_LOG_STATUS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_LOG_STATUS === params) return "INVALID_EVENT_LOG_STATUS";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_EVENT_ID === params) return "DUPLICATE_EVENT_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TABLE_NODE_MISSING === params) return "INVALID_TABLE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TABLE_ID_NODE_MISSING === params) return "INVALID_TABLE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TABLE_ID === params) return "INVALID_TABLE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TABLE_LOG_STATUS_NODE_MISSING === params) return "INVALID_TABLE_LOG_STATUS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_TABLE_ID === params) return "DUPLICATE_TABLE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TABLE_LOG_STATUS === params) return "INVALID_TABLE_LOG_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCEDURE_NODE_MISSING === params) return "INVALID_PROCEDURE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCEDURE_ID_NODE_MISSING === params) return "INVALID_PROCEDURE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCEDURE_ID === params) return "INVALID_PROCEDURE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCEDURE_LOG_STATUS_NODE_MISSING === params) return "INVALID_PROCEDURE_LOG_STATUS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCEDURE_LOG_STATUS === params) return "INVALID_PROCEDURE_LOG_STATUS";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_PROCEDURE_ID === params) return "DUPLICATE_PROCEDURE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EVENT_LOG_CONFIGURATION_COMMAND === params) return "INVALID_EVENT_LOG_CONFIGURATION_COMMAND";

        //Return codes for Demand Configuration
        else if (Constants.ExternalServiceReturnCodes.SET_DEMAND_CONFIGURATION_IN_PROGRESS === params) return "SET_DEMAND_CONFIGURATION_IN_PROGRESS";
        else if (Constants.ExternalServiceReturnCodes.FEATURE_ACTIVATION_KEY_MISSING === params) return "FEATURE_ACTIVATION_KEY_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEMAND_CONFIGURATION_NODE_MISSING === params) return "INVALID_DEMAND_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SOURCE_NODE_MISSING === params) return "INVALID_SOURCE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SOURCE_INDEX_NODE_MISSING === params) return "INVALID_SOURCE_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_SOURCE_INDEX === params) return "DUPLICATE_SOURCE_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SOURCE_ID === params) return "INVALID_SOURCE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COINCIDENT_SOURCE_NODE_MISSING === params) return "INVALID_COINCIDENT_SOURCE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COINCIDENT_SOURCE_INDEX_NODE_MISSING === params) return "INVALID_COINCIDENT_SOURCE_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COINCIDENT_SOURCE_INDEX === params) return "INVALID_COINCIDENT_SOURCE_INDEX";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_COINCIDENT_SOURCE_INDEX === params) return "DUPLICATE_COINCIDENT_SOURCE_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COINCIDENT_SOURCE_ID_NODE_MISSING === params) return "INVALID_COINCIDENT_SOURCE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COINCIDENT_SOURCE_ID === params) return "INVALID_COINCIDENT_SOURCE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INTERVAL === params) return "INVALID_INTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SUBINTERVAL === params) return "INVALID_SUBINTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INTERVAL_SUBINTERVAL_COMBINATION === params) return "INVALID_INTERVAL_SUBINTERVAL_COMBINATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESET_EXCLUSION === params) return "INVALID_RESET_EXCLUSION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_FAIL_EXCLUSION === params) return "INVALID_POWER_FAIL_EXCLUSION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRESENT_CALCULATION_TYPE_ID === params) return "INVALID_PRESENT_CALCULATION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESET_TIME_FORMAT === params) return "INVALID_RESET_TIME_FORMAT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESET_TIME_HOUR === params) return "INVALID_RESET_TIME_HOUR";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESET_TIME_MINUTE === params) return "INVALID_RESET_TIME_MINUTE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LCD_END_OF_INTERVAL_DURATION === params) return "INVALID_LCD_END_OF_INTERVAL_DURATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SOURCE_INDEX === params) return "INVALID_SOURCE_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SOURCE_ID_NODE_MISSING === params) return "INVALID_SOURCE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COINCIDENT_SOURCES_NODE_MISSING === params) return "INVALID_COINCIDENT_SOURCES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NUMBER_OF_COINCIDENT_SOURCES === params) return "INVALID_NUMBER_OF_COINCIDENT_SOURCES";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SOURCES_NODE_MISSING === params) return "INVALID_SOURCES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HISTORICAL_RESET_ENTRY_COUNT_NODE_MISSING === params) return "INVALID_HISTORICAL_RESET_ENTRY_COUNT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HISTORICAL_RESET_ENTRY_COUNT === params) return "INVALID_HISTORICAL_RESET_ENTRY_COUNT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CUMULATIVE_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_CUMULATIVE_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CUMULATIVE_STATUS_TYPE_ID === params) return "INVALID_CUMULATIVE_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTINUOUS_CUMULATIVE_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_CONTINUOUS_CUMULATIVE_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTINUOUS_CUMULATIVE_STATUS_TYPE_ID === params) return "INVALID_CONTINUOUS_CUMULATIVE_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SUBINTERVAL_NODE_MISSING === params) return "INVALID_SUBINTERVAL_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_PERFORM_SELF_READ === params) return "UNSUPPORTED_PERFORM_SELF_READ";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_HISTORICAL_RESET_ENTRY_COUNT === params) return "UNSUPPORTED_HISTORICAL_RESET_ENTRY_COUNT";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_CUMULATIVE_STATUS_TYPE_ID === params) return "UNSUPPORTED_CUMULATIVE_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_CONTINUOUS_CUMULATIVE_STATUS_TYPE_ID === params) return "UNSUPPORTED_CONTINUOUS_CUMULATIVE_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SET_DEMAND_CONFIGURATION_COMMAND === params) return "INVALID_SET_DEMAND_CONFIGURATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEMAND_CONFIGURATION_CHILD_NODE_MISSING === params) return "INVALID_DEMAND_CONFIGURATION_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SOURCE_CHILD_NODE_MISSING === params) return "INVALID_SOURCE_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_COINCIDENT_SOURCES === params) return "UNSUPPORTED_COINCIDENT_SOURCES";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PERFORM_SELF_READ === params) return "INVALID_PERFORM_SELF_READ";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_DEVICE_DEMAND_CONFIGURED === params) return "UNSUPPORTED_DEVICE_DEMAND_CONFIGURED";

        //Return codes for Interface
        else if (Constants.ExternalServiceReturnCodes.INTERFACE_READ_STATUS_NOT_COMPLETE === params) return "INTERFACE_READ_STATUS_NOT_COMPLETE";

        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_NAME_MATCH_TYPE_ID === params) return "INVALID_GATEWAY_NAME_MATCH_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_SUCCESSFUL_COMMUNICATION_NODE_MISSING === params) return "INVALID_LAST_SUCCESSFUL_COMMUNICATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_SUCCESSFUL_COMMUNICATION_REQUEST_TYPE_ID_NODE_MISSING === params) return "INVALID_LAST_SUCCESSFUL_COMMUNICATION_REQUEST_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_SUCCESSFUL_COMMUNICATION_REQUEST_TYPE_ID === params) return "INVALID_LAST_SUCCESSFUL_COMMUNICATION_REQUEST_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_SUCCESSFUL_COMMUNICATION_DATE_TIME_MISSING === params) return "INVALID_LAST_SUCCESSFUL_COMMUNICATION_DATE_TIME_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_SUCCESSFUL_COMMUNICATION_START_DATE_TIME === params) return "INVALID_LAST_SUCCESSFUL_COMMUNICATION_START_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_SUCCESSFUL_COMMUNICATION_END_DATE_TIME === params) return "INVALID_LAST_SUCCESSFUL_COMMUNICATION_END_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_SUCCESSFUL_COMMUNICATION_DATE_TIME_RANGE === params) return "INVALID_LAST_SUCCESSFUL_COMMUNICATION_DATE_TIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_SERIAL_NUMBER_VALUE_NODE_MISSING === params) return "INVALID_GATEWAY_SERIAL_NUMBER_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_SERIAL_NUMBER_MATCH_TYPE_ID === params) return "INVALID_GATEWAY_SERIAL_NUMBER_MATCH_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIERARCHY_LEVEL_MEMBERS_LOGICAL_RESTRICTION_TYPE_ID === params) return "INVALID_HIERARCHY_LEVEL_MEMBERS_LOGICAL_RESTRICTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTES_LOGICAL_RESTRICTION_TYPE_ID === params) return "INVALID_ATTRIBUTES_LOGICAL_RESTRICTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OPERATIONAL_PROFILE_NODE_MISSING === params) return "INVALID_OPERATIONAL_PROFILE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OPERATIONAL_PROFILE_ID_NODE_MISSING === params) return "INVALID_OPERATIONAL_PROFILE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OPERATIONAL_PROFILE_ID === params) return "INVALID_OPERATIONAL_PROFILE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATM_CONFIGURATION_NODE_MISSING === params) return "INVALID_ATM_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATM_MODE_NODE_MISSING === params) return "INVALID_ATM_MODE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATM_MODE_TYPE_ID_NODE_MISSING === params) return "INVALID_ATM_MODE_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATM_MODE_TYPE_ID === params) return "INVALID_ATM_MODE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FIRMWARE_VERSION_NODE_MISSING === params) return "INVALID_FIRMWARE_VERSION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SERVER_WAN_CONFIGURATION_NODE_MISSING === params) return "INVALID_SERVER_WAN_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SERVER_WAN_CONFIGURATION_ID === params) return "INVALID_SERVER_WAN_CONFIGURATION_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_LAST_SERVER_INITIATED_HIGH_PRIORITY_COMMUNICATION_DATE_TIME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_LAST_SERVER_INITIATED_HIGH_PRIORITY_COMMUNICATION_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_LAST_SERVER_INITIATED_HIGH_PRIORITY_COMMUNICATION_DATE_TIME === params) return "INVALID_DATASET_NEXT_LAST_SERVER_INITIATED_HIGH_PRIORITY_COMMUNICATION_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_LAST_SERVER_INITIATED_NORMAL_PRIORITY_COMMUNICATION_DATE_TIME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_LAST_SERVER_INITIATED_NORMAL_PRIORITY_COMMUNICATION_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_LAST_SERVER_INITIATED_NORMAL_PRIORITY_COMMUNICATION_DATE_TIME === params) return "INVALID_DATASET_NEXT_LAST_SERVER_INITIATED_NORMAL_PRIORITY_COMMUNICATION_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_LAST_GATEWAY_INITIATED_COMMUNICATION_DATE_TIME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_LAST_GATEWAY_INITIATED_COMMUNICATION_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_LAST_GATEWAY_INITIATED_COMMUNICATION_DATE_TIME === params) return "INVALID_DATASET_NEXT_LAST_GATEWAY_INITIATED_COMMUNICATION_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FIRMWARE_VERSION_NAME_NODE_MISSING === params) return "INVALID_FIRMWARE_VERSION_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_SEARCH_CRITERIA === params) return "INVALID_GATEWAY_SEARCH_CRITERIA";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_NAME_VALUE_NODE_MISSING === params) return "INVALID_GATEWAY_NAME_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SERVER_WAN_CONFIGURATION_ID_NODE_MISSING === params) return "INVALID_SERVER_WAN_CONFIGURATION_ID_NODE_MISSING";

        else if (Constants.ExternalServiceReturnCodes.MULTIPLE_DEVICES_WITH_NAME === params) return "MULTIPLE_DEVICES_WITH_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_STATUS_NODE_MISSING === params) return "INVALID_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_STATUS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_STATUS_TYPE_ID === params) return "INVALID_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_LAST_RECEIVED_RESULT_DATE_TIME === params) return "INVALID_DATASET_NEXT_LAST_RECEIVED_RESULT_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_LAST_RECEIVED_RESULT_RESULT_TYPE_ID === params) return "INVALID_DATASET_NEXT_LAST_RECEIVED_RESULT_RESULT_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_LAST_RECEIVED_RESULT_RESULT_TYPE_ID_NODE_MISSING === params) return "INVALID_DATASET_NEXT_LAST_RECEIVED_RESULT_RESULT_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEMAND_ACTIVATION_STATUS_NODE_MISSING === params) return "INVALID_DEMAND_ACTIVATION_STATUS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEMAND_ACTIVATION_STATUS_VALUE === params) return "INVALID_DEMAND_ACTIVATION_STATUS_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEMAND_ACTIVATION_STATUS_VALUE_NODE_MISSING === params) return "INVALID_DEMAND_ACTIVATION_STATUS_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEMAND_CONFIGURATION_STATUS_NODE_MISSING === params) return "INVALID_DEMAND_CONFIGURATION_STATUS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEMAND_CONFIGURATION_STATUS_VALUE === params) return "INVALID_DEMAND_CONFIGURATION_STATUS_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEMAND_CONFIGURATION_STATUS_VALUE_NODE_MISSING === params) return "INVALID_DEMAND_CONFIGURATION_STATUS_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_NAME_MATCH_TYPE_ID === params) return "INVALID_DEVICE_NAME_MATCH_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_NAME_VALUE_NODE_MISSING === params) return "INVALID_DEVICE_NAME_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_SERIAL_NUMBER_VALUE_NODE_MISSING === params) return "INVALID_DEVICE_SERIAL_NUMBER_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_RECEIVED_RESULT_DATE_TIME_MISSING === params) return "INVALID_LAST_RECEIVED_RESULT_DATE_TIME_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_RECEIVED_RESULT_DATE_TIME_RANGE === params) return "INVALID_LAST_RECEIVED_RESULT_DATE_TIME_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_RECEIVED_RESULT_END_DATE_TIME === params) return "INVALID_LAST_RECEIVED_RESULT_END_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_RECEIVED_RESULT_NODE_MISSING === params) return "INVALID_LAST_RECEIVED_RESULT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_RECEIVED_RESULT_RESULT_TYPE_ID === params) return "INVALID_LAST_RECEIVED_RESULT_RESULT_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_RECEIVED_RESULT_RESULT_TYPE_ID_NODE_MISSING === params) return "INVALID_LAST_RECEIVED_RESULT_RESULT_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_RECEIVED_RESULT_START_DATE_TIME === params) return "INVALID_LAST_RECEIVED_RESULT_START_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_LAST_RECEIVED_RESULT_RESULT_TYPE_ID === params) return "UNSUPPORTED_LAST_RECEIVED_RESULT_RESULT_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_SERIAL_NUMBER_MATCH_TYPE_ID === params) return "INVALID_DEVICE_SERIAL_NUMBER_MATCH_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOTAL_SIGNAL_STRENGTH_VALUE_MISSING === params) return "INVALID_TOTAL_SIGNAL_STRENGTH_VALUE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOTAL_SIGNAL_STRENGTH_START_VALUE === params) return "INVALID_TOTAL_SIGNAL_STRENGTH_START_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOTAL_SIGNAL_STRENGTH_END_VALUE === params) return "INVALID_TOTAL_SIGNAL_STRENGTH_END_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TOTAL_SIGNAL_STRENGTH_VALUE_RANGE === params) return "INVALID_TOTAL_SIGNAL_STRENGTH_VALUE_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPEATER_COUNT_VALUE_MISSING === params) return "INVALID_REPEATER_COUNT_VALUE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPEATER_COUNT_START_VALUE === params) return "INVALID_REPEATER_COUNT_START_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPEATER_COUNT_END_VALUE === params) return "INVALID_REPEATER_COUNT_END_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPEATER_COUNT_VALUE_RANGE === params) return "INVALID_REPEATER_COUNT_VALUE_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPEATER_PATH_LOWEST_CARRIER_MARGIN_END_VALUE === params) return "INVALID_REPEATER_PATH_LOWEST_CARRIER_MARGIN_END_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPEATER_PATH_LOWEST_CARRIER_MARGIN_START_VALUE === params) return "INVALID_REPEATER_PATH_LOWEST_CARRIER_MARGIN_START_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPEATER_PATH_LOWEST_CARRIER_MARGIN_VALUE_MISSING === params) return "INVALID_REPEATER_PATH_LOWEST_CARRIER_MARGIN_VALUE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPEATER_PATH_LOWEST_CARRIER_MARGIN_VALUE_RANGE === params) return "INVALID_REPEATER_PATH_LOWEST_CARRIER_MARGIN_VALUE_RANGE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_LAST_RECEIVED_RESULT_NODE_MISSING === params) return "INVALID_DATASET_NEXT_LAST_RECEIVED_RESULT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_LAST_RECEIVED_RESULT_DATE_TIME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_LAST_RECEIVED_RESULT_DATE_TIME_NODE_MISSING";

        //Return codes for Assign Gateway Operational Profile command
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_OPERATIONAL_PROFILE_ID === params) return "UNSUPPORTED_OPERATIONAL_PROFILE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROCESS_CONFIGURATIONS_NODE_MISSING === params) return "INVALID_PROCESS_CONFIGURATIONS_NODE_MISSING";

        //Return codes for LSV and LS support in Disconnect Configuration feature
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_DISCONNECT_RECONNECT_WITH_LSV_STATUS_TYPE_ID_NODE === params) return "UNSUPPORTED_DISCONNECT_RECONNECT_WITH_LSV_STATUS_TYPE_ID_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_RECONNECT_WITH_LSV_STATUS_TYPE_ID === params) return "INVALID_DISCONNECT_RECONNECT_WITH_LSV_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_DISCONNECT_RECONNECT_WITH_LS_STATUS_TYPE_ID_NODE === params) return "UNSUPPORTED_DISCONNECT_RECONNECT_WITH_LS_STATUS_TYPE_ID_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_RECONNECT_WITH_LS_STATUS_TYPE_ID === params) return "INVALID_DISCONNECT_RECONNECT_WITH_LS_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_SEPARATE_DISCONNECT_AND_LSV_ICON_NODE === params) return "UNSUPPORTED_SEPARATE_DISCONNECT_AND_LSV_ICON_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SEPARATE_DISCONNECT_AND_LSV_ICON === params) return "INVALID_SEPARATE_DISCONNECT_AND_LSV_ICON";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_USE_LSV_ALARM_NODE === params) return "UNSUPPORTED_USE_LSV_ALARM_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_USE_LSV_ALARM === params) return "INVALID_USE_LSV_ALARM";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_RECONNECT_WITH_LS_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_DISCONNECT_RECONNECT_WITH_LS_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_RECONNECT_WITH_LSV_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_DISCONNECT_RECONNECT_WITH_LSV_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_RECONNECT_WITH_LSV_AND_LS_STATUS_TYPE_ID_CONFIGURATION === params) return "INVALID_DISCONNECT_RECONNECT_WITH_LSV_AND_LS_STATUS_TYPE_ID_CONFIGURATION";


        //Return codes for MEP - Gateway Event Configuration feature
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_AND_MEP_ALARM_NODE_MISSING === params) return "INVALID_MBUS_AND_MEP_ALARM_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_AND_MEP_ALARM_ID_NODE_MISSING === params) return "INVALID_MBUS_AND_MEP_ALARM_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_AND_MEP_ALARM_ID === params) return "INVALID_MBUS_AND_MEP_ALARM_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_AND_MEP_ALARM_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_MBUS_AND_MEP_ALARM_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_AND_MEP_ALARM_STATUS_TYPE_ID === params) return "INVALID_MBUS_AND_MEP_ALARM_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_MBUS_AND_MEP_ALARM_ID === params) return "DUPLICATE_MBUS_AND_MEP_ALARM_ID";

        //Return codes for Tier Control Configuration
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_CONTROL_CONFIGURATION_NODE_MISSING === params) return "INVALID_TIER_CONTROL_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONSUMPTION_BASED_CONTROL_NODE_MISSING === params) return "INVALID_CONSUMPTION_BASED_CONTROL_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONSUMPTION_BASED_CONTROL_STATUS === params) return "INVALID_CONSUMPTION_BASED_CONTROL_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONSUMPTION_BASED_CONTROL_POWER_THRESHOLD === params) return "INVALID_CONSUMPTION_BASED_CONTROL_POWER_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONSUMPTION_BASED_CONTROL_DURATION_THRESHOLD === params) return "INVALID_CONSUMPTION_BASED_CONTROL_DURATION_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONSUMPTION_BASED_CONTROL_EFFECTIVE_TIER === params) return "INVALID_CONSUMPTION_BASED_CONTROL_EFFECTIVE_TIER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONSUMPTION_BASED_CONTROL_POWER_THRESHOLD_SOURCE === params) return "INVALID_CONSUMPTION_BASED_CONTROL_POWER_THRESHOLD_SOURCE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONSUMPTION_BASED_CONTROL_CHILD_NODE_MISSING === params) return "INVALID_CONSUMPTION_BASED_CONTROL_CHILD_NODE_MISSING";

        //Return codes for Gateway Debug Logs
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGE_LOG_NODE_MISSING === params) return "INVALID_MESSAGE_LOG_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGE_LOG_TYPE_ID_NODE_MISSING === params) return "INVALID_MESSAGE_LOG_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGE_LOG_TYPE_ID === params) return "INVALID_MESSAGE_LOG_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_MESSAGE_LOG_TYPE_ID === params) return "UNSUPPORTED_MESSAGE_LOG_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGE_LOG_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_MESSAGE_LOG_STATUS_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGE_LOG_STATUS_TYPE_ID === params) return "INVALID_MESSAGE_LOG_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGE_LOGS_END_DATE_TIME_NODE_MISSING === params) return "INVALID_MESSAGE_LOGS_END_DATE_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MESSAGE_LOGS_END_DATE_TIME === params) return "INVALID_MESSAGE_LOGS_END_DATE_TIME";

        //Return codes for Data Record Header Configuration
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_RECORD_HEADER_CONFIGURATIONS_NODE_MISSING === params) return "INVALID_DATA_RECORD_HEADER_CONFIGURATIONS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_RECORD_HEADER_CONFIGURATION_NODE_MISSING === params) return "INVALID_DATA_RECORD_HEADER_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INDEX_NODE_MISSING === params) return "INVALID_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INDEX === params) return "INVALID_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENTRY_TYPE_NODE_MISSING === params) return "INVALID_ENTRY_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENTRY_TYPE === params) return "INVALID_ENTRY_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAPPING_DATA_TYPE_NODE_MISSING === params) return "INVALID_MAPPING_DATA_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAPPING_DATA_TYPE === params) return "INVALID_MAPPING_DATA_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_RECORD_HEADER_NODE_MISSING === params) return "INVALID_DATA_RECORD_HEADER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_RECORD_HEADER === params) return "INVALID_DATA_RECORD_HEADER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FLAGGED_NODE_MISSING === params) return "INVALID_FLAGGED_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FLAGGED_VALUE === params) return "INVALID_FLAGGED_VALUE";

        //Return codes for Data Record Header Mapping
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_RECORD_HEADER_MAPPING_NODE_MISSING === params) return "INVALID_DATA_RECORD_HEADER_MAPPING_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTROL_MAPPING_DATA_TYPE === params) return "INVALID_CONTROL_MAPPING_DATA_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_MONITOR_MAPPING_DATA_TYPE === params) return "INVALID_COMMAND_MONITOR_MAPPING_DATA_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIME_STAMP_MAPPING_DATA_TYPE === params) return "INVALID_TIME_STAMP_MAPPING_DATA_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HOUR_LOCATOR_STARTING_BIT_NODE_MISSING === params) return "INVALID_HOUR_LOCATOR_STARTING_BIT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HOUR_LOCATOR_STARTING_BIT === params) return "INVALID_HOUR_LOCATOR_STARTING_BIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HOUR_LOCATOR_BIT_COUNT_NODE_MISSING === params) return "INVALID_HOUR_LOCATOR_BIT_COUNT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HOUR_LOCATOR_BIT_COUNT === params) return "INVALID_HOUR_LOCATOR_BIT_COUNT";
        else if (Constants.ExternalServiceReturnCodes.NON_ZERO_HOUR_LOCATOR_BIT_COUNT === params) return "NON_ZERO_HOUR_LOCATOR_BIT_COUNT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MINUTE_LOCATOR_STARTING_BIT_NODE_MISSING === params) return "INVALID_MINUTE_LOCATOR_STARTING_BIT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MINUTE_LOCATOR_STARTING_BIT === params) return "INVALID_MINUTE_LOCATOR_STARTING_BIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MINUTE_LOCATOR_BIT_COUNT_NODE_MISSING === params) return "INVALID_MINUTE_LOCATOR_BIT_COUNT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MINUTE_LOCATOR_BIT_COUNT === params) return "INVALID_MINUTE_LOCATOR_BIT_COUNT";
        else if (Constants.ExternalServiceReturnCodes.NON_ZERO_MINUTE_LOCATOR_BIT_COUNT === params) return "NON_ZERO_MINUTE_LOCATOR_BIT_COUNT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_RECORD_HEADER_MAPPING_COMMAND === params) return "INVALID_DATA_RECORD_HEADER_MAPPING_COMMAND";

        //Set LP Config - new codes added for v5.0
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_CONFIGURATION_TYPE_ID === params) return "UNSUPPORTED_CONFIGURATION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_DISPLAY_FORMAT_NODE === params) return "UNSUPPORTED_DISPLAY_FORMAT_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_CONFIGURATION_ID === params) return "INVALID_LOAD_PROFILE_CONFIGURATION_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONFIGURATION_TYPE_ID === params) return "INVALID_CONFIGURATION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CHANNEL_SOURCE_NOT_CONFIGURED === params) return "INVALID_CHANNEL_SOURCE_NOT_CONFIGURED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_FORMAT_ID_NODE_MISSING === params) return "INVALID_DISPLAY_FORMAT_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_FORMAT_ID_TEXT_NODE_MISSING === params) return "INVALID_DISPLAY_FORMAT_ID_TEXT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_FORMAT_ID_TEXT === params) return "INVALID_DISPLAY_FORMAT_ID_TEXT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_FORMAT_VALUE_NODE_MISSING === params) return "INVALID_DISPLAY_FORMAT_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_CONFIGURATION_ID_NODE_INCLUDED === params) return "INVALID_LOAD_PROFILE_CONFIGURATION_ID_NODE_INCLUDED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_LIST_OPTIONS_LIST_STATUS === params) return "INVALID_DISPLAY_LIST_OPTIONS_LIST_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_LIST_OPTIONS_TIME_FORMAT === params) return "INVALID_DISPLAY_LIST_OPTIONS_TIME_FORMAT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_LIST_OPTIONS_LIST_NAME_FORMAT_TEXT_NODE_MISSING === params) return "INVALID_DISPLAY_LIST_OPTIONS_LIST_NAME_FORMAT_TEXT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_LIST_OPTIONS_LIST_NAME_FORMAT_TEXT === params) return "INVALID_DISPLAY_LIST_OPTIONS_LIST_NAME_FORMAT_TEXT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_LIST_OPTIONS_DATE_TIME_FORMAT_TEXT_NODE_MISSING === params) return "INVALID_DISPLAY_LIST_OPTIONS_DATE_TIME_FORMAT_TEXT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_LIST_OPTIONS_DATE_TIME_FORMAT_TEXT === params) return "INVALID_DISPLAY_LIST_OPTIONS_DATE_TIME_FORMAT_TEXT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_LIST_OPTIONS_INTERVAL_TIME_FORMAT_TEXT_NODE_MISSING === params) return "INVALID_DISPLAY_LIST_OPTIONS_INTERVAL_TIME_FORMAT_TEXT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_LIST_OPTIONS_INTERVAL_TIME_FORMAT_TEXT === params) return "INVALID_DISPLAY_LIST_OPTIONS_INTERVAL_TIME_FORMAT_TEXT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXTENDED_STATUS_FORMAT_DISPLAY_CHANNEL_NUMBER_NODE_MISSING === params) return "INVALID_EXTENDED_STATUS_FORMAT_DISPLAY_CHANNEL_NUMBER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXTENDED_STATUS_FORMAT_DISPLAY_CHANNEL_NUMBER === params) return "INVALID_EXTENDED_STATUS_FORMAT_DISPLAY_CHANNEL_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXTENDED_STATUS_FORMAT_TEXT_NODE_MISSING === params) return "INVALID_EXTENDED_STATUS_FORMAT_TEXT_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXTENDED_STATUS_FORMAT_TEXT === params) return "INVALID_EXTENDED_STATUS_FORMAT_TEXT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISPLAY_LIST_OPTIONS_CHILD_NODES_MISSING === params) return "INVALID_DISPLAY_LIST_OPTIONS_CHILD_NODES_MISSING";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_CHANNEL_SOURCE_ID === params) return "DUPLICATE_CHANNEL_SOURCE_ID";

        //Read LP Config - new codes added for v5.0
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_CONFIGURATION_READ_TYPE === params) return "INVALID_LOAD_PROFILE_CONFIGURATION_READ_TYPE";

        else if (Constants.ExternalServiceReturnCodes.INVALID_BROADCAST_WRITE_DEVICE_DATA_COMMAND === params) return "INVALID_BROADCAST_WRITE_DEVICE_DATA_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GROUP_ID === params) return "INVALID_GROUP_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SUBGROUP_ID === params) return "INVALID_SUBGROUP_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GROUP_ID_SUBGROUP_ID === params) return "INVALID_GROUP_ID_SUBGROUP_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_NUMBER_OF_GROUPS === params) return "INVALID_NUMBER_OF_GROUPS";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_GROUP_ID_SUBGROUP_ID === params) return "DUPLICATE_GROUP_ID_SUBGROUP_ID";

        else if (Constants.ExternalServiceReturnCodes.INVALID_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_NUMBER_OF_GROUPS === params) return "INVALID_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_NUMBER_OF_GROUPS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_GROUP_ACTION === params) return "INVALID_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_GROUP_ACTION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_GROUP_ID === params) return "INVALID_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_GROUP_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_SUBGROUP_ID === params) return "INVALID_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_SUBGROUP_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_GROUP_ID_SUBGROUP_ID === params) return "INVALID_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_GROUP_ID_SUBGROUP_ID";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_GROUP_ID_SUBGROUP_ID === params) return "DUPLICATE_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_GROUP_ID_SUBGROUP_ID";

        ///////////////////////////////////////////////////
        // Return codes for CONTROL RELAY CONFIGURATION
        ///////////////////////////////////////////////////
        // GENERAL RETURN CODES
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTROL_RELAY_CONFIGURATION_NODE_MISSING === params) return "INVALID_CONTROL_RELAY_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTROL_RELAY_CONFIGURATION_CHILD_NODE_MISSING === params) return "INVALID_CONTROL_RELAY_CONFIGURATION_CHILD_NODE_MISSING";

        // TIERCONFIGURATION
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_CONFIGURATION_CHILD_NODE_MISSING === params) return "INVALID_TIER_CONFIGURATION_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_CONFIGURATION_STATUS === params) return "INVALID_TIER_CONFIGURATION_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIERS_TIER_NODE_MISSING === params) return "INVALID_TIERS_TIER_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_RELAY_STATE_NODE_MISSING === params) return "INVALID_TIER_RELAY_STATE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_RELAY_STATE === params) return "INVALID_TIER_RELAY_STATE";

        // RANDOMIZATIONCONFIGURATION
        else if (Constants.ExternalServiceReturnCodes.INVALID_RANDOMIZATION_CONFIGURATION_CHILD_NODE_MISSING === params) return "INVALID_RANDOMIZATION_CONFIGURATION_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RANDOMIZATION_CONFIGURATION_MAXIMUM_TIME === params) return "INVALID_RANDOMIZATION_CONFIGURATION_MAXIMUM_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_TYPES_COMMAND_TYPE_NODE_MISSING === params) return "INVALID_COMMAND_TYPES_COMMAND_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_TYPE_COMMAND_NODE_MISSING === params) return "INVALID_COMMAND_TYPE_COMMAND_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_TYPE_RANDOMIZATION_STATUS_NODE_MISSING === params) return "INVALID_COMMAND_TYPE_RANDOMIZATION_STATUS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_TYPE_COMMAND === params) return "INVALID_COMMAND_TYPE_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COMMAND_TYPE_RANDOMIZATION_STATUS === params) return "INVALID_COMMAND_TYPE_RANDOMIZATION_STATUS";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_COMMAND_TYPE_COMMAND === params) return "DUPLICATE_COMMAND_TYPE_COMMAND";

        // TIMECONFIGURATION
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIER_CONFIGURATION_STATUS_NODE_MISSING === params) return "INVALID_TIER_CONFIGURATION_STATUS_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIME_CONFIGURATION_CHILD_NODE_MISSING === params) return "INVALID_TIME_CONFIGURATION_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIME_CONFIGURATION_MODE === params) return "INVALID_TIME_CONFIGURATION_MODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIME_CONFIGURATION_MODE_NODE_MISSING === params) return "INVALID_TIME_CONFIGURATION_MODE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_SCHEDULED_OCCURRENCE_INDEX === params) return "DUPLICATE_SCHEDULED_OCCURRENCE_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULED_OCCURRENCE_INDEX === params) return "INVALID_SCHEDULED_OCCURRENCE_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULED_OCCURRENCE_INDEX_MISSING === params) return "INVALID_SCHEDULED_OCCURRENCE_INDEX_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULED_OCCURRENCE_INDEX_NODE_MISSING === params) return "INVALID_SCHEDULED_OCCURRENCE_INDEX_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SCHEDULED_OCCURRENCE_SWITCHES_NODE_MISSING === params) return "INVALID_SCHEDULED_OCCURRENCE_SWITCHES_NODE_MISSING";

        else if (Constants.ExternalServiceReturnCodes.INVALID_TIME_CONFIGURATION_SCHEDULED_OCCURRENCES_NODE_MISSING === params) return "INVALID_TIME_CONFIGURATION_SCHEDULED_OCCURRENCES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCHES_SWITCH_NODE_MISSING === params) return "INVALID_SWITCHES_SWITCH_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCHES_SWITCH_COUNT === params) return "INVALID_SWITCHES_SWITCH_COUNT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_TIME_NODE_MISSING === params) return "INVALID_SWITCH_TIME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_RELAY_STATE_NODE_MISSING === params) return "INVALID_SWITCH_RELAY_STATE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_RELAY_STATE === params) return "INVALID_SWITCH_RELAY_STATE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FIRST_SWITCH_TIME === params) return "INVALID_FIRST_SWITCH_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_TIME === params) return "INVALID_SWITCH_TIME";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_SWITCH_TIME === params) return "DUPLICATE_SWITCH_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SWITCH_TIME_ORDER === params) return "INVALID_SWITCH_TIME_ORDER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIME_CONFIGURATION_RELAY_CLOCK_ERROR_STATE === params) return "INVALID_TIME_CONFIGURATION_RELAY_CLOCK_ERROR_STATE";

        // CONTROLRELAYID
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTROL_RELAY_ID === params) return "INVALID_CONTROL_RELAY_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTROL_RELAY_ID_NODE_MISSING === params) return "INVALID_CONTROL_RELAY_ID_NODE_MISSING";
        ///////////////////////////////////////////////////
        // End of return codes for CONTROL RELAY CONFIGURATION
        ///////////////////////////////////////////////////

        //Return codes for MEMORY CONFIGURATION
        else if (Constants.ExternalServiceReturnCodes.INVALID_MEMORY_TYPE_ID === params) return "INVALID_MEMORY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_MEMORY_TYPE_ID === params) return "DUPLICATE_MEMORY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MEMORY_TYPE_SIZE === params) return "INVALID_MEMORY_TYPE_SIZE";
        else if (Constants.ExternalServiceReturnCodes.INCOMPATIBLE_MEMORY_TYPE_SIZE === params) return "INCOMPATIBLE_MEMORY_TYPE_SIZE";
        else if (Constants.ExternalServiceReturnCodes.UNABLE_TO_VALIDATE_MEMORY_TYPE_SIZE === params) return "UNABLE_TO_VALIDATE_MEMORY_TYPE_SIZE";


        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_ID_NODE_MISSING === params) return "INVALID_FILE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_ID === params) return "INVALID_FILE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_SIZE === params) return "INVALID_FILE_SIZE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INTERPACKET_DELAY_NODE_MISSING === params) return "INVALID_INTERPACKET_DELAY_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INTERPACKET_DELAY === params) return "INVALID_INTERPACKET_DELAY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_NODE_MISSING === params) return "INVALID_FILE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_NAME_NODE_MISSING === params) return "INVALID_FILE_NAME_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_NAME === params) return "INVALID_FILE_NAME";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_FILE_NAME === params) return "DUPLICATE_FILE_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_TYPE_NODE_MISSING === params) return "INVALID_FILE_TYPE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_TYPE === params) return "INVALID_FILE_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_EMPTY === params) return "INVALID_FILE_EMPTY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILES_NODE_MISSING === params) return "INVALID_FILES_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_NAME_VALUE_NODE_MISSING === params) return "INVALID_FILE_NAME_VALUE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_NAME_MATCH_TYPE_ID === params) return "INVALID_FILE_NAME_MATCH_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_FILE_NAME_NODE_MISSING === params) return "INVALID_DATASET_NEXT_FILE_NAME_NODE_MISSING";

        else if (Constants.ExternalServiceReturnCodes.INVALID_HARDWARE_CONFIGURATION_OPTIONS_LOGICAL_RESTRICTION_TYPE_ID === params) return "INVALID_HARDWARE_CONFIGURATION_OPTIONS_LOGICAL_RESTRICTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HARDWARE_CONFIGURATION_OPTION_BIT_OFFSET === params) return "INVALID_HARDWARE_CONFIGURATION_OPTION_BIT_OFFSET";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HARDWARE_CONFIGURATION_OPTION_BIT_LENGTH === params) return "INVALID_HARDWARE_CONFIGURATION_OPTION_BIT_LENGTH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HARDWARE_CONFIGURATION_OPTION_VALUE === params) return "INVALID_HARDWARE_CONFIGURATION_OPTION_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPORTED_HARDWARE_VERSION_RANGE_START === params) return "INVALID_REPORTED_HARDWARE_VERSION_RANGE_START";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPORTED_HARDWARE_VERSION_RANGE_END === params) return "INVALID_REPORTED_HARDWARE_VERSION_RANGE_END";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPORTED_HARDWARE_VERSION_RANGE === params) return "INVALID_REPORTED_HARDWARE_VERSION_RANGE";


        // Batching return codes
        else if (Constants.ExternalServiceReturnCodes.INVALID_IDENTITY === params) return "INVALID_IDENTITY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RELEASE_RESULT_CRITERIA === params) return "INVALID_RELEASE_RESULT_CRITERIA";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RELEASE_EVENT_CRITERIA === params) return "INVALID_RELEASE_EVENT_CRITERIA";

        else if (Constants.ExternalServiceReturnCodes.INVALID_START_RECORDED_FROM_GATEWAY_DATE_TIME === params) return "INVALID_START_RECORDED_FROM_GATEWAY_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_END_RECORDED_FROM_GATEWAY_DATE_TIME === params) return "INVALID_END_RECORDED_FROM_GATEWAY_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RECORDED_FROM_GATEWAY_DATE_TIME_RANGE === params) return "INVALID_RECORDED_FROM_GATEWAY_DATE_TIME_RANGE";

        else if (Constants.ExternalServiceReturnCodes.INVALID_USE_ENCRYPTION === params) return "INVALID_USE_ENCRYPTION";

        //Import Key return codes
        else if (Constants.ExternalServiceReturnCodes.INVALID_IMPORT_DATA_TYPE_ID === params) return "INVALID_IMPORT_DATA_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_IMPORT_DATA_TYPE_ID_NODE_MISSING === params) return "INVALID_IMPORT_DATA_TYPE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.AUTO_APPLY_NOT_SUPPORTED === params) return "AUTO_APPLY_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_AUTO_APPLY === params) return "INVALID_AUTO_APPLY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_EMPTY === params) return "INVALID_DATA_EMPTY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATA_ENCRYPTION_FAILURE === params) return "INVALID_DATA_ENCRYPTION_FAILURE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FEATURE_NODE_MISSING === params) return "INVALID_FEATURE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FEATURE_ID_NODE_MISSING === params) return "INVALID_FEATURE_ID_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FEATURE_ID === params) return "INVALID_FEATURE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FEATURE_ACTIVATED_NODE_MISSING === params) return "INVALID_FEATURE_ACTIVATED_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FEATURE_ACTIVATED === params) return "INVALID_FEATURE_ACTIVATED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_FEATURE_ACTIVATION_COMMAND === params) return "INVALID_GATEWAY_FEATURE_ACTIVATION_COMMAND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_FEATURE_ACTIVATION_KEY_NOT_FOUND === params) return "INVALID_GATEWAY_FEATURE_ACTIVATION_KEY_NOT_FOUND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_FEATURE_ACTIVATION_KEY === params) return "INVALID_GATEWAY_FEATURE_ACTIVATION_KEY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FEATURE_ACTIVATION_FEATURE_CHILD_NODE_MISSING === params) return "INVALID_FEATURE_ACTIVATION_FEATURE_CHILD_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FEATURE_ACTIVATION_NODE_MISSING === params) return "INVALID_FEATURE_ACTIVATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FEATURE_ACTIVATION_FEATURE_NODE_MISSING === params) return "INVALID_FEATURE_ACTIVATION_FEATURE_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_FEATURE_ACTIVATION_ID === params) return "INVALID_GATEWAY_FEATURE_ACTIVATION_ID";

        // Set Gateway FTP Configuration
        else if (Constants.ExternalServiceReturnCodes.INVALID_FTP_CONFIGURATION_NODE_MISSING === params) return "INVALID_FTP_CONFIGURATION_NODE_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PORT_NODE_MISSING === params) return "INVALID_PORT_NODE_MISSING";

        //System Manager Key Management APIs
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_ASYMMETRIC_KEY_NAME === params) return "DUPLICATE_ASYMMETRIC_KEY_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ASYMMETRIC_KEY_NAME === params) return "INVALID_ASYMMETRIC_KEY_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ASYMMETRIC_KEY_TYPE_ID === params) return "INVALID_ASYMMETRIC_KEY_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PUBLIC_KEY === params) return "INVALID_PUBLIC_KEY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TRUSTED_KEY_VALUE === params) return "INVALID_TRUSTED_KEY_VALUE";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_TRUSTED_KEY_VALUE === params) return "DUPLICATE_TRUSTED_KEY_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TRUSTED_KEY_SOURCE_TYPE_ID === params) return "INVALID_TRUSTED_KEY_SOURCE_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TRUSTED_KEY_NAME === params) return "INVALID_TRUSTED_KEY_NAME";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_TRUSTED_KEY_NAME === params) return "DUPLICATE_TRUSTED_KEY_NAME";

        //System Manager Export
        else if (Constants.ExternalServiceReturnCodes.INVALID_ORIGINATION_PUBLIC_KEY === params) return "INVALID_ORIGINATION_PUBLIC_KEY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DESTINATION_PUBLIC_KEY === params) return "INVALID_DESTINATION_PUBLIC_KEY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INCLUDE_SUMMARY_DETAIL === params) return "INVALID_INCLUDE_SUMMARY_DETAIL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_EXPORT_DATA_TYPE_ID === params) return "INVALID_EXPORT_DATA_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_EXPORT_CRITERIA === params) return "INVALID_GATEWAY_EXPORT_CRITERIA";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DEVICE_EXPORT_CRITERIA === params) return "INVALID_DEVICE_EXPORT_CRITERIA";

        //Import and System Manager Export
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_PLATFORM === params) return "UNSUPPORTED_PLATFORM";

        //System Manager Retrieve Result List
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_RESULT_SAVED_IN_SYSTEM_DATE_TIME === params) return "INVALID_DATASET_NEXT_RESULT_SAVED_IN_SYSTEM_DATE_TIME";

        // General return codes added in V5.0
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_FILE_TYPE === params) return "UNSUPPORTED_FILE_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_TYPE_ID === params) return "INVALID_FILE_TYPE_ID";

        //Gateway WAN Configuration
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_DATA_SIGNALS_STATUS === params) return "INVALID_GATEWAY_WAN_DATA_SIGNALS_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_INTERFACE_CLASS === params) return "INVALID_GATEWAY_WAN_INTERFACE_CLASS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_SUBNET_PREFIX_LENGTH === params) return "INVALID_GATEWAY_WAN_SUBNET_PREFIX_LENGTH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_DEFAULT_GATEWAY_IPV4_ADDRESS === params) return "INVALID_GATEWAY_WAN_DEFAULT_GATEWAY_IPV4_ADDRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_INTERFACE_NAME === params) return "INVALID_GATEWAY_WAN_INTERFACE_NAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_DEVICE_PATH === params) return "INVALID_GATEWAY_WAN_DEVICE_PATH";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_SUB_PRIORITY === params) return "INVALID_GATEWAY_WAN_SUB_PRIORITY";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_GATEWAY_WAN_CONFIGURATION_PRIORITY_SUB_PRIORITY === params) return "DUPLICATE_GATEWAY_WAN_CONFIGURATION_PRIORITY_SUB_PRIORITY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_SIM_METHOD === params) return "INVALID_GATEWAY_WAN_SIM_METHOD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_ANTENNA_METHOD === params) return "INVALID_GATEWAY_WAN_ANTENNA_METHOD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_RSSI_THRESHOLD === params) return "INVALID_GATEWAY_WAN_RSSI_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_OTA_UPDATE_METHOD === params) return "INVALID_GATEWAY_WAN_OTA_UPDATE_METHOD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_UPDATE_FILENAME === params) return "INVALID_GATEWAY_WAN_UPDATE_FILENAME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_UPDATE_ACTIVATION_PHONE_NUMBER === params) return "INVALID_GATEWAY_WAN_UPDATE_ACTIVATION_PHONE_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_UPDATE_PRL_PHONE_NUMBER === params) return "INVALID_GATEWAY_WAN_UPDATE_PRL_PHONE_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_UPDATE_ACTION === params) return "INVALID_GATEWAY_WAN_UPDATE_ACTION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_UPDATE_PRL_INTERVAL === params) return "INVALID_GATEWAY_WAN_UPDATE_PRL_INTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_RECONNECTION_INTERVAL === params) return "INVALID_GATEWAY_WAN_RECONNECTION_INTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_WAN_MODEM_POWER_UP_DELAY === params) return "INVALID_GATEWAY_WAN_MODEM_POWER_UP_DELAY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DNS_CONFIGURATION_OPTION_INDEX === params) return "INVALID_DNS_CONFIGURATION_OPTION_INDEX";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_DNS_CONFIGURATION_OPTION_INDEX === params) return "DUPLICATE_DNS_CONFIGURATION_OPTION_INDEX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DNS_CONFIGURATION_OPTION_STATUS === params) return "INVALID_DNS_CONFIGURATION_OPTION_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DNS_CONFIGURATION_SUFFIX === params) return "INVALID_DNS_CONFIGURATION_SUFFIX";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DNS_CONFIGURATION_TTL === params) return "INVALID_DNS_CONFIGURATION_TTL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DNS_CONFIGURATION_PREFERRED_SERVER_IP_ADDRESS === params) return "INVALID_DNS_CONFIGURATION_PREFERRED_SERVER_IP_ADDRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DNS_CONFIGURATION_ALTERNATE_SERVER_IP_ADDRESS === params) return "INVALID_DNS_CONFIGURATION_ALTERNATE_SERVER_IP_ADDRESS";

        else if (Constants.ExternalServiceReturnCodes.BATCH_CREATED_UNABLE_TO_RETRIEVE_DETAILS === params) return "BATCH_CREATED_UNABLE_TO_RETRIEVE_DETAILS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOCAL_METER_OPTIONS === params) return "INVALID_LOCAL_METER_OPTIONS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DELETE_LOCAL_METER === params) return "INVALID_DELETE_LOCAL_METER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ADD_LOCAL_METER === params) return "INVALID_ADD_LOCAL_METER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_MANUFACTURING_INFORMATION_MISSING === params) return "INVALID_METER_MANUFACTURING_INFORMATION_MISSING";
        else if (Constants.ExternalServiceReturnCodes.INVALID_GATEWAY_MANUFACTURING_INFORMATION_MISSING === params) return "INVALID_GATEWAY_MANUFACTURING_INFORMATION_MISSING";

        else if (Constants.ExternalServiceReturnCodes.INVALID_OPTION === params) return "INVALID_OPTION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OPTIONS_LOGICAL_RESTRICTION_TYPE_ID === params) return "INVALID_OPTIONS_LOGICAL_RESTRICTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESULT_TYPE_OPTION === params) return "INVALID_RESULT_TYPE_OPTION";

        else if (Constants.ExternalServiceReturnCodes.INVALID_RESOURCE_FOR_FIRMWARE_VERSION === params) return "INVALID_RESOURCE_FOR_FIRMWARE_VERSION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_KEY_DATA === params) return "INVALID_KEY_DATA";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESOURCE_FOR_ENTITY_TYPE === params) return "INVALID_RESOURCE_FOR_ENTITY_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROPERTY_FOR_FIRMWARE_VERSION === params) return "INVALID_PROPERTY_FOR_FIRMWARE_VERSION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ACTION_FOR_PROPERTY === params) return "INVALID_ACTION_FOR_PROPERTY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROPERTY_VALUE === params) return "INVALID_PROPERTY_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MASK_VALUE === params) return "INVALID_MASK_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SYSSW_PRIVS === params) return "INVALID_SYSSW_PRIVS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_COS_APP_PRIVS === params) return "INVALID_COS_APP_PRIVS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_BITMASK_NOT_PERMITTED === params) return "INVALID_BITMASK_NOT_PERMITTED";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_PROPERTY === params) return "DUPLICATE_PROPERTY";

        //Phase Rotation return codes
        else if (Constants.ExternalServiceReturnCodes.INVALID_READ_OPTIONS === params) return "INVALID_READ_OPTIONS";

        else if (Constants.ExternalServiceReturnCodes.INVALID_INVALID_PLC_PASSWORD_THRESHOLD === params) return "INVALID_INVALID_PLC_PASSWORD_THRESHOLD";

        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_THRESHOLDS_CONFIGURATION === params) return "INVALID_DISCONNECT_THRESHOLDS_CONFIGURATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENABLE === params) return "INVALID_ENABLE";
        else if (Constants.ExternalServiceReturnCodes.DISCONNECT_CONTROL_TYPE_NODE_NOT_SUPPORTED === params) return "DISCONNECT_CONTROL_TYPE_NODE_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_CONTROL_TYPE === params) return "INVALID_DISCONNECT_CONTROL_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_TRIP_VALUE_SELECT === params) return "INVALID_DISCONNECT_TRIP_VALUE_SELECT";
        else if (Constants.ExternalServiceReturnCodes.CURRENT_CONTROL_TYPE_NODE_NOT_SUPPORTED === params) return "CURRENT_CONTROL_TYPE_NODE_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CURRENT_CONTROL_TYPE === params) return "INVALID_CURRENT_CONTROL_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DISCONNECT_THRESHOLDS_CONFIGURATION_PRIMARY === params) return "INVALID_DISCONNECT_THRESHOLDS_CONFIGURATION_PRIMARY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIMARY_POWER_THRESHOLD === params) return "INVALID_PRIMARY_POWER_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.PRIMARY_CURRENT_THRESHOLD_NODE_NOT_SUPPORTED === params) return "PRIMARY_CURRENT_THRESHOLD_NODE_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIMARY_CURRENT_THRESHOLD === params) return "INVALID_PRIMARY_CURRENT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIMARY_TIME_THRESHOLD === params) return "INVALID_PRIMARY_TIME_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_AVERAGE_POWER_CONFIGURATION_AVERAGE_POWER_STATUS === params) return "INVALID_AVERAGE_POWER_CONFIGURATION_AVERAGE_POWER_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_AVERAGE_POWER_CONFIGURATION_SUBINTERVAL === params) return "INVALID_AVERAGE_POWER_CONFIGURATION_SUBINTERVAL";
        else if (Constants.ExternalServiceReturnCodes.INVALID_AVERAGE_POWER_CONFIGURATION_INTERVAL_MULTIPLIER === params) return "INVALID_AVERAGE_POWER_CONFIGURATION_INTERVAL_MULTIPLIER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_AVERAGE_POWER_CONFIGURATION_DISCONNECT_THRESHOLD === params) return "INVALID_AVERAGE_POWER_CONFIGURATION_DISCONNECT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.AVERAGE_POWER_CONFIGURATIONS_NOT_SUPPORTED === params) return "AVERAGE_POWER_CONFIGURATIONS_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_AVERAGE_POWER_CONFIGURATION_TYPE_ID === params) return "INVALID_AVERAGE_POWER_CONFIGURATION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_AVERAGE_POWER_CONFIGURATION_TYPE_ID === params) return "UNSUPPORTED_AVERAGE_POWER_CONFIGURATION_TYPE_ID";

        //------added in V5.3----------
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_GRACE_PERIOD_NODE === params) return "UNSUPPORTED_GRACE_PERIOD_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIME_AFTER === params) return "INVALID_TIME_AFTER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIME_BEFORE === params) return "INVALID_TIME_BEFORE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_WEEKEND === params) return "INVALID_WEEKEND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SPECIAL_SCHEDULE_0 === params) return "INVALID_SPECIAL_SCHEDULE_0";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SPECIAL_SCHEDULE_1 === params) return "INVALID_SPECIAL_SCHEDULE_1";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TIME_BEFORE_AND_TIME_AFTER_COMBINATION === params) return "INVALID_TIME_BEFORE_AND_TIME_AFTER_COMBINATION";

        else if (Constants.ExternalServiceReturnCodes.INVALID_LIST_TYPE_ID === params) return "INVALID_LIST_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.LIST_TYPE_ID_NOT_SUPPORTED === params) return "LIST_TYPE_ID_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.SECONDS_TO_DISPLAY_NODE_NOT_SUPPORTED === params) return "SECONDS_TO_DISPLAY_NODE_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.LIST_TIMEOUT_NODE_NOT_SUPPORTED === params) return "LIST_TIMEOUT_NODE_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LIST_TIMEOUT === params) return "INVALID_LIST_TIMEOUT";
        else if (Constants.ExternalServiceReturnCodes.ENABLE_LIST_NODE_NOT_SUPPORTED === params) return "ENABLE_LIST_NODE_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENABLE_LIST === params) return "INVALID_ENABLE_LIST";
        else if (Constants.ExternalServiceReturnCodes.NO_DATA_TO_READ === params) return "NO_DATA_TO_READ";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_LIST_TYPE_ID === params) return "DUPLICATE_LIST_TYPE_ID";

        else if (Constants.ExternalServiceReturnCodes.INVALID_TAMPER_CONFIGURATION_DURATION === params) return "INVALID_TAMPER_CONFIGURATION_DURATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_TAMPER_CONFIGURATION_POWER_QUALITY_DURATION === params) return "INVALID_TAMPER_CONFIGURATION_POWER_QUALITY_DURATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_QUALITY_QUALIFICATION_EVENT_ID === params) return "INVALID_POWER_QUALITY_QUALIFICATION_EVENT_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_QUALITY_QUALIFICATION_EVENT_STATUS === params) return "INVALID_POWER_QUALITY_QUALIFICATION_EVENT_STATUS";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_POWER_QUALITY_QUALIFICATION_EVENT_ID === params) return "DUPLICATE_POWER_QUALITY_QUALIFICATION_EVENT_ID";

        else if (Constants.ExternalServiceReturnCodes.INVALID_KEY_TYPE === params) return "INVALID_KEY_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_KEY_NEW_VALUE === params) return "INVALID_KEY_NEW_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HAN_INTERFACE_STATUS === params) return "INVALID_HAN_INTERFACE_STATUS";

        else if (Constants.ExternalServiceReturnCodes.INVALID_RMS_VOLTAGE_CONTINUOUS_CYCLES === params) return "INVALID_RMS_VOLTAGE_CONTINUOUS_CYCLES";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RMS_VOLTAGE_AVERAGING_INTERVAL === params) return "INVALID_RMS_VOLTAGE_AVERAGING_INTERVAL";

        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_HARDWARE_CONFIGURATION === params) return "UNSUPPORTED_HARDWARE_CONFIGURATION";

        //------added in V5.4----------
        else if (Constants.ExternalServiceReturnCodes.INVALID_PLC_SECURITY_STATUS === params) return "INVALID_PLC_SECURITY_STATUS";
        else if (Constants.ExternalServiceReturnCodes.MANUFACTURER_DATA_NOT_FOUND === params) return "MANUFACTURER_DATA_NOT_FOUND";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SECURITY_MODE === params) return "INVALID_SECURITY_MODE";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_SECURITY_MODE === params) return "UNSUPPORTED_SECURITY_MODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LOAD_PROFILE_COLLECTION_STATUS_TYPE_ID === params) return "INVALID_LOAD_PROFILE_COLLECTION_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_LOAD_PROFILE_COLLECTION_STATUS_TYPE_ID_NODE === params) return "UNSUPPORTED_LOAD_PROFILE_COLLECTION_STATUS_TYPE_ID_NODE";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_IGNORE_FEEDBACK_STATUS_TYPE_ID_NODE === params) return "UNSUPPORTED_IGNORE_FEEDBACK_STATUS_TYPE_ID_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_IGNORE_FEEDBACK_STATUS_TYPE_ID === params) return "INVALID_IGNORE_FEEDBACK_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_USE_DISCONNECT_SENSOR_FOR_FEEDBACK_NODE === params) return "UNSUPPORTED_USE_DISCONNECT_SENSOR_FOR_FEEDBACK_NODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_USE_DISCONNECT_SENSOR_FOR_FEEDBACK === params) return "INVALID_USE_DISCONNECT_SENSOR_FOR_FEEDBACK";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REMOTE_FILE_MANAGEMENT_ENABLE === params) return "INVALID_REMOTE_FILE_MANAGEMENT_ENABLE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REMOTE_FILE_MANAGEMENT_WAN_SELECTION_TYPE_ID === params) return "INVALID_REMOTE_FILE_MANAGEMENT_WAN_SELECTION_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION_TYPE === params) return "INVALID_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENERGY_ACCUMULATOR_CALCULATION_METHOD === params) return "INVALID_ENERGY_ACCUMULATOR_CALCULATION_METHOD";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_ENERGY_ACCUMULATOR_CALCULATION_METHOD === params) return "UNSUPPORTED_ENERGY_ACCUMULATOR_CALCULATION_METHOD";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_READ_OPTIONS === params) return "DUPLICATE_READ_OPTIONS";


        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_POINT_TO_POINT_SERVER_TO_GATEWAY_COMMUNICATION_IP_ADDRESS === params) return "DUPLICATE_POINT_TO_POINT_SERVER_TO_GATEWAY_COMMUNICATION_IP_ADDRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_POINT_TO_POINT_SERVER_TO_GATEWAY_COMMUNICATION_IP_ADDRESS === params) return "INVALID_POINT_TO_POINT_SERVER_TO_GATEWAY_COMMUNICATION_IP_ADDRESS";

        else if (Constants.ExternalServiceReturnCodes.INVALID_RMS_CURRENT_AVERAGING_INTERVAL === params) return "INVALID_RMS_CURRENT_AVERAGING_INTERVAL";

        else if (Constants.ExternalServiceReturnCodes.INVALID_ALARM_ID === params) return "INVALID_ALARM_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ALARM_CLEAR_MODE === params) return "INVALID_ALARM_CLEAR_MODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ALARM_ID_NOT_USER_CLEARABLE === params) return "INVALID_ALARM_ID_NOT_USER_CLEARABLE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ALARM_STATUS_TYPE_ID === params) return "INVALID_ALARM_STATUS_TYPE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_ALARM_COMMUNICATE_ON_ALARM === params) return "INVALID_METER_ALARM_COMMUNICATE_ON_ALARM";

        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_ITEM_VALUE === params) return "INVALID_METER_DISPLAY_ITEM_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONFIGURATION_START_DISPLAY_DATE_TIME === params) return "INVALID_CONFIGURATION_START_DISPLAY_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONFIGURATION_END_DISPLAY_DATE_TIME === params) return "INVALID_CONFIGURATION_END_DISPLAY_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONFIGURATION_ALLOW_MESSAGE_OVERRIDE === params) return "INVALID_CONFIGURATION_ALLOW_MESSAGE_OVERRIDE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONFIGURATION_INCLUDE_MESSAGE_ON_SCROLLING_LIST === params) return "INVALID_CONFIGURATION_INCLUDE_MESSAGE_ON_SCROLLING_LIST";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_SOURCE_ID === params) return "DUPLICATE_SOURCE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SOURCE_VALUE === params) return "INVALID_SOURCE_VALUE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_METER_DISPLAY_SOURCE_NOT_SUPPORTED === params) return "INVALID_METER_DISPLAY_SOURCE_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FIELDS_BEFORE_DECIMAL_POINT_NOT_SUPPORTED === params) return "INVALID_FIELDS_BEFORE_DECIMAL_POINT_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_FIELDS_AFTER_DECIMAL_POINT_NOT_SUPPORTED === params) return "INVALID_FIELDS_AFTER_DECIMAL_POINT_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SUPPRESS_ZEROS_NOT_SUPPORTED === params) return "INVALID_SUPPRESS_ZEROS_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONFIGURATION_NODE_NOT_SUPPORTED === params) return "INVALID_CONFIGURATION_NODE_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SOURCES_CONFIGURATION_NOT_SUPPORTED === params) return "INVALID_SOURCES_CONFIGURATION_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_ENABLE_ALL_SEGMENTS_LIT_NOT_SUPPORTED === params) return "INVALID_ENABLE_ALL_SEGMENTS_LIT_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LIMIT === params) return "INVALID_LIMIT";

        //------added in 6.0------
        else if (Constants.ExternalServiceReturnCodes.INVALID_SYSTEM_SOFTWARE_ADDRESS === params) return "INVALID_SYSTEM_SOFTWARE_ADDRESS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SYSTEM_SOFTWARE_PORT === params) return "INVALID_SYSTEM_SOFTWARE_PORT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PING_PORT === params) return "INVALID_PING_PORT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_HANDSHAKE_TIMEOUT === params) return "INVALID_HANDSHAKE_TIMEOUT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_INACTIVITY_TIMEOUT === params) return "INVALID_INACTIVITY_TIMEOUT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONNECT_DELAY === params) return "INVALID_CONNECT_DELAY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAX_CONNECT_ATTEMPTS === params) return "INVALID_MAX_CONNECT_ATTEMPTS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAX_NO_CONNECT_TIME === params) return "INVALID_MAX_NO_CONNECT_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_SESSION_LIFE === params) return "INVALID_SESSION_LIFE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_DAILY_INCOMING_CONNECT_LIMIT === params) return "INVALID_DAILY_INCOMING_CONNECT_LIMIT";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PING_RETRY_DELAY === params) return "INVALID_PING_RETRY_DELAY";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PING_RETRY_ATTEMPTS === params) return "INVALID_PING_RETRY_ATTEMPTS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_LAST_GASP_TELEPHONE_NUMBER === params) return "INVALID_LAST_GASP_TELEPHONE_NUMBER";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PLC_SECURITY_MODE === params) return "INVALID_PLC_SECURITY_MODE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PLC_SECURITY_MODE_NOT_SUPPORTED === params) return "INVALID_PLC_SECURITY_MODE_NOT_SUPPORTED";
        else if (Constants.ExternalServiceReturnCodes.VERSION_DIMENSIONS_UNKNOWN === params) return "VERSION_DIMENSIONS_UNKNOWN";

        else if (Constants.ExternalServiceReturnCodes.INVALID_ALLOW_DELETE_WITH_RESULTS === params) return "INVALID_ALLOW_DELETE_WITH_RESULTS";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_METER_TYPE === params) return "UNSUPPORTED_METER_TYPE";

        else if (Constants.ExternalServiceReturnCodes.INVALID_OPTICAL_FAILED_AUTHENTICATION_LOCKOUT_THRESHOLD === params) return "INVALID_OPTICAL_FAILED_AUTHENTICATION_LOCKOUT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OPTICAL_FAILED_AUTHENTICATION_LOCKOUT_DURATION === params) return "INVALID_OPTICAL_FAILED_AUTHENTICATION_LOCKOUT_DURATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REMOTE_FAILED_AUTHENTICATION_LOCKOUT_THRESHOLD === params) return "INVALID_REMOTE_FAILED_AUTHENTICATION_LOCKOUT_THRESHOLD";
        else if (Constants.ExternalServiceReturnCodes.INVALID_REMOTE_FAILED_AUTHENTICATION_LOCKOUT_DURATION === params) return "INVALID_REMOTE_FAILED_AUTHENTICATION_LOCKOUT_DURATION";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_NODE_INCLUDED === params) return "UNSUPPORTED_NODE_INCLUDED";

        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_KEY_TYPE === params) return "UNSUPPORTED_KEY_TYPE";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OLD_KEY_EXPIRATION_DATE_TIME === params) return "INVALID_OLD_KEY_EXPIRATION_DATE_TIME";
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTROL_RELAY_INDEX === params) return "INVALID_CONTROL_RELAY_INDEX";
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_CONTROL_RELAY_INDEX === params) return "DUPLICATE_CONTROL_RELAY_INDEX";
        else if (Constants.ExternalServiceReturnCodes.NO_ACTION_TO_PERFORM === params) return "NO_ACTION_TO_PERFORM";
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_RESOURCE_ID === params) return "UNSUPPORTED_RESOURCE_ID";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESOURCE_ADDED_EVENT_STATUS === params) return "INVALID_RESOURCE_ADDED_EVENT_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_RESOURCE_DELETED_EVENT_STATUS === params) return "INVALID_RESOURCE_DELETED_EVENT_STATUS";
        else if (Constants.ExternalServiceReturnCodes.INVALID_PROPERTY_MODIFIED_EVENT_STATUS === params) return "INVALID_PROPERTY_MODIFIED_EVENT_STATUS";

        else if (Constants.ExternalServiceReturnCodes.INVALID_KEY_FORCE_EXPIRATION === params) return "INVALID_KEY_FORCE_EXPIRATION";
        else if (Constants.ExternalServiceReturnCodes.INVALID_OLD_KEY_NOT_EXPIRED === params) return "INVALID_OLD_KEY_NOT_EXPIRED";


        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////
        /*        [Obsolete("v4 - no replacement")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_ALARM_NODE_MISSING === params) return "INVALID_MBUS_ALARM_NODE_MISSING";

        /*        [Obsolete("v4 - no replacement")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_ALARM_ID_NODE_MISSING === params) return "INVALID_MBUS_ALARM_ID_NODE_MISSING";

        /*        [Obsolete("v4 - no replacement")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_ALARM_ID === params) return "INVALID_MBUS_ALARM_ID";

        /*        [Obsolete("v4 - no replacement")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_ALARM_STATUS_TYPE_ID_NODE_MISSING === params) return "INVALID_MBUS_ALARM_STATUS_TYPE_ID_NODE_MISSING";

        /*        [Obsolete("v4 - no replacement")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_MBUS_ALARM_STATUS_TYPE_ID === params) return "INVALID_MBUS_ALARM_STATUS_TYPE_ID";

        /*        [Obsolete("v4 - no replacement")]*/
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_MBUS_ALARM_ID === params) return "DUPLICATE_MBUS_ALARM_ID";

        /*        [Obsolete("v4 - no replacement, no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_STATUS_CHANGE === params) return "INVALID_STATUS_CHANGE";

        /*        [Obsolete("v4 - no replacement, no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_HIGH_PRIORITY_CONNECTION_REQUEST === params) return "INVALID_HIGH_PRIORITY_CONNECTION_REQUEST";

        /*        [Obsolete("v4 - no replacement, no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_GATEWAY_STATUS_TYPE_ID === params) return "UNSUPPORTED_GATEWAY_STATUS_TYPE_ID";

        /*        [Obsolete("v4 - no replacement, no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_UPDATE_GATEWAY_FIRMWARE_COMMAND === params) return "INVALID_UPDATE_GATEWAY_FIRMWARE_COMMAND";

        /*        [Obsolete("v4 - no replacement, no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_UPDATE_METER_FIRMWARE_COMMAND === params) return "INVALID_UPDATE_METER_FIRMWARE_COMMAND";

        /*        [Obsolete("v4 - no replacement, no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_DATASET_NEXT_COMMAND_HISTORY_ID === params) return "INVALID_DATASET_NEXT_COMMAND_HISTORY_ID";

        /*        [Obsolete("v5.1 - use INVALID_ATTRIBUTE_VALUE_NODE_MISSING")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_PARAMETER_VALUE_NODE_MISSING === params) return "INVALID_ATTRIBUTE_PARAMETER_VALUE_NODE_MISSING";

        /*        [Obsolete("v5.1 - use INVALID_ATTRIBUTE_ID_NODE_MISSING")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_ATTRIBUTE_PARAMETER_ID_NODE_MISSING === params) return "INVALID_ATTRIBUTE_PARAMETER_ID_NODE_MISSING";

        /*        [Obsolete("v5.1 - use INVALID_FILE_EMPTY")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_FILE_EMTPY === params) return "INVALID_FILE_EMTPY";

        /*        [Obsolete("v5.2 - no replacement, no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.TYPE_MISMATCH === params) return "TYPE_MISMATCH";

        /*        [Obsolete("v5.2 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_METER_DISPLAY_ID_TEXT === params) return "DUPLICATE_METER_DISPLAY_ID_TEXT";

        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_POWER_LEVEL_NODE_MISSING === params) return "INVALID_MAXIMUM_POWER_LEVEL_NODE_MISSING";
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_POWER_TYPE_ID === params) return "INVALID_MAXIMUM_POWER_TYPE_ID";
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_MAXIMUM_POWER_TYPE_ID === params) return "UNSUPPORTED_MAXIMUM_POWER_TYPE_ID";
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_MAXIMUM_POWER_LEVEL_DURATION_MISMATCH === params) return "INVALID_MAXIMUM_POWER_LEVEL_DURATION_MISMATCH";
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_POWER_CONFIGURATIONS_NODE_MISSING === params) return "INVALID_POWER_CONFIGURATIONS_NODE_MISSING";
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PREPAY_MAXIMUM_POWER_LEVEL_DURATION === params) return "INVALID_PREPAY_MAXIMUM_POWER_LEVEL_DURATION";
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PREPAY_MAXIMUM_POWER_LEVEL_DURATION_NODE_MISSING === params) return "INVALID_PREPAY_MAXIMUM_POWER_LEVEL_DURATION_NODE_MISSING";
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PREPAY_MAXIMUM_POWER_NODE_MISSING === params) return "INVALID_PREPAY_MAXIMUM_POWER_NODE_MISSING";
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PREPAY_POWER_CONFIGURATION_NODE_MISSING === params) return "INVALID_PREPAY_POWER_CONFIGURATION_NODE_MISSING";
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIMARY_MAXIMUM_POWER_LEVEL_DURATION === params) return "INVALID_PRIMARY_MAXIMUM_POWER_LEVEL_DURATION";
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIMARY_MAXIMUM_POWER_LEVEL_DURATION_NODE_MISSING === params) return "INVALID_PRIMARY_MAXIMUM_POWER_LEVEL_DURATION_NODE_MISSING";
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIMARY_MAXIMUM_POWER_NODE_MISSING === params) return "INVALID_PRIMARY_MAXIMUM_POWER_NODE_MISSING";
        /*        [Obsolete("v5.2.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PRIMARY_POWER_CONFIGURATION_NODE_MISSING === params) return "INVALID_PRIMARY_POWER_CONFIGURATION_NODE_MISSING";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_CONTROLLER_CONFIGURATION_FILE_TYPE === params) return "INVALID_CONTROLLER_CONFIGURATION_FILE_TYPE";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.CONTROLLER_CONFIGURATION_FILE_XSD_VALIDATION_FAILURE === params) return "CONTROLLER_CONFIGURATION_FILE_XSD_VALIDATION_FAILURE";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.DUPLICATE_CONTROLLER_CONFIGURATION_FILE_TYPE === params) return "DUPLICATE_CONTROLLER_CONFIGURATION_FILE_TYPE";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_CONTROLLER_CONFIGURATION_VERSION === params) return "UNSUPPORTED_CONTROLLER_CONFIGURATION_VERSION";

        /*        [Obsolete("v5.4.000 - no replacement, no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_SECURITY_KEY === params) return "INVALID_SECURITY_KEY";
        /*        [Obsolete("v5.4.000 - The parameters associated with updating the solution setting name were deprecated, so error codes associated with using those parameters are being deprecated too.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_SOLUTION_SETTING_NAME === params) return "INVALID_SOLUTION_SETTING_NAME";
        /*        [Obsolete("v5.4.000 - The parameters associated with updating the solution setting name were deprecated, so error codes associated with using those parameters are being deprecated too.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_SOLUTION_SETTING_NAME_DUPLICATE === params) return "INVALID_SOLUTION_SETTING_NAME_DUPLICATE";
        /*        [Obsolete("v5.4.000 - Including key information when creating a device is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_LONTALK_KEY === params) return "INVALID_LONTALK_KEY";
        /*        [Obsolete("v5.4.000 - Including login information when creating a gateway is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PPP_USERNAME_BLANK === params) return "INVALID_PPP_USERNAME_BLANK";
        /*        [Obsolete("v5.4.000 - Including login information when creating a gateway is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PPP_PASSWORD_BLANK === params) return "INVALID_PPP_PASSWORD_BLANK";
        /*        [Obsolete("v5.4.000 - Including login information when creating a gateway is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PPP_PASSWORD_NODE_MISSING === params) return "INVALID_PPP_PASSWORD_NODE_MISSING";
        /*        [Obsolete("v5.4.000 - Including login information when creating a gateway is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PPP_USERNAME_NODE_MISSING === params) return "INVALID_PPP_USERNAME_NODE_MISSING";
        /*        [Obsolete("v5.4.000 - Including login information when creating a gateway is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_SSH_FINGERPRINT === params) return "INVALID_SSH_FINGERPRINT";
        /*        [Obsolete("v5.4.000 - Including login information when creating a gateway a device is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_PPP_USERNAME_AND_PASSWORD_MISSING === params) return "INVALID_PPP_USERNAME_AND_PASSWORD_MISSING";
        /*        [Obsolete("v5.4.000 - Including login information when replacing a gateway is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_SERVER_TO_GATEWAY_COMMUNICATION_CHILD_NODE_MISSING === params) return "INVALID_SERVER_TO_GATEWAY_COMMUNICATION_CHILD_NODE_MISSING";
        /*        [Obsolete("v5.4.000 - Including login information when replacing a gateway is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_PPP_USERNAME_AND_PPP_PASSWORD_MISSING === params) return "INVALID_REPLACEMENT_GATEWAY_PPP_USERNAME_AND_PPP_PASSWORD_MISSING";
        /*        [Obsolete("v5.4.000 - Including login information when replacing a gateway is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_NEURON_ID_MISSING === params) return "INVALID_REPLACEMENT_GATEWAY_NEURON_ID_MISSING";
        /*        [Obsolete("v5.4.000 - Including login information when replacing a gateway is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_PPP_USER_NAME === params) return "INVALID_REPLACEMENT_GATEWAY_PPP_USER_NAME";
        /*        [Obsolete("v5.4.000 - Including login information when replacing a gateway is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_PPP_PASSWORD === params) return "INVALID_REPLACEMENT_GATEWAY_PPP_PASSWORD";
        /*        [Obsolete("v5.4.000 - Including login information when replacing a gateway is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_PPP_PASSWORD_NODE_MISSING === params) return "INVALID_REPLACEMENT_GATEWAY_PPP_PASSWORD_NODE_MISSING";
        /*        [Obsolete("v5.4.000 - Including login information when replacing a gateway is deprecated along with associated error codes.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_REPLACEMENT_GATEWAY_PPP_USERNAME_NODE_MISSING === params) return "INVALID_REPLACEMENT_GATEWAY_PPP_USERNAME_NODE_MISSING";
        /*        [Obsolete("v5.4.000 - No longer used, not replaced.")]*/
        else if (Constants.ExternalServiceReturnCodes.REGISTRATION_LIMIT_REACHED === params) return "REGISTRATION_LIMIT_REACHED";
        /*        [Obsolete("v5.4.000 - Use INVALID_DATA_CONCENTRATOR_IP_ADDRESS.")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_DC1000_IP_ADDRESS === params) return "INVALID_DC1000_IP_ADDRESS";

        /*        [Obsolete("v6.0.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_DELTA_LOAD_PROFILE_PROCESS_MODE === params) return "INVALID_DELTA_LOAD_PROFILE_PROCESS_MODE";
        /*        [Obsolete("V6.0.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_CHANNEL_SOURCE === params) return "UNSUPPORTED_CHANNEL_SOURCE";
        /*        [Obsolete("V6.0.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_ANSI_COMPLIANCE_STATUS_TYPE_ID === params) return "UNSUPPORTED_ANSI_COMPLIANCE_STATUS_TYPE_ID";
        /*        [Obsolete("V6.0.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_CONFIGURATION_TYPE_NODE === params) return "UNSUPPORTED_CONFIGURATION_TYPE_NODE";
        /*        [Obsolete("V6.0.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.UNSUPPORTED_CHILD_LOAD_PROFILE_CONFIGURATIONS_NODE === params) return "UNSUPPORTED_CHILD_LOAD_PROFILE_CONFIGURATIONS_NODE";
        /*        [Obsolete("V6.0.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_ESS_CREDENTIALS_BYPASS_SSL === params) return "INVALID_ESS_CREDENTIALS_BYPASS_SSL";
        /*        [Obsolete("V6.0.000 - no longer used")]*/
        else if (Constants.ExternalServiceReturnCodes.INVALID_ESS_CREDENTIALS_PUBLIC_KEY === params) return "INVALID_ESS_CREDENTIALS_PUBLIC_KEY";
        ////////////////////////////////////////////////////////////////////////////////////////////

        return "";
    }

    static decodeConstantsMBusAutoDiscoveryStatusTypes(params) {
        if (Constants.MBusAutoDiscoveryStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.MBusAutoDiscoveryStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    // Contains the list of MessageLog statuses
    static decodeConstantsMessageLogStatus(params) {
        if (Constants.MessageLogStatus.ENABLED === params) return "ENABLED";
        else if (Constants.MessageLogStatus.DISABLED === params) return "DISABLED";

        return "";
    }

    // List of standard options that apply to several API's
    static decodeConstantsStandardAPIOptions(params) {
        if (Constants.StandardAPIOptions.YES === params) return "YES";
        else if (Constants.StandardAPIOptions.NO === params) return "NO";
        else if (Constants.StandardAPIOptions.DISCONNECT === params) return "DISCONNECT";
        else if (Constants.StandardAPIOptions.CONNECT === params) return "CONNECT";
        else if (Constants.StandardAPIOptions.EXACT === params) return "EXACT";
        else if (Constants.StandardAPIOptions.INEXACT === params) return "INEXACT";
        else if (Constants.StandardAPIOptions.SUCCESS === params) return "SUCCESS";
        else if (Constants.StandardAPIOptions.FAILURE === params) return "FAILURE";

        return "";
    }

    // List of settings in the solution
    static decodeConstantsSettingTypes(params) {
        if (Constants.SettingTypes.ARCHIVESETTING === params) return "ARCHIVESETTING";
        else if (Constants.SettingTypes.WAN_CONFIGURATION === params) return "WAN_CONFIGURATION";
        else if (Constants.SettingTypes.SOLUTIONSETTING === params) return "SOLUTIONSETTING";
        else if (Constants.SettingTypes.OPERATIONAL_PROFILE === params) return "OPERATIONAL_PROFILE";

        return "";
    }

    // List of solution settings in the solution
    static decodeConstantsSolutionSettingTypes(params) {
        if (Constants.SolutionSettingTypes.API_KEY_TIMEOUT_PERIOD === params) return "API_KEY_TIMEOUT_PERIOD";
        else if (Constants.SolutionSettingTypes.HIERARCHY_PATH_DELIMITER === params) return "HIERARCHY_PATH_DELIMITER";
        else if (Constants.SolutionSettingTypes.DAILY_SCHEDULE_CALCULATION_TIME === params) return "DAILY_SCHEDULE_CALCULATION_TIME";
        else if (Constants.SolutionSettingTypes.HIERARCHY_WILDCARD === params) return "HIERARCHY_WILDCARD";
        else if (Constants.SolutionSettingTypes.DC1000_ADAPTER_SERVER_URL === params) return "DC1000_ADAPTER_SERVER_URL";
        else if (Constants.SolutionSettingTypes.DATA_CONCENTRATOR_MAX_CONNECTION_INACTIVITY_TIMEOUT === params) return "DATA_CONCENTRATOR_MAX_CONNECTION_INACTIVITY_TIMEOUT";
        else if (Constants.SolutionSettingTypes.DATA_CONCENTRATOR_DCXP_COMMAND_TIMEOUT === params) return "DATA_CONCENTRATOR_DCXP_COMMAND_TIMEOUT";
        else if (Constants.SolutionSettingTypes.EVENT_RECEIVER_URL === params) return "EVENT_RECEIVER_URL";
        else if (Constants.SolutionSettingTypes.EVENT_RECEIVER_NAMESPACE === params) return "EVENT_RECEIVER_NAMESPACE";
        else if (Constants.SolutionSettingTypes.DATA_CONCENTRATOR_FTP_TIMEOUT === params) return "DATA_CONCENTRATOR_FTP_TIMEOUT";
        else if (Constants.SolutionSettingTypes.ORPHAN_CHECK_TIME_ALWAYS_ON_IP_CONNECTED === params) return "ORPHAN_CHECK_TIME_ALWAYS_ON_IP_CONNECTED";
        else if (Constants.SolutionSettingTypes.ORPHAN_CHECK_TIME_ALWAYS_ON_IP_PENDING === params) return "ORPHAN_CHECK_TIME_ALWAYS_ON_IP_PENDING";
        else if (Constants.SolutionSettingTypes.DATA_CONCENTRATOR_FTP_RESPONSE_TIMEOUT === params) return "DATA_CONCENTRATOR_FTP_RESPONSE_TIMEOUT";
        else if (Constants.SolutionSettingTypes.MINIMUM_RECHECK_QUEUE === params) return "MINIMUM_RECHECK_QUEUE";
        else if (Constants.SolutionSettingTypes.MAXIMUM_RECHECK_QUEUE === params) return "MAXIMUM_RECHECK_QUEUE";
        else if (Constants.SolutionSettingTypes.SCHEDULE_DELTA_LOAD_PROFILE_NOW === params) return "SCHEDULE_DELTA_LOAD_PROFILE_NOW";
        else if (Constants.SolutionSettingTypes.DEFAULT_DEVICE_DOWN_LIMIT === params) return "DEFAULT_DEVICE_DOWN_LIMIT";
        else if (Constants.SolutionSettingTypes.USE_WAN_COMPRESSION === params) return "USE_WAN_COMPRESSION";
        else if (Constants.SolutionSettingTypes.DATA_CONCENTRATOR_MINIMUM_WAN_COMPRESSIBLE_BYTES === params) return "DATA_CONCENTRATOR_MINIMUM_WAN_COMPRESSIBLE_BYTES";
        else if (Constants.SolutionSettingTypes.ARCHIVE_ROW_LIMIT === params) return "ARCHIVE_ROW_LIMIT";
        else if (Constants.SolutionSettingTypes.COMMAND_HISTORY_ORPHAN_CHECK_ROW_LIMIT === params) return "COMMAND_HISTORY_ORPHAN_CHECK_ROW_LIMIT";
        else if (Constants.SolutionSettingTypes.DISCONNECT_ON_DCXP_TIMEOUT === params) return "DISCONNECT_ON_DCXP_TIMEOUT";
        else if (Constants.SolutionSettingTypes.MBUS_ON_DEMAND_BILLING_TIMEOUT_PERIOD === params) return "MBUS_ON_DEMAND_BILLING_TIMEOUT_PERIOD";
        else if (Constants.SolutionSettingTypes.MEP_ON_DEMAND_DATA_TIMEOUT_PERIOD === params) return "MEP_ON_DEMAND_DATA_TIMEOUT_PERIOD";
        else if (Constants.SolutionSettingTypes.SERVER_PERFORMANCE_LOG_INTERVAL === params) return "SERVER_PERFORMANCE_LOG_INTERVAL";
        else if (Constants.SolutionSettingTypes.DAYS_UNTIL_STOP_MODE === params) return "DAYS_UNTIL_STOP_MODE";
        else if (Constants.SolutionSettingTypes.FTP_ENCRYPTED_DIRECTORY_LISTING_POLL_DELAY === params) return "FTP_ENCRYPTED_DIRECTORY_LISTING_POLL_DELAY";
        else if (Constants.SolutionSettingTypes.PROXY_SERVER_HOST_NAME === params) return "PROXY_SERVER_HOST_NAME";
        else if (Constants.SolutionSettingTypes.PROXY_SERVER_PORT === params) return "PROXY_SERVER_PORT";
        else if (Constants.SolutionSettingTypes.PROXY_SERVER_USERNAME === params) return "PROXY_SERVER_USERNAME";
        else if (Constants.SolutionSettingTypes.PROXY_SERVER_PASSWORD === params) return "PROXY_SERVER_PASSWORD";
        else if (Constants.SolutionSettingTypes.TASK_TIMEOUT_ROW_LIMIT === params) return "TASK_TIMEOUT_ROW_LIMIT";
        else if (Constants.SolutionSettingTypes.FORWARD_DEPRECATED_DC1000_EVENT === params) return "FORWARD_DEPRECATED_DC1000_EVENT";
        else if (Constants.SolutionSettingTypes.DELTA_LOAD_PROFILE_PROCESS_BLOCK_LIMIT === params) return "DELTA_LOAD_PROFILE_PROCESS_BLOCK_LIMIT";
        else if (Constants.SolutionSettingTypes.GATEWAY_SYNCHRONIZATION_DELAY === params) return "GATEWAY_SYNCHRONIZATION_DELAY";
        else if (Constants.SolutionSettingTypes.LOAD_PROFILE_ACCUMULATOR_RESULT_VALUE === params) return "LOAD_PROFILE_ACCUMULATOR_RESULT_VALUE";
        else if (Constants.SolutionSettingTypes.EXCLUDE_INVALID_LOAD_PROFILE_INTERVAL_DATA === params) return "EXCLUDE_INVALID_LOAD_PROFILE_INTERVAL_DATA";
        else if (Constants.SolutionSettingTypes.TIME_WAIT_CONNECT_RETRY_ALWAYS_ON_IP === params) return "TIME_WAIT_CONNECT_RETRY_ALWAYS_ON_IP";
        else if (Constants.SolutionSettingTypes.READ_DEVICE_LOCAL_DATE_TIME === params) return "READ_DEVICE_LOCAL_DATE_TIME";
        else if (Constants.SolutionSettingTypes.DEFAULT_MAXIMUM_BATCH_SIZE === params) return "DEFAULT_MAXIMUM_BATCH_SIZE";
        else if (Constants.SolutionSettingTypes.RETRIEVE_LIST_MAXIMUM_COUNT_DEFAULT === params) return "RETRIEVE_LIST_MAXIMUM_COUNT_DEFAULT";
        else if (Constants.SolutionSettingTypes.GATEWAY_AND_DEVICE_MANAGER_INDIVIDUAL_RESULT_REMOVAL === params) return "GATEWAY_AND_DEVICE_MANAGER_INDIVIDUAL_RESULT_REMOVAL";
        else if (Constants.SolutionSettingTypes.MAXIMUM_GATEWAY_INITIATED_CONNECTIONS === params) return "MAXIMUM_GATEWAY_INITIATED_CONNECTIONS";
        else if (Constants.SolutionSettingTypes.DEVICE_REACHABILITY_TIMEOUT === params) return "DEVICE_REACHABILITY_TIMEOUT";

        else if (Constants.SolutionSettingTypes.GENERAL_MESSAGE_CACHE_SIZE === params) return "GENERAL_MESSAGE_CACHE_SIZE";
        else if (Constants.SolutionSettingTypes.TASK_MESSAGE_CACHE_SIZE === params) return "TASK_MESSAGE_CACHE_SIZE";
        else if (Constants.SolutionSettingTypes.MESSAGE_CACHE_REMOVAL_FREQUENCY === params) return "MESSAGE_CACHE_REMOVAL_FREQUENCY";
        else if (Constants.SolutionSettingTypes.MESSAGE_CACHE_REMOVAL_CRITERIA === params) return "MESSAGE_CACHE_REMOVAL_CRITERIA";

        //ATM
        else if (Constants.SolutionSettingTypes.ATM_GATEWAY_BATCH_COUNT === params) return "ATM_GATEWAY_BATCH_COUNT";
        else if (Constants.SolutionSettingTypes.ATM_CREATE_CONNECTIONS === params) return "ATM_CREATE_CONNECTIONS";
        else if (Constants.SolutionSettingTypes.ATM_DISCOVERED_DATA_DEFAULT_COLLECTION_TIME === params) return "ATM_DISCOVERED_DATA_DEFAULT_COLLECTION_TIME";
        else if (Constants.SolutionSettingTypes.ATM_DEVICE_BATCH_COUNT === params) return "ATM_DEVICE_BATCH_COUNT";
        else if (Constants.SolutionSettingTypes.ATM_DEVICE_ASSIGNMENT_BATCH_COUNT === params) return "ATM_DEVICE_ASSIGNMENT_BATCH_COUNT";
        else if (Constants.SolutionSettingTypes.ATM_ASSIGNMENT_FACTOR === params) return "ATM_ASSIGNMENT_FACTOR";
        else if (Constants.SolutionSettingTypes.ATM_DISCOVERED_DATA_MAXIMUM_AGE === params) return "ATM_DISCOVERED_DATA_MAXIMUM_AGE";
        else if (Constants.SolutionSettingTypes.ATM_COMMISSION_TIMEOUT === params) return "ATM_COMMISSION_TIMEOUT";
        else if (Constants.SolutionSettingTypes.ATM_MAXIMUM_ASSIGNMENT_ATTEMPTS === params) return "ATM_MAXIMUM_ASSIGNMENT_ATTEMPTS";
        else if (Constants.SolutionSettingTypes.ATM_MAXIMUM_SAME_GATEWAY_ASSIGNMENT_ATTEMPTS === params) return "ATM_MAXIMUM_SAME_GATEWAY_ASSIGNMENT_ATTEMPTS";
        else if (Constants.SolutionSettingTypes.ATM_COMMISSION_DATA_ACCEPTABLE_REPEATER_COUNT === params) return "ATM_COMMISSION_DATA_ACCEPTABLE_REPEATER_COUNT";
        else if (Constants.SolutionSettingTypes.ATM_COMMISSION_DATA_ACCEPTABLE_CARRIER_MARGIN === params) return "ATM_COMMISSION_DATA_ACCEPTABLE_CARRIER_MARGIN";
        else if (Constants.SolutionSettingTypes.ATM_COMMISSION_DATA_ACCEPTABLE_SIGNAL_STRENGTH === params) return "ATM_COMMISSION_DATA_ACCEPTABLE_SIGNAL_STRENGTH";
        else if (Constants.SolutionSettingTypes.ATM_DEVICE_ASSIGNMENT_RANK_BATCH_DELETE_COUNT === params) return "ATM_DEVICE_ASSIGNMENT_RANK_BATCH_DELETE_COUNT";
        else if (Constants.SolutionSettingTypes.ATM_FINAL_ASSIGNMENT_TIMEOUT_PERIOD_START_MODE === params) return "ATM_FINAL_ASSIGNMENT_TIMEOUT_PERIOD_START_MODE";
        else if (Constants.SolutionSettingTypes.ATM_NO_ACCEPTABLE_DATA_CONCENTRATOR_MODE === params) return "ATM_NO_ACCEPTABLE_DATA_CONCENTRATOR_MODE";

        else if (Constants.SolutionSettingTypes.COMMISSION_PROCESS_MODE === params) return "COMMISSION_PROCESS_MODE";

        else if (Constants.SolutionSettingTypes.EVENT_MANAGER_INDIVIDUAL_EVENT_HISTORY_REMOVAL === params) return "EVENT_MANAGER_INDIVIDUAL_EVENT_HISTORY_REMOVAL";
        else if (Constants.SolutionSettingTypes.USE_RESULT_COMPRESSION === params) return "USE_RESULT_COMPRESSION";

        else if (Constants.SolutionSettingTypes.DC_ADAPTER_COMMUNICATION_COMPLETION_DELAY === params) return "DC_ADAPTER_COMMUNICATION_COMPLETION_DELAY";
        else if (Constants.SolutionSettingTypes.GATEWAY_REPLACEMENT_INFORMATION_MINIMUM_AGE === params) return "GATEWAY_REPLACEMENT_INFORMATION_MINIMUM_AGE";
        else if (Constants.SolutionSettingTypes.GATEWAY_REPLACEMENT_INFORMATION_MAXIMUM_AGE === params) return "GATEWAY_REPLACEMENT_INFORMATION_MAXIMUM_AGE";
        else if (Constants.SolutionSettingTypes.GATEWAY_REPLACEMENT_INFORMATION_COLLECTION_MINIMUM_METER_COUNT === params) return "GATEWAY_REPLACEMENT_INFORMATION_COLLECTION_MINIMUM_METER_COUNT";
        else if (Constants.SolutionSettingTypes.DEFAULT_MAXIMUM_IDENTITY_RELEASE_SIZE === params) return "DEFAULT_MAXIMUM_IDENTITY_RELEASE_SIZE";
        else if (Constants.SolutionSettingTypes.READ_DEVICE_LOAD_STATUS_GATEWAY_DELAY === params) return "READ_DEVICE_LOAD_STATUS_GATEWAY_DELAY";
        else if (Constants.SolutionSettingTypes.PERFORM_COMMAND_ON_GROUP_COMMAND_HISTORY_DETAIL_MODE === params) return "PERFORM_COMMAND_ON_GROUP_COMMAND_HISTORY_DETAIL_MODE";
        else if (Constants.SolutionSettingTypes.CACHE_REFRESH_INTERVAL === params) return "CACHE_REFRESH_INTERVAL";
        else if (Constants.SolutionSettingTypes.PHASE_INACCURACY_EVENT_THRESHOLD_VALUE === params) return "PHASE_INACCURACY_EVENT_THRESHOLD_VALUE";

        else if (Constants.SolutionSettingTypes.GATEWAY_TIME_SYNCHRONIZATION_NOTIFICATION_THRESHOLD === params) return "GATEWAY_TIME_SYNCHRONIZATION_NOTIFICATION_THRESHOLD";
        else if (Constants.SolutionSettingTypes.SYSTEM_CONFIGURATION_FILE_UPDATE_DELAY === params) return "SYSTEM_CONFIGURATION_FILE_UPDATE_DELAY";
        else if (Constants.SolutionSettingTypes.MAXIMUM_SSH_LOGIN_RETRY_ATTEMPTS === params) return "MAXIMUM_SSH_LOGIN_RETRY_ATTEMPTS";

        else if (Constants.SolutionSettingTypes.CONVERSION_COLLECTION_PERIOD === params) return "CONVERSION_COLLECTION_PERIOD";
        else if (Constants.SolutionSettingTypes.ENGINE_MESSAGE_POLLING_DELAY === params) return "ENGINE_MESSAGE_POLLING_DELAY";

        else if (Constants.SolutionSettingTypes.MAXIMUM_RESULT_DATA_SIZE === params) return "MAXIMUM_RESULT_DATA_SIZE";

        else if (Constants.SolutionSettingTypes.COMMUNICATION_HISTORY_ORPHAN_CHECK_ROW_LIMIT === params) return "COMMUNICATION_HISTORY_ORPHAN_CHECK_ROW_LIMIT";
        else if (Constants.SolutionSettingTypes.NES_SYSTEM_SOFTWARE_ENGINE_CONVERSION_MAXIMUM_BATCH_SIZE === params) return "NES_SYSTEM_SOFTWARE_ENGINE_CONVERSION_MAXIMUM_BATCH_SIZE";

        //v5.1
        else if (Constants.SolutionSettingTypes.READ_DEVICE_MEMORY_CONFIGURATION_DATA_CONCENTRATOR_DELAY === params) return "READ_DEVICE_MEMORY_CONFIGURATION_DATA_CONCENTRATOR_DELAY";
        else if (Constants.SolutionSettingTypes.LOG4NET_CONFIGURATION === params) return "LOG4NET_CONFIGURATION";

        //v5.2
        else if (Constants.SolutionSettingTypes.ALARM_FILTERS === params) return "ALARM_FILTERS";
        else if (Constants.SolutionSettingTypes.DEVICE_EVENT_LOG_HISTORY_EVENT_NUMBERS === params) return "DEVICE_EVENT_LOG_HISTORY_EVENT_NUMBERS";
        else if (Constants.SolutionSettingTypes.WATT_HOUR_RETURN_TYPE === params) return "WATT_HOUR_RETURN_TYPE";

        //v5.3
        else if (Constants.SolutionSettingTypes.VALIDATE_HELLO_MESSAGE_SIGNATURE === params) return "VALIDATE_HELLO_MESSAGE_SIGNATURE";
        else if (Constants.SolutionSettingTypes.LVGM_AUTOMATIC_READ_MINIMUM_AGE === params) return "LVGM_AUTOMATIC_READ_MINIMUM_AGE";
        else if (Constants.SolutionSettingTypes.LVGM_AUTOMATIC_READ_MAXIMUM_AGE === params) return "LVGM_AUTOMATIC_READ_MAXIMUM_AGE";
        else if (Constants.SolutionSettingTypes.LVGM_AUTOMATIC_READ_TIME === params) return "LVGM_AUTOMATIC_READ_TIME";

        //v5.4
        else if (Constants.SolutionSettingTypes.DC_USERNAME_USER_DEFINED_CHARACTER_SET === params) return "DC_USERNAME_USER_DEFINED_CHARACTER_SET";
        else if (Constants.SolutionSettingTypes.DC_PASSWORD_USER_DEFINED_CHARACTER_SET === params) return "DC_PASSWORD_USER_DEFINED_CHARACTER_SET";
        else if (Constants.SolutionSettingTypes.DEFAULT_TO_AES_ENCRYPTION_ON_PLC === params) return "DEFAULT_TO_AES_ENCRYPTION_ON_PLC";
        else if (Constants.SolutionSettingTypes.DEVICE_PLC_KEY_EXPIRATION_PERIOD === params) return "DEVICE_PLC_KEY_EXPIRATION_PERIOD";
        else if (Constants.SolutionSettingTypes.DEVICE_PLC_KEY_RENEWAL_PERIOD === params) return "DEVICE_PLC_KEY_RENEWAL_PERIOD";
        else if (Constants.SolutionSettingTypes.DEVICE_PLC_KEY_RENEWAL_TIMEOUT_PERIOD === params) return "DEVICE_PLC_KEY_RENEWAL_TIMEOUT_PERIOD";
        else if (Constants.SolutionSettingTypes.DEVICE_PLC_KEY_RENEWAL_EXECUTION_DATE_EXPRESSION === params) return "DEVICE_PLC_KEY_RENEWAL_EXECUTION_DATE_EXPRESSION";
        else if (Constants.SolutionSettingTypes.GATEWAY_KEY_EXPIRATION_PERIOD_AES_ONLY === params) return "GATEWAY_KEY_EXPIRATION_PERIOD_AES_ONLY";
        else if (Constants.SolutionSettingTypes.GATEWAY_KEY_EXPIRATION_PERIOD_MIXED === params) return "GATEWAY_KEY_EXPIRATION_PERIOD_MIXED";
        else if (Constants.SolutionSettingTypes.GATEWAY_KEY_RENEWAL_PERIOD === params) return "GATEWAY_KEY_RENEWAL_PERIOD";
        else if (Constants.SolutionSettingTypes.GATEWAY_KEY_RENEWAL_TIMEOUT_PERIOD === params) return "GATEWAY_KEY_RENEWAL_TIMEOUT_PERIOD";
        else if (Constants.SolutionSettingTypes.GATEWAY_KEY_RENEWAL_EXECUTION_DATE_EXPRESSION === params) return "GATEWAY_KEY_RENEWAL_EXECUTION_DATE_EXPRESSION";
        else if (Constants.SolutionSettingTypes.DEFAULT_IGNORE_FEEDBACK_STATUS === params) return "DEFAULT_IGNORE_FEEDBACK_STATUS";
        else if (Constants.SolutionSettingTypes.REMOTE_FILE_MANAGEMENT_EXEUCTION_TIMEFRAME === params) return "REMOTE_FILE_MANAGEMENT_EXEUCTION_TIMEFRAME";
        else if (Constants.SolutionSettingTypes.REMOTE_FILE_MANAGEMENT_EXECUTION_MINIMUM_REQUEUE_TIME === params) return "REMOTE_FILE_MANAGEMENT_EXECUTION_MINIMUM_REQUEUE_TIME";
        else if (Constants.SolutionSettingTypes.REMOTE_FILE_MANAGEMENT_EXEUCTION_MAXIMUM_REQUEUE_TIME === params) return "REMOTE_FILE_MANAGEMENT_EXEUCTION_MAXIMUM_REQUEUE_TIME";
        else if (Constants.SolutionSettingTypes.REMOTE_FILE_MANAGEMENT_WAN_SELECTION === params) return "REMOTE_FILE_MANAGEMENT_WAN_SELECTION";

        //v6.0
        else if (Constants.SolutionSettingTypes.P2P_GATEWAY_RESPONSE_TIMEOUT === params) return "P2P_GATEWAY_RESPONSE_TIMEOUT";
        else if (Constants.SolutionSettingTypes.P2P_GATEWAY_INITIATED_CONNECTION_PORT === params) return "P2P_GATEWAY_INITIATED_CONNECTION_PORT";
        else if (Constants.SolutionSettingTypes.P2P_GATEWAY_TLS_HANDSHAKE_TIMEOUT === params) return "P2P_GATEWAY_TLS_HANDSHAKE_TIMEOUT";
        else if (Constants.SolutionSettingTypes.P2P_TIME_SYNC_MINIMUM_DELTA_SECONDS === params) return "P2P_TIME_SYNC_MINIMUM_DELTA_SECONDS";
        else if (Constants.SolutionSettingTypes.P2P_TIME_SYNC_FREQUENCY_SECONDS === params) return "P2P_TIME_SYNC_FREQUENCY_SECONDS";
        else if (Constants.SolutionSettingTypes.DELTA_LOAD_PROFILE_PROCESS_BLOCK_LIMIT_SYNC_MODE === params) return "DELTA_LOAD_PROFILE_PROCESS_BLOCK_LIMIT_SYNC_MODE";
        else if (Constants.SolutionSettingTypes.TLS_SESSION_MAXIMUM_LIFETIME === params) return "TLS_SESSION_MAXIMUM_LIFETIME";
        else if (Constants.SolutionSettingTypes.P2P_GATEWAY_SESSION_TIMEOUT === params) return "P2P_GATEWAY_SESSION_TIMEOUT";

        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////
        /*        [Obsolete("v4.1 - no longer used")]*/
        else if (Constants.SolutionSettingTypes.DC1000_RESOURCE_READ_COUNT === params) return "DC1000_RESOURCE_READ_COUNT";

        /*        [Obsolete("v4.1 - no longer used")]*/
        else if (Constants.SolutionSettingTypes.DC1000_DEVICE_RESOURCE_READ_COUNT === params) return "DC1000_DEVICE_RESOURCE_READ_COUNT";

        /*        [Obsolete("v4.1 - no longer used")]*/
        else if (Constants.SolutionSettingTypes.DC1000_MAX_OUTSTANDING_DCXP_COMMANDS === params) return "DC1000_MAX_OUTSTANDING_DCXP_COMMANDS";

        /*        [Obsolete("5.0 - replaced by SYSTEM_CONFIGURATION_FILE_UPDATE_DELAY")]*/
        else if (Constants.SolutionSettingTypes.DATAMANAGER_INIT_UPDATE_DELAY === params) return "DATAMANAGER_INIT_UPDATE_DELAY";

        /*        [Obsolete("5.1 - no longer used")]*/
        else if (Constants.SolutionSettingTypes.TCPIP_SOCKET_MESSAGE_TIMEOUT_PERIOD === params) return "TCPIP_SOCKET_MESSAGE_TIMEOUT_PERIOD";

        /*        [Obsolete("5.1 - no longer used")]*/
        else if (Constants.SolutionSettingTypes.TIME_WAIT_DEPENDENT_TASK_NOT_FOUND === params) return "TIME_WAIT_DEPENDENT_TASK_NOT_FOUND";

        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.SolutionSettingTypes.GATEWAY_REPLACEMENT_DEFAULT_CONTROLLER_CONFIGURATION_FILE_TYPES === params) return "GATEWAY_REPLACEMENT_DEFAULT_CONTROLLER_CONFIGURATION_FILE_TYPES";

        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.SolutionSettingTypes.HISTORICAL_GATEWAY_CONTROLLER_CONFIGURATION_FILE_TYPE_LIMIT === params) return "HISTORICAL_GATEWAY_CONTROLLER_CONFIGURATION_FILE_TYPE_LIMIT";

        /*        [Obsolete("v5.4.000 - no replacement, no longer used")]*/
        else if (Constants.SolutionSettingTypes.UNBALANCED_VOLTAGE_RANGES === params) return "UNBALANCED_VOLTAGE_RANGES";

        /*        [Obsolete("v5.4.000 - use DATA_CONCENTRATOR_MAX_CONNECTION_INACTIVITY_TIMEOUT")]*/
        else if (Constants.SolutionSettingTypes.DC1000_MAX_CONNECTION_INACTIVITY_TIMEOUT === params) return "DC1000_MAX_CONNECTION_INACTIVITY_TIMEOUT";

        /*        [Obsolete("v5.4.000 - use DATA_CONCENTRATOR_DCXP_COMMAND_TIMEOUT")]*/
        else if (Constants.SolutionSettingTypes.DC1000_DCXP_COMMAND_TIMEOUT === params) return "DC1000_DCXP_COMMAND_TIMEOUT";

        /*        [Obsolete("v5.4.000 - use DATA_CONCENTRATOR_FTP_TIMEOUT")]*/
        else if (Constants.SolutionSettingTypes.DC1000_FTP_TIMEOUT === params) return "DC1000_FTP_TIMEOUT";

        /*        [Obsolete("v5.4.000 - use DATA_CONCENTRATOR_FTP_RESPONSE_TIMEOUT")]*/
        else if (Constants.SolutionSettingTypes.DATA_CONCENTRATORDC1000_FTP_RESPONSE_TIMEOUT === params) return "DATA_CONCENTRATORDC1000_FTP_RESPONSE_TIMEOUT";

        /*        [Obsolete("v5.4.000 - use DATA_CONCENTRATOR_MINIMUM_WAN_COMPRESSIBLE_BYTES")]*/
        else if (Constants.SolutionSettingTypes.DC1000_MINIMUM_WAN_COMPRESSIBLE_BYTES === params) return "DC1000_MINIMUM_WAN_COMPRESSIBLE_BYTES";

        /*        [Obsolete("v5.4.000 - use READ_DEVICE_LOAD_STATUS_GATEWAY_DELAY")]*/
        else if (Constants.SolutionSettingTypes.READ_DEVICE_LOAD_STATUS_DATA_CONCENTRATOR_DELAY === params) return "READ_DEVICE_LOAD_STATUS_DATA_CONCENTRATOR_DELAY";

        /*        [Obsolete("v6.0.000 - no replacement, no longer used")]*/
        else if (Constants.SolutionSettingTypes.DELTA_LOAD_PROFILE_PROCESS_MODE === params) return "DELTA_LOAD_PROFILE_PROCESS_MODE";

        /*        [Obsolete("v6.0.000 - no replacement, no longer used")]*/
        else if (Constants.SolutionSettingTypes.CIM_SOURCE_STRING === params) return "CIM_SOURCE_STRING";

        /*        [Obsolete("v6.0.000 - no replacement, no longer used")]*/
        else if (Constants.SolutionSettingTypes.CIM_REQUEST_TIMEOUT_SECONDS === params) return "CIM_REQUEST_TIMEOUT_SECONDS";

        /*        [Obsolete("v6.0.000 - no replacement, internal setting")]*/
        else if (Constants.SolutionSettingTypes.DC_ADAPTER_INTERNAL_PIPE_REQUEST_RETRY_COUNT === params) return "DC_ADAPTER_INTERNAL_PIPE_REQUEST_RETRY_COUNT";

        /*        [Obsolete("v6.0.000 - no replacement, internal setting")]*/
        else if (Constants.SolutionSettingTypes.DC_ADAPTER_INTERNAL_PIPE_REQUEST_RETRY_DELAY === params) return "DC_ADAPTER_INTERNAL_PIPE_REQUEST_RETRY_DELAY";
        ////////////////////////////////////////////////////////////////////////////////////////

        return "";
    }

    // List of types of solution settings supported
    static decodeConstantsSolutionSettingValueTypes(params) {
        if (Constants.SolutionSettingValueTypes.SETTING_NUMERIC === params) return "SETTING_NUMERIC";
        else if (Constants.SolutionSettingValueTypes.SETTING_STRING === params) return "SETTING_STRING";
        else if (Constants.SolutionSettingValueTypes.SETTING_EMAIL === params) return "SETTING_EMAIL";
        else if (Constants.SolutionSettingValueTypes.ENCRYPTED_STRING === params) return "ENCRYPTED_STRING";

        return "";
    }

    static decodeConstantsDeviceDisconnectPriorityLevel(params) {
        if (Constants.DeviceDisconnectPriorityLevel.LOW === params) return "LOW";
        else if (Constants.DeviceDisconnectPriorityLevel.HIGH === params) return "HIGH";

        return "";
    }

    // List of the statuses for a device
    static decodeConstantsDeviceStatus(params) {
        if (Constants.DeviceStatus.ENABLED === params) return "ENABLED";
        else if (Constants.DeviceStatus.ADD_PENDING === params) return "ADD_PENDING";
        else if (Constants.DeviceStatus.REMOVE_PENDING === params) return "REMOVE_PENDING";
        else if (Constants.DeviceStatus.COMMISSIONED === params) return "COMMISSIONED";
        else if (Constants.DeviceStatus.ADD_FAILED === params) return "ADD_FAILED";

        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////

        /*        [Obsolete("v4 - no longer used")]*/
        else if (Constants.DeviceStatus.FIRMWARE_UPDATE_PENDING === params) return "FIRMWARE_UPDATE_PENDING";

        return "";
    }

    // List of the status for Gateway Communication History
    static decodeConstantsGatewayCommunicationHistoryStatus(params) {
        if (Constants.GatewayCommunicationHistoryStatus.ERROR === params) return "ERROR";
        else if (Constants.GatewayCommunicationHistoryStatus.SOAP_FAILED === params) return "SOAP_FAILED";
        else if (Constants.GatewayCommunicationHistoryStatus.CONNECTED === params) return "CONNECTED";
        else if (Constants.GatewayCommunicationHistoryStatus.PENDING === params) return "PENDING";
        else if (Constants.GatewayCommunicationHistoryStatus.COMPLETE === params) return "COMPLETE";
        else if (Constants.GatewayCommunicationHistoryStatus.TIMED_OUT === params) return "TIMED_OUT";

        return "";
    }

    // List of the statuses for Gateways
    static decodeConstantsGatewayStatus(params) {
        if (Constants.GatewayStatus.ENABLED === params) return "ENABLED";
        else if (Constants.GatewayStatus.DISABLED === params) return "DISABLED";

        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////

        /*        [Obsolete("v4 - no longer used")]*/
        else if (Constants.GatewayStatus.FIRMWARE_UPDATE_PENDING === params) return "FIRMWARE_UPDATE_PENDING";

        return "";
    }

    // List of statuses for Schedule Assignments
    static decodeConstantsScheduleAssignmentStatus(params) {
        if (Constants.ScheduleAssignmentStatus.ENABLED === params) return "ENABLED";
        else if (Constants.ScheduleAssignmentStatus.DISABLED === params) return "DISABLED";

        return "";
    }

    // List of statuses for Schedules
    static decodeConstantsScheduleStatus(params) {
        if (Constants.ScheduleStatus.ENABLED === params) return "ENABLED";
        else if (Constants.ScheduleStatus.DISABLED === params) return "DISABLED";

        return "";
    }

    // List of schedule recurrences
    static decodeConstantsScheduleRecurrenceTypes(params) {
        if (Constants.ScheduleRecurrenceTypes.MINUTE === params) return "MINUTE";
        else if (Constants.ScheduleRecurrenceTypes.HOUR === params) return "HOUR";
        else if (Constants.ScheduleRecurrenceTypes.DAY === params) return "DAY";
        else if (Constants.ScheduleRecurrenceTypes.WEEK === params) return "WEEK";
        else if (Constants.ScheduleRecurrenceTypes.MONTH === params) return "MONTH";
        else if (Constants.ScheduleRecurrenceTypes.YEAR === params) return "YEAR";
        else if (Constants.ScheduleRecurrenceTypes.NONE === params) return "NONE";

        return "";
    }

    // List of archive setting expired interval types
    static decodeConstantsArchiveSettingsExpiredIntervalTypes(params) {
        if (Constants.ArchiveSettingsExpiredIntervalTypes.MINUTE === params) return "MINUTE";
        else if (Constants.ArchiveSettingsExpiredIntervalTypes.HOUR === params) return "HOUR";
        else if (Constants.ArchiveSettingsExpiredIntervalTypes.DAY === params) return "DAY";

        return "";
    }

    // List of schedule timeout recurrences
    static decodeConstantsScheduleTimeoutIntervalTypes(params) {
        if (Constants.ScheduleTimeoutIntervalTypes.MINUTE === params) return "MINUTE";
        else if (Constants.ScheduleTimeoutIntervalTypes.HOUR === params) return "HOUR";
        else if (Constants.ScheduleTimeoutIntervalTypes.DAY === params) return "DAY";

        return "";
    }

    /*    [Obsolete("v5.4.000 - no replacement, not used")]*/
    static decodeConstantsScheduledTasksPendingStatus(params) {
        if (Constants.ScheduledTasksPendingStatus.AVAILABLE === params) return "AVAILABLE";
        else if (Constants.ScheduledTasksPendingStatus.PROCESSING === params) return "PROCESSING";
        else if (Constants.ScheduledTasksPendingStatus.WAITING === params) return "WAITING";
        else if (Constants.ScheduledTasksPendingStatus.PAUSED === params) return "PAUSED";

        return "";
    }

    // List of types of Gateways
    static decodeConstantsGatewayTypes(params) {
        if (Constants.GatewayTypes.DATA_CONCENTRATOR === params) return "DATA_CONCENTRATOR";

        else if (Constants.GatewayTypes.POINT_TO_POINT === params) return "POINT_TO_POINT";

        /*        [Obsolete("v5.4 - replaced by DATA_CONCENTRATOR because this type covers both the DC and DCN")]*/
        else if (Constants.GatewayTypes.DC1000 === params) return "DC1000";

        return "";
    }

    // List of reserved ID's in the solution
    static decodeConstantsReservedIDs(params) {
        if (Constants.ReservedIDs.UNASSIGNED_HIERARCHY_LEVEL_MEMBER_ID === params) return "UNASSIGNED_HIERARCHY_LEVEL_MEMBER_ID";
        else if (Constants.ReservedIDs.UNASSIGNED_ATTRIBUTE_ID === params) return "UNASSIGNED_ATTRIBUTE_ID";

        return "";
    }

    // List of options for searching hierarchies
    static decodeConstantsHierarchySearchOptions(params) {
        //To get all entities in the selected level member only
        if (Constants.HierarchySearchOptions.EQUAL === params) return "EQUAL";
        //To get all entities in the selected level members and all its children
        else if (Constants.HierarchySearchOptions.EQUALORUNDER === params) return "EQUALORUNDER";

        return "";
    }

    // List of options for deleting HierarchyLevelMembers
    static decodeConstantsHierarchyLevelMemberDeleteTypes(params) {
        if (Constants.HierarchyLevelMemberDeleteTypes.AUTO_REASSIGN_CHILDREN === params) return "AUTO_REASSIGN_CHILDREN";
        else if (Constants.HierarchyLevelMemberDeleteTypes.DELETE_DESCENDENTS === params) return "DELETE_DESCENDENTS";
        else if (Constants.HierarchyLevelMemberDeleteTypes.MOVE_CHILDREN_TO_NEW_PARENT === params) return "MOVE_CHILDREN_TO_NEW_PARENT";

        return "";
    }

    // List of user authentication types supported
    static decodeConstantsUserAuthenticationTypes(params) {
        if (Constants.UserAuthenticationTypes.DEFAULT === params) return "DEFAULT";

        return "";
    }

    static decodeConstantsTaskPriorities(params) {
        if (Constants.TaskPriorities.LOW === params) return "LOW";
        else if (Constants.TaskPriorities.MEDIUM === params) return "MEDIUM";
        else if (Constants.TaskPriorities.MEDIUM_TO_MEDIUM_HIGH === params) return "MEDIUM_TO_MEDIUM_HIGH";
        else if (Constants.TaskPriorities.MEDIUM_HIGH === params) return "MEDIUM_HIGH";
        else if (Constants.TaskPriorities.HIGH === params) return "HIGH";

        return "";
    }

    static decodeConstantsImportDataTypes(params) {
        if (Constants.ImportDataTypes.NES_CREATED_IMPORT_FILE === params) return "NES_CREATED_IMPORT_FILE";
        else if (Constants.ImportDataTypes.NES_SYSTEM_SOFTWARE_EXPORT_RESULT === params) return "NES_SYSTEM_SOFTWARE_EXPORT_RESULT";
        else if (Constants.ImportDataTypes.PROVISIONING_TOOL_CREATED_DATA_CONCENTRATOR_FILE === params) return "PROVISIONING_TOOL_CREATED_DATA_CONCENTRATOR_FILE";

        /*        [Obsolete("v5.4 - replaced by NES_CREATED_IMPORT_FILE")]*/
        else if (Constants.ImportDataTypes.ECHELON_CREATED_IMPORT_FILE === params) return "ECHELON_CREATED_IMPORT_FILE";

        return "";
    }

    static decodeConstantsImportProcessingCompletionStatusTypes(params) {
        if (Constants.ImportProcessingCompletionStatusTypes.SUCCESS === params) return "SUCCESS";
        else if (Constants.ImportProcessingCompletionStatusTypes.PARTIAL_SUCCESS === params) return "PARTIAL_SUCCESS";
        else if (Constants.ImportProcessingCompletionStatusTypes.FAILURE === params) return "FAILURE";
        else if (Constants.ImportProcessingCompletionStatusTypes.UNEXPECTED_FAILURE === params) return "UNEXPECTED_FAILURE";

        return "";
    }

    //List of gateway communication types
    static decodeConstantsGatewayCommunicationTypes(params) {
        if (Constants.GatewayCommunicationTypes.ALWAYS_ON_IP === params) return "ALWAYS_ON_IP";

        return "";
    }

    //List of gateway template types
    static decodeConstantsGatewayTemplateTypes(params) {
        if (Constants.GatewayTemplateTypes.TEMPLATE_ONLY === params) return "TEMPLATE_ONLY";
        else if (Constants.GatewayTemplateTypes.GATEWAY_AND_TEMPLATE === params) return "GATEWAY_AND_TEMPLATE";
        else if (Constants.GatewayTemplateTypes.GATEWAY_ONLY === params) return "GATEWAY_ONLY";

        return "";
    }

    static decodeConstantsIDTypes(params) {
        if (Constants.IDTypes.GATEWAY_ID === params) return "GATEWAY_ID";
        else if (Constants.IDTypes.TRANSFORMER_ID === params) return "TRANSFORMER_ID";
        else if (Constants.IDTypes.NEURON_ID === params) return "NEURON_ID";
        else if (Constants.IDTypes.DEVICE_ID === params) return "DEVICE_ID";
        else if (Constants.IDTypes.SERIAL_NUMBER === params) return "SERIAL_NUMBER";
        else if (Constants.IDTypes.NAME === params) return "NAME";

        return "";
    }

    //List of device types
    static decodeConstantsDeviceTypes(params) {
        if (Constants.DeviceTypes.METER === params) return "METER";
        else if (Constants.DeviceTypes.MBUS === params) return "MBUS";
        else if (Constants.DeviceTypes.MEP === params) return "MEP";

        return "";
    }

    static decodeConstantsEntityTypes(params) {
        if (Constants.EntityTypes.DEVICE === params) return "DEVICE";
        else if (Constants.EntityTypes.EVENT === params) return "EVENT";
        else if (Constants.EntityTypes.GATEWAY === params) return "GATEWAY";
        else if (Constants.EntityTypes.ENGINE === params) return "ENGINE";
        else if (Constants.EntityTypes.SETTING === params) return "SETTING";
        else if (Constants.EntityTypes.SCHEDULE_ASSIGNMENT === params) return "SCHEDULE_ASSIGNMENT";
        else if (Constants.EntityTypes.SCHEDULE === params) return "SCHEDULE";
        else if (Constants.EntityTypes.SYSTEM === params) return "SYSTEM";
        else if (Constants.EntityTypes.QUERY_TASK_DATA === params) return "QUERY_TASK_DATA";

        return "";
    }

    static decodeConstantsGatewayCommunicationRequestTypes(params) {
        if (Constants.GatewayCommunicationRequestTypes.SERVER_INITIATED_HIGH_PRIORITY === params) return "SERVER_INITIATED_HIGH_PRIORITY";
        else if (Constants.GatewayCommunicationRequestTypes.SERVER_INITIATED_NORMAL_PRIORITY === params) return "SERVER_INITIATED_NORMAL_PRIORITY";
        else if (Constants.GatewayCommunicationRequestTypes.GATEWAY_INITIATED === params) return "GATEWAY_INITIATED";

        return "";
    }

    static decodeConstantsCommandHistoryStatus(params) {
        if (Constants.CommandHistoryStatus.SUCCESS === params) return "SUCCESS";
        else if (Constants.CommandHistoryStatus.FAILURE === params) return "FAILURE";
        else if (Constants.CommandHistoryStatus.WAITING === params) return "WAITING";
        else if (Constants.CommandHistoryStatus.DELETED === params) return "DELETED";
        else if (Constants.CommandHistoryStatus.IN_PROGRESS === params) return "IN_PROGRESS";
        else if (Constants.CommandHistoryStatus.CANCELLED === params) return "CANCELLED";
        else if (Constants.CommandHistoryStatus.ORPHANED === params) return "ORPHANED";

        return "";
    }

    static decodeConstantsGatewayDataAvailableTypes(params) {
        if (Constants.GatewayDataAvailableTypes.DISCOVERED_DEVICES === params) return "DISCOVERED_DEVICES";
        else if (Constants.GatewayDataAvailableTypes.EVENTS === params) return "EVENTS";
        else if (Constants.GatewayDataAvailableTypes.COLLECTED_DATA === params) return "COLLECTED_DATA";
        else if (Constants.GatewayDataAvailableTypes.COMMAND_RESULTS === params) return "COMMAND_RESULTS";

        return "";
    }

    static decodeConstantsDeviceCommands(params) {
        if (Constants.DeviceCommands.CONNECT_LOAD === params) return "CONNECT_LOAD";
        else if (Constants.DeviceCommands.DISCONNECT_LOAD === params) return "DISCONNECT_LOAD";
        else if (Constants.DeviceCommands.READ_FULL_LOAD_PROFILE === params) return "READ_FULL_LOAD_PROFILE";
        else if (Constants.DeviceCommands.READ_POWER_QUALITY === params) return "READ_POWER_QUALITY";
        else if (Constants.DeviceCommands.READ_BILLING_DATA_ON_DEMAND === params) return "READ_BILLING_DATA_ON_DEMAND";
        else if (Constants.DeviceCommands.READ_SELF_BILLING_DATA === params) return "READ_SELF_BILLING_DATA";
        else if (Constants.DeviceCommands.READ_SECONDARY_BILLING_REGISTERS === params) return "READ_SECONDARY_BILLING_REGISTERS";
        else if (Constants.DeviceCommands.CONNECT_CONTROL_RELAY === params) return "CONNECT_CONTROL_RELAY";
        else if (Constants.DeviceCommands.DISCONNECT_CONTROL_RELAY === params) return "DISCONNECT_CONTROL_RELAY";
        else if (Constants.DeviceCommands.SET_LOAD_PROFILE_CONFIGURATION === params) return "SET_LOAD_PROFILE_CONFIGURATION";
        else if (Constants.DeviceCommands.UPDATE_FIRMWARE === params) return "UPDATE_FIRMWARE";
        else if (Constants.DeviceCommands.READ_DISPLAY_CONFIGURATION === params) return "READ_DISPLAY_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_DISPLAY_CONFIGURATION === params) return "SET_DISPLAY_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_ALARM_DISPLAY_CONFIGURATION === params) return "SET_ALARM_DISPLAY_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_PULSE_INPUT_CONFIGURATION === params) return "READ_PULSE_INPUT_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_INSTANTANEOUS_POWER === params) return "READ_INSTANTANEOUS_POWER";
        else if (Constants.DeviceCommands.READ_LOAD_STATUS === params) return "READ_LOAD_STATUS";
        else if (Constants.DeviceCommands.READ_FIRMWARE_VERSION === params) return "READ_FIRMWARE_VERSION";
        else if (Constants.DeviceCommands.SET_PULSE_INPUT_CONFIGURATION === params) return "SET_PULSE_INPUT_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_ACTIVE_TOU_CALENDAR === params) return "READ_ACTIVE_TOU_CALENDAR";
        else if (Constants.DeviceCommands.READ_PENDING_TOU_CALENDAR === params) return "READ_PENDING_TOU_CALENDAR";
        else if (Constants.DeviceCommands.SET_PENDING_TOU_CALENDAR === params) return "SET_PENDING_TOU_CALENDAR";

        // V2.1 commands
        else if (Constants.DeviceCommands.READ_DOWN_LIMIT === params) return "READ_DOWN_LIMIT";
        else if (Constants.DeviceCommands.SET_DOWN_LIMIT === params) return "SET_DOWN_LIMIT";
        else if (Constants.DeviceCommands.SET_DATE_TIME === params) return "SET_DATE_TIME";
        else if (Constants.DeviceCommands.READ_HISTORICAL_BILLING_DATA === params) return "READ_HISTORICAL_BILLING_DATA";

        // v2.2 Commands
        else if (Constants.DeviceCommands.READ_ALARM_POLLING_RATE === params) return "READ_ALARM_POLLING_RATE";
        else if (Constants.DeviceCommands.SET_ALARM_POLLING_RATE === params) return "SET_ALARM_POLLING_RATE";
        else if (Constants.DeviceCommands.READ_BILLING_SCHEDULE === params) return "READ_BILLING_SCHEDULE";
        else if (Constants.DeviceCommands.SET_BILLING_SCHEDULE === params) return "SET_BILLING_SCHEDULE";

        else if (Constants.DeviceCommands.READ_STATISTICS === params) return "READ_STATISTICS";
        else if (Constants.DeviceCommands.READ_AUTO_DISCOVERY_CONFIGURATION === params) return "READ_AUTO_DISCOVERY_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_AUTO_DISCOVERY_CONFIGURATION === params) return "SET_AUTO_DISCOVERY_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_EVENT_LOG === params) return "READ_EVENT_LOG";
        else if (Constants.DeviceCommands.READ_UTILITY_INFORMATION === params) return "READ_UTILITY_INFORMATION";
        else if (Constants.DeviceCommands.SET_UTILITY_INFORMATION === params) return "SET_UTILITY_INFORMATION";

        // V2.3 Commands
        else if (Constants.DeviceCommands.ADD_PREPAY_CREDIT === params) return "ADD_PREPAY_CREDIT";
        else if (Constants.DeviceCommands.CLEAR_PREPAY_CREDIT === params) return "CLEAR_PREPAY_CREDIT";
        else if (Constants.DeviceCommands.READ_PREPAY_CONFIGURATION === params) return "READ_PREPAY_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_PREPAY_CONFIGURATION === params) return "SET_PREPAY_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_TIME_ZONE_CONFIGURATION === params) return "READ_TIME_ZONE_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_TIME_ZONE_CONFIGURATION === params) return "SET_TIME_ZONE_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_PREPAY_CREDIT === params) return "READ_PREPAY_CREDIT";

        //V3.0 Commands
        else if (Constants.DeviceCommands.READ_DISCONNECT_CONFIGURATION === params) return "READ_DISCONNECT_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_DISCONNECT_CONFIGURATION === params) return "SET_DISCONNECT_CONFIGURATION";
        else if (Constants.DeviceCommands.WRITE_DATA === params) return "WRITE_DATA";
        else if (Constants.DeviceCommands.READ_CONTINUOUS_EVENT_LOG_CONFIGURATION === params) return "READ_CONTINUOUS_EVENT_LOG_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_CONTINUOUS_EVENT_LOG_CONFIGURATION === params) return "SET_CONTINUOUS_EVENT_LOG_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_STOP_MODE_CONFIGURATION === params) return "READ_STOP_MODE_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_STOP_MODE_CONFIGURATION === params) return "SET_STOP_MODE_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_POWER_QUALITY_CONFIGURATION === params) return "READ_POWER_QUALITY_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_POWER_QUALITY_CONFIGURATION === params) return "SET_POWER_QUALITY_CONFIGURATION";
        else if (Constants.DeviceCommands.RESET_POWER_QUALITY_STATISTICS === params) return "RESET_POWER_QUALITY_STATISTICS";
        else if (Constants.DeviceCommands.READ_SELF_READ_RETRIEVAL_CONFIGURATION === params) return "READ_SELF_READ_RETRIEVAL_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_SELF_READ_RETRIEVAL_CONFIGURATION === params) return "SET_SELF_READ_RETRIEVAL_CONFIGURATION";
        else if (Constants.DeviceCommands.ADD_ONE_TIME_READ_REQUEST === params) return "ADD_ONE_TIME_READ_REQUEST";
        else if (Constants.DeviceCommands.CLEAR_ONE_TIME_READ_REQUESTS === params) return "CLEAR_ONE_TIME_READ_REQUESTS";
        else if (Constants.DeviceCommands.READ_HISTORICAL_ONE_TIME_READ_DATA === params) return "READ_HISTORICAL_ONE_TIME_READ_DATA";
        else if (Constants.DeviceCommands.READ_ONE_TIME_READ_REQUESTS === params) return "READ_ONE_TIME_READ_REQUESTS";
        else if (Constants.DeviceCommands.RESET_DEMAND_VALUES === params) return "RESET_DEMAND_VALUES";
        else if (Constants.DeviceCommands.READ_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION === params) return "READ_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION === params) return "SET_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_DEMAND_CONFIGURATION === params) return "READ_DEMAND_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_DEMAND_CONFIGURATION === params) return "SET_DEMAND_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_LOAD_PROFILE_CONFIGURATION === params) return "READ_LOAD_PROFILE_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_LOAD_PROFILE_ON_DEMAND === params) return "READ_LOAD_PROFILE_ON_DEMAND";
        else if (Constants.DeviceCommands.READ_EVENT_LOG_CONFIGURATION === params) return "READ_EVENT_LOG_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_EVENT_LOG_CONFIGURATION === params) return "SET_EVENT_LOG_CONFIGURATION";

        //V4 Commands
        else if (Constants.DeviceCommands.READ_ATM_CONFIGURATION === params) return "READ_ATM_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_ATM_CONFIGURATION === params) return "SET_ATM_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_READ_SCHEDULE === params) return "READ_READ_SCHEDULE";
        else if (Constants.DeviceCommands.SET_READ_SCHEDULE === params) return "SET_READ_SCHEDULE";
        else if (Constants.DeviceCommands.READ_DATA_ON_DEMAND === params) return "READ_DATA_ON_DEMAND";
        else if (Constants.DeviceCommands.READ_PROVISIONING_IDENTIFIERS === params) return "READ_PROVISIONING_IDENTIFIERS";
        else if (Constants.DeviceCommands.SET_PROVISIONING_IDENTIFIERS === params) return "SET_PROVISIONING_IDENTIFIERS";

        //V4.1 Commands
        else if (Constants.DeviceCommands.SET_CONTROL_RELAY_CONFIGURATION === params) return "SET_CONTROL_RELAY_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_CONTROL_RELAY_CONFIGURATION === params) return "READ_CONTROL_RELAY_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_DATA_RECORD_HEADER_CONFIGURATION === params) return "READ_DATA_RECORD_HEADER_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_DATA_RECORD_HEADER_CONFIGURATION === params) return "SET_DATA_RECORD_HEADER_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_DATA_RECORD_HEADER_MAPPING === params) return "READ_DATA_RECORD_HEADER_MAPPING";
        else if (Constants.DeviceCommands.SET_DATA_RECORD_HEADER_MAPPING === params) return "SET_DATA_RECORD_HEADER_MAPPING";
        else if (Constants.DeviceCommands.READ_TIER_CONTROL_CONFIGURATION === params) return "READ_TIER_CONTROL_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_TIER_CONTROL_CONFIGURATION === params) return "SET_TIER_CONTROL_CONFIGURATION";
        else if (Constants.DeviceCommands.SEND_FILE === params) return "SEND_FILE";

        //V5 Commands
        else if (Constants.DeviceCommands.READ_LOCAL_DATA_ACCESS_CONFIGURATION === params) return "READ_LOCAL_DATA_ACCESS_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_LOCAL_DATA_ACCESS_CONFIGURATION === params) return "SET_LOCAL_DATA_ACCESS_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_MEASUREMENT_RATIO_CONFIGURATION === params) return "SET_MEASUREMENT_RATIO_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_MEASUREMENT_RATIO_CONFIGURATION === params) return "READ_MEASUREMENT_RATIO_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION === params) return "SET_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION === params) return "READ_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION";

        //V5.1 Commands
        else if (Constants.DeviceCommands.READ_MEMORY_CONFIGURATION === params) return "READ_MEMORY_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_MEMORY_CONFIGURATION === params) return "SET_MEMORY_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION === params) return "READ_LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION === params) return "SET_LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_GATEWAY_SETTINGS === params) return "READ_GATEWAY_SETTINGS";
        else if (Constants.DeviceCommands.SET_GATEWAY_SETTINGS === params) return "SET_GATEWAY_SETTINGS";

        //V5.2 Commands
        else if (Constants.DeviceCommands.READ_POWER_STATUS === params) return "READ_POWER_STATUS";
        else if (Constants.DeviceCommands.READ_ALARM_SETTINGS === params) return "READ_ALARM_SETTINGS";
        else if (Constants.DeviceCommands.SET_ALARM_SETTINGS === params) return "SET_ALARM_SETTINGS";
        else if (Constants.DeviceCommands.READ_DISCONNECT_THRESHOLDS_CONFIGURATION === params) return "READ_DISCONNECT_THRESHOLDS_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_DISCONNECT_THRESHOLDS_CONFIGURATION === params) return "SET_DISCONNECT_THRESHOLDS_CONFIGURATION";

        //v5.3 Commands
        else if (Constants.DeviceCommands.READ_TAMPER_CONFIGURATION === params) return "READ_TAMPER_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_TAMPER_CONFIGURATION === params) return "SET_TAMPER_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_MEP_CONFIGURATION === params) return "READ_MEP_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_MEP_CONFIGURATION === params) return "SET_MEP_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_KEY === params) return "SET_KEY";
        else if (Constants.DeviceCommands.READ_REGISTER_CONFIGURATION === params) return "READ_REGISTER_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_REGISTER_CONFIGURATION === params) return "SET_REGISTER_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_OPTICAL_PORT_CONFIGURATION === params) return "READ_OPTICAL_PORT_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_OPTICAL_PORT_CONFIGURATION === params) return "SET_OPTICAL_PORT_CONFIGURATION";

        //v5.4 Commands
        else if (Constants.DeviceCommands.SET_PLC_KEY === params) return "SET_PLC_KEY";
        else if (Constants.DeviceCommands.SET_PLC_SECURITY_CONFIGURATION === params) return "SET_PLC_SECURITY_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_PLC_SECURITY_CONFIGURATION === params) return "READ_PLC_SECURITY_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION === params) return "SET_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION === params) return "READ_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION";

        //v6.0 Commands
        else if (Constants.DeviceCommands.CLEAR_DEVICE_ALARMS === params) return "CLEAR_DEVICE_ALARMS";
        else if (Constants.DeviceCommands.READ_ALARM_CONFIGURATION === params) return "READ_ALARM_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_ALARM_CONFIGURATION === params) return "SET_ALARM_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_MODEM_CONFIGURATION === params) return "READ_MODEM_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_MODEM_CONFIGURATION === params) return "SET_MODEM_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION === params) return "READ_REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION";
        else if (Constants.DeviceCommands.SET_REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION === params) return "SET_REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION";
        else if (Constants.DeviceCommands.READ_MEP_IDENTIFIER === params) return "READ_MEP_IDENTIFIER";
        else if (Constants.DeviceCommands.READ_CONTROL_RELAYS === params) return "READ_CONTROL_RELAYS";

        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////
        /*        [Obsolete("v4.1 - has been superseded by the SET_CONTROL_RELAY_CONFIGURATION command")]*/
        else if (Constants.DeviceCommands.SET_CONTROL_RELAY_TIERS_STATUS === params) return "SET_CONTROL_RELAY_TIERS_STATUS";

        /*        [Obsolete("v4.1 - has been superseded by the SET_CONTROL_RELAY_CONFIGURATION command")]*/
        else if (Constants.DeviceCommands.SET_CONTROL_RELAY_TIERS === params) return "SET_CONTROL_RELAY_TIERS";

        /*        [Obsolete("v5.0 - no longer used")]*/
        else if (Constants.DeviceCommands.READ_INTERNAL_EXPANSION_MODULE_CARD_CONFIGURATION === params) return "READ_INTERNAL_EXPANSION_MODULE_CARD_CONFIGURATION";

        /*        [Obsolete("v5.2.000 - use SET_DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceCommands.SET_PRIMARY_MAXIMUM_POWER_LEVEL === params) return "SET_PRIMARY_MAXIMUM_POWER_LEVEL";
        /*        [Obsolete("v5.2.000 - use SET_DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceCommands.SET_MAXIMUM_POWER_LEVEL_DURATION === params) return "SET_MAXIMUM_POWER_LEVEL_DURATION";
        /*        [Obsolete("v5.2.000 - use READ_DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceCommands.READ_PRIMARY_MAXIMUM_POWER_LEVEL === params) return "READ_PRIMARY_MAXIMUM_POWER_LEVEL";
        /*        [Obsolete("v5.2.000 - use READ_DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceCommands.READ_MAXIMUM_POWER_LEVEL_DURATION === params) return "READ_MAXIMUM_POWER_LEVEL_DURATION";
        /*        [Obsolete("v5.2.000 - use SET_DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceCommands.SET_PRIMARY_MAXIMUM_POWER_STATUS === params) return "SET_PRIMARY_MAXIMUM_POWER_STATUS";
        /*        [Obsolete("v5.2.000 - use READ_DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceCommands.READ_PRIMARY_MAXIMUM_POWER_STATUS === params) return "READ_PRIMARY_MAXIMUM_POWER_STATUS";

        /*        [Obsolete("v6.0.000 - no longer used")]*/
        else if (Constants.DeviceCommands.READ_DELTA_LOAD_PROFILE === params) return "READ_DELTA_LOAD_PROFILE";
        /*        [Obsolete("v6.0.000 - no longer used")]*/
        else if (Constants.DeviceCommands.READ_CONTINUOUS_DELTA_LOAD_PROFILE === params) return "READ_CONTINUOUS_DELTA_LOAD_PROFILE";
        /*        [Obsolete("v6.0.000 - use READ_CONTROL_RELAYS command")]*/
        else if (Constants.DeviceCommands.READ_CONTROL_RELAY === params) return "READ_CONTROL_RELAY";
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        return "";
    }

    static decodeConstantsGatewayCommands(params) {
        if (Constants.GatewayCommands.UPDATE_FIRMWARE === params) return "UPDATE_FIRMWARE";
        else if (Constants.GatewayCommands.SET_PPP_USERNAME === params) return "SET_PPP_USERNAME";
        else if (Constants.GatewayCommands.SET_PPP_PASSWORD === params) return "SET_PPP_PASSWORD";
        else if (Constants.GatewayCommands.READ_GATEWAY_TO_SERVER_IP_ADDRESS === params) return "READ_GATEWAY_TO_SERVER_IP_ADDRESS";
        else if (Constants.GatewayCommands.SET_GATEWAY_TO_SERVER_IP_ADDRESS === params) return "SET_GATEWAY_TO_SERVER_IP_ADDRESS";
        else if (Constants.GatewayCommands.READ_STATISTICS === params) return "READ_STATISTICS";
        else if (Constants.GatewayCommands.SET_TOTAL_ENERGY_STATUS === params) return "SET_TOTAL_ENERGY_STATUS";
        else if (Constants.GatewayCommands.READ_FIRMWARE_VERSION === params) return "READ_FIRMWARE_VERSION";

        // V 2.0
        else if (Constants.GatewayCommands.BROADCAST_DISCONNECT_CONTROL_RELAY === params) return "BROADCAST_DISCONNECT_CONTROL_RELAY";
        else if (Constants.GatewayCommands.BROADCAST_CONNECT_CONTROL_RELAY === params) return "BROADCAST_CONNECT_CONTROL_RELAY";

        // V 2.1
        else if (Constants.GatewayCommands.READ_REPEATER_PATHS === params) return "READ_REPEATER_PATHS";
        else if (Constants.GatewayCommands.REBOOT === params) return "REBOOT";
        else if (Constants.GatewayCommands.DELETE_WAN_CONFIGURATION === params) return "DELETE_WAN_CONFIGURATION";

        //For ATM Function Scheduling
        else if (Constants.GatewayCommands.SET_PROCESS_CONFIGURATION === params) return "SET_PROCESS_CONFIGURATION";
        else if (Constants.GatewayCommands.READ_PROCESS_CONFIGURATION === params) return "READ_PROCESS_CONFIGURATION";

        else if (Constants.GatewayCommands.READ_DISCOVERED_DEVICES === params) return "READ_DISCOVERED_DEVICES";
        else if (Constants.GatewayCommands.READ_WAN_CONFIGURATION === params) return "READ_WAN_CONFIGURATION";
        else if (Constants.GatewayCommands.SET_WAN_CONFIGURATION === params) return "SET_WAN_CONFIGURATION";

        //Starting with v2.2:
        else if (Constants.GatewayCommands.SET_DEVICE_LIMIT === params) return "SET_DEVICE_LIMIT";
        else if (Constants.GatewayCommands.READ_DEVICE_LIMIT === params) return "READ_DEVICE_LIMIT";

        //Starting with v3.0
        else if (Constants.GatewayCommands.READ_EVENT_CONFIGURATION === params) return "READ_EVENT_CONFIGURATION";
        else if (Constants.GatewayCommands.SET_EVENT_CONFIGURATION === params) return "SET_EVENT_CONFIGURATION";
        else if (Constants.GatewayCommands.READ_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION === params) return "READ_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION";
        else if (Constants.GatewayCommands.SET_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION === params) return "SET_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION";

        //Starting with v4
        else if (Constants.GatewayCommands.READ_ATM_CONFIGURATION === params) return "READ_ATM_CONFIGURATION";
        else if (Constants.GatewayCommands.SET_ATM_CONFIGURATION === params) return "SET_ATM_CONFIGURATION";
        else if (Constants.GatewayCommands.ASSIGN_OPERATIONAL_PROFILE === params) return "ASSIGN_OPERATIONAL_PROFILE";

        //Version 4.1 commands
        else if (Constants.GatewayCommands.COLLECT_REPLACEMENT_INFORMATION === params) return "COLLECT_REPLACEMENT_INFORMATION";

        //Version 5.0 commands
        else if (Constants.GatewayCommands.READ_LOCAL_DATA_ACCESS_CONFIGURATION === params) return "READ_LOCAL_DATA_ACCESS_CONFIGURATION";
        else if (Constants.GatewayCommands.SET_LOCAL_DATA_ACCESS_CONFIGURATION === params) return "SET_LOCAL_DATA_ACCESS_CONFIGURATION";

        else if (Constants.GatewayCommands.READ_FEATURE_ACTIVATION === params) return "READ_FEATURE_ACTIVATION";
        else if (Constants.GatewayCommands.SET_FEATURE_ACTIVATION === params) return "SET_FEATURE_ACTIVATION";

        else if (Constants.GatewayCommands.READ_FTP_CONFIGURATION === params) return "READ_FTP_CONFIGURATION";
        else if (Constants.GatewayCommands.SET_FTP_CONFIGURATION === params) return "SET_FTP_CONFIGURATION";

        else if (Constants.GatewayCommands.BROADCAST_WRITE_DEVICE_DATA === params) return "BROADCAST_WRITE_DEVICE_DATA";
        else if (Constants.GatewayCommands.SEND_FILE === params) return "SEND_FILE";

        else if (Constants.GatewayCommands.READ_GPS_COORDINATES === params) return "READ_GPS_COORDINATES";
        else if (Constants.GatewayCommands.READ_SETTINGS === params) return "READ_SETTINGS";
        else if (Constants.GatewayCommands.SET_SETTINGS === params) return "SET_SETTINGS";

        ////////////////////////////////////////////////////////////////////////////////////////
        // Version 5.3 Commands
        else if (Constants.GatewayCommands.READ_LVGM === params) return "READ_LVGM";
        else if (Constants.GatewayCommands.READ_LVGM_CONFIGURATION === params) return "READ_LVGM_CONFIGURATION";
        else if (Constants.GatewayCommands.SET_LVGM_CONFIGURATION === params) return "SET_LVGM_CONFIGURATION";
        else if (Constants.GatewayCommands.SET_PHASE_CONFIGURATION === params) return "SET_PHASE_CONFIGURATION";
        else if (Constants.GatewayCommands.READ_PHASE_INFORMATION === params) return "READ_PHASE_INFORMATION";
        else if (Constants.GatewayCommands.READ_WAN_STATUS === params) return "READ_WAN_STATUS";
        else if (Constants.GatewayCommands.SET_KEY === params) return "SET_KEY";

        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayCommands.READ_CONTROLLER_CONFIGURATION === params) return "READ_CONTROLLER_CONFIGURATION";

        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayCommands.SET_CONTROLLER_CONFIGURATION === params) return "SET_CONTROLLER_CONFIGURATION";

        /*        [Obsolete("v5.4.000 - no replacement, no longer used")]*/
        else if (Constants.GatewayCommands.BROADCAST_SET_PRIMARY_MAXIMUM_POWER_STATUS === params) return "BROADCAST_SET_PRIMARY_MAXIMUM_POWER_STATUS";
        ////////////////////////////////////////////////////////////////////////////////////////

        return "";
    }

    static decodeConstantsDeviceEvents(params) {
        if (Constants.DeviceEvents.ADD_SUCCESS === params) return "ADD_SUCCESS";
        else if (Constants.DeviceEvents.ADD_FAILURE === params) return "ADD_FAILURE";
        else if (Constants.DeviceEvents.MOVE_SUCCESS === params) return "MOVE_SUCCESS";
        else if (Constants.DeviceEvents.MOVE_FAILURE === params) return "MOVE_FAILURE";
        else if (Constants.DeviceEvents.MOVE_CANCELLED === params) return "MOVE_CANCELLED";
        else if (Constants.DeviceEvents.ADD_CANCELLED === params) return "ADD_CANCELLED";
        else if (Constants.DeviceEvents.REMOVE_SUCCESS === params) return "REMOVE_SUCCESS";
        else if (Constants.DeviceEvents.REMOVE_FAILURE === params) return "REMOVE_FAILURE";
        else if (Constants.DeviceEvents.END_OF_BILLING_CYCLE_BILLING_DATA_AVAILABLE === params) return "END_OF_BILLING_CYCLE_BILLING_DATA_AVAILABLE";
        else if (Constants.DeviceEvents.READ_BILLING_DATA_ON_DEMAND_COMMAND_COMPLETE === params) return "READ_BILLING_DATA_ON_DEMAND_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_FULL_LOAD_PROFILE_COMMAND_COMPLETE === params) return "READ_FULL_LOAD_PROFILE_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_POWER_QUALITY_COMMAND_COMPLETE === params) return "READ_POWER_QUALITY_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.CONNECT_LOAD_COMMAND_COMPLETE === params) return "CONNECT_LOAD_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.DISCONNECT_LOAD_COMMAND_COMPLETE === params) return "DISCONNECT_LOAD_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_SELF_BILLING_DATA_COMMAND_COMPLETE === params) return "READ_SELF_BILLING_DATA_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_SECONDARY_BILLING_REGISTERS_COMMAND_COMPLETE === params) return "READ_SECONDARY_BILLING_REGISTERS_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.DISCONNECT_CONTROL_RELAY_COMMAND_COMPLETE === params) return "DISCONNECT_CONTROL_RELAY_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.CONNECT_CONTROL_RELAY_COMMAND_COMPLETE === params) return "CONNECT_CONTROL_RELAY_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_LOAD_PROFILE_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_LOAD_PROFILE_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.UPDATE_FIRMWARE_COMMAND_COMPLETE === params) return "UPDATE_FIRMWARE_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.CONTINUOUS_DELTA_LOAD_PROFILE_DATA_AVAILABLE === params) return "CONTINUOUS_DELTA_LOAD_PROFILE_DATA_AVAILABLE";

        //New in v2.0
        else if (Constants.DeviceEvents.READ_PULSE_INPUT_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_PULSE_INPUT_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_INSTANTANEOUS_POWER_COMMAND_COMPLETE === params) return "READ_INSTANTANEOUS_POWER_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_LOAD_STATUS_COMMAND_COMPLETE === params) return "READ_LOAD_STATUS_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_FIRMWARE_VERSION_COMMAND_COMPLETE === params) return "READ_FIRMWARE_VERSION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_PULSE_INPUT_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_PULSE_INPUT_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_ACTIVE_TOU_CALENDAR_COMMAND_COMPLETE === params) return "READ_ACTIVE_TOU_CALENDAR_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_PENDING_TOU_CALENDAR_COMMAND_COMPLETE === params) return "READ_PENDING_TOU_CALENDAR_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_PENDING_TOU_CALENDAR_COMMAND_COMPLETE === params) return "SET_PENDING_TOU_CALENDAR_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_DISPLAY_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_DISPLAY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_DISPLAY_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_DISPLAY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_ALARM_DISPLAY_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_ALARM_DISPLAY_CONFIGURATION_COMMAND_COMPLETE";

        //new in v2.1
        else if (Constants.DeviceEvents.READ_DOWN_LIMIT_COMMAND_COMPLETE === params) return "READ_DOWN_LIMIT_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_DOWN_LIMIT_COMMAND_COMPLETE === params) return "SET_DOWN_LIMIT_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_DATE_TIME_COMMAND_COMPLETE === params) return "SET_DATE_TIME_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_HISTORICAL_BILLING_DATA_COMMAND_COMPLETE === params) return "READ_HISTORICAL_BILLING_DATA_COMMAND_COMPLETE";

        else if (Constants.DeviceEvents.TEMP_DOWN === params) return "TEMP_DOWN";
        else if (Constants.DeviceEvents.PHASE_INACCURACY === params) return "PHASE_INACCURACY";
        else if (Constants.DeviceEvents.PHASE_ROTATION === params) return "PHASE_ROTATION";
        else if (Constants.DeviceEvents.PREPAY_CREDIT_EXHAUSTED === params) return "PREPAY_CREDIT_EXHAUSTED";
        else if (Constants.DeviceEvents.PREPAY_WARNING_ACKNOWLEDGEMENT === params) return "PREPAY_WARNING_ACKNOWLEDGEMENT";

        //New in v2.2
        else if (Constants.DeviceEvents.READ_ALARM_POLLING_RATE_COMMAND_COMPLETE === params) return "READ_ALARM_POLLING_RATE_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_ALARM_POLLING_RATE_COMMAND_COMPLETE === params) return "SET_ALARM_POLLING_RATE_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_BILLING_SCHEDULE_COMMAND_COMPLETE === params) return "READ_BILLING_SCHEDULE_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_BILLING_SCHEDULE_COMMAND_COMPLETE === params) return "SET_BILLING_SCHEDULE_COMMAND_COMPLETE";

        else if (Constants.DeviceEvents.INTERNAL_EXPANSION_MODULE_CARD_INSTALLATION_OR_REMOVAL === params) return "INTERNAL_EXPANSION_MODULE_CARD_INSTALLATION_OR_REMOVAL";
        else if (Constants.DeviceEvents.AUTO_DISCOVERY === params) return "AUTO_DISCOVERY";
        else if (Constants.DeviceEvents.MBUS_BILLING_READ_OVERFLOW_OCCURRED === params) return "MBUS_BILLING_READ_OVERFLOW_OCCURRED";
        else if (Constants.DeviceEvents.MBUS_FAILED_COMMUNICATIONS_ON_READ === params) return "MBUS_FAILED_COMMUNICATIONS_ON_READ";
        else if (Constants.DeviceEvents.MBUS_BILLING_READ_SERIAL_NUMBER_MISMATCH === params) return "MBUS_BILLING_READ_SERIAL_NUMBER_MISMATCH";
        else if (Constants.DeviceEvents.UNEXPECTED_END_OF_CYCLE_BILLING_DATA_AVAILABLE === params) return "UNEXPECTED_END_OF_CYCLE_BILLING_DATA_AVAILABLE";
        else if (Constants.DeviceEvents.READ_STATISTICS_COMMAND_COMPLETE === params) return "READ_STATISTICS_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_AUTO_DISCOVERY_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_AUTO_DISCOVERY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_AUTO_DISCOVERY_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_AUTO_DISCOVERY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_EVENT_LOG_COMMAND_COMPLETE === params) return "READ_EVENT_LOG_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.EVENT_LOG_PENDING_OVERFLOW === params) return "EVENT_LOG_PENDING_OVERFLOW";
        else if (Constants.DeviceEvents.READ_UTILITY_INFORMATION_COMMAND_COMPLETE === params) return "READ_UTILITY_INFORMATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_UTILITY_INFORMATION_COMMAND_COMPLETE === params) return "SET_UTILITY_INFORMATION_COMMAND_COMPLETE";

        // V2.3 Device Events
        else if (Constants.DeviceEvents.ADD_PREPAY_CREDIT_COMMAND_COMPLETE === params) return "ADD_PREPAY_CREDIT_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.CLEAR_PREPAY_CREDIT_COMMAND_COMPLETE === params) return "CLEAR_PREPAY_CREDIT_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_PREPAY_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_PREPAY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_PREPAY_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_PREPAY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_TIME_ZONE_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_TIME_ZONE_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_TIME_ZONE_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_TIME_ZONE_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_PREPAY_CREDIT_COMMAND_COMPLETE === params) return "READ_PREPAY_CREDIT_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.AUTO_TEST_POINT_STATUS === params) return "AUTO_TEST_POINT_STATUS";

        // V3.0 Device Events
        else if (Constants.DeviceEvents.LOAD_PROFILE_OVERFLOW === params) return "LOAD_PROFILE_OVERFLOW";
        else if (Constants.DeviceEvents.LOAD_DISCONNECT_STATUS_CHANGE === params) return "LOAD_DISCONNECT_STATUS_CHANGE";
        else if (Constants.DeviceEvents.CONTROL_RELAY_STATUS_CHANGE === params) return "CONTROL_RELAY_STATUS_CHANGE";
        else if (Constants.DeviceEvents.LOAD_PROFILE_BACKFILL_FAILED === params) return "LOAD_PROFILE_BACKFILL_FAILED";
        else if (Constants.DeviceEvents.POWER_QUALITY_EVENT_DETECTED === params) return "POWER_QUALITY_EVENT_DETECTED";
        else if (Constants.DeviceEvents.UNREAD_EVENT_LOG_ENTRY_EXISTS === params) return "UNREAD_EVENT_LOG_ENTRY_EXISTS";
        else if (Constants.DeviceEvents.READ_DISCONNECT_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_DISCONNECT_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_DISCONNECT_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_DISCONNECT_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.WRITE_DATA_COMMAND_COMPLETE === params) return "WRITE_DATA_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_CONTINUOUS_EVENT_LOG_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_CONTINUOUS_EVENT_LOG_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_CONTINUOUS_EVENT_LOG_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_CONTINUOUS_EVENT_LOG_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.BILLING_INTERFACE_MISMATCH === params) return "BILLING_INTERFACE_MISMATCH";
        else if (Constants.DeviceEvents.READ_STOP_MODE_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_STOP_MODE_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_STOP_MODE_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_STOP_MODE_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.EVENT_LOG_DATA_AVAILABLE === params) return "EVENT_LOG_DATA_AVAILABLE";
        else if (Constants.DeviceEvents.READ_POWER_QUALITY_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_POWER_QUALITY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_POWER_QUALITY_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_POWER_QUALITY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.RESET_POWER_QUALITY_STATISTICS_COMMAND_COMPLETE === params) return "RESET_POWER_QUALITY_STATISTICS_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_SELF_READ_RETRIEVAL_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_SELF_READ_RETRIEVAL_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_SELF_READ_RETRIEVAL_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_SELF_READ_RETRIEVAL_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.ADD_ONE_TIME_READ_REQUEST_COMMAND_COMPLETE === params) return "ADD_ONE_TIME_READ_REQUEST_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.CLEAR_ONE_TIME_READ_REQUESTS_COMMAND_COMPLETE === params) return "CLEAR_ONE_TIME_READ_REQUESTS_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_HISTORICAL_ONE_TIME_READ_DATA_COMMAND_COMPLETE === params) return "READ_HISTORICAL_ONE_TIME_READ_DATA_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.ONE_TIME_READ_DATA_AVAILABLE === params) return "ONE_TIME_READ_DATA_AVAILABLE";
        else if (Constants.DeviceEvents.UNEXPECTED_ONE_TIME_READ_DATA_AVAILABLE === params) return "UNEXPECTED_ONE_TIME_READ_DATA_AVAILABLE";
        else if (Constants.DeviceEvents.READ_ONE_TIME_READ_REQUESTS_COMMAND_COMPLETE === params) return "READ_ONE_TIME_READ_REQUESTS_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_STOPPED === params) return "CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_STOPPED";
        else if (Constants.DeviceEvents.READ_EVENT_LOG_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_EVENT_LOG_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_EVENT_LOG_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_EVENT_LOG_CONFIGURATION_COMMAND_COMPLETE";

        else if (Constants.DeviceEvents.CONFIGURATION_ERROR === params) return "CONFIGURATION_ERROR";
        else if (Constants.DeviceEvents.SYSTEM_RESET === params) return "SYSTEM_RESET";
        else if (Constants.DeviceEvents.RAM_FAILURE === params) return "RAM_FAILURE";
        else if (Constants.DeviceEvents.ROM_FAILURE === params) return "ROM_FAILURE";
        else if (Constants.DeviceEvents.NON_VOLATILE_MEMORY_FAILURE === params) return "NON_VOLATILE_MEMORY_FAILURE";
        else if (Constants.DeviceEvents.CLOCK_ERROR === params) return "CLOCK_ERROR";
        else if (Constants.DeviceEvents.MEASUREMENT_ERROR === params) return "MEASUREMENT_ERROR";
        else if (Constants.DeviceEvents.LOW_BATTERY === params) return "LOW_BATTERY";
        else if (Constants.DeviceEvents.POWER_FAILURE === params) return "POWER_FAILURE";
        else if (Constants.DeviceEvents.TAMPER_DETECTED === params) return "TAMPER_DETECTED";
        else if (Constants.DeviceEvents.REVERSE_ENERGY === params) return "REVERSE_ENERGY";
        else if (Constants.DeviceEvents.DATA_BACKUP_INCOMPLETE === params) return "DATA_BACKUP_INCOMPLETE";
        else if (Constants.DeviceEvents.DISCONNECT_SWITCH_ERROR === params) return "DISCONNECT_SWITCH_ERROR";
        else if (Constants.DeviceEvents.PHASE_LOSS === params) return "PHASE_LOSS";
        else if (Constants.DeviceEvents.PHASE_INVERSION === params) return "PHASE_INVERSION";
        else if (Constants.DeviceEvents.PLC_COMMUNICATION_FAILURE === params) return "PLC_COMMUNICATION_FAILURE";
        else if (Constants.DeviceEvents.GENERAL_ERROR === params) return "GENERAL_ERROR";
        else if (Constants.DeviceEvents.INVALID_PASSWORD === params) return "INVALID_PASSWORD";
        else if (Constants.DeviceEvents.REMOTE_COMMUNICATIONS_INACTIVE === params) return "REMOTE_COMMUNICATIONS_INACTIVE";
        else if (Constants.DeviceEvents.CURRENT_ON_MISSING_OR_UNUSED_PHASE === params) return "CURRENT_ON_MISSING_OR_UNUSED_PHASE";
        else if (Constants.DeviceEvents.PULSE_INPUT_1_TAMPER === params) return "PULSE_INPUT_1_TAMPER";
        else if (Constants.DeviceEvents.PULSE_INPUT_2_TAMPER === params) return "PULSE_INPUT_2_TAMPER";
        else if (Constants.DeviceEvents.MAGNETIC_TAMPER === params) return "MAGNETIC_TAMPER";
        else if (Constants.DeviceEvents.ACCESS_LOCKOUT_OVERRIDE === params) return "ACCESS_LOCKOUT_OVERRIDE";

        else if (Constants.DeviceEvents.UNEXPECTED_EVENT_LOG_DATA_AVAILABLE === params) return "UNEXPECTED_EVENT_LOG_DATA_AVAILABLE";
        else if (Constants.DeviceEvents.READ_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_DEMAND_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_DEMAND_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_DEMAND_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_DEMAND_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.RESET_DEMAND_VALUES_COMMAND_COMPLETE === params) return "RESET_DEMAND_VALUES_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_LOAD_PROFILE_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_LOAD_PROFILE_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_LOAD_PROFILE_ON_DEMAND_COMMAND_COMPLETE === params) return "READ_LOAD_PROFILE_ON_DEMAND_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.DEMAND_RESET_DATA_AVAILABLE === params) return "DEMAND_RESET_DATA_AVAILABLE";
        else if (Constants.DeviceEvents.UNEXPECTED_DEMAND_RESET_DATA_AVAILABLE === params) return "UNEXPECTED_DEMAND_RESET_DATA_AVAILABLE";
        else if (Constants.DeviceEvents.KEY_ISSUE_DETECTED === params) return "KEY_ISSUE_DETECTED";
        else if (Constants.DeviceEvents.KEY_ISSUE_RESOLVED === params) return "KEY_ISSUE_RESOLVED";
        else if (Constants.DeviceEvents.KEY_ISSUE_NOT_RESOLVED === params) return "KEY_ISSUE_NOT_RESOLVED";

        // v4 Device Events
        else if (Constants.DeviceEvents.READ_ATM_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_ATM_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_ATM_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_ATM_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.TOTAL_HARMONIC_DISTORTION_EVENT_DETECTED === params) return "TOTAL_HARMONIC_DISTORTION_EVENT_DETECTED";
        else if (Constants.DeviceEvents.READ_DATA_ON_DEMAND_COMMAND_COMPLETE === params) return "READ_DATA_ON_DEMAND_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.MEP_COMMUNICATIONS_FAILURE === params) return "MEP_COMMUNICATIONS_FAILURE";
        else if (Constants.DeviceEvents.MEP_READ_OVERFLOW_OCCURRED === params) return "MEP_READ_OVERFLOW_OCCURRED";
        else if (Constants.DeviceEvents.MEP_DATA_AVAILABLE === params) return "MEP_DATA_AVAILABLE";
        else if (Constants.DeviceEvents.LOAD_SIDE_VOLTAGE_WITH_OPEN_DISCONNECT_SWITCH === params) return "LOAD_SIDE_VOLTAGE_WITH_OPEN_DISCONNECT_SWITCH";
        else if (Constants.DeviceEvents.READ_READ_SCHEDULE_COMMAND_COMPLETE === params) return "READ_READ_SCHEDULE_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_READ_SCHEDULE_COMMAND_COMPLETE === params) return "SET_READ_SCHEDULE_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_PROVISIONING_IDENTIFIERS_COMMAND_COMPLETE === params) return "READ_PROVISIONING_IDENTIFIERS_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_PROVISIONING_IDENTIFIERS_COMMAND_COMPLETE === params) return "SET_PROVISIONING_IDENTIFIERS_COMMAND_COMPLETE";

        //v4.1 Device Events
        else if (Constants.DeviceEvents.READ_TIER_CONTROL_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_TIER_CONTROL_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_TIER_CONTROL_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_TIER_CONTROL_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.HIGH_FREQUENCY_NOISE_DETECTED === params) return "HIGH_FREQUENCY_NOISE_DETECTED";
        else if (Constants.DeviceEvents.SET_CONTROL_RELAY_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_CONTROL_RELAY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_CONTROL_RELAY_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_CONTROL_RELAY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_DATA_RECORD_HEADER_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_DATA_RECORD_HEADER_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_DATA_RECORD_HEADER_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_DATA_RECORD_HEADER_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_DATA_RECORD_HEADER_MAPPING_COMMAND_COMPLETE === params) return "READ_DATA_RECORD_HEADER_MAPPING_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_DATA_RECORD_HEADER_MAPPING_COMMAND_COMPLETE === params) return "SET_DATA_RECORD_HEADER_MAPPING_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.GATEWAY_REPLACEMENT_ADD_FAILURE === params) return "GATEWAY_REPLACEMENT_ADD_FAILURE";
        else if (Constants.DeviceEvents.GATEWAY_REPLACEMENT_ADD_SUCCESS === params) return "GATEWAY_REPLACEMENT_ADD_SUCCESS";
        else if (Constants.DeviceEvents.GATEWAY_REPLACEMENT_ADD_CANCELLED === params) return "GATEWAY_REPLACEMENT_ADD_CANCELLED";
        else if (Constants.DeviceEvents.SEND_FILE_COMMAND_COMPLETE === params) return "SEND_FILE_COMMAND_COMPLETE";

        //v5.0 Device Events
        else if (Constants.DeviceEvents.CONTINUOUS_DELTA_LOAD_PROFILE_DATA_MISSING === params) return "CONTINUOUS_DELTA_LOAD_PROFILE_DATA_MISSING";
        else if (Constants.DeviceEvents.READ_LOCAL_DATA_ACCESS_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_LOCAL_DATA_ACCESS_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_LOCAL_DATA_ACCESS_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_LOCAL_DATA_ACCESS_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.LOCAL_DATA_COLLECTION_STOPPED === params) return "LOCAL_DATA_COLLECTION_STOPPED";
        else if (Constants.DeviceEvents.SET_MEASUREMENT_RATIO_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_MEASUREMENT_RATIO_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_MEASUREMENT_RATIO_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_MEASUREMENT_RATIO_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.GATEWAY_REPLACEMENT_DEVICE_ADD_NOT_ATTEMPTED === params) return "GATEWAY_REPLACEMENT_DEVICE_ADD_NOT_ATTEMPTED";

        //v5.1 Device Events
        else if (Constants.DeviceEvents.LOAD_PROFILE_DATA_SET_COLLECTION_STOPPED === params) return "LOAD_PROFILE_DATA_SET_COLLECTION_STOPPED";
        else if (Constants.DeviceEvents.DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_1 === params) return "DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_1";
        else if (Constants.DeviceEvents.DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_2 === params) return "DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_2";
        else if (Constants.DeviceEvents.DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_3 === params) return "DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_3";
        else if (Constants.DeviceEvents.DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_4 === params) return "DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_4";
        else if (Constants.DeviceEvents.FULL_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_1 === params) return "FULL_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_1";
        else if (Constants.DeviceEvents.FULL_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_2 === params) return "FULL_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_2";
        else if (Constants.DeviceEvents.FULL_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_3 === params) return "FULL_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_3";
        else if (Constants.DeviceEvents.FULL_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_4 === params) return "FULL_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_4";
        else if (Constants.DeviceEvents.CONTINUOUS_DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_1 === params) return "CONTINUOUS_DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_1";
        else if (Constants.DeviceEvents.CONTINUOUS_DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_2 === params) return "CONTINUOUS_DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_2";
        else if (Constants.DeviceEvents.CONTINUOUS_DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_3 === params) return "CONTINUOUS_DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_3";
        else if (Constants.DeviceEvents.CONTINUOUS_DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_4 === params) return "CONTINUOUS_DELTA_LOAD_PROFILE_DATA_AVAILABLE_DATA_SET_4";


        //v5.1 Device Events
        else if (Constants.DeviceEvents.EXTERNAL_VARIABLE_ALARM_DETECTED === params) return "EXTERNAL_VARIABLE_ALARM_DETECTED";
        else if (Constants.DeviceEvents.READ_MEMORY_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_MEMORY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_MEMORY_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_MEMORY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_GATEWAY_SETTINGS_COMMAND_COMPLETE === params) return "SET_GATEWAY_SETTINGS_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_GATEWAY_SETTINGS_COMMAND_COMPLETE === params) return "READ_GATEWAY_SETTINGS_COMMAND_COMPLETE";

        //v5.2 Device Events
        else if (Constants.DeviceEvents.READ_POWER_STATUS_COMMAND_COMPLETE === params) return "READ_POWER_STATUS_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_ALARM_SETTINGS_COMMAND_COMPLETE === params) return "READ_ALARM_SETTINGS_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_ALARM_SETTINGS_COMMAND_COMPLETE === params) return "SET_ALARM_SETTINGS_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.INVALID_PASSWORD_VIA_OPTICAL === params) return "INVALID_PASSWORD_VIA_OPTICAL";
        else if (Constants.DeviceEvents.INVALID_PASSWORD_VIA_PLC === params) return "INVALID_PASSWORD_VIA_PLC";
        else if (Constants.DeviceEvents.UNBALANCED_VOLTAGE_DETECTED === params) return "UNBALANCED_VOLTAGE_DETECTED";
        else if (Constants.DeviceEvents.READ_DISCONNECT_THRESHOLDS_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_DISCONNECT_THRESHOLDS_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_DISCONNECT_THRESHOLDS_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_DISCONNECT_THRESHOLDS_CONFIGURATION_COMMAND_COMPLETE";

        //v5.3 Device Events
        else if (Constants.DeviceEvents.READ_DEVICE_TAMPER_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_DEVICE_TAMPER_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_DEVICE_TAMPER_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_DEVICE_TAMPER_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_MEP_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_MEP_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_MEP_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_MEP_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_KEY_COMMAND_COMPLETE === params) return "SET_KEY_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.KEY_CHANGED === params) return "KEY_CHANGED";
        else if (Constants.DeviceEvents.READ_DEVICE_REGISTER_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_DEVICE_REGISTER_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_DEVICE_REGISTER_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_DEVICE_REGISTER_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.COMMISSION_STATUS_CHANGED === params) return "COMMISSION_STATUS_CHANGED";
        else if (Constants.DeviceEvents.SET_OPTICAL_PORT_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_OPTICAL_PORT_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_OPTICAL_PORT_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_OPTICAL_PORT_CONFIGURATION_COMMAND_COMPLETE";

        //v5.4 Device Events
        else if (Constants.DeviceEvents.SET_PLC_KEY_COMMAND_COMPLETE === params) return "SET_PLC_KEY_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_PLC_SECURITY_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_PLC_SECURITY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_PLC_SECURITY_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_PLC_SECURITY_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.PLC_SECURITY_TAMPER === params) return "PLC_SECURITY_TAMPER";
        else if (Constants.DeviceEvents.SET_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION_COMMAND_COMPLETE";

        //V6.0 Device Events
        else if (Constants.DeviceEvents.CLEAR_DEVICE_ALARMS_COMMAND_COMPLETE === params) return "CLEAR_DEVICE_ALARMS_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.MBUS_GENERIC_ALARM_0 === params) return "MBUS_GENERIC_ALARM_0";
        else if (Constants.DeviceEvents.MBUS_GENERIC_ALARM_1 === params) return "MBUS_GENERIC_ALARM_1";
        else if (Constants.DeviceEvents.MBUS_GENERIC_ALARM_2 === params) return "MBUS_GENERIC_ALARM_2";
        else if (Constants.DeviceEvents.MBUS_GENERIC_ALARM_3 === params) return "MBUS_GENERIC_ALARM_3";
        else if (Constants.DeviceEvents.MBUS_GENERIC_ALARM_4 === params) return "MBUS_GENERIC_ALARM_4";
        else if (Constants.DeviceEvents.MBUS_GENERIC_ALARM_5 === params) return "MBUS_GENERIC_ALARM_5";
        else if (Constants.DeviceEvents.MBUS_GENERIC_ALARM_6 === params) return "MBUS_GENERIC_ALARM_6";
        else if (Constants.DeviceEvents.MBUS_GENERIC_ALARM_7 === params) return "MBUS_GENERIC_ALARM_7";
        else if (Constants.DeviceEvents.MEP_GENERIC_ALARM_0 === params) return "MEP_GENERIC_ALARM_0";
        else if (Constants.DeviceEvents.MEP_GENERIC_ALARM_1 === params) return "MEP_GENERIC_ALARM_1";
        else if (Constants.DeviceEvents.MEP_GENERIC_ALARM_2 === params) return "MEP_GENERIC_ALARM_2";
        else if (Constants.DeviceEvents.MEP_GENERIC_ALARM_3 === params) return "MEP_GENERIC_ALARM_3";
        else if (Constants.DeviceEvents.MEP_GENERIC_ALARM_4 === params) return "MEP_GENERIC_ALARM_4";
        else if (Constants.DeviceEvents.MEP_GENERIC_ALARM_5 === params) return "MEP_GENERIC_ALARM_5";
        else if (Constants.DeviceEvents.MEP_GENERIC_ALARM_6 === params) return "MEP_GENERIC_ALARM_6";
        else if (Constants.DeviceEvents.MEP_GENERIC_ALARM_7 === params) return "MEP_GENERIC_ALARM_7";
        else if (Constants.DeviceEvents.FIRMWARE_SEPARATION_VIOLATION === params) return "FIRMWARE_SEPARATION_VIOLATION";
        else if (Constants.DeviceEvents.NEUTRAL_DEVIATION_EARTH_FAULT === params) return "NEUTRAL_DEVIATION_EARTH_FAULT";
        else if (Constants.DeviceEvents.POINT_TO_POINT_SECURITY_ALARM === params) return "POINT_TO_POINT_SECURITY_ALARM";
        else if (Constants.DeviceEvents.POINT_TO_POINT_MODEM_ERROR === params) return "POINT_TO_POINT_MODEM_ERROR";
        else if (Constants.DeviceEvents.READ_ALARM_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_ALARM_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_ALARM_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_ALARM_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.READ_MODEM_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_MODEM_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_MODEM_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_MODEM_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.G3_ALARM === params) return "G3_ALARM";
        else if (Constants.DeviceEvents.MEP_APP_ERROR_RESPONSE_RECEIVED === params) return "MEP_APP_ERROR_RESPONSE_RECEIVED";
        else if (Constants.DeviceEvents.MBUS_APP_ERROR_RESPONSE_RECEIVED === params) return "MBUS_APP_ERROR_RESPONSE_RECEIVED";
        else if (Constants.DeviceEvents.READ_REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.SET_REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.MEP_IDENTIFIER_CHANGED === params) return "MEP_IDENTIFIER_CHANGED";
        else if (Constants.DeviceEvents.READ_MEP_IDENTIFIER_COMMAND_COMPLETE === params) return "READ_MEP_IDENTIFIER_COMMAND_COMPLETE";
        else if (Constants.DeviceEvents.G3_EVENT_LOGGED === params) return "G3_EVENT_LOGGED";
        else if (Constants.DeviceEvents.READ_CONTROL_RELAYS_COMMAND_COMPLETE === params) return "READ_CONTROL_RELAYS_COMMAND_COMPLETE";

        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////
        /*        [Obsolete("v4.1 - use CONTROL_RELAY_STATUS_CHANGE")]*/
        else if (Constants.DeviceEvents.CONTROL_RELAY_ACTIVATED === params) return "CONTROL_RELAY_ACTIVATED";

        /*        [Obsolete("v5.0 - not replaced")]*/
        else if (Constants.DeviceEvents.READ_INTERNAL_EXPANSION_MODULE_CARD_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_INTERNAL_EXPANSION_MODULE_CARD_CONFIGURATION_COMMAND_COMPLETE";

        /*        [Obsolete("v5.1 - no replacement")]*/
        else if (Constants.DeviceEvents.UNEXPECTED_DELTA_LOAD_PROFILE_AVAILABLE === params) return "UNEXPECTED_DELTA_LOAD_PROFILE_AVAILABLE";

        /*        [Obsolete("v5.1 - no replacement")]*/
        else if (Constants.DeviceEvents.UNEXPECTED_FULL_LOAD_PROFILE_AVAILABLE === params) return "UNEXPECTED_FULL_LOAD_PROFILE_AVAILABLE";

        /*        [Obsolete("v5.2 - use INAVLID_PASSWORD")]*/
        else if (Constants.DeviceEvents.INVALID_PASSWORD_OVER_OPTICAL === params) return "INVALID_PASSWORD_OVER_OPTICAL";

        /*        [Obsolete("v5.2.000 - use SET_DISCONNECT_THRESHOLDS_CONFIGURATION_COMMAND_COMPLETE")]*/
        else if (Constants.DeviceEvents.SET_PRIMARY_MAXIMUM_POWER_LEVEL_COMMAND_COMPLETE === params) return "SET_PRIMARY_MAXIMUM_POWER_LEVEL_COMMAND_COMPLETE";
        /*        [Obsolete("v5.2.000 - use SET_DISCONNECT_THRESHOLDS_CONFIGURATION_COMMAND_COMPLETE")]*/
        else if (Constants.DeviceEvents.SET_MAXIMUM_POWER_LEVEL_DURATION_COMMAND_COMPLETE === params) return "SET_MAXIMUM_POWER_LEVEL_DURATION_COMMAND_COMPLETE";
        /*        [Obsolete("v5.2.000 - use READ_DISCONNECT_THRESHOLDS_CONFIGURATION_COMMAND_COMPLETE")]*/
        else if (Constants.DeviceEvents.READ_PRIMARY_MAXIMUM_POWER_LEVEL_COMMAND_COMPLETE === params) return "READ_PRIMARY_MAXIMUM_POWER_LEVEL_COMMAND_COMPLETE";
        /*        [Obsolete("v5.2.000 - use READ_DISCONNECT_THRESHOLDS_CONFIGURATION_COMMAND_COMPLETE")]*/
        else if (Constants.DeviceEvents.READ_MAXIMUM_POWER_LEVEL_DURATION_COMMAND_COMPLETE === params) return "READ_MAXIMUM_POWER_LEVEL_DURATION_COMMAND_COMPLETE";
        /*        [Obsolete("v5.2.000 - use SET_DISCONNECT_THRESHOLDS_CONFIGURATION_COMMAND_COMPLETE")]*/
        else if (Constants.DeviceEvents.SET_PRIMARY_MAXIMUM_POWER_STATUS_COMMAND_COMPLETE === params) return "SET_PRIMARY_MAXIMUM_POWER_STATUS_COMMAND_COMPLETE";
        /*        [Obsolete("v5.2.000 - use READ_DISCONNECT_THRESHOLDS_CONFIGURATION_COMMAND_COMPLETE")]*/
        else if (Constants.DeviceEvents.READ_PRIMARY_MAXIMUM_POWER_STATUS_COMMAND_COMPLETE === params) return "READ_PRIMARY_MAXIMUM_POWER_STATUS_COMMAND_COMPLETE";

        /*        [Obsolete("v6.0.000 - no replacement")]*/
        else if (Constants.DeviceEvents.MEP_ALARMS === params) return "MEP_ALARMS";
        /*        [Obsolete("v6.0.000 - no replacement")]*/
        else if (Constants.DeviceEvents.MBUS_ALARMS === params) return "MBUS_ALARMS";
        /*        [Obsolete("v6.0.000 - no replacement")]*/
        else if (Constants.DeviceEvents.READ_DELTA_LOAD_PROFILE_COMMAND_COMPLETE === params) return "READ_DELTA_LOAD_PROFILE_COMMAND_COMPLETE";
        /*        [Obsolete("v6.0.000 - no replacement")]*/
        else if (Constants.DeviceEvents.READ_CONTINUOUS_DELTA_LOAD_PROFILE_COMMAND_COMPLETE === params) return "READ_CONTINUOUS_DELTA_LOAD_PROFILE_COMMAND_COMPLETE";
        /*        [Obsolete("v6.0.000 - use NEUTRAL_DEVIATION_EARTH_FAULT")]*/
        else if (Constants.DeviceEvents.NEUTRAL_BYPASS_DETECTED === params) return "NEUTRAL_BYPASS_DETECTED";
        /*        [Obsolete("v6.0.000 - use READ_CONTROL_RELAYS_COMMAND_COMPLETE")]*/
        else if (Constants.DeviceEvents.READ_CONTROL_RELAY_COMMAND_COMPLETE === params) return "READ_CONTROL_RELAY_COMMAND_COMPLETE";
        ////////////////////////////////////////////////////////////////////////////////////////

        return "";
    }

    static decodeConstantsGatewayEvents(params) {
        if (Constants.GatewayEvents.CONNECTION_ESTABLISHED === params) return "CONNECTION_ESTABLISHED";
        else if (Constants.GatewayEvents.CONNECTION_RELEASED === params) return "CONNECTION_RELEASED";
        else if (Constants.GatewayEvents.TOTAL_ENERGY_DATA_AVAILABLE === params) return "TOTAL_ENERGY_DATA_AVAILABLE";
        else if (Constants.GatewayEvents.SET_PPP_USERNAME_COMMAND_COMPLETE === params) return "SET_PPP_USERNAME_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_PPP_PASSWORD_COMMAND_COMPLETE === params) return "SET_PPP_PASSWORD_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.UPDATE_FIRMWARE_COMMAND_COMPLETE === params) return "UPDATE_FIRMWARE_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.READ_GATEWAY_TO_SERVER_IP_ADDRESS_COMMAND_COMPLETE === params) return "READ_GATEWAY_TO_SERVER_IP_ADDRESS_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_GATEWAY_TO_SERVER_IP_ADDRESS_COMMAND_COMPLETE === params) return "SET_GATEWAY_TO_SERVER_IP_ADDRESS_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.READ_STATISTICS_COMMAND_COMPLETE === params) return "READ_STATISTICS_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_TOTAL_ENERGY_STATUS_COMMAND_COMPLETE === params) return "SET_TOTAL_ENERGY_STATUS_COMMAND_COMPLETE";

        //new in v2.0
        else if (Constants.GatewayEvents.BROADCAST_DISCONNECT_CONTROL_RELAY_COMMAND_COMPLETE === params) return "BROADCAST_DISCONNECT_CONTROL_RELAY_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.BROADCAST_CONNECT_CONTROL_RELAY_COMMAND_COMPLETE === params) return "BROADCAST_CONNECT_CONTROL_RELAY_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.READ_FIRMWARE_VERSION_COMMAND_COMPLETE === params) return "READ_FIRMWARE_VERSION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.GENERAL_FAILURE_DATA_STILL_AVAILABLE === params) return "GENERAL_FAILURE_DATA_STILL_AVAILABLE";

        //New in v2.1
        else if (Constants.GatewayEvents.READ_REPEATER_PATHS_COMMAND_COMPLETE === params) return "READ_REPEATER_PATHS_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.REBOOT_COMMAND_COMPLETE === params) return "REBOOT_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.DELETE_WAN_CONFIGURATION_COMMAND_COMPLETE === params) return "DELETE_WAN_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.CONNECTION_FAILURE === params) return "CONNECTION_FAILURE";

        //New in v2.2
        else if (Constants.GatewayEvents.INVALID_IP_ADDRESS === params) return "INVALID_IP_ADDRESS";

        //New in V2.3
        else if (Constants.GatewayEvents.POWER_LINE_CARRIER_MESH_NETWORK_STATUS_DETECTED === params) return "POWER_LINE_CARRIER_MESH_NETWORK_STATUS_DETECTED";

        //For Read and Set Gateway process COnfiguration
        else if (Constants.GatewayEvents.READ_PROCESS_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_PROCESS_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_PROCESS_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_PROCESS_CONFIGURATION_COMMAND_COMPLETE";

        //For ReadGatewayDiscoveredDevices
        else if (Constants.GatewayEvents.READ_DISCOVERED_DEVICES_COMMAND_COMPLETE === params) return "READ_DISCOVERED_DEVICES_COMMAND_COMPLETE";

        //For ATM Event Processing
        else if (Constants.GatewayEvents.NEW_DISCOVERED_DEVICES === params) return "NEW_DISCOVERED_DEVICES";
        else if (Constants.GatewayEvents.NEW_ORPHANED_DEVICES === params) return "NEW_ORPHANED_DEVICES";
        else if (Constants.GatewayEvents.NEW_DISCOVERED_GATEWAYS === params) return "NEW_DISCOVERED_GATEWAYS";

        //For Gateway WAN Configuration
        else if (Constants.GatewayEvents.READ_WAN_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_WAN_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.WAN_CONFIGURATION_MISMATCH === params) return "WAN_CONFIGURATION_MISMATCH";
        else if (Constants.GatewayEvents.SET_WAN_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_WAN_CONFIGURATION_COMMAND_COMPLETE";

        //New DC-1000 Events in 2.1
        else if (Constants.GatewayEvents.CAPACITY_CHANGED === params) return "CAPACITY_CHANGED";
        else if (Constants.GatewayEvents.WAN_FAILURE === params) return "WAN_FAILURE";
        else if (Constants.GatewayEvents.WAN_SWITCH === params) return "WAN_SWITCH";
        else if (Constants.GatewayEvents.UNANSWERED_CALL_ALERT === params) return "UNANSWERED_CALL_ALERT";

        else if (Constants.GatewayEvents.SET_DEVICE_LIMIT_COMMAND_COMPLETE === params) return "SET_DEVICE_LIMIT_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.READ_DEVICE_LIMIT_COMMAND_COMPLETE === params) return "READ_DEVICE_LIMIT_COMMAND_COMPLETE";

        else if (Constants.GatewayEvents.UNKNOWN_CONNECTION === params) return "UNKNOWN_CONNECTION";
        else if (Constants.GatewayEvents.IP_ADDRESS_CHANGED === params) return "IP_ADDRESS_CHANGED";

        //New in 3.0
        else if (Constants.GatewayEvents.FLASH_LOW === params) return "FLASH_LOW";
        else if (Constants.GatewayEvents.RESOURCE_EXHAUSTION === params) return "RESOURCE_EXHAUSTION";
        else if (Constants.GatewayEvents.READ_EVENT_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_EVENT_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_EVENT_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_EVENT_CONFIGURATION_COMMAND_COMPLETE";

        else if (Constants.GatewayEvents.HARDWARE_FAILURE === params) return "HARDWARE_FAILURE";
        else if (Constants.GatewayEvents.SOFTWARE_FAILURE === params) return "SOFTWARE_FAILURE";
        else if (Constants.GatewayEvents.DEVICE_COMMUNICATION_STATUS === params) return "DEVICE_COMMUNICATION_STATUS";
        else if (Constants.GatewayEvents.RECEIVED_DEVICE_CAUSE_CODE === params) return "RECEIVED_DEVICE_CAUSE_CODE";
        else if (Constants.GatewayEvents.DETECTED_SEGMENT_DOWN === params) return "DETECTED_SEGMENT_DOWN";
        else if (Constants.GatewayEvents.UNPLANNED_REBOOT === params) return "UNPLANNED_REBOOT";
        else if (Constants.GatewayEvents.DEVICE_COMMUNICATION_FAILURE === params) return "DEVICE_COMMUNICATION_FAILURE";
        else if (Constants.GatewayEvents.SERVICE_TOOL_CONNECTED === params) return "SERVICE_TOOL_CONNECTED";
        else if (Constants.GatewayEvents.DETECTED_DEVICE_PHASE_CHANGE === params) return "DETECTED_DEVICE_PHASE_CHANGE";
        else if (Constants.GatewayEvents.DETECTED_DEVICE_CLOCK_ERROR === params) return "DETECTED_DEVICE_CLOCK_ERROR";
        else if (Constants.GatewayEvents.DETECTED_DEVICE_PHASE_INVERSION === params) return "DETECTED_DEVICE_PHASE_INVERSION";
        else if (Constants.GatewayEvents.PLANNED_REBOOT === params) return "PLANNED_REBOOT";
        else if (Constants.GatewayEvents.SECURITY_EXCEPTION === params) return "SECURITY_EXCEPTION";
        else if (Constants.GatewayEvents.WAN_EXCEPTION === params) return "WAN_EXCEPTION";
        else if (Constants.GatewayEvents.DETECTED_DEVICE_INVALID_DATA_AVAILABLE === params) return "DETECTED_DEVICE_INVALID_DATA_AVAILABLE";
        else if (Constants.GatewayEvents.PHASE_OUTAGE === params) return "PHASE_OUTAGE";

        else if (Constants.GatewayEvents.READ_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION_COMMAND_COMPLETE";

        else if (Constants.GatewayEvents.CAUSE_CODE === params) return "CAUSE_CODE";
        else if (Constants.GatewayEvents.UPDATE_FIRMWARE_COMPLETE_POST_PROCESSING_FAILURE === params) return "UPDATE_FIRMWARE_COMPLETE_POST_PROCESSING_FAILURE";
        else if (Constants.GatewayEvents.POWER_RESTORATION_DATA === params) return "POWER_RESTORATION_DATA";
        else if (Constants.GatewayEvents.INITIAL_COMMUNICATION_FAILURE === params) return "INITIAL_COMMUNICATION_FAILURE";

        //New in v4
        else if (Constants.GatewayEvents.READ_ATM_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_ATM_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_ATM_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_ATM_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.ASSIGN_OPERATIONAL_PROFILE_COMMAND_COMPLETE === params) return "ASSIGN_OPERATIONAL_PROFILE_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.OPERATIONAL_PROFILE_CHANGED === params) return "OPERATIONAL_PROFILE_CHANGED";

        //V4.1
        else if (Constants.GatewayEvents.COLLECT_REPLACEMENT_INFORMATION_COMMAND_COMPLETE === params) return "COLLECT_REPLACEMENT_INFORMATION_COMMAND_COMPLETE";

        else if (Constants.GatewayEvents.TIME_SYNCHRONIZATION_NOTIFICATION_THRESHOLD_EXCEEDED === params) return "TIME_SYNCHRONIZATION_NOTIFICATION_THRESHOLD_EXCEEDED";

        //V5
        else if (Constants.GatewayEvents.READ_LOCAL_DATA_ACCESS_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_LOCAL_DATA_ACCESS_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_LOCAL_DATA_ACCESS_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_LOCAL_DATA_ACCESS_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.LOCAL_DEVICE_CHANGE === params) return "LOCAL_DEVICE_CHANGE";
        else if (Constants.GatewayEvents.SSH_CONNECTION_FAILURE === params) return "SSH_CONNECTION_FAILURE";

        else if (Constants.GatewayEvents.READ_FEATURE_ACTIVATION_COMMAND_COMPLETE === params) return "READ_FEATURE_ACTIVATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_FEATURE_ACTIVATION_COMMAND_COMPLETE === params) return "SET_FEATURE_ACTIVATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.COMMUNICATION_SESSION_FAILURES === params) return "COMMUNICATION_SESSION_FAILURES";
        else if (Constants.GatewayEvents.UNEXPECTED_FTP_PORT_CHANGE === params) return "UNEXPECTED_FTP_PORT_CHANGE";
        else if (Constants.GatewayEvents.READ_FTP_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_FTP_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_FTP_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_FTP_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.TEMPERATURE_ALERT === params) return "TEMPERATURE_ALERT";
        else if (Constants.GatewayEvents.CONFIGURATION_ERROR === params) return "CONFIGURATION_ERROR";
        else if (Constants.GatewayEvents.DETECTED_DEVICE_BROWN_OUT === params) return "DETECTED_DEVICE_BROWN_OUT";
        else if (Constants.GatewayEvents.MODEM_STATUS_UPDATE === params) return "MODEM_STATUS_UPDATE";
        else if (Constants.GatewayEvents.EXTERNAL_EVENT_0 === params) return "EXTERNAL_EVENT_0";
        else if (Constants.GatewayEvents.BROADCAST_WRITE_DEVICE_DATA_COMMAND_COMPLETE === params) return "BROADCAST_WRITE_DEVICE_DATA_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SEND_FILE_COMMAND_COMPLETE === params) return "SEND_FILE_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SEND_FILE_COMPLETE_POST_PROCESSING_FAILURE === params) return "SEND_FILE_COMPLETE_POST_PROCESSING_FAILURE";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_0 === params) return "APPLICATION_DATA_AVAILABLE_0";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_1 === params) return "APPLICATION_DATA_AVAILABLE_1";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_2 === params) return "APPLICATION_DATA_AVAILABLE_2";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_3 === params) return "APPLICATION_DATA_AVAILABLE_3";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_4 === params) return "APPLICATION_DATA_AVAILABLE_4";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_5 === params) return "APPLICATION_DATA_AVAILABLE_5";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_6 === params) return "APPLICATION_DATA_AVAILABLE_6";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_7 === params) return "APPLICATION_DATA_AVAILABLE_7";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_8 === params) return "APPLICATION_DATA_AVAILABLE_8";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_9 === params) return "APPLICATION_DATA_AVAILABLE_9";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_10 === params) return "APPLICATION_DATA_AVAILABLE_10";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_11 === params) return "APPLICATION_DATA_AVAILABLE_11";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_12 === params) return "APPLICATION_DATA_AVAILABLE_12";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_13 === params) return "APPLICATION_DATA_AVAILABLE_13";
        else if (Constants.GatewayEvents.APPLICATION_DATA_AVAILABLE_14 === params) return "APPLICATION_DATA_AVAILABLE_14";

        else if (Constants.GatewayEvents.READ_GPS_COORDINATES_COMMAND_COMPLETE === params) return "READ_GPS_COORDINATES_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.GPS_COORDINATES_REPORTED === params) return "GPS_COORDINATES_REPORTED";

        else if (Constants.GatewayEvents.CLIENT_PROCESS_RESTART_OCCURRED === params) return "CLIENT_PROCESS_RESTART_OCCURRED";
        else if (Constants.GatewayEvents.CONFIGURATION_STATE_CHANGE_REPORTED === params) return "CONFIGURATION_STATE_CHANGE_REPORTED";
        else if (Constants.GatewayEvents.CRITICAL_MESSAGE_LOG_REPORTED === params) return "CRITICAL_MESSAGE_LOG_REPORTED";
        else if (Constants.GatewayEvents.WIRELESS_MAC_ID_LOGIN_FAILURE === params) return "WIRELESS_MAC_ID_LOGIN_FAILURE";
        else if (Constants.GatewayEvents.WIRELESS_PROTECTED_ACCESS_LOGIN_FAILURE === params) return "WIRELESS_PROTECTED_ACCESS_LOGIN_FAILURE";
        else if (Constants.GatewayEvents.COMMUNICATION_PROTOCOL_SECURITY_LOGIN_FAILURE === params) return "COMMUNICATION_PROTOCOL_SECURITY_LOGIN_FAILURE";
        else if (Constants.GatewayEvents.COMMUNICATION_PROTOCOL_SECURITY_LOCKOUT === params) return "COMMUNICATION_PROTOCOL_SECURITY_LOCKOUT";


        //V5.1
        else if (Constants.GatewayEvents.TAMPER_DETECTED === params) return "TAMPER_DETECTED";
        else if (Constants.GatewayEvents.DETECTED_INVALID_DEVICE_LOAD_PROFILE_DATA_SET_COLLECTION_REQUESTED === params) return "DETECTED_INVALID_DEVICE_LOAD_PROFILE_DATA_SET_COLLECTION_REQUESTED";
        else if (Constants.GatewayEvents.SET_SETTINGS_COMMAND_COMPLETE === params) return "SET_SETTINGS_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.READ_SETTINGS_COMMAND_COMPLETE === params) return "READ_SETTINGS_COMMAND_COMPLETE";


        //V5.3
        else if (Constants.GatewayEvents.READ_LVGM_COMMAND_COMPLETE === params) return "READ_LVGM_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.READ_LVGM_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_LVGM_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_LVGM_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_LVGM_CONFIGURATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.READ_PHASE_INFORMATION_COMMAND_COMPLETE === params) return "READ_PHASE_INFORMATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_PHASE_INFORMATION_COMMAND_COMPLETE === params) return "SET_PHASE_INFORMATION_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.HARDWARE_CONFIGURATION_CHANGE === params) return "HARDWARE_CONFIGURATION_CHANGE";
        else if (Constants.GatewayEvents.READ_WAN_STATUS_COMMAND_COMPLETE === params) return "READ_WAN_STATUS_COMMAND_COMPLETE";
        else if (Constants.GatewayEvents.SET_GATEWAY_KEY_COMMAND_COMPLETE === params) return "SET_GATEWAY_KEY_COMMAND_COMPLETE";

        // 6.0
        else if (Constants.GatewayEvents.PROVISIONING_TOOL_CONNECTED === params) return "PROVISIONING_TOOL_CONNECTED";
        else if (Constants.GatewayEvents.TIME_STALE === params) return "TIME_STALE";
        else if (Constants.GatewayEvents.RESOURCE_ADDED === params) return "RESOURCE_ADDED";
        else if (Constants.GatewayEvents.RESOURCE_DELETED === params) return "RESOURCE_DELETED";
        else if (Constants.GatewayEvents.PROPERTY_MODIFIED === params) return "PROPERTY_MODIFIED";


        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////
        /*        [Obsolete("v5.0 - use POWER_LINE_CARRIER_MESH_NETWORK_STATUS_DETECTED")]*/
        else if (Constants.GatewayEvents.MESH_STATUS_DETECTED === params) return "MESH_STATUS_DETECTED";

        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayEvents.READ_CONTROLLER_CONFIGURATION_COMMAND_COMPLETE === params) return "READ_CONTROLLER_CONFIGURATION_COMMAND_COMPLETE";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayEvents.SET_CONTROLLER_CONFIGURATION_COMMAND_COMPLETE === params) return "SET_CONTROLLER_CONFIGURATION_COMMAND_COMPLETE";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayEvents.CONTROLLER_CONFIGURATION_VERSION_CHANGED === params) return "CONTROLLER_CONFIGURATION_VERSION_CHANGED";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayEvents.CONFIGURATION_STATE_CHANGED === params) return "CONFIGURATION_STATE_CHANGED";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayEvents.REPLACEMENT_CONTROLLER_CONFIGURATION_UPDATED === params) return "REPLACEMENT_CONTROLLER_CONFIGURATION_UPDATED";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayEvents.NODE_TO_NODE_NETWORK_MINIMUM_PEER_COUNT_THRESHOLD_EXCEEDED === params) return "NODE_TO_NODE_NETWORK_MINIMUM_PEER_COUNT_THRESHOLD_EXCEEDED";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayEvents.BACKUP_POWER_THRESHOLD_EXCEEDED === params) return "BACKUP_POWER_THRESHOLD_EXCEEDED";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayEvents.WIRELESS_ACCESS_POINT_INTRUSION_LOCKOUT_OCCURRED === params) return "WIRELESS_ACCESS_POINT_INTRUSION_LOCKOUT_OCCURRED";
        /*        [Obsolete("v5.4.000 - no replacement, no longer used")]*/
        else if (Constants.GatewayEvents.BROADCAST_SET_PRIMARY_MAXIMUM_POWER_STATUS_COMMAND_COMPLETE === params) return "BROADCAST_SET_PRIMARY_MAXIMUM_POWER_STATUS_COMMAND_COMPLETE";
        ////////////////////////////////////////////////////////////////////////////////////////

        return "";
    }

    static decodeConstantsSystemEvents(params) {
        if (Constants.SystemEvents.COMMAND_FAILURE === params) return "COMMAND_FAILURE";
        else if (Constants.SystemEvents.ENGINE_STARTED === params) return "ENGINE_STARTED";
        else if (Constants.SystemEvents.ENGINE_STOPPED === params) return "ENGINE_STOPPED";
        else if (Constants.SystemEvents.SECURITY_ALERT === params) return "SECURITY_ALERT";
        else if (Constants.SystemEvents.SERVER_ERROR === params) return "SERVER_ERROR";

        //New in v4
        else if (Constants.SystemEvents.ATM_PROCESS_DETECTED_INVALID_GATEWAY_VERSION === params) return "ATM_PROCESS_DETECTED_INVALID_GATEWAY_VERSION";
        else if (Constants.SystemEvents.ATM_PROCESS_FAILED_TO_ASSIGN_DEVICE === params) return "ATM_PROCESS_FAILED_TO_ASSIGN_DEVICE";

        //New in v4.1
        else if (Constants.SystemEvents.UNSUPPORTED_VERSION_DETECTED === params) return "UNSUPPORTED_VERSION_DETECTED";

        //New in v5.0
        else if (Constants.SystemEvents.COMMAND_CANCELLED === params) return "COMMAND_CANCELLED";
        else if (Constants.SystemEvents.ARCHIVE_PROCESSING_COMPLETE === params) return "ARCHIVE_PROCESSING_COMPLETE";
        else if (Constants.SystemEvents.ORPHANED_COMMAND_HISTORY_PROCESSING_COMPLETE === params) return "ORPHANED_COMMAND_HISTORY_PROCESSING_COMPLETE";
        else if (Constants.SystemEvents.IMPORT_PROCESSING_COMPLETE === params) return "IMPORT_PROCESSING_COMPLETE";
        else if (Constants.SystemEvents.EXPORT_PROCESSING_COMPLETE === params) return "EXPORT_PROCESSING_COMPLETE";
        else if (Constants.SystemEvents.COMMANDS_QUEUED === params) return "COMMANDS_QUEUED";

        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////

        /*        [Obsolete("v3.0 - no longer used, replaced by individual GatewayEvents & DeviceEvents constants")]*/
        else if (Constants.SystemEvents.DC1000_EVENT === params) return "DC1000_EVENT";
        ////////////////////////////////////////////////////////////////////////////////////////

        return "";
    }

    static decodeConstantsDC1000Resources(params) {
        if (Constants.DC1000Resources.NM_NODE === params) return "NM_NODE";
        else if (Constants.DC1000Resources.DCX_RESOURCE_STATUS === params) return "DCX_RESOURCE_STATUS";
        else if (Constants.DC1000Resources.DCX_NODE_STATUS === params) return "DCX_NODE_STATUS";
        else if (Constants.DC1000Resources.DCX_DEVICE_CONFIG === params) return "DCX_DEVICE_CONFIG";
        else if (Constants.DC1000Resources.DCX_DEVICE_STATUS === params) return "DCX_DEVICE_STATUS";
        else if (Constants.DC1000Resources.DCX_DEVICE_UPDATE === params) return "DCX_DEVICE_UPDATE";
        else if (Constants.DC1000Resources.DCX_SEGMENT_CONFIG === params) return "DCX_SEGMENT_CONFIG";
        else if (Constants.DC1000Resources.DCX_SEGMENT_STATUS === params) return "DCX_SEGMENT_STATUS";
        else if (Constants.DC1000Resources.DCX_EVENT_CONFIG === params) return "DCX_EVENT_CONFIG";
        else if (Constants.DC1000Resources.DCX_EVENT === params) return "DCX_EVENT";
        else if (Constants.DC1000Resources.DCX_FUNCTION_CONFIG === params) return "DCX_FUNCTION_CONFIG";
        else if (Constants.DC1000Resources.DCX_FUNCTION_STATUS === params) return "DCX_FUNCTION_STATUS";
        else if (Constants.DC1000Resources.DCX_OPERATION === params) return "DCX_OPERATION";
        else if (Constants.DC1000Resources.DCX_OPERATION_STATUS === params) return "DCX_OPERATION_STATUS";
        else if (Constants.DC1000Resources.DCX_RESULT === params) return "DCX_RESULT";
        else if (Constants.DC1000Resources.DCX_MESSAGE === params) return "DCX_MESSAGE";
        else if (Constants.DC1000Resources.DCX_TIMEZONE_CONFIG === params) return "DCX_TIMEZONE_CONFIG";
        else if (Constants.DC1000Resources.DCX_TIMEZONE_STATUS === params) return "DCX_TIMEZONE_STATUS";
        else if (Constants.DC1000Resources.DCX_DATA === params) return "DCX_DATA";
        else if (Constants.DC1000Resources.DCX_MEP_DEVICE_CONFIG === params) return "DCX_MEP_DEVICE_CONFIG";
        else if (Constants.DC1000Resources.DCX_MEP_DEVICE_STATUS === params) return "DCX_MEP_DEVICE_STATUS";
        else if (Constants.DC1000Resources.DCX_DISCOVERED_DEVICE === params) return "DCX_DISCOVERED_DEVICE";
        else if (Constants.DC1000Resources.DCX_WAN_CONFIG === params) return "DCX_WAN_CONFIG";
        else if (Constants.DC1000Resources.DCX_WAN_STATUS === params) return "DCX_WAN_STATUS";
        else if (Constants.DC1000Resources.DCX_IDR === params) return "DCX_IDR";
        else if (Constants.DC1000Resources.DCX_MEP_UPDATE === params) return "DCX_MEP_UPDATE";
        else if (Constants.DC1000Resources.DCX_DEVICE_PROGRAM_ID === params) return "DCX_DEVICE_PROGRAM_ID";
        else if (Constants.DC1000Resources.DCX_DEVICE_UPDATE_STATUS === params) return "DCX_DEVICE_UPDATE_STATUS";
        else if (Constants.DC1000Resources.DCX_MEP_UPDATE_STATUS === params) return "DCX_MEP_UPDATE_STATUS";
        else if (Constants.DC1000Resources.DCX_LOCAL_DATA_GROUP === params) return "DCX_LOCAL_DATA_GROUP";
        else if (Constants.DC1000Resources.DCX_LOCAL_DATA_CONFIG === params) return "DCX_LOCAL_DATA_CONFIG";
        else if (Constants.DC1000Resources.DCX_LOCAL_DATA_STATUS === params) return "DCX_LOCAL_DATA_STATUS";
        else if (Constants.DC1000Resources.DCX_LOCAL_EVENT === params) return "DCX_LOCAL_EVENT";
        else if (Constants.DC1000Resources.DCX_DC_UPGRADE_CONFIG === params) return "DCX_DC_UPGRADE_CONFIG";
        else if (Constants.DC1000Resources.DCX_DC_UPGRADE_STATUS === params) return "DCX_DC_UPGRADE_STATUS";
        else if (Constants.DC1000Resources.DCX_RESOURCE_CONFIG === params) return "DCX_RESOURCE_CONFIG";
        else if (Constants.DC1000Resources.DCX_TOP_SECTION === params) return "DCX_TOP_SECTION";
        else if (Constants.DC1000Resources.DCX_LVGM_CONFIG === params) return "DCX_LVGM_CONFIG";
        else if (Constants.DC1000Resources.DCX_LVGM_STATUS === params) return "DCX_LVGM_STATUS";

        return "";
    }

    // Contains the list of Process Configuration Status Types
    static decodeConstantsProcessConfigurationStatus(params) {
        if (Constants.ProcessConfigurationStatus.ENABLED === params) return "ENABLED";
        else if (Constants.ProcessConfigurationStatus.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsApplicationLevelAuthenticationStatusTypes(params) {
        if (Constants.ApplicationLevelAuthenticationStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.ApplicationLevelAuthenticationStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsGatewayEncryptionStatusTypes(params) {
        if (Constants.GatewayEncryptionStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.GatewayEncryptionStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsGatewayWANConfigurationStatusTypes(params) {
        if (Constants.GatewayWANConfigurationStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.GatewayWANConfigurationStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsGatewayOutboundCHAPStatusTypes(params) {
        if (Constants.GatewayOutboundCHAPStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.GatewayOutboundCHAPStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsGatewayInboundCHAPStatusTypes(params) {
        if (Constants.GatewayInboundCHAPStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.GatewayInboundCHAPStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsGatewayPAPStatusTypes(params) {
        if (Constants.GatewayPAPStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.GatewayPAPStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsGatewayPortSpeedTypes(params) {
        if (Constants.GatewayPortSpeedTypes.SLOW === params) return "SLOW";
        else if (Constants.GatewayPortSpeedTypes.FAST === params) return "FAST";

        return "";
    }

    static decodeConstantsGatewayModemCommandTypes(params) {
        if (Constants.GatewayModemCommandTypes.AT_COMMANDS === params) return "AT_COMMANDS";
        else if (Constants.GatewayModemCommandTypes.DIRECT_CONNECTION === params) return "DIRECT_CONNECTION";

        return "";
    }

    static decodeConstantsGatewayModemConnectTypes(params) {
        if (Constants.GatewayModemConnectTypes.TEMPORARY === params) return "TEMPORARY";
        else if (Constants.GatewayModemConnectTypes.PERMANENT === params) return "PERMANENT";

        return "";
    }

    static decodeConstantsGatewayPPPConnectionTypes(params) {
        if (Constants.GatewayPPPConnectionTypes.NO_RECONNECT === params) return "NO_RECONNECT";
        else if (Constants.GatewayPPPConnectionTypes.RECONNECT === params) return "RECONNECT";

        return "";
    }

    static decodeConstantsGatewayPowerLineCarrierCommunicationStatusTypes(params) {
        if (Constants.GatewayPowerLineCarrierCommunicationStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.GatewayPowerLineCarrierCommunicationStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsGatewayModemAnswerTypes(params) {
        if (Constants.GatewayModemAnswerTypes.AUTO_ANSWER === params) return "AUTO_ANSWER";
        else if (Constants.GatewayModemAnswerTypes.OUTBOUND_ONLY === params) return "OUTBOUND_ONLY";

        return "";
    }

    static decodeConstantsGatewayAuthenticationTypes(params) {
        if (Constants.GatewayAuthenticationTypes.PPP === params) return "PPP";
        else if (Constants.GatewayAuthenticationTypes.ISP === params) return "ISP";

        return "";
    }

    static decodeConstantsPowerQualityStatisticTypes(params) {
        if (Constants.PowerQualityStatisticTypes.MINIMUM_AND_MAXIMUM_FREQUENCIES === params) return "MINIMUM_AND_MAXIMUM_FREQUENCIES";

        return "";
    }

    static decodeConstantsLocalDataAccessConfiguredOnDC(params) {
        if (Constants.LocalDataAccessConfiguredOnDC.YES === params) return "YES";
        else if (Constants.LocalDataAccessConfiguredOnDC.NO === params) return "NO";

        return "";
    }

    static decodeConstantsLocalDataCollectionStoppedReasonTypes(params) {
        if (Constants.LocalDataCollectionStoppedReasonTypes.GATEWAY_VERSION_NOT_SUPPORTED === params) return "GATEWAY_VERSION_NOT_SUPPORTED";
        else if (Constants.LocalDataCollectionStoppedReasonTypes.SET_LOCAL_DATA_ACCESS_CONFIGURATION_COMMAND_FAILED === params) return "SET_LOCAL_DATA_ACCESS_CONFIGURATION_COMMAND_FAILED";

        return "";
    }

    static decodeConstantsProcessConfigurationID(params) {
        if (Constants.ProcessConfigurationID.DELTA_LOAD_PROFILE === params) return "DELTA_LOAD_PROFILE";
        else if (Constants.ProcessConfigurationID.DISCOVER_DEVICES === params) return "DISCOVER_DEVICES";
        else if (Constants.ProcessConfigurationID.PRIORITY_FIND_ORPHANS === params) return "PRIORITY_FIND_ORPHANS";
        else if (Constants.ProcessConfigurationID.CONTINUOUS_EVENT_LOG === params) return "CONTINUOUS_EVENT_LOG";
        else if (Constants.ProcessConfigurationID.PRIORITY_CONTINUOUS_EVENT_LOG === params) return "PRIORITY_CONTINUOUS_EVENT_LOG";
        else if (Constants.ProcessConfigurationID.LOW_VOLTAGE_GRID_MAP === params) return "LOW_VOLTAGE_GRID_MAP";

        return "";
    }

    // Commands available to a TaskProcessor
    static decodeConstantsTaskProcessorCommands(params) {
        if (Constants.TaskProcessorCommands.START_ENGINE === params) return "START_ENGINE";
        else if (Constants.TaskProcessorCommands.STOP_ENGINE === params) return "STOP_ENGINE";


        return "";
    }

    static decodeConstantsPhaseTypeID(params) {
        if (Constants.PhaseTypeID.UNKNOWN === params) return "UNKNOWN";
        else if (Constants.PhaseTypeID.L1 === params) return "L1";
        else if (Constants.PhaseTypeID.L2 === params) return "L2";
        else if (Constants.PhaseTypeID.L3 === params) return "L3";
        else if (Constants.PhaseTypeID.L1_L2_L3 === params) return "L1_L2_L3";

        return "";
    }

    static decodeConstantsMeterLonTalkKeyStatus(params) {
        /// <summary>
        /// The key is waiting to be attempted
        /// </summary>
        if (Constants.MeterLonTalkKeyStatus.PENDING === params) return "PENDING";
        else if (Constants.MeterLonTalkKeyStatus.LAST_KNOWN_GOOD === params) return "LAST_KNOWN_GOOD";
        else if (Constants.MeterLonTalkKeyStatus.DESIRED === params) return "DESIRED";
        else if (Constants.MeterLonTalkKeyStatus.WRONG_KEY === params) return "WRONG_KEY";

        return "";
    }

    static decodeConstantsOneTimeReadRequestTypes(params) {
        if (Constants.OneTimeReadRequestTypes.METER === params) return "METER";
        else if (Constants.OneTimeReadRequestTypes.ALL_CHILD_DEVICES === params) return "ALL_CHILD_DEVICES";

        return "";
    }

    static decodeConstantsDeviceLoadVoltageStatusTypes(params) {
        if (Constants.DeviceLoadVoltageStatusTypes.PRESENT === params) return "PRESENT";
        else if (Constants.DeviceLoadVoltageStatusTypes.NOT_PRESENT === params) return "NOT_PRESENT";
        else if (Constants.DeviceLoadVoltageStatusTypes.UNKNOWN === params) return "UNKNOWN";

        return "";
    }

    static decodeConstantsDeviceManualDisconnectStatus(params) {
        if (Constants.DeviceManualDisconnectStatus.ENABLED === params) return "ENABLED";
        else if (Constants.DeviceManualDisconnectStatus.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsDeviceRemoteReconnectStatus(params) {
        if (Constants.DeviceRemoteReconnectStatus.ENABLED === params) return "ENABLED";
        else if (Constants.DeviceRemoteReconnectStatus.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsMBusAndMEPAlarmStatusTypes(params) {
        if (Constants.MBusAndMEPAlarmStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.MBusAndMEPAlarmStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsDeviceDisconnectSwitchLEDStatus(params) {
        if (Constants.DeviceDisconnectSwitchLEDStatus.ENABLED === params) return "ENABLED";
        else if (Constants.DeviceDisconnectSwitchLEDStatus.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsDeviceDisconnectSwitchLEDBehavior(params) {
        if (Constants.DeviceDisconnectSwitchLEDBehavior.ALWAYS_ON === params) return "ALWAYS_ON";
        else if (Constants.DeviceDisconnectSwitchLEDBehavior.ALWAYS_OFF === params) return "ALWAYS_OFF";
        else if (Constants.DeviceDisconnectSwitchLEDBehavior.BLINK === params) return "BLINK";

        return "";
    }

    static decodeConstantsDeviceDisconnectReconnectWithLSVStatusTypes(params) {
        if (Constants.DeviceDisconnectReconnectWithLSVStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.DeviceDisconnectReconnectWithLSVStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsDeviceDisconnectReconnectWithLSStatusTypes(params) {
        if (Constants.DeviceDisconnectReconnectWithLSStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.DeviceDisconnectReconnectWithLSStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsDeviceDisconnectLockedOpenStatusTypes(params) {
        if (Constants.DeviceDisconnectLockedOpenStatusTypes.LOCKED_OPEN === params) return "LOCKED_OPEN";
        else if (Constants.DeviceDisconnectLockedOpenStatusTypes.UNLOCKED === params) return "UNLOCKED";
        else if (Constants.DeviceDisconnectLockedOpenStatusTypes.UNKNOWN === params) return "UNKNOWN";

        return "";
    }

    static decodeConstantsDeviceDisconnectFeedbackStatusTypes(params) {
        if (Constants.DeviceDisconnectFeedbackStatusTypes.OPEN === params) return "OPEN";
        else if (Constants.DeviceDisconnectFeedbackStatusTypes.CLOSED === params) return "CLOSED";
        else if (Constants.DeviceDisconnectFeedbackStatusTypes.AMBIGUOUS === params) return "AMBIGUOUS";
        else if (Constants.DeviceDisconnectFeedbackStatusTypes.ERROR === params) return "ERROR";
        else if (Constants.DeviceDisconnectFeedbackStatusTypes.UNKNOWN === params) return "UNKNOWN";

        return "";
    }

    static decodeConstantsInitialCommunicationTypes(params) {
        if (Constants.InitialCommunicationTypes.COMPLETE === params) return "COMPLETE";
        else if (Constants.InitialCommunicationTypes.NOT_COMPLETE === params) return "NOT_COMPLETE";

        return "";
    }

    static decodeConstantsEventDeliveryTypes(params) {
        if (Constants.EventDeliveryTypes.SOAP === params) return "SOAP";
        else if (Constants.EventDeliveryTypes.NONE === params) return "NONE";

        return "";
    }

    static decodeConstantsEventDeliveryStatuses(params) {
        if (Constants.EventDeliveryStatuses.FAILURE === params) return "FAILURE";
        else if (Constants.EventDeliveryStatuses.SUCCESS === params) return "SUCCESS";

        return "";
    }

    static decodeConstantsEventDefinitionStatuses(params) {
        if (Constants.EventDefinitionStatuses.ENABLED === params) return "ENABLED";
        else if (Constants.EventDefinitionStatuses.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsMaximumPowerEnableTypes(params) {
        if (Constants.MaximumPowerEnableTypes.BROADCAST_ENABLE === params) return "BROADCAST_ENABLE";
        else if (Constants.MaximumPowerEnableTypes.BROADCAST_DISABLE === params) return "BROADCAST_DISABLE";
        else if (Constants.MaximumPowerEnableTypes.ENABLED === params) return "ENABLED";
        else if (Constants.MaximumPowerEnableTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsMeterDisplayCategoryTypes(params) {
        if (Constants.MeterDisplayCategoryTypes.SELF_READ_DATE_TIME === params) return "SELF_READ_DATE_TIME";
        else if (Constants.MeterDisplayCategoryTypes.PRESENT_VALUE_INFORMATION === params) return "PRESENT_VALUE_INFORMATION";
        else if (Constants.MeterDisplayCategoryTypes.CURRENT_DATE_TIME === params) return "CURRENT_DATE_TIME";
        else if (Constants.MeterDisplayCategoryTypes.SELF_READ_INFORMATION === params) return "SELF_READ_INFORMATION";
        else if (Constants.MeterDisplayCategoryTypes.CURRENT_TOU_CALENDAR_ID === params) return "CURRENT_TOU_CALENDAR_ID";
        else if (Constants.MeterDisplayCategoryTypes.FIRMWARE_VERSION_NUMBER === params) return "FIRMWARE_VERSION_NUMBER";
        else if (Constants.MeterDisplayCategoryTypes.PREPAY_CREDIT_REMAINING === params) return "PREPAY_CREDIT_REMAINING";

        //V3.0
        else if (Constants.MeterDisplayCategoryTypes.ONE_TIME_READ_DATA === params) return "ONE_TIME_READ_DATA";
        else if (Constants.MeterDisplayCategoryTypes.HISTORICAL_DEMAND_RESET_DATA === params) return "HISTORICAL_DEMAND_RESET_DATA";
        else if (Constants.MeterDisplayCategoryTypes.NUMBER_OF_DEMAND_RESETS === params) return "NUMBER_OF_DEMAND_RESETS";
        else if (Constants.MeterDisplayCategoryTypes.ONE_TIME_READ_MAXIMUM_DEMAND_DATE_TIME === params) return "ONE_TIME_READ_MAXIMUM_DEMAND_DATE_TIME";
        else if (Constants.MeterDisplayCategoryTypes.ONE_TIME_READ_DATE_TIME === params) return "ONE_TIME_READ_DATE_TIME";
        else if (Constants.MeterDisplayCategoryTypes.HISTORICAL_DEMAND_RESET_MAXIMUM_DEMAND_DATE_TIME === params) return "HISTORICAL_DEMAND_RESET_MAXIMUM_DEMAND_DATE_TIME";
        else if (Constants.MeterDisplayCategoryTypes.HISTORICAL_DEMAND_RESET_DATE_TIME === params) return "HISTORICAL_DEMAND_RESET_DATE_TIME";
        else if (Constants.MeterDisplayCategoryTypes.SELF_READ_MAXIMUM_DEMAND_DATE_TIME === params) return "SELF_READ_MAXIMUM_DEMAND_DATE_TIME";
        else if (Constants.MeterDisplayCategoryTypes.PRESENT_VALUE_MAXIMUM_DEMAND_DATE_TIME === params) return "PRESENT_VALUE_MAXIMUM_DEMAND_DATE_TIME";
        else if (Constants.MeterDisplayCategoryTypes.DISCONNECT_MAXIMUM_POWER_LIMIT === params) return "DISCONNECT_MAXIMUM_POWER_LIMIT";

        //V4.1
        else if (Constants.MeterDisplayCategoryTypes.CONTROL_RELAY_ID === params) return "CONTROL_RELAY_ID";
        else if (Constants.MeterDisplayCategoryTypes.CT_RATIO_MULTIPLIER === params) return "CT_RATIO_MULTIPLIER";
        else if (Constants.MeterDisplayCategoryTypes.VT_RATIO_MULTIPLIER === params) return "VT_RATIO_MULTIPLIER";
        else if (Constants.MeterDisplayCategoryTypes.CT_RATIO_ACTUAL === params) return "CT_RATIO_ACTUAL";

        //v5.0
        else if (Constants.MeterDisplayCategoryTypes.DEMAND_SUB_INTERVAL === params) return "DEMAND_SUB_INTERVAL";
        else if (Constants.MeterDisplayCategoryTypes.DEMAND_INTERVAL === params) return "DEMAND_INTERVAL";
        else if (Constants.MeterDisplayCategoryTypes.LOAD_PROFILE_INTERVAL_TIME === params) return "LOAD_PROFILE_INTERVAL_TIME";

        //5.3
        else if (Constants.MeterDisplayCategoryTypes.FIRMWARE_CRC === params) return "FIRMWARE_CRC";

        //5.4
        else if (Constants.MeterDisplayCategoryTypes.CURRENT_TOU_CALENDAR_ID_ASCII === params) return "CURRENT_TOU_CALENDAR_ID_ASCII";
        else if (Constants.MeterDisplayCategoryTypes.CONFIGURABLE_TEXT === params) return "CONFIGURABLE_TEXT";

        //6.0
        else if (Constants.MeterDisplayCategoryTypes.UTILITY_SERIAL_NUMBER === params) return "UTILITY_SERIAL_NUMBER";
        else if (Constants.MeterDisplayCategoryTypes.CONTROL_RELAY2_ID === params) return "CONTROL_RELAY2_ID";

        return "";
    }

    static decodeConstantsInformationReturnTypes(params) {
        if (Constants.InformationReturnTypes.DETAIL === params) return "DETAIL";
        else if (Constants.InformationReturnTypes.GENERAL === params) return "GENERAL";

        return "";
    }

    static decodeConstantsDeviceResultTypes(params) {
        if (Constants.DeviceResultTypes.END_OF_BILLING_CYCLE_BILLING_DATA === params) return "END_OF_BILLING_CYCLE_BILLING_DATA";
        else if (Constants.DeviceResultTypes.FULL_LOAD_PROFILE === params) return "FULL_LOAD_PROFILE";
        else if (Constants.DeviceResultTypes.BILLING_DATA_ON_DEMAND === params) return "BILLING_DATA_ON_DEMAND";
        else if (Constants.DeviceResultTypes.POWER_QUALITY === params) return "POWER_QUALITY";
        else if (Constants.DeviceResultTypes.SELF_BILLING_DATA === params) return "SELF_BILLING_DATA";
        else if (Constants.DeviceResultTypes.SECONDARY_BILLING_REGISTERS === params) return "SECONDARY_BILLING_REGISTERS";
        else if (Constants.DeviceResultTypes.DELTA_LOAD_PROFILE === params) return "DELTA_LOAD_PROFILE";
        else if (Constants.DeviceResultTypes.DISPLAY_CONFIGURATION === params) return "DISPLAY_CONFIGURATION";
        else if (Constants.DeviceResultTypes.PULSE_INPUT_CONFIGURATION === params) return "PULSE_INPUT_CONFIGURATION";
        else if (Constants.DeviceResultTypes.INSTANTANEOUS_POWER === params) return "INSTANTANEOUS_POWER";
        else if (Constants.DeviceResultTypes.LOAD_STATUS === params) return "LOAD_STATUS";
        else if (Constants.DeviceResultTypes.FIRMWARE_VERSION === params) return "FIRMWARE_VERSION";
        else if (Constants.DeviceResultTypes.ACTIVE_TOU_CALENDAR === params) return "ACTIVE_TOU_CALENDAR";
        else if (Constants.DeviceResultTypes.PENDING_TOU_CALENDAR === params) return "PENDING_TOU_CALENDAR";
        else if (Constants.DeviceResultTypes.DOWN_LIMIT === params) return "DOWN_LIMIT";
        else if (Constants.DeviceResultTypes.ALARM_POLLING_RATE === params) return "ALARM_POLLING_RATE";
        else if (Constants.DeviceResultTypes.BILLING_SCHEDULE === params) return "BILLING_SCHEDULE";
        else if (Constants.DeviceResultTypes.HISTORICAL_BILLING_DATA === params) return "HISTORICAL_BILLING_DATA";

        else if (Constants.DeviceResultTypes.STATISTICS === params) return "STATISTICS";
        else if (Constants.DeviceResultTypes.AUTO_DISCOVERY_CONFIGURATION === params) return "AUTO_DISCOVERY_CONFIGURATION";
        else if (Constants.DeviceResultTypes.EVENT_LOG === params) return "EVENT_LOG";
        else if (Constants.DeviceResultTypes.UTILITY_INFORMATION === params) return "UTILITY_INFORMATION";
        //V2.3 Results
        else if (Constants.DeviceResultTypes.PREPAY_CONFIGURATION === params) return "PREPAY_CONFIGURATION";
        else if (Constants.DeviceResultTypes.TIME_ZONE_CONFIGURATION === params) return "TIME_ZONE_CONFIGURATION";
        else if (Constants.DeviceResultTypes.PREPAY_CREDIT === params) return "PREPAY_CREDIT";

        //V3.0 Results
        else if (Constants.DeviceResultTypes.DISCONNECT_CONFIGURATION === params) return "DISCONNECT_CONFIGURATION";
        else if (Constants.DeviceResultTypes.CONTINUOUS_EVENT_LOG_CONFIGURATION === params) return "CONTINUOUS_EVENT_LOG_CONFIGURATION";
        else if (Constants.DeviceResultTypes.STOP_MODE_CONFIGURATION === params) return "STOP_MODE_CONFIGURATION";
        else if (Constants.DeviceResultTypes.POWER_QUALITY_CONFIGURATION === params) return "POWER_QUALITY_CONFIGURATION";
        else if (Constants.DeviceResultTypes.SELF_READ_RETRIEVAL_CONFIGURATION === params) return "SELF_READ_RETRIEVAL_CONFIGURATION";
        else if (Constants.DeviceResultTypes.HISTORICAL_ONE_TIME_READ_DATA === params) return "HISTORICAL_ONE_TIME_READ_DATA";
        else if (Constants.DeviceResultTypes.ONE_TIME_READ_DATA === params) return "ONE_TIME_READ_DATA";
        else if (Constants.DeviceResultTypes.ONE_TIME_READ_REQUESTS === params) return "ONE_TIME_READ_REQUESTS";
        else if (Constants.DeviceResultTypes.CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION === params) return "CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION";
        else if (Constants.DeviceResultTypes.EVENT_LOG_CONFIGURATION === params) return "EVENT_LOG_CONFIGURATION";
        else if (Constants.DeviceResultTypes.DEMAND_CONFIGURATION === params) return "DEMAND_CONFIGURATION";
        else if (Constants.DeviceResultTypes.LOAD_PROFILE_CONFIGURATION === params) return "LOAD_PROFILE_CONFIGURATION";
        else if (Constants.DeviceResultTypes.LOAD_PROFILE_ON_DEMAND === params) return "LOAD_PROFILE_ON_DEMAND";
        else if (Constants.DeviceResultTypes.DEMAND_RESET_DATA === params) return "DEMAND_RESET_DATA";

        //v4 Results
        else if (Constants.DeviceResultTypes.ATM_CONFIGURATION === params) return "ATM_CONFIGURATION";
        else if (Constants.DeviceResultTypes.PROVISIONING_IDENTIFIERS === params) return "PROVISIONING_IDENTIFIERS";
        else if (Constants.DeviceResultTypes.READ_SCHEDULE === params) return "READ_SCHEDULE";
        else if (Constants.DeviceResultTypes.DATA_ON_DEMAND === params) return "DATA_ON_DEMAND";
        else if (Constants.DeviceResultTypes.MEP_DATA === params) return "MEP_DATA";

        //v4.1 Results
        else if (Constants.DeviceResultTypes.TIER_CONTROL_CONFIGURATION === params) return "TIER_CONTROL_CONFIGURATION";
        else if (Constants.DeviceResultTypes.DATA_RECORD_HEADER_CONFIGURATION === params) return "DATA_RECORD_HEADER_CONFIGURATION";
        else if (Constants.DeviceResultTypes.CONTROL_RELAY_CONFIGURATION === params) return "CONTROL_RELAY_CONFIGURATION";
        else if (Constants.DeviceResultTypes.DATA_RECORD_HEADER_MAPPING === params) return "DATA_RECORD_HEADER_MAPPING";

        //v5.0 Results
        else if (Constants.DeviceResultTypes.LOCAL_DATA_ACCESS_CONFIGURATION === params) return "LOCAL_DATA_ACCESS_CONFIGURATION";

        //v5.0 Results
        else if (Constants.DeviceResultTypes.MEASUREMENT_RATIO_CONFIGURATION === params) return "MEASUREMENT_RATIO_CONFIGURATION";
        else if (Constants.DeviceResultTypes.BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION === params) return "BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION";

        //v5.1 Results
        else if (Constants.DeviceResultTypes.LOAD_PROFILE_ON_DEMAND_DATA_SET_1 === params) return "LOAD_PROFILE_ON_DEMAND_DATA_SET_1";
        else if (Constants.DeviceResultTypes.LOAD_PROFILE_ON_DEMAND_DATA_SET_2 === params) return "LOAD_PROFILE_ON_DEMAND_DATA_SET_2";
        else if (Constants.DeviceResultTypes.LOAD_PROFILE_ON_DEMAND_DATA_SET_3 === params) return "LOAD_PROFILE_ON_DEMAND_DATA_SET_3";
        else if (Constants.DeviceResultTypes.LOAD_PROFILE_ON_DEMAND_DATA_SET_4 === params) return "LOAD_PROFILE_ON_DEMAND_DATA_SET_4";
        else if (Constants.DeviceResultTypes.DELTA_LOAD_PROFILE_DATA_SET_1 === params) return "DELTA_LOAD_PROFILE_DATA_SET_1";
        else if (Constants.DeviceResultTypes.DELTA_LOAD_PROFILE_DATA_SET_2 === params) return "DELTA_LOAD_PROFILE_DATA_SET_2";
        else if (Constants.DeviceResultTypes.DELTA_LOAD_PROFILE_DATA_SET_3 === params) return "DELTA_LOAD_PROFILE_DATA_SET_3";
        else if (Constants.DeviceResultTypes.DELTA_LOAD_PROFILE_DATA_SET_4 === params) return "DELTA_LOAD_PROFILE_DATA_SET_4";
        else if (Constants.DeviceResultTypes.FULL_LOAD_PROFILE_DATA_SET_1 === params) return "FULL_LOAD_PROFILE_DATA_SET_1";
        else if (Constants.DeviceResultTypes.FULL_LOAD_PROFILE_DATA_SET_2 === params) return "FULL_LOAD_PROFILE_DATA_SET_2";
        else if (Constants.DeviceResultTypes.FULL_LOAD_PROFILE_DATA_SET_3 === params) return "FULL_LOAD_PROFILE_DATA_SET_3";
        else if (Constants.DeviceResultTypes.FULL_LOAD_PROFILE_DATA_SET_4 === params) return "FULL_LOAD_PROFILE_DATA_SET_4";

        //v5.1 Results
        else if (Constants.DeviceResultTypes.MEMORY_CONFIGURATION === params) return "MEMORY_CONFIGURATION";
        else if (Constants.DeviceResultTypes.LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION === params) return "LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION";

        //v5.2 Results
        else if (Constants.DeviceResultTypes.POWER_STATUS === params) return "POWER_STATUS";
        else if (Constants.DeviceResultTypes.ALARM_SETTINGS === params) return "ALARM_SETTINGS";
        else if (Constants.DeviceResultTypes.DISCONNECT_THRESHOLDS_CONFIGURATION === params) return "DISCONNECT_THRESHOLDS_CONFIGURATION";

        // v5.3 Results
        else if (Constants.DeviceResultTypes.TAMPER_CONFIGURATION === params) return "TAMPER_CONFIGURATION";
        else if (Constants.DeviceResultTypes.MEP_CONFIGURATION === params) return "MEP_CONFIGURATION";
        else if (Constants.DeviceResultTypes.REGISTER_CONFIGURATION === params) return "REGISTER_CONFIGURATION";
        else if (Constants.DeviceResultTypes.OPTICAL_PORT_CONFIGURATION === params) return "OPTICAL_PORT_CONFIGURATION";

        // v5.4 Results
        else if (Constants.DeviceResultTypes.PLC_SECURITY_CONFIGURATION === params) return "PLC_SECURITY_CONFIGURATION";
        else if (Constants.DeviceResultTypes.ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION === params) return "ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION";

        // v6.0 Results
        else if (Constants.DeviceResultTypes.ALARM_CONFIGURATION === params) return "ALARM_CONFIGURATION";
        else if (Constants.DeviceResultTypes.MODEM_CONFIGURATION === params) return "MODEM_CONFIGURATION";
        else if (Constants.DeviceResultTypes.REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION === params) return "REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION";
        else if (Constants.DeviceResultTypes.MEP_IDENTIFIER === params) return "MEP_IDENTIFIER";
        else if (Constants.DeviceResultTypes.CONTROL_RELAYS === params) return "CONTROL_RELAYS";

        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////
        /*        [Obsolete("v5.0 - not replaced")]*/
        else if (Constants.DeviceResultTypes.INTERNAL_EXPANSION_MODULE_CARD_CONFIGURATION === params) return "INTERNAL_EXPANSION_MODULE_CARD_CONFIGURATION";

        /*        [Obsolete("v5.2.000 - use DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceResultTypes.MAXIMUM_POWER_LEVEL_DURATIONS === params) return "MAXIMUM_POWER_LEVEL_DURATIONS";

        /*        [Obsolete("v5.2.000 - use DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceResultTypes.PRIMARY_MAXIMUM_POWER_STATUS === params) return "PRIMARY_MAXIMUM_POWER_STATUS";

        /*        [Obsolete("v6.0.000 - use CONTROL_RELAYS")]*/
        else if (Constants.DeviceResultTypes.CONTROL_RELAY === params) return "CONTROL_RELAY";
        ////////////////////////////////////////////////////////////////////////////////////////

        return "";
    }

    static decodeConstantsGatewayResultTypes(params) {
        if (Constants.GatewayResultTypes.STATISTICS === params) return "STATISTICS";
        else if (Constants.GatewayResultTypes.TOTAL_ENERGY_DATA === params) return "TOTAL_ENERGY_DATA";
        else if (Constants.GatewayResultTypes.FIRMWARE_VERSION === params) return "FIRMWARE_VERSION";
        else if (Constants.GatewayResultTypes.REPEATER_PATHS === params) return "REPEATER_PATHS";
        else if (Constants.GatewayResultTypes.PROCESS_CONFIGURATION === params) return "PROCESS_CONFIGURATION";
        else if (Constants.GatewayResultTypes.DISCOVERED_DEVICES === params) return "DISCOVERED_DEVICES";
        else if (Constants.GatewayResultTypes.WAN_CONFIGURATIONS === params) return "WAN_CONFIGURATIONS";
        else if (Constants.GatewayResultTypes.DEVICE_LIMIT === params) return "DEVICE_LIMIT";
        else if (Constants.GatewayResultTypes.EVENT_CONFIGURATION === params) return "EVENT_CONFIGURATION";
        else if (Constants.GatewayResultTypes.POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION === params) return "POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION";

        //v4 Results
        else if (Constants.GatewayResultTypes.ATM_CONFIGURATION === params) return "ATM_CONFIGURATION";

        //v5 Results
        else if (Constants.GatewayResultTypes.LOCAL_DATA_ACCESS_CONFIGURATION === params) return "LOCAL_DATA_ACCESS_CONFIGURATION";
        else if (Constants.GatewayResultTypes.FEATURE_ACTIVATION === params) return "FEATURE_ACTIVATION";
        else if (Constants.GatewayResultTypes.FTP_CONFIGURATION === params) return "FTP_CONFIGURATION";

        else if (Constants.GatewayResultTypes.APPLICATION_DATA_0 === params) return "APPLICATION_DATA_0";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_1 === params) return "APPLICATION_DATA_1";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_2 === params) return "APPLICATION_DATA_2";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_3 === params) return "APPLICATION_DATA_3";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_4 === params) return "APPLICATION_DATA_4";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_5 === params) return "APPLICATION_DATA_5";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_6 === params) return "APPLICATION_DATA_6";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_7 === params) return "APPLICATION_DATA_7";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_8 === params) return "APPLICATION_DATA_8";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_9 === params) return "APPLICATION_DATA_9";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_10 === params) return "APPLICATION_DATA_10";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_11 === params) return "APPLICATION_DATA_11";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_12 === params) return "APPLICATION_DATA_12";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_13 === params) return "APPLICATION_DATA_13";
        else if (Constants.GatewayResultTypes.APPLICATION_DATA_14 === params) return "APPLICATION_DATA_14";

        else if (Constants.GatewayResultTypes.GPS_COORDINATES === params) return "GPS_COORDINATES";

        // V5.3 Results
        else if (Constants.GatewayResultTypes.LVGM === params) return "LVGM";
        else if (Constants.GatewayResultTypes.LVGM_CONFIGURATION === params) return "LVGM_CONFIGURATION";
        else if (Constants.GatewayResultTypes.PHASE_INFORMATION === params) return "PHASE_INFORMATION";
        else if (Constants.GatewayResultTypes.WAN_STATUS === params) return "WAN_STATUS";


        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayResultTypes.CONTROLLER_CONFIGURATION === params) return "CONTROLLER_CONFIGURATION";
        ////////////////////////////////////////////////////////////////////////////////////////

        return "";
    }

    static decodeConstantsSystemResultTypes(params) {
        if (Constants.SystemResultTypes.NES_SYSTEM_SOFTWARE_EXPORT === params) return "NES_SYSTEM_SOFTWARE_EXPORT";

        return "";
    }

    static decodeConstantsRepeaterTypes(params) {
        if (Constants.RepeaterTypes.DISCOVERED_DEVICE === params) return "DISCOVERED_DEVICE";
        else if (Constants.RepeaterTypes.EXISTING_DEVICE === params) return "EXISTING_DEVICE";
        else if (Constants.RepeaterTypes.GATEWAY === params) return "GATEWAY";

        return "";
    }

    static decodeConstantsDiscoveredTypes(params) {
        if (Constants.DiscoveredTypes.ORPHANED_DEVICE === params) return "ORPHANED_DEVICE";
        else if (Constants.DiscoveredTypes.NEW_DEVICE === params) return "NEW_DEVICE";

        return "";
    }

    static decodeConstantsEventStateTypes(params) {
        if (Constants.EventStateTypes.OCCURRED === params) return "OCCURRED";
        else if (Constants.EventStateTypes.RESTORED === params) return "RESTORED";

        return "";
    }

    static decodeConstantsCommandFailureTypes(params) {
        if (Constants.CommandFailureTypes.GATEWAY_NACK === params) return "GATEWAY_NACK";
        else if (Constants.CommandFailureTypes.GENERAL_FAILURE === params) return "GENERAL_FAILURE";
        else if (Constants.CommandFailureTypes.TIMED_OUT === params) return "TIMED_OUT";
        else if (Constants.CommandFailureTypes.GATEWAY_COMMAND_TIMED_OUT === params) return "GATEWAY_COMMAND_TIMED_OUT";
        else if (Constants.CommandFailureTypes.DECRYPTION_FAILURE === params) return "DECRYPTION_FAILURE";
        else if (Constants.CommandFailureTypes.DECOMPRESSION_FAILURE === params) return "DECOMPRESSION_FAILURE";
        else if (Constants.CommandFailureTypes.CONVERSION === params) return "CONVERSION";
        else if (Constants.CommandFailureTypes.DEVICE_REMOVED_FROM_GATEWAY === params) return "DEVICE_REMOVED_FROM_GATEWAY";

        /*        [Obsolete("v5.4 - replaced by GATEWAY_NACK")]*/
        else if (Constants.CommandFailureTypes.DC1000NACK === params) return "DC1000NACK";
        /*        [Obsolete("v5.4 - replaced by GATEWAY_COMMAND_TIMED_OUT")]*/
        else if (Constants.CommandFailureTypes.DC1000_COMMAND_TIMED_OUT === params) return "DC1000_COMMAND_TIMED_OUT";

        return "";
    }

    static decodeConstantsFileTypes(params) {
        if (Constants.FileTypes.MEP === params) return "MEP";
        else if (Constants.FileTypes.GATEWAY === params) return "GATEWAY";

        return "";
    }

    static decodeConstantsFirmwareTypes(params) {
        if (Constants.FirmwareTypes.DATA_CONCENTRATOR_FIRMWARE === params) return "DATA_CONCENTRATOR_FIRMWARE";
        else if (Constants.FirmwareTypes.METER_FIRMWARE === params) return "METER_FIRMWARE";

        /*        [Obsolete("v5.4 - replaced by DATA_CONCENTRATOR_FIRMWARE")]*/
        else if (Constants.FirmwareTypes.DC1000_FIRMWARE === params) return "DC1000_FIRMWARE";

        return "";
    }

    static decodeConstantsTaskProcessorCommandFailureReasons(params) {
        if (Constants.TaskProcessorCommandFailureReasons.INVALID_LOCAL_TASK_MANAGER_ID === params) return "INVALID_LOCAL_TASK_MANAGER_ID";
        else if (Constants.TaskProcessorCommandFailureReasons.ENGINE_ALREADY_RUNNING === params) return "ENGINE_ALREADY_RUNNING";
        else if (Constants.TaskProcessorCommandFailureReasons.INVALID_TASK_PROCESSOR_ID === params) return "INVALID_TASK_PROCESSOR_ID";
        else if (Constants.TaskProcessorCommandFailureReasons.FAILURE_START_ENGINE === params) return "FAILURE_START_ENGINE";
        else if (Constants.TaskProcessorCommandFailureReasons.ENGINE_NOT_RUNNING === params) return "ENGINE_NOT_RUNNING";
        else if (Constants.TaskProcessorCommandFailureReasons.FAILURE_STOP_ENGINE === params) return "FAILURE_STOP_ENGINE";

        return "";
    }

    static decodeConstantsSecurityAlertTypes(params) {
        if (Constants.SecurityAlertTypes.TACACS_PLUS_AUTHENTICATION_FAILURE === params) return "TACACS_PLUS_AUTHENTICATION_FAILURE";
        else if (Constants.SecurityAlertTypes.API_AUTHENTICATION_FAILURE === params) return "API_AUTHENTICATION_FAILURE";
        else if (Constants.SecurityAlertTypes.GATEWAY_AUTHENTICATION_FAILURE === params) return "GATEWAY_AUTHENTICATION_FAILURE";

        return "";
    }

    static decodeConstantsScheduleTypes(params) {
        if (Constants.ScheduleTypes.GATEWAY_NORMAL_CONNECT === params) return "GATEWAY_NORMAL_CONNECT";
        else if (Constants.ScheduleTypes.ARCHIVE === params) return "ARCHIVE";
        else if (Constants.ScheduleTypes.ORPHAN_CHECK === params) return "ORPHAN_CHECK";
        else if (Constants.ScheduleTypes.TASK_TIMEOUT === params) return "TASK_TIMEOUT";
        else if (Constants.ScheduleTypes.ATM_GATEWAY_PROCESS === params) return "ATM_GATEWAY_PROCESS";
        else if (Constants.ScheduleTypes.ATM_DEVICE_PROCESS === params) return "ATM_DEVICE_PROCESS";
        else if (Constants.ScheduleTypes.COMMAND_HISTORY_ORPHAN_CHECK === params) return "COMMAND_HISTORY_ORPHAN_CHECK";
        else if (Constants.ScheduleTypes.QUERY === params) return "QUERY";

        return "";
    }

    static decodeConstantsMeterFirmwareDownloadStatus(params) {
        if (Constants.MeterFirmwareDownloadStatus.SUCCESS === params) return "SUCCESS";
        else if (Constants.MeterFirmwareDownloadStatus.FAILURE === params) return "FAILURE";

        return "";
    }

    static decodeConstantsSortOrderTypes(params) {
        if (Constants.SortOrderTypes.ASCENDING === params) return "ASCENDING";
        else if (Constants.SortOrderTypes.DESCENDING === params) return "DESCENDING";

        return "";
    }

    static decodeConstantsPulseInputChannelStatus(params) {
        if (Constants.PulseInputChannelStatus.ACTIVE === params) return "ACTIVE";
        else if (Constants.PulseInputChannelStatus.INACTIVE === params) return "INACTIVE";

        return "";
    }

    static decodeConstantsPulseInputChannelIdleState(params) {
        if (Constants.PulseInputChannelIdleState.LOW === params) return "LOW";
        else if (Constants.PulseInputChannelIdleState.HIGH === params) return "HIGH";

        return "";
    }

    static decodeConstantsControlRelayStatus(params) {
        if (Constants.ControlRelayStatus.BROADCAST_OPEN === params) return "BROADCAST_OPEN";
        else if (Constants.ControlRelayStatus.BROADCAST_CLOSED === params) return "BROADCAST_CLOSED";
        else if (Constants.ControlRelayStatus.OPEN === params) return "OPEN";
        else if (Constants.ControlRelayStatus.CLOSED === params) return "CLOSED";

        return "";
    }

    static decodeConstantsTOUCalendarTypes(params) {
        if (Constants.TOUCalendarTypes.ACTIVE === params) return "ACTIVE";
        else if (Constants.TOUCalendarTypes.PENDING === params) return "PENDING";

        return "";
    }

    static decodeConstantsRepeaterPathStatus(params) {
        if (Constants.RepeaterPathStatus.SUCCESS === params) return "SUCCESS";
        else if (Constants.RepeaterPathStatus.INVALID_LENGTH === params) return "INVALID_LENGTH";
        else if (Constants.RepeaterPathStatus.REPEATER_LOOP === params) return "REPEATER_LOOP";
        else if (Constants.RepeaterPathStatus.UNDETERMINED === params) return "UNDETERMINED";
        else if (Constants.RepeaterPathStatus.INVALID_REPEATER === params) return "INVALID_REPEATER";

        return "";
    }

    static decodeConstantsAddMeterFailureTypes(params) {
        if (Constants.AddMeterFailureTypes.GENERAL_FAILURE === params) return "GENERAL_FAILURE";
        else if (Constants.AddMeterFailureTypes.WRONG_KEY === params) return "WRONG_KEY";
        else if (Constants.AddMeterFailureTypes.INVALID_NEURON_STATE === params) return "INVALID_NEURON_STATE";
        else if (Constants.AddMeterFailureTypes.NASCENT === params) return "NASCENT";
        else if (Constants.AddMeterFailureTypes.INTERFACE_INCOMPATIBILITY === params) return "INTERFACE_INCOMPATIBILITY";
        else if (Constants.AddMeterFailureTypes.UNKNOWN_VERSION === params) return "UNKNOWN_VERSION";
        else if (Constants.AddMeterFailureTypes.ATM_COMMISSION_DATA_NOT_ACCEPTABLE === params) return "ATM_COMMISSION_DATA_NOT_ACCEPTABLE";
        else if (Constants.AddMeterFailureTypes.MEP_DEVICE_NOT_SUPPORTED === params) return "MEP_DEVICE_NOT_SUPPORTED";
        else if (Constants.AddMeterFailureTypes.DEMAND_NOT_SUPPORTED === params) return "DEMAND_NOT_SUPPORTED";
        else if (Constants.AddMeterFailureTypes.INVALID_DEVICE === params) return "INVALID_DEVICE";
        else if (Constants.AddMeterFailureTypes.INVALID_ADD_METER_COMMAND_STATE === params) return "INVALID_ADD_METER_COMMAND_STATE";
        else if (Constants.AddMeterFailureTypes.PROCESS_AUTHENTICATION_KEY_FAILURE === params) return "PROCESS_AUTHENTICATION_KEY_FAILURE";
        else if (Constants.AddMeterFailureTypes.DUPLICATE_NEURON_ID === params) return "DUPLICATE_NEURON_ID";
        else if (Constants.AddMeterFailureTypes.UPDATE_SUBNET_NODE_FAILURE === params) return "UPDATE_SUBNET_NODE_FAILURE";
        else if (Constants.AddMeterFailureTypes.ATM_NOT_SUPPORTED === params) return "ATM_NOT_SUPPORTED";
        else if (Constants.AddMeterFailureTypes.FAILURE_PRIOR_TO_CREATE_DEVICE === params) return "FAILURE_PRIOR_TO_CREATE_DEVICE";
        else if (Constants.AddMeterFailureTypes.TASK_DATA_VALIDATION_FAILURE === params) return "TASK_DATA_VALIDATION_FAILURE";
        else if (Constants.AddMeterFailureTypes.PHYSICALLY_ATTACHED_METER_NOT_MOVED === params) return "PHYSICALLY_ATTACHED_METER_NOT_MOVED";
        else if (Constants.AddMeterFailureTypes.INSERT_OR_UPDATE_ADRESSING_INFO_FAILURE === params) return "INSERT_OR_UPDATE_ADRESSING_INFO_FAILURE";
        else if (Constants.AddMeterFailureTypes.INVALID_SECURITY === params) return "INVALID_SECURITY";
        else if (Constants.AddMeterFailureTypes.SECURITY_NOT_SUPPORTED === params) return "SECURITY_NOT_SUPPORTED";
        else if (Constants.AddMeterFailureTypes.INVALID_SECURITY_SEQUENCE === params) return "INVALID_SECURITY_SEQUENCE";

        return "";
    }

    static decodeConstantsBillingDataStructureTypes(params) {
        if (Constants.BillingDataStructureTypes.VARIABLE === params) return "VARIABLE";
        else if (Constants.BillingDataStructureTypes.FIXED === params) return "FIXED";

        return "";
    }

    static decodeConstantsMBusDeviceTypes(params) {
        //The M-Bus device types supported by NES System Software
        if (Constants.MBusDeviceTypes.GAS === params) return "GAS";
        else if (Constants.MBusDeviceTypes.HEAT === params) return "HEAT";
        else if (Constants.MBusDeviceTypes.HOT_WATER === params) return "HOT_WATER";
        else if (Constants.MBusDeviceTypes.WATER === params) return "WATER";

        return "";
    }

    static decodeConstantsIPAddressTypes(params) {
        if (Constants.IPAddressTypes.STATIC === params) return "STATIC";
        else if (Constants.IPAddressTypes.DYNAMIC === params) return "DYNAMIC";

        return "";
    }

    static decodeConstantsPingGatewayStatusTypes(params) {
        if (Constants.PingGatewayStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.PingGatewayStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsMBusStatusTypes(params) {
        if (Constants.MBusStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.MBusStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsInternalCommands(params) {
        if (Constants.InternalCommands.REMOVE_DEVICE === params) return "REMOVE_DEVICE";
        else if (Constants.InternalCommands.ADD_METER === params) return "ADD_METER";
        else if (Constants.InternalCommands.MOVE_DEVICE_ADD === params) return "MOVE_DEVICE_ADD";
        else if (Constants.InternalCommands.MOVE_DEVICE_REMOVE === params) return "MOVE_DEVICE_REMOVE";
        else if (Constants.InternalCommands.CONNECT === params) return "CONNECT";
        else if (Constants.InternalCommands.DISCONNECT === params) return "DISCONNECT";
        else if (Constants.InternalCommands.GATEWAY_REPLACEMENT_ADD_DEVICE === params) return "GATEWAY_REPLACEMENT_ADD_DEVICE";

        return "";
    }

    static decodeConstantsDataOrderTypes(params) {
        if (Constants.DataOrderTypes.MSB_FIRST === params) return "MSB_FIRST";
        else if (Constants.DataOrderTypes.LSB_FIRST === params) return "LSB_FIRST";

        return "";
    }

    static decodeConstantsKeyAvailabilityTypes(params) {
        if (Constants.KeyAvailabilityTypes.KEY_AVAILABLE_TO_DECRYPT_DATA === params) return "KEY_AVAILABLE_TO_DECRYPT_DATA";
        else if (Constants.KeyAvailabilityTypes.NO_KEY_AVAILABLE_TO_DECRYPT_DATA === params) return "NO_KEY_AVAILABLE_TO_DECRYPT_DATA";

        return "";
    }

    static decodeConstantsMBusSecurityStatusTypes(params) {
        if (Constants.MBusSecurityStatusTypes.PASSED === params) return "PASSED";
        else if (Constants.MBusSecurityStatusTypes.FAILED === params) return "FAILED";

        return "";
    }

    static decodeConstantsMBusBillingScheduleFrequencyTypes(params) {
        if (Constants.MBusBillingScheduleFrequencyTypes.HOURLY === params) return "HOURLY";
        else if (Constants.MBusBillingScheduleFrequencyTypes.DAILY === params) return "DAILY";
        else if (Constants.MBusBillingScheduleFrequencyTypes.WEEKLY === params) return "WEEKLY";
        else if (Constants.MBusBillingScheduleFrequencyTypes.MONTHLY === params) return "MONTHLY";
        else if (Constants.MBusBillingScheduleFrequencyTypes.NEVER === params) return "NEVER";

        return "";
    }

    static decodeConstantsConnectionFailureTypes(params) {
        if (Constants.ConnectionFailureTypes.SOCKET_CONNECT_ERROR === params) return "SOCKET_CONNECT_ERROR";
        else if (Constants.ConnectionFailureTypes.DCXP_TIMEOUT === params) return "DCXP_TIMEOUT";
        else if (Constants.ConnectionFailureTypes.INVALID_GATEWAY_VERSION === params) return "INVALID_GATEWAY_VERSION";
        else if (Constants.ConnectionFailureTypes.GENERAL_FAILURE === params) return "GENERAL_FAILURE";
        else if (Constants.ConnectionFailureTypes.FTP_SOCKET_CONNECT_ERROR === params) return "FTP_SOCKET_CONNECT_ERROR";
        else if (Constants.ConnectionFailureTypes.DC1000_ADAPTER_SERVICE_CONNECTION_ERROR === params) return "DC1000_ADAPTER_SERVICE_CONNECTION_ERROR";
        else if (Constants.ConnectionFailureTypes.GATEWAY_INITIATED_CONNECTION_UNAVAILABLE === params) return "GATEWAY_INITIATED_CONNECTION_UNAVAILABLE";
        else if (Constants.ConnectionFailureTypes.SECURITY_FAILURE === params) return "SECURITY_FAILURE";

        return "";
    }

    static decodeConstantsMBusAuthenticationTypes(params) {
        if (Constants.MBusAuthenticationTypes.PASSED === params) return "PASSED";
        else if (Constants.MBusAuthenticationTypes.ID_FAILURE === params) return "ID_FAILURE";
        else if (Constants.MBusAuthenticationTypes.DATE_FAILURE === params) return "DATE_FAILURE";
        else if (Constants.MBusAuthenticationTypes.PASSED_WITH_ALTERNATE_DATE === params) return "PASSED_WITH_ALTERNATE_DATE";

        return "";
    }
    static decodeConstantsPerformanceLogTypes(params) {
        if (Constants.PerformanceLogTypes.SERVER === params) return "SERVER";
        else if (Constants.PerformanceLogTypes.DC1000_ADAPTER === params) return "DC1000_ADAPTER";

        return "";
    }
    static decodeConstantsCommunicationFailureStatusTypes(params) {
        if (Constants.CommunicationFailureStatusTypes.FAILURE === params) return "FAILURE";
        else if (Constants.CommunicationFailureStatusTypes.NO_FAILURE === params) return "NO_FAILURE";

        return "";
    }

    static decodeConstantsServerToGatewayProtocolTypes(params) {
        if (Constants.ServerToGatewayProtocolTypes.TCP === params) return "TCP";
        else if (Constants.ServerToGatewayProtocolTypes.FTP === params) return "FTP";

        return "";
    }

    static decodeConstantsDC1000ResourceEntryPriorities(params) {
        if (Constants.DC1000ResourceEntryPriorities.NORMAL === params) return "NORMAL";
        else if (Constants.DC1000ResourceEntryPriorities.HIGH === params) return "HIGH";

        return "";
    }

    static decodeConstantsAgentTypes(params) {
        if (Constants.AgentTypes.DEVICE === params) return "DEVICE";
        else if (Constants.AgentTypes.UNKNOWN_DEVICE === params) return "UNKNOWN_DEVICE";
        else if (Constants.AgentTypes.GATEWAY === params) return "GATEWAY";

        return "";
    }

    static decodeConstantsPrepayAddCreditOptionTypes(params) {
        if (Constants.PrepayAddCreditOptionTypes.ADD_PREPAY_CREDIT_ONLY === params) return "ADD_PREPAY_CREDIT_ONLY";
        else if (Constants.PrepayAddCreditOptionTypes.ADD_PREPAY_EMERGENCY_CREDIT_ONLY === params) return "ADD_PREPAY_EMERGENCY_CREDIT_ONLY";
        else if (Constants.PrepayAddCreditOptionTypes.ADD_PREPAY_EMERGENCY_CREDIT_THEN_PREPAY_CREDIT === params) return "ADD_PREPAY_EMERGENCY_CREDIT_THEN_PREPAY_CREDIT";

        return "";
    }

    static decodeConstantsPrepayClearCreditOptionTypes(params) {
        if (Constants.PrepayClearCreditOptionTypes.CLEAR_PREPAY_CREDIT_ONLY === params) return "CLEAR_PREPAY_CREDIT_ONLY";
        else if (Constants.PrepayClearCreditOptionTypes.CLEAR_PREPAY_EMERGENCY_CREDIT_ONLY === params) return "CLEAR_PREPAY_EMERGENCY_CREDIT_ONLY";
        else if (Constants.PrepayClearCreditOptionTypes.CLEAR_PREPAY_CREDIT_AND_PREPAY_EMERGENCY_CREDIT === params) return "CLEAR_PREPAY_CREDIT_AND_PREPAY_EMERGENCY_CREDIT";

        return "";
    }

    static decodeConstantsPrepayStatusTypes(params) {
        if (Constants.PrepayStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.PrepayStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsPrepayReversePowerDeductionStatusTypes(params) {
        if (Constants.PrepayReversePowerDeductionStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.PrepayReversePowerDeductionStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsPrepayAudibleAlarmStatusTypes(params) {
        if (Constants.PrepayAudibleAlarmStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.PrepayAudibleAlarmStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsPrepayMaximumPowerStatusTypeID(params) {
        if (Constants.PrepayMaximumPowerStatusTypeID.ENABLED === params) return "ENABLED";
        else if (Constants.PrepayMaximumPowerStatusTypeID.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsPrepayEmergencyCreditStatusTypes(params) {
        if (Constants.PrepayEmergencyCreditStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.PrepayEmergencyCreditStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsPrepayCreditTypes(params) {
        if (Constants.PrepayCreditTypes.REGULAR === params) return "REGULAR";
        else if (Constants.PrepayCreditTypes.EMERGENCY === params) return "EMERGENCY";

        return "";
    }

    static decodeConstantsDeviceTaskTypes(params) {
        if (Constants.DeviceTaskTypes.READ_FULL_LOAD_PROFILE === params) return "READ_FULL_LOAD_PROFILE";
        else if (Constants.DeviceTaskTypes.CONNECT_LOAD === params) return "CONNECT_LOAD";
        else if (Constants.DeviceTaskTypes.DISCONNECT_LOAD === params) return "DISCONNECT_LOAD";
        else if (Constants.DeviceTaskTypes.READ_BILLING_DATA_ON_DEMAND === params) return "READ_BILLING_DATA_ON_DEMAND";
        else if (Constants.DeviceTaskTypes.READ_SELF_BILLING_DATA === params) return "READ_SELF_BILLING_DATA";
        else if (Constants.DeviceTaskTypes.READ_SECONDARY_BILLING_REGISTERS === params) return "READ_SECONDARY_BILLING_REGISTERS";
        else if (Constants.DeviceTaskTypes.DISCONNECT_CONTROL_RELAY === params) return "DISCONNECT_CONTROL_RELAY";
        else if (Constants.DeviceTaskTypes.CONNECT_CONTROL_RELAY === params) return "CONNECT_CONTROL_RELAY";
        else if (Constants.DeviceTaskTypes.SET_CONTROL_RELAY_TIERS_STATUS === params) return "SET_CONTROL_RELAY_TIERS_STATUS";
        else if (Constants.DeviceTaskTypes.SET_CONTROL_RELAY_TIERS === params) return "SET_CONTROL_RELAY_TIERS";
        else if (Constants.DeviceTaskTypes.SET_LOAD_PROFILE_CONFIGURATION === params) return "SET_LOAD_PROFILE_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.UPDATE_FIRMWARE === params) return "UPDATE_FIRMWARE";
        else if (Constants.DeviceTaskTypes.READ_DISPLAY_CONFIGURATION === params) return "READ_DISPLAY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_DISPLAY_CONFIGURATION === params) return "SET_DISPLAY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_ALARM_DISPLAY_CONFIGURATION === params) return "SET_ALARM_DISPLAY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_POWER_QUALITY === params) return "READ_POWER_QUALITY";
        else if (Constants.DeviceTaskTypes.READ_PULSE_INPUT_CONFIGURATION === params) return "READ_PULSE_INPUT_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_INSTANTANEOUS_POWER === params) return "READ_INSTANTANEOUS_POWER";
        else if (Constants.DeviceTaskTypes.READ_LOAD_STATUS === params) return "READ_LOAD_STATUS";
        else if (Constants.DeviceTaskTypes.READ_FIRMWARE_VERSION === params) return "READ_FIRMWARE_VERSION";
        else if (Constants.DeviceTaskTypes.SET_PULSE_INPUT_CONFIGURATION === params) return "SET_PULSE_INPUT_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_ACTIVE_TOU_CALENDAR === params) return "READ_ACTIVE_TOU_CALENDAR";
        else if (Constants.DeviceTaskTypes.READ_PENDING_TOU_CALENDAR === params) return "READ_PENDING_TOU_CALENDAR";
        else if (Constants.DeviceTaskTypes.SET_PENDING_TOU_CALENDAR === params) return "SET_PENDING_TOU_CALENDAR";
        else if (Constants.DeviceTaskTypes.READ_DOWN_LIMIT === params) return "READ_DOWN_LIMIT";
        else if (Constants.DeviceTaskTypes.SET_DOWN_LIMIT === params) return "SET_DOWN_LIMIT";
        else if (Constants.DeviceTaskTypes.SET_DATE_TIME === params) return "SET_DATE_TIME";

        else if (Constants.DeviceTaskTypes.READ_STATISTICS === params) return "READ_STATISTICS";
        else if (Constants.DeviceTaskTypes.READ_EVENT_LOG === params) return "READ_EVENT_LOG";
        else if (Constants.DeviceTaskTypes.READ_ALARM_POLLING_RATE === params) return "READ_ALARM_POLLING_RATE";
        else if (Constants.DeviceTaskTypes.SET_ALARM_POLLING_RATE === params) return "SET_ALARM_POLLING_RATE";
        else if (Constants.DeviceTaskTypes.READ_BILLING_SCHEDULE === params) return "READ_BILLING_SCHEDULE";
        else if (Constants.DeviceTaskTypes.SET_BILLING_SCHEDULE === params) return "SET_BILLING_SCHEDULE";
        else if (Constants.DeviceTaskTypes.READ_HISTORICAL_BILLING_DATA === params) return "READ_HISTORICAL_BILLING_DATA";
        else if (Constants.DeviceTaskTypes.READ_AUTO_DISCOVERY_CONFIGURATION === params) return "READ_AUTO_DISCOVERY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_AUTO_DISCOVERY_CONFIGURATION === params) return "SET_AUTO_DISCOVERY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_UTILITY_INFORMATION === params) return "READ_UTILITY_INFORMATION";
        else if (Constants.DeviceTaskTypes.SET_UTILITY_INFORMATION === params) return "SET_UTILITY_INFORMATION";
        else if (Constants.DeviceTaskTypes.READ_STOP_MODE_CONFIGURATION === params) return "READ_STOP_MODE_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_STOP_MODE_CONFIGURATION === params) return "SET_STOP_MODE_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_POWER_QUALITY_CONFIGURATION === params) return "READ_POWER_QUALITY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_POWER_QUALITY_CONFIGURATION === params) return "SET_POWER_QUALITY_CONFIGURATION";
        // V2.3 Tasks
        else if (Constants.DeviceTaskTypes.ADD_PREPAY_CREDIT === params) return "ADD_PREPAY_CREDIT";
        else if (Constants.DeviceTaskTypes.CLEAR_PREPAY_CREDIT === params) return "CLEAR_PREPAY_CREDIT";
        else if (Constants.DeviceTaskTypes.READ_PREPAY_CONFIGURATION === params) return "READ_PREPAY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_PREPAY_CONFIGURATION === params) return "SET_PREPAY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_TIME_ZONE_CONFIGURATION === params) return "READ_TIME_ZONE_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_TIME_ZONE_CONFIGURATION === params) return "SET_TIME_ZONE_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_PREPAY_CREDIT === params) return "READ_PREPAY_CREDIT";

        //V3.0 Tasks
        else if (Constants.DeviceTaskTypes.READ_DISCONNECT_CONFIGURATION === params) return "READ_DISCONNECT_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_DISCONNECT_CONFIGURATION === params) return "SET_DISCONNECT_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.WRITE_DATA === params) return "WRITE_DATA";
        else if (Constants.DeviceTaskTypes.READ_CONTINUOUS_EVENT_LOG_CONFIGURATION === params) return "READ_CONTINUOUS_EVENT_LOG_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_CONTINUOUS_EVENT_LOG_CONFIGURATION === params) return "SET_CONTINUOUS_EVENT_LOG_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.RESET_POWER_QUALITY_STATISTICS === params) return "RESET_POWER_QUALITY_STATISTICS";
        else if (Constants.DeviceTaskTypes.READ_SELF_READ_RETRIEVAL_CONFIGURATION === params) return "READ_SELF_READ_RETRIEVAL_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_SELF_READ_RETRIEVAL_CONFIGURATION === params) return "SET_SELF_READ_RETRIEVAL_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.ADD_ONE_TIME_READ_REQUEST === params) return "ADD_ONE_TIME_READ_REQUEST";
        else if (Constants.DeviceTaskTypes.CLEAR_ONE_TIME_READ_REQUESTS === params) return "CLEAR_ONE_TIME_READ_REQUESTS";
        else if (Constants.DeviceTaskTypes.READ_HISTORICAL_ONE_TIME_READ_DATA === params) return "READ_HISTORICAL_ONE_TIME_READ_DATA";
        else if (Constants.DeviceTaskTypes.READ_ONE_TIME_READ_REQUESTS === params) return "READ_ONE_TIME_READ_REQUESTS";
        else if (Constants.DeviceTaskTypes.RESET_DEMAND_VALUES === params) return "RESET_DEMAND_VALUES";
        else if (Constants.DeviceTaskTypes.READ_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION === params) return "READ_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION === params) return "SET_CONTINUOUS_DELTA_LOAD_PROFILE_COLLECTION_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_DEMAND_CONFIGURATION === params) return "READ_DEMAND_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_DEMAND_CONFIGURATION === params) return "SET_DEMAND_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_LOAD_PROFILE_CONFIGURATION === params) return "READ_LOAD_PROFILE_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_LOAD_PROFILE_ON_DEMAND === params) return "READ_LOAD_PROFILE_ON_DEMAND";
        else if (Constants.DeviceTaskTypes.READ_EVENT_LOG_CONFIGURATION === params) return "READ_EVENT_LOG_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_EVENT_LOG_CONFIGURATION === params) return "SET_EVENT_LOG_CONFIGURATION";

        // v4 Tasks
        else if (Constants.DeviceTaskTypes.READ_READ_SCHEDULE === params) return "READ_READ_SCHEDULE";
        else if (Constants.DeviceTaskTypes.SET_READ_SCHEDULE === params) return "SET_READ_SCHEDULE";
        else if (Constants.DeviceTaskTypes.READ_DATA_ON_DEMAND === params) return "READ_DATA_ON_DEMAND";
        else if (Constants.DeviceTaskTypes.READ_PROVISIONING_IDENTIFIERS === params) return "READ_PROVISIONING_IDENTIFIERS";
        else if (Constants.DeviceTaskTypes.SET_PROVISIONING_IDENTIFIERS === params) return "SET_PROVISIONING_IDENTIFIERS";

        //v4.1 Tasks
        else if (Constants.DeviceTaskTypes.READ_TIER_CONTROL_CONFIGURATION === params) return "READ_TIER_CONTROL_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_TIER_CONTROL_CONFIGURATION === params) return "SET_TIER_CONTROL_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_CONTROL_RELAY_CONFIGURATION === params) return "READ_CONTROL_RELAY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_CONTROL_RELAY_CONFIGURATION === params) return "SET_CONTROL_RELAY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_DATA_RECORD_HEADER_CONFIGURATION === params) return "READ_DATA_RECORD_HEADER_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_DATA_RECORD_HEADER_CONFIGURATION === params) return "SET_DATA_RECORD_HEADER_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_DATA_RECORD_HEADER_MAPPING === params) return "READ_DATA_RECORD_HEADER_MAPPING";
        else if (Constants.DeviceTaskTypes.SET_DATA_RECORD_HEADER_MAPPING === params) return "SET_DATA_RECORD_HEADER_MAPPING";
        else if (Constants.DeviceTaskTypes.SEND_FILE === params) return "SEND_FILE";

        //v5.0 Tasks
        else if (Constants.DeviceTaskTypes.READ_LOCAL_DATA_ACCESS_CONFIGURATION === params) return "READ_LOCAL_DATA_ACCESS_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_LOCAL_DATA_ACCESS_CONFIGURATION === params) return "SET_LOCAL_DATA_ACCESS_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_MEASUREMENT_RATIO_CONFIGURATION === params) return "SET_MEASUREMENT_RATIO_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_MEASUREMENT_RATIO_CONFIGURATION === params) return "READ_MEASUREMENT_RATIO_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION === params) return "SET_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION === params) return "READ_BROADCAST_GROUP_MEMBERSHIP_CONFIGURATION";

        //v5.1 Tasks
        else if (Constants.DeviceTaskTypes.READ_MEMORY_CONFIGURATION === params) return "READ_MEMORY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_MEMORY_CONFIGURATION === params) return "SET_MEMORY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION === params) return "READ_LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION === params) return "SET_LOAD_PROFILE_DATA_SET_COLLECTION_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_GATEWAY_SETTINGS === params) return "SET_GATEWAY_SETTINGS";
        else if (Constants.DeviceTaskTypes.READ_GATEWAY_SETTINGS === params) return "READ_GATEWAY_SETTINGS";

        //v5.2 Tasks
        else if (Constants.DeviceTaskTypes.READ_POWER_STATUS === params) return "READ_POWER_STATUS";
        else if (Constants.DeviceTaskTypes.READ_ALARM_SETTINGS === params) return "READ_ALARM_SETTINGS";
        else if (Constants.DeviceTaskTypes.SET_ALARM_SETTINGS === params) return "SET_ALARM_SETTINGS";
        else if (Constants.DeviceTaskTypes.READ_DISCONNECT_THRESHOLDS_CONFIGURATION === params) return "READ_DISCONNECT_THRESHOLDS_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_DISCONNECT_THRESHOLDS_CONFIGURATION === params) return "SET_DISCONNECT_THRESHOLDS_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_TAMPER_CONFIGURATION === params) return "READ_TAMPER_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_TAMPER_CONFIGURATION === params) return "SET_TAMPER_CONFIGURATION";

        //v5.3 Tasks
        else if (Constants.DeviceTaskTypes.READ_MEP_CONFIGURATION === params) return "READ_MEP_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_MEP_CONFIGURATION === params) return "SET_MEP_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_KEY === params) return "SET_KEY";
        else if (Constants.DeviceTaskTypes.READ_DEVICE_REGISTER_CONFIGURATION === params) return "READ_DEVICE_REGISTER_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_DEVICE_REGISTER_CONFIGURATION === params) return "SET_DEVICE_REGISTER_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_DEVICE_OPTICAL_PORT_CONFIGURATION === params) return "SET_DEVICE_OPTICAL_PORT_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_DEVICE_OPTICAL_PORT_CONFIGURATION === params) return "READ_DEVICE_OPTICAL_PORT_CONFIGURATION";

        //v5.4 Tasks
        else if (Constants.DeviceTaskTypes.SET_PLC_KEY === params) return "SET_PLC_KEY";
        else if (Constants.DeviceTaskTypes.SET_PLC_SECURITY_CONFIGURATION === params) return "SET_PLC_SECURITY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_PLC_SECURITY_CONFIGURATION === params) return "READ_PLC_SECURITY_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION === params) return "SET_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION === params) return "READ_ENERGY_ACCUMULATOR_CALCULATION_METHOD_CONFIGURATION";

        //v6.0 Tasks
        else if (Constants.DeviceTaskTypes.CLEAR_DEVICE_ALARMS === params) return "CLEAR_DEVICE_ALARMS";
        else if (Constants.DeviceTaskTypes.READ_ALARM_CONFIGURATION === params) return "READ_ALARM_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_ALARM_CONFIGURATION === params) return "SET_ALARM_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_MODEM_CONFIGURATION === params) return "READ_MODEM_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_MODEM_CONFIGURATION === params) return "SET_MODEM_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION === params) return "READ_REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.SET_REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION === params) return "SET_REMOTE_LOGIN_AUTHENTICATION_CONFIGURATION";
        else if (Constants.DeviceTaskTypes.READ_MEP_IDENTIFIER === params) return "READ_MEP_IDENTIFIER";
        else if (Constants.DeviceTaskTypes.READ_CONTROL_RELAYS === params) return "READ_CONTROL_RELAYS";

        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////
        /*        [Obsolete("v5.0 - not replaced")]*/
        else if (Constants.DeviceTaskTypes.READ_INTERNAL_EXPANSION_MODULE_CARD_CONFIGURATION === params) return "READ_INTERNAL_EXPANSION_MODULE_CARD_CONFIGURATION";

        /*        [Obsolete("v5.2.000 - use SET_DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceTaskTypes.SET_PRIMARY_MAXIMUM_POWER_LEVEL === params) return "SET_PRIMARY_MAXIMUM_POWER_LEVEL";
        /*        [Obsolete("v5.2.000 - use SET_DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceTaskTypes.SET_MAXIMUM_POWER_LEVEL_DURATION === params) return "SET_MAXIMUM_POWER_LEVEL_DURATION";
        /*        [Obsolete("v5.2.000 - use READ_DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceTaskTypes.READ_PRIMARY_MAXIMUM_POWER_LEVEL === params) return "READ_PRIMARY_MAXIMUM_POWER_LEVEL";
        /*        [Obsolete("v5.2.000 - use READ_DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceTaskTypes.READ_MAXIMUM_POWER_LEVEL_DURATION === params) return "READ_MAXIMUM_POWER_LEVEL_DURATION";
        /*        [Obsolete("v5.2.000 - use SET_DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceTaskTypes.SET_PRIMARY_MAXIMUM_POWER_STATUS === params) return "SET_PRIMARY_MAXIMUM_POWER_STATUS";
        /*        [Obsolete("v5.2.000 - use READ_DISCONNECT_THRESHOLDS_CONFIGURATION")]*/
        else if (Constants.DeviceTaskTypes.READ_PRIMARY_MAXIMUM_POWER_STATUS === params) return "READ_PRIMARY_MAXIMUM_POWER_STATUS";

        /*        [Obsolete("v6.0.000 - no replacement")]*/
        else if (Constants.DeviceTaskTypes.READ_DELTA_LOAD_PROFILE === params) return "READ_DELTA_LOAD_PROFILE";
        /*        [Obsolete("v6.0.000 - no replacement")]*/
        else if (Constants.DeviceTaskTypes.READ_CONTINUOUS_DELTA_LOAD_PROFILE === params) return "READ_CONTINUOUS_DELTA_LOAD_PROFILE";
        /*        [Obsolete("v6.0.000 - use READ_CONTROL_RELAYS")]*/
        else if (Constants.DeviceTaskTypes.READ_CONTROL_RELAY === params) return "READ_CONTROL_RELAY";
        ////////////////////////////////////////////////////////////////////////////////////////

        return "";
    }

    static decodeConstantsGatewayTaskTypes(params) {
        if (Constants.GatewayTaskTypes.UPDATE_FIRMWARE === params) return "UPDATE_FIRMWARE";
        else if (Constants.GatewayTaskTypes.SET_PPP_USERNAME === params) return "SET_PPP_USERNAME";
        else if (Constants.GatewayTaskTypes.SET_PPP_PASSWORD === params) return "SET_PPP_PASSWORD";
        else if (Constants.GatewayTaskTypes.READ_GATEWAY_TO_SERVER_IP_ADDRESS === params) return "READ_GATEWAY_TO_SERVER_IP_ADDRESS";
        else if (Constants.GatewayTaskTypes.SET_GATEWAY_TO_SERVER_IP_ADDRESS === params) return "SET_GATEWAY_TO_SERVER_IP_ADDRESS";
        else if (Constants.GatewayTaskTypes.READ_STATISTICS === params) return "READ_STATISTICS";
        else if (Constants.GatewayTaskTypes.SET_TOTAL_ENERGY_STATUS === params) return "SET_TOTAL_ENERGY_STATUS";
        else if (Constants.GatewayTaskTypes.BROADCAST_DISCONNECT_CONTROL_RELAY === params) return "BROADCAST_DISCONNECT_CONTROL_RELAY";
        else if (Constants.GatewayTaskTypes.BROADCAST_CONNECT_CONTROL_RELAY === params) return "BROADCAST_CONNECT_CONTROL_RELAY";
        else if (Constants.GatewayTaskTypes.READ_FIRMWARE_VERSION === params) return "READ_FIRMWARE_VERSION";
        else if (Constants.GatewayTaskTypes.READ_REPEATER_PATHS === params) return "READ_REPEATER_PATHS";
        else if (Constants.GatewayTaskTypes.REBOOT === params) return "REBOOT";
        else if (Constants.GatewayTaskTypes.DELETE_WAN_CONFIGURATION === params) return "DELETE_WAN_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.SET_DEVICE_LIMIT === params) return "SET_DEVICE_LIMIT";
        else if (Constants.GatewayTaskTypes.READ_DEVICE_LIMIT === params) return "READ_DEVICE_LIMIT";
        else if (Constants.GatewayTaskTypes.SET_PROCESS_CONFIGURATION === params) return "SET_PROCESS_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.READ_PROCESS_CONFIGURATION === params) return "READ_PROCESS_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.READ_DISCOVERED_DEVICES === params) return "READ_DISCOVERED_DEVICES";
        else if (Constants.GatewayTaskTypes.READ_WAN_CONFIGURATION === params) return "READ_WAN_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.SET_WAN_CONFIGURATION === params) return "SET_WAN_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.READ_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION === params) return "READ_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.SET_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION === params) return "SET_POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.READ_EVENT_CONFIGURATION === params) return "READ_EVENT_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.SET_EVENT_CONFIGURATION === params) return "SET_EVENT_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.ASSIGN_OPERATIONAL_PROFILE === params) return "ASSIGN_OPERATIONAL_PROFILE";
        else if (Constants.GatewayTaskTypes.COLLECT_REPLACEMENT_INFORMATION === params) return "COLLECT_REPLACEMENT_INFORMATION";
        else if (Constants.GatewayTaskTypes.READ_LOCAL_DATA_ACCESS_CONFIGURATION === params) return "READ_LOCAL_DATA_ACCESS_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.SET_LOCAL_DATA_ACCESS_CONFIGURATION === params) return "SET_LOCAL_DATA_ACCESS_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.READ_FEATURE_ACTIVATION === params) return "READ_FEATURE_ACTIVATION";
        else if (Constants.GatewayTaskTypes.SET_FEATURE_ACTIVATION === params) return "SET_FEATURE_ACTIVATION";

        //v5.0
        else if (Constants.GatewayTaskTypes.READ_FTP_CONFIGURATION === params) return "READ_FTP_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.SET_FTP_CONFIGURATION === params) return "SET_FTP_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.BROADCAST_WRITE_DEVICE_DATA === params) return "BROADCAST_WRITE_DEVICE_DATA";
        else if (Constants.GatewayTaskTypes.SEND_FILE === params) return "SEND_FILE";
        else if (Constants.GatewayTaskTypes.UPDATE_VIA_RESOURCE === params) return "UPDATE_VIA_RESOURCE";

        else if (Constants.GatewayTaskTypes.READ_GPS_COORDINATES === params) return "READ_GPS_COORDINATES";

        //V5.1
        else if (Constants.GatewayTaskTypes.SET_SETTINGS === params) return "SET_SETTINGS";
        else if (Constants.GatewayTaskTypes.READ_SETTINGS === params) return "READ_SETTINGS";

        //V5.3
        else if (Constants.GatewayTaskTypes.READ_LVGM === params) return "READ_LVGM";
        else if (Constants.GatewayTaskTypes.SET_LVGM_CONFIGURATION === params) return "SET_LVGM_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.READ_LVGM_CONFIGURATION === params) return "READ_LVGM_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.READ_GATEWAY_PHASE_INFORMATION === params) return "READ_GATEWAY_PHASE_INFORMATION";
        else if (Constants.GatewayTaskTypes.SET_GATEWAY_PHASE_CONFIGURATION === params) return "SET_GATEWAY_PHASE_CONFIGURATION";
        else if (Constants.GatewayTaskTypes.READ_WAN_STATUS === params) return "READ_WAN_STATUS";
        else if (Constants.GatewayTaskTypes.SET_GATEWAY_KEY === params) return "SET_GATEWAY_KEY";


        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayTaskTypes.READ_CONTROLLER_CONFIGURATION === params) return "READ_CONTROLLER_CONFIGURATION";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.GatewayTaskTypes.SET_CONTROLLER_CONFIGURATION === params) return "SET_CONTROLLER_CONFIGURATION";
        /*        [Obsolete("v5.4.000 - no replacement, no longer used")]*/
        else if (Constants.GatewayTaskTypes.BROADCAST_SET_PRIMARY_MAXIMUM_POWER_STATUS === params) return "BROADCAST_SET_PRIMARY_MAXIMUM_POWER_STATUS";
        ////////////////////////////////////////////////////////////////////////////////////////

        return "";
    }

    static decodeConstantsInternalTaskTypes(params) {
        if (Constants.InternalTaskTypes.SYNCHRONIZE_MEP_DEVICES === params) return "SYNCHRONIZE_MEP_DEVICES";
        else if (Constants.InternalTaskTypes.SCHEDULE === params) return "SCHEDULE";
        else if (Constants.InternalTaskTypes.SCHEDULE_DELETED === params) return "SCHEDULE_DELETED";
        else if (Constants.InternalTaskTypes.SCHEDULE_DISABLED === params) return "SCHEDULE_DISABLED";
        else if (Constants.InternalTaskTypes.SCHEDULE_ENABLED === params) return "SCHEDULE_ENABLED";
        else if (Constants.InternalTaskTypes.SCHEDULE_UPDATE === params) return "SCHEDULE_UPDATE";
        /*        [Obsolete("v5.4.000 - no replacement, no longer used")]*/
        else if (Constants.InternalTaskTypes.SCHEDULE_PROCESS_HEARTBEAT_FAILURE === params) return "SCHEDULE_PROCESS_HEARTBEAT_FAILURE";
        else if (Constants.InternalTaskTypes.SCHEDULE_ASSIGNMENT_CREATED === params) return "SCHEDULE_ASSIGNMENT_CREATED";
        else if (Constants.InternalTaskTypes.SCHEDULE_ASSIGNMENT_REMOVED === params) return "SCHEDULE_ASSIGNMENT_REMOVED";
        /*        [Obsolete("v5.4.000 - no replacement, no longer used")]*/
        else if (Constants.InternalTaskTypes.SCHEDULE_OBJECT_DELETED === params) return "SCHEDULE_OBJECT_DELETED";
        else if (Constants.InternalTaskTypes.SCHEDULE_OBJECT_ENABLED === params) return "SCHEDULE_OBJECT_ENABLED";
        else if (Constants.InternalTaskTypes.SCHEDULE_OBJECT_DISABLED === params) return "SCHEDULE_OBJECT_DISABLED";
        else if (Constants.InternalTaskTypes.ARCHIVE === params) return "ARCHIVE";
        else if (Constants.InternalTaskTypes.ADD_METER_DEVICE === params) return "ADD_METER_DEVICE";
        else if (Constants.InternalTaskTypes.MOVE_METER_DEVICE_ADD === params) return "MOVE_METER_DEVICE_ADD";
        else if (Constants.InternalTaskTypes.REMOVE_METER_DEVICE === params) return "REMOVE_METER_DEVICE";
        else if (Constants.InternalTaskTypes.MOVE_METER_DEVICE_REMOVE === params) return "MOVE_METER_DEVICE_REMOVE";
        else if (Constants.InternalTaskTypes.EVENT === params) return "EVENT";
        else if (Constants.InternalTaskTypes.CONNECT_GATEWAY === params) return "CONNECT_GATEWAY";
        else if (Constants.InternalTaskTypes.DISCONNECT_GATEWAY === params) return "DISCONNECT_GATEWAY";
        else if (Constants.InternalTaskTypes.CHECK_FOR_ORPHANED_CONNECTIONS === params) return "CHECK_FOR_ORPHANED_CONNECTIONS";
        else if (Constants.InternalTaskTypes.READ_METER_DEVICE_STATUS === params) return "READ_METER_DEVICE_STATUS";
        else if (Constants.InternalTaskTypes.READ_GATEWAY_VERSION === params) return "READ_GATEWAY_VERSION";
        else if (Constants.InternalTaskTypes.SET_STOP_MODE === params) return "SET_STOP_MODE";
        else if (Constants.InternalTaskTypes.SET_LOG_EVENTS_CONFIGURATION === params) return "SET_LOG_EVENTS_CONFIGURATION";
        else if (Constants.InternalTaskTypes.REMOVE_MBUS_DEVICE === params) return "REMOVE_MBUS_DEVICE";
        else if (Constants.InternalTaskTypes.CLEAR_EVENT_LOG_PENDING_OVERFLOW_ALARM === params) return "CLEAR_EVENT_LOG_PENDING_OVERFLOW_ALARM";
        else if (Constants.InternalTaskTypes.SYNCHRONIZE_METER_DEVICE_ALARMS === params) return "SYNCHRONIZE_METER_DEVICE_ALARMS";
        else if (Constants.InternalTaskTypes.READ_NEW_DISCOVERED_METER_DEVICES === params) return "READ_NEW_DISCOVERED_METER_DEVICES";
        else if (Constants.InternalTaskTypes.TASK_TIMEOUT === params) return "TASK_TIMEOUT";
        else if (Constants.InternalTaskTypes.RECOMMISSION === params) return "RECOMMISSION";
        else if (Constants.InternalTaskTypes.ATM_DC_BATCH === params) return "ATM_DC_BATCH";
        else if (Constants.InternalTaskTypes.ATM_METER_BATCH === params) return "ATM_METER_BATCH";
        else if (Constants.InternalTaskTypes.ATM_METER_ASSIGNMENT_BATCH === params) return "ATM_METER_ASSIGNMENT_BATCH";
        else if (Constants.InternalTaskTypes.ATM_FINALIZE_METER_ASSIGNMENTS === params) return "ATM_FINALIZE_METER_ASSIGNMENTS";
        else if (Constants.InternalTaskTypes.ATM_START_METER_PROCESS === params) return "ATM_START_METER_PROCESS";
        else if (Constants.InternalTaskTypes.ATM_START_DC_PROCESS === params) return "ATM_START_DC_PROCESS";
        else if (Constants.InternalTaskTypes.ATM_ENQUEUE_ASSIGNMENT_CONNECTS === params) return "ATM_ENQUEUE_ASSIGNMENT_CONNECTS";
        else if (Constants.InternalTaskTypes.ATM_READ_GATEWAY_DISCOVERED_DEVICES === params) return "ATM_READ_GATEWAY_DISCOVERED_DEVICES";
        else if (Constants.InternalTaskTypes.REMOVE_MEP_DEVICE === params) return "REMOVE_MEP_DEVICE";
        else if (Constants.InternalTaskTypes.SYNCHRONIZE_MEP_AND_MBUS_DEVICE_ALARMS === params) return "SYNCHRONIZE_MEP_AND_MBUS_DEVICE_ALARMS";
        else if (Constants.InternalTaskTypes.GATEWAY_REPLACEMENT_ADD_DEVICE === params) return "GATEWAY_REPLACEMENT_ADD_DEVICE";
        else if (Constants.InternalTaskTypes.COMMAND_HISTORY_ORPHAN_CHECK === params) return "COMMAND_HISTORY_ORPHAN_CHECK";
        else if (Constants.InternalTaskTypes.IMPORT_KEYS === params) return "IMPORT_KEYS";
        else if (Constants.InternalTaskTypes.ENCRYPT_EXISTING_GATEWAY_LOGIN === params) return "ENCRYPT_EXISTING_GATEWAY_LOGIN";
        else if (Constants.InternalTaskTypes.EXPORT_DATA === params) return "EXPORT_DATA";
        else if (Constants.InternalTaskTypes.IMPORT_NES_SYSTEM_SOFTWARE_EXPORT_RESULT === params) return "IMPORT_NES_SYSTEM_SOFTWARE_EXPORT_RESULT";
        else if (Constants.InternalTaskTypes.IMPORT_PROVISIONING_TOOL_CREATED_DATA_CONCENTRATOR_FILE === params) return "IMPORT_PROVISIONING_TOOL_CREATED_DATA_CONCENTRATOR_FILE";
        else if (Constants.InternalTaskTypes.UPDATE_DEVICE_DOMAIN_INFORMATION === params) return "UPDATE_DEVICE_DOMAIN_INFORMATION";
        else if (Constants.InternalTaskTypes.SYNCHRONIZE_DEVICE_LOAD_PROFILE_COLLECTION_CONFIGURATION === params) return "SYNCHRONIZE_DEVICE_LOAD_PROFILE_COLLECTION_CONFIGURATION";
        else if (Constants.InternalTaskTypes.SYNCHRONIZE_GATEWAY_COMPATIBILITY_SETTING === params) return "SYNCHRONIZE_GATEWAY_COMPATIBILITY_SETTING";
        else if (Constants.InternalTaskTypes.DETERMINE_DEVICE_PRIMARY_LOAD_PROFILE_DATA_SETS === params) return "DETERMINE_DEVICE_PRIMARY_LOAD_PROFILE_DATA_SETS";
        else if (Constants.InternalTaskTypes.SYNCHRONIZE_GATEWAY_COMPATIBILITY_SETTINGS === params) return "SYNCHRONIZE_GATEWAY_COMPATIBILITY_SETTINGS";
        else if (Constants.InternalTaskTypes.DATABASE_WORK === params) return "DATABASE_WORK";
        else if (Constants.InternalTaskTypes.STORE_COMMISSION_HISTORY_SIGNAL_QUALITY_DATA === params) return "STORE_COMMISSION_HISTORY_SIGNAL_QUALITY_DATA";
        else if (Constants.InternalTaskTypes.CIM_Meter_Reading === params) return "CIM_Meter_Reading";
        else if (Constants.InternalTaskTypes.PROCESS_DEVICE_EVENT_LOG_HISTORY === params) return "PROCESS_DEVICE_EVENT_LOG_HISTORY";
        else if (Constants.InternalTaskTypes.PROCESS_DEPRECATED_MAX_POWER_DATA === params) return "PROCESS_DEPRECATED_MAX_POWER_DATA";
        else if (Constants.InternalTaskTypes.DEBUG === params) return "DEBUG";

        //DEPRECATED -- The following InternalTaskTypes are deprecated

        /*        [Obsolete("v4.0 - use SYNCHRONIZE_MEP_AND_MBUS_DEVICE_ALARMS")]*/
        else if (Constants.InternalTaskTypes.SYNCHRONIZE_MBUS_DEVICE_ALARMS === params) return "SYNCHRONIZE_MBUS_DEVICE_ALARMS";

        /*        [Obsolete("v4.0- no replacement")]*/
        else if (Constants.InternalTaskTypes.READ_METER_DEVICE_FIRMWARE_AND_BOOTROM_VERSIONS === params) return "READ_METER_DEVICE_FIRMWARE_AND_BOOTROM_VERSIONS";

        /*        [Obsolete("v4.0 - no replacement")]*/
        else if (Constants.InternalTaskTypes.READ_METER_DEVICE_SOFTWARE_VERSION === params) return "READ_METER_DEVICE_SOFTWARE_VERSION";

        /*        [Obsolete("v4.0 - no replacement")]*/
        else if (Constants.InternalTaskTypes.READ_METER_DEVICE_FIRMWARE_VERSION === params) return "READ_METER_DEVICE_FIRMWARE_VERSION";

        /*        [Obsolete("v4.0 - no replacement")]*/
        else if (Constants.InternalTaskTypes.UPDATE_METER_FIRMWARE_TASK_TIMEOUT_PROCESSING === params) return "UPDATE_METER_FIRMWARE_TASK_TIMEOUT_PROCESSING";

        /*        [Obsolete("v5.0 - no replacement")]*/
        else if (Constants.InternalTaskTypes.SCHEDULE_PROCESS_SHUTDOWN === params) return "SCHEDULE_PROCESS_SHUTDOWN";

        return "";
    }

    static decodeConstantsEngineIPAddressAssignmentTypeID(params) {
        if (Constants.EngineIPAddressAssignmentTypeID.USER_ASSIGNED === params) return "USER_ASSIGNED";
        else if (Constants.EngineIPAddressAssignmentTypeID.SERVER_ASSIGNED === params) return "SERVER_ASSIGNED";

        return "";
    }

    static decodeConstantsDeviceTestPointStatusTypes(params) {
        if (Constants.DeviceTestPointStatusTypes.NOT_A_TEST_POINT === params) return "NOT_A_TEST_POINT";
        else if (Constants.DeviceTestPointStatusTypes.AUTOMATIC_TEST_POINT === params) return "AUTOMATIC_TEST_POINT";
        else if (Constants.DeviceTestPointStatusTypes.CONFIRMED_TEST_POINT === params) return "CONFIRMED_TEST_POINT";
        else if (Constants.DeviceTestPointStatusTypes.REMOVING_TEST_POINT === params) return "REMOVING_TEST_POINT";
        else if (Constants.DeviceTestPointStatusTypes.UNKNOWN === params) return "UNKNOWN";

        return "";
    }

    static decodeConstantsDeviceTestPointStatusCodes(params) {
        if (Constants.DeviceTestPointStatusCodes.NOT_A_TEST_POINT === params) return "NOT_A_TEST_POINT";
        else if (Constants.DeviceTestPointStatusCodes.AUTOMATIC_TEST_POINT === params) return "AUTOMATIC_TEST_POINT";
        else if (Constants.DeviceTestPointStatusCodes.CONFIRMED_TEST_POINT === params) return "CONFIRMED_TEST_POINT";
        else if (Constants.DeviceTestPointStatusCodes.REMOVING_TEST_POINT === params) return "REMOVING_TEST_POINT";

        return "";
    }

    static decodeConstantsGatewayMeshDetectionStatusTypes(params) {
        if (Constants.GatewayMeshDetectionStatusTypes.DETECTED_MESH === params) return "DETECTED_MESH";
        else if (Constants.GatewayMeshDetectionStatusTypes.DETECTED_NON_MESH === params) return "DETECTED_NON_MESH";
        else if (Constants.GatewayMeshDetectionStatusTypes.UNKNOWN === params) return "UNKNOWN";

        return "";
    }

    static decodeConstantsDCMeshDetectionStatusCodes(params) {
        if (Constants.DCMeshDetectionStatusCodes.DETECTED_NON_MESH === params) return "DETECTED_NON_MESH";
        else if (Constants.DCMeshDetectionStatusCodes.DETECTED_MESH === params) return "DETECTED_MESH";

        return "";
    }

    static decodeConstantsReadTOUCalendarOptionTypes(params) {
        if (Constants.ReadTOUCalendarOptionTypes.READ_ENTIRE_CALENDAR === params) return "READ_ENTIRE_CALENDAR";
        else if (Constants.ReadTOUCalendarOptionTypes.READ_CALENDAR_ID_ONLY === params) return "READ_CALENDAR_ID_ONLY";

        return "";
    }

    static decodeConstantsConnectRequestSourceTypes(params) {
        if (Constants.ConnectRequestSourceTypes.CORE_SERVICES_API === params) return "CORE_SERVICES_API";
        else if (Constants.ConnectRequestSourceTypes.SCHEDULED_COMMUNICATION === params) return "SCHEDULED_COMMUNICATION";
        else if (Constants.ConnectRequestSourceTypes.GATEWAY === params) return "GATEWAY";
        else if (Constants.ConnectRequestSourceTypes.ATM_ENGINE === params) return "ATM_ENGINE";

        return "";
    }

    static decodeConstantsTestTcpIpPortStatusTypes(params) {
        if (Constants.TestTcpIpPortStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.TestTcpIpPortStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsPassiveFtpIpAddressSourceTypes(params) {
        if (Constants.PassiveFtpIpAddressSourceTypes.FTP_REPLY_IP_ADDRESS === params) return "FTP_REPLY_IP_ADDRESS";
        else if (Constants.PassiveFtpIpAddressSourceTypes.SERVER_ROUTABLE_IP_ADDRESS === params) return "SERVER_ROUTABLE_IP_ADDRESS";

        return "";
    }

    static decodeConstantsEventHistorySortByTypes(params) {
        if (Constants.EventHistorySortByTypes.EVENT_DATE_TIME === params) return "EVENT_DATE_TIME";

        return "";
    }

    static decodeConstantsCommandHistorySortByTypes(params) {
        if (Constants.CommandHistorySortByTypes.REQUEST_DATE_TIME === params) return "REQUEST_DATE_TIME";

        return "";
    }

    static decodeConstantsRetrieveResultSortByTypes(params) {
        if (Constants.RetrieveResultSortByTypes.RESULT_DATE_TIME === params) return "RESULT_DATE_TIME";

        return "";
    }

    static decodeConstantsGatewayRetrieveCommunicationHistorySortByTypes(params) {
        if (Constants.GatewayRetrieveCommunicationHistorySortByTypes.REQUESTED_DATE_TIME === params) return "REQUESTED_DATE_TIME";

        return "";
    }

    static decodeConstantsFileRetrieveListSortByTypes(params) {
        if (Constants.FileRetrieveListSortByTypes.FILE_NAME === params) return "FILE_NAME";

        return "";
    }

    static decodeConstantsGatewayResources(params) {
        if (Constants.GatewayResources.DC_NODE_STATUS === params) return "DC_NODE_STATUS";
        else if (Constants.GatewayResources.DC_DEVICE_STATUS === params) return "DC_DEVICE_STATUS";
        else if (Constants.GatewayResources.DC_MEP_DEVICE_STATUS === params) return "DC_MEP_DEVICE_STATUS";
        else if (Constants.GatewayResources.DC_WAN_STATUS === params) return "DC_WAN_STATUS";
        else if (Constants.GatewayResources.DC_FUNCTION_STATUS === params) return "DC_FUNCTION_STATUS";

        return "";
    }

    static decodeConstantsProcessedStatusTypes(params) {
        if (Constants.ProcessedStatusTypes.PROCESSED === params) return "PROCESSED";
        else if (Constants.ProcessedStatusTypes.NOT_PROCESSED === params) return "NOT_PROCESSED";

        return "";
    }

    static decodeConstantsContinuousEventLogConfigurationStatusTypes(params) {
        if (Constants.ContinuousEventLogConfigurationStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.ContinuousEventLogConfigurationStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsContinuousEventLogConfigurationPriorityLevelTypes(params) {
        if (Constants.ContinuousEventLogConfigurationPriorityLevelTypes.CONTINUOUS_EVENT_LOG === params) return "CONTINUOUS_EVENT_LOG";
        else if (Constants.ContinuousEventLogConfigurationPriorityLevelTypes.PRIORITY_CONTINUOUS_EVENT_LOG === params) return "PRIORITY_CONTINUOUS_EVENT_LOG";

        return "";
    }

    static decodeConstantsInterfaceReadStatusTypes(params) {
        if (Constants.InterfaceReadStatusTypes.PENDING === params) return "PENDING";
        else if (Constants.InterfaceReadStatusTypes.COMPLETE === params) return "COMPLETE";
        else if (Constants.InterfaceReadStatusTypes.UNKNOWN === params) return "UNKNOWN";

        return "";
    }

    static decodeConstantsBillingInterfaceMismatchTypes(params) {
        if (Constants.BillingInterfaceMismatchTypes.MATCH === params) return "MATCH";
        else if (Constants.BillingInterfaceMismatchTypes.MISMATCH === params) return "MISMATCH";
        else if (Constants.BillingInterfaceMismatchTypes.UNKNOWN === params) return "UNKNOWN";

        return "";
    }

    static decodeConstantsMeterAlarmStatusTypes(params) {
        if (Constants.MeterAlarmStatusTypes.URGENT_EVENT === params) return "URGENT_EVENT";
        else if (Constants.MeterAlarmStatusTypes.NON_URGENT_EVENT === params) return "NON_URGENT_EVENT";
        else if (Constants.MeterAlarmStatusTypes.NO_EVENT === params) return "NO_EVENT";

        return "";
    }

    static decodeConstantsMeterAlarmContinuousEventLogStatusTypes(params) {
        if (Constants.MeterAlarmContinuousEventLogStatusTypes.EVENT_LOG_READ_ON_OCCURRENCE === params) return "EVENT_LOG_READ_ON_OCCURRENCE";
        else if (Constants.MeterAlarmContinuousEventLogStatusTypes.NO_EVENT_LOG_READ_ON_OCCURRENCE === params) return "NO_EVENT_LOG_READ_ON_OCCURRENCE";

        return "";
    }

    static decodeConstantsGatewayEventStatusTypes(params) {
        if (Constants.GatewayEventStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.GatewayEventStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsGatewayEventOnClearStatusTypes(params) {
        if (Constants.GatewayEventOnClearStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.GatewayEventOnClearStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsDCEvents(params) {
        if (Constants.DCEvents.HARDWARE_FAILURE === params) return "HARDWARE_FAILURE";
        else if (Constants.DCEvents.SOFTWARE_FAILURE === params) return "SOFTWARE_FAILURE";
        else if (Constants.DCEvents.DEVICE_COMMUNICATION_STATUS === params) return "DEVICE_COMMUNICATION_STATUS";
        else if (Constants.DCEvents.RECEIVED_DEVICE_CAUSE_CODE === params) return "RECEIVED_DEVICE_CAUSE_CODE";
        else if (Constants.DCEvents.DEVICE_ALARM === params) return "DEVICE_ALARM";
        else if (Constants.DCEvents.DETECTED_SEGMENT_DOWN === params) return "DETECTED_SEGMENT_DOWN";
        else if (Constants.DCEvents.FUNCTION_DONE === params) return "FUNCTION_DONE";
        else if (Constants.DCEvents.RESOURCE_EXHAUSTION === params) return "RESOURCE_EXHAUSTION";
        else if (Constants.DCEvents.UNPLANNED_REBOOT === params) return "UNPLANNED_REBOOT";
        else if (Constants.DCEvents.DEVICE_COMMUNICATION_FAILURE === params) return "DEVICE_COMMUNICATION_FAILURE";
        else if (Constants.DCEvents.SERVICE_TOOL_CONNECTED === params) return "SERVICE_TOOL_CONNECTED";
        else if (Constants.DCEvents.DETECTED_DEVICE_PHASE_CHANGE === params) return "DETECTED_DEVICE_PHASE_CHANGE";
        else if (Constants.DCEvents.DETECTED_DEVICE_CLOCK_ERROR === params) return "DETECTED_DEVICE_CLOCK_ERROR";
        else if (Constants.DCEvents.DETECTED_DEVICE_PHASE_INVERSION === params) return "DETECTED_DEVICE_PHASE_INVERSION";
        else if (Constants.DCEvents.PLANNED_REBOOT === params) return "PLANNED_REBOOT";
        else if (Constants.DCEvents.FLASH_LOW === params) return "FLASH_LOW";
        else if (Constants.DCEvents.SECURITY_EXCEPTION === params) return "SECURITY_EXCEPTION";
        else if (Constants.DCEvents.DETECTED_AUTO_DISCOVERED_MBUS_DEVICE === params) return "DETECTED_AUTO_DISCOVERED_MBUS_DEVICE";
        else if (Constants.DCEvents.MBUS_DEVICE_ALARM === params) return "MBUS_DEVICE_ALARM";
        else if (Constants.DCEvents.DETECTED_DEVICE_TEMP_DOWN === params) return "DETECTED_DEVICE_TEMP_DOWN";
        else if (Constants.DCEvents.AUTO_TEST_POINT_STATUS === params) return "AUTO_TEST_POINT_STATUS";
        else if (Constants.DCEvents.MESH_STATUS_DETECTED === params) return "MESH_STATUS_DETECTED";
        else if (Constants.DCEvents.DEVICE_NON_URGENT_ALARM === params) return "DEVICE_NON_URGENT_ALARM";
        else if (Constants.DCEvents.WAN_FAILURE === params) return "WAN_FAILURE";
        else if (Constants.DCEvents.WAN_SWITCH === params) return "WAN_SWITCH";
        else if (Constants.DCEvents.UNANSWERED_CALL_ALERT === params) return "UNANSWERED_CALL_ALERT";
        else if (Constants.DCEvents.CAPACITY_CHANGED === params) return "CAPACITY_CHANGED";
        else if (Constants.DCEvents.DETECTED_DEVICE_PHASE_INACCURACY === params) return "DETECTED_DEVICE_PHASE_INACCURACY";
        else if (Constants.DCEvents.WAN_EXCEPTION === params) return "WAN_EXCEPTION";
        else if (Constants.DCEvents.DETECTED_DEVICE_INVALID_DATA_AVAILABLE === params) return "DETECTED_DEVICE_INVALID_DATA_AVAILABLE";
        else if (Constants.DCEvents.PHASE_OUTAGE === params) return "PHASE_OUTAGE";
        else if (Constants.DCEvents.TEMPERATURE_ALERT === params) return "TEMPERATURE_ALERT";
        else if (Constants.DCEvents.CONFIGURATION_ERROR === params) return "CONFIGURATION_ERROR";
        else if (Constants.DCEvents.DETECTED_DEVICE_BROWN_OUT === params) return "DETECTED_DEVICE_BROWN_OUT";
        else if (Constants.DCEvents.MODEM_STATUS_UPDATE === params) return "MODEM_STATUS_UPDATE";
        else if (Constants.DCEvents.EXTERNAL_EVENT_0 === params) return "EXTERNAL_EVENT_0";
        else if (Constants.DCEvents.GPS_COORDINATES_REPORTED === params) return "GPS_COORDINATES_REPORTED";
        else if (Constants.DCEvents.CLIENT_PROCESS_RESTART_OCCURRED === params) return "CLIENT_PROCESS_RESTART_OCCURRED";
        else if (Constants.DCEvents.CONFIGURATION_STATE_CHANGE_REPORTED === params) return "CONFIGURATION_STATE_CHANGE_REPORTED";
        else if (Constants.DCEvents.CRITICAL_MESSAGE_LOG_REPORTED === params) return "CRITICAL_MESSAGE_LOG_REPORTED";
        else if (Constants.DCEvents.COMMUNICATION_PROTOCOL_SECURITY_LOGIN_FAILURE === params) return "COMMUNICATION_PROTOCOL_SECURITY_LOGIN_FAILURE";
        else if (Constants.DCEvents.COMMUNICATION_PROTOCOL_SECURITY_LOCKOUT === params) return "COMMUNICATION_PROTOCOL_SECURITY_LOCKOUT";
        else if (Constants.DCEvents.WIRELESS_MAC_ID_LOGIN_FAILURE === params) return "WIRELESS_MAC_ID_LOGIN_FAILURE";
        else if (Constants.DCEvents.WIRELESS_PROTECTED_ACCESS_LOGIN_FAILURE === params) return "WIRELESS_PROTECTED_ACCESS_LOGIN_FAILURE";
        else if (Constants.DCEvents.TAMPER_DETECTED === params) return "TAMPER_DETECTED";
        else if (Constants.DCEvents.DETECTED_INVALID_DEVICE_LOAD_PROFILE_DATA_SET_COLLECTION_REQUESTED === params) return "DETECTED_INVALID_DEVICE_LOAD_PROFILE_DATA_SET_COLLECTION_REQUESTED";
        else if (Constants.DCEvents.PHASE_ROTATION === params) return "PHASE_ROTATION";
        else if (Constants.DCEvents.COMMISSION_STATUS_CHANGED === params) return "COMMISSION_STATUS_CHANGED";

        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.DCEvents.NODE_TO_NODE_NETWORK_MINIMUM_PEER_COUNT_THRESHOLD_EXCEEDED === params) return "NODE_TO_NODE_NETWORK_MINIMUM_PEER_COUNT_THRESHOLD_EXCEEDED";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.DCEvents.BACKUP_POWER_THRESHOLD_EXCEEDED === params) return "BACKUP_POWER_THRESHOLD_EXCEEDED";
        /*        [Obsolete("v5.3 - no replacement, no longer used")]*/
        else if (Constants.DCEvents.WIRELESS_ACCESS_POINT_INTRUSION_LOCKOUT_OCCURRED === params) return "WIRELESS_ACCESS_POINT_INTRUSION_LOCKOUT_OCCURRED";

        return "";
    }

    static decodeConstantsMeterAlarms(params) {
        if (Constants.MeterAlarms.CONFIGURATION_ERROR === params) return "CONFIGURATION_ERROR";
        else if (Constants.MeterAlarms.SYSTEM_RESET === params) return "SYSTEM_RESET";
        else if (Constants.MeterAlarms.RAM_FAILURE === params) return "RAM_FAILURE";
        else if (Constants.MeterAlarms.ROM_FAILURE === params) return "ROM_FAILURE";
        else if (Constants.MeterAlarms.NON_VOLATILE_MEMORY_FAILURE === params) return "NON_VOLATILE_MEMORY_FAILURE";
        else if (Constants.MeterAlarms.CLOCK_ERROR === params) return "CLOCK_ERROR";
        else if (Constants.MeterAlarms.MEASUREMENT_ERROR === params) return "MEASUREMENT_ERROR";
        else if (Constants.MeterAlarms.LOW_BATTERY === params) return "LOW_BATTERY";
        else if (Constants.MeterAlarms.POWER_FAILURE === params) return "POWER_FAILURE";
        else if (Constants.MeterAlarms.TAMPER_DETECTED === params) return "TAMPER_DETECTED";
        else if (Constants.MeterAlarms.REVERSE_ENERGY === params) return "REVERSE_ENERGY";
        else if (Constants.MeterAlarms.DATA_BACKUP_INCOMPLETE === params) return "DATA_BACKUP_INCOMPLETE";
        else if (Constants.MeterAlarms.DISCONNECT_SWITCH_ERROR === params) return "DISCONNECT_SWITCH_ERROR";
        else if (Constants.MeterAlarms.LOAD_PROFILE_OVERFLOW === params) return "LOAD_PROFILE_OVERFLOW";
        else if (Constants.MeterAlarms.LOAD_DISCONNECT_STATUS_CHANGE === params) return "LOAD_DISCONNECT_STATUS_CHANGE";
        else if (Constants.MeterAlarms.CONTROL_RELAY_STATUS_CHANGE === params) return "CONTROL_RELAY_STATUS_CHANGE";
        else if (Constants.MeterAlarms.PHASE_LOSS === params) return "PHASE_LOSS";
        else if (Constants.MeterAlarms.PHASE_INVERSION === params) return "PHASE_INVERSION";
        else if (Constants.MeterAlarms.PLC_COMMUNICATION_FAILURE === params) return "PLC_COMMUNICATION_FAILURE";
        else if (Constants.MeterAlarms.GENERAL_ERROR === params) return "GENERAL_ERROR";
        else if (Constants.MeterAlarms.INVALID_PASSWORD_OVER_OPTICAL === params) return "INVALID_PASSWORD_OVER_OPTICAL";
        else if (Constants.MeterAlarms.REMOTE_COMMUNICATIONS_INACTIVE === params) return "REMOTE_COMMUNICATIONS_INACTIVE";
        else if (Constants.MeterAlarms.CURRENT_ON_MISSING_OR_UNUSED_PHASE === params) return "CURRENT_ON_MISSING_OR_UNUSED_PHASE";
        else if (Constants.MeterAlarms.PULSE_INPUT_1_TAMPER === params) return "PULSE_INPUT_1_TAMPER";
        else if (Constants.MeterAlarms.PULSE_INPUT_2_TAMPER === params) return "PULSE_INPUT_2_TAMPER";
        else if (Constants.MeterAlarms.LOAD_PROFILE_BACKFILL_FAILED === params) return "LOAD_PROFILE_BACKFILL_FAILED";
        else if (Constants.MeterAlarms.INTERNAL_EXPANSION_MODULE_CARD_INSTALLATION_OR_REMOVAL === params) return "INTERNAL_EXPANSION_MODULE_CARD_INSTALLATION_OR_REMOVAL";
        else if (Constants.MeterAlarms.PHASE_ROTATION === params) return "PHASE_ROTATION";
        else if (Constants.MeterAlarms.PREPAY_CREDIT_EXHAUSTED === params) return "PREPAY_CREDIT_EXHAUSTED";
        else if (Constants.MeterAlarms.PREPAY_WARNING_ACKNOWLEDGEMENT === params) return "PREPAY_WARNING_ACKNOWLEDGEMENT";
        else if (Constants.MeterAlarms.EVENT_LOG_PENDING_OVERFLOW === params) return "EVENT_LOG_PENDING_OVERFLOW";
        else if (Constants.MeterAlarms.POWER_QUALITY_EVENT_DETECTED === params) return "POWER_QUALITY_EVENT_DETECTED";
        else if (Constants.MeterAlarms.UNREAD_EVENT_LOG_ENTRY_EXISTS === params) return "UNREAD_EVENT_LOG_ENTRY_EXISTS";
        else if (Constants.MeterAlarms.MAGNETIC_TAMPER === params) return "MAGNETIC_TAMPER";
        else if (Constants.MeterAlarms.ACCESS_LOCKOUT_OVERRIDE === params) return "ACCESS_LOCKOUT_OVERRIDE";
        else if (Constants.MeterAlarms.LOAD_SIDE_VOLTAGE_WITH_OPEN_DISCONNECT_SWITCH === params) return "LOAD_SIDE_VOLTAGE_WITH_OPEN_DISCONNECT_SWITCH";
        else if (Constants.MeterAlarms.TOTAL_HARMONIC_DISTORTION_EVENT_DETECTED === params) return "TOTAL_HARMONIC_DISTORTION_EVENT_DETECTED";
        else if (Constants.MeterAlarms.HIGH_FREQUENCY_NOISE_DETECTED === params) return "HIGH_FREQUENCY_NOISE_DETECTED";
        else if (Constants.MeterAlarms.EXTERNAL_VARIABLE_ALARM_DETECTED === params) return "EXTERNAL_VARIABLE_ALARM_DETECTED";
        else if (Constants.MeterAlarms.UNBALANCED_VOLTAGE_DETECTED === params) return "UNBALANCED_VOLTAGE_DETECTED";
        else if (Constants.MeterAlarms.KEY_CHANGED === params) return "KEY_CHANGED";
        else if (Constants.MeterAlarms.PASSWORD_EXPIRATION_PENDING === params) return "PASSWORD_EXPIRATION_PENDING";
        else if (Constants.MeterAlarms.FIRMWARE_SEPARATION_VIOLATION === params) return "FIRMWARE_SEPARATION_VIOLATION";
        else if (Constants.MeterAlarms.NEUTRAL_DEVIATION_EARTH_FAULT === params) return "NEUTRAL_DEVIATION_EARTH_FAULT";
        else if (Constants.MeterAlarms.POINT_TO_POINT_SECURITY_ALARM === params) return "POINT_TO_POINT_SECURITY_ALARM";
        else if (Constants.MeterAlarms.POINT_TO_POINT_MODEM_ERROR === params) return "POINT_TO_POINT_MODEM_ERROR";
        else if (Constants.MeterAlarms.MEA_AUTO_DISCOVERY_COMPLETE === params) return "MEA_AUTO_DISCOVERY_COMPLETE";
        else if (Constants.MeterAlarms.LP1_UNREAD_ENTRIES_AVAILABLE === params) return "LP1_UNREAD_ENTRIES_AVAILABLE";
        else if (Constants.MeterAlarms.LP2_UNREAD_ENTRIES_AVAILABLE === params) return "LP2_UNREAD_ENTRIES_AVAILABLE";
        else if (Constants.MeterAlarms.LP3_UNREAD_ENTRIES_AVAILABLE === params) return "LP3_UNREAD_ENTRIES_AVAILABLE";
        else if (Constants.MeterAlarms.LP4_UNREAD_ENTRIES_AVAILABLE === params) return "LP4_UNREAD_ENTRIES_AVAILABLE";
        else if (Constants.MeterAlarms.SELF_READ_OCCURRED === params) return "SELF_READ_OCCURRED";
        else if (Constants.MeterAlarms.SOFTWARE_DOWNLOAD_FAILED === params) return "SOFTWARE_DOWNLOAD_FAILED";
        else if (Constants.MeterAlarms.CODE_BANK_CHANGED === params) return "CODE_BANK_CHANGED";
        else if (Constants.MeterAlarms.MEA_ALARM === params) return "MEA_ALARM";
        else if (Constants.MeterAlarms.MFG_LOG_ENTRY_AVAILABLE === params) return "MFG_LOG_ENTRY_AVAILABLE";
        else if (Constants.MeterAlarms.INTERFACE_CHANGED === params) return "INTERFACE_CHANGED";
        else if (Constants.MeterAlarms.G3_ALARM === params) return "G3_ALARM";
        else if (Constants.MeterAlarms.G3_EVENT_LOGGED === params) return "G3_EVENT_LOGGED";
        else if (Constants.MeterAlarms.CONTROL_RELAY_2_STATUS_CHANGE === params) return "CONTROL_RELAY_2_STATUS_CHANGE";

        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////

        /*        [Obsolete("v4.1 - use CONTROL_RELAY_STATUS_CHANGE")]*/
        else if (Constants.MeterAlarms.CONTROL_RELAY_ACTIVATED === params) return "CONTROL_RELAY_ACTIVATED";
        /*        [Obsolete("v6.0.000 - use NEUTRAL_DEVIATION_EARTH_FAULT")]*/
        else if (Constants.MeterAlarms.NEUTRAL_BYPASS_DETECTED === params) return "NEUTRAL_BYPASS_DETECTED";

        return "";
    }

    static decodeConstantsMBusAndMEPAlarms(params) {
        if (Constants.MBusAndMEPAlarms.DEVICE_ALARM_REPORTED === params) return "DEVICE_ALARM_REPORTED";
        else if (Constants.MBusAndMEPAlarms.BILLING_READ_OVERFLOW_OCCURRED === params) return "BILLING_READ_OVERFLOW_OCCURRED";
        else if (Constants.MBusAndMEPAlarms.FAILED_COMMUNICATIONS_ON_READ === params) return "FAILED_COMMUNICATIONS_ON_READ";
        else if (Constants.MBusAndMEPAlarms.BILLING_READ_SERIAL_NUMBER_MISMATCH === params) return "BILLING_READ_SERIAL_NUMBER_MISMATCH";

        return "";
    }

    static decodeConstantsDataConcentratorHardwareFailureCodes(params) {
        if (Constants.DataConcentratorHardwareFailureCodes.DRAM === params) return "DRAM";
        else if (Constants.DataConcentratorHardwareFailureCodes.FLASH === params) return "FLASH";
        else if (Constants.DataConcentratorHardwareFailureCodes.SRAM === params) return "SRAM";
        else if (Constants.DataConcentratorHardwareFailureCodes.RTC === params) return "RTC";
        else if (Constants.DataConcentratorHardwareFailureCodes.NEURON === params) return "NEURON";
        else if (Constants.DataConcentratorHardwareFailureCodes.CLOCK === params) return "CLOCK";
        else if (Constants.DataConcentratorHardwareFailureCodes.PHASE === params) return "PHASE";

        return "";
    }

    static decodeConstantsDataConcentratorSoftwareFailureCodes(params) {
        if (Constants.DataConcentratorSoftwareFailureCodes.NONE === params) return "NONE";
        else if (Constants.DataConcentratorSoftwareFailureCodes.BOOT_LOOP === params) return "BOOT_LOOP";
        else if (Constants.DataConcentratorSoftwareFailureCodes.FILE_ERROR === params) return "FILE_ERROR";
        else if (Constants.DataConcentratorSoftwareFailureCodes.DCX_UPDATE === params) return "DCX_UPDATE";
        else if (Constants.DataConcentratorSoftwareFailureCodes.RTC_NOT_SET === params) return "RTC_NOT_SET";
        else if (Constants.DataConcentratorSoftwareFailureCodes.UPDATE_IMAGE_CRC === params) return "UPDATE_IMAGE_CRC";
        else if (Constants.DataConcentratorSoftwareFailureCodes.RTC_BATTERY_LOW === params) return "RTC_BATTERY_LOW";
        else if (Constants.DataConcentratorSoftwareFailureCodes.INVALID_PPP_USERNAME_OR_PASSWORD === params) return "INVALID_PPP_USERNAME_OR_PASSWORD";
        else if (Constants.DataConcentratorSoftwareFailureCodes.INTERNAL_REPEATING_LISTS_ERROR === params) return "INTERNAL_REPEATING_LISTS_ERROR";
        else if (Constants.DataConcentratorSoftwareFailureCodes.SRAM_CHECKSUM_ERROR === params) return "SRAM_CHECKSUM_ERROR";
        else if (Constants.DataConcentratorSoftwareFailureCodes.IMPROPER_SHUTDOWN === params) return "IMPROPER_SHUTDOWN";
        else if (Constants.DataConcentratorSoftwareFailureCodes.EXTENDED_DATA_PROPERTY_ERROR === params) return "EXTENDED_DATA_PROPERTY_ERROR";

        return "";
    }

    //The integer constants in this class are mapped to the GUID
    //constants in the GatewayToDeviceCommunicationStatusTypes class
    static decodeConstantsDataConcentratorDeviceCommunicationStatusCodes(params) {
        if (Constants.DataConcentratorDeviceCommunicationStatusCodes.UP === params) return "UP";
        else if (Constants.DataConcentratorDeviceCommunicationStatusCodes.DOWN === params) return "DOWN";
        else if (Constants.DataConcentratorDeviceCommunicationStatusCodes.NO_AGENT === params) return "NO_AGENT";
        else if (Constants.DataConcentratorDeviceCommunicationStatusCodes.CONFIRMED_DOWN === params) return "CONFIRMED_DOWN";
        else if (Constants.DataConcentratorDeviceCommunicationStatusCodes.NASCENT === params) return "NASCENT";
        else if (Constants.DataConcentratorDeviceCommunicationStatusCodes.WRONG_KEY === params) return "WRONG_KEY";
        else if (Constants.DataConcentratorDeviceCommunicationStatusCodes.INVALID_NEURON_STATE === params) return "INVALID_NEURON_STATE";
        else if (Constants.DataConcentratorDeviceCommunicationStatusCodes.UNKNOWN === params) return "UNKNOWN";
        else if (Constants.DataConcentratorDeviceCommunicationStatusCodes.CONFIRMED_NO_AGENT === params) return "CONFIRMED_NO_AGENT";
        else if (Constants.DataConcentratorDeviceCommunicationStatusCodes.PHASE_FAILURE === params) return "PHASE_FAILURE";
        else if (Constants.DataConcentratorDeviceCommunicationStatusCodes.INVALID_SECURITY === params) return "INVALID_SECURITY";
        else if (Constants.DataConcentratorDeviceCommunicationStatusCodes.INVALID_SEQUENCE === params) return "INVALID_SEQUENCE";
        else if (Constants.DataConcentratorDeviceCommunicationStatusCodes.STALE_KEY === params) return "STALE_KEY";

        return "";
    }

    //The GUID constants in this class are mapped to the integer
    //constants in the DataConcentratorDeviceCommunicationStatusCodes class
    static decodeConstantsGatewayToDeviceCommunicationStatusTypes(params) {
        // ------------METER type specific---------------
        if (Constants.GatewayToDeviceCommunicationStatusTypes.UNKNOWN === params) return "UNKNOWN";
        else if (Constants.GatewayToDeviceCommunicationStatusTypes.UP === params) return "UP";
        else if (Constants.GatewayToDeviceCommunicationStatusTypes.DOWN === params) return "DOWN";
        else if (Constants.GatewayToDeviceCommunicationStatusTypes.CONFIRMED_DOWN === params) return "CONFIRMED_DOWN";
        else if (Constants.GatewayToDeviceCommunicationStatusTypes.NO_AGENT === params) return "NO_AGENT";
        else if (Constants.GatewayToDeviceCommunicationStatusTypes.NASCENT === params) return "NASCENT";
        else if (Constants.GatewayToDeviceCommunicationStatusTypes.WRONG_KEY === params) return "WRONG_KEY";
        else if (Constants.GatewayToDeviceCommunicationStatusTypes.INVALID_NEURON_STATE === params) return "INVALID_NEURON_STATE";
        else if (Constants.GatewayToDeviceCommunicationStatusTypes.CONFIRMED_NO_AGENT === params) return "CONFIRMED_NO_AGENT";
        else if (Constants.GatewayToDeviceCommunicationStatusTypes.PHASE_FAILURE === params) return "PHASE_FAILURE";
        else if (Constants.GatewayToDeviceCommunicationStatusTypes.INVALID_SECURITY === params) return "INVALID_SECURITY";
        else if (Constants.GatewayToDeviceCommunicationStatusTypes.INVALID_SEQUENCE === params) return "INVALID_SEQUENCE";
        else if (Constants.GatewayToDeviceCommunicationStatusTypes.STALE_KEY === params) return "STALE_KEY";
        // -----------------------------------------

        return "";
    }

    static decodeConstantsDeviceNackCodes(params) {
        if (Constants.DeviceNackCodes.OK === params) return "OK";
        else if (Constants.DeviceNackCodes.ERROR === params) return "ERROR";
        else if (Constants.DeviceNackCodes.SERVICE_NOT_SUPPORTED === params) return "SERVICE_NOT_SUPPORTED";
        else if (Constants.DeviceNackCodes.INSUFFICIENT_SECURITY_CLEARANCE === params) return "INSUFFICIENT_SECURITY_CLEARANCE";
        else if (Constants.DeviceNackCodes.OPERATION_NOT_POSSIBLE === params) return "OPERATION_NOT_POSSIBLE";
        else if (Constants.DeviceNackCodes.INAPPROPRIATE_ACTION === params) return "INAPPROPRIATE_ACTION";
        else if (Constants.DeviceNackCodes.BUSY === params) return "BUSY";
        else if (Constants.DeviceNackCodes.LOCKED === params) return "LOCKED";
        else if (Constants.DeviceNackCodes.INVALID_SERVICE_SEQUENCE_STATE === params) return "INVALID_SERVICE_SEQUENCE_STATE";
        else if (Constants.DeviceNackCodes.DIGEST_ERROR === params) return "DIGEST_ERROR";
        else if (Constants.DeviceNackCodes.SEQUENCE_NUMBER_ERROR === params) return "SEQUENCE_NUMBER_ERROR";
        else if (Constants.DeviceNackCodes.INCOMPATIBLE_ERROR === params) return "INCOMPATIBLE_ERROR";
        else if (Constants.DeviceNackCodes.INTERFACE_CHANGE === params) return "INTERFACE_CHANGE";
        else if (Constants.DeviceNackCodes.PROC_COMPLETED === params) return "PROC_COMPLETED";
        else if (Constants.DeviceNackCodes.PROC_ACCEPTED === params) return "PROC_ACCEPTED";
        else if (Constants.DeviceNackCodes.PROC_INVALID_PARAM === params) return "PROC_INVALID_PARAM";
        else if (Constants.DeviceNackCodes.PROC_CONFLICT_SETUP === params) return "PROC_CONFLICT_SETUP";
        else if (Constants.DeviceNackCodes.PROC_TIMING_CONSTRAINT === params) return "PROC_TIMING_CONSTRAINT";
        else if (Constants.DeviceNackCodes.PROC_NO_AUTHORIZATION === params) return "PROC_NO_AUTHORIZATION";
        else if (Constants.DeviceNackCodes.PROC_UNRECOGNIZED === params) return "PROC_UNRECOGNIZED";

        return "";
    }

    static decodeConstantsDataConcentratorResourceExhaustionCodes(params) {
        if (Constants.DataConcentratorResourceExhaustionCodes.DCXP_EVENT === params) return "DCXP_EVENT";
        else if (Constants.DataConcentratorResourceExhaustionCodes.DCXP_RESULT === params) return "DCXP_RESULT";
        else if (Constants.DataConcentratorResourceExhaustionCodes.DCXP_DATA === params) return "DCXP_DATA";
        else if (Constants.DataConcentratorResourceExhaustionCodes.DCX_MEP_DEVICE === params) return "DCX_MEP_DEVICE";

        return "";
    }

    static decodeConstantsDataConcentratorRebootCodes(params) {
        if (Constants.DataConcentratorRebootCodes.POWER_UP === params) return "POWER_UP";
        else if (Constants.DataConcentratorRebootCodes.PANIC_RESET === params) return "PANIC_RESET";
        else if (Constants.DataConcentratorRebootCodes.CACHE_FLUSH_FAIL === params) return "CACHE_FLUSH_FAIL";
        else if (Constants.DataConcentratorRebootCodes.CLOCK_WRAPAROUND === params) return "CLOCK_WRAPAROUND";
        else if (Constants.DataConcentratorRebootCodes.EXTERNAL_REQUEST === params) return "EXTERNAL_REQUEST";
        else if (Constants.DataConcentratorRebootCodes.LOCAL_REQUEST === params) return "LOCAL_REQUEST";
        else if (Constants.DataConcentratorRebootCodes.BOOT_API_RESET === params) return "BOOT_API_RESET";
        else if (Constants.DataConcentratorRebootCodes.NO_MEMORY === params) return "NO_MEMORY";
        else if (Constants.DataConcentratorRebootCodes.WATCHDOG === params) return "WATCHDOG";
        else if (Constants.DataConcentratorRebootCodes.REASON_OUT_OF_RANGE === params) return "REASON_OUT_OF_RANGE";
        else if (Constants.DataConcentratorRebootCodes.MODEM_FAILURE === params) return "MODEM_FAILURE";
        else if (Constants.DataConcentratorRebootCodes.UNKNOWN_EXCEPTION === params) return "UNKNOWN_EXCEPTION";
        else if (Constants.DataConcentratorRebootCodes.FATAL_TAMPER === params) return "FATAL_TAMPER";
        else if (Constants.DataConcentratorRebootCodes.BUFFER_EXHAUSTION === params) return "BUFFER_EXHAUSTION";
        else if (Constants.DataConcentratorRebootCodes.WAN_INACTIVE === params) return "WAN_INACTIVE";

        return "";
    }

    static decodeConstantsDataConcentratorCauseCodes(params) {
        if (Constants.DataConcentratorCauseCodes.NO_ERROR === params) return "NO_ERROR";
        else if (Constants.DataConcentratorCauseCodes.UNKNOWN === params) return "UNKNOWN";
        else if (Constants.DataConcentratorCauseCodes.RESOURCE_NOT_FOUND === params) return "RESOURCE_NOT_FOUND";
        else if (Constants.DataConcentratorCauseCodes.NOT_IMPLEMENTED === params) return "NOT_IMPLEMENTED";
        else if (Constants.DataConcentratorCauseCodes.INVALID_PARAMETER === params) return "INVALID_PARAMETER";
        else if (Constants.DataConcentratorCauseCodes.OPERATION_FAILED === params) return "OPERATION_FAILED";
        else if (Constants.DataConcentratorCauseCodes.INTERNAL_FAILURE === params) return "INTERNAL_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.OUT_OF_RANGE === params) return "OUT_OF_RANGE";
        else if (Constants.DataConcentratorCauseCodes.INVALID_LENGTH === params) return "INVALID_LENGTH";
        else if (Constants.DataConcentratorCauseCodes.PROPERTY_NOT_FOUND === params) return "PROPERTY_NOT_FOUND";
        else if (Constants.DataConcentratorCauseCodes.OPERATION_NOT_ALLOWED === params) return "OPERATION_NOT_ALLOWED";
        else if (Constants.DataConcentratorCauseCodes.REPEAT_CHAIN_TOO_LONG === params) return "REPEAT_CHAIN_TOO_LONG";
        else if (Constants.DataConcentratorCauseCodes.LIMIT_EXCEEDED === params) return "LIMIT_EXCEEDED";
        else if (Constants.DataConcentratorCauseCodes.RESOURCE_DISABLED === params) return "RESOURCE_DISABLED";
        else if (Constants.DataConcentratorCauseCodes.PREVIOUS_SEGMENT_NOT_FOUND === params) return "PREVIOUS_SEGMENT_NOT_FOUND";
        else if (Constants.DataConcentratorCauseCodes.SEGMENT_LOOP === params) return "SEGMENT_LOOP";
        else if (Constants.DataConcentratorCauseCodes.DUPLICATE_NODE_ADDRESS === params) return "DUPLICATE_NODE_ADDRESS";
        else if (Constants.DataConcentratorCauseCodes.SEGMENT_NOT_FOUND === params) return "SEGMENT_NOT_FOUND";
        else if (Constants.DataConcentratorCauseCodes.RESOURCE_IN_USE === params) return "RESOURCE_IN_USE";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_NOT_DEFINED === params) return "DEVICE_NOT_DEFINED";
        else if (Constants.DataConcentratorCauseCodes.MESSAGE_SET_NOT_FOUND === params) return "MESSAGE_SET_NOT_FOUND";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_DID_NOT_RESPOND === params) return "DEVICE_DID_NOT_RESPOND";
        else if (Constants.DataConcentratorCauseCodes.FUNCTION_ABORTED === params) return "FUNCTION_ABORTED";
        else if (Constants.DataConcentratorCauseCodes.OPERATION_EXPIRED === params) return "OPERATION_EXPIRED";
        else if (Constants.DataConcentratorCauseCodes.INVALID_SEGMENT === params) return "INVALID_SEGMENT";
        else if (Constants.DataConcentratorCauseCodes.INCUFFICIENT_RESOURCES === params) return "INCUFFICIENT_RESOURCES";
        else if (Constants.DataConcentratorCauseCodes.INVALID_DATETIME === params) return "INVALID_DATETIME";
        else if (Constants.DataConcentratorCauseCodes.IMAGE_NOT_FOUND === params) return "IMAGE_NOT_FOUND";
        else if (Constants.DataConcentratorCauseCodes.IMAGE_CRC_FAILURE === params) return "IMAGE_CRC_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.TOO_MANY_TEST_POINTS === params) return "TOO_MANY_TEST_POINTS";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_PROCEDURE_FAIL === params) return "DEVICE_PROCEDURE_FAIL";
        else if (Constants.DataConcentratorCauseCodes.TARGET_DISABLED === params) return "TARGET_DISABLED";
        else if (Constants.DataConcentratorCauseCodes.ADDRESS_ERROR === params) return "ADDRESS_ERROR";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_NOT_REACHABLE === params) return "DEVICE_NOT_REACHABLE";
        else if (Constants.DataConcentratorCauseCodes.AUTH_RESPONSE_FAILURE === params) return "AUTH_RESPONSE_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.RESPONSE_NOT_AUTHENTIC === params) return "RESPONSE_NOT_AUTHENTIC";
        else if (Constants.DataConcentratorCauseCodes.INVALID_RESPONSE === params) return "INVALID_RESPONSE";
        else if (Constants.DataConcentratorCauseCodes.TARGET_DOES_NOT_ANSWER_AGENT === params) return "TARGET_DOES_NOT_ANSWER_AGENT";
        else if (Constants.DataConcentratorCauseCodes.TARGET_OFFLINE === params) return "TARGET_OFFLINE";
        else if (Constants.DataConcentratorCauseCodes.REPEATER_1_FAILURE === params) return "REPEATER_1_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.REPEATER_2_FAILURE === params) return "REPEATER_2_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.REPEATER_3_FAILURE === params) return "REPEATER_3_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.REPEATER_4_FAILURE === params) return "REPEATER_4_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.REPEATER_5_FAILURE === params) return "REPEATER_5_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.REPEATER_6_FAILURE === params) return "REPEATER_6_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.REPEATER_7_FAILURE === params) return "REPEATER_7_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.REPEATER_8_FAILURE === params) return "REPEATER_8_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.PHASE_NOT_MEASURABLE === params) return "PHASE_NOT_MEASURABLE";
        else if (Constants.DataConcentratorCauseCodes.INVALID_STATE === params) return "INVALID_STATE";
        else if (Constants.DataConcentratorCauseCodes.GENERIC_RESPONSE_FAILURE === params) return "GENERIC_RESPONSE_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.INVALID_HANDLE === params) return "INVALID_HANDLE";
        else if (Constants.DataConcentratorCauseCodes.INVALID_STATE_FOR_ONLINE === params) return "INVALID_STATE_FOR_ONLINE";
        else if (Constants.DataConcentratorCauseCodes.INVALID_DEVICE_TYPE_FOR_OPERATION === params) return "INVALID_DEVICE_TYPE_FOR_OPERATION";
        else if (Constants.DataConcentratorCauseCodes.AGENT_HAD_NO_BUFFER_FOR_RESPONSE === params) return "AGENT_HAD_NO_BUFFER_FOR_RESPONSE";
        else if (Constants.DataConcentratorCauseCodes.APPLICATION_AUTHENTICATION_FAILURE === params) return "APPLICATION_AUTHENTICATION_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.DCXP_SOCKET_NOT_SECURED === params) return "DCXP_SOCKET_NOT_SECURED";
        else if (Constants.DataConcentratorCauseCodes.DCX_NOT_READY_TO_HANDLE_REQUEST === params) return "DCX_NOT_READY_TO_HANDLE_REQUEST";
        else if (Constants.DataConcentratorCauseCodes.COMPRESSION_FAILURE === params) return "COMPRESSION_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.DATA_OVERFLOW === params) return "DATA_OVERFLOW";
        else if (Constants.DataConcentratorCauseCodes.INVALID_DATATYPE === params) return "INVALID_DATATYPE";
        else if (Constants.DataConcentratorCauseCodes.DUPLICATE_PROPERTY === params) return "DUPLICATE_PROPERTY";
        else if (Constants.DataConcentratorCauseCodes.TRANSACTION_NUMBER_MISMATCH === params) return "TRANSACTION_NUMBER_MISMATCH";
        else if (Constants.DataConcentratorCauseCodes.TRANSACTION_NUMBER_INTEGRITY === params) return "TRANSACTION_NUMBER_INTEGRITY";
        else if (Constants.DataConcentratorCauseCodes.MEP_DEVICE_NOT_FOUND === params) return "MEP_DEVICE_NOT_FOUND";
        else if (Constants.DataConcentratorCauseCodes.OPERATION_INTERRUPTION === params) return "OPERATION_INTERRUPTION";
        else if (Constants.DataConcentratorCauseCodes.MIXED_ENCRYPTION === params) return "MIXED_ENCRYPTION";
        else if (Constants.DataConcentratorCauseCodes.WRONG_KEY === params) return "WRONG_KEY";
        else if (Constants.DataConcentratorCauseCodes.CAPABILITY_REQUIRED === params) return "CAPABILITY_REQUIRED";
        else if (Constants.DataConcentratorCauseCodes.DECRYPTION_FAILURE === params) return "DECRYPTION_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.OPERATION_REJECTED === params) return "OPERATION_REJECTED";
        else if (Constants.DataConcentratorCauseCodes.NOT_MODIFIABLE === params) return "NOT_MODIFIABLE";
        else if (Constants.DataConcentratorCauseCodes.PHASE_ABORT === params) return "PHASE_ABORT";
        else if (Constants.DataConcentratorCauseCodes.WAN_CONFIG_ERROR === params) return "WAN_CONFIG_ERROR";
        else if (Constants.DataConcentratorCauseCodes.UNEXPECTED_DEVICE_RESET === params) return "UNEXPECTED_DEVICE_RESET";
        else if (Constants.DataConcentratorCauseCodes.MODEL_NUMBER_MISMATCH === params) return "MODEL_NUMBER_MISMATCH";
        else if (Constants.DataConcentratorCauseCodes.FIRMWARE_VERSION_NUMBER_MISMATCH === params) return "FIRMWARE_VERSION_NUMBER_MISMATCH";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_IS_READ_WRITE_PROTECTED === params) return "DEVICE_IS_READ_WRITE_PROTECTED";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_APP_CHECKSUM_VERIFICATION_FAILED === params) return "DEVICE_APP_CHECKSUM_VERIFICATION_FAILED";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_DATA_ERROR === params) return "DEVICE_DATA_ERROR";
        else if (Constants.DataConcentratorCauseCodes.IDI_MISMATCH === params) return "IDI_MISMATCH";
        else if (Constants.DataConcentratorCauseCodes.NOT_EXECUTED === params) return "NOT_EXECUTED";
        else if (Constants.DataConcentratorCauseCodes.RESOURCE_DATA_ERROR === params) return "RESOURCE_DATA_ERROR";
        else if (Constants.DataConcentratorCauseCodes.DORMANT_STATE === params) return "DORMANT_STATE";
        else if (Constants.DataConcentratorCauseCodes.UNABLE_TO_INSTALL_UPGRADE === params) return "UNABLE_TO_INSTALL_UPGRADE";
        else if (Constants.DataConcentratorCauseCodes.INVALID_IMAGE === params) return "INVALID_IMAGE";
        else if (Constants.DataConcentratorCauseCodes.UPGRADE_SCRIPT_ERROR === params) return "UPGRADE_SCRIPT_ERROR";
        else if (Constants.DataConcentratorCauseCodes.IMAGE_SWITCH_FAILED === params) return "IMAGE_SWITCH_FAILED";
        else if (Constants.DataConcentratorCauseCodes.UNDEFINED_DATA_GROUP === params) return "UNDEFINED_DATA_GROUP";
        else if (Constants.DataConcentratorCauseCodes.UNDEFINED_DATA_SOURCE === params) return "UNDEFINED_DATA_SOURCE";
        else if (Constants.DataConcentratorCauseCodes.CO_PROCESSOR_IMAGE_LOADING_ERROR === params) return "CO_PROCESSOR_IMAGE_LOADING_ERROR";
        else if (Constants.DataConcentratorCauseCodes.LONTALK_NETWORK_INTERFACE_CURRENTLY_DISABLED === params) return "LONTALK_NETWORK_INTERFACE_CURRENTLY_DISABLED";
        else if (Constants.DataConcentratorCauseCodes.DUPLICATE_KEY_WITH_NEW_COMMAND === params) return "DUPLICATE_KEY_WITH_NEW_COMMAND";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_FCM_NOT_SUPPORTED === params) return "DEVICE_FCM_NOT_SUPPORTED";
        else if (Constants.DataConcentratorCauseCodes.KEY_TYPE_INVALID === params) return "KEY_TYPE_INVALID";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_KEY_NOT_SET === params) return "DEVICE_KEY_NOT_SET";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_RESPONSE_CODE_UNKNOWN === params) return "DEVICE_RESPONSE_CODE_UNKNOWN";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_REQUEST_REJECTED === params) return "DEVICE_REQUEST_REJECTED";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_SERVICE_NOT_SUPPORTED === params) return "DEVICE_SERVICE_NOT_SUPPORTED";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_SECURITY_FAILURE === params) return "DEVICE_SECURITY_FAILURE";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_OPERATION_NOT_POSSIBLE === params) return "DEVICE_OPERATION_NOT_POSSIBLE";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_ACTION_INAPPROPRIATE === params) return "DEVICE_ACTION_INAPPROPRIATE";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_BUSY === params) return "DEVICE_BUSY";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_DATA_NOT_READY === params) return "DEVICE_DATA_NOT_READY";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_DATA_LOCKED === params) return "DEVICE_DATA_LOCKED";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_RENEGOTIATE_REQUEST === params) return "DEVICE_RENEGOTIATE_REQUEST";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_INVALID_SERVICE_SEQUENCE_STATE === params) return "DEVICE_INVALID_SERVICE_SEQUENCE_STATE";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_COULD_NOT_AUTHENTICATE_REQUEST === params) return "DEVICE_COULD_NOT_AUTHENTICATE_REQUEST";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_INVALID_AUTHENTICATION_SEQUENCE_NUMBER === params) return "DEVICE_INVALID_AUTHENTICATION_SEQUENCE_NUMBER";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_PROCEDURE_ACCEPTED_BUT_NOT_COMPLETE === params) return "DEVICE_PROCEDURE_ACCEPTED_BUT_NOT_COMPLETE";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_PROCEDURE_INVALID_PARAMETER === params) return "DEVICE_PROCEDURE_INVALID_PARAMETER";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_PROCEDURE_CONFIGURATION_CONFLICT === params) return "DEVICE_PROCEDURE_CONFIGURATION_CONFLICT";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_PROCEDURE_TIMING_CONSTRAINT === params) return "DEVICE_PROCEDURE_TIMING_CONSTRAINT";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_PROCEDURE_NOT_AUTHORIZED === params) return "DEVICE_PROCEDURE_NOT_AUTHORIZED";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_PROCEDURE_ID_INVALID === params) return "DEVICE_PROCEDURE_ID_INVALID";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_ON_DEMAND_REQUEST_TABLE_FULL === params) return "DEVICE_ON_DEMAND_REQUEST_TABLE_FULL";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_UNKNOWN_PROC_RESPONSE === params) return "DEVICE_UNKNOWN_PROC_RESPONSE";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_ICA_NACK === params) return "DEVICE_ICA_NACK";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_INCOMPATIBLE_REQUEST === params) return "DEVICE_INCOMPATIBLE_REQUEST";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_UNIQUE_KEY_EXPIRED === params) return "DEVICE_UNIQUE_KEY_EXPIRED";
        else if (Constants.DataConcentratorCauseCodes.DEVICE_INCOMPATIBLE_REQUEST_2 === params) return "DEVICE_INCOMPATIBLE_REQUEST_2";

        return "";
    }

    static decodeConstantsDataConcentratorSecurityExceptionCodes(params) {
        if (Constants.DataConcentratorSecurityExceptionCodes.NONE === params) return "NONE";
        else if (Constants.DataConcentratorSecurityExceptionCodes.ST_CONSOLE_PASSWORD_FAILURE === params) return "ST_CONSOLE_PASSWORD_FAILURE";
        else if (Constants.DataConcentratorSecurityExceptionCodes.ST_PPP_CHAP_FAILURE === params) return "ST_PPP_CHAP_FAILURE";
        else if (Constants.DataConcentratorSecurityExceptionCodes.WAN_PPP_CHAP_FAILURE === params) return "WAN_PPP_CHAP_FAILURE";
        else if (Constants.DataConcentratorSecurityExceptionCodes.WAN_APP_AUTH_FAILURE === params) return "WAN_APP_AUTH_FAILURE";
        else if (Constants.DataConcentratorSecurityExceptionCodes.WAN_SSL_FAILURE === params) return "WAN_SSL_FAILURE";
        else if (Constants.DataConcentratorSecurityExceptionCodes.LOCAL_SSL_FAILURE === params) return "LOCAL_SSL_FAILURE";
        else if (Constants.DataConcentratorSecurityExceptionCodes.DCXP_SESSION_LOGIN_TIMEOUT === params) return "DCXP_SESSION_LOGIN_TIMEOUT";
        else if (Constants.DataConcentratorSecurityExceptionCodes.DCXP_SESSION_CAPABILITY_UNRECOGNIZED_BY_PEER === params) return "DCXP_SESSION_CAPABILITY_UNRECOGNIZED_BY_PEER";
        else if (Constants.DataConcentratorSecurityExceptionCodes.DCXP_SESSION_CAPABILITY_NOT_AGREED_BY_PEER === params) return "DCXP_SESSION_CAPABILITY_NOT_AGREED_BY_PEER";

        return "";
    }

    static decodeConstantsSelfReadRetrievalStatusTypes(params) {
        if (Constants.SelfReadRetrievalStatusTypes.INCLUDE === params) return "INCLUDE";
        else if (Constants.SelfReadRetrievalStatusTypes.EXCLUDE === params) return "EXCLUDE";

        return "";
    }

    static decodeConstantsContinuousDeltaLoadProfileCollectionStatusTypes(params) {
        if (Constants.ContinuousDeltaLoadProfileCollectionStatusTypes.DISABLED === params) return "DISABLED";
        else if (Constants.ContinuousDeltaLoadProfileCollectionStatusTypes.ENABLED === params) return "ENABLED";

        return "";
    }

    static decodeConstantsContinuousDeltaLoadProfileCollectionStoppedReasonTypes(params) {

        if (Constants.ContinuousDeltaLoadProfileCollectionStoppedReasonTypes.GATEWAY_CONTINUOUS_MODE_NOT_SUPPORTED === params) return "GATEWAY_CONTINUOUS_MODE_NOT_SUPPORTED";
        else if (Constants.ContinuousDeltaLoadProfileCollectionStoppedReasonTypes.SYSTEM_CONTINUOUS_MODE_NOT_SUPPORTED === params) return "SYSTEM_CONTINUOUS_MODE_NOT_SUPPORTED";
        else if (Constants.ContinuousDeltaLoadProfileCollectionStoppedReasonTypes.GATEWAY_LOAD_PROFILE_DATA_SET_NOT_SUPPORTED === params) return "GATEWAY_LOAD_PROFILE_DATA_SET_NOT_SUPPORTED";

        ////////////////////////////////////////////////////////////////////////////////////////
        //The following are deprecated - the version in which they were deprecated and the    //
        //constant replacing them (if any) is listed to the right of the constant.            //
        ////////////////////////////////////////////////////////////////////////////////////////

        /*        [Obsolete("v5.0.01 - no replacement")]*/
        else if (Constants.ContinuousDeltaLoadProfileCollectionStoppedReasonTypes.FAILED_ENABLE_DEVICE_CONTINUOUS_DELTA_LOAD_PROFILE_STATUS === params) return "FAILED_ENABLE_DEVICE_CONTINUOUS_DELTA_LOAD_PROFILE_STATUS";

        return "";
    }

    static decodeConstantsCumulativeDemandStatusTypes(params) {
        if (Constants.CumulativeDemandStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.CumulativeDemandStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsContinuousCumulativeDemandStatusTypes(params) {
        if (Constants.ContinuousCumulativeDemandStatusTypes.ENABLED === params) return "ENABLED";
        else if (Constants.ContinuousCumulativeDemandStatusTypes.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsPresentDemandCalculationTypes(params) {
        if (Constants.PresentDemandCalculationTypes.USE_ENTIRE_INTERVAL_LENGTH === params) return "USE_ENTIRE_INTERVAL_LENGTH";
        else if (Constants.PresentDemandCalculationTypes.USE_TIME_SINCE_LAST_END_OF_INTERVAL === params) return "USE_TIME_SINCE_LAST_END_OF_INTERVAL";

        return "";
    }

    static decodeConstantsDemandConfigurationFailureTypes(params) {
        if (Constants.DemandConfigurationFailureTypes.GENERAL_FAILURE === params) return "GENERAL_FAILURE";
        else if (Constants.DemandConfigurationFailureTypes.INSUFFICIENT_MEMORY === params) return "INSUFFICIENT_MEMORY";
        else if (Constants.DemandConfigurationFailureTypes.DEMAND_NOT_ACTIVATED === params) return "DEMAND_NOT_ACTIVATED";

        return "";
    }

    static decodeConstantsPhaseStatusTypes(params) {
        if (Constants.PhaseStatusTypes.POWERED === params) return "POWERED";
        else if (Constants.PhaseStatusTypes.NOT_POWERED === params) return "NOT_POWERED";

        return "";
    }

    static decodeConstantsLoadProfileConfigurationAnsiComplianceStatusTypes(params) {
        if (Constants.LoadProfileConfigurationAnsiComplianceStatusTypes.COMPLIANT === params) return "COMPLIANT";
        else if (Constants.LoadProfileConfigurationAnsiComplianceStatusTypes.NOT_COMPLIANT === params) return "NOT_COMPLIANT";

        return "";
    }

    static decodeConstantsLoadProfileConfigurationSkippedIntervalValuesTypes(params) {
        if (Constants.LoadProfileConfigurationSkippedIntervalValuesTypes.INSTANTANEOUS_VALUES_SET_TO_ZERO === params) return "INSTANTANEOUS_VALUES_SET_TO_ZERO";
        else if (Constants.LoadProfileConfigurationSkippedIntervalValuesTypes.INSTANTANEOUS_VALUES_FROM_PREVIOUS_INTERVAL === params) return "INSTANTANEOUS_VALUES_FROM_PREVIOUS_INTERVAL";

        return "";
    }

    static decodeConstantsDemandConfigurationStatusTypes(params) {
        if (Constants.DemandConfigurationStatusTypes.KNOWN_CONFIGURATION === params) return "KNOWN_CONFIGURATION";
        else if (Constants.DemandConfigurationStatusTypes.UNKNOWN_CONFIGURATION === params) return "UNKNOWN_CONFIGURATION";

        return "";
    }

    static decodeConstantsDeviceKeyCategories(params) {
        if (Constants.DeviceKeyCategories.METER_OEM === params) return "METER_OEM";
        else if (Constants.DeviceKeyCategories.METER_DEMAND_ACTIVATION === params) return "METER_DEMAND_ACTIVATION";

        return "";
    }

    static decodeConstantsGatewayKeyCategories(params) {
        if (Constants.GatewayKeyCategories.DATA_CONCENTRATOR_DEVICE_LIMIT === params) return "DATA_CONCENTRATOR_DEVICE_LIMIT";
        else if (Constants.GatewayKeyCategories.DATA_CONCENTRATOR_OEM === params) return "DATA_CONCENTRATOR_OEM";
        else if (Constants.GatewayKeyCategories.DATA_CONCENTRATOR_FEATURE === params) return "DATA_CONCENTRATOR_FEATURE";

        return "";
    }

    static decodeConstantsDataContentReturnTypes(params) {
        if (Constants.DataContentReturnTypes.COUNT_ONLY === params) return "COUNT_ONLY";
        else if (Constants.DataContentReturnTypes.LIST_AND_COUNT === params) return "LIST_AND_COUNT";
        else if (Constants.DataContentReturnTypes.LIST_ONLY === params) return "LIST_ONLY";

        return "";
    }

    static decodeConstantsLogicalRestrictionTypes(params) {
        if (Constants.LogicalRestrictionTypes.OR === params) return "OR";
        else if (Constants.LogicalRestrictionTypes.AND === params) return "AND";

        return "";
    }

    static decodeConstantsGatewayRetrieveListSortByTypes(params) {
        if (Constants.GatewayRetrieveListSortByTypes.GATEWAY_NAME === params) return "GATEWAY_NAME";
        else if (Constants.GatewayRetrieveListSortByTypes.LAST_SERVER_INITIATED_HIGH_PRIORITY_COMMUNICATION_DATE_TIME === params) return "LAST_SERVER_INITIATED_HIGH_PRIORITY_COMMUNICATION_DATE_TIME";
        else if (Constants.GatewayRetrieveListSortByTypes.LAST_SERVER_INITIATED_NORMAL_PRIORITY_COMMUNICATION_DATE_TIME === params) return "LAST_SERVER_INITIATED_NORMAL_PRIORITY_COMMUNICATION_DATE_TIME";
        else if (Constants.GatewayRetrieveListSortByTypes.LAST_GATEWAY_INITIATED_COMMUNICATION_DATE_TIME === params) return "LAST_GATEWAY_INITIATED_COMMUNICATION_DATE_TIME";

        return "";
    }

    static decodeConstantsValueMatchTypes(params) {
        if (Constants.ValueMatchTypes.EQUALS === params) return "EQUALS";
        else if (Constants.ValueMatchTypes.CONTAINS === params) return "CONTAINS";

        return "";
    }

    static decodeConstantsGatewayAtmModeTypes(params) {
        if (Constants.GatewayAtmModeTypes.AUTOMATIC_ASSIGNMENT === params) return "AUTOMATIC_ASSIGNMENT";
        else if (Constants.GatewayAtmModeTypes.MANUAL_ASSIGNMENT === params) return "MANUAL_ASSIGNMENT";

        return "";
    }

    static decodeConstantsDeviceAtmModeTypes(params) {
        if (Constants.DeviceAtmModeTypes.AUTOMATIC_ASSIGNMENT === params) return "AUTOMATIC_ASSIGNMENT";
        else if (Constants.DeviceAtmModeTypes.MANUAL_ASSIGNMENT === params) return "MANUAL_ASSIGNMENT";

        return "";
    }

    static decodeConstantsEventTypes(params) {
        if (Constants.EventTypes.GATEWAY === params) return "GATEWAY";
        else if (Constants.EventTypes.DEVICE === params) return "DEVICE";
        else if (Constants.EventTypes.SYSTEM === params) return "SYSTEM";

        return "";
    }

    static decodeConstantsDeviceRetrieveListSortByTypes(params) {
        if (Constants.DeviceRetrieveListSortByTypes.DEVICE_NAME === params) return "DEVICE_NAME";
        else if (Constants.DeviceRetrieveListSortByTypes.GATEWAY_NAME === params) return "GATEWAY_NAME";
        else if (Constants.DeviceRetrieveListSortByTypes.LAST_DELTA_LOAD_PROFILE_RESULT_RECEIVED_DATE_TIME === params) return "LAST_DELTA_LOAD_PROFILE_RESULT_RECEIVED_DATE_TIME";
        else if (Constants.DeviceRetrieveListSortByTypes.LAST_END_OF_CYCLE_BILLING_DATA_RESULT_RECEIVED_DATE_TIME === params) return "LAST_END_OF_CYCLE_BILLING_DATA_RESULT_RECEIVED_DATE_TIME";

        return "";
    }

    static decodeConstantsDemandActivatedValues(params) {
        if (Constants.DemandActivatedValues.UNKNOWN === params) return "UNKNOWN";
        else if (Constants.DemandActivatedValues.NOT_ACTIVATED === params) return "NOT_ACTIVATED";
        else if (Constants.DemandActivatedValues.ACTIVATED === params) return "ACTIVATED";

        return "";
    }

    static decodeConstantsDemandConfiguredValues(params) {
        if (Constants.DemandConfiguredValues.UNKNOWN === params) return "UNKNOWN";
        else if (Constants.DemandConfiguredValues.NOT_CONFIGURED === params) return "NOT_CONFIGURED";
        else if (Constants.DemandConfiguredValues.CONFIGURED === params) return "CONFIGURED";

        return "";
    }

    static decodeConstantsGatewayEventRetrieveTypes(params) {
        if (Constants.GatewayEventRetrieveTypes.GATEWAY_ONLY === params) return "GATEWAY_ONLY";
        else if (Constants.GatewayEventRetrieveTypes.GATEWAY_AND_DEVICE === params) return "GATEWAY_AND_DEVICE";

        return "";
    }

    static decodeConstantsHierarchyRetrieveTypes(params) {
        if (Constants.HierarchyRetrieveTypes.NOT_ASSIGNED === params) return "NOT_ASSIGNED";

        return "";
    }

    static decodeConstantsAttributeRetrieveTypes(params) {
        if (Constants.AttributeRetrieveTypes.NOT_ASSIGNED === params) return "NOT_ASSIGNED";

        return "";
    }

    static decodeConstantsCommandCancelledTypes(params) {
        if (Constants.CommandCancelledTypes.DUPLICATE_SET_LOCAL_DATA_ACCESS_CONFIGURATION_TASK === params) return "DUPLICATE_SET_LOCAL_DATA_ACCESS_CONFIGURATION_TASK";

        return "";
    }

    static decodeConstantsCommandFailureReasonTypes(params) {
        if (Constants.CommandFailureReasonTypes.INTERFACE_UNAVAILABLE === params) return "INTERFACE_UNAVAILABLE";
        else if (Constants.CommandFailureReasonTypes.CONFIGURATION_ERROR === params) return "CONFIGURATION_ERROR";

        return "";
    }

    static decodeConstantsCommissionProcessModes(params) {
        if (Constants.CommissionProcessModes.SCHEDULE === params) return "SCHEDULE";
        else if (Constants.CommissionProcessModes.IMMEDIATE === params) return "IMMEDIATE";

        return "";
    }

    static decodeConstantsDataConcentratorLoadProfileSourceTypes(params) {
        if (Constants.DataConcentratorLoadProfileSourceTypes.FILE === params) return "FILE";
        else if (Constants.DataConcentratorLoadProfileSourceTypes.DATA_RESOURCE === params) return "DATA_RESOURCE";

        return "";
    }

    static decodeConstantsMepReadScheduleFrequencyTypes(params) {
        if (Constants.MepReadScheduleFrequencyTypes.HOURLY === params) return "HOURLY";
        else if (Constants.MepReadScheduleFrequencyTypes.DAILY === params) return "DAILY";
        else if (Constants.MepReadScheduleFrequencyTypes.WEEKLY === params) return "WEEKLY";
        else if (Constants.MepReadScheduleFrequencyTypes.MONTHLY === params) return "MONTHLY";
        else if (Constants.MepReadScheduleFrequencyTypes.NEVER === params) return "NEVER";

        return "";
    }

    static decodeConstantsDataUrgencyTypes(params) {
        if (Constants.DataUrgencyTypes.URGENT === params) return "URGENT";
        else if (Constants.DataUrgencyTypes.NON_URGENT === params) return "NON_URGENT";

        return "";
    }

    static decodeConstantsMeterKeyTypes(params) {
        if (Constants.MeterKeyTypes.OPTICAL === params) return "OPTICAL";
        else if (Constants.MeterKeyTypes.POINT_TO_POINT === params) return "POINT_TO_POINT";

        return "";
    }

    static decodeConstantsGatewayKeyTypes(params) {
        if (Constants.GatewayKeyTypes.PLC === params) return "PLC";

        return "";
    }

    static decodeConstantsPowerLineCarrierModes(params) {
        if (Constants.PowerLineCarrierModes.EXTERNAL === params) return "EXTERNAL";
        else if (Constants.PowerLineCarrierModes.INTERNAL === params) return "INTERNAL";

        return "";
    }

    static decodeConstantsPowerLineCarrierModeTransitions(params) {
        if (Constants.PowerLineCarrierModeTransitions.SYNCHRONIZED === params) return "SYNCHRONIZED";
        IMMEDIATE = 1;

        return "";
    }

    static decodeConstantsWANAdapterStatus(params) {
        if (Constants.WANAdapterStatus.ON === params) return "ON";
        else if (Constants.WANAdapterStatus.OFF === params) return "OFF";

        return "";
    }

    static decodeConstantsTHDCalculationMethods(params) {
        if (Constants.THDCalculationMethods.OPTION_1 === params) return "OPTION_1";
        else if (Constants.THDCalculationMethods.OPTION_2 === params) return "OPTION_2";

        return "";
    }

    static decodeConstantsAtmActions(params) {
        if (Constants.AtmActions.AUTOMATIC_ASSIGNMENT === params) return "AUTOMATIC_ASSIGNMENT";
        else if (Constants.AtmActions.ASSIGNED === params) return "ASSIGNED";
        else if (Constants.AtmActions.UNASSIGNED === params) return "UNASSIGNED";
        else if (Constants.AtmActions.FINAL_PLACEMENT === params) return "FINAL_PLACEMENT";
        else if (Constants.AtmActions.MANUAL_ASSIGNMENT === params) return "MANUAL_ASSIGNMENT";
        else if (Constants.AtmActions.NO_ACTION === params) return "NO_ACTION";

        return "";
    }

    static decodeConstantsAtmAssignmentFailureCodes(params) {
        if (Constants.AtmAssignmentFailureCodes.OVERALL_DEVICE_ATM_PROCESS_TIMEOUT_EXPIRED === params) return "OVERALL_DEVICE_ATM_PROCESS_TIMEOUT_EXPIRED";
        else if (Constants.AtmAssignmentFailureCodes.NO_CANDIDATE_GATEWAY_FOUND === params) return "NO_CANDIDATE_GATEWAY_FOUND";
        else if (Constants.AtmAssignmentFailureCodes.ASSIGNMNET_TO_CANDIDATE_GATEWAY_FAILED === params) return "ASSIGNMNET_TO_CANDIDATE_GATEWAY_FAILED";

        return "";
    }

    static decodeConstantsAtmUnassignReasonCodes(params) {
        if (Constants.AtmUnassignReasonCodes.AUTO_ASSIGNMENT === params) return "AUTO_ASSIGNMENT";
        else if (Constants.AtmUnassignReasonCodes.COMMISSION_DATA_COLLECTED === params) return "COMMISSION_DATA_COLLECTED";
        else if (Constants.AtmUnassignReasonCodes.ADD_FAILED === params) return "ADD_FAILED";
        else if (Constants.AtmUnassignReasonCodes.COMMISSION_TIMEOUT === params) return "COMMISSION_TIMEOUT";
        else if (Constants.AtmUnassignReasonCodes.FINAL_TIMEOUT === params) return "FINAL_TIMEOUT";

        return "";
    }

    static decodeConstantsAtmManualAssignmentReasonCodes(params) {
        if (Constants.AtmManualAssignmentReasonCodes.MAX_ASSIGNMENTS_NO_CANDIDATE_GATEWAY === params) return "MAX_ASSIGNMENTS_NO_CANDIDATE_GATEWAY";
        else if (Constants.AtmManualAssignmentReasonCodes.FINAL_TIMEOUT === params) return "FINAL_TIMEOUT";
        else if (Constants.AtmManualAssignmentReasonCodes.FINAL_ASSIGNMENT_FAILURE === params) return "FINAL_ASSIGNMENT_FAILURE";
        else if (Constants.AtmManualAssignmentReasonCodes.ACCEPTABLE_GATEWAY_FOUND === params) return "ACCEPTABLE_GATEWAY_FOUND";
        else if (Constants.AtmManualAssignmentReasonCodes.SET_DEVICE_ATM_CONFIGURATION === params) return "SET_DEVICE_ATM_CONFIGURATION";

        return "";
    }

    static decodeConstantsAtmNoActionReasonCodes(params) {
        if (Constants.AtmNoActionReasonCodes.NO_DISCOVERY_DATA === params) return "NO_DISCOVERY_DATA";
        else if (Constants.AtmNoActionReasonCodes.DISCOVERY_DATA_INVALID === params) return "DISCOVERY_DATA_INVALID";
        else if (Constants.AtmNoActionReasonCodes.COMMISSION_ATTEMPT_IN_PROGRESS === params) return "COMMISSION_ATTEMPT_IN_PROGRESS";

        return "";
    }

    static decodeConstantsAtmFinalPlacementReasonCodes(params) {
        if (Constants.AtmFinalPlacementReasonCodes.MAX_ASSIGNMENTS_REACHED === params) return "MAX_ASSIGNMENTS_REACHED";
        else if (Constants.AtmFinalPlacementReasonCodes.NO_NEW_DISCOVERY_DATA === params) return "NO_NEW_DISCOVERY_DATA";

        return "";
    }

    static decodeConstantsAtmDiscoveryDataValidityCodes(params) {
        if (Constants.AtmDiscoveryDataValidityCodes.VALID === params) return "VALID";
        else if (Constants.AtmDiscoveryDataValidityCodes.TOO_OLD === params) return "TOO_OLD";
        else if (Constants.AtmDiscoveryDataValidityCodes.COMMISSION_ALREADY_COLLECTED === params) return "COMMISSION_ALREADY_COLLECTED";
        else if (Constants.AtmDiscoveryDataValidityCodes.MAX_ASSIGNMENTS_REACHED === params) return "MAX_ASSIGNMENTS_REACHED";

        return "";
    }

    static decodeConstantsConsumptionBasedControlStatus(params) {
        if (Constants.ConsumptionBasedControlStatus.ENABLED === params) return "ENABLED";
        else if (Constants.ConsumptionBasedControlStatus.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsPowerThresholdSource(params) {
        if (Constants.PowerThresholdSource.FORWARD_PLUS_REVERSE_POWER === params) return "FORWARD_PLUS_REVERSE_POWER";
        else if (Constants.PowerThresholdSource.FORWARD_MINUS_REVERSE_POWER === params) return "FORWARD_MINUS_REVERSE_POWER";

        return "";
    }

    static decodeConstantsDataRecordHeaderEntryTypes(params) {
        if (Constants.DataRecordHeaderEntryTypes.NOT_USED === params) return "NOT_USED";
        else if (Constants.DataRecordHeaderEntryTypes.MBUS_BASE === params) return "MBUS_BASE";
        else if (Constants.DataRecordHeaderEntryTypes.MEP_BASE === params) return "MEP_BASE";
        else if (Constants.DataRecordHeaderEntryTypes.EXTENSION === params) return "EXTENSION";

        return "";
    }

    static decodeConstantsControlRelayTierStatus(params) {
        if (Constants.ControlRelayTierStatus.DISABLED === params) return "DISABLED";
        else if (Constants.ControlRelayTierStatus.ENABLED === params) return "ENABLED";

        return "";
    }

    static decodeConstantsControlRelayState(params) {
        if (Constants.ControlRelayState.DISCONNECT === params) return "DISCONNECT";
        else if (Constants.ControlRelayState.CONNECT === params) return "CONNECT";

        return "";
    }

    static decodeConstantsControlRelayRandomizationCommands(params) {
        if (Constants.ControlRelayRandomizationCommands.UNICAST === params) return "UNICAST";
        else if (Constants.ControlRelayRandomizationCommands.BROADCAST === params) return "BROADCAST";
        else if (Constants.ControlRelayRandomizationCommands.TIER_BASED === params) return "TIER_BASED";
        else if (Constants.ControlRelayRandomizationCommands.TIME_BASED === params) return "TIME_BASED";

        return "";
    }


    static decodeConstantsGatewayWANDataSignalsStatus(params) {
        if (Constants.GatewayWANDataSignalsStatus.ENABLED === params) return "ENABLED";
        else if (Constants.GatewayWANDataSignalsStatus.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsGatewayWANInterfaceClass(params) {
        if (Constants.GatewayWANInterfaceClass.PPP === params) return "PPP";
        else if (Constants.GatewayWANInterfaceClass.NDIS === params) return "NDIS";

        return "";
    }

    static decodeConstantsGatewayWANSIMMethod(params) {
        if (Constants.GatewayWANSIMMethod.AUTO === params) return "AUTO";
        else if (Constants.GatewayWANSIMMethod.INTERNAL === params) return "INTERNAL";
        else if (Constants.GatewayWANSIMMethod.EXTERNAL === params) return "EXTERNAL";

        return "";
    }

    static decodeConstantsGatewayWANAntennaMethod(params) {
        if (Constants.GatewayWANAntennaMethod.AUTO === params) return "AUTO";
        else if (Constants.GatewayWANAntennaMethod.INTERNAL === params) return "INTERNAL";
        else if (Constants.GatewayWANAntennaMethod.EXTERNAL === params) return "EXTERNAL";

        return "";
    }

    static decodeConstantsGatewayWANOTAUpdateMethod(params) {
        if (Constants.GatewayWANOTAUpdateMethod.NO_OTA === params) return "NO_OTA";
        else if (Constants.GatewayWANOTAUpdateMethod.OTASP === params) return "OTASP";

        return "";
    }

    static decodeConstantsGatewayWANUpdateAction(params) {
        if (Constants.GatewayWANUpdateAction.NONE === params) return "NONE";
        else if (Constants.GatewayWANUpdateAction.OTA_ACTIVATE === params) return "OTA_ACTIVATE";
        else if (Constants.GatewayWANUpdateAction.OTA_PRLUPDATE === params) return "OTA_PRLUPDATE";
        else if (Constants.GatewayWANUpdateAction.FILE_ACTIVATE === params) return "FILE_ACTIVATE";
        else if (Constants.GatewayWANUpdateAction.FILE_PRLUPDATE === params) return "FILE_PRLUPDATE";

        return "";
    }

    static decodeConstantsControlRelayRandomizationStatus(params) {
        if (Constants.ControlRelayRandomizationStatus.ENABLED === params) return "ENABLED";
        else if (Constants.ControlRelayRandomizationStatus.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsControlRelayTimeModes(params) {
        if (Constants.ControlRelayTimeModes.DISABLED === params) return "DISABLED";
        else if (Constants.ControlRelayTimeModes.DAILY === params) return "DAILY";
        else if (Constants.ControlRelayTimeModes.WEEKDAY_WEEKEND === params) return "WEEKDAY_WEEKEND";
        else if (Constants.ControlRelayTimeModes.SEASON === params) return "SEASON";
        else if (Constants.ControlRelayTimeModes.SEASON_WEEKDAY_WEEKEND === params) return "SEASON_WEEKDAY_WEEKEND";

        return "";
    }

    static decodeConstantsControlRelayDailySchedule(params) {
        if (Constants.ControlRelayDailySchedule.SUNDAY === params) return "SUNDAY";
        else if (Constants.ControlRelayDailySchedule.MONDAY === params) return "MONDAY";
        else if (Constants.ControlRelayDailySchedule.TUESDAY === params) return "TUESDAY";
        else if (Constants.ControlRelayDailySchedule.WEDNESDAY === params) return "WEDNESDAY";
        else if (Constants.ControlRelayDailySchedule.THURSDAY === params) return "THURSDAY";
        else if (Constants.ControlRelayDailySchedule.FRIDAY === params) return "FRIDAY";
        else if (Constants.ControlRelayDailySchedule.SATURDAY === params) return "SATURDAY";

        return "";
    }

    static decodeConstantsControlRelayWeekdayWeekendSchedule(params) {
        if (Constants.ControlRelayWeekdayWeekendSchedule.WEEKDAY === params) return "WEEKDAY";
        else if (Constants.ControlRelayWeekdayWeekendSchedule.WEEKEND === params) return "WEEKEND";

        return "";
    }

    static decodeConstantsControlRelaySeasonSchedule(params) {
        if (Constants.ControlRelaySeasonSchedule.SEASON0 === params) return "SEASON0";
        else if (Constants.ControlRelaySeasonSchedule.SEASON1 === params) return "SEASON1";
        else if (Constants.ControlRelaySeasonSchedule.SEASON2 === params) return "SEASON2";
        else if (Constants.ControlRelaySeasonSchedule.SEASON3 === params) return "SEASON3";

        return "";
    }

    static decodeConstantsControlRelaySeasonWeekdayWeekendSchedule(params) {
        if (Constants.ControlRelaySeasonWeekdayWeekendSchedule.SEASON0_WEEKDAY === params) return "SEASON0_WEEKDAY";
        else if (Constants.ControlRelaySeasonWeekdayWeekendSchedule.SEASON0_WEEKEND === params) return "SEASON0_WEEKEND";
        else if (Constants.ControlRelaySeasonWeekdayWeekendSchedule.SEASON1_WEEKDAY === params) return "SEASON1_WEEKDAY";
        else if (Constants.ControlRelaySeasonWeekdayWeekendSchedule.SEASON1_WEEKEND === params) return "SEASON1_WEEKEND";
        else if (Constants.ControlRelaySeasonWeekdayWeekendSchedule.SEASON2_WEEKDAY === params) return "SEASON2_WEEKDAY";
        else if (Constants.ControlRelaySeasonWeekdayWeekendSchedule.SEASON2_WEEKEND === params) return "SEASON2_WEEKEND";
        else if (Constants.ControlRelaySeasonWeekdayWeekendSchedule.SEASON3_WEEKDAY === params) return "SEASON3_WEEKDAY";
        else if (Constants.ControlRelaySeasonWeekdayWeekendSchedule.SEASON3_WEEKEND === params) return "SEASON3_WEEKEND";

        return "";
    }

    static decodeConstantsReplacedDC(params) {
        if (Constants.ReplacedDC.NO === params) return "NO";
        else if (Constants.ReplacedDC.YES === params) return "YES";

        return "";
    }

    static decodeConstantsDisplayListStatus(params) {
        if (Constants.DisplayListStatus.ENABLED === params) return "ENABLED";
        else if (Constants.DisplayListStatus.DISABLED === params) return "DISABLED";

        return "";
    }

    static decodeConstantsDisplayListTimeFormats(params) {
        if (Constants.DisplayListTimeFormats.UTC === params) return "UTC";
        else if (Constants.DisplayListTimeFormats.LOCAL_TIME === params) return "LOCAL_TIME";

        return "";
    }

    static decodeConstantsDisplayListExtendedStatusDisplayChannelNumbers(params) {
        if (Constants.DisplayListExtendedStatusDisplayChannelNumbers.FIRST_CHARACTERS === params) return "FIRST_CHARACTERS";
        else if (Constants.DisplayListExtendedStatusDisplayChannelNumbers.ALL_CHARACTERS === params) return "ALL_CHARACTERS";

        /*        [Obsolete("5.4.000 - use FIRST_CHARACTERS")]*/
        else if (Constants.DisplayListExtendedStatusDisplayChannelNumbers.FIRST_TWO_CHARACTERS === params) return "FIRST_TWO_CHARACTERS";
        /*        [Obsolete("5.4.000 - use ALL_CHARACTERS")]*/
        else if (Constants.DisplayListExtendedStatusDisplayChannelNumbers.ALL_FOUR_CHARACTERS === params) return "ALL_FOUR_CHARACTERS";

        return "";
    }


    static decodeConstantsLoadProfileConfigurationTypes(params) {
        if (Constants.LoadProfileConfigurationTypes.ENTIRE === params) return "ENTIRE";
        else if (Constants.LoadProfileConfigurationTypes.DISPLAY_ONLY === params) return "DISPLAY_ONLY";

        return "";
    }

    static decodeConstantsLoadProfileConfigurationReadTypes(params) {
        if (Constants.LoadProfileConfigurationReadTypes.FULL_CONFIGURATION === params) return "FULL_CONFIGURATION";
        else if (Constants.LoadProfileConfigurationReadTypes.CONFIGURATION_ID_ONLY === params) return "CONFIGURATION_ID_ONLY";
        else if (Constants.LoadProfileConfigurationReadTypes.COLLECTION_STATUS_ONLY === params) return "COLLECTION_STATUS_ONLY";

        return "";
    }

    static decodeConstantsSystemTaskTypes(params) {
        if (Constants.SystemTaskTypes.DATABASE_UPDATE === params) return "DATABASE_UPDATE";
        else if (Constants.SystemTaskTypes.MESSAGE_LOG_UPDATE === params) return "MESSAGE_LOG_UPDATE";
        else if (Constants.SystemTaskTypes.START_ENGINES === params) return "START_ENGINES";
        else if (Constants.SystemTaskTypes.STOP_ENGINES === params) return "STOP_ENGINES";
        else if (Constants.SystemTaskTypes.ENGINE_STATE === params) return "ENGINE_STATE";

        return "";
    }


    static decodeConstantsSshConnectionFailureReasons(params) {
        if (Constants.SshConnectionFailureReasons.UNKNOWN === params) return "UNKNOWN";
        else if (Constants.SshConnectionFailureReasons.NO_CREDENTIALS === params) return "NO_CREDENTIALS";
        else if (Constants.SshConnectionFailureReasons.SERVER_UNAVAILABLE === params) return "SERVER_UNAVAILABLE";
        else if (Constants.SshConnectionFailureReasons.UNKNOWN_SSH_FINGERPRINT === params) return "UNKNOWN_SSH_FINGERPRINT";
        else if (Constants.SshConnectionFailureReasons.AUTHENTICATION_FAILED === params) return "AUTHENTICATION_FAILED";

        return "";
    }

    static decodeConstantsTrustedSourceTypes(params) {
        if (Constants.TrustedSourceTypes.NES_SYSTEM_SOFTWARE === params) return "NES_SYSTEM_SOFTWARE";
        else if (Constants.TrustedSourceTypes.PROVISIONING_TOOL === params) return "PROVISIONING_TOOL";

        return "";
    }

    static decodeConstantsGatewayExportDataTypes(params) {
        if (Constants.GatewayExportDataTypes.CREDENTIALS === params) return "CREDENTIALS";

        return "";
    }

    static decodeConstantsDeviceExportDataTypes(params) {
        if (Constants.DeviceExportDataTypes.AUTHENTICATION_KEY_INFORMATION === params) return "AUTHENTICATION_KEY_INFORMATION";

        return "";
    }

    static decodeConstantsExportProcessingCompletionStatusTypes(params) {
        if (Constants.ExportProcessingCompletionStatusTypes.SUCCESS === params) return "SUCCESS";
        else if (Constants.ExportProcessingCompletionStatusTypes.FAILURE === params) return "FAILURE";

        return "";
    }

    static decodeConstantsImportFailureReasonTypes(params) {
        if (Constants.ImportFailureReasonTypes.REQUEST_TIMED_OUT === params) return "REQUEST_TIMED_OUT";
        else if (Constants.ImportFailureReasonTypes.UNEXPECTED_ERROR === params) return "UNEXPECTED_ERROR";
        else if (Constants.ImportFailureReasonTypes.UNSUPPORTED_ENCRYPTION_VERSION === params) return "UNSUPPORTED_ENCRYPTION_VERSION";
        else if (Constants.ImportFailureReasonTypes.INVALID_DECRYPTOR_ECDH_PUBLIC_KEY === params) return "INVALID_DECRYPTOR_ECDH_PUBLIC_KEY";
        else if (Constants.ImportFailureReasonTypes.INVALID_ENCRYPTOR_ECDH_PUBLIC_KEY === params) return "INVALID_ENCRYPTOR_ECDH_PUBLIC_KEY";
        else if (Constants.ImportFailureReasonTypes.ENCRYPTOR_ECDSA_PUBLIC_KEY_NOT_TRUSTED === params) return "ENCRYPTOR_ECDSA_PUBLIC_KEY_NOT_TRUSTED";
        else if (Constants.ImportFailureReasonTypes.INVALID_ENCRYPTOR_ECDSA_PUBLIC_KEY_SOURCE_TYPE_ID === params) return "INVALID_ENCRYPTOR_ECDSA_PUBLIC_KEY_SOURCE_TYPE_ID";
        else if (Constants.ImportFailureReasonTypes.INVALID_DIGITAL_SIGNATURE === params) return "INVALID_DIGITAL_SIGNATURE";
        else if (Constants.ImportFailureReasonTypes.ORPHANED === params) return "ORPHANED";
        else if (Constants.ImportFailureReasonTypes.UNSUPPORTED_DATA_FORMAT === params) return "UNSUPPORTED_DATA_FORMAT";
        else if (Constants.ImportFailureReasonTypes.UNSUPPORTED_GATEWAY_VERSION === params) return "UNSUPPORTED_GATEWAY_VERSION";
        else if (Constants.ImportFailureReasonTypes.INVALID_NEURONID_SERIAL_NUMBER_COMBINATION === params) return "INVALID_NEURONID_SERIAL_NUMBER_COMBINATION";
        else if (Constants.ImportFailureReasonTypes.ERROR_PROCESSING_DATA === params) return "ERROR_PROCESSING_DATA";
        else if (Constants.ImportFailureReasonTypes.UNSUPPORTED_PLATFORM === params) return "UNSUPPORTED_PLATFORM";

        return "";
    }

    static decodeConstantsExportFailureReasonTypes(params) {
        if (Constants.ExportFailureReasonTypes.INVALID_ORIGINATION_PUBLIC_KEY === params) return "INVALID_ORIGINATION_PUBLIC_KEY";
        else if (Constants.ExportFailureReasonTypes.REQUEST_TIMED_OUT === params) return "REQUEST_TIMED_OUT";
        else if (Constants.ExportFailureReasonTypes.ORPHANED === params) return "ORPHANED";
        else if (Constants.ExportFailureReasonTypes.UNEXPECTED_ERROR === params) return "UNEXPECTED_ERROR";
        else if (Constants.ExportFailureReasonTypes.UNSUPPORTED_PLATFORM === params) return "UNSUPPORTED_PLATFORM";

        return "";
    }

    static decodeConstantsConnectFailureReasons(params) {
        if (Constants.ConnectFailureReasons.TASK_TIMED_OUT === params) return "TASK_TIMED_OUT";
        else if (Constants.ConnectFailureReasons.DATABASE === params) return "DATABASE";
        else if (Constants.ConnectFailureReasons.DC_ADAPTER_MESSAGE === params) return "DC_ADAPTER_MESSAGE";
        else if (Constants.ConnectFailureReasons.HIGH_PRIORITY_FIRST_PING_OR_CONNECT_ATTEMPT === params) return "HIGH_PRIORITY_FIRST_PING_OR_CONNECT_ATTEMPT";
        else if (Constants.ConnectFailureReasons.ALL_WANS_ATTEMPTED === params) return "ALL_WANS_ATTEMPTED";

        return "";
    }

    static decodeConstantsGroupMembershipActions(params) {
        if (Constants.GroupMembershipActions.ADD === params) return "ADD";
        else if (Constants.GroupMembershipActions.REMOVE === params) return "REMOVE";

        return "";
    }

    static decodeConstantsDataCollectionTypes(params) {
        if (Constants.DataCollectionTypes.IMPORTED_FROM_PROVISIONING_TOOL_CREATED_FILE === params) return "IMPORTED_FROM_PROVISIONING_TOOL_CREATED_FILE";

        return "";
    }

    static decodeConstantsAsymmetricKeyTypes(params) {
        if (Constants.AsymmetricKeyTypes.ECDH_P521 === params) return "ECDH_P521";
        else if (Constants.AsymmetricKeyTypes.ECDSA_P521 === params) return "ECDSA_P521";

        return "";
    }


    static decodeConstantsAutoApplyStatusTypes(params) {
        if (Constants.AutoApplyStatusTypes.SUCCESS === params) return "SUCCESS";
        else if (Constants.AutoApplyStatusTypes.PARTIAL_SUCCESS === params) return "PARTIAL_SUCCESS";
        else if (Constants.AutoApplyStatusTypes.FAILURE === params) return "FAILURE";
        else if (Constants.AutoApplyStatusTypes.PENDING === params) return "PENDING";

        return "";
    }

    static decodeConstantsActions(params) {
        if (Constants.Actions.SYNCHRONIZE_DEVICE_LOAD_PROFILE_COLLECTION_CONFIGURATION === params) return "SYNCHRONIZE_DEVICE_LOAD_PROFILE_COLLECTION_CONFIGURATION";
        else if (Constants.Actions.SYNCHRONIZE_GATEWAY_COMPATIBILITY_SETTING === params) return "SYNCHRONIZE_GATEWAY_COMPATIBILITY_SETTING";

        return "";
    }

    static decodeConstantsLoadProfileDataSetCollectionConfigurationTypes(params) {
        if (Constants.LoadProfileDataSetCollectionConfigurationTypes.FULL === params) return "FULL";
        else if (Constants.LoadProfileDataSetCollectionConfigurationTypes.DELTA === params) return "DELTA";

        return "";
    }

    static decodeConstantsDeviceLoadProfileDataSets(params) {
        if (Constants.DeviceLoadProfileDataSets.DATA_SET_1 === params) return "DATA_SET_1";
        else if (Constants.DeviceLoadProfileDataSets.DATA_SET_2 === params) return "DATA_SET_2";
        else if (Constants.DeviceLoadProfileDataSets.DATA_SET_3 === params) return "DATA_SET_3";
        else if (Constants.DeviceLoadProfileDataSets.DATA_SET_4 === params) return "DATA_SET_4";

        return "";
    }

    static decodeConstantsLoadProfileDataSetCollectionConfigurationStatus(params) {
        if (Constants.LoadProfileDataSetCollectionConfigurationStatus.DISABLE === params) return "DISABLE";
        else if (Constants.LoadProfileDataSetCollectionConfigurationStatus.ENABLE === params) return "ENABLE";

        return "";
    }

    static decodeConstantsDeviceMemoryTypes(params) {
        if (Constants.DeviceMemoryTypes.LOAD_PROFILE_DATA_SET_1 === params) return "LOAD_PROFILE_DATA_SET_1";
        else if (Constants.DeviceMemoryTypes.LOAD_PROFILE_DATA_SET_2 === params) return "LOAD_PROFILE_DATA_SET_2";
        else if (Constants.DeviceMemoryTypes.LOAD_PROFILE_DATA_SET_3 === params) return "LOAD_PROFILE_DATA_SET_3";
        else if (Constants.DeviceMemoryTypes.LOAD_PROFILE_DATA_SET_4 === params) return "LOAD_PROFILE_DATA_SET_4";

        return "";
    }

    static decodeConstantsResultOptions(params) {
        if (Constants.ResultOptions.LOAD_PROFILE_ON_DEMAND_PRIMARY_DATA_SET === params) return "LOAD_PROFILE_ON_DEMAND_PRIMARY_DATA_SET";
        else if (Constants.ResultOptions.FULL_LOAD_PROFILE_PRIMARY_DATA_SET === params) return "FULL_LOAD_PROFILE_PRIMARY_DATA_SET";
        else if (Constants.ResultOptions.DELTA_LOAD_PROFILE_PRIMARY_DATA_SET === params) return "DELTA_LOAD_PROFILE_PRIMARY_DATA_SET";
        else if (Constants.ResultOptions.CONTINUOUS_DELTA_LOAD_PROFILE_PRIMARY_DATA_SET === params) return "CONTINUOUS_DELTA_LOAD_PROFILE_PRIMARY_DATA_SET";

        return "";
    }

    /*    [Obsolete("v6.0.000 - no longer used")]*/
    static decodeConstantsEssCredentialsBypassSslTypes(params) {
        if (Constants.EssCredentialsBypassSslTypes.ALWAYS_BYPASS === params) return "ALWAYS_BYPASS";
        else if (Constants.EssCredentialsBypassSslTypes.ALLOW === params) return "ALLOW";
        else if (Constants.EssCredentialsBypassSslTypes.NEVER_BYPASS === params) return "NEVER_BYPASS";

        return "";
    }

    static decodeConstantsAtmProcessTypes(params) {
        if (Constants.AtmProcessTypes.METER === params) return "METER";

        return "";
    }

    static decodeConstantsBatchTypes(params) {
        if (Constants.BatchTypes.DEVICE_RESULTS === params) return "DEVICE_RESULTS";
        else if (Constants.BatchTypes.EVENT_HISTORY === params) return "EVENT_HISTORY";
        else if (Constants.BatchTypes.GATEWAY_RESULTS === params) return "GATEWAY_RESULTS";
        else if (Constants.BatchTypes.COMMAND_HISTORY_INTERNAL_CIM === params) return "COMMAND_HISTORY_INTERNAL_CIM";

        return "";
    }

    static decodeConstantsPropertyDataTypes(params) {
        if (Constants.PropertyDataTypes.NUMERIC === params) return "NUMERIC";
        else if (Constants.PropertyDataTypes.STRING === params) return "STRING";
        else if (Constants.PropertyDataTypes.XML === params) return "XML";

        return "";
    }

    static decodeConstantsMeterEnabledByteValues(params) {
        if (Constants.MeterEnabledByteValues.UNKNOWN === params) return "UNKNOWN";
        else if (Constants.MeterEnabledByteValues.DISABLE === params) return "DISABLE";
        else if (Constants.MeterEnabledByteValues.ENABLE === params) return "ENABLE";

        return "";
    }

    static decodeConstantsGatewayProperties(params) {
        if (Constants.GatewayProperties.PROCESS_CONFIGURATION === params) return "PROCESS_CONFIGURATION";
        else if (Constants.GatewayProperties.DISCOVERED_DEVICES_LAST_HANDLE_READ === params) return "DISCOVERED_DEVICES_LAST_HANDLE_READ";
        else if (Constants.GatewayProperties.UNANSWERED_CALL_IN_PROGRESS === params) return "UNANSWERED_CALL_IN_PROGRESS";
        else if (Constants.GatewayProperties.DEVICE_LIMIT === params) return "DEVICE_LIMIT";
        else if (Constants.GatewayProperties.POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION === params) return "POWER_LINE_CARRIER_COMMUNICATION_CONFIGURATION";

        /*        [Obsolete("6.0.000 - no longer used")]*/
        else if (Constants.GatewayProperties.STATISTICS === params) return "STATISTICS";
        /*        [Obsolete("6.0.000 - no longer used")]*/
        else if (Constants.GatewayProperties.ENCRYPTION_CONFIGURATION === params) return "ENCRYPTION_CONFIGURATION";

        return "";
    }

    static decodeConstantsDeviceProperties(params) {
        if (Constants.DeviceProperties.METER_DISPLAY_CONFIGURATION === params) return "METER_DISPLAY_CONFIGURATION";
        else if (Constants.DeviceProperties.PULSE_INPUT_CONFIGURATION === params) return "PULSE_INPUT_CONFIGURATION";
        else if (Constants.DeviceProperties.PENDING_TOU_CALENDAR === params) return "PENDING_TOU_CALENDAR";
        else if (Constants.DeviceProperties.ACTIVE_TOU_CALENDAR === params) return "ACTIVE_TOU_CALENDAR";
        else if (Constants.DeviceProperties.LAST_KNOWN_CDLP_TRACKING_ID === params) return "LAST_KNOWN_CDLP_TRACKING_ID";
        else if (Constants.DeviceProperties.DOWN_LIMIT === params) return "DOWN_LIMIT";
        else if (Constants.DeviceProperties.COMMISSION_STATUS_TYPE_ID === params) return "COMMISSION_STATUS_TYPE_ID";
        else if (Constants.DeviceProperties.MBUS_DATA_ORDER_TYPE_ID === params) return "MBUS_DATA_ORDER_TYPE_ID";
        else if (Constants.DeviceProperties.MBUS_BILLING_DATA_STRUCTURE_TYPE_ID === params) return "MBUS_BILLING_DATA_STRUCTURE_TYPE_ID";
        else if (Constants.DeviceProperties.MBUS_HANDLE === params) return "MBUS_HANDLE";
        else if (Constants.DeviceProperties.MBUS_MANUFACTURER_ID === params) return "MBUS_MANUFACTURER_ID";
        else if (Constants.DeviceProperties.MBUS_VERSION === params) return "MBUS_VERSION";
        else if (Constants.DeviceProperties.ALARM_POLLING_RATE === params) return "ALARM_POLLING_RATE";
        else if (Constants.DeviceProperties.BILLING_SCHEDULE === params) return "BILLING_SCHEDULE";
        else if (Constants.DeviceProperties.TRANSACTION_TABLE_REQUEST_ID === params) return "TRANSACTION_TABLE_REQUEST_ID";
        else if (Constants.DeviceProperties.MBUS_HANDLE_HISTORY === params) return "MBUS_HANDLE_HISTORY";
        else if (Constants.DeviceProperties.AUTO_DISCOVERY_CONFIGURATION === params) return "AUTO_DISCOVERY_CONFIGURATION";
        else if (Constants.DeviceProperties.UTILITY_INFORMATION === params) return "UTILITY_INFORMATION";
        else if (Constants.DeviceProperties.TRANSACTION_NUMBER === params) return "TRANSACTION_NUMBER";
        else if (Constants.DeviceProperties.STOP_MODE_CONFIGURATION === params) return "STOP_MODE_CONFIGURATION";
        else if (Constants.DeviceProperties.POWER_QUALITY_CONFIGURATION === params) return "POWER_QUALITY_CONFIGURATION";

        //V2.3 Device Properties
        else if (Constants.DeviceProperties.ADD_PREPAY_CREDIT_SEQUENCE_NUMBER === params) return "ADD_PREPAY_CREDIT_SEQUENCE_NUMBER";
        else if (Constants.DeviceProperties.PREPAY_CONFIGURATION === params) return "PREPAY_CONFIGURATION";
        else if (Constants.DeviceProperties.TIME_ZONE_CONFIGURATION === params) return "TIME_ZONE_CONFIGURATION";

        //V3.0 Device Properties
        else if (Constants.DeviceProperties.DISCONNECT_CONFIGURATION === params) return "DISCONNECT_CONFIGURATION";
        else if (Constants.DeviceProperties.CONTINUOUS_EVENT_LOG_CONFIGURATION === params) return "CONTINUOUS_EVENT_LOG_CONFIGURATION";
        else if (Constants.DeviceProperties.OPTICAL_PORT_CONFIGURATION === params) return "OPTICAL_PORT_CONFIGURATION";

        /*        [Obsolete("5.2.000")]*/
        else if (Constants.DeviceProperties.PRIMARY_POWER_CONFIGURATION === params) return "PRIMARY_POWER_CONFIGURATION";

        return "";
    }

    static decodeConstantsCommissionStatusType(params) {
        if (Constants.CommissionStatusType.COMMISSION_NOT_COMPLETE === params) return "COMMISSION_NOT_COMPLETE";
        else if (Constants.CommissionStatusType.COMMISSION_COMPLETE === params) return "COMMISSION_COMPLETE";

        return "";
    }

    static decodeConstantsCommandTypes(params) {
        if (Constants.CommandTypes.DEVICE === params) return "DEVICE";
        else if (Constants.CommandTypes.GATEWAY === params) return "GATEWAY";
        else if (Constants.CommandTypes.ENGINE === params) return "ENGINE";
        else if (Constants.CommandTypes.INTERNAL === params) return "INTERNAL";

        return "";
    }

    /*    [Obsolete("v5.4.000 - no replacement")]*/
    static decodeConstantsEventIDs(params) {
        if (Constants.EventIDs.HIERARCHY_MEMBER_DELETED === params) return "HIERARCHY_MEMBER_DELETED";
        else if (Constants.EventIDs.ATTRIBUTE_DELETED === params) return "ATTRIBUTE_DELETED";
        else if (Constants.EventIDs.ATTRIBUTE_MEMBER_DELETED === params) return "ATTRIBUTE_MEMBER_DELETED";
        else if (Constants.EventIDs.HIERARCHY_LEVEL_DELETED === params) return "HIERARCHY_LEVEL_DELETED";
        else if (Constants.EventIDs.HIERARCHY_DELETED === params) return "HIERARCHY_DELETED";
        else if (Constants.EventIDs.TASK_TIMEOUT === params) return "TASK_TIMEOUT";
        else if (Constants.EventIDs.TCPIP_TRACE === params) return "TCPIP_TRACE";
        else if (Constants.EventIDs.SCHEDULE_DELETED === params) return "SCHEDULE_DELETED";

        return "";
    }

    static decodeConstantsInternalServiceReturnCodes(params) {
        if (Constants.InternalServiceReturnCodes.DUPLICATE_PROCESS_CONFIGURATION_ID === params) return "DUPLICATE_PROCESS_CONFIGURATION_ID";
        else if (Constants.InternalServiceReturnCodes.INVALID_LOG_EVENTS === params) return "INVALID_LOG_EVENTS";
        else if (Constants.InternalServiceReturnCodes.INVALID_URGENT_HOLD === params) return "INVALID_URGENT_HOLD";
        else if (Constants.InternalServiceReturnCodes.INVALID_TRACE === params) return "INVALID_TRACE";
        else if (Constants.InternalServiceReturnCodes.INVALID_FLAGS === params) return "INVALID_FLAGS";
        else if (Constants.InternalServiceReturnCodes.INVALID_CONTROL === params) return "INVALID_CONTROL";

        else if (Constants.InternalServiceReturnCodes.INVALID_NEM_GATEWAY_VERSION_ID === params) return "INVALID_NEM_GATEWAY_VERSION_ID";

        /*        [Obsolete("v6.0.000 - moved to ExternalServiceReturnCodes class")]*/
        else if (Constants.InternalServiceReturnCodes.INVALID_LIMIT === params) return "INVALID_LIMIT";

        return "";
    }

    static decodeConstantsLoadProfileUploadTypes(params) {
        if (Constants.LoadProfileUploadTypes.UPLOADING === params) return "UPLOADING";
        else if (Constants.LoadProfileUploadTypes.NOT_UPLOADING === params) return "NOT_UPLOADING";

        return "";
    }

    static decodeConstantsMeterDomainIDStatusTypes(params) {
        if (Constants.MeterDomainIDStatusTypes.PENDING === params) return "PENDING";
        else if (Constants.MeterDomainIDStatusTypes.LAST_KNOWN_GOOD === params) return "LAST_KNOWN_GOOD";

        return "";
    }

    static decodeConstantsMeterSourceTypes(params) {
        if (Constants.MeterSourceTypes.DEMAND === params) return "DEMAND";
        else if (Constants.MeterSourceTypes.COINCIDENT === params) return "COINCIDENT";
        else if (Constants.MeterSourceTypes.LOAD_PROFILE === params) return "LOAD_PROFILE";
        else if (Constants.MeterSourceTypes.MAPPED_SOURCE === params) return "MAPPED_SOURCE";

        return "";
    }

    static decodeConstantsPendingChangeEntityTypes(params) {
        if (Constants.PendingChangeEntityTypes.GATEWAY_WAN_CONFIGURATION === params) return "GATEWAY_WAN_CONFIGURATION";

        return "";
    }

    static decodeConstantsPendingChangeTypes(params) {
        if (Constants.PendingChangeTypes.SERVER_TO_GATEWAY_IP_ADDRESS === params) return "SERVER_TO_GATEWAY_IP_ADDRESS";
        else if (Constants.PendingChangeTypes.PPP_LOGIN === params) return "PPP_LOGIN";
        else if (Constants.PendingChangeTypes.GATEWAY_WAN_CONFIGURATION_NAME === params) return "GATEWAY_WAN_CONFIGURATION_NAME";
        else if (Constants.PendingChangeTypes.GATEWAY_WAN_CONFIGURATION_STATUS === params) return "GATEWAY_WAN_CONFIGURATION_STATUS";

        return "";
    }

    static decodeConstantsInternalEventTypes(params) {
        if (Constants.InternalEventTypes.ALL === params) return "ALL";

        return "";
    }

    static decodeConstantsClearPrepayCreditsBeforeAddOptionTypes(params) {
        if (Constants.ClearPrepayCreditsBeforeAddOptionTypes.PREPAY_ONLY === params) return "PREPAY_ONLY";
        else if (Constants.ClearPrepayCreditsBeforeAddOptionTypes.EMERGENCY_ONLY === params) return "EMERGENCY_ONLY";
        else if (Constants.ClearPrepayCreditsBeforeAddOptionTypes.PREPAY_AND_EMERGENCY === params) return "PREPAY_AND_EMERGENCY";

        return "";
    }

    static decodeConstantsDisconnectControlTypes(params) {
        if (Constants.DisconnectControlTypes.MAX_POWER === params) return "MAX_POWER";
        else if (Constants.DisconnectControlTypes.CURRENT === params) return "CURRENT";

        return "";
    }

    static decodeConstantsDisconnectTripValueSelects(params) {
        if (Constants.DisconnectTripValueSelects.FORWARD_PLUS_REVERSE_POWER === params) return "FORWARD_PLUS_REVERSE_POWER";
        else if (Constants.DisconnectTripValueSelects.FORWARD_POWER === params) return "FORWARD_POWER";
        else if (Constants.DisconnectTripValueSelects.FORWARD_MINUS_REVERSE === params) return "FORWARD_MINUS_REVERSE";

        return "";
    }

    static decodeConstantsCurrentControlTypes(params) {
        if (Constants.CurrentControlTypes.SINGLE_PHASE === params) return "SINGLE_PHASE";
        else if (Constants.CurrentControlTypes.ALL_ACTIVE_PHASES === params) return "ALL_ACTIVE_PHASES";

        return "";
    }

    static decodeConstantsMeterDisplayListTypes(params) {
        if (Constants.MeterDisplayListTypes.PRIMARY === params) return "PRIMARY";
        else if (Constants.MeterDisplayListTypes.SECONDARY === params) return "SECONDARY";
        else if (Constants.MeterDisplayListTypes.SCHEDULED === params) return "SCHEDULED";

        return "";
    }

    static decodeConstantsNegativePrepayCreditStatus(params) {
        if (Constants.NegativePrepayCreditStatus.DISABLED === params) return "DISABLED";
        else if (Constants.NegativePrepayCreditStatus.ENABLED === params) return "ENABLED";
        else if (Constants.NegativePrepayCreditStatus.GRACE_PERIOD === params) return "GRACE_PERIOD";

        return "";
    }

    static decodeConstantsValidateHelloMessageSignature(params) {
        if (Constants.ValidateHelloMessageSignature.None === params) return "None";
        else if (Constants.ValidateHelloMessageSignature.DcOnly === params) return "DcOnly";
        else if (Constants.ValidateHelloMessageSignature.All === params) return "All";

        return "";
    }

    static decodeConstantsTamperPowerQualityEventQualificationID(params) {
        if (Constants.TamperPowerQualityEventQualificationID.PHASE_LOSS === params) return "PHASE_LOSS";
        else if (Constants.TamperPowerQualityEventQualificationID.CURREONT_ON_VOLTAGE === params) return "CURREONT_ON_VOLTAGE";
        else if (Constants.TamperPowerQualityEventQualificationID.SUBSEQUENT_POWER_OUTAGE === params) return "SUBSEQUENT_POWER_OUTAGE";
        else if (Constants.TamperPowerQualityEventQualificationID.PRECEDING_OR_COINCIDENT_POWER_OUTAGE === params) return "PRECEDING_OR_COINCIDENT_POWER_OUTAGE";

        return "";
    }

    static decodeConstantsAveragePowerConfigurationTypes(params) {
        if (Constants.AveragePowerConfigurationTypes.PENDING === params) return "PENDING";
        else if (Constants.AveragePowerConfigurationTypes.ACTIVE === params) return "ACTIVE";

        return "";
    }

    static decodeConstantsCommissionStatus(params) {
        if (Constants.CommissionStatus.PENDING === params) return "PENDING";
        else if (Constants.CommissionStatus.FAILED === params) return "FAILED";
        else if (Constants.CommissionStatus.SUCCESS === params) return "SUCCESS";

        return "";
    }

    static decodeConstantsMeterPlcSecurityModes(params) {
        if (Constants.MeterPlcSecurityModes.LONTALK === params) return "LONTALK";
        else if (Constants.MeterPlcSecurityModes.RC4 === params) return "RC4";
        else if (Constants.MeterPlcSecurityModes.AES === params) return "AES";

        return "";
    }

    static decodeConstantsLoadProfileCollectionStatusTypes(params) {
        if (Constants.LoadProfileCollectionStatusTypes.DISABLED === params) return "DISABLED";
        else if (Constants.LoadProfileCollectionStatusTypes.ENABLED === params) return "ENABLED";

        return "";
    }

    static decodeConstantsIgnoreFeedbackStatusTypes(params) {
        if (Constants.IgnoreFeedbackStatusTypes.DO_NOT_IGNORE === params) return "DO_NOT_IGNORE";
        else if (Constants.IgnoreFeedbackStatusTypes.IGNORE === params) return "IGNORE";

        return "";
    }

    static decodeConstantsRemoteFileManagementWanSelectionTypes(params) {
        if (Constants.RemoteFileManagementWanSelectionTypes.FAIL_ON_NO_WAN_FOUND === params) return "FAIL_ON_NO_WAN_FOUND";
        else if (Constants.RemoteFileManagementWanSelectionTypes.REQUEUE_ON_NO_WAN_FOUND === params) return "REQUEUE_ON_NO_WAN_FOUND";
        else if (Constants.RemoteFileManagementWanSelectionTypes.BYPASS_REMOTE_FILE_MANAGEMENT_ENABLE_SETTINGS === params) return "BYPASS_REMOTE_FILE_MANAGEMENT_ENABLE_SETTINGS";
        else if (Constants.RemoteFileManagementWanSelectionTypes.BYPASS_REMOTE_FILE_MANAGEMENT_ENGINE === params) return "BYPASS_REMOTE_FILE_MANAGEMENT_ENGINE";
        else if (Constants.RemoteFileManagementWanSelectionTypes.BYPASS_REMOTE_FILE_MANAGEMENT_ENGINE_ON_NO_WAN_FOUND === params) return "BYPASS_REMOTE_FILE_MANAGEMENT_ENGINE_ON_NO_WAN_FOUND";

        return "";
    }

    static decodeConstantsEnergyAccumulatorCalculationMethods(params) {
        if (Constants.EnergyAccumulatorCalculationMethods.FERRARIS === params) return "FERRARIS";
        else if (Constants.EnergyAccumulatorCalculationMethods.PER_PHASE === params) return "PER_PHASE";


        return "";
    }

    static decodeConstantsReadEnergyAccumulatorCalculationMethodConfigurationOptions(params) {
        if (Constants.ReadEnergyAccumulatorCalculationMethodConfigurationOptions.ACTIVE_METHOD === params) return "ACTIVE_METHOD";
        else if (Constants.ReadEnergyAccumulatorCalculationMethodConfigurationOptions.ACTIVE_METHOD_CHANGE_DATE === params) return "ACTIVE_METHOD_CHANGE_DATE";

        return "";
    }

    static decodeConstantsEnergyAccumulatorCalculationMethodConfigurationTypes(params) {
        if (Constants.EnergyAccumulatorCalculationMethodConfigurationTypes.ACTIVE === params) return "ACTIVE";

        return "";
    }

    static decodeConstantsDeviceAlarmStatusTypes(params) {
        if (Constants.DeviceAlarmStatusTypes.SET === params) return "SET";
        else if (Constants.DeviceAlarmStatusTypes.NOT_SET === params) return "NOT_SET";
        else if (Constants.DeviceAlarmStatusTypes.CLEARING === params) return "CLEARING";

        return "";
    }

    static decodeConstantsDeviceAlarmClearModes(params) {
        if (Constants.DeviceAlarmClearModes.AUTOMATIC === params) return "AUTOMATIC";
        else if (Constants.DeviceAlarmClearModes.MANUAL === params) return "MANUAL";

        return "";
    }


    //This was deprecated in v4, but un-deprecated in 6.0 to use with the alarm latching feature.
    static decodeConstantsMBusAlarms(params) {
        if (Constants.MBusAlarms.BILLING_DATA_COLLECTED === params) return "BILLING_DATA_COLLECTED";
        else if (Constants.MBusAlarms.APP_ERROR_RESPONSE_RECEIVED === params) return "APP_ERROR_RESPONSE_RECEIVED";
        else if (Constants.MBusAlarms.BILLING_READ_OVERFLOW_OCCURRED === params) return "BILLING_READ_OVERFLOW_OCCURRED";
        else if (Constants.MBusAlarms.FAILED_COMMUNICATIONS_ON_READ === params) return "FAILED_COMMUNICATIONS_ON_READ";
        else if (Constants.MBusAlarms.BILLING_READ_SERIAL_NUMBER_MISMATCH === params) return "BILLING_READ_SERIAL_NUMBER_MISMATCH";
        else if (Constants.MBusAlarms.GENERIC_ALARM_0 === params) return "GENERIC_ALARM_0";
        else if (Constants.MBusAlarms.GENERIC_ALARM_1 === params) return "GENERIC_ALARM_1";
        else if (Constants.MBusAlarms.GENERIC_ALARM_2 === params) return "GENERIC_ALARM_2";
        else if (Constants.MBusAlarms.GENERIC_ALARM_3 === params) return "GENERIC_ALARM_3";
        else if (Constants.MBusAlarms.GENERIC_ALARM_4 === params) return "GENERIC_ALARM_4";
        else if (Constants.MBusAlarms.GENERIC_ALARM_5 === params) return "GENERIC_ALARM_5";
        else if (Constants.MBusAlarms.GENERIC_ALARM_6 === params) return "GENERIC_ALARM_6";
        else if (Constants.MBusAlarms.GENERIC_ALARM_7 === params) return "GENERIC_ALARM_7";

        return "";
    }

    static decodeConstantsMEPAlarms(params) {
        if (Constants.MEPAlarms.BILLING_DATA_COLLECTED === params) return "BILLING_DATA_COLLECTED";
        else if (Constants.MEPAlarms.APP_ERROR_RESPONSE_RECEIVED === params) return "APP_ERROR_RESPONSE_RECEIVED";
        else if (Constants.MEPAlarms.MEP_OVERFLOW_OCCURRED === params) return "MEP_OVERFLOW_OCCURRED";
        else if (Constants.MEPAlarms.COMMUNICATION_FAILURE === params) return "COMMUNICATION_FAILURE";
        else if (Constants.MEPAlarms.GENERIC_ALARM_0 === params) return "GENERIC_ALARM_0";
        else if (Constants.MEPAlarms.GENERIC_ALARM_1 === params) return "GENERIC_ALARM_1";
        else if (Constants.MEPAlarms.GENERIC_ALARM_2 === params) return "GENERIC_ALARM_2";
        else if (Constants.MEPAlarms.GENERIC_ALARM_3 === params) return "GENERIC_ALARM_3";
        else if (Constants.MEPAlarms.GENERIC_ALARM_4 === params) return "GENERIC_ALARM_4";
        else if (Constants.MEPAlarms.GENERIC_ALARM_5 === params) return "GENERIC_ALARM_5";
        else if (Constants.MEPAlarms.GENERIC_ALARM_6 === params) return "GENERIC_ALARM_6";
        else if (Constants.MEPAlarms.GENERIC_ALARM_7 === params) return "GENERIC_ALARM_7";

        return "";
    }

    static decodeConstantsGatewayUpgradeStatusStates(params) {
        if (Constants.GatewayUpgradeStatusStates.UNDEFINED === params) return "UNDEFINED";
        else if (Constants.GatewayUpgradeStatusStates.INITIALIZE === params) return "INITIALIZE";
        else if (Constants.GatewayUpgradeStatusStates.DECOMPRESS === params) return "DECOMPRESS";
        else if (Constants.GatewayUpgradeStatusStates.VALIDATE_DIGEST === params) return "VALIDATE_DIGEST";
        else if (Constants.GatewayUpgradeStatusStates.VALIDATE_CONFIG === params) return "VALIDATE_CONFIG";
        else if (Constants.GatewayUpgradeStatusStates.VALIDATE_CONTENTS === params) return "VALIDATE_CONTENTS";
        else if (Constants.GatewayUpgradeStatusStates.EXTRACT_IMAGE === params) return "EXTRACT_IMAGE";
        else if (Constants.GatewayUpgradeStatusStates.VALIDATE_SCRIPTS === params) return "VALIDATE_SCRIPTS";
        else if (Constants.GatewayUpgradeStatusStates.VALIDATE_PREREQUISITES === params) return "VALIDATE_PREREQUISITES";
        else if (Constants.GatewayUpgradeStatusStates.INSTALL_KERNAL === params) return "INSTALL_KERNAL";
        else if (Constants.GatewayUpgradeStatusStates.PREINSTALL_SCRIPTS === params) return "PREINSTALL_SCRIPTS";
        else if (Constants.GatewayUpgradeStatusStates.IMAGE_SWITCH === params) return "IMAGE_SWITCH";
        else if (Constants.GatewayUpgradeStatusStates.REBOOT === params) return "REBOOT";
        else if (Constants.GatewayUpgradeStatusStates.SWITCH_FAILED === params) return "SWITCH_FAILED";
        else if (Constants.GatewayUpgradeStatusStates.SWITCH_SUCCEEDED === params) return "SWITCH_SUCCEEDED";
        else if (Constants.GatewayUpgradeStatusStates.UNINSTALL_SCRIPTS === params) return "UNINSTALL_SCRIPTS";
        else if (Constants.GatewayUpgradeStatusStates.CLEAN_SCRIPTS === params) return "CLEAN_SCRIPTS";
        else if (Constants.GatewayUpgradeStatusStates.UPGRADE_COMPLETE === params) return "UPGRADE_COMPLETE";

        return "";
    }
    //    #region Deprecated Classes
    ////////////////////////////////////////////////////////////////////////////////////////
    //The following classes are deprecated												  //
    ////////////////////////////////////////////////////////////////////////////////////////
    //    #region Classes Used by Deprecated General SystemEvent.DC1000_Event which was replaced by specific events

    /*    [Obsolete("v3.0 - used for forwarding deprecated general DC1000 event")]*/
    static decodeConstantsDC1000SoftwareDiagnosticCodes(params) {
        if (Constants.DC1000SoftwareDiagnosticCodes.NONE === params) return "NONE";
        else if (Constants.DC1000SoftwareDiagnosticCodes.BOOT_LOOP === params) return "BOOT_LOOP";
        else if (Constants.DC1000SoftwareDiagnosticCodes.FILE_ERROR === params) return "FILE_ERROR";
        else if (Constants.DC1000SoftwareDiagnosticCodes.RTC_NOT_SET === params) return "RTC_NOT_SET";
        else if (Constants.DC1000SoftwareDiagnosticCodes.RTC_BATTERY_LOW === params) return "RTC_BATTERY_LOW";
        else if (Constants.DC1000SoftwareDiagnosticCodes.INVALID_PPP_USERNAME_OR_PASSWORD === params) return "INVALID_PPP_USERNAME_OR_PASSWORD";
        else if (Constants.DC1000SoftwareDiagnosticCodes.UPDATE_FAILURE === params) return "UPDATE_FAILURE";
        else if (Constants.DC1000SoftwareDiagnosticCodes.UPDATE_IMAGE_CRC_FAILURE === params) return "UPDATE_IMAGE_CRC_FAILURE";
        else if (Constants.DC1000SoftwareDiagnosticCodes.INTERNAL_REPEATING_LISTS_ERROR === params) return "INTERNAL_REPEATING_LISTS_ERROR";
        else if (Constants.DC1000SoftwareDiagnosticCodes.SRAM_CHECKSUM_ERROR === params) return "SRAM_CHECKSUM_ERROR";
        else if (Constants.DC1000SoftwareDiagnosticCodes.IMPROPER_SHUTDOWN === params) return "IMPROPER_SHUTDOWN";
        else if (Constants.DC1000SoftwareDiagnosticCodes.EXTENDED_DATA_PROPERTY_ERROR === params) return "EXTENDED_DATA_PROPERTY_ERROR";

        return "";
    }

    /*    [Obsolete("v3.0 - used for forwarding deprecated general DC1000 event")]*/
    static decodeConstantsDC1000RsaKeyStates(params) {
        if (Constants.DC1000RsaKeyStates.NO_RSA_KEYS_PENDING === params) return "NO_RSA_KEYS_PENDING";
        else if (Constants.DC1000RsaKeyStates.GENERATING_RSA_KEY === params) return "GENERATING_RSA_KEY";
        else if (Constants.DC1000RsaKeyStates.RSA_KEY_GENERATED === params) return "RSA_KEY_GENERATED";
        else if (Constants.DC1000RsaKeyStates.ACTIVATING_RSA_KEY_AND_CERTIFICATES === params) return "ACTIVATING_RSA_KEY_AND_CERTIFICATES";
        else if (Constants.DC1000RsaKeyStates.RSA_KEY_AND_CERTIFICATES_ACTIVE === params) return "RSA_KEY_AND_CERTIFICATES_ACTIVE";

        return "";
    }

    //Starting with v3.0, the following class has been deprecated. Replaced by DataConcentratorSecurityExceptionCodes 
    /*    [Obsolete("v3.0 - use the DataConcentratorSecurityExceptionCodes class instead")]*/
    static decodeConstantsDC1000SecurityExceptions(params) {
        if (Constants.DC1000SecurityExceptions.NONE === params) return "NONE";
        else if (Constants.DC1000SecurityExceptions.ST_CONSOLE_PASSWORD_FAILURE === params) return "ST_CONSOLE_PASSWORD_FAILURE";
        else if (Constants.DC1000SecurityExceptions.ST_PPP_CHAP_FAILURE === params) return "ST_PPP_CHAP_FAILURE";
        else if (Constants.DC1000SecurityExceptions.WAN_PPP_CHAP_FAILURE === params) return "WAN_PPP_CHAP_FAILURE";
        else if (Constants.DC1000SecurityExceptions.WAN_APPLICATION_AUTH_FAILURE === params) return "WAN_APPLICATION_AUTH_FAILURE";
        else if (Constants.DC1000SecurityExceptions.WAN_SSL_FAILURE === params) return "WAN_SSL_FAILURE";
        else if (Constants.DC1000SecurityExceptions.LOCAL_SSL_FAILURE === params) return "LOCAL_SSL_FAILURE";
        else if (Constants.DC1000SecurityExceptions.NES_SECURITY_FAILURE === params) return "NES_SECURITY_FAILURE";
        else if (Constants.DC1000SecurityExceptions.PEER_DCXP_SESSION_CAPABILITY_NOT_RECOGNIZED === params) return "PEER_DCXP_SESSION_CAPABILITY_NOT_RECOGNIZED";
        else if (Constants.DC1000SecurityExceptions.PEER_DISAGREED_ON_DCXP_SESSION_CAPABILITY_REQUIRED === params) return "PEER_DISAGREED_ON_DCXP_SESSION_CAPABILITY_REQUIRED";

        return "";
    }

    //Starting with v3.0, the following class has been deprecated. Replaced by DataConcentratorRebootCodes 
    /*    [Obsolete("v3.0 - use the DataConcentratorRebootCodes class instead")]*/
    static decodeConstantsDC1000RebootCauses(params) {
        if (Constants.DC1000RebootCauses.POWER_UP === params) return "POWER_UP";
        else if (Constants.DC1000RebootCauses.PANIC_RESET === params) return "PANIC_RESET";
        else if (Constants.DC1000RebootCauses.CACHE_FLUSH_FAILURE === params) return "CACHE_FLUSH_FAILURE";
        else if (Constants.DC1000RebootCauses.CLOCK_WRAPAROUND === params) return "CLOCK_WRAPAROUND";
        else if (Constants.DC1000RebootCauses.EXTERNAL_REQUEST === params) return "EXTERNAL_REQUEST";
        else if (Constants.DC1000RebootCauses.LOCAL_REQUEST === params) return "LOCAL_REQUEST";
        else if (Constants.DC1000RebootCauses.BOOT_API_RESET === params) return "BOOT_API_RESET";
        else if (Constants.DC1000RebootCauses.NO_MEMORY === params) return "NO_MEMORY";
        else if (Constants.DC1000RebootCauses.WATCHDOG === params) return "WATCHDOG";
        else if (Constants.DC1000RebootCauses.REASON_OUT_OF_RANGE === params) return "REASON_OUT_OF_RANGE";
        else if (Constants.DC1000RebootCauses.MODEM_INITIALIZATION === params) return "MODEM_INITIALIZATION";
        else if (Constants.DC1000RebootCauses.UNKNOWN_EXCEPTION === params) return "UNKNOWN_EXCEPTION";
        else if (Constants.DC1000RebootCauses.FATAL_TAMPER === params) return "FATAL_TAMPER";
        else if (Constants.DC1000RebootCauses.BUFFER_EXHAUSTION === params) return "BUFFER_EXHAUSTION";
        else if (Constants.DC1000RebootCauses.WAN_INACTIVE === params) return "WAN_INACTIVE";

        return "";
    }

    /*    [Obsolete("v3.0 - using bytes to represent cause codes instead of GUIDs. See the DataConcentratorCauseCodes class.")]*/
    static decodeConstantsDC1000NackCauseCodes(params) {
        if (Constants.DC1000NackCauseCodes.UNKNOWN_CODE === params) return "UNKNOWN_CODE";
        else if (Constants.DC1000NackCauseCodes.RESOURCE_NOT_FOUND === params) return "RESOURCE_NOT_FOUND";
        else if (Constants.DC1000NackCauseCodes.NOT_IMPLEMENTED === params) return "NOT_IMPLEMENTED";
        else if (Constants.DC1000NackCauseCodes.INVALID_PARAMETER === params) return "INVALID_PARAMETER";
        else if (Constants.DC1000NackCauseCodes.OPERATION_FAILED === params) return "OPERATION_FAILED";
        else if (Constants.DC1000NackCauseCodes.INTERNAL_FAILURE === params) return "INTERNAL_FAILURE";
        else if (Constants.DC1000NackCauseCodes.OUT_OF_RANGE === params) return "OUT_OF_RANGE";
        else if (Constants.DC1000NackCauseCodes.INVALID_LENGTH === params) return "INVALID_LENGTH";
        else if (Constants.DC1000NackCauseCodes.PROPERTY_NOT_FOUND === params) return "PROPERTY_NOT_FOUND";
        else if (Constants.DC1000NackCauseCodes.OPERATION_NOT_ALLOWED === params) return "OPERATION_NOT_ALLOWED";
        else if (Constants.DC1000NackCauseCodes.REPEAT_CHAIN_TOO_LONG === params) return "REPEAT_CHAIN_TOO_LONG";
        else if (Constants.DC1000NackCauseCodes.LIMIT_EXCEEDED === params) return "LIMIT_EXCEEDED";
        else if (Constants.DC1000NackCauseCodes.RESOURCE_DISABLED === params) return "RESOURCE_DISABLED";
        else if (Constants.DC1000NackCauseCodes.PREVIOUS_SEGMENT_NOT_FOUND === params) return "PREVIOUS_SEGMENT_NOT_FOUND";
        else if (Constants.DC1000NackCauseCodes.SEGMENT_LOOP === params) return "SEGMENT_LOOP";
        else if (Constants.DC1000NackCauseCodes.DUPLICATE_SUBNET_NODE_ADDRESS === params) return "DUPLICATE_SUBNET_NODE_ADDRESS";
        else if (Constants.DC1000NackCauseCodes.SEGMENT_NOT_FOUND === params) return "SEGMENT_NOT_FOUND";
        else if (Constants.DC1000NackCauseCodes.RESOURCE_IN_USE === params) return "RESOURCE_IN_USE";
        else if (Constants.DC1000NackCauseCodes.DEVICE_NOT_DEFINED === params) return "DEVICE_NOT_DEFINED";
        else if (Constants.DC1000NackCauseCodes.MESSAGE_SET_NOT_FOUND === params) return "MESSAGE_SET_NOT_FOUND";
        else if (Constants.DC1000NackCauseCodes.DEVICE_NO_RESPONSE === params) return "DEVICE_NO_RESPONSE";
        else if (Constants.DC1000NackCauseCodes.FUNCTION_ABORTED === params) return "FUNCTION_ABORTED";

        else if (Constants.DC1000NackCauseCodes.OPERATION_EXPIRED === params) return "OPERATION_EXPIRED";
        else if (Constants.DC1000NackCauseCodes.INVALID_SEGMENT === params) return "INVALID_SEGMENT";
        else if (Constants.DC1000NackCauseCodes.INSUFFICIENT_RESOURCES === params) return "INSUFFICIENT_RESOURCES";
        else if (Constants.DC1000NackCauseCodes.INVALID_DATE_TIME === params) return "INVALID_DATE_TIME";
        else if (Constants.DC1000NackCauseCodes.IMAGE_NOT_FOUND === params) return "IMAGE_NOT_FOUND";
        else if (Constants.DC1000NackCauseCodes.IMAGE_CRC_FAILURE === params) return "IMAGE_CRC_FAILURE";
        else if (Constants.DC1000NackCauseCodes.TOO_MANY_TEST_POINTS_FOR_SEGMENT_PHASE === params) return "TOO_MANY_TEST_POINTS_FOR_SEGMENT_PHASE";
        else if (Constants.DC1000NackCauseCodes.DEVICE_PROCEDURE_FAILURE === params) return "DEVICE_PROCEDURE_FAILURE";

        else if (Constants.DC1000NackCauseCodes.TARGET_DISABLED === params) return "TARGET_DISABLED";
        else if (Constants.DC1000NackCauseCodes.ADDRESS_ERROR === params) return "ADDRESS_ERROR";
        else if (Constants.DC1000NackCauseCodes.DEVICE_NOT_REACHABLE === params) return "DEVICE_NOT_REACHABLE";
        else if (Constants.DC1000NackCauseCodes.AUTHENTICATED_RESPONSE_FAILURE === params) return "AUTHENTICATED_RESPONSE_FAILURE";
        else if (Constants.DC1000NackCauseCodes.RESPONSE_NOT_AUTHENTIC === params) return "RESPONSE_NOT_AUTHENTIC";
        else if (Constants.DC1000NackCauseCodes.RESPONSE_INVALID === params) return "RESPONSE_INVALID";
        else if (Constants.DC1000NackCauseCodes.TARGET_NOT_ANSWERING_AGENT === params) return "TARGET_NOT_ANSWERING_AGENT";
        else if (Constants.DC1000NackCauseCodes.TARGET_OFFLINE === params) return "TARGET_OFFLINE";
        else if (Constants.DC1000NackCauseCodes.REPEATER1_FAILURE === params) return "REPEATER1_FAILURE";
        else if (Constants.DC1000NackCauseCodes.REPEATER2_FAILURE === params) return "REPEATER2_FAILURE";
        else if (Constants.DC1000NackCauseCodes.REPEATER3_FAILURE === params) return "REPEATER3_FAILURE";
        else if (Constants.DC1000NackCauseCodes.REPEATER4_FAILURE === params) return "REPEATER4_FAILURE";
        else if (Constants.DC1000NackCauseCodes.REPEATER5_FAILURE === params) return "REPEATER5_FAILURE";
        else if (Constants.DC1000NackCauseCodes.REPEATER6_FAILURE === params) return "REPEATER6_FAILURE";
        else if (Constants.DC1000NackCauseCodes.REPEATER7_FAILURE === params) return "REPEATER7_FAILURE";
        else if (Constants.DC1000NackCauseCodes.REPEATER8_FAILURE === params) return "REPEATER8_FAILURE";
        else if (Constants.DC1000NackCauseCodes.PHASE_NOT_MEASURABLE === params) return "PHASE_NOT_MEASURABLE";
        else if (Constants.DC1000NackCauseCodes.INVALID_STATE === params) return "INVALID_STATE";
        else if (Constants.DC1000NackCauseCodes.GENERIC_RESPONSE_FAILURE === params) return "GENERIC_RESPONSE_FAILURE";
        else if (Constants.DC1000NackCauseCodes.INVALID_HANDLE === params) return "INVALID_HANDLE";
        else if (Constants.DC1000NackCauseCodes.INVALID_STATE_FOR_ONLINE === params) return "INVALID_STATE_FOR_ONLINE";
        else if (Constants.DC1000NackCauseCodes.INVALID_DEVICE_TYPE_FOR_OPERATION === params) return "INVALID_DEVICE_TYPE_FOR_OPERATION";
        else if (Constants.DC1000NackCauseCodes.AGENT_HAD_NO_BUFFER_FOR_RESPONSE === params) return "AGENT_HAD_NO_BUFFER_FOR_RESPONSE";
        else if (Constants.DC1000NackCauseCodes.APPLICATION_AUTHENTICATION_FAILURE === params) return "APPLICATION_AUTHENTICATION_FAILURE";
        else if (Constants.DC1000NackCauseCodes.DCXP_SOCKET_NOT_SECURED === params) return "DCXP_SOCKET_NOT_SECURED";
        else if (Constants.DC1000NackCauseCodes.DCX_NOT_READY_TO_HANDLE_REQUEST === params) return "DCX_NOT_READY_TO_HANDLE_REQUEST";
        else if (Constants.DC1000NackCauseCodes.COMPRESSION_FAILURE === params) return "COMPRESSION_FAILURE";
        else if (Constants.DC1000NackCauseCodes.DATA_OVERFLOW === params) return "DATA_OVERFLOW";
        else if (Constants.DC1000NackCauseCodes.INVALID_DATATYPE === params) return "INVALID_DATATYPE";
        else if (Constants.DC1000NackCauseCodes.DUPLICATE_PROPERTY === params) return "DUPLICATE_PROPERTY";
        else if (Constants.DC1000NackCauseCodes.TRANSACTION_NUMBER_MISMATCH === params) return "TRANSACTION_NUMBER_MISMATCH";
        else if (Constants.DC1000NackCauseCodes.TRANSACTION_NUMBER_INTEGRITY === params) return "TRANSACTION_NUMBER_INTEGRITY";
        else if (Constants.DC1000NackCauseCodes.MEP_DEVICE_NOT_FOUND === params) return "MEP_DEVICE_NOT_FOUND";
        else if (Constants.DC1000NackCauseCodes.OPERATION_INTERRUPTED === params) return "OPERATION_INTERRUPTED";
        else if (Constants.DC1000NackCauseCodes.MIXED_ENCRYPTION === params) return "MIXED_ENCRYPTION";
        else if (Constants.DC1000NackCauseCodes.WRONG_KEY === params) return "WRONG_KEY";
        else if (Constants.DC1000NackCauseCodes.CAPABILITY_REQUIRED === params) return "CAPABILITY_REQUIRED";
        else if (Constants.DC1000NackCauseCodes.DECRYPTION_FAILURE === params) return "DECRYPTION_FAILURE";
        else if (Constants.DC1000NackCauseCodes.OPERATION_REJECTED === params) return "OPERATION_REJECTED";
        else if (Constants.DC1000NackCauseCodes.NOT_MODIFIABLE === params) return "NOT_MODIFIABLE";
        else if (Constants.DC1000NackCauseCodes.PHASE_ABORT === params) return "PHASE_ABORT";
        else if (Constants.DC1000NackCauseCodes.WAN_CONFIG_ERROR === params) return "WAN_CONFIG_ERROR";
        else if (Constants.DC1000NackCauseCodes.UNEXPECTED_DEVICE_RESET === params) return "UNEXPECTED_DEVICE_RESET";
        else if (Constants.DC1000NackCauseCodes.MODEL_NUMBER_MISMATCH === params) return "MODEL_NUMBER_MISMATCH";
        else if (Constants.DC1000NackCauseCodes.FIRMWARE_VERSION_NUMBER_MISMATCH === params) return "FIRMWARE_VERSION_NUMBER_MISMATCH";
        else if (Constants.DC1000NackCauseCodes.DEVICE_IS_READ_WRITE_PROTECTED === params) return "DEVICE_IS_READ_WRITE_PROTECTED";
        else if (Constants.DC1000NackCauseCodes.DEVICE_APP_CHECKSUM_VERIFICATION_FAILED === params) return "DEVICE_APP_CHECKSUM_VERIFICATION_FAILED";
        else if (Constants.DC1000NackCauseCodes.DEVICE_DATA_ERROR === params) return "DEVICE_DATA_ERROR";
        else if (Constants.DC1000NackCauseCodes.IDI_MISMATCH === params) return "IDI_MISMATCH";
        else if (Constants.DC1000NackCauseCodes.NOT_EXECUTED === params) return "NOT_EXECUTED";
        else if (Constants.DC1000NackCauseCodes.RESOURCE_DATA_ERROR === params) return "RESOURCE_DATA_ERROR";
        else if (Constants.DC1000NackCauseCodes.DEVICE_RESPONSE_CODE_UNKNOWN === params) return "DEVICE_RESPONSE_CODE_UNKNOWN";
        else if (Constants.DC1000NackCauseCodes.DEVICE_REQUEST_REJECTED === params) return "DEVICE_REQUEST_REJECTED";
        else if (Constants.DC1000NackCauseCodes.DEVICE_SERVICE_NOT_SUPPORTED === params) return "DEVICE_SERVICE_NOT_SUPPORTED";
        else if (Constants.DC1000NackCauseCodes.DEVICE_SECURITY_FAILURE === params) return "DEVICE_SECURITY_FAILURE";
        else if (Constants.DC1000NackCauseCodes.DEVICE_OPERATION_NOT_POSSIBLE === params) return "DEVICE_OPERATION_NOT_POSSIBLE";
        else if (Constants.DC1000NackCauseCodes.DEVICE_ACTION_INAPPROPRIATE === params) return "DEVICE_ACTION_INAPPROPRIATE";
        else if (Constants.DC1000NackCauseCodes.DEVICE_BUSY === params) return "DEVICE_BUSY";
        else if (Constants.DC1000NackCauseCodes.DEVICE_DATA_NOT_READY === params) return "DEVICE_DATA_NOT_READY";
        else if (Constants.DC1000NackCauseCodes.DEVICE_DATA_LOCKED === params) return "DEVICE_DATA_LOCKED";
        else if (Constants.DC1000NackCauseCodes.DEVICE_RENEGOTIATE_REQUEST === params) return "DEVICE_RENEGOTIATE_REQUEST";
        else if (Constants.DC1000NackCauseCodes.DEVICE_INVALID_SERVICE_SEQUENCE_STATE === params) return "DEVICE_INVALID_SERVICE_SEQUENCE_STATE";
        else if (Constants.DC1000NackCauseCodes.DEVICE_COULD_NOT_AUTHENTICATE_REQUEST === params) return "DEVICE_COULD_NOT_AUTHENTICATE_REQUEST";
        else if (Constants.DC1000NackCauseCodes.DEVICE_INVALID_AUTHENTICATION_SEQUENCE_NUMBER === params) return "DEVICE_INVALID_AUTHENTICATION_SEQUENCE_NUMBER";
        else if (Constants.DC1000NackCauseCodes.DEVICE_PROCEDURE_ACCEPTED_BUT_NOT_COMPLETE === params) return "DEVICE_PROCEDURE_ACCEPTED_BUT_NOT_COMPLETE";
        else if (Constants.DC1000NackCauseCodes.DEVICE_PROCEDURE_INVALID_PARAMETER === params) return "DEVICE_PROCEDURE_INVALID_PARAMETER";
        else if (Constants.DC1000NackCauseCodes.DEVICE_PROCEDURE_CONFIGURATION_CONFLICT === params) return "DEVICE_PROCEDURE_CONFIGURATION_CONFLICT";
        else if (Constants.DC1000NackCauseCodes.DEVICE_PROCEDURE_TIMING_CONSTRAINT === params) return "DEVICE_PROCEDURE_TIMING_CONSTRAINT";
        else if (Constants.DC1000NackCauseCodes.DEVICE_PROCEDURE_NOT_AUTHORIZED === params) return "DEVICE_PROCEDURE_NOT_AUTHORIZED";
        else if (Constants.DC1000NackCauseCodes.DEVICE_PROCEDURE_ID_INVALID === params) return "DEVICE_PROCEDURE_ID_INVALID";
        else if (Constants.DC1000NackCauseCodes.DEVICE_ON_DEMAND_REQUEST_TABLE_FULL === params) return "DEVICE_ON_DEMAND_REQUEST_TABLE_FULL";
        else if (Constants.DC1000NackCauseCodes.DEVICE_UNKNOWN_PROC_RESPONSE === params) return "DEVICE_UNKNOWN_PROC_RESPONSE";
        else if (Constants.DC1000NackCauseCodes.DEVICE_ICA_NACK === params) return "DEVICE_ICA_NACK";
        else if (Constants.DC1000NackCauseCodes.DEVICE_INCOMPATIBLE_REQUEST === params) return "DEVICE_INCOMPATIBLE_REQUEST";

        return "";
    }

    //Starting with v3.0, the following class has been deprecated. Replaced by DataConcentratorHardwareFailureCodes 
    /*    [Obsolete("v3.0 - use the DataConcentratorHardwareFailureCodes class instead")]*/
    static decodeConstantsDC1000HardwareDiagnosticCodes(params) {
        if (Constants.DC1000HardwareDiagnosticCodes.DRAM_FAILURE === params) return "DRAM_FAILURE";
        else if (Constants.DC1000HardwareDiagnosticCodes.FLASH_FAILURE === params) return "FLASH_FAILURE";
        else if (Constants.DC1000HardwareDiagnosticCodes.SRAM_FAILURE === params) return "SRAM_FAILURE";
        else if (Constants.DC1000HardwareDiagnosticCodes.RTC_FAILURE === params) return "RTC_FAILURE";
        else if (Constants.DC1000HardwareDiagnosticCodes.NEURON_FAILURE === params) return "NEURON_FAILURE";
        else if (Constants.DC1000HardwareDiagnosticCodes.CLOCK_FAILURE === params) return "CLOCK_FAILURE";
        else if (Constants.DC1000HardwareDiagnosticCodes.PHASE_FAILURE === params) return "PHASE_FAILURE";

        return "";
    }

    //Starting with v3.0, the following class has been deprecated. Individual DeviceEvents are used instead.
    /*    [Obsolete("v3.0 - DeviceEvents are used instead")]*/
    static decodeConstantsDC1000EventTypes(params) {
        if (Constants.DC1000EventTypes.HARDWARE_FAILURE === params) return "HARDWARE_FAILURE";
        else if (Constants.DC1000EventTypes.SOFTWARE_FAILURE === params) return "SOFTWARE_FAILURE";
        else if (Constants.DC1000EventTypes.PLANNED_REBOOT === params) return "PLANNED_REBOOT";
        else if (Constants.DC1000EventTypes.UNPLANNED_REBOOT === params) return "UNPLANNED_REBOOT";
        else if (Constants.DC1000EventTypes.DEVICE_ALARM === params) return "DEVICE_ALARM";
        else if (Constants.DC1000EventTypes.DEVICE_CLOCK_ERROR === params) return "DEVICE_CLOCK_ERROR";
        else if (Constants.DC1000EventTypes.DC_TO_METER_COMMUNICATION_STATUS === params) return "DC_TO_METER_COMMUNICATION_STATUS";
        else if (Constants.DC1000EventTypes.DEVICE_NACK === params) return "DEVICE_NACK";
        else if (Constants.DC1000EventTypes.DEVICE_PHASE_CHANGE === params) return "DEVICE_PHASE_CHANGE";
        else if (Constants.DC1000EventTypes.DEVICE_PHASE_INVERSION === params) return "DEVICE_PHASE_INVERSION";
        else if (Constants.DC1000EventTypes.SEGMENT_DOWN === params) return "SEGMENT_DOWN";
        else if (Constants.DC1000EventTypes.RESOURCE_EXHAUSTION === params) return "RESOURCE_EXHAUSTION";
        else if (Constants.DC1000EventTypes.COMMUNICATION_FAILURE === params) return "COMMUNICATION_FAILURE";
        else if (Constants.DC1000EventTypes.SERVICE_TOOL_CONNECT === params) return "SERVICE_TOOL_CONNECT";
        else if (Constants.DC1000EventTypes.FLASH_LOW === params) return "FLASH_LOW";
        else if (Constants.DC1000EventTypes.FUNCTION_DONE === params) return "FUNCTION_DONE";
        else if (Constants.DC1000EventTypes.SECURITY_EXCEPTION === params) return "SECURITY_EXCEPTION";
        else if (Constants.DC1000EventTypes.CA_CERTIFICATE_EXPIRATION === params) return "CA_CERTIFICATE_EXPIRATION";
        else if (Constants.DC1000EventTypes.DC_CERTIFICATE_EXPIRATION === params) return "DC_CERTIFICATE_EXPIRATION";
        else if (Constants.DC1000EventTypes.RSA_KEY_GENERATED === params) return "RSA_KEY_GENERATED";

        return "";
    }

    //Starting with v3.0, the following class has been deprecated. Replaced by DeviceNackCodes 
    /*    [Obsolete("v3.0 - use the DeviceNackCodes class instead")]*/
    static decodeConstantsDC1000DeviceNackCodes(params) {
        if (Constants.DC1000DeviceNackCodes.SERVICE_NOT_SUPPORTED === params) return "SERVICE_NOT_SUPPORTED";
        else if (Constants.DC1000DeviceNackCodes.OPERATION_NOT_POSSIBLE === params) return "OPERATION_NOT_POSSIBLE";
        else if (Constants.DC1000DeviceNackCodes.INAPPROPRIATE_ACTION_REQUESTED === params) return "INAPPROPRIATE_ACTION_REQUESTED";
        else if (Constants.DC1000DeviceNackCodes.DEVICE_BUSY === params) return "DEVICE_BUSY";
        else if (Constants.DC1000DeviceNackCodes.DIGEST_ERROR === params) return "DIGEST_ERROR";
        else if (Constants.DC1000DeviceNackCodes.SEQUENCE_NUMBER_ERROR === params) return "SEQUENCE_NUMBER_ERROR";

        else if (Constants.DC1000DeviceNackCodes.PROCEDURE_NOT_COMPLETED === params) return "PROCEDURE_NOT_COMPLETED";
        else if (Constants.DC1000DeviceNackCodes.INVALID_PARAMETER_PROCEDURE_IGNORED === params) return "INVALID_PARAMETER_PROCEDURE_IGNORED";
        else if (Constants.DC1000DeviceNackCodes.DEVICE_SETUP_CONFLICT_PROCEDURE_IGNORED === params) return "DEVICE_SETUP_CONFLICT_PROCEDURE_IGNORED";
        else if (Constants.DC1000DeviceNackCodes.TIMING_CONSTRAINT_PROCEDURE_IGNORED === params) return "TIMING_CONSTRAINT_PROCEDURE_IGNORED";
        else if (Constants.DC1000DeviceNackCodes.NO_AUTHORIZATION_PROCEDURE_IGNORED === params) return "NO_AUTHORIZATION_PROCEDURE_IGNORED";
        else if (Constants.DC1000DeviceNackCodes.PROCEDURE_UNRECOGNIZED === params) return "PROCEDURE_UNRECOGNIZED";

        return "";
    }
    //    #endregion

    //Starting with v4, the following class has been deprecated.
    /*    [Obsolete("v4 - no replacement, no longer used")]*/
    static decodeConstantsMBusAlarmStatusTypes(params) {
        if (Constants.MBusAlarmStatusTypes.EVENT === params) return "EVENT";
        else if (Constants.MBusAlarmStatusTypes.NO_EVENT === params) return "NO_EVENT";

        return "";
    }

    // List of types of time zone Daylight Savings Time supported - deprecated starting in v5
    /*    [Obsolete("v5 - no replacement, no longer used")]*/
    static decodeConstantsTimeZoneDstTypes(params) {
        if (Constants.TimeZoneDstTypes.NO_DST === params) return "NO_DST";
        else if (Constants.TimeZoneDstTypes.UNKNOWN_DST === params) return "UNKNOWN_DST";
        else if (Constants.TimeZoneDstTypes.US_DST === params) return "US_DST";
        else if (Constants.TimeZoneDstTypes.EUROPEAN_DST === params) return "EUROPEAN_DST";

        return "";
    }

    /*    [Obsolete("v5.2.000 - no replacement, no longer used")]*/
    static decodeConstantsMaximumPowerTypes(params) {
        if (Constants.MaximumPowerTypes.PRIMARY === params) return "PRIMARY";
        else if (Constants.MaximumPowerTypes.PREPAY === params) return "PREPAY";
        else if (Constants.MaximumPowerTypes.BOTH_PRIMARY_AND_PREPAY === params) return "BOTH_PRIMARY_AND_PREPAY";

        return "";
    }

    /*    [Obsolete("v5.3 - no replacement, no longer used")]*/
    static decodeConstantsWirelessMeshControllerConfigurationOptions(params) {
        if (Constants.WirelessMeshControllerConfigurationOptions.PRESERVE_PREVIOUS_IP_ADDRESSES_AND_PORT_FORWARDING_MAPPINGS === params) return "PRESERVE_PREVIOUS_IP_ADDRESSES_AND_PORT_FORWARDING_MAPPINGS";
        else if (Constants.WirelessMeshControllerConfigurationOptions.DO_NOT_PRESERVE_PREVIOUS_IP_ADDRESSES_AND_PORT_FORWARDING_MAPPINGS === params) return "DO_NOT_PRESERVE_PREVIOUS_IP_ADDRESSES_AND_PORT_FORWARDING_MAPPINGS";

        return "";
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    //    #endregion

}

module.exports = DecodeConstantsMapping;
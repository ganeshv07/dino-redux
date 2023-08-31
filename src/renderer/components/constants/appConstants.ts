export const AppConstants = {

    ACTIVE_MODULE: {
        HOME: 1,
        BILLING: 2,
        TABLE_MANAGEMENT:3,
        INVENTORY_MANAGEMENT: 4,
        REPORTS: 5,
        ACCOUNTS: 6,
        PROMOTIONS: 7,
        SETTINGS: 8,
        REPEAT_SAMPLE_REQUEST: 30,
       
    },

    MODULE_NAMES: {
        1: 'Home',
        2: 'Billing',
        3: 'Table Management',
        4: 'Inventory Management',
        5: 'Reports',
        6: 'Accounts',
        7: 'Promotions',
        8: 'Settings',
        9: 'Drop Samples',
        10: 'Change Password',
      
    }
};

export const ATTACHMENT_FILE_EXTENSIONS = ['doc', 'docx', 'xls', 'xlsx', 'pdf', 'jpeg'];

export const CREATE_CHILD_ORDER_DAYS = 15;
export const CANCEL_UPLOAD_BUTTON_TIME_DURATION = 8;
export const DOCUMENT_UPLOAD_BUTTON_DURATION = 24;
export const PRESCRIPTION_UPLOAD_BUTTON_DURATION = 36;
export const TIME_DURATION_GET_AX_PENDING_ERROR_LOGS = (15 * 60 * 1000);

export const VERIFICATION_STATUS = {
    VERIFIED: 'verified',
    SUBMITTED: 'submitted',
    REJECTED: 'rejected',
    NOT_SUBMITTED: 'not submitted',
    UNDER_VERIFICATION: 'under verification'
};

export const BASIC_MENU_OPTIONS_MODULE_ALIAS = ['PATIENT_REGISTRATION', 'ORDER_HISTORY', 'PRINT_REPORT_INVOICE', 'ERROR_LOGS', 'PRICE_ENQUIRY'];

export const MORE_MENU_OPTIONS_MODULE_ALIAS = ['DROP_SAMPLE', 'MIS_REPORT', 'RSR_ORDER', 'ETRF', 'ORDER_DOCUMENTS', 'VET_REGISTRATION', 'LMP_CALCULATOR'];

export const NUMBER_REGEX = /^[0-9 ]*$/;
export const CHARACTER_REGEX = /^[a-zA-Z ]*$/;
export const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9 ]*$/;
export const ALPHA_NUMERIC_SPECIAL_CHARACTER_REGEX = /^[a-zA-Z0-9-., ]*$/;

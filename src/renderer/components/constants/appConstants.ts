export const AppConstants = {

    ACTIVE_MODULE: {
        HOME: 1,
        BILLING: 2,
        INVENTORY_MANAGEMENT: 3,
        REPORTS: 4,
        ACCOUNTS: 5,
        PROMOTIONS: 6,
        SETTINGS: 7,
        REPEAT_SAMPLE_REQUEST: 30,
        E_T_R_F: 50,
        PRICE_ENQUIRY: 60,
        CREATE_ORDER: 70,
        // DROP_SAMPLES_DETAILS: 8,
        CHANGE_PASSWORD: 9,
        CENTER_DETAILS: 10,
        PROFILE_DETAILS: 11,
        CENTER_DETAILS_UPDATE: 12,
        MIS_REPORTS: 13,
        REPORT_STATUS: 14,
        LMP_DATE: 15,
        VET_REGISTRATION: 16,
        VET_CREATE_ORDER: 17,
        E_T_R_F_HISTORY: 18,
        ORDER_DOCUMENTS: 19,
        DASHBOARD: 20,
        ERROR_LOGS: 21,
        REGISTRATION_TRENDS: 22
    },

    MODULE_NAMES: {
        1: 'Home',
        2: 'Billing',
        3: 'Inventory Management',
        4: 'Reports',
        5: 'Accounts',
        6: 'Promotions',
        7: 'Settings',
        8: 'Drop Samples',
        9: 'Change Password',
        10: 'Center Details',
        11: 'Profile Details',
        12: 'Center Details',
        13: 'MIS Report',
        14: 'Print Invoice',
        15: 'LMP Calculator',
        16: 'Vet Registration',
        17: 'Vet Registration',
        18: 'e-TRF History',
        19: 'Order Documents',
        20: 'Dashboard',
        21: 'Error Logs',
        22: 'Registration Trends'
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

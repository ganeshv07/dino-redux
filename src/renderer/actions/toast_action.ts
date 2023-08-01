const Constants = {
    DEFAULT_TOAST: 'DEFAULT_TOAST',
    SUCCESS_TOAST: 'SUCCESS_TOAST',
    DANGER_TOAST: 'DANGER_TOAST',
    WARNING_TOAST: 'WARNING_TOAST',
    INFO_TOAST: 'INFO_TOAST',
    DARK_TOAST: 'DARK_TOAST'
};

const defaultToast = (data: any) => ({
    type: Constants.DEFAULT_TOAST,
    payload: data
});

const successToast = (data: any) => ({
    type: Constants.SUCCESS_TOAST,
    payload: data
});

const errorToast = (data: any) => ({
    type: Constants.DANGER_TOAST,
    payload: data
});

const warningToast = (data: any) => ({
    type: Constants.WARNING_TOAST,
    payload: data
});

const infoToast = (data: any) => ({
    type: Constants.INFO_TOAST,
    payload: data
});

const darkToast = (data: any) => ({
    type: Constants.DARK_TOAST,
    payload: data
});

export default {
    Constants,
    defaultToast,
    successToast,
    errorToast,
    warningToast,
    infoToast,
    darkToast
};

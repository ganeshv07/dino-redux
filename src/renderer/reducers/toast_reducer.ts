import { toast } from 'react-toastify';
import toast_actions from './../actions/toast_action';
import _ from './../utils/lodash';

const ToastReducer = (state = {}, action: any) => {
    switch (action.type) {
        case toast_actions.Constants.DEFAULT_TOAST: {
            return toast(action.payload, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                closeButton: false
            });
        }

        case toast_actions.Constants.SUCCESS_TOAST: {
            return toast.success(action.payload, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                closeButton: false
            });
        }
        case toast_actions.Constants.DANGER_TOAST: {
            return toast.error(action.payload, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                closeButton: false
            });
        }
        case toast_actions.Constants.WARNING_TOAST: {
            return toast.warn(action.payload, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                closeButton: false
            });
        }
        case toast_actions.Constants.INFO_TOAST: {
            return toast.info(action.payload, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                closeButton: false
            });
        }
        case toast_actions.Constants.DARK_TOAST: {
            return toast.dark(action.payload, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                closeButton: false
            });
        }
        default:
            return state;
    }
};

export default ToastReducer;

import * as React from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastStyles.scss';

export default function Toast(props:any) {
    return (
        <React.Fragment>
            <ToastContainer
                limit={3}
                position='top-right'
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                transition={Slide}
            />
        </React.Fragment>
    );
}

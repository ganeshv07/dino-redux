import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import OtpInput from 'react-otp-input';
import Strings from '../constants/strings';
import useStyles from './otpScreenStyles';

interface IOtpScreenProps {
    phoneNumber: string;
    closeOtpModel: Function;
    handleResendOtp: Function;
    handleVerifyOtp: Function;
    isVisibleCounter: Boolean;
    handleCounterVisibility: Function;
    isInputNum: true;
}

export default function OtpScreen(props: IOtpScreenProps) {
    const classes = useStyles(props);

    const [otp, handleOTP] = React.useState('');

    const handleClose = () => {
        props.closeOtpModel();
    };

    const resendOtp = () => {
        handleOTP('');
        props.handleResendOtp();
    };

    const handleVerifyOtp = () => {
        props.handleVerifyOtp(otp);
    };

    const handleChangeOpt = (value:any) => {
        const regexp = /^[0-9\b]+$/;
        if (!(value === '' || regexp.test(value))) {
            return;
        }
        handleOTP(value);
    };

    const resendClick = () => {
        resendOtp();
    };

    // const timerRender = () => React.useMemo(
    //     () => (
    //         <Grid className={classes.otpResend}>
    //             <Typography className={`${classes.otpContent} ${classes.otpMain} ${classes.otpResend}`}>
    //                 {props.isVisibleCounter ? <span> {'OTP expires in '} &nbsp;{<CountdownTimer duration={OTP_VALIDITY} onCompleteTimer={() => props.handleCounterVisibility(false)} />}</span> : ''}
    //             </Typography>
    //         </Grid>
    //     ),
    //     [props.isVisibleCounter]
    // );

    return (
        <Dialog
            open={true}
            onClose={(event, reason) => {
                if (reason !== 'backdropClick') {
                    handleClose();
                }
            }}
            // disableBackdropClick={true}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-success'
            classes={{ paper: classes.lplPopupMain }}
        >
            <DialogTitle className={classes.headerBg} id='draggable-dialog-title'>
                <Typography component='p' className={classes.headerTitle}>
                    {'Verify Otp'}
                </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContent className={classes.contentContainer}>
                    <Grid container className={classes.otpContainer}>
                        <Typography className={classes.otpContent}>
                            {'An OTP has been sent to your registered'} <br /> {'Mobile No : ' + props.phoneNumber}
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Typography className={`${classes.otpContent} ${classes.otpMain}`}>
                            {'Please enter OTP below'}
                        </Typography>
                    </Grid>
                    <Grid className={classes.otpMain}>
                        {/* <OtpInput
                            isInputNum={true}
                            numInputs={4}
                            value={otp || ''}
                            inputStyle={classes.otpInput}
                            separator={<span>&nbsp;</span>}
                            containerStyle={classes.otpContainer}
                            onChange={handleChangeOpt}
                        /> */}
                    </Grid>
                    {/* Timer */}
                    {/* {timerRender()} */}
                </DialogContent>
            </DialogContent>
            <DialogActions>
                <Button className={classes.cancelBtn} onClick={handleClose}>
                    {Strings.FORGOT_PASSWORD.CANCEL_BUTTON}
                </Button>
                <Button
                    variant='contained'
                    // disabled={!!props.isVisibleCounter}
                    className={classes.cancelBtn}
                    onClick={resendClick}>
                    {Strings.FORGOT_PASSWORD.RESEND_OTP}
                </Button>
                <Button
                    className={classes.addBtn}
                    variant='contained'
                    color='primary'
                    disabled={!otp || otp.length !== 4}
                    onClick={handleVerifyOtp} >
                    {Strings.FORGOT_PASSWORD.VERIFY}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

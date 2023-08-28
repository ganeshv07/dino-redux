import * as React from "react";
import { CssBaseline, FormHelperText, Grid, Paper, Button, Typography, Box, } from "@material-ui/core";
import { useForm } from 'react-hook-form';
import Footer from '../common/footer';
import OtpScreen from "./otpScreen";
import OtpInput from "react-otp-input";
import useStyles from "./forgotPasswordstyles";
import Strings from "../constants/strings";
import { useNavigate } from "react-router-dom";

let Login_bg = require("../../assets/images/login_bg.png");
const DinoLogo = require('../../assets/images/Dino.png');


const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};

export default function ForgotPassword(props: any) {
  const classes = useStyles(theme);
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [isOtpVerified, setisOtpVerified] = React.useState(false);
  const [isVisibleCounter, handleCounterVisibility] = React.useState(false);
  const { primaryUser, onVerifyOtp, handleOpenOtpModel, action } = props;
  const [otp, setOtp] = React.useState("");

  const onSubmit = (data:any) => {
    console.log(data);
  }

  const closeOtpModel = () => {
    handleOpenOtpModel(false);
  };

  const handleVerify = (otp: any) => { setisOtpVerified(true);};

  const sendOTP = () => {};

  const resendOtp = () => {
    sendOTP();
  };

  const handleUpdate = () => {
    navigate('/');
  }

  React.useEffect(() => {
    sendOTP();
  }, []);

  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={6} md={6} className={`${classes.image} ${classes.flexLines}`} >
          <img  className={classes.dinoLogo} src={DinoLogo} />
          <img className={classes.login_bg} src={Login_bg} alt="Login_bg" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={`${classes.flexLines} ${classes.rightContainer}`}
        >
          <Grid
            component={Paper}
            elevation={3}
            className={`${classes.forgotPasswordContainer}`}
          >
            <Box className={classes.TitleContainer}>
            <h2>
              { isOtpVerified ? Strings.FORGOT_PASSWORD.FINALLY : Strings.FORGOT_PASSWORD.FEW_MORE_STEPS }
            </h2>
            <p>
              { isOtpVerified ? Strings.FORGOT_PASSWORD.COMPLETE_LAST_STEP : Strings.FORGOT_PASSWORD.OTP_FOR_VERIFICATION }
            </p>
            </Box>
           { isOtpVerified ? <Box className={classes.changePasswordcontainer}>
            <form id='form' className={`${classes.changePasswordForm}`} onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("newpassword",{ required : true, maxLength: 10 })} className={classes.Input} placeholder=' new password' /> 
                    {errors.newpassword?.type === "required" && <FormHelperText className={classes.errorText} >new Password is required</FormHelperText>}
                    {errors.newpassword?.type === "maxLength" && <FormHelperText className={classes.errorText}>Max Length Exceed</FormHelperText>}
                     <input type="text" {...register("confirmpassword",{ required : true, maxLength: 10 })} className={classes.Input} placeholder='confirm password' /> 
                    {errors.confirmpassword?.type === "required" && <FormHelperText className={classes.errorText}>confirm Password is required</FormHelperText>}
                    {errors.confirmpassword?.type === "maxLength" && <FormHelperText className={classes.errorText}>Max Length Exceed</FormHelperText>}
                    <Button
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                    onClick={handleUpdate}>
                    {Strings.FORGOT_PASSWORD.UPDATE}
                  </Button>
                 
                </form>
           </Box> 
           : <Box>
              <Grid className={classes.otpMain}>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  inputStyle={classes.otpInput}
                  renderSeparator={<span>&nbsp;</span>}
                  containerStyle={classes.otpContainer}
                  renderInput={(props) => <input {...props} />}
                />
              </Grid>
              <div className={classes.otpFooter}>
                <Button
                  className={classes.cancelButton}
                  onClick={() => navigate("/")}
                >
                  {Strings.FORGOT_PASSWORD.CANCEL_BUTTON}
                </Button>
                {
                  <Button
                    variant="contained"
                    className={classes.blueButton}
                    onClick={resendOtp}
                  >
                    {Strings.FORGOT_PASSWORD.RESEND_OTP}
                  </Button>
                }
                {
                  <Button
                    className={classes.uploadButton}
                    variant="contained"
                    color="primary"
                    disabled={!otp || otp.length !== 4}
                    onClick={handleVerify}
                  >
                    {Strings.FORGOT_PASSWORD.VERIFY}
                  </Button>
                }
              </div>
            </Box> }
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
}

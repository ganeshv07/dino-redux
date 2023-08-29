import * as React from "react";
import { CssBaseline, FormHelperText, Grid, Paper, Button, Typography, Box,TextField } from "@material-ui/core";
import { useForm } from 'react-hook-form';
import Footer from '../common/footer';
import OtpScreen from "./otpScreen";
import OtpInput from "react-otp-input";
import useStyles from "./forgotPasswordstyles";
import Strings from "../constants/strings";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";

let Login_bg = require("../../assets/images/login_bg.png");
const DinoLogo = require('../../assets/images/Dino.png');


const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};

interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}

export default function ForgotPassword(props: any) {
  const classes = useStyles(theme);
  const navigate = useNavigate();
  const { register, watch, formState: { errors } } = useForm()
  const [isOtpVerified, setisOtpVerified] = React.useState(false);
  const [isVisibleCounter, handleCounterVisibility] = React.useState(false);
  const { primaryUser, onVerifyOtp, handleOpenOtpModel, action } = props;
  const [otp, setOtp] = React.useState("");

  const initialState = {
    newPassword: '',
    confirmPassword: '',
    newPasswordView: false,
    confirmPasswordView: false
};

function reducer(appState:any, { field, value }:any) { //we didn't define any special actions but we are directly returning the state value
    return {
        ...appState,
        [field]: value
    };
}

const [state, setState] = React.useReducer(reducer, initialState);

const changePassword = () => {
  let payloadData = {} as IChangePassword;
  payloadData.oldPassword = state.oldPassword;
  payloadData.newPassword = state.newPassword;
  navigate('/');

  
};

const handleSubmit = () => {
  // if (state.newPassword.trim().length < 6 || state.confirmPassword.trim().length < 6) {
  //     dispatch(app_actions.toast_actions.errorToast(Strings.CONFIRM_ALERT.PASSWORD_SIX));
  // } else if (state.newPassword !== state.confirmPassword) {
  //     dispatch(app_actions.toast_actions.errorToast(Strings.CONFIRM_ALERT.PASSWORD_MATCH));
  // } else {
  //     changePassword();
  // }
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

const handleMouseDownPassword = (event:any) => {
    event.preventDefault();
};

  const handleViewPassword = (element:any) => {
    const copyState = { ...state };
    setState({ field: element, value: !copyState[element] });
};

const onChangeInput = (e:any) => {
    setState({ field: e.target.name, value: e.target.value.trim() });
};

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
           <Grid container className={classes.resetContent} >
           <Grid item  >
                        <TextField
                            id='new_pass-input'
                            variant='outlined'
                            name='newPassword'
                            value={state.newPassword}
                            className={classes.inputLabel}
                            type={state.newPasswordView ? 'text' : 'password'}
                            placeholder={'New Password'}
                            inputProps={{ 'aria-label': 'newPassword', name: 'newPassword' }}
                            autoComplete='off'
                            onChange={onChangeInput}
                            InputLabelProps={{
                                shrink: true
                            }}
                            InputProps={{    
                              autoComplete: "off",
                              endAdornment: (
                               <InputAdornment position="end">
                                 <IconButton
                                   className={classes.passwordIcon}
                                   aria-label="toggle password visibility"
                                   onClick={() => handleViewPassword('newPasswordView')}
                                   onMouseDown={handleMouseDownPassword}
                                   edge="end"
                                 >
                                   {state.newPasswordView ? <VisibilityOff className={classes.passwordIcon} /> : <Visibility  className={classes.passwordIcon}/>}
                                 </IconButton>
                               </InputAdornment>
                               ),    }}
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            id='confirm_pass-input'
                            variant='outlined'
                            name='confirmPassword'
                            value={state.confirmPassword}
                            className={classes.inputLabel}
                            type={state.confirmPasswordView ? 'text' : 'password'}
                            placeholder={'Confirm New Password'}
                            inputProps={{ 'aria-label': 'confirmPassword', name: 'confirmPassword' }}
                            autoComplete='off'
                            onChange={onChangeInput}
                            InputLabelProps={{
                                shrink: true
                            }}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    className={classes.passwordIcon}
                                    aria-label="toggle password visibility"
                                    onClick={() => handleViewPassword('confirmPasswordView')}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {state.confirmPasswordView ? <VisibilityOff  className={classes.passwordIcon} /> : <Visibility className={classes.passwordIcon} />}
                                  </IconButton>
                                </InputAdornment>
                                ),
                              
                            }}
                        />
                    </Grid>

            </Grid>

           
                    <Button
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                    onClick={handleUpdate}>
                    {Strings.FORGOT_PASSWORD.UPDATE}
                  </Button>
                 
           </Box> 
           : <Box className={classes.otpBoxContainer}>
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
                    fullWidth
                    className={classes.verifyButton}
                    variant="contained"
                    color="primary"
                    disabled={!otp || otp.length !== 4}
                    onClick={handleVerify}
                  >
                    {Strings.FORGOT_PASSWORD.VERIFY}
                  </Button>
                  </div>
              <div className={classes.otpFooterLabel}>
                <Button
                  className={classes.cancelButton}
                  onClick={() => navigate("/")}
                >
                  {Strings.FORGOT_PASSWORD.CANCEL_BUTTON}
                </Button>
                
                  <Button
                    className={classes.cancelButton}
                    onClick={resendOtp}
                  >
                    {Strings.FORGOT_PASSWORD.RESEND_OTP}
                  </Button>
              </div>
            </Box> }
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
}

import * as React from "react";
import { CssBaseline,  FormHelperText,Grid, Paper, Button, Typography } from "@material-ui/core";
import { useForm } from 'react-hook-form';
import useStyles from "./loginStyles";
import Footer from '../common/footer';
import Strings from '../constants/strings';
import { useNavigate } from 'react-router-dom'

let Login_bg = require("../../assets/images/login_bg.png");

const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};


export default function Login(props: any) {
  const classes = useStyles(theme);
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [isForgetPassword, setForgetPasswordStatus] = React.useState(false);

  const onSubmit = (data:any) => {
    console.log(data);
  }
  const initialState = {
    username: "",
    password: "",
    userCaptcha: "",
    showPassword: false,
  };


  const handleSignUp = () => {
    console.log('props',props);
    navigate('/registration')
    
  }


  const handleForgetPassword = (isForget:boolean) => {
    // setErrorMsg('');
    // setForgotPasswordMessage('');
    setForgetPasswordStatus(isForget);
    // state.username = '';
    // state.password = '';
    // state.userCaptcha = '';
  };

  const forgotPassword = () => {
    navigate('/forgotpassword')
  };

  const handleOnClick = (e:any) => {
    e.preventDefault();
 
    // if (!state.username || state.username === '' || !state.password || state.password === '' || !state.userCaptcha || state.userCaptcha === '') {
    //   return;
    // }
    // doAuthenticate();
  };

  

  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={6} md={6} className={`${classes.image} ${classes.flexLines}`} >
          <img className={classes.login_bg} src={Login_bg} alt="Login_bg" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={`${classes.flexLines} ${classes.rightContainer}`} >
          <Grid component={Paper} elevation={3} className={`${classes.signinContainer}`} >
                <h2>{(isForgetPassword) ? Strings.LOGIN.OOPS_FORGOT_PASSWORD : Strings.LOGIN.WELCOME_BACK}</h2>
                <span>{(isForgetPassword) ? Strings.LOGIN.PLEASE_RESET_YOUR_PASSWORD :Strings.LOGIN.ENTER_DETAILS}</span>

                <form id='form' className={`${classes.signinForm}`} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username",{ required : true})} className={classes.Input} placeholder='username' />
                    {errors.username?.type === "required" && <FormHelperText className={classes.errorText} >Mobile Number is required</FormHelperText>}
                    {(isForgetPassword) ? null : <input type="text" {...register("password",{ required : true, maxLength: 10 })} className={classes.Input} placeholder='password' /> }
                    {errors.password?.type === "required" && <FormHelperText className={classes.errorText}>Password is required</FormHelperText>}
                    {errors.password?.type === "maxLength" && <FormHelperText className={classes.errorText}>Max Length Exceed</FormHelperText>}
                    <Button
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                    onClick={(e) => { isForgetPassword ? forgotPassword() : handleOnClick(e); }}>
                    {(isForgetPassword) ? Strings.LOGIN.SEND_OTP : Strings.LOGIN.LOGIN}
                  </Button>
                  {
                        (isForgetPassword) ?
                          <Typography component={'div'} className={classes.loginBack} onClick={() => { handleForgetPassword(false); }}>{Strings.LOGIN.BACK_TO_LOGIN}</Typography>
                          :
                  <React.Fragment>
                    <p>Don't have an Account ? <span className={classes.errorText} onClick={handleSignUp}>Sign Up</span></p>
                    <p>Forgot Password ? <span className={classes.errorText} onClick={() => handleForgetPassword(true)}>Click Here</span></p>
                  </React.Fragment>
                   }
                </form>

            
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
}

import * as React from "react";
import {
  CssBaseline,
  FormHelperText,
  Grid,
  Paper,
  Button,
  Typography,
  Box
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import useStyles from "./loginStyles";
import Footer from "../common/footer";
import Strings from "../constants/strings";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

let Login_bg = require("../../assets/images/login_bg.png");
const DinoLogo = require("../../assets/images/Dino.png");

const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};

export default function Login(props: any) {
  const classes = useStyles(theme);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const [isForgetPassword, setForgetPasswordStatus] = React.useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };
  const initialState = {
    username: "",
    password: "",
    userCaptcha: "",
    showPassword: false,
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSignUp = () => {
    console.log("props", props);
    navigate("/registration");
  };

  const handleForgetPassword = (isForget: boolean) => {
    // setErrorMsg('');
    // setForgotPasswordMessage('');
    setForgetPasswordStatus(isForget);
    // state.username = '';
    // state.password = '';
    // state.userCaptcha = '';
  };

  const forgotPassword = () => {
    navigate("/forgotpassword");
  };

  const handleOnClick = (e: any) => {
    console.log('handleOnClick',e);
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
        <Grid
          item
          xs={false}
          sm={6}
          md={6}
          className={`${classes.image} ${classes.flexLines}`}
        >
          <img className={classes.dinoLogo} src={DinoLogo} />
          <img className={classes.login_bg} src={Login_bg} alt="Login_bg" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          className={`${classes.flexLines} ${classes.rightContainer}`}
        >
          <Grid
            component={Paper}
            elevation={3}
            className={`${classes.signinContainer}`}
          >
            <Box className={classes.TitleContainer}>
            <h2>
              {isForgetPassword
                ? Strings.LOGIN.OOPS_FORGOT_PASSWORD
                : Strings.LOGIN.WELCOME_BACK}
            </h2>
            <p>
              {isForgetPassword
                ? Strings.LOGIN.PLEASE_RESET_YOUR_PASSWORD
                : Strings.LOGIN.ENTER_DETAILS}
            </p>
            </Box>

            <form
              id="form"
              className={`${classes.signinForm}`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{ required: "Username is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className={classes.TextInput}
                    label="Username"
                    variant="outlined"
                    required={true}
                    error={!!errors.username}
                    // helperText={errors.username?.type}
                  />
                )}
              />
              {/* <input type="text" {...register("username",{ required : true})} className={classes.Input} placeholder='username' /> */}
              {errors.username?.type === "required" && (
                <FormHelperText className={classes.errorText}>
                  Mobile Number is required
                </FormHelperText>
              )}
             {isForgetPassword ? null : (  <Controller
                name="Password"
                control={control}
                defaultValue=""
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-adornment-password"
                    className={classes.TextInput}
                    error={!!errors.password}
                    type={showPassword ? 'text' : 'password'}
                    required={true}
                    InputProps={{    
                       autoComplete: "off",
                       endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                        ),    }}
                    label="Password"
                    // helperText={errors.username?.type}
                  />
                )}
              /> )}
              {/* {isForgetPassword ? null : (
                <input
                  type="text"
                  {...register("password", { required: true, maxLength: 10 })}
                  className={classes.Input}
                  placeholder="password"
                />
              )} */}
              {errors.password?.type === "required" && (
                <FormHelperText className={classes.errorText}>
                  Password is required
                </FormHelperText>
              )}
              {errors.password?.type === "maxLength" && (
                <FormHelperText className={classes.errorText}>
                  Max Length Exceed
                </FormHelperText>
              )}
              <Button
                fullWidth
                variant="contained"
                type="submit"
                className={classes.submit}
                onClick={(e) => {
                  isForgetPassword ? forgotPassword() : handleOnClick(e);
                }}
              >
                {isForgetPassword
                  ? Strings.LOGIN.SEND_OTP
                  : Strings.LOGIN.LOGIN}
              </Button>
              {isForgetPassword ? (
                <Typography
                  component={"div"}
                  className={classes.loginBack}
                  onClick={() => {
                    handleForgetPassword(false);
                  }}
                >
                  {Strings.LOGIN.BACK_TO_LOGIN}
                </Typography>
              ) : (
                <React.Fragment>
                  <p className={classes.footerText}>
                    Don't have an Account ?{" "}
                    <span className={classes.errorText} onClick={handleSignUp}>
                      Sign Up
                    </span>
                  </p>
                  <p className={classes.footerText}>
                    Forgot Password ?{" "}
                    <span
                      className={classes.errorText}
                      onClick={() => handleForgetPassword(true)}
                    >
                      Click Here
                    </span>
                  </p>
                </React.Fragment>
              )}
            </form>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
}

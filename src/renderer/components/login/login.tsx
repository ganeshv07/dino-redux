import * as React from "react";
import { CssBaseline,  FormHelperText,Grid, Paper } from "@material-ui/core";
import { useForm } from 'react-hook-form';
import useStyles from "./loginStyles";
import { useNavigate } from 'react-router-dom'

let Login_bg = require("../../assets/images/login_bg.png");

const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};


export default function Login(props: any) {
  const classes = useStyles(theme);
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
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



  

  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={6} md={6} className={`${classes.image} ${classes.flexLines}`} >
          <img className={classes.login_bg} src={Login_bg} alt="Login_bg" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={`${classes.flexLines} ${classes.rightContainer}`} >
          <Grid component={Paper} elevation={3} className={`${classes.signinContainer}`} >
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className={`${classes.signinForm}`} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username",{ required : true})} className={classes.Input} placeholder='username' />
                    {errors.username?.type === "required" && <FormHelperText className={classes.errorText} >Mobile Number is required</FormHelperText>}
                    <input type="text" {...register("password",{ required : true, maxLength: 10 })} className={classes.Input} placeholder='password' />
                    {errors.password?.type === "required" && <FormHelperText className={classes.errorText}>Password is required</FormHelperText>}
                    {errors.password?.type === "maxLength" && <FormHelperText className={classes.errorText}>Max Length Exceed</FormHelperText>}
                    <button className='btn'>LogIn</button>
                    <p>Don't have an Account ? <span className={classes.errorText} onClick={handleSignUp}>Sign Up</span></p>
                    <p>Forgot Password ? <span className={classes.errorText}>Click Here</span></p>
                </form>

            
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import useStyles from "./registrationStyles";

const theme = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  };
export const FormOne = (props:any) => {
const classes = useStyles(theme);

const { register, handleSubmit, watch, formState: { errors } } = useForm()

 

  return (
    <form>
     <input type="text" {...register("ownername",{ required : true})} className={classes.Input} placeholder='owner name' />
     <input type="text" {...register("mobilenumber",{ required : true})} className={classes.Input} placeholder='mobile number' />
     <input type="text" {...register("username",{ required : true})} className={classes.Input} placeholder='username' />
     <input type="text" {...register("password",{ required : true})} className={classes.Input} placeholder='password' />
    </form>
  );
};

export const FormTwo = (props:any) => {
    const classes = useStyles(theme);
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

  return (
    <form>
      <input type="text" {...register("restaurentname",{ required : true})} className={classes.Input} placeholder='restaurent name' />
     <input type="text" {...register("restaurentgstin",{ required : true})} className={classes.Input} placeholder='restaurent GSTIN' />
     <input type="text" {...register("restaurenttagline",{ required : true})} className={classes.Input} placeholder='restaurent Tagline' />
     <input type="text" {...register("fssaino",{ required : true})} className={classes.Input} placeholder='FSSAI No' />
    </form>
  );
};

export const FormThree = (props:any) => {
    const classes = useStyles(theme);
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

  return (
    <form>
    <input type="text" {...register("landlineno",{ required : true})} className={classes.Input} placeholder='Landline No' />
   <input type="text" {...register("email",{ required : true})} className={classes.Input} placeholder='Email' />
   <select {...register("city")} className={classes.Input}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>   <input type="text" {...register("address",{ required : true})} className={classes.Input} placeholder='address' />
  </form>
  );
};

import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message"
import useStyles from "./registrationStyles";

const theme = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  };
export const FormOne = (props:any) => {
const classes = useStyles(theme);

const { register, formState: { errors } } = useFormContext();
console.log('errors',errors);

 

  return (
    <React.Fragment>
     <input type="text" {...register("ownername",{ required : true})} className={classes.Input} placeholder='owner name' />
     <ErrorMessage errors={errors} name="ownername" render={({ message }) => <p className={classes.errorText}>{message}</p>} />

     <input type="text" {...register("mobilenumber",{ required : true})} className={classes.Input} placeholder='mobile number' />
     <ErrorMessage errors={errors} name="mobilenumber" render={({ message }) => <p className={classes.errorText}>{message}</p>} />

     <input type="text" {...register("username",{ required : true})} className={classes.Input} placeholder='username' />
     <ErrorMessage errors={errors} name="username" render={({ message }) => <p className={classes.errorText}>{message}</p>} />

     <input type="text" {...register("password",{ required : true})} className={classes.Input} placeholder='password' />
     <ErrorMessage errors={errors} name="password" render={({ message }) => <p className={classes.errorText}>{message}</p>}/>

    </React.Fragment>
  );
};

export const FormTwo = (props:any) => {
    const classes = useStyles(theme);
    const { register, formState: { errors } } = useFormContext();
    console.log(' form 2 errors',errors);


  return (
    <React.Fragment>
      <input type="text" {...register("restaurentname",{ required : true})} className={classes.Input} placeholder='restaurent name' />
      <ErrorMessage errors={errors} name="restaurentname" render={({ message }) => <p className={classes.errorText}>{message}</p>} />
     <input type="text" {...register("restaurentgstin",{ required : true})} className={classes.Input} placeholder='restaurent GSTIN' />
     <ErrorMessage errors={errors} name="restaurentgstin" render={({ message }) => <p className={classes.errorText}>{message}</p>} />

     <input type="text" {...register("restaurenttagline",{ required : true})} className={classes.Input} placeholder='restaurent Tagline' />
     <ErrorMessage errors={errors} name="restaurenttagline" render={({ message }) => <p className={classes.errorText}>{message}</p>} />

     <input type="text" {...register("fssaino",{ required : true})} className={classes.Input} placeholder='FSSAI No' />
     <ErrorMessage errors={errors} name="fssaino" render={({ message }) => <p className={classes.errorText}>{message}</p>} />

    </React.Fragment>
  );
};

export const FormThree = (props:any) => {
    const classes = useStyles(theme);
    const { register, formState: { errors } } = useFormContext();
    console.log(' form 3 errors',errors);


  return (
    <React.Fragment>
    <input type="text" {...register("landlineno",{ required : true})} className={classes.Input} placeholder='Landline No' />
    <ErrorMessage errors={errors} name="landlineno" render={({ message }) => <p className={classes.errorText}>{message}</p>} />

   <input type="text" {...register("email",{ required : true})} className={classes.Input} placeholder='Email' />
   <ErrorMessage errors={errors} name="email" render={({ message }) => <p className={classes.errorText}>{message}</p>} />

   <select {...register("city")} className={classes.Input}>
        <option value="">Select Gender</option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select> 
      <ErrorMessage errors={errors} name="city" render={({ message }) => <p className={classes.errorText}>{message}</p>} />

        <input type="text" {...register("address",{ required : true})} className={classes.Input} placeholder='address' />
      <ErrorMessage errors={errors} name="address" render={({ message }) => <p className={classes.errorText}>{message}</p>} />

  </React.Fragment>
  );
};

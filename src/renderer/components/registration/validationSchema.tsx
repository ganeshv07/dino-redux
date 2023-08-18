import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export const loginInfoSchema = Yup.object().shape({
    ownername: Yup.string().required('Ower name is required'),
    mobilenumber: Yup.string().required('Mobile number is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  export const restaurantInfoSchema = Yup.object().shape({
    restaurentname: Yup.string().required('Restaurent name is required'),
    restaurentgstin: Yup.string().required('Restaurent GSTIN is required'),
    restaurenttagline: Yup.string().required('Restaurent Tagline is required'),
    fssaino: Yup.string().required('FSSAI no is required'),
  });  

  export const restaurantAddressSchema = Yup.object().shape({
    landlineno: Yup.string().required('Land line no is required'),
    email: Yup.string().required('Email is required'),
    city: Yup.string().required('City is required'),
    address: Yup.string().required('Address is required'),
  });  

  
  





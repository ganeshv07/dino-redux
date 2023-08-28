import * as React from "react";
import {
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import Footer from "../common/footer";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "../../utils/lodash";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { FormOne, FormTwo, FormThree } from "./registrationForms";
import app_actions from '../../actions/index';
import { store } from '../../store/index';
import {
  loginInfoSchema,
  restaurantInfoSchema,
  restaurantAddressSchema,
} from "./validationSchema";
import Strings from "../constants/strings";
import useStyles from "./registrationStyles";
import { useNavigate } from "react-router";

let Login_bg = require("../../assets/images/login_bg.png");
const DinoLogo = require('../../assets/images/Dino.png');


const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};

const getSteps = () => {
  return ["Login Info", "Restaurant Info", "Restaurant Address"];
};

const getStepTitle = (step: any) => {
  switch (step) {
    case 0:
      return `${Strings.REGISTRATION.PLEASE_ENTER_YOUR_DETAILS}`;
    case 1:
      return `${Strings.REGISTRATION.PLEASE_ENTER_RESTAURANT_DETAILS}`;
    case 2:
      return `${Strings.REGISTRATION.PLEASE_ENTER_YOUR_RESTAURANT_ADDRESS}`;
    default:
      return "";
  }
};

const getStepContent = (step: any) => {
  switch (step) {
    case 0:
      return <FormOne />;
    case 1:
      return <FormTwo />;
    case 2:
      return <FormThree />;
    default:
      return "Unknown step";
  }
};

const getValidationSchema = (step: any) => {
  switch (step) {
    case 0:
      return loginInfoSchema;
    case 1:
      return restaurantInfoSchema;
    case 2:
      return restaurantAddressSchema;
  }
};

// const schema = Yup.object().shape({
//   ownername: Yup.string().required('Ower name is required'),
//     mobilenumber: Yup.string().required('Mobile number is required'),
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().required('Password is required'),
//      restaurentname: Yup.string().required('Restaurent name is required'),
//     restaurentgstin: Yup.string().required('Restaurent GSTIN is required'),
//     restaurenttagline: Yup.string().required('Restaurent Tagline is required'),
//     fssaino: Yup.string().required('FSSAI no is required'),
//     landlineno: Yup.string().required('Land line no is required'),
//     email: Yup.string().required('Email is required'),
//     city: Yup.string().required('City is required'),
//     address: Yup.string().required('Address is required'),
// });

export default function Registration(props: any) {
  const classes = useStyles(theme);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeSchema, setActiveSchema] = React.useState(loginInfoSchema);

  const [compiledForm, setCompiledForm] = React.useState({});
  const steps = getSteps();

  const schema = getValidationSchema(activeStep);

  // const methods = useForm({
  //   resolver: yupResolver(schema),
  // });

  const methods = useForm({
    resolver: yupResolver(activeSchema),
    defaultValues: {
      ownername: "",
      mobilenumber: "",
      username: "",
      password: "",
    },
 
  });

  // restaurentname: "",
  // restaurentgstin: "",
  // restaurenttagline: "",
  // fssaino: ""

  const { handleSubmit, formState, getValues: any } = methods;

  const onSubmit = (data: any) => {
    let bb:any = restaurantInfoSchema;
    let cc:any = restaurantAddressSchema;
    if (activeStep === 0) {
      // Final step, submit the form data
     
      setActiveSchema(bb);
      setActiveStep(activeStep + 1);
    } else if( activeStep === 1) {
      setActiveSchema(cc);
      setActiveStep(activeStep + 1);
    }else if(activeStep === 2) {
      console.log("Form data:", data);
      store.dispatch(app_actions.user_actions.loginUserDetails(data));
      navigate("/dashboard");
    }else {
      console.log('completed steps')
    }
  };


  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      switch (activeStep) {
        case 1:
          setCompiledForm({});
          break;
        case 2:
          setCompiledForm({});
          break;
        default:
          return "not a valid step";
      }
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompiledForm({});
  };

  const handleComplete = () => {
    navigate("/");
  };

  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={5}
          className={`${classes.image} ${classes.flexLines}`}
        >
          <img  className={classes.dinoLogo} src={DinoLogo} />
          <img className={classes.login_bg} src={Login_bg} alt="Login_bg" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={7}
          className={`${classes.flexLines} ${classes.rightContainer}`}
        >
          <Grid
            component={Paper}
            elevation={3}
            className={`${classes.registrationContainer}`}
          >
            <Grid
              item
              sm={4}
              md={4}
              className={`${classes.flexLines} ${classes.verticalLines}`}
            >
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps} className={classes.CustomStepLabel}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Grid>
            <Grid item sm={8} md={8}>
              <Box className={`${classes.registrationRightContainer}`}>
                {activeStep === steps.length ? (
                  <div className={`${classes.flexLines}`}>
                    <Button onClick={handleComplete}>Completed</Button>
                    <Button onClick={handleReset}>Close</Button>
                  </div>
                ) : (
                  <FormProvider {...methods}>
                    <Box className={classes.TitleContainer}>
                    <h2>{Strings.REGISTRATION.WELCOME}</h2>
                    <p>{getStepTitle(activeStep)}</p>
                  </Box>
                  <form onSubmit={handleSubmit(onSubmit)} className={`${classes.registrationForms}`}>
                        {getStepContent(activeStep)}
                    <div className={`${classes.formFooter}`}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack}> Back</Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </form>
                  </FormProvider>
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
}

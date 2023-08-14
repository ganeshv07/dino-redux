import * as React from "react";
import { CssBaseline, Divider, Grid, Paper, Box, Typography } from "@material-ui/core";
import Footer from '../common/footer';
import { useFormContext } from "react-hook-form";
import _ from "../../utils/lodash";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector from "@mui/material/StepConnector";
import { FormOne, FormTwo, FormThree } from "./registrationForms";
import Strings from '../constants/strings';
import useStyles from "./registrationStyles";
import { useNavigate } from "react-router";

let Login_bg = require("../../assets/images/login_bg.png");

const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};



const getSteps = () => {
  return ["Login Info", "Restaurant Info", "Restaurant Address"];
};

const getStepTitle = (step:any) => {
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

}

const getStepContent = (step:any, formContent:any) => {
  switch (step) {
    case 0:
      return <FormOne  />;
    case 1:
      return <FormTwo  />;
    case 2:
      return <FormThree />;
    default:
      return "Unknown step";
  }
};



export default function Registration(props: any) {
  const classes = useStyles(theme);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [compiledForm, setCompiledForm] = React.useState({});
  const steps = getSteps();



  const handleNext = () => {
    let canContinue = true;

    switch (activeStep) {
      case 0:
        setCompiledForm({});
        canContinue = true;
        break;
      case 1:
        setCompiledForm({});
        canContinue = true;
        break;
      case 2:
        setCompiledForm({});
        canContinue = true;
        // handleSubmit({ ...compiledForm, three: form });
        break;
      default:
        return "not a valid step";
    }
    if (canContinue) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

  const handleSubmit = (form:any) => {
    if (_.isEmpty("b")) {
      console.log("submit", form);
    }
  };
  const handleComplete = () => {
    navigate('/')
  }



  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={6} md={5} className={`${classes.image} ${classes.flexLines}`} >
          <img className={classes.login_bg} src={Login_bg} alt="Login_bg" />
        </Grid>
        <Grid item xs={12} sm={6} md={7} className={`${classes.flexLines} ${classes.rightContainer}`} >
          <Grid
            component={Paper}
            elevation={3}        
            className={`${classes.registrationContainer}`}
          >
            <Grid item sm={4} md={4} className={`${classes.flexLines} ${classes.verticalLines}`}>
              <Stepper activeStep={activeStep} orientation="vertical" >
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Grid>
            <Grid item sm={8} md={8} >
                <Box className={`${classes.registrationRightContainer}`}>
                  {activeStep === steps.length ? (
                    <div className={`${classes.flexLines}`}>
                        <Button onClick={handleComplete}>Completed</Button>
                        <Button onClick={handleReset}>Close</Button>
                    </div>
                  ) : (
                    <div className={`${classes.registrationForms}`}>
                        <h2>
                {Strings.REGISTRATION.WELCOME }
            </h2>
            <span>
               {getStepTitle(activeStep)}
            </span>
                      {getStepContent(activeStep, compiledForm)}
                      <div>
                      {activeStep !== 0 && <Button onClick={handleBack}> Back</Button>}
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    </div>
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

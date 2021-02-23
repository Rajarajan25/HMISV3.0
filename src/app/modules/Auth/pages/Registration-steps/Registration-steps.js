
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import BusinessConfirmation from './business-confirmation';
import Stepper1 from './stepper/stepper1';
import Stepper2 from './stepper/stepper2';
import Stepper3 from './stepper/stepper3';
import Stepper4 from './stepper/stepper4';
import Stepper5 from './stepper/stepper5';
import {  useMutation,useQuery, useLazyQuery } from "@apollo/client";
import { ADD_USER,GET_USER} from "../query/graphql";
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [<Stepper1 />, <Stepper2 />, <Stepper3 />, <Stepper4 />, <Stepper5 /> ];
}





export default function HorizontalLabelPositionBelowStepper() {
  
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  let backFlag="N"
  
  function handleNext() {
    
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    localStorage.setItem("BackFlag","Y")
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }
  React.useEffect(() => {
    localStorage.setItem("BackFlag","N")
  }, []);
function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Step1 activeStep={activeStep}  handleBack={handleBack} handleNext={handleNext} steps={getSteps}/>;
    case 1:
      return <Step2 activeStep={activeStep}  handleBack={handleBack} handleNext={handleNext} steps={getSteps}/>;
    case 2:
      return <Step3 activeStep={activeStep}  handleBack={handleBack} handleNext={handleNext} steps={getSteps}/>;
    case 3:
      return <Step4 activeStep={activeStep}  handleBack={handleBack} handleNext={handleNext} steps={getSteps}/>;
    case 4:
      return <BusinessConfirmation />;
    default:
      return 'Uknown stepIndex';
  }
}
  return (
    <div className={classes.root}>
      <Stepper className="businessSteps rounded" activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className="d-flex">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={'backbtn'+' '+classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" 
              className={"nextButton ml-auto d-none"} 
              color="primary" 
              onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

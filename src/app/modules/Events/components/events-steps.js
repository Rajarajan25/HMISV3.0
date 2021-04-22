
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EventStep1 from './events-step1';
import EventStep2 from './events-step2';
import EventStep3 from './events-step3';
import EventStep4 from './events-step4';
import EventStep5 from './events-step5';
import EventStep6 from './events-step6';
import EventStepper1 from './stepper/event-stepper1';
import EventStepper2 from './stepper/event-stepper2';
import EventStepper3 from './stepper/event-stepper3';
import EventStepper4 from './stepper/event-stepper4';
import EventStepper5 from './stepper/event-stepper5';
import EventStepper6 from './stepper/event-stepper6';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [<EventStepper1 />, <EventStepper2 />, <EventStepper3 />, <EventStepper4 />, <EventStepper5 />, <EventStepper6 />];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <EventStep1 />;
    case 1:
      return <EventStep2 />;
    case 2:
      return <EventStep3 />;
    case 3:
      return <EventStep4 />;
    case 4:
      return <EventStep5 />;
    case 5:
      return <EventStep6 />;
    default:
      return 'Unknown step';
  }
}

export function EventSteps() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  const connector = (
    <StepConnector
      classes={{
        active: classes.connectorActive,
        completed: classes.connectorCompleted,
        disabled: classes.connectorDisabled,
        line: classes.connectorLine,
      }}
    />
  );

  return (
    <div className={classes.root}>
      <div className="d-flex">
        <div className="stepper-circle col-3">
          <Stepper activeStep={activeStep} connector={connector}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="stepper-box col-9">
          {activeStep === steps.length ? (
            <div>
              <div className="stepper-content">
                <Typography className={classes.instructions}>
                  All steps completed - you&apos;re finished
                </Typography>
              </div>
              <div className="stepper-btn">
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="stepper-content">
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              </div>
              <div className="stepper-btn">
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
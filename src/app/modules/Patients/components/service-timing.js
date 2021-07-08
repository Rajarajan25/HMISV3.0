import 'date-fns';
import React from "react";
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {TimePickersUtil} from '../../../components/DateAndTimePicker'
import { Formik } from 'formik';
import { ButtonLoading } from '../../../components/ButtonLoading';
import Timings from '../../../components/Timings'
import { DevConsoleLog } from '../../../SiteUtill';
import PropTypes from 'prop-types';


export function ServiceTiming(props) {
  const { data, handleSave ,isloading } = props
  const { timings } = data;
  const initValue = {
    // duration:duration,
    timings: timings,
    // payments: payments,
  }
  return (
    <Formik
      initialValues={initValue}
      enableReinitialize
      onSubmit={(values) => {
        DevConsoleLog("values", JSON.stringify(values));
        handleSave(values);
      }}>
      {({
        handleSubmit, setFieldValue, values
      }) => (

        <form onSubmit={handleSubmit}>
    <div className="staff_first staff_second w-100 p-6">
     <Timings formikValues={values} setFieldValue={setFieldValue}/>
              <ButtonLoading label="Save" loading={isloading}/>
    </div>
    </form>
     )}
     </Formik>
  );
}



export function SwitchLabels() {

  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
      />
    </FormGroup>
  );
}

export function TimePickers() {
  return (
    <Grid container justify="space-around">
      <TimePickersUtil
      />
    </Grid>
  );
}

ServiceTiming.propTypes={
  data:PropTypes.object.isRequired,
  handleSave:PropTypes.func.isRequired,
  isloading:PropTypes.bool.isRequired
}
import 'date-fns';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import { RadioGroup } from 'formik-material-ui';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from 'react-select';
import { Dropdown } from "react-bootstrap";
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import Timings from './Timings'
import TimezoneSelect from 'react-timezone-select'
import { Price } from './Price'
import { Formik, Field } from 'formik';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },

}));



const durationtime = [
  { value: '5mins', label: '5 Mins' },
  { value: '10mins', label: '10 Mins' },
  { value: '15mins', label: '15 Mins' },
  { value: '20mins', label: '20 Mins' },
  { value: '25mins', label: '25 Mins' },
  { value: '30mins', label: '30 Mins' },
  { value: '35mins', label: '35 Mins' },
  { value: '40mins', label: '40 Mins' },
  { value: '45mins', label: '45 Mins' },
  { value: '50mins', label: '50 Mins' },
  { value: '55mins', label: '55 Mins' },
  { value: '1hour', label: '1 Hour' }
]

const buffertime = [
  { value: '5mins', label: '5 Mins' },
  { value: '10mins', label: '10 Mins' },
  { value: '15mins', label: '15 Mins' },
  { value: '20mins', label: '20 Mins' }
]

export function Duration(props) {
  const classes = useStyles();
  const { current, handleSave } = props
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [values, setValues] = React.useState('business');

  function handleTimingChanges(event) {
    setValues(event.target.value);
  }
  const [preloading, setPreLoading] = useState(false);
  const [durationTime, setdurationtime] = React.useState(durationtime[0]);
  const [buffer, setBuffer] = React.useState(buffertime[0]);
  const [bufferafter, setBufferafter] = React.useState(buffertime[0]);
  const [selectedTimezone, setSelectedTimezone] = useState({
    value: timeZone,
    label: timeZone
  });
  if (current && !preloading) {
    let selectedduration = durationtime.find(dur => dur.value === current.duration.duration_minutes);
    setdurationtime(selectedduration)
    setPreLoading(!preloading);
    let selectedbuffer = buffertime.find(dur => dur.value === current.duration.buffer_before_min);
    setBuffer(selectedbuffer)
    let selectedafterbuffer = buffertime.find(dur => dur.value === current.duration.buffer_after_min);
    setBufferafter(selectedafterbuffer)

  }

  return (
    <Formik
      initialValues={current.duration}
      enableReinitialize
      onSubmit={(values) => {
        values.duration_minutes = durationTime.value
        values.buffer_before_min = buffer.value
        values.buffer_after_min = bufferafter.value
        current.duration=values
        handleSave(current);
      }}
    >
      {({
        handleSubmit,
      }) => (

        <form onSubmit={handleSubmit}>
          <div className="clearfix">
            <div className="staff_first staff_second w-100">
              <div className="form-group">
                <div className="row">
                  <div className="col-12">
                    <label className="form-label d-block">Time Zone</label>
                    <div className="re_select">
                      <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                      />                            </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-4">
                    <label className="form-label d-block">Duration</label>
                    <div className="re_select">
                      <Select value={durationTime}
                        options={durationtime} onChange={setdurationtime} />
                    </div>
                  </div>
                  <div className="col-4">
                    <label className="form-label d-block">Buffer Time Before</label>
                    <div className="re_select">
                      <Select
                        value={buffer}
                        options={buffertime} onChange={setBuffer}
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <label className="form-label d-block">Buffer Time After</label>
                    <div className="re_select">
                      <Select
                        value={bufferafter}
                        options={buffertime} onChange={setBufferafter}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label d-block mr-5 mb-2">Date Range</label>
                <div className="d-flex mb-2">
                  <div className="busi_cus ser_tme clearfix">
                    <div className={classes.root}>
                      <Field component={RadioGroup} name="date_range">
                          <FormControlLabel value="range"  control={<Radio />}label="Range"/> 
                          <FormControlLabel value="infinity"  control={<Radio />}label="Infinity"/>
                          <FormControlLabel value="default"  control={<Radio />}label="Default"/>
                        </Field>
                      

                    </div>
                    
                  </div>
                </div>

                <input placeholder="Date Range" type="text" className="form-control" name="" />
              </div>
              <Price />
              
            <Timings current={current}/>

              <div className="form-group mb-0">
                <div className="d-flex justify-content-end patientButton pos_fix">
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

function DateRange() {

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    group: {
      margin: theme.spacing(1, 0),
    },
  }));

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <Field component={RadioGroup}
          name="date_range"
          className={classes.group}
        >
          <FormControlLabel value="range" control={<Radio />} label="Range" />
          <FormControlLabel value="infinity" control={<Radio />} label="Infinity" />
          <FormControlLabel value="default" control={<Radio />} label="Default" />
        </Field>
      </FormControl>

    </div>
  );
}

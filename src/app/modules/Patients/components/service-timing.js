import 'date-fns';
import React , { useState } from "react";
import Select from 'react-select';
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {TimePickersUtil} from '../../../components/DateAndTimePicker'
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const pricetype = [
  { value: 'free', label: 'Free' },
  { value: 'fixed', label: 'Fixed' }
]
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
const availability = [
  { value: 'chat', label: 'Chat' },
  { value: 'call', label: 'Call' },
  { value: 'video', label: 'Video' },
  { value: 'inperson', label: 'In Person' }
]

export function ServiceTiming() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_second w-100 p-6">
      <div className="busi_cus ser_tme mt-3 mb-5 clearfix">
        <SelectHours />
      </div>
      <div className="text-left  mt-3 pb-2 session_start border-bottom">
        <div className="session_part row mb-3">
          <div className="col-4 pr-2 min_width100">
            <div className="session_select">
              <label className="label-cont min_wid">Sunday</label>
            </div>
          </div>
          <div className="col-5 p-0 d-flex">
            <div className="tm_area text-left pl-0 my-auto">
              <span className="day_off">Week Off</span>
            </div>
          </div>
        </div>
        <div className="session_part row mb-3">
          <div className="col-4 pr-2 min_width100">
            <div className="session_select">
              <label className="label-cont min_wid">Monday</label>
            </div>
          </div>
          <div className="col-5 p-0 d-flex">
            <div className="tm_area text-left pl-0">
              <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
            </div>
          </div>
        </div>
        <div className="session_part row mb-3">
          <div className="col-4 pr-2 min_width100">
            <div className="session_select">
              <label className="label-cont min_wid">Tuesday</label>
            </div>
          </div>
          <div className="col-5 p-0 d-flex">
            <div className="tm_area text-left pl-0">
              <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
            </div>
          </div>
        </div>
        <div className="session_part row mb-3">
          <div className="col-4 pr-2 min_width100">
            <div className="session_select">
              <label className="label-cont min_wid">Wednesday</label>
            </div>
          </div>
          <div className="col-5 p-0 d-flex">
            <div className="tm_area text-left pl-0">
              <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
            </div>
          </div>
        </div>
        <div className="session_part row mb-3">
          <div className="col-4 pr-2 min_width100">
            <div className="session_select">
              <label className="label-cont min_wid">Thursday</label>
            </div>
          </div>
          <div className="col-5 p-0 d-flex">
            <div className="tm_area text-left pl-0">
              <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
            </div>
          </div>
        </div>
        <div className="session_part row mb-3">
          <div className="col-4 pr-2 min_width100">
            <div className="session_select">
              <label className="label-cont min_wid">Friday</label>
            </div>
          </div>
          <div className="col-5 p-0 d-flex">
            <div className="tm_area text-left pl-0">
              <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
            </div>
          </div>
        </div>
        <div className="session_part row mb-3">
          <div className="col-4 pr-2 min_width100">
            <div className="session_select">
              <label className="label-cont min_wid">Saturday</label>
            </div>
          </div>
          <div className="col-5 p-0 d-flex">
            <div className="tm_area text-left pl-0 my-auto">
              <span className="day_off">Week Off</span>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <Link to="#" className="ml-auto add_setting">Modify</Link>
        </div>
      </div>
      <div className="form-group mb-0">
        <div className="d-flex justify-content-end patientButton pos_fix">
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
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



function SelectHours() {

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
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          name="business"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="business" control={<Radio />} label="Business hours" />
          <FormControlLabel value="custom" control={<Radio />} label="Custom" />
        </RadioGroup>
      </FormControl>
      
    </div>
  );
}
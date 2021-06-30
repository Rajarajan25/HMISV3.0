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
const addons = [
  { value: 'gynaecology', label: 'Gynaecology' },
  { value: 'sexology', label: 'Sexology' },
  { value: 'psychiatry', label: 'Psychiatry' },
  { value: 'pediatrics', label: 'Pediatrics' }
]

export function ServiceCost() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_second w-100 p-6">
      <div className="form-group">
        <div className="d-flex row">
          <div className="col-4">
            <label class="form-label d-block">Duration</label>
            <div className="re_select">
              <Select options={durationtime} />
            </div>
          </div>
          <div className="col-4">
            <label class="form-label d-block">Buffer Time Before</label>
            <div className="re_select">
              <Select options={buffertime} />
            </div>
          </div>
          <div className="col-4">
            <label class="form-label d-block">Buffer Time After</label>
            <div className="re_select">
              <Select options={buffertime} />
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="d-block staff_title_text mt-2 mr-auto">Cost</label>
      </div>
      <div className="form-group">
        <div className="d-flex row">
          <div className="col-4">
            <label class="form-label d-block">Price Type</label>
            <div className="re_select">
              <Select options={pricetype} />
            </div>
          </div>
          <div className="col-4">
            <label class="form-label d-block">Price (&#2352;)</label>
            <input placeholder="500" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-4">
            <label class="form-label d-block">Special Price (&#2352;)</label>
            <input placeholder="500" type="text" className={`form-control`} name=""/>
          </div>
          
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex justify-content-end">
          <Link to="#">
            <img src={toAbsoluteUrl("/media/patients/add-advanced.svg")} alt="" className="" />
            <span className="color_6B58B6 pl-2 font-weight-500">Advanced Pricing</span>
          </Link>
        </div>
      </div>
      <div className="form-group border-bottom">
        <div className="d-flex">
          <label class="staff_title_text">Advanced Pricing Option <span className="font-weight-normal">(Optional)</span></label>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex row">
          <div className="col-4">
            <label class="form-label d-block">Provider/Staff Name</label>
            <input placeholder="Gopinath" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-3">
            <label class="form-label d-block">Duration</label>
            <div className="re_select">
              <Select options={durationtime} />
            </div>
          </div>
          <div className="col-3">
            <label class="form-label d-block">Price Type</label>
            <div className="re_select">
              <Select options={pricetype} />
            </div>
          </div>
          <div className="col-2">
            <label class="form-label d-block">Price (&#2352;)</label>
            <input placeholder="500" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex justify-content-end">
          <Link to="#">
            <img src={toAbsoluteUrl("/media/patients/add-advanced.svg")} alt="" className="" />
            <span className="color_6B58B6 pl-2 font-weight-500">Add</span>
          </Link>
        </div>
      </div>

      <div className="form-group">
        <div className="d-flex row">
          <div className="col-4">
            <label class="form-label d-block">Add On</label>
            <div className="re_select">
              <Select options={addons} />
            </div>
          </div>
        </div>
        <div className="add-ons">
          <div className="clearfix">
            <div className="row mb-3">
              <div className="col-xl-4">
                <label class="staff_title_text">Name</label>
              </div>
              <div className="col-xl-3">
                <label class="staff_title_text">Price</label>
              </div>
              <div className="col-xl-5"></div>
            </div>
            <div className="row mb-2">
              <div className="col-xl-4">
                <label class="form-label d-block">Pediatrics</label>
              </div>
              <div className="col-xl-3">
                <label class="form-label d-block">100</label>
              </div>
              <div className="col-xl-5">
                <span className=""><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
              </div>
            </div>
          </div>
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
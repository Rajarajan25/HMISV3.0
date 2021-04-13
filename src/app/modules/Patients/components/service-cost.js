import 'date-fns';
import React , { useState } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Chat',
  'Call',
  'Video',
  'In-Person',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export function ServiceCost() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_second w-100 p-6">
      <div className="form-group border-bottom">
        <div className="d-flex mb-3 align-items-center">
          <span className="staff_title_img bg_D5EEE2"><img src={toAbsoluteUrl("/media/patients/price_icon.svg")} alt="" className="" /></span>
          <label class="staff_title_text color_57AA7F m-0">Pricing and Duration</label>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex row">
          <div className="col-4">
            <label class="form-label d-block">Duration</label>
            <input placeholder="1 Hour 30 Mins" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-4">
            <label class="form-label d-block">Price Type</label>
            <input placeholder="Price Type" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-4">
            <label class="form-label d-block">Price (&#2352;)</label>
            <input placeholder="500" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex justify-content-end">
          <Link to="#">
            <img src={toAbsoluteUrl("/media/patients/add-advanced.svg")} alt="" className="" />
            <span className="color_6B58B6 pl-2 font-weight-500">Advanced</span>
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
          <div className="col-4">
            <label class="form-label d-block">Duration</label>
            <input placeholder="1 Hour 30 Mins" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-4">
            <label class="form-label d-block">Price (&#2352;)</label>
            <input placeholder="500" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group border-bottom">
        <div className="d-flex mb-3 align-items-center">
          <span className="staff_title_img bg_EBE9FB"><img src={toAbsoluteUrl("/media/patients/buffer_icon.svg")} alt="" className="" /></span>
          <label class="staff_title_text color_6B58B6 m-0">Buffer Time</label>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex row">
          <div className="col-6">
            <label class="form-label d-block">Buffer Time Before</label>
            <input placeholder="15 Mins" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-6">
            <label class="form-label d-block">Buffer Time After</label>
            <input placeholder="30 Mins" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group border-bottom">
        <div className="d-flex mb-3 align-items-center">
          <span className="staff_title_img bg_D3EDF2"><img src={toAbsoluteUrl("/media/patients/24-hours_icon.svg")} alt="" className="" /></span>
          <label class="staff_title_text color_20AEC2 m-0">Service Timing</label>
        </div>
      </div>
      <div className="busi_cus ser_tme mt-3 mb-5 clearfix">
        <SelectHours />
      </div>
      <div className="text-left  mt-3 pb-2 session_start border-bottom">
        <div className="session_part row mb-3">
          <div className="col-3 pr-2 min_width100">
            <div className="session_select">
              <label>Sunday</label>
            </div>
          </div>
          <div className="col-4 p-0 d-flex">
            <div className="tm_area text-left pl-0">
              <span className="day_off">Week Off</span>
            </div>
          </div>
        </div>
        <div className="session_part row mb-3">
          <div className="col-3 pr-2 min_width100">
            <div className="session_select">
              <label>Monday</label>
            </div>
          </div>
          <div className="col-4 p-0 d-flex">
            <div className="tm_area text-left pl-0">
              <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
            </div>
          </div>
        </div>
        <div className="session_part row mb-3">
          <div className="col-3 pr-2 min_width100">
            <div className="session_select">
              <label>Tuesday</label>
            </div>
          </div>
          <div className="col-4 p-0 d-flex">
            <div className="tm_area text-left pl-0">
              <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
            </div>
          </div>
        </div>
        <div className="session_part row mb-3">
          <div className="col-3 pr-2 min_width100">
            <div className="session_select">
              <label>Wednesday</label>
            </div>
          </div>
          <div className="col-4 p-0 d-flex">
            <div className="tm_area text-left pl-0">
              <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
            </div>
          </div>
        </div>
        <div className="session_part row mb-3">
          <div className="col-3 pr-2 min_width100">
            <div className="session_select">
              <label>Thursday</label>
            </div>
          </div>
          <div className="col-4 p-0 d-flex">
            <div className="tm_area text-left pl-0">
              <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
            </div>
          </div>
        </div>
        <div className="session_part row mb-3">
          <div className="col-3 pr-2 min_width100">
            <div className="session_select">
              <label>Friday</label>
            </div>
          </div>
          <div className="col-4 p-0 d-flex">
            <div className="tm_area text-left pl-0">
              <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
            </div>
          </div>
        </div>
        <div className="session_part row mb-3">
          <div className="col-3 pr-2 min_width100">
            <div className="session_select">
              <label>Saturday</label>
            </div>
          </div>
          <div className="col-4 p-0 d-flex">
            <div className="tm_area text-left pl-0">
              <span className="day_off">Week Off</span>
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



export function TimePickers() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const [isOpen, setIsOpen] = useState(false);
  
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justify="space-around">
      <KeyboardTimePicker
        variant="inline"
        margin="normal"
        id="time-picker-inline"
        value={selectedDate}
        autoOk={true}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          onFocus: e => {
            setIsOpen(true);
          }
        }}
        PopoverProps={{
          disableRestoreFocus: true,
          onClose: () => {
            setIsOpen(false);
          }
        }}
        InputProps={{
          disableRestoreFocus: true,
          onFocus: () => {
            setIsOpen(true);
          }
        }}
        open={isOpen}
      />
    </Grid>
  </MuiPickersUtilsProvider>
  );
}


export function LocationSelect() {
  
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
      <FormControl className={classes.formControl}>
        
        <Select
          value={values.age}
          onChange={handleChange}
          input={<Input name="age" id="age-label-placeholder" />}
          displayEmpty
          name="age"
          className={classes.selectEmpty}
        >
          <MenuItem value="">
          Adayar
          </MenuItem>
          <MenuItem value={10}>Thiruvanmiur</MenuItem>
          <MenuItem value={20}>Perungudi</MenuItem>
          <MenuItem value={30}>OMR</MenuItem>
        </Select>
      </FormControl>
  );
}


export function AvailMultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  function handleChange(event) {
    setPersonName(event.target.value);
  }

  function handleChangeMultiple(event) {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  }

  return (
    <div className={classes.root + " " + "col_sel"}>
      <FormControl className={classes.formControl}>
        <Select
          multiple
          className={"mr_top"}
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip  + " " + value} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
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
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

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


export function StaffTiming() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_second w-100">
      <div className="border-bottom day_select p-6">
        <div className="d-flex">
          <label className="staff_title_text">Working Days</label>
          <Link to="#" className="ml-auto add_setting pr-8">+ Additional Settings</Link>
        </div>
        <div className="d-flex mt-3">
          <div className="day_input">
            <input type="checkbox" id="day_select01" name="" className="" />
            <label className="date_bx sun_d" for="day_select01">S</label>
          </div>
          <div className="day_input">
            <input type="checkbox" id="day_select02" name="" className="" />
            <label className="date_bx mon_d" for="day_select02">M</label>
          </div>
          <div className="day_input">
            <input type="checkbox" id="day_select03" name="" className="" />
            <label className="date_bx tue_d" for="day_select03">T</label>
          </div>
          <div className="day_input">
            <input type="checkbox" id="day_select04" name="" className="" />
            <label className="date_bx wed_d" for="day_select04">W</label>
          </div>
          <div className="day_input">
            <input type="checkbox" id="day_select05" name="" className="" />
            <label className="date_bx thu_d" for="day_select05">T</label>
          </div>
          <div className="day_input">
            <input type="checkbox" id="day_select06" name="" className="" />
            <label className="date_bx fri_d" for="day_select06">F</label>
          </div>
          <div className="day_input">
            <input type="checkbox" id="day_select07" name="" className="" />
            <label className="date_bx sat_d" for="day_select07">S</label>
          </div>
        </div>
      </div>
      <div className="border-bottom p-6">
        <div className="row locate_avail">
          <div className="col-6">
              <label className="d-block color_C0C0C0">Choose your location</label>
              <LocationSelect />
            </div>
            <div className="col-6">
              <label className="d-block color_C0C0C0">Availability</label>
              <AvailMultipleSelect />
            </div>
        </div>
        <div className="text-left  mt-3 pb-2 session_start border-bottom ">
          <div className="session_part row mb-2">
            <div className="col-3 pr-2 min_width100">
              <div className="session_select">
                <input type="checkbox" id="session_01" name="" className="" />
                <label className="" for="session_01">Session 1</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-center align-items-center">
              <span className="add_session">+ Add Session</span>
              <span className="add_line">|</span>
              <span className="add_break">+ Add Break</span>
            </div>
          </div>
          <div className="break_part row mb-2">
            <div className="col-3 pr-3">
              <div className="break_select position-relative">
                <img src={toAbsoluteUrl("/media/patients/break_line.svg")} alt="" className="break_line" />
                <input type="checkbox" id="break_01" name="" className="" />
                <label className="" for="break_01">Break</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group d-flex mt-5">
            <div className="d-flex">
              <input type="checkbox" id="formHorizontalCheck" className="mt-1" />
              <label title="" for="formHorizontalCheck" className="form-check-label ml-2 mr-lg-5 mr-md-5 mr-3 font-size-12">Apply to this week</label>
            </div>
            <div className="d-flex">
              <input type="checkbox" id="formHorizontalCheck1" className="mt-1" />
              <label title="" for="formHorizontalCheck1" className="form-check-label ml-2 font-size-12">Apply to this month</label>
            </div>
        </div>
        <div className="form-group mt-6 mb-0">
          <div className="d-flex justify-content-end patientButton">
            <button type="button" className="btn btn-primary">Add Time</button>
          </div>
        </div>
      </div>
      <div className="border-bottom p-6">
        <div className="border-bottom d-flex">
          <label className="staff_title_text">Timing Schedule 1 :</label>
        </div>
        <div className="text-left">
          <div className="row mt-3">
            <div className="col-2">
            </div>
            <div className="col d-flex">
              <div className="tm_area text-left flex-fill">
                <label className="color_C0C0C0">Session 1</label>
              </div>
              <div className="tm_area text-left flex-fill">
                <label className="color_C0C0C0">Session 2</label>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2">
              <div className="d-inline-flex">
                <label className="staff_title_text">Mon</label>
                <div className=""><SwitchLabels /></div>
              </div>
            </div>
            <div className="col d-flex">
              <div className="tm_area text-left border-right flex-fill">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
              <div className="tm_area text-left border-right flex-fill">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
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


export function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          variant="inline"
          margin="normal"
          id="time-picker-inline"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}


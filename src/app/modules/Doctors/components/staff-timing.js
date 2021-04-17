import 'date-fns';
import React , { useState } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker } from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import Select from 'react-select';
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


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const locationselect = [
  { value: 'adayar', label: 'Adayar' },
  { value: 'tambaram', label: 'Tambaram' }
]
const availability = [
  { value: 'chat', label: 'Chat' },
  { value: 'call', label: 'Call' },
  { value: 'video', label: 'Video' },
  { value: 'inperson', label: 'In Person' }
]


export function StaffTiming() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_second w-100">
      <div className="border-bottom p-6">
        <div className="busi_cus mt-3 mb-8 clearfix">
          <SelectHours />
        </div>
        <div className="row locate_avail">
          <div className="col-5">
              <label className="form-label d-block">Choose your location</label>
              <div className="re_select">
                <Select options={locationselect} />
              </div>
            </div>
            <div className="col-7">
              <label className="form-label d-block">Availability</label>
              <div className="re_select multis">
                <Select isMulti options={availability} />
              </div>
            </div>
        </div>
        <div className="day_select py-6">
          <div className="d-flex">
            <label className="staff_title_text">Working Days</label>
            <Link to="#" className="ml-auto add_setting">+ Additional Settings</Link>
          </div>
          <div className="d-flex mt-3">
            <div className="day_input">
              <input type="checkbox" id="day_select01" name="" className="" />
              <label className="date_bx sun_d" for="day_select01">Sun</label>
            </div>
            <div className="day_input">
              <input type="checkbox" id="day_select02" name="" className="" />
              <label className="date_bx mon_d" for="day_select02">Mon</label>
            </div>
            <div className="day_input">
              <input type="checkbox" id="day_select03" name="" className="" />
              <label className="date_bx tue_d" for="day_select03">Tue</label>
            </div>
            <div className="day_input">
              <input type="checkbox" id="day_select04" name="" className="" />
              <label className="date_bx wed_d" for="day_select04">Wed</label>
            </div>
            <div className="day_input">
              <input type="checkbox" id="day_select05" name="" className="" />
              <label className="date_bx thu_d" for="day_select05">Thu</label>
            </div>
            <div className="day_input">
              <input type="checkbox" id="day_select06" name="" className="" />
              <label className="date_bx fri_d" for="day_select06">Fri</label>
            </div>
            <div className="day_input">
              <input type="checkbox" id="day_select07" name="" className="" />
              <label className="date_bx sat_d" for="day_select07">Sat</label>
            </div>
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
              <span className="add_session pointer">+ Add Session</span>
              <span className="add_line">|</span>
              <span className="add_break pointer">+ Add Break</span>
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
        <div className="text-left  mt-3 pb-2 session_start border-bottom ">
          <div className="session_part row mb-2">
            <div className="col-3 pr-2 min_width100">
              <div className="session_select">
                <input type="checkbox" id="session_01" name="" className="" />
                <label className="" for="session_01">Session 2</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-center align-items-center">
              <span className="add_session pointer">+ Add Session</span>
              <span className="add_line">|</span>
              <span className="add_break pointer">+ Add Break</span>
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

        <div className="form-group mt-6 mb-0">
          <div className="d-flex justify-content-end patientButton add_timing">
            <button type="button" className="btn btn-primary m-0">+ Add Timings</button>
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

export function TimeExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            <label className="staff_title_text">Timing Schedule 1 :</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <div className="text-left">
            <div className="row mt-3">
              <div className="col-2">
              </div>
              <div className="col d-flex">
                <div className="tm_area text-left flex-fill">
                  <label className="form-label d-block">Session 1</label>
                </div>
                <div className="tm_area text-left flex-fill">
                  <label className="form-label d-block">Session 2</label>
                </div>
              </div>
            </div>
            <SelectWeekTime />
          </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            <label className="staff_title_text">Timing Schedule 2 :</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="text-left">
              <div className="row mt-3">
                <div className="col-2">
                </div>
                <div className="col d-flex">
                  <div className="tm_area text-left flex-fill">
                    <label className="form-label d-block">Session 1</label>
                  </div>
                  <div className="tm_area text-left flex-fill">
                    <label className="form-label d-block">Session 2</label>
                  </div>
                </div>
              </div>
              <SelectWeekTime />
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            <label className="staff_title_text">Timing Schedule 3 :</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="text-left">
              <div className="row mt-3">
                <div className="col-2">
                </div>
                <div className="col d-flex">
                  <div className="tm_area text-left flex-fill">
                    <label className="form-label d-block">Session 1</label>
                  </div>
                  <div className="tm_area text-left flex-fill">
                    <label className="form-label d-block">Session 2</label>
                  </div>
                </div>
              </div>
              <SelectWeekTime />
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
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

function SelectWeekTime() {

  return (
    <div className="clearfix">
      <div className="row mt-3">
        <div className="col-2">
          <div className="d-inline-flex">
            <label className="staff_title_text">Mon</label>
            <div className="switchlabel"><SwitchLabels /></div>
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
      <div className="row mt-3">
        <div className="col-2">
          <div className="d-inline-flex">
            <label className="staff_title_text">Tue</label>
            <div className="switchlabel"><SwitchLabels /></div>
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
      <div className="row mt-3">
        <div className="col-2">
          <div className="d-inline-flex">
            <label className="staff_title_text">Wed</label>
            <div className="switchlabel"><SwitchLabels /></div>
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
      <div className="row mt-3">
        <div className="col-2">
          <div className="d-inline-flex">
            <label className="staff_title_text">Thu</label>
            <div className="switchlabel"><SwitchLabels /></div>
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
      <div className="row mt-3">
        <div className="col-2">
          <div className="d-inline-flex">
            <label className="staff_title_text">Fri</label>
            <div className="switchlabel"><SwitchLabels /></div>
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
      <div className="row mt-3">
        <div className="col-2">
          <div className="d-inline-flex">
            <label className="staff_title_text day_off">Sat</label>
            <div className="switchlabel"><SwitchLabels /></div>
          </div>
        </div>
        <div className="col d-flex">
          <div className="tm_area text-left">
            <span className="day_off">Day Off</span>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-2">
          <div className="d-inline-flex">
            <label className="staff_title_text day_off">Sun</label>
            <div className="switchlabel"><SwitchLabels /></div>
          </div>
        </div>
        <div className="col d-flex">
          <div className="tm_area text-left">
            <span className="day_off">Day Off</span>
          </div>
        </div>
      </div>
    </div>
  );
}
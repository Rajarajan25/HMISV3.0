import 'date-fns';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { TimePickersUtil } from "../components/DateAndTimePicker"
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
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Field } from 'formik'
import Availability from './Availability'
import { Modal } from "react-bootstrap";
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
  root: {
    flexGrow: 1,
    width: '100%',
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

function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

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
const days = [
  { work_day_id: 1, short_name: "Sun", id: "day_select01", name: "Sunday", class_Name: "date_bx sun_d", start_time: "9:00 AM", end_time: "6:30 PM" },
  { work_day_id: 2, short_name: "Mon", id: "day_select02", name: "Monday", class_Name: "date_bx mon_d", start_time: "9:00 AM", end_time: "6:30 PM" },
  { work_day_id: 3, short_name: "Tue", id: "day_select03", name: "Tuesday", class_Name: "date_bx tue_d", start_time: "9:00 AM", end_time: "6:30 PM" },
  { work_day_id: 4, short_name: "Wed", id: "day_select04", name: "Wednesday", class_Name: "date_bx wed_d", start_time: "9:00 AM", end_time: "6:30 PM" },
  { work_day_id: 5, short_name: "Thu", id: "day_select05", name: "Thursday", class_Name: "date_bx thu_d", start_time: "9:00 AM", end_time: "6:30 PM" },
  { work_day_id: 6, short_name: "Fri", id: "day_select06", name: "Friday", class_Name: "date_bx fri_d", start_time: "9:00 AM", end_time: "6:30 PM" },
  { work_day_id: 7, short_name: "Sat", id: "day_select07", name: "Saturday", class_Name: "date_bx sat_d", start_time: "9:00 AM", end_time: "6:30 PM" },
];
const breakTime = [
  { id: 1, start_time: "10:30 AM", end_time: "11:00 AM" }
]
export default function CustomTiming(props) {
  const classes = useStyles();
  const [seletedDays, setSelectedDays] = useState([]);
  const [Break, setBreak] = React.useState(Break);
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  const { formikValues, setFieldValue } = props;

  const handleToggle = value => () => {
    const seletedItem = seletedDays.includes(value)
      ? seletedDays.filter(i => i !== value) // remove item
      : [...seletedDays, value]; // add item
    setSelectedDays(seletedItem);
  }
  return (
    <div >
      <div className="border-bottom p-6">
        <div className="day_select py-6">
          <div className="d-flex">
            <label className="staff_title_text">Working Days</label>
          </div>
          <div className="d-flex mt-3">
            <div className="day_input">
              <input type="checkbox" id="day_select01" name="" className="" />
              <label className="date_bx sun_d" htmlFor="day_select01">Sun</label>
            </div>
            <div className="day_input">
              <input type="checkbox" id="day_select02" name="" className="" />
              <label className="date_bx mon_d" htmlFor="day_select02">Mon</label>
            </div>
            <div className="day_input">
              <input type="checkbox" id="day_select03" name="" className="" />
              <label className="date_bx tue_d" htmlFor="day_select03">Tue</label>
            </div>
            <div className="day_input">
              <input type="checkbox" id="day_select04" name="" className="" />
              <label className="date_bx wed_d" htmlFor="day_select04">Wed</label>
            </div>
            <div className="day_input">
              <input type="checkbox" id="day_select05" name="" className="" />
              <label className="date_bx thu_d" htmlFor="day_select05">Thu</label>
            </div>
            <div className="day_input">
              <input type="checkbox" id="day_select06" name="" className="" />
              <label className="date_bx fri_d" htmlFor="day_select06">Fri</label>
            </div>
            <div className="day_input">
              <input type="checkbox" id="day_select07" name="" className="" />
              <label className="date_bx sat_d" htmlFor="day_select07">Sat</label>
            </div>
          </div>
        </div>
        <div className="text-left  mt-3 pb-2 session_start border-bottom ">
          <div className="session_part row mb-2">
            <div className="col-3 pr-2 min_width100">
              <div className="session_select">
                <input type="checkbox" id="session_01" name="" className="" />
                <label className="" htmlFor="session_01">Session 1</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
              <span className="add_session pointer">+ Add Session</span>
              <span className="add_line">|</span>
              <span className="add_break pointer">+ Add Break</span>
              <span className="add_line">|</span>
              <span className="remove_line"><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
            </div>
          </div>
          <div className="break_part row mb-2">
            <div className="col-3 pr-3">
              <div className="break_select position-relative">
                <img src={toAbsoluteUrl("/media/patients/break_line.svg")} alt="" className="break_line" />
                <input type="checkbox" id="break_01" name="" className="" />
                <label className="" htmlFor="break_01">Break</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
              <span className="remove_line"><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
            </div>
          </div>
          <div className="break_part row mb-2">
            <div className="col-3 pr-3">
              <div className="break_select position-relative">
                <img src={toAbsoluteUrl("/media/patients/break_line.svg")} alt="" className="break_line" />
                <input type="checkbox" id="break_02" name="" className="" />
                <label className="" htmlFor="break_02">Break</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
              <span className="remove_line"><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
            </div>
          </div>
        </div>
        <div className="text-left  mt-3 pb-2 session_start border-bottom ">
          <div className="session_part row mb-2">
            <div className="col-3 pr-2 min_width100">
              <div className="session_select">
                <input type="checkbox" id="session_02" name="" className="" />
                <label className="" htmlFor="session_02">Session 2</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
              <span className="add_session pointer">+ Add Session</span>
              <span className="add_line">|</span>
              <span className="add_break pointer">+ Add Break</span>
              <span className="add_line">|</span>
              <span className="remove_line"><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
            </div>
          </div>
          <div className="break_part row mb-2">
            <div className="col-3 pr-3">
              <div className="break_select position-relative">
                <img src={toAbsoluteUrl("/media/patients/break_line.svg")} alt="" className="break_line" />
                <input type="checkbox" id="break_03" name="" className="" />
                <label className="" htmlFor="break_03">Break</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
              <span className="remove_line"><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
            </div>
          </div>
          <div className="break_part row mb-2">
            <div className="col-3 pr-3">
              <div className="break_select position-relative">
                <img src={toAbsoluteUrl("/media/patients/break_line.svg")} alt="" className="break_line" />
                <input type="checkbox" id="break_04" name="" className="" />
                <label className="" htmlFor="break_04">Break</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
              <span className="remove_line"><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
            </div>
          </div>
        </div>
        <div className="form-group mt-6 mb-0">
          <MoreTiming {...props} />
        </div>
      </div>

    </div>
  )
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
      <TimePickersUtil />
    </Grid>
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




export function WorkingDay() {
  return (
    <div className="staff_first staff_second">
      <div className="event-tab">
        <div className="day_select pt-0 pb-5">
          <div className="d-flex">
            <label className="staff_title_text">Working Days</label>
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
            <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
              <span className="add_session pointer">+ Add Session</span>
              <span className="add_line">|</span>
              <span className="add_break pointer">+ Add Break</span>
              <span className="add_line">|</span>
              <span className="remove_line"><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
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
            <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
              <span className="remove_line"><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
            </div>
          </div>
          <div className="break_part row mb-2">
            <div className="col-3 pr-3">
              <div className="break_select position-relative">
                <img src={toAbsoluteUrl("/media/patients/break_line.svg")} alt="" className="break_line" />
                <input type="checkbox" id="break_02" name="" className="" />
                <label className="" for="break_02">Break</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
              <span className="remove_line"><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
            </div>
          </div>
        </div>
        <div className="text-left  mt-3 pb-2 session_start border-bottom ">
          <div className="session_part row mb-2">
            <div className="col-3 pr-2 min_width100">
              <div className="session_select">
                <input type="checkbox" id="session_02" name="" className="" />
                <label className="" for="session_02">Session 2</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
              <span className="add_session pointer">+ Add Session</span>
              <span className="add_line">|</span>
              <span className="add_break pointer">+ Add Break</span>
              <span className="add_line">|</span>
              <span className="remove_line"><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
            </div>
          </div>
          <div className="break_part row mb-2">
            <div className="col-3 pr-3">
              <div className="break_select position-relative">
                <img src={toAbsoluteUrl("/media/patients/break_line.svg")} alt="" className="break_line" />
                <input type="checkbox" id="break_03" name="" className="" />
                <label className="" for="break_03">Break</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
              <span className="remove_line"><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
            </div>
          </div>
          <div className="break_part row mb-2">
            <div className="col-3 pr-3">
              <div className="break_select position-relative">
                <img src={toAbsoluteUrl("/media/patients/break_line.svg")} alt="" className="break_line" />
                <input type="checkbox" id="break_04" name="" className="" />
                <label className="" for="break_04">Break</label>
              </div>
            </div>
            <div className="col-4 p-0 d-flex">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
              <span className="remove_line"><img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="d-block" /></span>
            </div>
          </div>
        </div>
        <div className="form-group mt-6 mb-0">
          <div className="d-flex justify-content-end patientButton add_timing" >
            <span type="button" className="btn btn-primary m-0">+ Add Timings</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export class MoreTiming extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  render() {
    return (
      <>

        <div className="d-flex justify-content-end patientButton add_timing" >
          <span type="button" className="btn btn-primary m-0" onClick={this.handleShow}>+ More Timings</span>
        </div>

        <Modal
          className="timemodal"
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <label class="staff_title_text m-0">More Timings</label>
          </Modal.Header>
          <Modal.Body>
            <div className="staff_first">
              <div className="event-tab">
                <Availability {...this.props} />
              </div>
            </div>
            <WorkingDay />
          </Modal.Body>
        </Modal>

      </>
    );
  }
}






import 'date-fns';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {TimePickersUtil} from '../../Components/DateAndTimePicker'
  import FormControl from '@material-ui/core/FormControl';
  import RadioGroup from '@material-ui/core/RadioGroup';
  import Radio from '@material-ui/core/Radio';
  import FormControlLabel from '@material-ui/core/FormControlLabel';
  import Select from 'react-select';
  import { Dropdown } from "react-bootstrap";
  import {DropdownItemToggler} from "../../../../_metronic/_partials/dropdowns";
  import TextField from "@material-ui/core/TextField";
  import { DateRangePicker, DateRangeDelimiter, LocalizationProvider } from "@material-ui/pickers";
  import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
  import { blue } from "@material-ui/core/colors";
  import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

  const defaultMaterialTheme = createMuiTheme({
    palette: {
      primary: blue,
    },
  });

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

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

const timezone = [
  { value: 'india', label: 'Tamil Nadu (GMT+5:30)' },
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

export function ContentEventTiming() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className="clearfix">
      <div className="staff_first staff_second w-100">
        <div className="form-group">
          <div className="row">
            <div className="col-12">
              <label className="form-label d-block">Time Zone</label>
              <div className="re_select">
                <Select options={timezone} /> 
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-4">
              <label className="form-label d-block">Duration</label>
              <div className="re_select">
                <Select options={durationtime} /> 
              </div>
            </div>
            <div className="col-4">
              <label className="form-label d-block">Buffer Time Before</label>
              <div className="re_select">
                <Select options={buffertime} />
              </div>
            </div>
            <div className="col-4">
              <label className="form-label d-block">Buffer Time After</label>
              <div className="re_select">
                <Select options={buffertime} />  
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label d-block mr-5 mb-2">Date Range</label>
          <div className="form-group">
            <div className="d-flex event-range">
              <div className="event-radio">
                <input type="radio" id="range_01" name="time-range" className=""/>
                <label className="eprice" for="range_01">
                  <span className="circle-border"></span>
                  <span className="chk_txt">Range</span>
                </label>
              </div>
              <div className="event-radio">
                <input type="radio" id="range_02" name="time-range" className=""/>
                <label className="eprice" for="range_02">
                  <span className="circle-border"></span>
                  <span className="chk_txt">Indefinitely</span>
                </label>
              </div>
              <div className="event-radio">
                <input type="radio" id="range_03" name="time-range" className=""/>
                <label className="eprice" for="range_03">
                  <span className="circle-border"></span>
                  <span className="chk_txt">Advance</span>
                </label>
              </div>
              <div className="event-radio">
                <input type="radio" id="range_04" name="time-range" className=""/>
                <label className="eprice" for="range_04">
                  <span className="circle-border"></span>
                  <span className="chk_txt">Time</span>
                </label>
              </div>
            </div>
          </div>

          <div className="daterangepicker">
            <DateRangePickersUtil />
          </div>
        </div>
        <div className="form-group mb-2">
          <label className="staff_title_text m-0">Timings</label>
        </div>
        <div className="busi_cus ser_tme mt-2 mb-4 clearfix">
          <SelectHours />
        </div>
        <div className={'timingavail'+' '+classes.root}>
          <label className="staff_title_text m-0">Availability</label>
          <div className="d-flex border-bottom">
            <div className="col p-0">
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label={<TabPerson />} />
                  <Tab label={<TabCall />} />
                  <Tab label={<TabVideo />} />
                </Tabs>
              </AppBar>
            </div>
          </div>
          <div className="p-0">
            {value === 0 && <TabContainer> <AvailPerson />  </TabContainer>}
            {value === 1 && <TabContainer> <AvailCall /> </TabContainer>}
            {value === 2 && <TabContainer> <AvailVideo /> </TabContainer>}
          </div>
        </div>
        <div className="day_select pt-0 pb-5">
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
    </div>
  );
}

export function TabPerson() {
  return (
    <div className="clearfix">
      <span className="staff_tab_title">Inperson</span>
    </div>
  );
}

export function TabCall() {
  return (
    <div className="clearfix">
      <span className="staff_tab_title">On Call</span>
    </div>
  );
}

export function TabVideo() {
  return (
    <div className="clearfix">
      <span className="staff_tab_title">Video Call</span>
    </div>
  );
}

export function AvailPerson() {
  return (
    <div className="clearfix my-4">
      <div className="d-flex">
        <div className="avail-person">
          <input type="radio" id="availperson_01" name="availperson" className="" />
          <label className="mb-0" for="availperson_01">My Business Address</label>
        </div>
        <div className="ml-auto">
          <Dropdown drop="down" alignCenter className="dropdown h-100">
            <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
              <Link to="#" className="add_setting">+ Add Address</Link>
            </Dropdown.Toggle>
            <Dropdown.Menu  className="dropdown-menu dropdown-md-menu p-0 mt-1 drop_nav status_hover" style={{
                  width: `250px`,
                }}>
              <ServicesDropdownMenu />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="row per_add">
        <div className="col-6">
          <input type="radio" name="person_addr" id="address_01" />
          <label className="person_addr" for="address_01">
            <h3>Address 1</h3>
            <p>B Wing Flat no 502,<br />
              PN Building, Adayar,<br />
              Chennai - 600096</p>
          </label>
        </div>
        <div className="col-6">
          <input type="radio" name="person_addr" id="address_02" />
          <label className="person_addr" for="address_02">
            <h3>Address 2</h3>
            <p>B Wing Flat no 502,<br />
              PN Building, Adayar,<br />
              Chennai - 600096</p>
          </label>
        </div>
      </div>
      <div className="clearfix">
        <div className="avail-person">
          <input type="radio" id="availperson_02" name="availperson" className="" />
          <label className="mb-0" for="availperson_02">Client Address At Booking</label>
        </div>
        <div className="form-group">
          <input placeholder="Address" type="text" className={`form-control`} name=""/>
        </div>
      </div>
    </div>
  );
}


export function AvailCall() {
  return (
    <div className="clearfix my-4">
      <div className="d-flex">
        <div className="avail-call">
          <input type="radio" id="availcall_01" name="availcall" className="" />
          <label className="mb-0" for="availcall_01">Client will call you</label>
        </div>
        <div className="avail-call">
          <input type="radio" id="availcall_02" name="availcall" className="" />
          <label className="mb-0" for="availcall_02">You will call the client</label>
        </div>
      </div>
    </div>
  );
}

export function AvailVideo() {
  return (
    <div className="clearfix avail_device my-4">
      <div className="row">
        <div className="col-4">
          <input type="radio" name="avail_video" id="video_01" />
          <label className="d-flex vid_bg" for="video_01">
            <img src={toAbsoluteUrl("/media/patients/zoom_icon.png")} alt="" className="" />
            <span>Zoom</span>
          </label>
        </div>
        <div className="col-4">
          <input type="radio" name="avail_video" id="video_02" />
          <label className="d-flex vid_bg" for="video_02">
            <img src={toAbsoluteUrl("/media/patients/webex_icon.png")} alt="" className="" />
            <span>Webex</span>
          </label>
        </div>
        <div className="col-4">
          <input type="radio" name="avail_video" id="video_03" />
          <label className="d-flex vid_bg" for="video_03">
            <img src={toAbsoluteUrl("/media/patients/skype_icon.png")} alt="" className="" />
            <span>Skype</span>
          </label>
        </div>
        <div className="col-4">
          <input type="radio" name="avail_video" id="video_04" />
          <label className="d-flex vid_bg" for="video_04">
            <img src={toAbsoluteUrl("/media/patients/goto_icon.png")} alt="" className="" />
            <span>Goto Meeting</span>
          </label>
        </div>
        <div className="col-4">
          <input type="radio" name="avail_video" id="video_05" />
          <label className="d-flex vid_bg" for="video_05">
            <img src={toAbsoluteUrl("/media/patients/webex1_icon.png")} alt="" className="" />
            <span>Webex</span>
          </label>
        </div>
        <div className="col-4">
          <input type="radio" name="avail_video" id="video_06" />
          <label className="d-flex vid_bg" for="video_06">
            <img src={toAbsoluteUrl("/media/patients/google-meet_icon.png")} alt="" className="" />
            <span>Google Meet</span>
          </label>
        </div>
      </div>
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

function DateRange1 () {

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
          <FormControlLabel value="range" control={<Radio />} label="Range" />
          <FormControlLabel value="indefinitely" control={<Radio />} label="Indefinitely" />
          <FormControlLabel value="advance" control={<Radio />} label="Advance" />
          <FormControlLabel value="time" control={<Radio />} label="Time" />
        </RadioGroup>
      </FormControl>
      
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
  <Grid container justify="space-around">
    <TimePickersUtil
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
);
}

export function ServicesDropdownMenu() {
  return <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
          <li className="navi-item p-5">
            <input type="text" placeholder="Door No, Street Name" className="form-control" />
            <input type="text" placeholder="City" className="form-control" />
            <input type="text" placeholder="State" className="form-control" />
            <input type="text" placeholder="Zipcode" className="form-control" />
            <button type="submit" className="btn btn-primary">Submit</button>
          </li>
      </ul>
      {/*end::Navigation*/}

  </>
}


export function DateRangePickersUtil() {
  const [selectedDateRange, handleDateRangeChange] = React.useState([null, null]);
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <DateRangePicker
          
          value={selectedDateRange}
          onChange={date => handleDateRangeChange(date)}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <DateRangeDelimiter> to </DateRangeDelimiter>
              <TextField {...endProps} />
            </>
          )}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
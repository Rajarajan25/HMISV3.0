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
import {TimePickersUtil,DateRangePickersUtil} from '../../../components/DateAndTimePicker'
  import FormControl from '@material-ui/core/FormControl';
  import RadioGroup from '@material-ui/core/RadioGroup';
  import Radio from '@material-ui/core/Radio';
  import FormControlLabel from '@material-ui/core/FormControlLabel';
  import Select from 'react-select';
  import { Dropdown } from "react-bootstrap";
  import {DropdownItemToggler} from "../../../../_metronic/_partials/dropdowns";
  import { Modal } from "react-bootstrap";

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

const dayselect = [
  { value: '1day', label: '1' },
  { value: '2day', label: '2' },
  { value: '3day', label: '3' },
  { value: '4day', label: '4' },
  { value: '5day', label: '5' },
  { value: '6day', label: '6' },
  { value: '7day', label: '7' },
  { value: '8day', label: '8' },
  { value: '9day', label: '9' },
  { value: '10day', label: '10' },
]

const week = [
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' }
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
          <div className="form-group mb-2">
            <div className="d-flex radio-header">
              <div className="radio-section">
                <input type="radio" id="range_01" name="time-range" className=""/>
                <label className="eprice" for="range_01">
                  <span className="circle-border"></span>
                  <span className="chk_txt">Range</span>
                </label>
              </div>
              <div className="radio-section">
                <input type="radio" id="range_02" name="time-range" className=""/>
                <label className="eprice" for="range_02">
                  <span className="circle-border"></span>
                  <span className="chk_txt">Indefinitely</span>
                </label>
              </div>
              <div className="radio-section">
                <input type="radio" id="range_03" name="time-range" className=""/>
                <label className="eprice" for="range_03">
                  <span className="circle-border"></span>
                  <span className="chk_txt">Advance</span>
                </label>
              </div>
              <div className="radio-section">
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
          <div className="advanceselect">
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                  <label className="form-label d-block">No</label>
                  <div className="re_select">
                    <Select options={dayselect} /> 
                  </div>
                </div>
                <div className="col-6">
                  <label className="form-label d-block">Week/Month/Year</label>
                  <div className="re_select">
                    <Select options={week} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeselect">
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                  <label className="form-label d-block">From Time</label>
                  <TimePickers />
                </div>
                <div className="col-6">
                  <label className="form-label d-block">To Time</label>
                  <TimePickers />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group mb-2">
          <label className="staff_title_text m-0">Timings</label>
        </div>
        <div className="clearfix mt-4 mb-2">
          <div className="d-flex radio-header">
            <div className="radio-section">
                <input type="radio" id="timings_01" name="timings" className="" />
                <label className="eprice" for="timings_01">
                    <span className="circle-border"></span>
                    <span className="chk_txt">Business Hours</span>
                </label>
            </div>
            <div className="radio-section">
                <input type="radio" id="timings_02" name="timings" className=""/>
                <label className="eprice" for="timings_02">
                    <span className="circle-border"></span>
                    <span className="chk_txt">Custom</span>
                </label>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <Availability />
        </div>
        <div className="clearfix">
          <WorkingDay />
        </div>
        <div className="form-group mt-6 mb-0">
          <MoreTiming />
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
    <div className="clearfix visit_bg">
      <span className="avails"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="" /></span>
      <span className="staff_tab_title">Inperson</span>
    </div>
  );
}

export function TabCall() {
  return (
    <div className="clearfix phone_bg">
      <span className="avails"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="" /></span>
      <span className="staff_tab_title">On Call</span>
    </div>
  );
}

export function TabVideo() {
  return (
    <div className="clearfix video_bg">
      <span className="avails"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="" /></span>
      <span className="staff_tab_title">Video Call</span>
    </div>
  );
}

export function TabChat() {
  return (
    <div className="clearfix chat_bg">
      <span className="avails"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span>
      <span className="staff_tab_title">Chat</span>
    </div>
  );
}

export function AvailPerson() {
  return (
    <div className="clearfix my-4">
      <div className="d-flex radio-header">
        <div className="radio-section">
            <input type="radio" id="availperson_01" name="availperson" className="" />
            <label className="eprice" for="availperson_01">
                <span className="circle-border"></span>
                <span className="chk_txt">My Business Address</span>
            </label>
        </div>
        <div className="radio-section">
            <input type="radio" id="availperson_02" name="availperson" className=""/>
            <label className="eprice" for="availperson_02">
                <span className="circle-border"></span>
                <span className="chk_txt">Client Address At Booking</span>
            </label>
        </div>
      </div>
    </div>
  );
}


export function AvailCall() {
  return (
    <div className="clearfix my-4">
      <div className="d-flex radio-header">
        <div className="radio-section">
            <input type="radio" id="availcall_01" name="availcall" className="" />
            <label className="eprice" for="availcall_01">
                <span className="circle-border"></span>
                <span className="chk_txt">Client will call you</span>
            </label>
        </div>
        <div className="radio-section">
            <input type="radio" id="availcall_02" name="availcall" className=""/>
            <label className="eprice" for="availcall_02">
                <span className="circle-border"></span>
                <span className="chk_txt">You will call the client</span>
            </label>
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

export function AvailChat() {
  return (
    <div className="clearfix avail_device my-4">
      <div className="row">
        <div className="col-4">
          <input type="radio" name="avail_chat" id="chat_01" />
          <label className="d-flex vid_bg" for="chat_01">
            <img src={toAbsoluteUrl("/media/patients/skype_icon.png")} alt="" className="" />
            <span>Skype</span>
          </label>
        </div>
      </div>
    </div>
  );
}


export function TimePickers() {

return (
  <Grid container justify="space-around">
    <TimePickersUtil/>
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


export function Availability() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className="staff_first">
      <div className="event-tab">
        <div className={'timingavail'+' '+classes.root}>
          <div className="d-flex border-bottom">
            <div className="col mx-100 pl-0 my-auto">
              <label className="staff_title_text m-0">Availability</label>
            </div>
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
                  <Tab label={<TabChat />} />
                </Tabs>
              </AppBar>
            </div>
          </div>
          <div className="p-0">
            {value === 0 && <TabContainer> <AvailPerson />  </TabContainer>}
            {value === 1 && <TabContainer> <AvailCall /> </TabContainer>}
            {value === 2 && <TabContainer> <AvailVideo /> </TabContainer>}
            {value === 3 && <TabContainer> <AvailChat /> </TabContainer>}
          </div>
        </div>
      </div>
    </div>
  );
  }

  export function WorkingDay() {
    return (
      <div className="staff_first staff_second event-working-time-count">
        <div className="event-tab">
          <div className="day_select pt-0 pb-9">
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
              <div className="col-2 pr-2 min_width100">
                <div className="session_select">
                  <div className="hm-checkbox">
                    <input type="checkbox" id="session_01" name="" className="" />
                    <label className="eprice" for="session_01">
                      <span className="chk_txt">Start Time</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-5 p-0 d-flex">
                <div className="tm_area text-left pl-0">
                  <span className="st_tm"><TimePickers /></span> <span className="se_to"> End Time</span> <span className="end_tm"><TimePickers /></span>
                </div>
              </div>
              <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
                <span className="add_session pointer">+ Add Session</span>
                <span className="add_line">|</span>
                <span className="add_break pointer">+ Add Break</span>
                <span className="add_line">|</span>
                <span className="remove_line"><img src={toAbsoluteUrl("/media/events/delete-pink.svg")} alt="" className="d-block" /></span>
              </div>
            </div>
            <div className="break_part row mb-2">
              <div className="col-2 pr-3">
                <div className="break_select position-relative">
                  <img src={toAbsoluteUrl("/media/patients/break_line.svg")} alt="" className="break_line" />
                  <div className="hm-checkbox">
                    <input type="checkbox" id="break_01" name="" className="" />
                    <label className="eprice" for="break_01">
                      <span className="circle-border"></span>
                      <span className="chk_txt">Break</span>
                    </label>
                  </div>

                </div>
              </div>
              <div className="col-5 p-0 d-flex">
                <div className="tm_area text-left pl-0">
                  <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
                </div>
              </div>
              <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
                <span className="remove_line"><img src={toAbsoluteUrl("/media/events/delete-pink.svg")} alt="" className="d-block" /></span>
              </div>
            </div>
            <div className="break_part row mb-2">
              <div className="col-2 pr-3">
                <div className="break_select position-relative">
                  <img src={toAbsoluteUrl("/media/patients/break_line.svg")} alt="" className="break_line" />
                  <div className="hm-checkbox">
                    <input type="checkbox" id="break_02" name="" className="" />
                    <label className="eprice" for="break_02">
                      <span className="circle-border"></span>
                      <span className="chk_txt">Break</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-5 p-0 d-flex">
                <div className="tm_area text-left pl-0">
                  <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
                </div>
              </div>
              <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
                <span className="remove_line"><img src={toAbsoluteUrl("/media/events/delete-pink.svg")} alt="" className="d-block" /></span>
              </div>
            </div>
          </div>
          <div className="text-left  mt-3 pb-2 session_start border-bottom ">
            <div className="session_part row mb-2">
              <div className="col-2 pr-2 min_width100">
                <div className="session_select">
                  <div className="hm-checkbox">
                    <input type="checkbox" id="session_02" name="" className="" />
                    <label className="eprice" for="session_02">                   
                      <span className="chk_txt">Start Time</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-5 p-0 d-flex">
                <div className="tm_area text-left pl-0">
                  <span className="st_tm"><TimePickers /></span> <span className="se_to">End Time</span> <span className="end_tm"><TimePickers /></span>
                </div>
              </div>
              <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
                <span className="add_session pointer">+ Add Session</span>
                <span className="add_line">|</span>
                <span className="add_break pointer">+ Add Break</span>
                <span className="add_line">|</span>
                <span className="remove_line"><img src={toAbsoluteUrl("/media/events/delete-pink.svg")} alt="" className="d-block" /></span>
              </div>
            </div>
            <div className="break_part row mb-2">
              <div className="col-2 pr-3">
                <div className="break_select position-relative">
                  <img src={toAbsoluteUrl("/media/patients/break_line.svg")} alt="" className="break_line" />
                  <div className="hm-checkbox">
                    <input type="checkbox" id="break_03" name="" className="" />
                    <label className="eprice" for="break_03">
                      <span className="circle-border"></span>
                      <span className="chk_txt">Break </span>
                    </label>
                  </div>                  
                </div>
              </div>
              <div className="col-5 p-0 d-flex">
                <div className="tm_area text-left pl-0">
                  <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
                </div>
              </div>
              <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
                <span className="remove_line"><img src={toAbsoluteUrl("/media/events/delete-pink.svg")} alt="" className="d-block" /></span>
              </div>
            </div>
            <div className="break_part row mb-2">
              <div className="col-2 pr-3">
                <div className="break_select position-relative">
                  <img src={toAbsoluteUrl("/media/patients/break_line.svg")} alt="" className="break_line" />               

                  <div className="hm-checkbox">
                    <input type="checkbox" id="break_04" name="" className="" />
                    <label className="eprice" for="break_04">
                      <span className="circle-border"></span>
                      <span className="chk_txt">Break </span>
                    </label>
                  </div>
                 </div>
              </div>
              <div className="col-5 p-0 d-flex">
                <div className="tm_area text-left pl-0">
                  <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
                </div>
              </div>
              <div className="col-5 d-flex justify-content-start align-items-center pl-2 pr-2">
                <span className="remove_line"><img src={toAbsoluteUrl("/media/events/delete-pink.svg")} alt="" className="d-block" /></span>
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
            <Availability />
            <WorkingDay />
          </Modal.Body>
        </Modal>

      </>
    );
  }
}
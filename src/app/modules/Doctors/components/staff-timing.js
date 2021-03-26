import 'date-fns';
import React , { useState } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Dropdown } from "react-bootstrap";
import {DropdownItemToggler} from "../../../../_metronic/_partials/dropdowns";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));


export function StaffTiming() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_second w-100">
      <div className="border-bottom day_select p-6">
        <div className="d-flex">
          <label className="staff_title_text">Working Days</label>
          <span className="ml-auto font-size-12 pr-8">Oct 11 - Oct 18 <img src={toAbsoluteUrl("/media/patients/time_calendar.svg")} alt="" className="pl-3" /></span>
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
        <div className="row">
          <div className="col-4">
              <label className="d-block color_C0C0C0">Choose your location</label>
              <Dropdown drop="down" alignCenter className="dropdown">
                <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                  <div className="d-flex flex-wrap h-100 avail_wid tab_avail">
                    <div className="d-flex mt-1 mb-1 p-1 avail_hover">
                      <span className="avails chat_bg"></span>
                      <span>Adayar</span>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu  className="dropdown-menu dropdown-menu-md p-0 mt-1 drop_nav">
                  <LocationDropdownMenu />
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-4">
              <label className="d-block color_C0C0C0">Availability</label>
              <Dropdown drop="down" alignCenter className="dropdown">
                <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                  <div className="d-flex flex-wrap h-100 avail_wid tab_avail">
                    <div className="d-flex mt-1 mb-1 p-1 avail_hover">
                      <span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span>
                      <span>Chat</span>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu  className="dropdown-menu dropdown-menu-md p-0 mt-1 drop_nav">
                  <AvailDropdownMenu />
                </Dropdown.Menu>
              </Dropdown>
            </div>
        </div>
        <div className="text-left mt-4">
          <div className="row">
            <div className="col pr-2 min_width100">
              <div className="session_select">
                <input type="checkbox" id="session_01" name="" className="" />
                <label className="" for="session_01">Session 1</label>
              </div>
            </div>
            <div className="col-4 p-0">
              <div className="tm_area text-left pl-0">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col pr-3">
              <div className="break_select">
                <input type="checkbox" id="break_01" name="" className="" />
                <label className="" for="break_01">Break</label>
              </div>
            </div>
            <div className="col-4 p-0">
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

export function LocationDropdownMenu() {
  return <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
          <li className="navi-item">
              <a href="#" className="navi-link">
                <span className="avails chat_bg"></span>
                <span className="navi-text">Adayar</span>
              </a>
          </li>
          <li className="navi-item">
              <a href="#" className="navi-link">
                <span className="avails video_bg"></span>
                <span className="navi-text">Thiruvanmiur</span>
              </a>
          </li>
          <li className="navi-item">
              <a href="#" className="navi-link">
                <span className="avails phone_bg"></span>
                <span className="navi-text">Perungudi</span>
              </a>
          </li>
          <li className="navi-item">
              <a href="#" className="navi-link">
                <span className="avails visit_bg"></span>
                <span className="navi-text">OMR</span>
              </a>
          </li>
      </ul>
      {/*end::Navigation*/}
  </>
}

export function AvailDropdownMenu() {
  return <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
          <li className="navi-item">
              <a href="#" className="navi-link">
                <span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="mt-0" /></span>
                <span className="navi-text">Chat Consultation</span>
              </a>
          </li>
          <li className="navi-item">
              <a href="#" className="navi-link">
                <span className="avails video_bg"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="mt-0" /></span>
                <span className="navi-text">Video Consultation</span>
              </a>
          </li>
          <li className="navi-item">
              <a href="#" className="navi-link">
                <span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="mt-0" /></span>
                <span className="navi-text">Phone Consultation</span>
              </a>
          </li>
          <li className="navi-item">
              <a href="#" className="navi-link">
                <span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="mt-0" /></span>
                <span className="navi-text">In-Person</span>
              </a>
          </li>
      </ul>
      {/*end::Navigation*/}
  </>
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


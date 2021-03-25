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
          <span className="ml-auto">Oct 11 - Oct 18</span>
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
        <div className="date_sec text-left">
          <div className="row">
            <div className="col-2">
              <div className="d-inline-flex">
                <div className=""><input type="checkbox" id="formHorizontalCheck1" class="form-check-input mt-2" /> Session</div>
              </div>
            </div>
            <div className="col-4">
              <div className="tm_area text-left">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
            <div className="col-2">
              <div className="d-inline-flex">
                <div className=""><input type="checkbox" id="formHorizontalCheck1" class="form-check-input mt-2" /> Break</div>
              </div>
            </div>
            <div className="col-4">
              <div className="tm_area text-left">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm"><TimePickers /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom p-6">
        <div className="border-bottom d-flex">
          <label className="staff_title_text">Timing Schedule 1 :</label>
        </div>
        <div className="date_sec text-left">
          <div className="row">
            <div className="col-2">
            </div>
            <div className="col d-flex">
              <div className="tm_area text-left flex-fill">
                <label>Session 1</label>
              </div>
              <div className="tm_area text-left flex-fill">
                <label>Session 2</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <div className="d-inline-flex">
                <div className="">Mon</div>
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
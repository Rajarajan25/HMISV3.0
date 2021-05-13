import 'date-fns';
import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Gender } from '../../../components/Gender';
import { ColorPalette } from '../../../components/ColorPalette';
import { UploadAvatar } from '../../../components/UploadAvatar';

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

export function StaffDetail() {
  const classes = useStyles();
  return (
    <div className="staff_first w-100 p-4">
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Name</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <input placeholder="Name" type="text" className={`form-control`} name="firstname" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">About</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <textarea placeholder="Description" type="text" className={`form-control`} name="description"> </textarea>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex">
          <div className="col-6">
            <label class="form-label d-block">Phone number</label>
            <input placeholder="9876543210" type="text" className={`form-control`} name="" />
          </div>
          <div className="col-6">
            <label class="form-label d-block">Email ID</label>
            <input placeholder="Sagayaraj@lookman.in" type="text" className={`form-control`} name="" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Employment</label>
        </div>
        <div className="d-flex">
          <div className="col-6">
            <DatePicker />
          </div>
          <div className="col-6">
            <DatePicker />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Experience</label>
        </div>
        <div className="d-flex">
          <div className="col-6">
            <input placeholder="Years" type="text" className={`form-control`} name="" />
          </div>
          <div className="col-6">
            <input placeholder="Month" type="text" className={`form-control`} name="" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex">
          <UploadAvatar classes={classes}/>
          <ColorPalette />
        </div>
      </div>
      <Gender label="Gender" />
      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <div className="col-12">
              <label class="form-label d-block">Status</label>
            </div>
            <div className="d-flex">
              <div className="col-12">
                <div className="pre_status">
                  <SwitchLabels />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="col-12">
              <label class="form-label d-block">Provider</label>
            </div>
            <div className="d-flex">
              <div className="col-12">
                <div className="pre_status">
                  <ProviderLabels />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Staff booking page Link</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <a href="https://spa4324.setmore.com/resourcebookingpage/r8fee81c0d1a3f3c25147afefe480b1035af84393/" className="booking_link" target="blank">
              https://spa4324.setmore.com/resourcebookingpage/r8fee81c0d1a3f3c25147afefe480b1035af84393/
            </a>
          </div>
        </div>
      </div>
      <div className="form-group m-0">
        <div className="col-12">
          <label class="form-label d-block">Sync with</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <div className="pre_social d-flex">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="quick-search-tooltip" style={{ zIndex: `1301` }} className="tool_bg">Google</Tooltip>
                }>
                <Link to="#" className="social_col">
                  <img src={toAbsoluteUrl("/media/patients/google.svg")} alt="Google" className="mt-0" />
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="quick-search-tooltip" style={{ zIndex: `1301` }} className="tool_bg">Microsoft</Tooltip>
                }>
                <Link to="#" className="social_col">
                  <img src={toAbsoluteUrl("/media/patients/microsoft.svg")} alt="Microsoft" className="mt-0" />
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="quick-search-tooltip" style={{ zIndex: `1301` }} className="tool_bg">Apple</Tooltip>
                }>
                <Link to="#" className="social_col">
                  <img src={toAbsoluteUrl("/media/patients/apple.svg")} alt="Apple" className="mt-0" />
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="quick-search-tooltip" style={{ zIndex: `1301` }} className="tool_bg">Calendar</Tooltip>
                }>
                <Link to="#" className="social_col">
                  <img src={toAbsoluteUrl("/media/patients/google-calendar.svg")} alt="Google Calendar" className="mt-0" />
                </Link>
              </OverlayTrigger>
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


export default function SwitchLabels() {

  const [state, setState] = React.useState({
    checkedA: true,
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
        label="Active"
      />
    </FormGroup>
  );
}

export function ProviderLabels() {

  const [state, setState] = React.useState({
    checkedA: true,
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
        label="Yes"
      />
    </FormGroup>
  );
}


export function DatePicker() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          disableFuture={true}
          autoOk={true}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

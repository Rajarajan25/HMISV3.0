import 'date-fns';
import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Button from '@material-ui/core/Button';
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

export function ServiceDetail() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_third w-100 p-4">
      <div className="form-group border-bottom d-none">
        <div className="d-flex">
          <label className="d-block staff_title_text">Test Included</label>
          <span className="ml-auto add_on_more">+ Add On More</span>
        </div>
        <div className="inc_bg mb-3">
          <div className="row">
            <div className="col-3 px-1">
              <div className="inc_box bg-white">
                <img src={toAbsoluteUrl("/media/patients/scan_test.svg")} alt="" className="d-block" />
                <span className="d-block scan_point">Scan Point</span>
              </div>
            </div>
            <div className="col-3 px-1">
              <div className="inc_box bg-white">
                <img src={toAbsoluteUrl("/media/patients/blood-test.svg")} alt="" className="d-block" />
                <span className="d-block blood_test">Blood Test</span>
              </div>
            </div>
            <div className="col-3 px-1">
              <div className="inc_box bg-white">
                <img src={toAbsoluteUrl("/media/patients/blood-tube.svg")} alt="" className="d-block" />
                <span className="d-block kidney_test">Kidney Test</span>
              </div>
            </div>
            <div className="col-3 px-1">
              <div className="inc_box bg-white">
                <img src={toAbsoluteUrl("/media/patients/swab.svg")} alt="" className="d-block" />
                <span className="d-block corona_test">Corona Test</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Service Name</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
          <input placeholder="Spa" type="text" className={`form-control`} name="firstname"/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Description</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <textarea placeholder="Description" type="text" className={`form-control`} name="description"> </textarea>
          </div>
        </div>
      </div>
      <div className="form-group d-none">
        <div className="d-flex">
          <div className="col-6">
          <label class="form-label d-block">Phone number</label>
            <input placeholder="9876543210" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-6">
          <label class="form-label d-block">Email ID</label>
            <input placeholder="Sagayaraj@lookman.in" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group d-none">
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
      <div className="form-group d-none">
        <div className="col-12">
          <label class="form-label d-block">Experience</label>
        </div>
        <div className="d-flex">
          <div className="col-6">
            <input placeholder="Years" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-6">
            <input placeholder="Month" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex">
          <div className="col-3">
            <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file"/>
            <label htmlFor="raised-button-file" className="up_avatar">
              <Button variant="raised" component="span" className={classes.button}>
                <img src={toAbsoluteUrl("/media/patients/avatar_icon.svg")} alt="" className="d-block mb-2" />
                <span className="d-block">Upload Avatar</span>
              </Button>
            </label> 
          </div>
          <div className="col-9 pr-0">
            <div className="color_select">
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_01" name="color-code" className=""/>
                <label className="" for="color_01">
                  <span style={{backgroundColor: `#41BC87`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_02" name="color-code" className="" />
                <label className="" for="color_02">
                  <span style={{backgroundColor: `#1DBC9C`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_03" name="color-code" className="" />
                <label className="" for="color_03">
                  <span style={{backgroundColor: `#27AE60`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_04" name="color-code" className="" />
                <label className="" for="color_04">
                  <span style={{backgroundColor: `#21D726`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_05" name="color-code" className="" />
                <label className="" for="color_05">
                  <span style={{backgroundColor: `#F41D2F`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_06" name="color-code" className="" />
                <label className="" for="color_06">
                  <span style={{backgroundColor: `#181D21`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_07" name="color-code" className="" />
                <label className="" for="color_07">
                  <span style={{backgroundColor: `#FD575E`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_08" name="color-code" className="" />
                <label className="" for="color_08">
                  <span style={{backgroundColor: `#FDB42B`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_09" name="color-code" className="" />
                <label className="" for="color_09">
                  <span style={{backgroundColor: `#B17F22`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_10" name="color-code" className="" />
                <label className="" for="color_10">
                  <span style={{backgroundColor: `#F34D1D`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_11" name="color-code" className="" />
                <label className="" for="color_11">
                  <span style={{backgroundColor: `#FD8624`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_12" name="color-code" className="" />
                <label className="" for="color_12">
                  <span style={{backgroundColor: `#2798B7`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_13" name="color-code" className="" />
                <label className="" for="color_13">
                  <span style={{backgroundColor: `#2980B9`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_14" name="color-code" className="" />
                <label className="" for="color_14">
                  <span style={{backgroundColor: `#3598DC`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_15" name="color-code" className="" />
                <label className="" for="color_15">
                  <span style={{backgroundColor: `#528CCB`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_16" name="color-code" className="" />
                <label className="" for="color_16">
                  <span style={{backgroundColor: `#0921EC`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_17" name="color-code" className="" />
                <label className="" for="color_17">
                  <span style={{backgroundColor: `#199EC7`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <span className="color_add"><i>+</i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group d-none">
        <div className="col-12">
          <label class="form-label d-block">Gender</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <div className="pre_gender d-flex">
              <div className="gender_col">
                <input type="radio" id="gender_01" name="gender_img" className="" checked="true"  />
                <label className="avatar_col" for="gender_01">
                  <span className="gen_img male"><img src={toAbsoluteUrl("/media/patients/male_icon.svg")} alt="" className="d-inline-flex" /></span>
                  <span className="d-flex justify-content-center">Male</span>
                </label>
              </div>
              <div className="gender_col">
                <input type="radio" id="gender_02" name="gender_img" className="" />
                <label className="avatar_col" for="gender_02">
                  <span className="gen_img female"><img src={toAbsoluteUrl("/media/patients/female_icon.svg")} alt="" className="d-inline-flex" /></span>
                  <span className="d-flex justify-content-center">Female</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group d-none">
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
          <label class="form-label d-block">Service URL</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <a href="https://www.lookman.in/" className="booking_link" target="blank">
            https://www.lookman.in/
            </a>
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

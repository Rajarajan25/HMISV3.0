import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';

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
      <div className="border-bottom p-5">
        <label>Working Days</label>
        <div className="d-flex mt-4 mb-1">
          <div className="date_bx sun_d">S</div>
          <div className="date_bx mon_d">M</div>
          <div className="date_bx tue_d">T</div>
          <div className="date_bx wed_d">W</div>
          <div className="date_bx thu_d">T</div>
          <div className="date_bx fri_d">F</div>
          <div className="date_bx sat_d">S</div>
        </div>
      </div>
      <div className="border-bottom p-5">
        <div className="date_sec text-left">
          <div className="row">
            <div className="col-2">
              <div className="d-inline-flex">
                <div className=""><input type="checkbox" id="formHorizontalCheck1" class="form-check-input mt-2" /> Session</div>
              </div>
            </div>
            <div className="col-4">
              <div className="tm_area text-left">
                <span className="st_tm"><TimePickers /></span> <span className="se_to">to</span> <span className="end_tm">12:00 pm</span>
              </div>
            </div>
            <div className="col-2">
              <div className="d-inline-flex">
                <div className=""><input type="checkbox" id="formHorizontalCheck1" class="form-check-input mt-2" /> Break</div>
              </div>
            </div>
            <div className="col-4">
              <div className="tm_area text-left">
                <span className="st_tm">9:00 am</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom p-5">
        <label>Timing Schedule 1 :</label>
        <div className="date_sec text-left">
          <div className="row">
            <div className="col-3">
              <div className="d-inline-flex">
                <div className="">Mon</div>
                <div className=""><SwitchLabels /></div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="tm_area text-left col-6">
                  <span className="st_tm">9:00 am</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm</span>
                </div>
                <div className="tm_area text-left col-6">
                  <span className="st_tm">9:00 am</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm</span>
                </div>
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
  const classes = useStyles();
  return (
      <TextField
        id="time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
  );
}



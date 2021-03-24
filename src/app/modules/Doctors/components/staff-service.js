import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});


export function StaffService() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_third w-100">
      <div className="form-group border-bottom">
        <label class="">Test Included</label>
      </div>
      <div className="form-group">
        <label class="">Services</label>
      </div>
      <div className="form-group border-bottom">
        <div className="d-flex">
          <label class="">staff commission</label>
          <div className="pre_status">
              <SwitchLabels />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label class="d-block col-12">Set Service Commission</label>
        <div className="d-flex">
          <div className="col-6">
          <label class="d-block">Amount ()</label>
            <input placeholder="100" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-6">
          <label class="d-block">Percentage (%)</label>
            <input placeholder="10%" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label class="d-block col-12">Set Product Commission</label>
        <div className="d-flex">
          <div className="col-6">
          <label class="d-block">Amount ()</label>
            <input placeholder="100" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-6">
          <label class="d-block">Percentage (%)</label>
            <input placeholder="10%" type="text" className={`form-control`} name=""/>
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
      />
    </FormGroup>
  );
}
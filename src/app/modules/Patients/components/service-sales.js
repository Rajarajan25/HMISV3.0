import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});

export function ServiceSales() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_third w-100 p-6">
      <div className="form-group">
        <label className="d-block staff_title_text mr-auto">Sales</label>
      </div>
      <div className="form-group">
        <div className="d-flex row">
          <div className="col-6">
            <label class="form-label d-block">Commission</label>
            <input placeholder="100" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label class="d-block staff_title_text pb-2">Set Service tax</label>
        <div className="d-flex row">
          <div className="col-6">
            <label class="form-label d-block">Percentage (%)</label>
            <input placeholder="10%" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label class="d-block staff_title_text pb-2">Set Voucher/Coupon Sales</label>
        <div className="d-flex row">
          <div className="col-6">
          <label class="form-label d-block">Percentage (%)</label>
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
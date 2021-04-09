import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
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


export function ServiceSettings() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_fourth w-100 p-6">
      <div className="border-bottom">
        <label className="d-block staff_title_text">Notification Settings:</label>
      </div>
      <div className="">
        <div className="d-flex my-5">
          <div className="pr-5 mr-auto">
            <label className="d-block staff_title_text">Email Notifications</label>
            <p className="setting_color">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
          </div>
          <div className="">
            <div className="pre_status">
                <SwitchLabels />
            </div>
          </div>
        </div>
        <div className="d-flex my-5">
          <div className="pr-5 mr-auto">
            <label className="d-block staff_title_text">SMS Notifications</label>
            <p className="setting_color">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
          </div>
          <div className="">
            <div className="pre_status">
                <SwitchLabels />
            </div>
          </div>
        </div>
        <div className="d-flex my-5">
          <div className="pr-5 mr-auto">
            <label className="d-block staff_title_text">Private Notifications</label>
            <p className="setting_color">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
          </div>
          <div className="">
            <div className="pre_status">
                <SwitchLabels />
            </div>
          </div>
        </div>
        <div className="d-flex my-5">
          <div className="pr-5 mr-auto">
            <label className="d-block staff_title_text">Alert Notifications</label>
            <p className="setting_color">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
          </div>
          <div className="flex-fill">
            <div className="pre_status">
                <SwitchLabels />
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
      />
    </FormGroup>
  );
}
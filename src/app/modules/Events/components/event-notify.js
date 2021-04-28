import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export function ContentEventNotify() {
  return (
    <div className="clearfix">
      <div className="event_detail">
        <div className="d-flex notify-border">
          <div className="pr-5 mr-auto">
            <label className="d-block staff_title_text">Email Notifications</label>
            <p className="setting_color">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
          </div>
          <div className="d-flex">
            <span>Custom</span>
            <div className="pre_status">
                <SwitchLabels />
            </div>
          </div>
        </div>
        <div className="d-flex notify-border">
          <div className="pr-5 mr-auto">
            <label className="d-block staff_title_text">SMS Notifications</label>
            <p className="setting_color">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
          </div>
          <div className="d-flex">
            <span>Custom</span>
            <div className="pre_status">
                <SwitchLabels />
            </div>
          </div>
        </div>
        <div className="d-flex notify-border">
          <div className="pr-5 mr-auto">
            <label className="d-block staff_title_text">Private Notifications</label>
            <p className="setting_color">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
          </div>
          <div className="d-flex">
            <span>Custom</span>
            <div className="pre_status">
                <SwitchLabels />
            </div>
          </div>
        </div>
        <div className="d-flex notify-border">
          <div className="pr-5 mr-auto">
            <label className="d-block staff_title_text">Alert Notifications</label>
            <p className="setting_color">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
          </div>
          <div className="d-flex">
            <span>Custom</span>
            <div className="pre_status">
                <SwitchLabels />
            </div>
          </div>
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
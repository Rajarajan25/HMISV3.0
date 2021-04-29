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
      <div className="event_detail pb-5">
        <div className="event-height">
          <div className="notify-border">
            <div className="d-flex">
              <div className="pr-10 mr-auto">
                <label className="d-block staff_title_text">Text Reminders</label>
                <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
              </div>
              <div className="d-flex">
                <span className="notify-custom">Custom</span>
                <div className="pre_status">
                    <SwitchLabels />
                </div>
              </div>
            </div>
            <div className="d-block">
              <label className="d-block staff_title_text">Text Message</label>
            </div>
            <div className="form-group border-bottom">
              <label className="form-lable d-block font_weight_medium color_303030 mb-0">Reminder Notification *</label>
              <input placeholder="Enter name" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>
          </div>
          <div className="d-flex notify-border">
            <div className="pr-10 mr-auto">
              <label className="d-block staff_title_text">Email Reminders</label>
              <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
            </div>
            <div className="d-flex">
              <span className="notify-custom">Custom</span>
              <div className="pre_status">
                  <SwitchLabels />
              </div>
            </div>
          </div>
          <div className="d-flex notify-border">
            <div className="pr-10 mr-auto">
              <label className="d-block staff_title_text">Email Follow Up With Timing</label>
              <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
            </div>
            <div className="d-flex">
              <span className="notify-custom">Custom</span>
              <div className="pre_status">
                  <SwitchLabels />
              </div>
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
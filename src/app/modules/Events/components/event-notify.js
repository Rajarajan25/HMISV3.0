import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Select from 'react-select';

const durationtime = [
  { value: '5mins', label: '5 Mins' },
  { value: '10mins', label: '10 Mins' },
  { value: '15mins', label: '15 Mins' },
  { value: '20mins', label: '20 Mins' },
  { value: '25mins', label: '25 Mins' },
  { value: '30mins', label: '30 Mins' },
  { value: '35mins', label: '35 Mins' },
  { value: '40mins', label: '40 Mins' },
  { value: '45mins', label: '45 Mins' },
  { value: '50mins', label: '50 Mins' },
  { value: '55mins', label: '55 Mins' },
  { value: '1hour', label: '1 Hour' }
]

export function ContentEventNotify() {
  return (
    <div className="clearfix">
      <div className="staff_first w-100">
        <div className="event-bx">
          <div className="notify-border">
            <div className="d-flex">
              <div className="pr-10 mr-auto">
                <label className="d-block staff_title_text font_weight_medium">Text Reminders</label>
                <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
              </div>
              <div className="d-flex">
                <span className="notify-custom">Custom</span>
                <div className="pre_status">
                    <SwitchLabels />
                </div>
              </div>
            </div>
            <div className="d-block mt-4 mr-8 mb-4">
              <label className="d-block staff_title_text font_weight_medium">Text Message</label>
              <textarea placeholder="Event Reminder"  className="form-control"></textarea>
            </div>
            <div className="form-group mb-0 mr-8">
              <label className="form-lable d-block font_weight_medium color_303030 mb-0">Reminder Notification *</label>
              <div className="re_select">
                <Select options={durationtime} />
              </div>
            </div>
          </div>
          <div className="d-flex notify-border">
            <div className="pr-10 mr-auto">
              <label className="d-block staff_title_text font_weight_medium">Email Reminders</label>
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
              <label className="d-block staff_title_text font_weight_medium">Email Follow Up With Timing</label>
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
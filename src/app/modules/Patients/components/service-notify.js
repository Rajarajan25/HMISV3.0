import React from "react";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);


const durationtime = [
  { value: '5mins', label: '5 Mins' },
  { value: '10mins', label: '10 Mins' },
]

export function ServiceNotify() {
  return (
    <div className="clearfix p-4 ">
      <div className="staff_first staff_second w-100">
        <div className="clearfix notify-head">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-2 text-center">
              <label className="staff_title_text">Email</label>
            </div>
            <div className="col-2 text-center">
              <label className="staff_title_text">SMS</label>
            </div>
            <div className="col-2 text-center">
              <label className="staff_title_text">Custom</label>
            </div>
          </div>
        </div>
        <div className="accor_sec event-tab">
          <NotifyExpansionPanels />
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


export function NotifyExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            <label className="staff_title_text">Text Reminders</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="row">
                <div className="col-6">
                  <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <div className="pre_status">
                    <SwitchLabels />
                  </div>
                </div>
              </div>
              <div className="clearfix">
                <div className="d-block mt-4 mb-4">
                  <label className="d-block staff_title_text font_weight_medium">Text Message</label>
                  <textarea placeholder="Event Reminder"  className="form-control"></textarea>
                </div>
                <div className="form-group mb-2">
                  <label className="form-lable d-block font_weight_medium color_303030 mb-0">Reminder Notification *</label>
                  <div className="re_select">
                    <Select className="d-none" options={durationtime} />
                    <input placeholder="Reminder Notification" type="text" className="form-control" name="" />
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            <label className="staff_title_text">Email Reminders</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="row">
                <div className="col-6">
                  <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <div className="pre_status">
                    <SwitchLabels />
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            <label className="staff_title_text">Email Follow Up With Timing</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="row">
                <div className="col-6">
                  <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <div className="pre_status">
                    <SwitchLabels />
                  </div>
                </div>
              </div>  
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            <label className="staff_title_text">Automatic Booking</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="row">
                <div className="col-6">
                  <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <div className="pre_status">
                    <SwitchLabels />
                  </div>
                </div>
              </div>  
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
            <label className="staff_title_text">Booking with approval</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="row">
                <div className="col-6">
                  <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <div className="pre_status">
                    <SwitchLabels />
                  </div>
                </div>
              </div>  
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6d-content" id="panel6d-header">
          <Typography>
            <label className="staff_title_text">Calendar event</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="row">
                <div className="col-6">
                  <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <div className="pre_status">
                    <SwitchLabels />
                  </div>
                </div>
              </div>  
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7d-content" id="panel7d-header">
          <Typography>
            <label className="staff_title_text">Reminders and follow-ups</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="row">
                <div className="col-6">
                  <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <div className="pre_status">
                    <SwitchLabels />
                  </div>
                </div>
              </div>  
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel8d-content" id="panel8d-header">
          <Typography>
            <label className="staff_title_text">Booking cancellation</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="row">
                <div className="col-6">
                  <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <div className="pre_status">
                    <SwitchLabels />
                  </div>
                </div>
              </div>  
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel9d-content" id="panel9d-header">
          <Typography>
            <label className="staff_title_text">Booking reschedule</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="row">
                <div className="col-6">
                  <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <div className="pre_status">
                    <SwitchLabels />
                  </div>
                </div>
              </div>  
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel10d-content" id="panel10d-header">
          <Typography>
            <label className="staff_title_text">Booking request cancellation</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="row">
                <div className="col-6">
                  <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <div className="pre_status">
                    <SwitchLabels />
                  </div>
                </div>
              </div>  
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel11d-content" id="panel11d-header">
          <Typography>
            <label className="staff_title_text">Booking request resubmission</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="row">
                <div className="col-6">
                  <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <div className="pre_status">
                    <SwitchLabels />
                  </div>
                </div>
              </div>  
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel12d-content" id="panel12d-header">
          <Typography>
            <label className="staff_title_text">Other Notification</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="row">
                <div className="col-6">
                  <p className="setting_color">Your invitees will have the option of receiving text reminders before a scheduled event.</p>
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <input type="checkbox" name="reminder" />
                </div>
                <div className="col-2 text-center">
                  <div className="pre_status">
                    <SwitchLabels />
                  </div>
                </div>
              </div>  
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
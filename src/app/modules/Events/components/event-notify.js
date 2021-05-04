import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
    width: '100%',
  },
}));

const durationtime = [
  { value: '5mins', label: '5 Mins' },
  { value: '10mins', label: '10 Mins' },
]

export function ContentEventNotify() {
  return (
    <div className="clearfix">
      <div className="staff_first staff_second w-100">
        <div className="event-bx d-none">
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
        <div className="clearfix notify-head d-none">
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
        <div className="accor_sec">
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
          <p>Test</p>
            <div className="clearfix d-none">
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
                    <Select options={durationtime} />
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
          <p>Test</p>
            <div className="clearfix d-none">
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
          <p>Test</p>
            <div className="clearfix d-none">
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
import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Dropdown } from "react-bootstrap";
import {DropdownItemToggler} from "../../../../_metronic/_partials/dropdowns";
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

export function ContentEventInvite() {
  return (
    <div className="clearfix staff_first">
      <div className="event_detail timingavail">
        <label class="staff_title_text mb-3">Availability</label>
        <div className="clearfix avail_device my-4">
          <div className="row">
            <div className="col-4">
              <input type="radio" name="avail_video" id="video_01" />
              <label className="d-flex vid_bg" for="video_01">
                <img src={toAbsoluteUrl("/media/patients/zoom_icon.png")} alt="" className="" />
                <span>Zoom</span>
              </label>
            </div>
            <div className="col-4">
              <input type="radio" name="avail_video" id="video_02" />
              <label className="d-flex vid_bg" for="video_02">
                <img src={toAbsoluteUrl("/media/patients/webex_icon.png")} alt="" className="" />
                <span>Webex</span>
              </label>
            </div>
            <div className="col-4">
              <input type="radio" name="avail_video" id="video_03" />
              <label className="d-flex vid_bg" for="video_03">
                <img src={toAbsoluteUrl("/media/patients/skype_icon.png")} alt="" className="" />
                <span>Skype</span>
              </label>
            </div>
            <div className="col-4">
              <input type="radio" name="avail_video" id="video_04" />
              <label className="d-flex vid_bg" for="video_04">
                <img src={toAbsoluteUrl("/media/patients/goto_icon.png")} alt="" className="" />
                <span>Goto Meeting</span>
              </label>
            </div>
            <div className="col-4">
              <input type="radio" name="avail_video" id="video_05" />
              <label className="d-flex vid_bg" for="video_05">
                <img src={toAbsoluteUrl("/media/patients/webex1_icon.png")} alt="" className="" />
                <span>Webex</span>
              </label>
            </div>
            <div className="col-4">
              <input type="radio" name="avail_video" id="video_06" />
              <label className="d-flex vid_bg" for="video_06">
                <img src={toAbsoluteUrl("/media/patients/google-meet_icon.png")} alt="" className="" />
                <span>Google Meet</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mb-5 d-none">
          <Dropdown drop="down" alignCenter className="dropdown h-100">
            <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
              <div className="availi-border border align-items-center d-flex px-5 py-3">
                <span>Add Availability</span>
                <span className="ml-auto font-size-18">+</span>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav avail-list">
              <AvailDropdownMenu />
            </Dropdown.Menu>
          </Dropdown>
         
        </div>
      </div>
    </div>
  );
}

export function AvailDropdownMenu() {
  return <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
        <li className="navi-item">
          
        </li>
      </ul>
  </>
}

export function AvailExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="availexpan">
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
          <div className="clearfix">
            <span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="" /></span>
            <span className="staff_tab_title">Inperson</span>
          </div>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
            Person
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            <label className="staff_title_text">On Call</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              Call
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            <label className="staff_title_text">Google Meet</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
      Meet
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            <label className="staff_title_text">Chat</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              Chat
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
            <label className="staff_title_text">Zoom</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              Zoom
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6d-content" id="panel6d-header">
          <Typography>
            <label className="staff_title_text">Goto Meeting</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              Goto Meeting
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7d-content" id="panel7d-header">
          <Typography>
            <label className="staff_title_text">Webex</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              webex
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel8d-content" id="panel8d-header">
          <Typography>
            <label className="staff_title_text">webex1</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
            webex1  
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>     
    </div>
  );
}
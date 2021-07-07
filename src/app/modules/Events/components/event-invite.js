import React from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);


export function ContentEventInvite() {
  return (
    <div className="clearfix staff_first">
      Invite
    </div>
  );
}

export function PersonDropdownMenu() {
  return (
    <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
        <li className="navi-item">
          <label className="staff_title_text mb-3">In Person</label>
          <div className="clearfix">
            <div className="event-range">
              <div className="event-radio">
                <input
                  type="radio"
                  id="availperson_01"
                  name="availperson"
                  className=""
                />
                <label className="eprice pr-0" for="availperson_01">
                  <span className="circle-border"></span>
                  <span className="chk_txt">My Business Address</span>
                </label>
              </div>
              <div className="event-radio">
                <input
                  type="radio"
                  id="availperson_02"
                  name="availperson"
                  className=""
                />
                <label className="eprice pr-0" for="availperson_02">
                  <span className="circle-border"></span>
                  <span className="chk_txt">Client Address At Booking</span>
                </label>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export function PhoneDropdownMenu() {
  return (
    <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
        <li className="navi-item">
          <label className="staff_title_text mb-3">In Call</label>
          <div className="clearfix">
            <div className="event-range">
              <div className="event-radio">
                <input
                  type="radio"
                  id="availcall_01"
                  name="availcall"
                  className=""
                />
                <label className="eprice pr-0" for="availcall_01">
                  <span className="circle-border"></span>
                  <span className="chk_txt">Client will call you</span>
                </label>
              </div>
              <div className="event-radio">
                <input
                  type="radio"
                  id="availcall_02"
                  name="availcall"
                  className=""
                />
                <label className="eprice pr-0" for="availcall_02">
                  <span className="circle-border"></span>
                  <span className="chk_txt">You will call the client</span>
                </label>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export function AvailExpansionPanels() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="availexpan">
      <ExpansionPanel
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>
            <div className="clearfix">
              <span className="avails visit_bg">
                <img
                  src={toAbsoluteUrl("/media/patients/avail_visit.svg")}
                  alt=""
                  className=""
                />
              </span>
              <span className="staff_tab_title">Inperson</span>
            </div>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">Person</div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>
            <label className="staff_title_text">On Call</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">Call</div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>
            <label className="staff_title_text">Google Meet</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">Meet</div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography>
            <label className="staff_title_text">Chat</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">Chat</div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5d-content"
          id="panel5d-header"
        >
          <Typography>
            <label className="staff_title_text">Zoom</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">Zoom</div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6d-content"
          id="panel6d-header"
        >
          <Typography>
            <label className="staff_title_text">Goto Meeting</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">Goto Meeting</div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7d-content"
          id="panel7d-header"
        >
          <Typography>
            <label className="staff_title_text">Webex</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">webex</div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8d-content"
          id="panel8d-header"
        >
          <Typography>
            <label className="staff_title_text">webex1</label>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">webex1</div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

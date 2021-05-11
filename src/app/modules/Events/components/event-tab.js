import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { ContentEventDetails } from "./event-detail";
import { ContentEventTiming } from "./event-timing";
import { ContentEventBook } from "./event-book";
import { ContentEventInvite } from "./event-invite";
import { ContentEventPay } from "./event-pay";
import { ContentEventNotify } from "./event-notify";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


export function EventTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className="event-tab clearfix">
        <div className="d-flex BoxShade">
          <div className="col mx-210 pr-2 my-auto">
            <EventName />
          </div>
          <div className="col p-0">
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                >
                <Tab label={<TabEventDetails />} />
                <Tab label={<TabEventTiming />} />
                <Tab label={<TabEventAdditional />} />
              </Tabs>
            </AppBar>
          </div>
        </div>

      <div className={'timingavail p-4'+' '+classes.root}>
        <div className="tab-right">
          {value === 0 && <TabContainer> <ContentEventDetails />  </TabContainer>}
          {value === 1 && <TabContainer> <ContentEventTiming /> </TabContainer>}
          {value === 2 && <TabContainer> <ContentEventAdditional /> </TabContainer>}
        </div>
        
      </div>
    </div>
  );
}

export function EventName() {
  return (
    <div class="d-flex mh-55">
      <div className="select_staff_name my-auto">
        <p className="m-0 font-size-18 font-weight-bold color_303030">Event Info</p>
        <span className="d-none">Add Description</span>
      </div>
    </div>
  );
}

export function TabEventDetails() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
      <span class="staff_tab_img">
        <img src={toAbsoluteUrl("/media/events/event-details.svg")} alt="" className="" />
      </span>
        <span className="staff_tab_title">Details</span>
      </div>
    </div>
  );
}

export function TabEventTiming() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
        <span class="staff_tab_img">
          <img src={toAbsoluteUrl("/media/events/event-timing.svg")} alt="" className="" />
        </span>
        <span className="staff_tab_title">Timing</span>
      </div>
    </div>
  );
}

export function TabEventAdditional() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
        <span class="staff_tab_img">
          <img src={toAbsoluteUrl("/media/events/event-additional.svg")} alt="" className="" />
        </span>
        <span className="staff_tab_title">Additional</span>
      </div>
    </div>
  );
}




export function ContentEventAdditional() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className="event-tab clearfix">
      <div className="event-additional">
        <div className="col p-0 border-bottom">
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              >
              <Tab label={<TabEventBook />} />
              <Tab label={<TabEventInvite />} />
              <Tab label={<TabEventPay />} />
              <Tab label={<TabEventNotify />} />
            </Tabs>
          </AppBar>
        </div>
      </div>
      <div className={'timingavail px-0 py-4'+' '+classes.root}>
        <div className="">
          {value === 0 && <TabContainer> <ContentEventBook /> </TabContainer>}
          {value === 1 && <TabContainer> <ContentEventInvite /> </TabContainer>}
          {value === 2 && <TabContainer> <ContentEventPay /> </TabContainer>}
          {value === 3 && <TabContainer> <ContentEventNotify /> </TabContainer>}
        </div>
      </div>
    </div>
  );
}

export function TabEventBook() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
        <span class="staff_tab_img">
          <img src={toAbsoluteUrl("/media/events/event-booking.svg")} alt="" className="" />
        </span>
        <span className="staff_tab_title">Booking</span>
      </div>
    </div>
  );
}

export function TabEventInvite() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
        <span class="staff_tab_img">
          <img src={toAbsoluteUrl("/media/events/event-invite.svg")} alt="" className="" />
        </span>
        <span className="staff_tab_title">Invite</span>
      </div>
    </div>
  );
}

export function TabEventPay() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
        <span class="staff_tab_img">
          <img src={toAbsoluteUrl("/media/events/event-payment.svg")} alt="" className="" />
        </span>
        <span className="staff_tab_title">Payment</span>
      </div>
    </div>
  );
}

export function TabEventNotify() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
        <span class="staff_tab_img">
          <img src={toAbsoluteUrl("/media/events/event-notify.svg")} alt="" className="" />
        </span>
        <span className="staff_tab_title">Notifications</span>
      </div>
    </div>
  );
}
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
      <h3 className="event-tab-title">New Event</h3>
      <div className={'timingavail'+' '+classes.root}>
        <div className="d-flex">
          <div className="col-3 tab-left">
            <h3 className="evn_title">Additional</h3>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                >
                <Tab label={<TabEventDetails />} />
                <Tab label={<TabEventTiming />} />
                <Tab label={<TabEventBook />} />
                <Tab label={<TabEventInvite />} />
                <Tab label={<TabEventPay />} />
                <Tab label={<TabEventNotify />} />
              </Tabs>
            </AppBar>
          </div>
          <div className="col tab-right">
            {value === 0 && <TabContainer> <ContentEventDetails />  </TabContainer>}
            {value === 1 && <TabContainer> <ContentEventTiming /> </TabContainer>}
            {value === 2 && <TabContainer> <ContentEventBook /> </TabContainer>}
            {value === 3 && <TabContainer> <ContentEventInvite /> </TabContainer>}
            {value === 4 && <TabContainer> <ContentEventPay /> </TabContainer>}
            {value === 5 && <TabContainer> <ContentEventNotify /> </TabContainer>}
          </div>
        </div>
        
      </div>
    </div>
  );
}


export function TabEventDetails() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
        <img src={toAbsoluteUrl("/media/events/event-details.svg")} alt="" className="mr-3" />
        <span className="staff_tab_title">Details</span>
      </div>
    </div>
  );
}

export function TabEventTiming() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
        <img src={toAbsoluteUrl("/media/events/event-timing.svg")} alt="" className="mr-3" />
        <span className="staff_tab_title">Timing</span>
      </div>
    </div>
  );
}

export function TabEventBook() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
        <img src={toAbsoluteUrl("/media/events/event-booking.svg")} alt="" className="mr-3" />
        <span className="staff_tab_title">Booking</span>
      </div>
    </div>
  );
}

export function TabEventInvite() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
        <img src={toAbsoluteUrl("/media/events/event-invite.svg")} alt="" className="mr-3" />
        <span className="staff_tab_title">Invite</span>
      </div>
    </div>
  );
}

export function TabEventPay() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
        <img src={toAbsoluteUrl("/media/events/event-payment.svg")} alt="" className="mr-3" />
        <span className="staff_tab_title">Payment</span>
      </div>
    </div>
  );
}

export function TabEventNotify() {
  return (
    <div className="clearfix">
      <div className="d-flex evn_bg">
        <img src={toAbsoluteUrl("/media/events/event-notify.svg")} alt="" className="mr-3" />
        <span className="staff_tab_title">Notifications</span>
      </div>
    </div>
  );
}

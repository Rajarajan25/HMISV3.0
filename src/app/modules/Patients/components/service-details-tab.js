import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Col} from "react-bootstrap";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { ServiceDetail } from "./service-detail";
import { ServiceCost } from "./service-cost";
import { ServiceStaff } from "./service-staff";
import { ServiceTiming } from "./service-timing";
import { ServiceSales } from "./service-sales";
import { ServiceSettings } from "./service-settings";

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}));

export function ServiceDetailsTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
      <Col sm={12} className="bg-white d-flex flex-column p-0">
        <div className={classes.root}>
          <div className="d-flex BoxShade">
            <div className="col mx-210 pr-2 my-auto">
              <StaffName />
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
                  <Tab label={<TabServiceDetails />} />
                  <Tab label={<TabCost />} />
                  <Tab label={<TabStaff />} />
                  <Tab label={<TabTiming />} />
                  <Tab label={<TabSales />} />
                  <Tab label={<TabServiceSettings />} />
                </Tabs>
              </AppBar>
            </div>
          </div>
          <div className="p-0">
            {value === 0 && <TabContainer> <ServiceDetail /> </TabContainer>}
            {value === 1 && <TabContainer> <ServiceCost /> </TabContainer>}
            {value === 2 && <TabContainer> <ServiceStaff /> </TabContainer>}
            {value === 3 && <TabContainer> <ServiceTiming /> </TabContainer>}
            {value === 4 && <TabContainer> <ServiceSales /> </TabContainer>}
            {value === 5 && <TabContainer> <ServiceSettings /> </TabContainer>}
          </div>
        </div>
      </Col>
  );
}

export function StaffName() {
  return (
    <div class="d-flex">
      <span className="listprofileIcon my-auto" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
      <div className="select_staff_name my-auto">
        <p className="m-0">Service Name</p>
        <span>Add Description</span>
      </div>
    </div>
  );
}

export function TabServiceDetails() {
  return (
    <div className="clearfix">
      <div className="d-flex">
        <span className="staff_tab_img"><img src={toAbsoluteUrl("/media/patients/TabDetails.svg")} alt="" className="d-inline-flex" /></span>
        <span className="staff_tab_title">Details</span>
      </div>
    </div>
  );
}

export function TabCost() {
  return (
    <div className="clearfix">
      <div className="d-flex">
        <span className="staff_tab_img"><img src={toAbsoluteUrl("/media/patients/TabCost.svg")} alt="" className="d-inline-flex" /></span>
        <span className="staff_tab_title">Cost & Duration</span>
      </div>
    </div>
  );
}

export function TabStaff() {
  return (
    <div className="clearfix">
      <div className="d-flex">
        <span className="staff_tab_img"><img src={toAbsoluteUrl("/media/patients/TabStaff.svg")} alt="" className="d-inline-flex" /></span>
        <span className="staff_tab_title">Staff</span>
      </div>
    </div>
  );
}

export function TabTiming() {
  return (
    <div className="clearfix">
      <div className="d-flex">
        <span className="staff_tab_img"><img src={toAbsoluteUrl("/media/patients/TabTiming.svg")} alt="" className="d-inline-flex" /></span>
        <span className="staff_tab_title">Timing</span>
      </div>
    </div>
  );
}

export function TabSales() {
  return (
    <div className="clearfix">
      <div className="d-flex">
        <span className="staff_tab_img"><img src={toAbsoluteUrl("/media/patients/TabSales.svg")} alt="" className="d-inline-flex" /></span>
        <span className="staff_tab_title">Sales</span>
      </div>
    </div>
  );
}

export function TabServiceSettings() {
  return (
    <div className="clearfix">
      <div className="d-flex">
        <span className="staff_tab_img"><img src={toAbsoluteUrl("/media/patients/TabSettings.svg")} alt="" className="d-inline-flex" /></span>
        <span className="staff_tab_title">Settings</span>
      </div>
    </div>
  );
}
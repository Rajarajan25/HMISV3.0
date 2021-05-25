import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Col} from "react-bootstrap";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { StaffDetail } from "./staff-detail";
import { StaffTiming } from "./staff-timing";
import { StaffService } from "./staff-service";
import { StaffSetting } from "./staff-setting";

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



export function StaffDetailsTab(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { data } = props;

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
                  <Tab label={<TabDetails />} />
                  <Tab label={<TabTiming />} />
                  <Tab label={<TabService />} />
                  <Tab label={<TabSettings />} />
                </Tabs>
              </AppBar>
            </div>
          </div>
          <div className="p-0">
            {value === 0 && <TabContainer> <StaffDetail /> </TabContainer>}
            {value === 1 && <TabContainer> <StaffTiming /> </TabContainer>}
            {value === 2 && <TabContainer> <StaffService /> </TabContainer>}
            {value === 3 && <TabContainer> <StaffSetting /> </TabContainer>}
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
        <p className="m-0">Gopinath Rajendran</p>
        <span>Add Description</span>
      </div>
    </div>
  );
}

export function TabDetails() {
  return (
    <div className="clearfix">
      <div className="d-flex">
        <span className="staff_tab_img"><img src={toAbsoluteUrl("/media/patients/TabDetails.svg")} alt="" className="d-inline-flex" /></span>
        <span className="staff_tab_title">Details</span>
      </div>
    </div>
  );
}

export function TabTiming() {
  return (
    <div className="clearfix">
      <div className="d-flex">
        <span className="staff_tab_img"><img src={toAbsoluteUrl("/media/patients/TabTiming.svg")} alt="" className="d-inline-flex" /></span>
        <span className="staff_tab_title">Timing & Location</span>
      </div>
    </div>
  );
}

export function TabService() {
  return (
    <div className="clearfix">
      <div className="d-flex">
        <span className="staff_tab_img"><img src={toAbsoluteUrl("/media/patients/TabService.svg")} alt="" className="d-inline-flex" /></span>
        <span className="staff_tab_title">Service & Sales</span>
      </div>
    </div>
  );
}

export function TabSettings() {
  return (
    <div className="clearfix">
      <div className="d-flex">
        <span className="staff_tab_img"><img src={toAbsoluteUrl("/media/patients/TabSettings.svg")} alt="" className="d-inline-flex" /></span>
        <span className="staff_tab_title">Settings</span>
      </div>
    </div>
  );
}



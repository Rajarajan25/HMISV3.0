import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Col } from "react-bootstrap";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { ServiceDetail } from "./service-detail";
import { ServiceCost } from "./service-cost";
import { ServiceSales } from "./service-sales";
import { ServiceSettings } from "./service-settings";
import { ServiceContext } from './ServiceContext'
import { Details } from '../../../components/Details'
import { Duration } from '../../../components/Duration'
import { StaffService } from "./service-sales";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {ServiceSlice} from "./ServiceSlice";
import { AzureImageview } from '../../../components/AzureImageview';

const {actions} = ServiceSlice;
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


export function ServiceDetailsTab(props) {
  const {handleUpdate,currentIndex,handleChangeStaff,currentService,isloading}=props
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  // const { currentState } = useSelector(
  //   (state) => ({ currentState: state.service }),
  //   shallowEqual
  // );

  // const { listService, currentService } = currentState;
  const field = {
    name: "Service Name",
    gender: {label:"Preferred Genders",name:"prefered_gender"},
    description: "Description",
    avatar: "avatar",
    link: "Service URL"
  }


  const timing_field = {
    timezone:"Time Zone",
    price:"Price",
    timing: "Timing",
    duration:"Duration",
    daterange:"Date Range"
  };
  const service_field = {
    service:"Service",
    staff:"Staff",
    staffCommission: "Staff Commission",
    // serviceCommision: "Set Service Commission",
    // productCommision: "Set Product Commission",
  }
  // let currentService = service.currentService;
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  function editService(values) {
    currentService.payments=values.payments;
    currentService.duration=values.duration;
    currentService.timings=values.timings;
    dispatch(actions.editService(currentService));

  }

  return (
    <Col sm={12} className="bg-white d-flex flex-column p-0">
      <div className={classes.root}>
        <div className="d-flex BoxShade">
          <div className="col mx-210 pr-2 my-auto">
            <StaffName currentService={currentService}/>
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
                <Tab label={<TabSales />} />
                <Tab label={<TabServiceSettings />} />
              </Tabs>
            </AppBar>
          </div>
        </div>
        <div className="p-0">
          {value === 0 && <TabContainer> <Details current={currentService} handleSave={editService} fields={field}
          index={currentIndex} handleUpdate={handleUpdate} isloading={isloading} /> </TabContainer>}
          {value === 1 && <TabContainer> <Duration data={currentService} handleSave={editService} fields={timing_field}
          /> </TabContainer>}
          {/* {value === 1 && <TabContainer> <ServiceCost/> </TabContainer>} */}
          {value === 2 && <TabContainer> <StaffService handleChangeStaff={handleChangeStaff} {...props} current={currentService} index={currentIndex} handleUpdate={handleUpdate} handleSave={editService} fields={service_field}/> </TabContainer>}
          {value === 3 && <TabContainer> <ServiceSettings /> </TabContainer>}
        </div>
      </div>
    </Col>
  );
}

export function StaffName(props) {
  const {currentService}=props
  return (
    <div class="d-flex">
      <AzureImageview data={currentService} />
      <div className="select_staff_name my-auto">
        <p className="m-0">{currentService.name}</p>
        <span>{currentService.description}</span>
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
        <span className="staff_tab_img"><img src={toAbsoluteUrl("/media/patients/TabTiming.svg")} alt="" className="d-inline-flex" /></span>
        <span className="staff_tab_title">Cost & Duration</span>
      </div>
    </div>
  );
}

export function TabSales() {
  return (
    <div className="clearfix">
      <div className="d-flex">
        <span className="staff_tab_img"><img src={toAbsoluteUrl("/media/patients/TabService.svg")} alt="" className="d-inline-flex" /></span>
        <span className="staff_tab_title">Staff & Sales</span>
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
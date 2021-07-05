import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from 'formik'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { AvailabilityModel } from '../models/AvailabilityModel';
import { toAbsoluteUrl } from "../../_metronic/_helpers";

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
export default function Availability(props) {
  const classes = useStyles();
  const { formikValues } = props;
  const [value, setValue] = React.useState(0);
  if (!formikValues.timings.timing_id.availability_id) {
    formikValues.timings.timing_id.availability_id = AvailabilityModel;
  }
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (<>
    <div className={'timingavail' + " " + classes.root}>
      <div className="d-flex border-bottom">
        <div className="col mx-150 pl-0 my-auto">
          <label className="staff_title_text m-0">Availability</label>
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
              <Tab label={<TabPerson />} />
              <Tab label={<TabCall />} />
              <Tab label={<TabVideo />} />
            </Tabs>
          </AppBar>
        </div>
      </div>
      <div className="p-0">
        {value === 0 && <TabContainer> <AvailPerson {...props} />  </TabContainer>}
        {value === 1 && <TabContainer> <AvailCall {...props} /> </TabContainer>}
        {value === 2 && <TabContainer> <AvailVideo {...props} /> </TabContainer>}
      </div>
    </div>
  </>);
}


export function TabPerson() {
  return (
    <div className="clearfix">
      <span className="staff_tab_title">Inperson</span>
    </div>
  );
}
export function TabCall() {
  return (
    <div className="clearfix">
      <span className="staff_tab_title">On Call</span>
    </div>
  );
}
export function TabVideo() {
  return (
    <div className="clearfix">
      <span className="staff_tab_title">Video Call</span>
    </div>
  );
}
export function AvailPerson(props) {
  const { formikValues, setFieldValue } = props;
  function handleAvailableChanges(event) {
    let value = event.target.value === "true" ? true : false;
    setFieldValue(`timings.timing_id.availability_id.inperson.buinsess_address`, value);
    setFieldValue(`timings.timing_id.availability_id.inperson.client_address`, !value);
  }
  return (
    <div className="clearfix my-4">
      <Field className="d-flex event-range" component={RadioGroup} name="timings.timing_id.availability_id.inperson.buinsess_address" onChange={handleAvailableChanges}>
        <FormControlLabel value={true} checked={formikValues.timings.timing_id.availability_id.inperson.buinsess_address} control={<Radio />} label="My Business Address" />
        <FormControlLabel value={false} checked={formikValues.timings.timing_id.availability_id.inperson.client_address} control={<Radio />} label="Client Address At Booking" />
      </Field>
    </div>
  );
}
export function AvailCall(props) {
  const { formikValues, setFieldValue } = props;
  function handleCallChanges(event) {
    let value = event.target.value === "true" ? true : false;
    setFieldValue(`timings.timing_id.availability_id.oncall.client`, value);
    setFieldValue(`timings.timing_id.availability_id.oncall.staff`, !value);
  }
  return (
    <div className="clearfix my-4">
      <Field component={RadioGroup} name="timings.timing_id.availability_id.oncall.client" onChange={handleCallChanges}>
        <FormControlLabel value={true} checked={formikValues.timings.timing_id.availability_id.oncall.client} control={<Radio />} label="Client will call you" />
        <FormControlLabel value={false} checked={formikValues.timings.timing_id.availability_id.oncall.staff} control={<Radio />} label="You will call the client" />
      </Field>
    </div>
  );
}
export function AvailVideo(props) {
  const { formikValues, setFieldValue } = props;
  const selectedVideo = formikValues.timings.timing_id.availability_id.video || [];
  const avaiableVideoOption = [
    { name: "Zoom", svg: "/media/patients/zoom_icon.png" },
    { name: "Micro shoft", svg: "/media/patients/webex_icon.png" },
    { name: "Skype", svg: "/media/patients/skype_icon.png" },
    { name: "Goto Meeting", svg: "/media/patients/goto_icon.png" },
    { name: "Webex", svg: "/media/patients/webex1_icon.png" },
    { name: "Google Meet", svg: "/media/patients/google-meet_icon.png" }
  ];
  function handleVideoChanges(item) {
    let index = selectedVideo.findIndex(value => value.video_type === item.name);
    if (index !== -1) {
      selectedVideo = selectedVideo.filter(el => el.video_type !== item.name);
    } else {
      selectedVideo.push({ id: "", video_type: item.name });
    }
    setFieldValue(`timings.timing_id.availability_id.video`, selectedVideo);
  }
  const getSelected = (type) => {
    return !!selectedVideo.find(value => value.video_type === type);
  };
  return (
    <div className="clearfix avail_device my-4">
      <div className="row">
        {avaiableVideoOption.map((item, index) => {
          return (
            <div className="col-4" key={index} >
              <input type="radio" value={selectedVideo}
                checked={getSelected(item.name)}
                onChange={() => handleVideoChanges(item)}
                id={item.name} />
              <label className="d-flex vid_bg" htmlFor={item.name} >
                <img src={toAbsoluteUrl(item.svg)} alt="" className="" />
                <span>{item.name}</span>
              </label>
            </div>
          )
        })}
      </div>
    </div>
  );
}
Availability.propTypes = {
  formikValues: PropTypes.array,
  setFieldValue: PropTypes.array
}
Availability.propTypes = {
  children: PropTypes.element.isRequired
};

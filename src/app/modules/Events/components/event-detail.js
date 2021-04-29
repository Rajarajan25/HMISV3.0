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


export function ContentEventDetails() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className="clearfix">
      <div className="event_detail pb-5">
        <div className="event-height">

          <p className="font_weight_bold font-size-20 m-0 pb-5 d-none">Details</p>

          <div className="d-flex w-100 flex-column patientPersoanlinfo">

            <div className="form-group border-bottom">
              <label className="form-lable font_weight_medium color_303030 mb-0">Name *</label>
              <input placeholder="Enter name" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>

            <div className="form-group">
              <label className="form-lable font_weight_medium color_303030">Visibility</label>
              <div className="w-100 mt-3">
                <div className="d-inline-flex gen">
                  <input type="radio" id="private" name="visibility" className="checkbx" />
                  <label className="subCategory" for="private">
                      <span className="chk_txt">Private</span>
                  </label>
                </div>
                <div className="d-inline-flex gen">
                  <input type="radio" id="public" name="visibility" className="checkbx" />
                  <label className="subCategory" for="public">
                      <span className="chk_txt">Public</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="patientProfileinfo StaffInfo d-none">
              <label className="form-lable font_weight_medium color_303030 mb-0">Availability</label>
              <div className="staff_first staff_second">
                <div className={'timingavail'+' '+classes.root}>
                  <div className="d-flex border-bottom">
                    <div className="p-0">
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
                    {value === 0 && <TabContainer> <AvailPerson />  </TabContainer>}
                    {value === 1 && <TabContainer> <AvailCall /> </TabContainer>}
                    {value === 2 && <TabContainer> <AvailVideo /> </TabContainer>}
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-lable font_weight_medium color_303030 mb-3">Description</label>
              <textarea placeholder="Description" type="text" className={`form-control`} name="description"> </textarea>
            </div>

            <div className="form-group">
              <label className="form-lable font_weight_medium color_303030 mb-0">Picture & Color *</label>
              <ColorCode />
            </div>

            <div className="form-group border-bottom">
              <label className="form-lable font_weight_medium color_303030 mb-0 d-block">Event Link</label>
              <Link to="Hmis/Sagayaraj/https://dribbble.com/search/more 20options" className="booking_link" target="blank">
                https://Hmis/Sagayaraj/https://dribbble.com/search/more 20options </Link>
            </div>

          </div>
        </div>
        <div className="w-100 event-btn mt-8">
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
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

export function AvailPerson() {
  return (
    <div className="clearfix my-4">
      <div className="d-flex">
        <div className="avail-person">
          <input type="radio" id="availperson_01" name="availperson" className="" />
          <label className="mb-0" for="availperson_01">My Business Address</label>
        </div>
        <Link to="#" className="ml-auto add_setting">+ Add Address</Link>
      </div>
      <div className="row per_add">
        <div className="col-6">
          <input type="radio" name="person_addr" id="address_01" />
          <label className="person_addr" for="address_01">
            <h3>Address 1</h3>
            <p>B Wing Flat no 502,<br />
              PN Building, Adayar,<br />
              Chennai - 600096</p>
          </label>
        </div>
        <div className="col-6">
          <input type="radio" name="person_addr" id="address_02" />
          <label className="person_addr" for="address_02">
            <h3>Address 2</h3>
            <p>B Wing Flat no 502,<br />
              PN Building, Adayar,<br />
              Chennai - 600096</p>
          </label>
        </div>
      </div>
      <div className="clearfix">
        <div className="avail-person">
          <input type="radio" id="availperson_02" name="availperson" className="" />
          <label className="mb-0" for="availperson_02">Client Address At Booking</label>
        </div>
        <div className="form-group">
          <input placeholder="Address" type="text" className={`form-control`} name=""/>
        </div>
      </div>
    </div>
  );
}


export function AvailCall() {
  return (
    <div className="clearfix my-4">
      <div className="d-flex">
        <div className="avail-call">
          <input type="radio" id="availcall_01" name="availcall" className="" />
          <label className="mb-0" for="availcall_01">Client will call you</label>
        </div>
        <div className="avail-call">
          <input type="radio" id="availcall_02" name="availcall" className="" />
          <label className="mb-0" for="availcall_02">You will call the client</label>
        </div>
      </div>
    </div>
  );
}

export function AvailVideo() {
  return (
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
  );
}

export function ColorCode() {
  const classes = useStyles();
  return (
    <div className="staff_first">
      <div className="d-flex mt-5">
        <div className="col-3">
          <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file"/>
          <label htmlFor="raised-button-file" className="up_avatar">
            <Button variant="raised" component="span" className={classes.button}>
              <img src={toAbsoluteUrl("/media/patients/avatar_icon.svg")} alt="" className="mb-2" />
              <span className="d-block">Upload Image</span>
            </Button>
          </label> 
        </div>
        <div className="col-9 pr-0">
          <div className="color_select">
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_01" name="color-code" className=""/>
              <label className="" for="color_01">
                <span style={{backgroundColor: `#41BC87`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_02" name="color-code" className="" />
              <label className="" for="color_02">
                <span style={{backgroundColor: `#1DBC9C`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_03" name="color-code" className="" />
              <label className="" for="color_03">
                <span style={{backgroundColor: `#27AE60`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_04" name="color-code" className="" />
              <label className="" for="color_04">
                <span style={{backgroundColor: `#21D726`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_05" name="color-code" className="" />
              <label className="" for="color_05">
                <span style={{backgroundColor: `#F41D2F`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_06" name="color-code" className="" />
              <label className="" for="color_06">
                <span style={{backgroundColor: `#181D21`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_07" name="color-code" className="" />
              <label className="" for="color_07">
                <span style={{backgroundColor: `#FD575E`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_08" name="color-code" className="" />
              <label className="" for="color_08">
                <span style={{backgroundColor: `#FDB42B`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_09" name="color-code" className="" />
              <label className="" for="color_09">
                <span style={{backgroundColor: `#B17F22`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_10" name="color-code" className="" />
              <label className="" for="color_10">
                <span style={{backgroundColor: `#F34D1D`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_11" name="color-code" className="" />
              <label className="" for="color_11">
                <span style={{backgroundColor: `#FD8624`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_12" name="color-code" className="" />
              <label className="" for="color_12">
                <span style={{backgroundColor: `#2798B7`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_13" name="color-code" className="" />
              <label className="" for="color_13">
                <span style={{backgroundColor: `#2980B9`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_14" name="color-code" className="" />
              <label className="" for="color_14">
                <span style={{backgroundColor: `#3598DC`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_15" name="color-code" className="" />
              <label className="" for="color_15">
                <span style={{backgroundColor: `#528CCB`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_16" name="color-code" className="" />
              <label className="" for="color_16">
                <span style={{backgroundColor: `#0921EC`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_17" name="color-code" className="" />
              <label className="" for="color_17">
                <span style={{backgroundColor: `#199EC7`}}></span>
              </label>
            </div>
            <div class="d-inline-flex color_col p-3">
              <span className="color_add"><i>+</i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
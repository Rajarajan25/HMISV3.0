import React from "react";
import {Tab, Tabs, Nav, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { PatientHistory } from "./Patient-history";
import { PatientApponiment } from "./Patient-appoinment";
import { PatientInvoice } from "./Patient-invoice";
import { PatientTest } from "./Patient-test";

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


export  class PatientDetailsTab extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "home"
    };
  }

  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={12} className="bg-white d-flex flex-column flex-md-row p-0 border-bottom">
            <div className="flex-fill">
              <Nav variant="tabs" className="custompatientTab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Overview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Files</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="three">History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four">Invoice</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="five">Appoinment</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="d-flex justify-content-end flex-fill">
              <div className="tab_col">
                <img src={toAbsoluteUrl("/media/patients/edit_icon.svg")} alt="edit" />
              </div>
              <div className="tab_col">
                <img src={toAbsoluteUrl("/media/patients/email_icon.svg")} alt="msg" className="mai" />
              </div>
              <div className="tab_col">
                <img src={toAbsoluteUrl("/media/patients/attch_icon.svg")} alt="attach" />
              </div>
              <div className="tab_col">
                <img src={toAbsoluteUrl("/media/patients/print_icon.svg")} alt="print" />
              </div>
              <div className="tab_col">
                <img src={toAbsoluteUrl("/media/patients/share_icon.svg")} alt="share" />
              </div>
              <div className="tab_col no-bg">
                <img src={toAbsoluteUrl("/media/patients/close_icon.svg")} alt="close" />
              </div>
            </div>
          </Col>
          <Col sm={12} className="p-0">
            <Tab.Content className="p-5">
              <Tab.Pane eventKey="first">
                <PatientBasicDetails/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-flex flex-wrap">
                  <PatientFileList />
                  <PatientFileList />
                  <PatientFileList />
                  <PatientFileList />
                  <PatientFileList />
                  <PatientFileList />
                  <PatientFileList />
                  <PatientFileList />
                  <PatientTest />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="three">
                <PatientHistory />
              </Tab.Pane>
              <Tab.Pane eventKey="four">
                <PatientInvoice />
              </Tab.Pane>
              <Tab.Pane eventKey="five">
                <PatientApponiment />                
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default PatientDetailsTab;


const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});


export function PatientBasicDetails(){

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const toggleDrawerClose = () => {
    setState(false);
  };

  
  
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  return(
    <div className="d-flex flex-column patientDetailsoverview">
      <div className="d-flex flex-row patientPersoanlinfo">
        <div className="d-flex flex-column align-items-start col-4">
          <div className="bg-light-primary rounded-circle overflow-hidden mb-5 p-0 mh-100 patientProfileimg">
            <img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="mh-100" />
          </div>
          <div className="d-flex flex-column w-100">
            <div className="d-flex mb-1">
              <Link to="#" className="font-weight-500 font-size-18 userName">
                  Andrea Jemmiah
              </Link>
            </div>
            <div className="d-flex font-size-14 font-weight-500">
              <span className="status pl-3 online">Active</span>
            </div>
          </div>
        </div>
        <div className="d-flex w-100 flex-column patientPersoanlinfo">
          <Row>
            <Col md={4}>
              <div className="form-group border-bottom">
                <label className="form-lable font_weight_bold">Gender</label>
                <p className="form-control-static font_weight_medium color_707070">Male</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group border-bottom">
                <label className="form-lable font_weight_bold">Date Of Birth</label>
                <p className="form-control-static font_weight_medium color_707070">Feb 24th 2021</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group border-bottom">
                <label className="form-lable font_weight_bold">Phone Number</label>
                <p className="form-control-static font_weight_medium color_707070">998855224455</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="form-group border-bottom">
                <label className="form-lable font_weight_bold">City</label>
                <p className="form-control-static font_weight_medium color_707070">Chennai</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group border-bottom">
                <label className="form-lable font_weight_bold">Zip Code</label>
                <p className="form-control-static font_weight_medium color_707070">600042</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group border-bottom">
                <label className="form-lable font_weight_bold">Registred Date</label>
                <p className="form-control-static font_weight_medium color_707070">Nov 20th 2020</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="d-flex w-100 flex-column mt-10">
        <div className="d-flex font-size-16 mb-3 font_weight_bold">
          <span>Patient Summary</span>       
        </div>
        <div className="d-flex w-100 flex-column font-size-14">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="d-flex w-100 flex-column mt-5">
        <div className="d-flex font-size-16 mb-3 font_weight_bold">          
          <span>Test Report</span>
          <span className="ml-auto">3 Tests</span>       
        </div>
        <div className="d-flex w-100">
          <div className="d-flex flex-column testReports p-5 text-center m-3">
            <img src={toAbsoluteUrl("/media/patients/lab_test.svg")} alt="" className="mx-auto" />
            <span className="mt-5 font-size-12 font-weight-500">Vitamin B12</span>
          </div>
          <div className="d-flex flex-column testReports p-5 text-center m-3">
            <img src={toAbsoluteUrl("/media/patients/virus_issues.svg")} alt="" className="mx-auto" />
            <span className="mt-5 font-size-12 font-weight-500">Corona Test</span>
          </div>
          <div className="d-flex flex-column testReports p-5 text-center m-3">
            <img src={toAbsoluteUrl("/media/patients/heart_beat.svg")} alt="" className="mx-auto" />
            <span className="mt-5 font-size-12 font-weight-500 text-wrap">Heart Beat</span>
          </div>
        </div>
      </div>
      <div className="d-flex mt-10 mb-8 justify-content-start patientButton">
        <button type="button" className="btn btn-primary" onClick={toggleDrawer('right', true)}>Book Appointment</button>
        <Drawer className="patientProfileinfo" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          <div className="py-5 px-10 overflow-auto">
            <Link to="#" className="closeDrawer" onClick={toggleDrawerClose}><span className="my-auto font-weight-500">X</span></Link>
            <BookDetail />
          </div>
        </Drawer>
      </div>
    </div>
  );
}


export function PatientFileList() {
  return (
    <div className="d-flex w-100 patientFiles">
      <div className="d-flex w-100 patientFiles_inner">
        <img alt="patient image" className="mh-100 rounded align-self-center mr-5" src={toAbsoluteUrl("/media/patients/patient_files.svg")} />
        <div className="d-flex my-auto w-100">
          <Link to="#" className="font-weight-500 font-size-14 userName">
              Check up result.pdf
          </Link>
          <span className="my-auto ml-auto font-size-12 file_hover"> 
            <span class="file_size">12 kb</span> 
            <span class="file_icon">
              <img alt="image" className="mh-100 rounded align-self-center ml-2" src={toAbsoluteUrl("/media/patients/delete_icon.svg")} /> 
              <img alt="image" className="mh-100 rounded align-self-center ml-2" src={toAbsoluteUrl("/media/patients/down_icon.svg")} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}


export function BookDetail() {
  return (
    <div className="book_detail">
      <div className="d-flex flex-column">
        <div className="d-flex flex-column w-100 mt-5">
          <div className="d-flex mb-2">
            <p className="font_weight_bold font-size-18 m-0 mt-1">Appointment Details</p>
            <div className="d-flex justify-content-end flex-fill">
              <div className="tab_col my-0">
                <img src={toAbsoluteUrl("/media/patients/email_icon.svg")} alt="msg" className="mai" />
              </div>
              <div className="tab_col my-0">
                <img src={toAbsoluteUrl("/media/patients/print_icon.svg")} alt="print" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex w-100 flex-column patientPersoanlinfo">
        <Row>
          <Col md={12}>
            <div className="form-group">
              <label className="form-lable font_weight_bold color_303030 mt-3">Booking for</label>
              <div className="w-100 mt-6">
                <div className="d-inline-flex gen">
                  <input type="radio" id="self" name="salon" className="checkbx" />
                  <label className="subCategory" for="self">
                      <span className="chk_txt">Self</span>
                  </label>
                </div>
                <div className="d-inline-flex gen">
                  <input type="radio" id="other" name="salon" className="checkbx" />
                  <label className="subCategory" for="other">
                      <span className="chk_txt">Other</span>
                  </label>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="form-group border-bottom">
              <label className="form-lable font_weight_bold color_303030">Name</label>
              <input placeholder="Enter name" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group border-bottom">
              <label className="form-lable font_weight_bold color_303030">Date & Time</label>
              <input placeholder="26/11/2020 02:00 PM" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="form-group">
              <label className="form-lable font_weight_bold color_303030 mt-2">Gender</label>
              <div className="w-100 mt-6">
                <div className="d-inline-flex gen">
                  <input type="radio" id="male" name="salon" className="checkbx" />
                  <label className="subCategory" for="male">
                      <span className="chk_txt">Male</span>
                  </label>
                </div>
                <div className="d-inline-flex gen fem">
                  <input type="radio" id="female" name="salon" className="checkbx" />
                  <label className="subCategory" for="female">
                      <span className="chk_txt">Female</span>
                  </label>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex w-100 flex-column mt-3">
        <div className="d-flex color_303030 font-size-14 mb-4 font_weight_bold">
          <span>Booking Type</span>       
        </div>
        <div className="d-flex flex-wrap w-100 font-size-13 color_303030 font_weight_medium book_type">
          <span className="book_chat">Chat Consultation</span>
          <span className="book_vid">Video Consultation</span>
          <span className="book_ph">Phone Consultation</span>
          <span className="book_person">In-Person</span>
        </div>
      </div>
      <div className="d-flex w-100 flex-column mt-10">
        <div className="d-flex color_303030 font-size-14 mb-4 font_weight_bold">
          <span>Terms and Conditions</span>       
        </div>
        <div className="w-100">
        <label className="d-flex color_707070 font-size-13"> 
          <input type="checkbox" name="acceptTerms" className="m-1"/>  <span className="ml-2">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage.</span>
        </label>
        </div>
      </div>
      <div className="w-100 mt-15">
        <div className="d-flex justify-content-end color_c0c0c0">
          <button type="button" className="btn font-size-16 font_weight_medium color_c0c0c0 text-uppercase">Cancel</button>
          <button type="button" className="btn font-size-16 font_weight_medium color_1D6AFF text-uppercase">Save</button>
        </div>
      </div>
    </div>
  );
}
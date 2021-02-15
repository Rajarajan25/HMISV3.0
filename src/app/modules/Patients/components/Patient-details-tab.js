import React from "react";
import {Tab, Tabs, Nav, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { PatientHistory } from "./Patient-history";
import { PatientApponiment } from "./Patient-appoinment";

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
          <Col sm={12} className="bg-white">
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
          </Col>
          <Col sm={12}>
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
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="three">
                <PatientHistory />
              </Tab.Pane>
              <Tab.Pane eventKey="four">
                <PatientHistory />
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

export function PatientBasicDetails(){
  return(
    <div className="d-flex flex-column patientDetailsoverview">
      <div className="d-flex flex-row patientPersoanlinfo">
        <div className="d-flex flex-column align-items-start col-3">
          <div className="bg-light-primary rounded-circle overflow-hidden mb-5 p-0 mh-100 patientProfileimg">
            <img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="mh-100" />
          </div>
          <div className="d-flex flex-column w-100">
            <div className="d-flex mb-1">
              <Link 
                to="#" 
                className="font-weight-500 font-size-18 userName"
                >
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
              <div className="form-group">
                <label className="form-lable">Gender</label>
                <p className="form-control-static">Male</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group">
                <label className="form-lable">Date Of Birth</label>
                <p className="form-control-static">Feb 24th 2021</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group">
                <label className="form-lable">Phone Number</label>
                <p className="form-control-static">998855224455</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="form-group">
                <label className="form-lable">City</label>
                <p className="form-control-static">Chennai</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group">
                <label className="form-lable">Zip Code</label>
                <p className="form-control-static">600042</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group">
                <label className="form-lable">Registred Date</label>
                <p className="form-control-static">Nov 20th 2020</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="d-flex w-100 flex-column mt-10">
        <div className="d-flex font-size-16 mb-3 font-weight-500">
          <span>Patient Summary</span>       
        </div>
        <div className="d-flex w-100 flex-column font-size-14">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="d-flex w-100 flex-column mt-5">
        <div className="d-flex font-size-16 mb-3 font-weight-500">          
          <span>Test Report</span>
          <span className="ml-auto">3 Tests</span>       
        </div>
        <div className="d-flex w-100">
          <div className="d-flex flex-column testReports p-5 text-center m-3">
            <img src={toAbsoluteUrl("/media/patients/lab_test.svg")} alt="" className="mx-auto" />
            <span className="mt-5 font-size-12 font-weight-500">Test Report</span>
          </div>
          <div className="d-flex flex-column testReports p-5 text-center m-3">
            <img src={toAbsoluteUrl("/media/patients/virus_issues.svg")} alt="" className="mx-auto" />
            <span className="mt-5 font-size-12 font-weight-500">Test Report</span>
          </div>
          <div className="d-flex flex-column testReports p-5 text-center m-3">
            <img src={toAbsoluteUrl("/media/patients/heart_beat.svg")} alt="" className="mx-auto" />
            <span className="mt-5 font-size-12 font-weight-500 text-wrap">Test Report</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export function PatientFileList() {
  return (
    <div className="d-flex w-100 patientFiles mx-2">
      <div className="symbol symbol-50 symbol-light mr-3">
        <span className="symbol-label">
          <img
            alt="patient image" 
            className="mh-100 rounded align-self-center"
            src={toAbsoluteUrl("/media/users/300_20.jpg")}
          />
        </span>
      </div>
      <div className="d-flex flex-column w-100">
        <div className="d-flex my-auto">
          <Link 
            to="#" 
            className="font-weight-500 font-size-14 userName"
            >
              Check up result.pdf
          </Link>
          <span className="my-auto ml-auto font-size-12">12kb</span>
        </div>
      </div>
    </div>
  );
}
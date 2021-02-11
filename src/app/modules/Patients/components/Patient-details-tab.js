import React from "react";
import {Tab, Tabs, Nav, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

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
            <Nav variant="tabs" className="">
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
                <TabContent />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                Thy gift, thy tables, are within my brain Full
                character'd with lasting memory, Which shall above that
                idle rank remain, Beyond all date; even to eternity: Or,
                at the least, so long as brain and heart Have faculty by
                nature to subsist; Till each to raz'd oblivion yield his
                part Of thee, thy record never can be miss'd. That poor
                retention could not so much hold, Nor need I tallies thy
                dear love to score;
              </Tab.Pane>
              <Tab.Pane eventKey="three">
                asdf
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default PatientDetailsTab;

export function TabContent(){
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
                className="font-weight-500 font-size-14 userName"
                >
                  Andrea Jemmiah
              </Link>
            </div>
            <div className="d-flex font-size-12">
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
      <div className="d-flex w-100 flex-column mt-15">
        <div className="d-flex font-size-h4 mb-3 font-weight-500">
          <span>Patient Summary</span>       
        </div>
        <div className="d-flex w-100 flex-column font-size-14">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="d-flex w-100 flex-column mt-5">
        <div className="d-flex font-size-h4 mb-3 font-weight-500">          
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
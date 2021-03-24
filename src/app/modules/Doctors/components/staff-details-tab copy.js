import React from "react";
import {Tab, Tabs, Nav, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { StaffDetail } from "./staff-detail";



export  class StaffDetailsTab extends React.Component {
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
            <div className="col pl-0 mx-180">
              <div class="d-flex">
                <span className="listprofileIcon" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/health/heartbeat.svg")} alt="" className="d-block" /></span>
                <div className="select_staff_name">
                  <p>Anandhakumar S</p>
                  <span>Add Description</span>
                </div>
              </div>
            </div>
            <div className="col pl-0">
              <Nav className="custompatientTab" variant="scrollable"
    scrollButtons="auto">
                <Nav.Item>
                  <Nav.Link eventKey="first">Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Timing & Location</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="three">Service & Sales</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four">Settings</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col sm={12} className="p-0">
            <Tab.Content className="py-5">
              <Tab.Pane eventKey="first">
                <StaffDetail />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                22
              </Tab.Pane>
              <Tab.Pane eventKey="three">
                33
              </Tab.Pane>
              <Tab.Pane eventKey="four">
                44
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}




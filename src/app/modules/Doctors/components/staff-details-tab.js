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
            <div className="flex-fill">
              <Nav variant="tabs" className="custompatientTab">
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
            <div className="d-flex justify-content-end flex-fill">

            </div>
          </Col>
          <Col sm={12} className="p-0">
            <Tab.Content className="p-5">
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
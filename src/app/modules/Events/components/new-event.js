import React from "react";
import { EventSteps } from "./events-steps";
import { Modal } from "react-bootstrap";
import {Button,ButtonToolbar} from "react-bootstrap";


export class NewEvent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          New Event
        </Button>

        <Modal
          className="eventmodal"
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              New Event
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="event-stepper">
              <EventSteps />
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

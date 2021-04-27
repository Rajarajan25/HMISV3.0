import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { EventTab } from "./event-tab";

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
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <EventTab />
          </Modal.Body>
        </Modal>

      </>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { EventTab } from "./event-tab";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});



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

        <EventDrawer />

        <Button variant="primary" className="d-none" onClick={this.handleShow}>
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
          <Modal.Body className="evt-ft d-flex flex-center"> 
            <div class="d-flex loginMaincontent bg-white shadow w-100">
              <div
                className="col-5 rounded-left"
                style={{
                  backgroundColor: `#5382FC`,
                }}
              >
                <div className="flex-column-fluid d-flex flex-column justify-content-center h-100">
                  <div className="d-flex flex-column h-100">
                    <div className="bk_aw text-white font-weight-500 font-size-15 position-absolute ml-5 mt-7 pointer" onClick={this.handleHide}>
                      <img src="/media/auth-screen/back_arrow.svg" className="mr-2" alt="arrow" /> <span>Back</span>
                    </div>
                    <div className="mt-25 mb-10 mx-auto loginRightimg1 col-lg-11 col-11 flex-column-fluid text-center">
                      <h3 className="font-size-h1 text-uppercase font-weight-600 mb-5 text-white">
                        Event Type
                      </h3>
                      <p className="font-size-14  font-weight-300 text-white line-height2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                    </div>
                    <div className="text-center mx-auto d-flex align-items-end">
                      <img src={toAbsoluteUrl("/media/events/event-banner.svg")} className="m-auto col-lg-10" alt="banner"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-center align-items-center rounded-right">
                <div className="my-auto">
                  <h1 class="h1 color_3F4772 font-weight-600 my-auto">Choose your Event type?</h1>
                  <div className="event-selection">
                    <div className="d-flex">
                      <div className="event-radio">
                        <input type="radio" id="event_01" name="event-radio" className=""/>
                        <label className="" for="event_01">
                          <span class="chk_txt">One-On-One</span>
                          <img src={toAbsoluteUrl("/media/events/one-one-icon.svg")} alt="" className="" />
                        </label>
                      </div>
                      <div className="event-radio">
                        <input type="radio" id="event_02" name="event-radio" className=""/>
                        <label className="" for="event_02">
                          <span class="chk_txt">Group</span>
                          <img src={toAbsoluteUrl("/media/events/group-icon.svg")} alt="" className="" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="nxt-btn d-flex">
                    <PopEvent />
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

      </>
    );
  }
}


export class PopEvent extends React.Component {

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
        <span className="ml-auto btn btn-primary" onClick={this.handleShow}>
          Next
        </span>

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



export function EventDrawer() {  
  const classes = useStyles();
const [state, setState] = React.useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});
const styles = {
  BackdropProps: {
    background: 'transparent'
  }
};

const toggleDrawer = (side, open) => event => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }
  setState({ ...state, [side]: open });
};

const toggleDrawerClose = () => {
  setState(false);
};
  return (
      <div className="clearfix">
        <span><Link to="#" onClick={toggleDrawer('right', true)}>New Event</Link></span>
        <Drawer className="patientProfileinfo EventDrawer StaffInfo" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          <div className="p-0 overflow-auto">
            <Link to="#" className="closeDrawer" onClick={toggleDrawerClose}>
              <span className="my-auto font-weight-500">
                <img src={toAbsoluteUrl("/media/patients/drawer_close.svg")} alt="" className="d-block" />
              </span>
            </Link>
            <EventTab />
          </div>
        </Drawer>
      </div>
    );
}
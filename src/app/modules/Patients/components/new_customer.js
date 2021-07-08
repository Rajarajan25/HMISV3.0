import React from "react";
import {Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Drawer from '@material-ui/core/Drawer';


export function NewCustomer() {
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

  return (
    <div className="d-flex justify-content-end">
      <Link to="#" className="new_customer_btn" onClick={toggleDrawer('right', true)}>
        <img src={toAbsoluteUrl("/media/patients/add-advanced.svg")} alt="" className="" />
        <span className="pl-2 font-weight-500">New Customer</span>
      </Link>
      <Drawer className="patientProfileinfo" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        <div className="py-5 px-10 overflow-auto">
          <Link to="#" className="closeDrawer" onClick={toggleDrawerClose}>
            <span className="my-auto font-weight-500">
              <img src={toAbsoluteUrl("/media/patients/drawer_close.svg")} alt="" className="d-block" />
            </span>
            </Link>
          <CustomerDetail />
        </div>
      </Drawer>
    </div> 
  );
}

export function CustomerDetail(){
  return(
    <div className="book_detail">
      <div className="d-flex flex-column w-100 mt-3">
        <p className="font_weight_bold font-size-16 m-0">New Customer</p>
      </div>
      <div className="d-flex w-100 mt-6 flex-column patientPersoanlinfo">
        <Row>
          <Col md={6}>
            <div className="form-group border-bottom">
              <label className="form-lable font_weight_bold color_303030">Name</label>
              <input placeholder="Enter Name" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group border-bottom">
              <label className="form-lable font_weight_bold color_303030">Email ID</label>
              <input placeholder="Enter Email ID" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="form-group border-bottom">
              <label className="form-lable font_weight_bold color_303030">Phone</label>
              <input placeholder="Enter Phone No" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="form-group">
              <label className="form-lable font_weight_bold color_303030 mt-2">Gender</label>
              <div className="w-100 mt-3">
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
        <Row>
          <Col md={6}>
            <div className="form-group border-bottom">
              <label className="form-lable font_weight_bold color_303030">Address</label>
              <input placeholder="Enter Address" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>
          </Col>
          <Col md={6}>
          <div className="form-group border-bottom">
              <label className="form-lable font_weight_bold color_303030">Zip Code</label>
              <input placeholder="Enter Zip Code" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>
          </Col>
        </Row>
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

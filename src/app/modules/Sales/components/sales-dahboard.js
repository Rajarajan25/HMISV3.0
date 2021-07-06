import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "react-bootstrap";
import {Tab, Tabs, Nav, Col, Row} from "react-bootstrap";
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});

export function SalesDashboard() {
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
  return (
    <div className="clearfix">
      <button type="button" className="btn btn-primary" onClick={toggleDrawer('right', true)}>Appointment</button>
      <Drawer className="patientProfileinfo" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        <div className="py-7 px-7 overflow-auto">
          <Link to="#" className="closeDrawer" onClick={toggleDrawerClose}>
            <span className="my-auto font-weight-500">
              <img src={toAbsoluteUrl("/media/patients/drawer_close.svg")} alt="" className="d-block" />
            </span>  
          </Link>
          <BookDetail />
        </div>
      </Drawer>
    </div>
  );
}

export function BookDetail() {
  return (
    <div className="book_detail">
      <div className="staff_first w-100">
        <div className="form-group">
          <div className="col-12">
            <label class="form-label d-block">Name</label>
          </div>
          <div className="d-flex">
            <div className="col-12">
            <input placeholder="Name" type="text" className={`form-control`} name="firstname"/>
            </div>
          </div>
        </div>
        <div className="form-group col-12">
          <label className="form-label d-block">Visibility</label>
          <div className="d-flex">
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
        </div>
        <div className="form-group">
          <div className="col-12">
            <label class="form-label d-block">About</label>
          </div>
          <div className="d-flex">
            <div className="col-12">
              <textarea placeholder="Description" type="text" className={`form-control`} name="description"> </textarea>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex">
            <div className="col-6">
            <label class="form-label d-block">Phone number</label>
              <input placeholder="9876543210" type="text" className={`form-control`} name=""/>
            </div>
            <div className="col-6">
            <label class="form-label d-block">Email ID</label>
              <input placeholder="Sagayaraj@lookman.in" type="text" className={`form-control`} name=""/>
            </div>
          </div>
        </div>
       
        <div className="form-group">
          <div className="col-12">
            <label class="form-label d-block">Experience</label>
          </div>
          <div className="d-flex">
            <div className="col-6">
              <input placeholder="Years" type="text" className={`form-control`} name=""/>
            </div>
            <div className="col-6">
              <input placeholder="Month" type="text" className={`form-control`} name=""/>
            </div>
          </div>
        </div>
        
        <div className="form-group d-none">
          <div className="col-12">
            <label class="form-label d-block">Gender</label>
          </div>
          <div className="d-flex">
            <div className="col-12">
              <div className="pre_gender d-flex">
                <div className="gender_col">
                  <input type="radio" id="gender_01" name="gender_img" className="" checked="true"  />
                  <label className="avatar_col" for="gender_01">
                    <span className="gen_img male"><img src={toAbsoluteUrl("/media/patients/male_icon.svg")} alt="" className="d-inline-flex" /></span>
                    <span className="d-flex justify-content-center">Male</span>
                  </label>
                </div>
                <div className="gender_col">
                  <input type="radio" id="gender_02" name="gender_img" className="" />
                  <label className="avatar_col" for="gender_02">
                    <span className="gen_img female"><img src={toAbsoluteUrl("/media/patients/female_icon.svg")} alt="" className="d-inline-flex" /></span>
                    <span className="d-flex justify-content-center">Female</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <div className="col-12">
            <label class="form-label d-block">Staff booking page Link</label>
          </div>
          <div className="d-flex">
            <div className="col-12">
              <a href="https://spa4324.setmore.com/resourcebookingpage/r8fee81c0d1a3f3c25147afefe480b1035af84393/" className="booking_link" target="blank">
              https://spa4324.setmore.com/resourcebookingpage/r8fee81c0d1a3f3c25147afefe480b1035af84393/
              </a>
            </div>
          </div>
        </div>
        
        <div className="form-group mb-0">
          <div className="d-flex justify-content-end patientButton pos_fix">
            <button type="button" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
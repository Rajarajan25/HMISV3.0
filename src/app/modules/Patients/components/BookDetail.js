import React, { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import BreakTimingsView from "./BreakTimingsView";
import { PatientContext } from '../PatientContext';
import {Tab, Tabs, Nav, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
export  default function BookDetail() {
    return (
      <div className="book_detail">
        <div className="d-flex flex-column">
          <div className="d-flex flex-column w-100">
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
                <p className="form-control-static font_weight_medium color_707070">Enter name</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group border-bottom">
                <label className="form-lable font_weight_bold color_303030">Date & Time</label>
                <p className="form-control-static font_weight_medium color_707070">26/11/2020 02:00 Pm</p>
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
        <div className="d-flex w-100 flex-column mt-8">
          <div className="d-flex color_303030 font-size-14 mb-4 font_weight_bold">
            <span>Terms and Conditions</span>       
          </div>
        </div>
      </div>
    );
  }
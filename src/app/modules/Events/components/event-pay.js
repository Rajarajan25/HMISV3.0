import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

export function ContentEventPay() {
  return (
    <div className="clearfix">
      <div className="event_detail">
        <div className="form-group">
          <label className="form-lable font_weight_medium mb-3 color_303030">Price Type *</label>
          <div className="d-flex">
            <div className="event-radio">
              <input type="radio" id="eventpay_01" name="eventpay-radio" className=""/>
              <label className="" for="eventpay_01">
                <span class="chk_txt">Free</span>
              </label>
            </div>
            <div className="event-radio">
              <input type="radio" id="eventpay_02" name="eventpay-radio" className=""/>
              <label className="" for="eventpay_02">
                <span class="chk_txt">Paid</span>
              </label>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <label className="form-lable font_weight_medium mt-3 mb-5 color_303030">Price Details *</label>
          <div className="d-flex">
            <div className="form-group border-bottom">
              <label className="form-lable font_weight_medium mb-0 color_303030">Ticket</label>
              <input placeholder="Ticket" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>
            <div className="form-group border-bottom ml-5">
              <label className="form-lable font_weight_medium mb-0 color_303030">Price</label>
              <input placeholder="Price" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>
            <div className="form-group  ml-5">
              <span>+</span>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <div className="d-flex">
            <div className="form-group border-bottom">
              <label className="form-lable font_weight_medium mb-0 color_303030">Include Event</label>
              <input placeholder="E-Certificate" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>
            <div className="form-group  ml-5">
              <span>+</span>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <div className="d-flex">
            <div className="form-group border-bottom">
              <label className="form-lable font_weight_medium mb-0 color_303030">Exclude Event</label>
              <input placeholder="E-Certificate" type="text" className="form-control font_weight_medium color_707070 pl-0 border-0" name="" />
            </div>
            <div className="form-group  ml-5">
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

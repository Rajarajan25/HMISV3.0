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
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from 'react-select';

const pricetype = [
  { value: 'free', label: 'Free' },
  { value: 'fixed', label: 'Fixed' },
  { value: 'from', label: 'From' },
  { value: 'ticket', label: 'Ticket' }
]
const durationtime = [
  { value: '5mins', label: '5 Mins' },
  { value: '10mins', label: '10 Mins' },
  { value: '15mins', label: '15 Mins' },
  { value: '20mins', label: '20 Mins' },
  { value: '25mins', label: '25 Mins' },
  { value: '30mins', label: '30 Mins' },
  { value: '35mins', label: '35 Mins' },
  { value: '40mins', label: '40 Mins' },
  { value: '45mins', label: '45 Mins' },
  { value: '50mins', label: '50 Mins' },
  { value: '55mins', label: '55 Mins' },
  { value: '1hour', label: '1 Hour' }
]
const buffertime = [
  { value: '5mins', label: '5 Mins' },
  { value: '10mins', label: '10 Mins' },
  { value: '15mins', label: '15 Mins' },
  { value: '20mins', label: '20 Mins' }
]
const availability = [
  { value: 'chat', label: 'Chat' },
  { value: 'call', label: 'Call' },
  { value: 'video', label: 'Video' },
  { value: 'inperson', label: 'In Person' }
]

export function ContentEventPay() {
  return (
    <div className="clearfix">
      <div className="staff_first staff_second">
        <div className="form-group">
          <div className="d-flex row">
            <div className="col-4">
              <label className="form-label d-block">Price Type</label>
              <div className="re_select">
                <Select options={pricetype} />
              </div>
            </div>
            <div className="col-4">
              <label className="form-label d-block">Price (&#2352;)</label>
              <input placeholder="500" type="text" className={`form-control`} name=""/>
            </div>
            <div className="col-4">
              <label className="form-label d-block">Special Price (&#2352;)</label>
              <input placeholder="500" type="text" className={`form-control`} name=""/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex justify-content-end">
            <Link to="#">
              <img src={toAbsoluteUrl("/media/patients/add-advanced.svg")} alt="" className="" />
              <span className="color_6B58B6 pl-2 font-weight-500">Advanced Pricing</span>
            </Link>
            <Link to="#" className="pl-5">
              <img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="rem-icon" />
              <span className="color_303030 pl-2 font-weight-500">Remove</span>
            </Link>
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex">
            <label className="staff_title_text">Advanced Pricing Option <span className="font-weight-normal">(Optional)</span></label>
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex row">
            <div className="col-4">
              <label className="form-label d-block">Provider/Staff Name</label>
              <input placeholder="Gopinath" type="text" className={`form-control`} name=""/>
            </div>
            <div className="col-3">
              <label className="form-label d-block">Duration</label>
              <div className="re_select">
                <Select options={durationtime} />
              </div>
            </div>
            <div className="col-3">
              <label className="form-label d-block">Price Type</label>
              <div className="re_select">
                <Select options={pricetype} />
              </div>
            </div>
            <div className="col-2">
              <label className="form-label d-block">Price (&#2352;)</label>
              <input placeholder="500" type="text" className={`form-control`} name=""/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex justify-content-end">
            <Link to="#">
              <img src={toAbsoluteUrl("/media/patients/add-advanced.svg")} alt="" className="" />
              <span className="color_6B58B6 pl-2 font-weight-500">Add</span>
            </Link>
            <Link to="#" className="pl-5">
              <img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="" className="rem-icon" />
              <span className="color_303030 pl-2 font-weight-500">Remove</span>
            </Link>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-6">
              <div className="clu_pri">
                <div className="cf">
                  <label className="form-label font_weight_medium d-block">What is Included in the price</label>
                  <input placeholder="E-Certificate" type="text" className="form-control" name="" />
                </div>
                <Link to="#" className="booking_link color_6B58B6 my-auto ml-auto">+ Add</Link>
              </div>
            </div>
            <div className="col-6 d-none">
              <div className="clu_pri">
                <div className="cf">
                  <label className="form-label font_weight_medium d-block">Exclude in the price</label>
                  <input placeholder="E-Certificate" type="text" className="form-control" name="" />
                </div>
                <Link to="#" className="booking_link color_6B58B6 my-auto ml-auto ">+ Add</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="d-none">
          <div className="form-group mt-2 mb-4">
            <label className="staff_title_text m-0">Price Type *</label>
          </div>
          <div className="busi_cus ser_tme mt-2 mb-4 clearfix  d-none">
            <SelectPrice />
          </div>
          <div className="clearfix mt-7 mb-3">
            <label className="staff_title_text m-0">Price Details *</label>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-6">
                <label className="form-label d-block">Ticket</label>
                <input placeholder="Ticket" type="text" className="form-control" name="" />
                <div className="clearfix">
                  <Link to="#" className="ml-auto booking_link">+ Add</Link>
                </div>
              </div>
              <div className="col-6">
                <label className="form-label d-block">Price</label>
                <input placeholder="Price" type="text" className="form-control" name="" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-6">
                <div className="clu_pri">
                  <div className="cf">
                    <label className="form-label font_weight_medium d-block">Include in the price</label>
                    <input placeholder="E-Certificate" type="text" className="form-control" name="" />
                  </div>
                  <Link to="#" className="booking_link my-auto ml-auto">+ Add</Link>
                </div>
              </div>
              <div className="col-6">
                <div className="clu_pri">
                  <div className="cf">
                    <label className="form-label font_weight_medium d-block">Exclude in the price</label>
                    <input placeholder="E-Certificate" type="text" className="form-control" name="" />
                  </div>
                  <Link to="#" className="booking_link my-auto ml-auto ">+ Add</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix mb-4">
            <label className="staff_title_text m-0">Extra Price</label>
          </div>
          <div className="form-group">
            <label className="form-label d-block font_weight_medium pb-4">Payment and Pricing</label>
            <div className="event-radio pb-5">
              <input type="radio" id="extra_01" name="event-Eprice" className=""/>
              <label className="eprice" for="extra_01">
                <span className="chk_txt">Do not display a price</span>
              </label>
            </div>
            <div className="event-radio pb-5">
              <input type="radio" id="extra_02" name="event-Eprice" className=""/>
              <label className="eprice" for="extra_02">
                <span className="chk_txt">Display a price but do not collect payment via schedule once</span>
                <div className="form-group mt-1 mb-0">
                  <div className="row">
                    <div className="col-6">
                      <input placeholder="100" type="text" className="form-control" name="" />
                    </div>
                    <div className="col-6">
                      <input placeholder="Rupess" type="text" className="form-control" name="" />
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div className="event-radio pb-5">
              <input type="radio" id="extra_03" name="event-Eprice" className=""/>
              <label className="eprice" for="extra_03">
                <span className="chk_txt">Display a price and collect payment via schedule once</span>
              </label>
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


function SelectPrice() {

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    group: {
      margin: theme.spacing(1, 0),
    },
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          name="business"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="free" control={<Radio />} label="Free" />
          <FormControlLabel value="paid" control={<Radio />} label="Paid" />

        </RadioGroup>
      </FormControl>
      
    </div>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export function ContentEventPay() {
  return (
    <div className="clearfix">
      <div className="staff_first staff_second">
        <div className="form-group mt-2 mb-4">
          <label className="staff_title_text m-0">Price Type *</label>
        </div>
        <div className="busi_cus ser_tme mt-2 mb-4 clearfix">
          <SelectPrice />
        </div>
        <div className="clearfix mt-10 mb-3">
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
              <span class="chk_txt">Do not display a price</span>
            </label>
          </div>
          <div className="event-radio pb-5">
            <input type="radio" id="extra_02" name="event-Eprice" className=""/>
            <label className="eprice" for="extra_02">
              <span class="chk_txt">Display a price but do not collect payment via schedule once</span>
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
              <span class="chk_txt">Display a price and collect payment via schedule once</span>
            </label>
          </div>
        </div>
        <div className="w-100 mt-15">
          <div className="d-flex justify-content-end color_c0c0c0">
            <button type="button" className="btn font-size-16 font_weight_medium color_c0c0c0 text-uppercase">Cancel</button>
            <button type="button" className="btn font-size-16 font_weight_medium color_1D6AFF text-uppercase">Save</button>
          </div>
        </div>
        <div className="form-group mb-0 d-none">
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
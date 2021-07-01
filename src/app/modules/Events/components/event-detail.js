import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "react-bootstrap";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export function ContentEventDetails() {
  const classes = useStyles();
  return (
    <div className="clearfix">
      <div className="staff_first w-100">
        <div className="form-group d-none">
          <label className="form-label d-block">Type</label>
          <div className="d-flex mt-3">
            <div className="event-radio evn-type mr-3">
              <input type="radio" id="event_01" name="event-radio" className=""/>
              <label className="" for="event_01">
                <span className="evn_img"><img src={toAbsoluteUrl("/media/events/one-one-icon.svg")} alt="" className="" /></span>
                <span className="chk_txt text-center">One-On-One</span>
              </label>
            </div>
            <div className="event-radio evn-type">
              <input type="radio" id="event_02" name="event-radio" className=""/>
              <label className="" for="event_02">
                <span className="evn_img"><img src={toAbsoluteUrl("/media/events/group-icon.svg")} alt="" className="" /></span>
                <span className="chk_txt text-center">Group</span>
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label d-block">Name *</label>
          <div className="d-flex">
            <input placeholder="Name" type="text" className={`form-control`} name="firstname"/>
          </div>
        </div>
        <div className="form-group">
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
            <label className="form-label d-block">Description</label>
          <div className="d-flex">
            <textarea placeholder="Description" type="text" className={`form-control`} name="description"> </textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex pb-2">
            <div className="col-3">
              <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file"/>
              <label htmlFor="raised-button-file" className="up_avatar">
                <Button variant="raised" component="span" className={classes.button}>
                  <img src={toAbsoluteUrl("/media/patients/avatar_icon.svg")} alt="" className="mt-3 mb-2" />
                  <span className="d-block">Upload image</span>
                </Button>
              </label> 
            </div>
            <div className="col-9 pr-0">
              <ColorCode />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label d-block">Event Link</label>
          <div className="d-flex">
            <a href="https://Hmis/Sagayaraj/https://dribbble.com/search/more 20options" className="booking_link" target="blank">
            https://Hmis/Sagayaraj/https://dribbble.com/search/more 20options
            </a>
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


export function ColorCode() {
  const classes = useStyles();
  return (
    <div className="color_select">
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_01" name="color-code" className=""/>
            <label className="" for="color_01">
              <span style={{backgroundColor: `#41BC87`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_02" name="color-code" className="" />
            <label className="" for="color_02">
              <span style={{backgroundColor: `#1DBC9C`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_03" name="color-code" className="" />
            <label className="" for="color_03">
              <span style={{backgroundColor: `#27AE60`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_04" name="color-code" className="" />
            <label className="" for="color_04">
              <span style={{backgroundColor: `#21D726`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_05" name="color-code" className="" />
            <label className="" for="color_05">
              <span style={{backgroundColor: `#F41D2F`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_06" name="color-code" className="" />
            <label className="" for="color_06">
              <span style={{backgroundColor: `#181D21`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_07" name="color-code" className="" />
            <label className="" for="color_07">
              <span style={{backgroundColor: `#FD575E`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_08" name="color-code" className="" />
            <label className="" for="color_08">
              <span style={{backgroundColor: `#FDB42B`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_09" name="color-code" className="" />
            <label className="" for="color_09">
              <span style={{backgroundColor: `#B17F22`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_10" name="color-code" className="" />
            <label className="" for="color_10">
              <span style={{backgroundColor: `#F34D1D`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_11" name="color-code" className="" />
            <label className="" for="color_11">
              <span style={{backgroundColor: `#FD8624`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_12" name="color-code" className="" />
            <label className="" for="color_12">
              <span style={{backgroundColor: `#2798B7`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
          <input type="radio" id="color_13" name="color-code" className="" />
            <label className="" for="color_13">
              <span style={{backgroundColor: `#2980B9`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
          <input type="radio" id="color_14" name="color-code" className="" />
            <label className="" for="color_14">
              <span style={{backgroundColor: `#3598DC`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
          <input type="radio" id="color_15" name="color-code" className="" />
            <label className="" for="color_15">
              <span style={{backgroundColor: `#528CCB`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
          <input type="radio" id="color_16" name="color-code" className="" />
            <label className="" for="color_16">
              <span style={{backgroundColor: `#0921EC`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <input type="radio" id="color_17" name="color-code" className="" />
            <label className="" for="color_17">
              <span style={{backgroundColor: `#199EC7`}}></span>
            </label>
          </div>
          <div className="d-inline-flex color_col p-3">
            <span className="color_add"><i>+</i></span>
          </div>
        </div>
  );
}
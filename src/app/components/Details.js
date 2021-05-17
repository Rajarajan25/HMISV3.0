import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "react-bootstrap";
import { Formik, Field } from 'formik';
import { ColorPaletteFormik } from "./ColorPalette";
import {UploadAvatar} from "./UploadAvatar"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export function ContentEventDetails(props) {
  const classes = useStyles();
  const {handleSave,current} =props;
  return (
    <Formik
    initialValues={current}
    enableReinitialize
    onSubmit={(values) => {
      handleSave(values);
      }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (

      <form onSubmit={handleSubmit}>
 
    <div className="clearfix">
      <div className="staff_first w-100">
        <div className="form-group d-none">
          <label class="form-label d-block">Type</label>
          <div className="d-flex mt-3">
            <div className="event-radio evn-type mr-3">
              <Field type="radio" id="event_01" name="event-radio" className=""/>
              <label className="" for="event_01">
                <span className="evn_img"><img src={toAbsoluteUrl("/media/events/one-one-icon.svg")} alt="" className="" /></span>
                <span class="chk_txt text-center">One-On-One</span>
              </label>
            </div>
            <div className="event-radio evn-type">
              <Field type="radio" id="event_02" name="event-radio" className=""/>
              <label className="" for="event_02">
                <span className="evn_img"><img src={toAbsoluteUrl("/media/events/group-icon.svg")} alt="" className="" /></span>
                <span class="chk_txt text-center">Group</span>
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label class="form-label d-block">Name *</label>
          <div className="d-flex">
            <Field placeholder="Name" type="text" className={`form-control`} name="name"/>
          </div>
        </div>
        <div className="form-group">
          <label class="form-label d-block">Visibility</label>
          <div className="d-flex">
            <div className="w-100 mt-3">
              <div className="d-inline-flex gen">
                <Field type="radio" id="private" name="visibility" className="checkbx" />
                <label className="subCategory" for="private">
                    <span className="chk_txt">Private</span>
                </label>
              </div>
              <div className="d-inline-flex gen">
                <Field type="radio" id="public" name="visibility" className="checkbx" />
                <label className="subCategory" for="public">
                    <span className="chk_txt">Public</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
            <label class="form-label d-block">Description</label>
          <div className="d-flex">
            <Field as="textarea" placeholder="Description" type="text" className={`form-control`} name="description"> </Field>
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex pb-2">
          <UploadAvatar classes={classes}/>
            <div className="col-9 pr-0">
              <ColorPaletteFormik />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label class="form-label d-block">Event Link</label>
          <div className="d-flex">
            <a href="https://Hmis/Sagayaraj/https://dribbble.com/search/more 20options" className="booking_link" target="blank">
            https://Hmis/Sagayaraj/https://dribbble.com/search/more 20options
            </a>
          </div>
        </div>
        <div className="form-group mb-0">
          <div className="d-flex justify-content-end patientButton pos_fix">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
    </form>
      )}
    </Formik>
  );
}


export function ColorCode() {
  const classes = useStyles();
  return (
    <div className="color_select">
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_01" name="color-code" className=""/>
            <label className="" for="color_01">
              <span style={{backgroundColor: `#41BC87`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_02" name="color-code" className="" />
            <label className="" for="color_02">
              <span style={{backgroundColor: `#1DBC9C`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_03" name="color-code" className="" />
            <label className="" for="color_03">
              <span style={{backgroundColor: `#27AE60`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_04" name="color-code" className="" />
            <label className="" for="color_04">
              <span style={{backgroundColor: `#21D726`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_05" name="color-code" className="" />
            <label className="" for="color_05">
              <span style={{backgroundColor: `#F41D2F`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_06" name="color-code" className="" />
            <label className="" for="color_06">
              <span style={{backgroundColor: `#181D21`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_07" name="color-code" className="" />
            <label className="" for="color_07">
              <span style={{backgroundColor: `#FD575E`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_08" name="color-code" className="" />
            <label className="" for="color_08">
              <span style={{backgroundColor: `#FDB42B`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_09" name="color-code" className="" />
            <label className="" for="color_09">
              <span style={{backgroundColor: `#B17F22`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_10" name="color-code" className="" />
            <label className="" for="color_10">
              <span style={{backgroundColor: `#F34D1D`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_11" name="color-code" className="" />
            <label className="" for="color_11">
              <span style={{backgroundColor: `#FD8624`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_12" name="color-code" className="" />
            <label className="" for="color_12">
              <span style={{backgroundColor: `#2798B7`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
          <input type="radio" id="color_13" name="color-code" className="" />
            <label className="" for="color_13">
              <span style={{backgroundColor: `#2980B9`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
          <input type="radio" id="color_14" name="color-code" className="" />
            <label className="" for="color_14">
              <span style={{backgroundColor: `#3598DC`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
          <input type="radio" id="color_15" name="color-code" className="" />
            <label className="" for="color_15">
              <span style={{backgroundColor: `#528CCB`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
          <input type="radio" id="color_16" name="color-code" className="" />
            <label className="" for="color_16">
              <span style={{backgroundColor: `#0921EC`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <input type="radio" id="color_17" name="color-code" className="" />
            <label className="" for="color_17">
              <span style={{backgroundColor: `#199EC7`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-3">
            <span className="color_add"><i>+</i></span>
          </div>
        </div>
  );
}
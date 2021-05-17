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
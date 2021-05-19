import React from "react";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field } from 'formik';
import { ColorPaletteFormik } from "./ColorPalette";
import { UploadAvatar } from "./UploadAvatar"
import Visiblity from './Visiblity'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export function Details(props) {
  const classes = useStyles();
  const { handleSave, current } = props;
  return (
    <Formik
    initialValues={current}
    enableReinitialize
    onSubmit={(values) => {
      console.log("values",JSON.stringify(values));
      handleSave(values);
      }}
    >
      {({
        handleSubmit,
      }) => (

        <form onSubmit={handleSubmit}>

          <div className="clearfix">
            <div className="staff_first w-100">

              <div className="form-group">
                <label class="form-label d-block">Name *</label>
                <div className="d-flex">
                  <Field placeholder="Name" type="text" className={`form-control`} name="name" />
                </div>
              </div>
              <Visiblity name="Visiblity" />
              <div className="form-group">
                <label class="form-label d-block">Description</label>
                <div className="d-flex">
                  <Field as="textarea" placeholder="Description" type="text" className={`form-control`} name="description"> </Field>
                </div>
              </div>
              <div className="form-group">
                <div className="d-flex pb-2">
                  <UploadAvatar classes={classes} />
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
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field } from 'formik';
import { ColorPaletteFormik } from "./ColorPalette";
import { UploadAvatar } from "./UploadAvatar"
import Visiblity from './Visiblity'
import Grid from '@material-ui/core/Grid';
import { DatePickersUtil } from './DateAndTimePicker'
import { GenderFormik } from './Gender'
import { Syncwith } from './Syncwith'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export function Details(props) {
  const classes = useStyles();
  const { handleSave, current, fields, index, handleUpdate } = props;
  return (
    <Formik
      initialValues={current}
      enableReinitialize
      onSubmit={(values) => {
        console.log("values", JSON.stringify(values));
        if (index != -1) {
          handleUpdate(values, index);
          return;
        }
        //handleSave(values);
      }}
    >
      {({
        handleSubmit, setFieldValue, values
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="clearfix">
            <div className="staff_first w-100 p-5">
              {fields.name && <div className="form-group">
                <label className="form-label d-block">Name *</label>
                <div className="d-flex">
                  <Field placeholder={fields.name} type="text" className={`form-control`} name="name" value={values.name || ""} />
                </div>
              </div>}
              {fields.visiblity && <Visiblity name="Visiblity" />}
              {fields.description && <div className="form-group">
                <label className="form-label d-block">{fields.description}</label>
                <div className="d-flex">
                  <Field as="textarea" placeholder={fields.description} type="text" className={`form-control`} name="description" value={values.description || ""}> </Field>
                </div>
              </div>}
              <div className="form-group">
                <div className="d-flex">
                  {fields.phone && <div className="col-6">
                    <label className="form-label d-block">{fields.phone}</label>
                    <Field placeholder={fields.phone} type="number" className={`form-control`} name="mobile" value={values.mobile || ""} />
                  </div>}
                  {fields.email && <div className="col-6">
                    <label className="form-label d-block">{fields.email}</label>
                    <Field placeholder={fields.email} type="email" className={`form-control`} name="official_email" value={values.official_email || ""} />
                  </div>}
                </div>
              </div>
              {fields.daterange && <div className="form-group">
                <div className="col-12">
                  <label className="form-label d-block">{fields.daterange}</label>
                </div>
                <div className="d-flex">
                  <div className="col-6">
                    <DatePicker value={values.employment_start || new Date('Apr 20 1988 10:10 AM' )} name="employment_start" onChange={(value)=>setFieldValue("employment_start",value)}/>
                  </div>
                  <div className="col-6">
                    <DatePicker value={values.employment_end || new Date('Apr 20 2020 10:10 AM' )} name="employment_end" onChange={(value)=>setFieldValue("employment_end",value)}/>
                  </div>
                </div>
              </div>}
              {fields.experience && <div className="form-group">
                <div className="col-12">
                  <label className="form-label d-block">{fields.experience}</label>
                </div>
                <div className="d-flex">
                  <div className="col-6">
                    <Field placeholder="Years" type="number" className={`form-control`} name="experience_year" value={values.experience_year || ""} />
                  </div>
                  <div className="col-6">
                    <Field placeholder="Month" type="number" className={`form-control`} name="experience_month" value={values.experience_month || ""} />
                  </div>
                </div>
              </div>}
              {fields.avatar && <div className="form-group">
                <div className="d-flex pb-2">
                  <UploadAvatar classes={classes} />
                  <div className="col-9 pr-0">
                    <ColorPaletteFormik />
                  </div>
                </div>
              </div>}
              {fields.gender && <GenderFormik label={fields.gender} name="gender" />}
              {fields.status && <div className="form-group">
                <div className="row">
                  <div className="col-6">
                    <div className="col-12">
                      <label className="form-label d-block">{fields.status}</label>
                    </div>
                    <div className="d-flex">
                      <div className="col-12">
                        <div className="pre_status">
                          <SwitchLabels
                            label="Active"
                            name="status"
                            value={values.status}
                            checked={values.status}
                            onChange={(event, checked) => {
                              setFieldValue("status", checked);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {fields.provider && <div className="col-6">
                    <div className="col-12">
                      <label className="form-label d-block">{fields.provider}</label>
                    </div>
                    <div className="d-flex">
                      <div className="col-12">
                        <div className="pre_status">
                          <SwitchLabels
                            label="yes"
                            name="provider"
                            value={values.provider}
                            checked={values.provider}
                            onChange={(event, checked) => {
                              setFieldValue("provider", checked);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>}
                </div>
              </div>}
              {fields.link && values.staff_booking_page_link && <div className="form-group">
                <label className="form-label d-block">{fields.link}</label>
                <div className="d-flex">
                  <a href={values.staff_booking_page_link} className="booking_link" target="blank">
                    {values.staff_booking_page_link}
                  </a>
                </div>
              </div>}
              {fields.syncwith && <Syncwith />}
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

export function DatePicker(props) {
  return (
    <Grid container justify="space-around">
      <DatePickersUtil {...props}/>
    </Grid>
  );
}

export default function SwitchLabels(props) {
  const { lable } = props;

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch {...props} value="" />
        }
        label={lable}
      />
    </FormGroup>
  );
}
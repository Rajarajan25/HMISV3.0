import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field } from 'formik';
import { ColorPaletteFormik } from "./ColorPalette";
import { UploadAvatar, UploadAvatarFormik } from "./UploadAvatar"
import Visiblity from './Visiblity'
import Grid from '@material-ui/core/Grid';
import { DatePickersUtil } from './DateAndTimePicker'
import { GenderFormik } from './Gender'
import { Syncwith } from './Syncwith'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import * as Yup from 'yup';
import { SpinnerSmall } from "./Spinner";
import { DevAlertPopUp } from "../SiteUtill";
import { ButtonLoading } from "./ButtonLoading";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import './styles.css'

const detailSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const getInputClasses = (props, fieldname) => {
  if (props.touched[fieldname] && props.errors[fieldname]) {
    return "is-invalid";
  }
  if (props.touched[fieldname] && !props.errors[fieldname]) {
    return "is-valid";
  }
  return "";
};

export function Details(props) {
  const { current, fields, index, handleUpdate, addNew, isloading, handleProvider, type } = props;
  const [providerEnable, setProviderEnable] = React.useState(current.is_service_provider);
  const [editor, setEditor] = React.useState({ content: current.description || "" });
  function handleChange(content) {
    setEditor({ content });
  }
  const classes = useStyles();
  return (
    <Formik
      initialValues={current}
      enableReinitialize={true}
      validationSchema={detailSchema}
      onSubmit={(values) => {
        //values.phone_no = "" + values.phone_no;
        values.description = "" + editor.content
        console.log("values", JSON.stringify(values));
        if (index != -1) {
          delete values.created_at;
          handleUpdate(values, index);
          return;
        } else {
          addNew(values);
        }
        //handleSave(values);
      }}
    >
      {({
        handleSubmit, setFieldValue, getFieldProps, values, touched, errors,
      }) => (
        <form onSubmit={handleSubmit} className="form fv-plugins-framework">
          <div className="clearfix">
            <div className="staff_first w-100 p-5">
              {fields.name &&
                <div className="form-group fv-plugins-icon-container">
                  <label className="form-label d-block">Name *</label>
                  <div className="d-flex">
                    <Field placeholder={fields.name}
                      {...getFieldProps("name")}
                      type="text"
                      className={`form-control py-5 px-6 ${getInputClasses({ touched, errors }, "name")}`}
                      name="name" value={values.name || ""} />
                  </div>
                  {touched.name && errors.name ? (
                    <div className="fv-plugins-message-container invalid-feedback d-block">
                      <div className="fv-help-block">{errors.name}</div>
                    </div>
                  ) : null}
                </div>
              }
              {fields.visiblity && <Visiblity name="Visiblity" />}
              {fields.description && <div className="form-group">
                <label className="form-label d-block">{fields.description}</label>
                <div className="d-flex">
                  
                    <ReactQuill
          value={editor.content}
          theme="snow"
          onChange={handleChange}
          
        />
                </div>
              </div>}
              <div className="form-group">
                <div className="d-flex">
                  {fields.phone && <div className="col-6">
                    <label className="form-label d-block">{fields.phone}</label>
                    <Field placeholder={fields.phone} type="number" className={`form-control`} name="phone_no" value={values.phone_no || ""} />
                  </div>}
                  {fields.email && <div className="col-6">
                    <label className="form-label d-block">{fields.email}</label>
                    <Field placeholder={fields.email} type="email" className={`form-control`} name="email" value={values.email || ""} />
                  </div>}
                </div>
              </div>
              {fields.daterange && <div className="form-group">
                <div className="col-12">
                  <label className="form-label d-block">{fields.daterange}</label>
                </div>
                <div className="d-flex">
                  <div className="col-6">
                    <DatePicker value={values.employement_from || new Date('Apr 20 1988 10:10 AM')} name="employement_from" onChange={(value) => setFieldValue("employement_from", value)} />
                  </div>
                  <div className="col-6">
                    <DatePicker value={values.employement_to || new Date('Apr 20 2020 10:10 AM')} name="employement_from" onChange={(value) => setFieldValue("employement_to", value)} />
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
                  <UploadAvatarFormik 
                  classes={classes} 
                  name="avatar_or_icon"
                  subName="avatar_or_icon_path"
                  imageURL={values.avatar_or_icon}
                  path={values.avatar_or_icon_path}
                  upload_type="profile_image" 
                  setFieldValue={setFieldValue} 
                  />
                  <div className="col-9 pr-0">
                    <ColorPaletteFormik name="color_code" />
                  </div>
                </div>
              </div>}
              {fields.gender && <GenderFormik type={type} label={fields.gender.lable} name={fields.gender.name} />}
              {/* {
                [1, 2].map((id) => {
                  return (
                    <React.Fragment key={id}>
                    <GenderFormik  label={fields.gender.lable} name={fields.gender.name+id} />
                    </React.Fragment>
                  )
                })
              } */}
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
                            name="is_active"
                            value={values.is_active}
                            checked={values.is_active}
                            onChange={(event, checked) => {
                              setFieldValue("is_active", checked);
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
                            name="is_service_provider"
                            value={values.provider}
                            checked={values.is_service_provider}
                            onChange={(event, checked) => {
                              setFieldValue("is_service_provider", checked);
                              handleProvider(values, checked);
                              setProviderEnable(checked);

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
              {fields.syncwith && <Syncwith providerEnable={providerEnable} />}
              <ButtonLoading label="Save" loading={isloading} />
              {/* <div className="form-group mb-0">
                <div className="d-flex justify-content-end patientButton pos_fix">
                  <button type="submit" className="btn btn-primary">Save <SpinnerSmall loading={isloading}/> </button>
                </div>
              </div> */}
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
      <DatePickersUtil {...props} />
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
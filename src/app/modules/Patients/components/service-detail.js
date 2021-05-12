import 'date-fns';
import React from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {ServiceContext} from './ServiceContext'
import { Formik, Field } from 'formik';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));
const initialValues = { name: '', description: '', color_code:'' , prefered_gender: '', booking_url: ''};

export function ServiceDetail() {
  const classes = useStyles();
  const [service,setservice] =React.useContext(ServiceContext)
  let currentService=service.currentService;
  const [checked,setChecked]=React.useState();
  

  return (
    <Formik
    initialValues={currentService || initialValues}
    enableReinitialize
    onSubmit={(values) => {
       setservice({
        type: "EDIT_SERVICE",
        payload: values
      });
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
    <div className="staff_first w-100 p-4">
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Service Name</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
          <Field placeholder="Spa" type="text" className={`form-control`} name="name"/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Description</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <Field as="textarea" placeholder="Description" type="text" className={`form-control`} name="description"> </Field>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex">
          <div className="col-3">
            <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file"/>
            <label htmlFor="raised-button-file" className="up_avatar">
              <Button variant="raised" component="span" className={classes.button}>
                <img src={toAbsoluteUrl("/media/patients/avatar_icon.svg")} alt="" className="d-block mb-2" />
                <span className="d-block">Upload icon Or image</span>
              </Button>
            </label> 
          </div>
          <div className="col-9 pr-0">
            <div className="color_select">
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_01" name="color_code" className="" value="#41BC87"/>
                <label className="" for="color_01">
                  <span style={{backgroundColor: `#41BC87`}}></span>
                </label>
              </div> 
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_02" name="color_code" className="" value="#1DBC9C"/>
                <label className="" for="color_02">
                  <span style={{backgroundColor: `#1DBC9C`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_03" name="color_code" className="" value="#27AE60"/>
                <label className="" for="color_03">
                  <span style={{backgroundColor: `#27AE60`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_04" name="color_code" className="" value="#21D726"/>
                <label className="" for="color_04">
                  <span style={{backgroundColor: `#21D726`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_05" name="color_code" className="" value="#F41D2F"/>
                <label className="" for="color_05">
                  <span style={{backgroundColor: `#F41D2F`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_06" name="color_code" className="" value="#181D21"/>
                <label className="" for="color_06">
                  <span style={{backgroundColor: `#181D21`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_07" name="color_code" className="" value="#FD575E"/>
                <label className="" for="color_07">
                  <span style={{backgroundColor: `#FD575E`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_08" name="color_code" className="" value="#FDB42B"/>
                <label className="" for="color_08">
                  <span style={{backgroundColor: `#FDB42B`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_09" name="color_code" className="" value="#B17F22"/>
                <label className="" for="color_09">
                  <span style={{backgroundColor: `#B17F22`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_10" name="color_code" className="" value="#F34D1D"/>
                <label className="" for="color_10">
                  <span style={{backgroundColor: `#F34D1D`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_11" name="color_code" className="" value="#FD8624"/>
                <label className="" for="color_11">
                  <span style={{backgroundColor: `#FD8624`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_12" name="color_code" className="" value="#2798B7"/>
                <label className="" for="color_12">
                  <span style={{backgroundColor: `#2798B7`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <Field type="radio" id="color_13" name="color_code" className="" value="#2980B9"/>
                <label className="" for="color_13">
                  <span style={{backgroundColor: `#2980B9`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <Field type="radio" id="color_14" name="color_code" className="" value="#3598DC"/>
                <label className="" for="color_14">
                  <span style={{backgroundColor: `#3598DC`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <Field type="radio" id="color_15" name="color_code" className="" value="#528CCB"/>
                <label className="" for="color_15">
                  <span style={{backgroundColor: `#528CCB`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <Field type="radio" id="color_16" name="color_code" className="" value="#0921EC"/>
                <label className="" for="color_16">
                  <span style={{backgroundColor: `#0921EC`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_17" name="color_code" className="" value="#199EC7"/>
                <label className="" for="color_17">
                  <span style={{backgroundColor: `#199EC7`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <span className="color_add"><i>+</i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Preferred Gender</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <div className="pre_gender d-flex">
              <div className="gender_col">
                <Field type="radio" id="gender_01" name="prefered_gender" className="" value="Male"  />
                <label className="avatar_col" for="gender_01">
                  <span className="gen_img male"><img src={toAbsoluteUrl("/media/patients/male_icon.svg")} alt="" className="d-inline-flex" /></span>
                  <span className="d-flex justify-content-center">Male</span>
                </label>
              </div>
              <div className="gender_col">
                <Field type="radio" id="gender_02" name="prefered_gender" className="" value="Female" />
                <label className="avatar_col" for="gender_02">
                  <span className="gen_img female"><img src={toAbsoluteUrl("/media/patients/female_icon.svg")} alt="" className="d-inline-flex" /></span>
                  <span className="d-flex justify-content-center">Female</span>
                </label>
              </div>
              <div className="gender_col">
                <Field type="radio" id="gender_03" name="prefered_gender" className="" value="Both" />
                <label className="avatar_col" for="gender_03">
                  <span className="gen_img both"><img src={toAbsoluteUrl("/media/patients/both_icon.svg")} alt="" className="d-inline-flex" /></span>
                  <span className="d-flex justify-content-center">Both</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Service URL</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <Field name="booking_url" type="text" className="booking_link" target="blank">
            </Field>
          </div>
        </div>
      </div>
      <div className="form-group mb-0">
        <div className="d-flex justify-content-end patientButton pos_fix">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
    </form>
                )}
              </Formik>
  );
    
    
}


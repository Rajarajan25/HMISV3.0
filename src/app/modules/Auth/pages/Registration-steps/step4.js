import React, { useState } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import * as auth from "../../_redux/authRedux";
import { register } from "../../_redux/authCrud";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import { Formik, Field, Form } from 'formik';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { ADD_USER, GET_USER } from "../query/graphql";
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Select,
  Switch,
} from 'formik-material-ui'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function Step4(props) {
  
  const { handleNext } = props;

  
  let TimezoneId = localStorage.getItem("TimezoneId")
  console.log("TimezoneId" + TimezoneId)
  const { data } = useQuery(GET_USER, {
    variables: { query: { _id: TimezoneId } }
  });
  console.log(data)
  
  
  const initialValues = {
    "time_Zone":"",
    "deleted" :false,
    "push_notifications_on" :false
  };
  const [addUser] = useMutation(ADD_USER);
  const AddUser = async (values) => {
    
    addUser({
      variables: {
        data: {
          "time_Zone":values.time_Zone,
          "deleted" :values.deleted,
          "push_notifications_on":values.push_notifications_on
         
         
      }
    }
    }) .then(res => {
      localStorage.setItem("TimezoneId",res.data.insertOneUser._id)
    });
    
  };


  const classes = useStyles();

  if (localStorage.getItem("BackFlag") === "Y") {
    {
      if (data !== undefined) {
        return (
          <>
            <div className="text-left mb-6">
              <h1 className="font-size-28 color_3F4772 text-capitalize font-weight-600 mb-10">Business Info:</h1>
            </div>
            <div className="business_info">
              <Formik
                initialValues={data.user}
                enableReinitialize={true}
                onSubmit={
                  fields => {
                    alert(JSON.stringify(fields, null, 2))
                    AddUser(fields);
                    handleNext()

                  }}

              >
                {({ values, errors, touched, handleSubmit, onChange }) => (

<Form onSubmit={handleSubmit}  >
<div className="w-100 mh-100 text-center rightPanel">
  <div className="text-left mb-6">
    <h1 className="font-size-28 color_3F4772 text-capitalize font-weight-600 mb-10">Choose your business hours:</h1>     
    <p className=" "> <span></span></p> 
  </div>
  <div className="d-flex font-size-16 font-weight-500 pb-8 border-bottom">
    <div className="wal_clk">
    <img src="/media/auth-screen/wall_clock.svg" alt="thumbs-up" /> <span>Time Zone:</span>
    </div>
    <div className="tim_zne">
    <FormControl className={classes.formControl}>

<Field name="time_Zone" component={Select}
  
  type="text"
  className={classes.selectEmpty}
>
  <MenuItem value="">
  (GMT +05:00) Kolkata, India
  </MenuItem>
  <MenuItem value="(GMT +05:00) Kolkata, India">(GMT +05:00) Kolkata, India</MenuItem>
  <MenuItem value="(GMT +05:00) Kolkata, India">(GMT +05:00) Kolkata, India</MenuItem>
  <MenuItem value="(GMT +05:00) Kolkata, India">(GMT +05:00) Kolkata, India</MenuItem>
</Field>
</FormControl>
    </div>
  </div>
  <div className="d-flex mt-10">
    <div className="date_bx sun_d">S</div>
    <div className="date_bx mon_d">M</div>
    <div className="date_bx tue_d">T</div>
    <div className="date_bx wed_d">W</div>
    <div className="date_bx thu_d">T</div>
    <div className="date_bx fri_d">F</div>
    <div className="date_bx sat_d">S</div>
  </div>
  <div className="date_sec text-left">
    <div className="d-flex row mt-7">
      <div className="col-3">
        <div className="dt_area mon_bg d-inline-flex">
          <div className="date_bx mon_d">M</div>
          <div className="date_od">Monday</div>
        </div>
      </div>
      <div className="tm_area text-left col">
        <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
      </div>
    </div>
    <div className="d-flex row mt-7">
      <div className="col-3">
        <div className="dt_area tue_bg d-inline-flex">
          <div className="date_bx tue_d">T</div>
          <div className="date_od">Tuesday</div>
        </div>
      </div>
      <div className="tm_area text-left col">
        <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
      </div>
    </div>
    <div className="d-flex row mt-7">
      <div className="col-3">
        <div className="dt_area wed_bg d-inline-flex">
          <div className="date_bx wed_d">W</div>
          <div className="date_od">Wednesday</div>
        </div>
        
      </div>
      <div className="tm_area text-left col">
        <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
      </div>
    </div>
    <div className="d-flex row mt-7">
      <div className="col-3">
        <div className="dt_area thu_bg d-inline-flex">
          <div className="date_bx thu_d">T</div>
          <div className="date_od">Thursday</div>
        </div>
      </div>
      <div className="tm_area text-left col">
        <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
      </div>
    </div>
    <div className="d-flex row mt-7">
      <div className="col-3">
        <div className="dt_area fri_bg d-inline-flex">
          <div className="date_bx fri_d">F</div>
          <div className="date_od">Friday</div>
        </div>
      </div>
      <div className="tm_area text-left col">
        <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
      </div>
    </div>
    <div className="d-flex row mt-7">
      <div className="col-3">
        <div className="dt_area sat_bg d-inline-flex">
          <div className="date_bx sat_d">S</div>
          <div className="date_od">Saturday</div>
        </div>
      </div>
      <div className="tm_area text-left col">
        <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
      </div>
    </div>
    <div className="d-flex row mt-7">
      <div className="col-3">
        <div className="dt_area sun_bg d-inline-flex">
          <div className="date_bx sun_d">S</div>
          <div className="date_od">Sunday</div>
        </div>
      </div>
      <div className="tm_area text-left col">
        <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
      </div>
    </div>
  </div>
  <div className="form-group d-flex mt-10 ml-5 font-size-15">
    <div class="form-check">
      <Field name="deleted" type="checkbox" id="formHorizontalCheck" class="form-check-input mt-2" />
      <label title="" for="formHorizontalCheck" class="form-check-label font-size-14 ml-3 mr-20">Apply to this week</label>
    </div>
    <div class="form-check">
    <Field name="push_notifications_on" type="checkbox" id="formHorizontalCheck1" class="form-check-input mt-2" />
      <label title="" for="formHorizontalCheck1" class="form-check-label font-size-14 ml-3">Apply to this month</label>
    </div>
  </div>
</div>
<div className="form-group flex-wrap flex-center">
<button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6">
  <span>Next</span>
</button>
</div>
</Form>
                )}
              </Formik>
            </div>

          </>
        );
      }
      else {
        return (
          <>


          </>
        );
      }
    }

  }
  else {
    return (
      <>
        <div className="text-left mb-6">
          <h1 className="font-size-28 color_3F4772 text-capitalize font-weight-600 mb-10">Business Info:</h1>
        </div>
        <div className="business_info">
          <Formik
            initialValues={initialValues}
            onSubmit={
              fields => {
                alert(JSON.stringify(fields, null, 2))
                
                AddUser(fields);
                handleNext()

              }}
          >
            {({ values, errors, touched, handleSubmit, onChange }) => (
              <Form onSubmit={handleSubmit}  >
              <div className="w-100 mh-100 text-center rightPanel">
                <div className="text-left mb-6">
                  <h1 className="font-size-28 color_3F4772 text-capitalize font-weight-600 mb-10">Choose your business hours:</h1>     
                  <p className=" "> <span></span></p> 
                </div>
                <div className="d-flex font-size-16 font-weight-500 pb-8 border-bottom">
                  <div className="wal_clk">
                  <img src="/media/auth-screen/wall_clock.svg" alt="thumbs-up" /> <span>Time Zone:</span>
                  </div>
                  <div className="tim_zne">
                  <FormControl className={classes.formControl}>
              
              <Field name="time_Zone" component={Select}
                
                type="text"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                (GMT +05:00) Kolkata, India
                </MenuItem>
                <MenuItem value="(GMT +05:00) Kolkata, India">(GMT +05:00) Kolkata, India</MenuItem>
                <MenuItem value="(GMT +05:00) Kolkata, India">(GMT +05:00) Kolkata, India</MenuItem>
                <MenuItem value="(GMT +05:00) Kolkata, India">(GMT +05:00) Kolkata, India</MenuItem>
              </Field>
            </FormControl>
                  </div>
                </div>
                <div className="d-flex mt-10">
                  <div className="date_bx sun_d">S</div>
                  <div className="date_bx mon_d">M</div>
                  <div className="date_bx tue_d">T</div>
                  <div className="date_bx wed_d">W</div>
                  <div className="date_bx thu_d">T</div>
                  <div className="date_bx fri_d">F</div>
                  <div className="date_bx sat_d">S</div>
                </div>
                <div className="date_sec text-left">
                  <div className="d-flex row mt-7">
                    <div className="col-3">
                      <div className="dt_area mon_bg d-inline-flex">
                        <div className="date_bx mon_d">M</div>
                        <div className="date_od">Monday</div>
                      </div>
                    </div>
                    <div className="tm_area text-left col">
                      <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
                    </div>
                  </div>
                  <div className="d-flex row mt-7">
                    <div className="col-3">
                      <div className="dt_area tue_bg d-inline-flex">
                        <div className="date_bx tue_d">T</div>
                        <div className="date_od">Tuesday</div>
                      </div>
                    </div>
                    <div className="tm_area text-left col">
                      <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
                    </div>
                  </div>
                  <div className="d-flex row mt-7">
                    <div className="col-3">
                      <div className="dt_area wed_bg d-inline-flex">
                        <div className="date_bx wed_d">W</div>
                        <div className="date_od">Wednesday</div>
                      </div>
                      
                    </div>
                    <div className="tm_area text-left col">
                      <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
                    </div>
                  </div>
                  <div className="d-flex row mt-7">
                    <div className="col-3">
                      <div className="dt_area thu_bg d-inline-flex">
                        <div className="date_bx thu_d">T</div>
                        <div className="date_od">Thursday</div>
                      </div>
                    </div>
                    <div className="tm_area text-left col">
                      <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
                    </div>
                  </div>
                  <div className="d-flex row mt-7">
                    <div className="col-3">
                      <div className="dt_area fri_bg d-inline-flex">
                        <div className="date_bx fri_d">F</div>
                        <div className="date_od">Friday</div>
                      </div>
                    </div>
                    <div className="tm_area text-left col">
                      <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
                    </div>
                  </div>
                  <div className="d-flex row mt-7">
                    <div className="col-3">
                      <div className="dt_area sat_bg d-inline-flex">
                        <div className="date_bx sat_d">S</div>
                        <div className="date_od">Saturday</div>
                      </div>
                    </div>
                    <div className="tm_area text-left col">
                      <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
                    </div>
                  </div>
                  <div className="d-flex row mt-7">
                    <div className="col-3">
                      <div className="dt_area sun_bg d-inline-flex">
                        <div className="date_bx sun_d">S</div>
                        <div className="date_od">Sunday</div>
                      </div>
                    </div>
                    <div className="tm_area text-left col">
                      <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
                    </div>
                  </div>
                </div>
                <div className="form-group d-flex mt-10 ml-5 font-size-15">
                  <div class="form-check">
                    <Field name="deleted" type="checkbox" id="formHorizontalCheck" class="form-check-input mt-2" />
                    <label title="" for="formHorizontalCheck" class="form-check-label font-size-14 ml-3 mr-20">Apply to this week</label>
                  </div>
                  <div class="form-check">
                  <Field name="push_notifications_on" type="checkbox" id="formHorizontalCheck1" class="form-check-input mt-2" />
                    <label title="" for="formHorizontalCheck1" class="form-check-label font-size-14 ml-3">Apply to this month</label>
                  </div>
                </div>
            </div>
            <div className="form-group flex-wrap flex-center">
              <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6">
                <span>Next</span>
              </button>
            </div>
            </Form>
            )}
          </Formik>
        </div>

      </>
    );
  }
}


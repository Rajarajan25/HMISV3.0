import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { useFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { register } from "../_redux/authCrud";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import {  useMutation,useQuery, useLazyQuery } from "@apollo/client";
import { ADD_USER,UPDATE_USER,DELETE_USER} from "./query/graphql";
import { User } from "realm-web";

const initialValues = {
  firstname: "",
  lastname:"",
  email: "",
  username: "",
  password: "",
  countrycode:"",
  gender:"",
  submitBttn: ''
};

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
  group: {
    margin: theme.spacing(1, 0),
  },
}));


function Registration(props) {

  const [deleteUser] = useMutation(DELETE_USER);
   const [addUser] = useMutation(ADD_USER);
   const [updateUser] = useMutation(UPDATE_USER);
   const AddUser = async (values) => {
     addUser({
       variables: {
         data: {
           "first_name":values.firstname,
           "last_name":values.lastname,
          "email":values.email,
          "sex":values.gender,
          "password":values.password,
          "mobile_number":values.username,
          "country_name":values.countrycode 
       }
     }
     });
   };
   const UpdateUser = async (values) => {
     updateUser({
       variables: {
         query: { "first_name":values.firstname},
         set: { "first_name": "Jenifer5" }
       }
   });
   };
   const DeleteOneUser = async (values) => {
     deleteUser({
       variables: {
         query: { "first_name":values.firstname},
         
       }
   });
   };
  
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const RegistrationSchema =Yup.object({
    firstname: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastname: Yup.string()
      .max(20, 'Must be 3 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required('Required'),
    countrycode: Yup.string()
      .required('Required'),
      gender: Yup.string()
      .required('Required'),  
  });
  const classes = useStyles();
  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
   
    initialValues,
    validationSchema:RegistrationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log("Values"+JSON.stringify(values))
      setSubmitting(true);
      enableLoading();  
if(values.submitBttn=='submit')
{
  console.log("Valuessubmitted"+JSON.stringify(values))
  register(values.email, values.lastname, values.username, values.password)
  .then(({ data: { accessToken } }) => {
    props.register(accessToken);
    disableLoading();
    AddUser(values);
    setSubmitting(false);
  })
  .catch(() => {
    setSubmitting(false);
    setStatus(
      intl.formatMessage({
        id: "AUTH.VALIDATION.INVALID_LOGIN",
      })
    );
    disableLoading();
  });
alert("Valuessubmitted"+JSON.stringify(values,null,2))
}

if(values.submitBttn=='delete')
{
  console.log("Valuesdeleted"+JSON.stringify(values))
  disableLoading();
    DeleteOneUser(values);
alert("Valuesdeleted"+JSON.stringify(values,null,2))
}
if(values.submitBttn=='update')
{
  console.log("ValuesUpdated"+JSON.stringify(values))
  disableLoading();
    UpdateUser(values);
  
alert("ValuesUpdated"+JSON.stringify(values,null,2))
}
}   
     
    
  });
console.log("FORMIK"+ JSON.stringify(formik))
  return (
  <div className="d-flex justify-content-center flex-column w-100 col-lg-10 p-0">
      
    {/* start:: Aside header */}
    <Link to="/" className="flex-column-auto pb-lg-0 pb-10 mr-auto">
      <img
        alt="Logo"
        src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
      />
    </Link>
    {/* end:: Aside header */}

    <div className="d-flex w-100 loginMaincontent shadow" >
      {/*begin::Aside*/}
      <div
        className="login-aside d-flex flex-2 bgi-size-cover bgi-no-repeat p-10 p-lg-10 col-5 order-0 rounded-left"
        style={{
          backgroundColor: `#5382FC`,
        }}
      >
        {/*
        style={{
          backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-4.jpg")})`,
        }}
        */}
        {/*begin: Aside Container*/}
        <div className="d-flex flex-row-fluid flex-column justify-content-between">

          {/* start:: Aside content */}
          <div className="flex-column-fluid d-flex flex-column justify-content-center">
                  <div className="">
                    <div className="bk_aw text-white font-weight-500 font-size-18">
                    <img src="/media/auth-screen/back_arrow.svg" className="mr-3" alt="arrow" /> <span>Back</span>
                    </div>
                    <div className="mt-12 mb-16 mb-7 mx-auto loginRightimg1  flex-column-fluid text-center">
                      <h3 className="font-size-40 text-uppercase font-weight-bold mb-10 text-white">
                      Profile info
                      </h3>
                      <p className="font-size-18  font-weight-normal text-white opacity-90 line-height32">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                    </div>
                    <div className="text-center mx-12">
                      <img src="/media/auth-screen/personalinfo_banner.svg" className="m-auto mw-100" alt="banner" />
                    </div>
                  </div>
          </div>

          
          {/* end:: Aside content */}

          {/* start:: Aside footer for desktop d-lg-flex */}
          <div className="d-none flex-column-auto  justify-content-between mt-10">
            <div className="opacity-70 font-weight-bold	text-dark">
              &copy; 2020 Metronic
            </div>
            <div className="d-flex">
              <Link to="/terms" className="text-dark font-size-14">
                Privacy
              </Link>
              <Link to="/terms" className="text-dark font-size-14 ml-10">
                Legal
              </Link>
              <Link to="/terms" className="text-dark font-size-14 ml-10">
                Contact
              </Link>
            </div>
          </div>
          {/* end:: Aside footer for desktop */}
        </div>
        {/*end: Aside Container*/}
      </div>
      {/*begin::Aside*/}
      <div className=" d-flex rounded-right bg-white registration-form login-signin mx-auto col right_banner">
        <div className="mh-100 mt-22 ml-7 p-5">
          <div className="text-left mb-6">
            <h1 className="font-size-28 ml-15 text-capitalize color_3F4772 font-weight-600 mb-10">Fill your Personal details:</h1>      
        
          </div>
          <form
            id="kt_login_signin_form"
            className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
            onSubmit={formik.handleSubmit}
          >
            {/* begin: Alert */}
            {formik.status && (
              <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
                <div className="alert-text font-weight-bold">{formik.status}</div>
              </div>
            )}
            {/* end: Alert */}
            
           

            <div className="d-flex fv-plugins-icon-container">
              <div className="form-group col-6 p-0 d-flex coun_cde">
                <div className="info_img">
                  <img src="/media/auth-screen/name.svg" className="m-auto mw-100" alt="" />
                </div>
                <div className="col">
                <label class="form-label" for="exampleForm.ControlInput1">First Name</label>
                <input
                  placeholder="First Name"
                  type="text"
                  className={`form-control py-5 px-6 ${getInputClasses(
                    "firstname"
                  )}`}
                  name="firstname"
                  {...formik.getFieldProps("firstname")}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">{formik.errors.firstname}</div>
                  </div>
                ) : null}
                </div>
              </div>
              <div className="form-group col-6">
              <label class="form-label" for="exampleForm.ControlInput1">Last Name</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  className={`form-control py-5 px-6 ${getInputClasses(
                    "lastname"
                  )}`}
                  name="lastname"
                  {...formik.getFieldProps("lastname")}
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">{formik.errors.lastname}</div>
                  </div>
                ) : null}
              </div>

            </div>

            <div className="form-group fv-plugins-icon-container d-flex">
              <div className="info_img">
                <img src="/media/auth-screen/mail.svg" className="m-auto mw-100" alt="" />
              </div>
              <div className="col">
              <label class="form-label" for="exampleForm.ControlInput1">Email Id</label>
                <input
                  placeholder="Email Id"
                  type="email"
                  className={`form-control py-5 px-6 ${getInputClasses(
                    "email"
                  )}`}
                  name="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">{formik.errors.email}</div>
                  </div>
                ) : null}
                </div>
            </div>

            <div className="form-group fv-plugins-icon-container d-flex">
              <div className="info_img">
                <img src="/media/auth-screen/password.svg" className="m-auto mw-100" alt="" />
              </div>
              <div className="col">
              <label class="form-label" for="exampleForm.ControlInput1">Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    className={`form-control py-5 px-6 ${getInputClasses(
                      "password"
                    )}`}
                    name="password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">{formik.errors.password}</div>
                    </div>
                  ) : null}
                </div>
            </div>



            <div className="d-flex fv-plugins-icon-container">
              <div className="form-group col-5 p-0 d-flex coun_cde">
                <div className="info_img">
                  <img src="/media/auth-screen/phone_icon.svg" className="m-auto mw-100" alt="" />
                </div>
                <div className="col">
                    <label class="form-label d-block" for="exampleForm.ControlInput1">Country code</label>
                    <Select
          
          
          input={<Input name="age" id="age-label-placeholder" />}
          displayEmpty
          name="age"
          className={classes.selectEmpty}
          {...formik.getFieldProps("countrycode")}
        >
          <MenuItem value="">
          India (91)
          </MenuItem>
          <MenuItem value="India (91)">India (91)</MenuItem>
          <MenuItem value="India (91)">India (91)</MenuItem>
          <MenuItem value="India (91)">India (91)</MenuItem>
        </Select>
                </div>
              </div>
              <div className="form-group col-7">
                  <label class="form-label d-block" for="exampleForm.ControlInput1">Phone Number</label>
                  <input
                    placeholder="Phone"
                    type="text"
                    className={`form-control py-5 px-6 ${getInputClasses(
                      "username"
                    )}`}
                    name="username"
                    {...formik.getFieldProps("username")}
                  />
                {formik.touched.username && formik.errors.username ? (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">{formik.errors.username}</div>
                </div>
                ) : null}
              </div>

          
            </div>


            <div className="form-group d-flex  fv-plugins-icon-container">
            <div className="info_img">
                  <img src="/media/auth-screen/sex.svg" className="m-auto mw-100" alt="" />
                </div>
                <div className="col">
                <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          {...formik.getFieldProps("gender")}
          
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          
  
        </RadioGroup>
      </FormControl>
                </div>
              
       
            </div>

      

          
            <div className="form-group flex-wrap flex-center">
            
              <button
               type="submit"
               className="btn btn-primary sign-btn ml-15 h-77 font-weight-500 mt-6"
               onClick={() => {
                formik.setFieldValue('submitBttn', 'update')
             }}
              >
                UpdateUser
              </button>
             
              <button
              type="submit"
               className="btn btn-primary sign-btn ml-15 h-77 font-weight-500 mt-6"
               onClick={() => {
                formik.setFieldValue('submitBttn', 'delete')
             }}
              >
                Delete User
              </button>
             
              <button
                type="submit"
    
                className="btn btn-primary sign-btn ml-15 h-77 font-weight-500 mt-6"   onClick={() => {
                  formik.setFieldValue('submitBttn', 'submit')
               }}
              >
                <span>Sign Up</span>
                {loading && <span className="ml-3 spinner spinner-white"></span>}
              </button>

              <Link to="/auth/login" className="d-none">
                <button type="button" className="btn btn-light-primary h-77 font-weight-bold px-9 py-4 my-3 mx-4" value="submitbutton"  >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
          
          <Link
            to="/auth/registration-confirmation"
            className="font-weight-bold ml-2 createAccountlink"
            id="kt_login_signup"
          >
            Registration Confirmation
          </Link>

        </div>
      </div>
    </div>
  </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Registration));



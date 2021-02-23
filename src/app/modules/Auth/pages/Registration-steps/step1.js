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
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { Formik, Field, Form } from 'formik';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {  useMutation,useQuery, useLazyQuery } from "@apollo/client";
import { ADD_USER,GET_USER} from "../query/graphql";
const initialValues = {
  business_id: "",
  BillingAddress: "",
  display_name: "",
  user_type: "",
  country_name: "",
  mobile_number: "",
  active: false,
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
}));


function Registration(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const RegistrationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    username: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    changepassword: Yup.string()
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      )
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Password and Confirm Password didn't match"
        ),
      }),
    acceptTerms: Yup.bool().required(
      "You must accept the terms and conditions"
    ),
  });

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
  const { handleNext } = props;
  
  const [addUser] = useMutation(ADD_USER);
  let business_name=localStorage.getItem("BusinessName")
  console.log("Businessssss"+business_name)
  const {data } = useQuery(GET_USER, {
    variables: { query: { business_id: business_name}}
  });
  console.log(data)
  const formik = useFormik({
    initialValues,
    
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setSubmitting(true);
      enableLoading();
      register(values.email, values.fullname, values.username, values.password)
        .then(({ data: { accessToken } }) => {
          props.register(accessToken);
          disableLoading();
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
    },
  });
  
  const AddUser = async (values) => {
    
    addUser({
      variables: {
        data: {
          "business_id": values.business_id,
          "BillingAddress" : values.BillingAddress,
          "display_name" : values.display_name,
          "user_type" : values.user_type,
          "country_name" : values.country_name,
          "mobile_number" : values.mobile_number,
          "active":values.active
      }
    }
    });
  };
  
  
  const classes = useStyles();
  
  if(localStorage.getItem("BackFlag")==="Y")
  {
    {
      if(data!==undefined )
      {
        return(
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
               alert(JSON.stringify(fields,null,2))
               localStorage.setItem("BusinessName",fields.business_id)
               AddUser(fields);
               handleNext()
            
              }}
              
          >
            {({ values, errors, touched, handleSubmit, onChange }) => (
              
              <Form onSubmit={handleSubmit}  >
                  {/* begin: Alert */}
                 
                  {/* end: Alert */}
      
                  {/* begin: Fullname */}
                  
                  <div className="form-group fv-plugins-icon-container d-flex">
                    <div className="info_img">
                      <img src="/media/auth-screen/identity_icon.svg" className="m-auto mw-100" alt="" />
                    </div>
                    <div className="col">
                      <label className="form-label d-block" for="exampleForm.ControlInput1">Business Name</label>
                      <Field name="business_id"
                          placeholder="Business Name"
                          type="text"
                          className={`form-control py-5 px-6 ${getInputClasses(
                            "fullname"
                          )}`}
                          
                      />
                        {formik.touched.fullname && formik.errors.fullname ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.fullname}</div>
                          </div>
                        ) : null}
                      </div>
                  </div>
                  {/* end: Fullname */}
      
                  
                  {/* begin: Fullname */}
                  <div className="form-group fv-plugins-icon-container d-flex">
                    <div className="info_img">
                      <img src="/media/auth-screen/location_icon.svg" className="m-auto mw-100" alt="" />
                    </div>
                    <div className="col">
                      <label class="form-label  d-block" for="exampleForm.ControlInput1">Your Business Address</label>
                        <Field name="BillingAddress"
                          placeholder="Your Business Address"
                          type="text"
                          className={`form-control py-5 px-6 ${getInputClasses(
                            "fullname"
                          )}`}
                          
                        />
                        {formik.touched.fullname && formik.errors.fullname ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.fullname}</div>
                          </div>
                        ) : null}
                      </div>
                  </div>
                  {/* end: Fullname */}
      
                  <div className="d-flex fv-plugins-icon-container">
                  <div className="form-group col-5 p-0 d-flex coun_cde">
                    <div className="info_img">
                      <img src="/media/auth-screen/feedback_icon.svg" className="m-auto mw-100" alt="" />
                    </div>
                        <div className="col">
                        <label class="form-label d-block" for="exampleForm.ControlInput1">Business size</label>
                        <FormControl className={classes.formControl}> 
      
                        <Field name="display_name" as="select"
                
                
                >
                  <option value="">
                  100 Person
                  </option>
                  <option value="Admin">Admin</option>
                  <option value="superAdmin">Super Admin</option>
                  <option value="User">User</option>
                </Field>
            </FormControl>
                        </div>
                    </div>
                    <div className="form-group col-7 d-flex coun_cde">
                      <div className="info_img">
                        <img src="/media/auth-screen/branch_icon.svg" className="m-auto mw-100" alt="" />
                      </div>
                      <div className="col pr-0">
                        <label class="form-label d-block" for="exampleForm.ControlInput1">Type</label>
                        <FormControl >
      
                        <Field name="user_type" as="select"
                
                
                >
                  <option value="">
                  100 Person
                  </option>
                  <option value="Admin">Admin</option>
                  <option value="superAdmin">Super Admin</option>
                  <option value="User">User</option>
                </Field>
            </FormControl>
                      </div>
                    </div>
      
                
                  </div>
                  
                  <div className="d-flex fv-plugins-icon-container">
                    <div className="form-group col-5 p-0 d-flex coun_cde">
                      <div className="info_img">
                        <img src="/media/auth-screen/phone_icon.svg" className="m-auto mw-100" alt="" />
                      </div>
                      <div className="col">
                          <label class="form-label d-block" for="exampleForm.ControlInput1">Country code</label>
                          <FormControl >
      
              <Field name="country_name" as="select"
               
              >
                <option value="India (91)">
                India (91)
                </option>
                <option value="India (91)">India (91)</option>
                <option value="India (91)">India (91)</option>
                <option value="India (91)">India (91)</option>
              </Field>
            </FormControl>
                      </div>
                    </div>
                    <div className="form-group col-7">
                        <label class="form-label d-block" for="exampleForm.ControlInput1">Phone No</label>
                        <Field 
                          placeholder="Phone"
                          className={`form-control py-5 px-6 ${getInputClasses(
                            "username"
                          )}`}
                          name="mobile_number"
                          
                        />
                      {formik.touched.username && formik.errors.username ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.username}</div>
                      </div>
                      ) : null}
                    </div>
      
                
                  </div>
           
      
                  {/* begin: Terms and Conditions */}
                  <div className="form-group d-flex ch-bx">
                    <label className="checkbox mr-auto">
                      <Field name="active"
                        type="checkbox"
                        
                        className="m-1"
                        
                      />
                      <span />
                      <Link
                        to="javascript:void(0);"
                        target="_blank"
                        className="mr-1 terms_c"
                        rel="noopener noreferrer"
                      >
                        Show my phone number & address to my clients
                      </Link>
                      
                    </label>
                    
      
                      <div className="plus_sym">
                        <img src="/media/auth-screen/plus_sym.svg" className="m-auto mw-100" alt="" />
                      </div> 
      
                  </div>
                  {/* end: Terms and Conditions */}
                  <div className="form-group d-none flex-wrap flex-center">
                    <button
                      type="submit"
                      disabled={
                        formik.isSubmitting ||
                        !formik.isValid ||
                        !formik.values.acceptTerms
                      }
                      className="btn btn-primary h-77 font-weight-bold px-9 py-4 my-3 mx-4"
                    >
                      <span>Submit</span>
                      {loading && <span className="ml-3 spinner spinner-white"></span>}
                    </button>
      
                    <Link to="/auth/login">
                      <button
                        type="button"
                        className="btn btn-light-primary h-77 font-weight-bold px-9 py-4 my-3 mx-4"
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                  <div className="form-group flex-wrap flex-center">
              <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" >
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
      else{
        return(
          <>
         
                
          </>
        );
      }
    }
   
  }
  else{
    return(
      <>
      <div className="text-left mb-6">
          <h1 className="font-size-28 color_3F4772 text-capitalize font-weight-600 mb-10">Business Info:</h1>      
        </div>
        <div className="business_info">
        <Formik
        initialValues={initialValues}
        onSubmit={
          fields => {
           alert(JSON.stringify(fields,null,2))
           localStorage.setItem("BusinessName",fields.business_id)
           AddUser(fields);
           handleNext()
        
          }}
      >
        {({ values, errors, touched, handleSubmit, onChange }) => (
          <Form onSubmit={handleSubmit}  >
              {/* begin: Alert */}
             
              {/* end: Alert */}
  
              {/* begin: Fullname */}
              <div className="form-group fv-plugins-icon-container d-flex">
                <div className="info_img">
                  <img src="/media/auth-screen/identity_icon.svg" className="m-auto mw-100" alt="" />
                </div>
                <div className="col">
                  <label className="form-label d-block" for="exampleForm.ControlInput1">Business Name</label>
                  <Field name="business_id"
                      placeholder="Business Name"
                      type="text"
                      className={`form-control py-5 px-6 ${getInputClasses(
                        "fullname"
                      )}`}
                      
                  />
                    {formik.touched.fullname && formik.errors.fullname ? (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">{formik.errors.fullname}</div>
                      </div>
                    ) : null}
                  </div>
              </div>
              {/* end: Fullname */}
  
              
              {/* begin: Fullname */}
              <div className="form-group fv-plugins-icon-container d-flex">
                <div className="info_img">
                  <img src="/media/auth-screen/location_icon.svg" className="m-auto mw-100" alt="" />
                </div>
                <div className="col">
                  <label class="form-label  d-block" for="exampleForm.ControlInput1">Your Business Address</label>
                    <Field name="BillingAddress"
                      placeholder="Your Business Address"
                      type="text"
                      className={`form-control py-5 px-6 ${getInputClasses(
                        "fullname"
                      )}`}
                      
                    />
                    {formik.touched.fullname && formik.errors.fullname ? (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">{formik.errors.fullname}</div>
                      </div>
                    ) : null}
                  </div>
              </div>
              {/* end: Fullname */}
  
              <div className="d-flex fv-plugins-icon-container">
              <div className="form-group col-5 p-0 d-flex coun_cde">
                <div className="info_img">
                  <img src="/media/auth-screen/feedback_icon.svg" className="m-auto mw-100" alt="" />
                </div>
                    <div className="col">
                    <label class="form-label d-block" for="exampleForm.ControlInput1">Business size</label>
                    <FormControl className={classes.formControl}> 
  
                    <Field name="display_name" as="select"
            
            
            >
              <option value="">
              100 Person
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
            </Field>
        </FormControl>
                    </div>
                </div>
                <div className="form-group col-7 d-flex coun_cde">
                  <div className="info_img">
                    <img src="/media/auth-screen/branch_icon.svg" className="m-auto mw-100" alt="" />
                  </div>
                  <div className="col pr-0">
                    <label class="form-label d-block" for="exampleForm.ControlInput1">Type</label>
                    <FormControl >
  
                    <Field name="user_type" as="select"
            
            
            >
              <option value="">
              100 Person
              </option>
              <option value="Admin">Admin</option>
              <option value="superAdmin">Super Admin</option>
              <option value="User">User</option>
            </Field>
        </FormControl>
                  </div>
                </div>
  
            
              </div>
              
              <div className="d-flex fv-plugins-icon-container">
                <div className="form-group col-5 p-0 d-flex coun_cde">
                  <div className="info_img">
                    <img src="/media/auth-screen/phone_icon.svg" className="m-auto mw-100" alt="" />
                  </div>
                  <div className="col">
                      <label class="form-label d-block" for="exampleForm.ControlInput1">Country code</label>
                      <FormControl >
  
          <Field name="country_name" as="select"
           
          >
            <option value="India (91)">
            India (91)
            </option>
            <option value="India (91)">India (91)</option>
            <option value="India (91)">India (91)</option>
            <option value="India (91)">India (91)</option>
          </Field>
        </FormControl>
                  </div>
                </div>
                <div className="form-group col-7">
                    <label class="form-label d-block" for="exampleForm.ControlInput1">Phone No</label>
                    <Field 
                      placeholder="Phone"
                      className={`form-control py-5 px-6 ${getInputClasses(
                        "username"
                      )}`}
                      name="mobile_number"
                      
                    />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">{formik.errors.username}</div>
                  </div>
                  ) : null}
                </div>
  
            
              </div>
       
  
              {/* begin: Terms and Conditions */}
              <div className="form-group d-flex ch-bx">
                <label className="checkbox mr-auto">
                  <Field name="active"
                    type="checkbox"
                    className="m-1"
                    
                  />
                  <span />
                  <Link
                    to="javascript:void(0);"
                    target="_blank"
                    className="mr-1 terms_c"
                    rel="noopener noreferrer"
                  >
                    Show my phone number & address to my clients
                  </Link>
                  
                </label>
                {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">{formik.errors.acceptTerms}</div>
                  </div>
                ) : null}
  
                  <div className="plus_sym">
                    <img src="/media/auth-screen/plus_sym.svg" className="m-auto mw-100" alt="" />
                  </div> 
  
              </div>
              {/* end: Terms and Conditions */}
              <div className="form-group d-none flex-wrap flex-center">
                <button
                  type="submit"
                  disabled={
                    formik.isSubmitting ||
                    !formik.isValid ||
                    !formik.values.acceptTerms
                  }
                  className="btn btn-primary h-77 font-weight-bold px-9 py-4 my-3 mx-4"
                >
                  <span>Submit</span>
                  {loading && <span className="ml-3 spinner spinner-white"></span>}
                </button>
  
                <Link to="/auth/login">
                  <button
                    type="button"
                    className="btn btn-light-primary h-77 font-weight-bold px-9 py-4 my-3 mx-4"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
              <div className="form-group flex-wrap flex-center">
          <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" >
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

export default injectIntl(connect(null, auth.actions)(Registration));

function BusinessSize() {
  
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
      <FormControl className={classes.formControl}>

        <Select
          value={values.age}
          onChange={handleChange}
          input={<Input name="age" id="age-label-placeholder" />}
          displayEmpty
          name="age"
          className={classes.selectEmpty}
        >
          <MenuItem value="">
          100 Person
          </MenuItem>
          <MenuItem value={10}>01</MenuItem>
          <MenuItem value={20}>02</MenuItem>
          <MenuItem value={30}>03</MenuItem>
        </Select>
      </FormControl>
  );
}
function BusinessType() {
  
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
      <FormControl className={classes.formControl}>

        <Select
          value={values.age}
          onChange={handleChange}
          input={<Input name="age" id="age-label-placeholder" />}
          displayEmpty
          name="age"
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            Type
          </MenuItem>
          <MenuItem value={10}>01</MenuItem>
          <MenuItem value={20}>02</MenuItem>
          <MenuItem value={30}>03</MenuItem>
        </Select>
      </FormControl>
  );
}
function CountryCode() {
  
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
 
  return (
      <FormControl className={classes.formControl}>
 
        <Select
          value={values.age}
          onChange={handleChange}
          input={<Input name="age" id="age-label-placeholder" />}
          displayEmpty
          name="age"
          className={classes.selectEmpty}
        >
          <MenuItem value="">
          India (91)
          </MenuItem>
          <MenuItem value={10}>India (91)</MenuItem>
          <MenuItem value={20}>India (91)</MenuItem>
          <MenuItem value={30}>India (91)</MenuItem>
        </Select>
      </FormControl>
  );
}


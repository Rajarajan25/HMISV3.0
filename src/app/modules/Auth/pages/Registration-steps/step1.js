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
import { InputField, CheckboxField, SelectField } from './FormFields';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';



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
  const {
    formField: {
      business_name,
      business_address,
      business_size,
      business_type,
      country_code,
      phone_number,
      business,
      spa_type,
      acceptTerms
    }
  } = props;
  let initialValues=props.formField
  const [loading, setLoading] = useState(false);
  

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
    
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setSubmitting(true);
      enableLoading();
      // register(values.email, values.fullname, values.username, values.password)
      //   .then(({ data: { accessToken } }) => {
      //     props.register(accessToken);
      //     disableLoading();
      //     setSubmitting(false);
      //   })
      //   .catch(() => {
      //     setSubmitting(false);
      //     setStatus(
      //       intl.formatMessage({
      //         id: "AUTH.VALIDATION.INVALID_LOGIN",
      //       })
      //     );
      //     disableLoading();
      //   });
    },
  });
  return (
    <>
    <div className="text-left mb-6">
        <h1 className="font-size-28 color_3F4772 text-capitalize font-weight-600 mb-10">Business Info:</h1>      
      </div>
      <div className="business_info">
         
            
            

            {/* begin: Fullname */}
            <div className="form-group fv-plugins-icon-container d-flex">
              <div className="info_img">
                <img src="/media/auth-screen/identity_icon.svg" className="m-auto mw-100" alt="" />
              </div>
              <div className="col">
                <label className="form-label d-block" for="exampleForm.ControlInput1">Business Name</label>
                <InputField name={business_name.name} label={business_name.label}  className={`form-control py-5 px-6 ${getInputClasses(  "fullname")}`} placeholder="Your Business Name"/>
                 
                </div>
            </div>
           
            <div className="form-group fv-plugins-icon-container d-flex">
              <div className="info_img">
                <img src="/media/auth-screen/location_icon.svg" className="m-auto mw-100" alt="" />
              </div>
              <div className="col">
                <label class="form-label  d-block" for="exampleForm.ControlInput1">Your Business Address</label>
                <InputField name={business_address.name} label={business_address.label}  className={`form-control py-5 px-6 ${getInputClasses(  "fullname")}`} placeholder="Your Business Address"/>
                  
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
                  <BusinessSize initialValues={props.formField}/>
                  </div>
              </div>
              <div className="form-group col-7 d-flex coun_cde">
                <div className="info_img">
                  <img src="/media/auth-screen/branch_icon.svg" className="m-auto mw-100" alt="" />
                </div>
                <div className="col pr-0">
                  <label class="form-label d-block" for="exampleForm.ControlInput1">Type</label>
                  <BusinessType initialValues={props.formField}/>
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
                    <CountryCode initialValues={props.formField}/>
                </div>
              </div>
              <div className="form-group col-7">
                  <label class="form-label d-block" for="exampleForm.ControlInput1">Phone No</label>
                  <InputField name={phone_number.name} label={phone_number.label}  className={`form-control py-5 px-6 ${getInputClasses(  "username")}`} placeholder="Phone"/>
                  
              </div>

          
            </div>
     

            {/* begin: Terms and Conditions */}
            <div className="form-group d-flex ch-bx">
              <label className="checkbox mr-auto">
               
                <CheckboxField className="m-1" name={acceptTerms.name}/>
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
         
          </div>
       
    </>
  );
}

export default injectIntl(connect(null, auth.actions)(Registration));

function BusinessSize(props) {
  const initialValues= props.initialValues;
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
  const age = [
    
    {
      value: "1",
      label: "01"
    },
    {
      value: "2",
      label: "02"
    },
    {
      value: "3",
      label: "03"
    }
  ];
  
  return (
      <FormControl className={classes.formControl}>

<SelectField
            name={initialValues.business_size.name}
            data={age}
            fullWidth
          />
      </FormControl>
  );
}
function BusinessType(props) {
  const initialValues= props.initialValues
  const age = [
    
    {
      value: "1",
      label: "01"
    },
    {
      value: "2",
      label: "02"
    },
    {
      value: "3",
      label: "03"
    }
  ];
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

<SelectField
            name={initialValues.business_type.name}
            data={age}
            fullWidth
            
          />
      </FormControl>
  );
}
function CountryCode(props) {
  
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
  const initialValues= props.initialValues
  const age = [
    
    {
      value: "1",
      label: "India 91"
    },
    {
      value: "2",
      label: "India 91"
    },
    {
      value: "3",
      label: "India 91"
    }
  ];
  return (
      <FormControl className={classes.formControl}>
 
 <SelectField
            name={initialValues.country_code.name}
            data={age}
            fullWidth
            
          />
      </FormControl>
  );
}

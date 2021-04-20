import React, { useState, useMemo } from "react";
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
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import countryList from 'react-select-country-list'
import Select from 'react-select';
import StepLabel from '@material-ui/core/StepLabel';
import { Formik, Field } from 'formik';
import { gql, useQuery, useMutation } from "@apollo/client";
import { BusinessContext } from '../BusinessContext';
import {StaffContext } from '../StaffContext';
import LocationSearchInput from './LocationSearchInput';
import { Options } from "devextreme-react/autocomplete";
const ADD_BUSINESS = gql`
  mutation addBusiness($business: BusinessInput) {
    addBusiness(business: $business)  {
      sub_category_ids
      phone_no
    name
    acceptTerms
   billingAddress
   size
   type
   phone_country
   phone_no
   _id
    parent_category_ids
    timezone
    applyWeek
    street
    city
    state
    zip_code
    applyMonth
    timings{
      timing{
        start_time
        end_time
      }
    }
    }
  }
`;
const GET_BUSINESS = gql`{
  getBusiness{
    sub_category_ids
    phone_no
  name
 billingAddress
 size
 type
 phone_country
 phone_no
 _id
  parent_category_ids
  timezone
  applyWeek
  applyMonth
  acceptTerms
  timings{
    timing{
      start_time
      end_time
    }
  }
  }
}`;
const UPDATE_BUSINESS = gql`
mutation updateBusiness($businessID: ID!,$business: BusinessInput) {
  updateBusiness(businessID:$businessID,business: $business)  {
    sub_category_ids
    phone_no
  name
 billingAddress
 size
 type
 phone_country
 phone_no
 _id
  parent_category_ids
  acceptTerms
  timezone
  applyWeek
  applyMonth
  timings{
    timing{
      start_time
      end_time
    }
  }
  }
}
`;
const initialValues = {
  fullname: "",
  email: "",
  username: "",
  password: "",
  changepassword: "",

  acceptTerms: false,
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
  const [business, setBusiness] = React.useContext(BusinessContext)
  const classes = useStyles();
  let business_id = localStorage.getItem("Business_id")

  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const [size,setSize]=React.useState("");
  const [type,setType]=React.useState("");
  const [phone,setPhone] =React.useState("");
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
      "You must acceptTerms the terms and conditions"
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
  const [addBusiness] = useMutation(ADD_BUSINESS)
  const [updateBusiness] = useMutation(UPDATE_BUSINESS);
  const { data } = useQuery(GET_BUSINESS);
  let currentBusiness = business.currentBusiness;


  // if(data!=undefined)
  // {
  //   currentBusiness= data.getBusiness.find(user => user._id === business_id);
  // }
  const business_size_options = [
    { value: 100, label: 100 },
    { value: 200, label: 200 },
    { value: 400, label: 400 },

  ];
  const business_type_options = [
    { value: 'HO', label: 'Head Office' },
    { value: 'Branch1', label: 'Branch1' },
    { value: 'Branch2', label: 'Branch2' },

  ];
  const handleChange = (values) => {
    let site_id = localStorage.getItem("site_id");
    let addbusiness = addBusiness({
      variables: {
        business: {
          type: values.type, name: values.name, site_id: site_id,
          size: values.size, phone_no: values.phone_no, billingAddress: values.billingAddress, phone_country: values.phone_country,acceptTerms: values.acceptTerms,
          street:values.street,state:values.state,city:values.city,zip_code:values.zip_code
        }
      }
    })
      .then(res => {
        console.log(res.data.addBusiness);
        let business_id = res.data.addBusiness._id
        localStorage.setItem("Business_id", business_id)
        setBusiness({
          type: "SET_CURRENT_BUSINESS",
          payload: values
        });

        // onStaffAdd(res.data.addSite);
      })
  }
  const handleChangess = (values) => {
    //let site_id=localStorage.getItem("site_id");
    let update_Business = updateBusiness({
      variables: {
        businessID: business_id,
        business: {
          type: values.type, name: values.name,
          size: values.size, phone_no: values.phone_no, billingAddress: values.billingAddress, phone_country: values.phone_country,acceptTerms: values.acceptTerms
        }
      }
    })
      .then(res => {
        console.log(res.data.updateBusiness);
        // let business_id=res.data.updateBusiness._id
        // localStorage.setItem("Business_id",business_id)
        setBusiness({
          type: "SET_CURRENT_BUSINESS",
          payload: res.data.updateBusiness
        });

        // onStaffAdd(res.data.addSite);
      })
  }
  console.log(business.currentBusiness)
  const formik = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,
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
  const options = useMemo(() => countryList().getData(), [])
  const [value, setValue] = React.useState("business");
  function handleChanges(event) {
    setValue(event.target.value);

  }
  let selectedSize={value:'',label:''};
  let selectedType={value:'',label:''};
  let selectedPhone={value:'',label:''};
  if(currentBusiness)
  {
    selectedSize =business_size_options.find(bus => bus.value === currentBusiness.size);
    selectedType =business_type_options.find(bus => bus.value === currentBusiness.type);
    selectedPhone =options.find(bus => bus.value === currentBusiness.phone_country);

  }
  if (localStorage.getItem("BackFlag") === "Y") {
    {
      if (currentBusiness) {
        return (
          <>
            <div className="text-left mb-5">
              <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Business Info:</h1>
            </div>
            <div className="business_info">
              <Formik
                initialValues={currentBusiness}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                  // alert(JSON.stringify(values, null, 2))
                  values.billingAddress=localStorage.getItem("Address")
                  values.state=localStorage.getItem("state")
                  values.city=localStorage.getItem("city")
                  values.zip_code=localStorage.getItem("zipcode")
                  values.street=localStorage.getItem("street")
                  values.size=size.value;
                  values.type=type.value;
                  values.phone_country=phone.value;
                  handleChangess(values);

                  handleNext()

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

                  <form className="form fv-plugins-bootstrap fv-plugins-framework" onSubmit={handleSubmit}>

                    <div className="mb-2">
                      <h2 className="d-block h4 mb-1">Choose your business type?</h2>
                      <div className="per_busi">
                        <FormControl component="fieldset" className={classes.formControl}>
                          <FormLabel component="legend">Business Type</FormLabel>
                          <RadioGroup
                            aria-label="Gender"
                            className={classes.group}
                            value={value}
                            onChange={handleChanges}
                          >


                            <FormControlLabel value="personal" control={<Radio />} label="Personal" />
                            <FormControlLabel value="business" control={<Radio />} label="Business" />
                          </RadioGroup>

                        </FormControl>
                      </div>
                    </div>

                    <div className="form-group fv-plugins-icon-container d-flex " >
                      <div className={value === "business" ? "info_img " : "info_img d-none"}>
                        <img src="/media/auth-screen/identity_icon.svg" className="m-auto mw-100" alt="" />
                      </div>
                      <div className={value === "business" ? "col " : "col d-none"}>

                        <label className="form-label d-block" for="exampleForm.ControlInput1">Business Name</label>
                        <Field
                          placeholder="Business Name"
                          type="text"
                          className={`form-control py-5 px-6 ${getInputClasses(
                            "fullname"
                          )}`}
                          name="name"

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








                        {value === "business" ? <label class="form-label  d-block" for="exampleForm.ControlInput1">Your Business Address</label> : <label class="form-label  d-block" for="exampleForm.ControlInput1">Your Address</label>}
                        <LocationSearchInput/>
                        {formik.touched.fullname && formik.errors.fullname ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.fullname}</div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    {/* end: Fullname */}

                    <div className="d-flex fv-plugins-icon-container">
                      <div className="form-group col-6 p-0 d-flex coun_cde">
                        <div className="info_img">
                          <img src="/media/auth-screen/feedback_icon.svg" className="m-auto mw-100" alt="" />
                        </div>







                        <div className="col">
                          <label class="form-label d-block" for="exampleForm.ControlInput1">Business size</label>

                          <FormControl>

                          {/* <Field name="size" component={Select} options={business_size_options} value={size} onChange={setSize} 
                          defaultValue={[business_size_options[0]]}> */}
                          <Select
      
      defaultValue={[selectedSize]}
      options={business_size_options}  onChange={setSize}
    />
                            {/* </Field> */}
                          </FormControl>


                        </div>
                      </div>
                      <div className="form-group col-6 d-flex coun_cde">
                        <div className="info_img">
                          <img src="/media/auth-screen/branch_icon.svg" className="m-auto mw-100" alt="" />
                        </div>
                        <div className="col pr-0">




                          <label class="form-label d-block" for="exampleForm.ControlInput1">Type</label>
                          <FormControl>




                          <Select
      
      defaultValue={[selectedType]}
      options={business_type_options}  onChange={setType}
    />
                          </FormControl>


                        </div>


                      </div>


                    </div>

                    <div className="d-flex fv-plugins-icon-container">
                      <div className="form-group col-6 p-0 d-flex coun_cde">
                        <div className="info_img">
                          <img src="/media/auth-screen/phone_icon.svg" className="m-auto mw-100" alt="" />
                        </div>
                        <div className="col">
                          <label class="form-label d-block" for="exampleForm.ControlInput1">Country code</label>
                          <Select
      
      defaultValue={[selectedPhone]}
      options={options}  onChange={setPhone}
    />
                        </div>
                      </div>
                      <div className="form-group col-6">
                        <label class="form-label d-block" for="exampleForm.ControlInput1">Phone No</label>
                        <Field
                          placeholder="Phone"
                          type="text"
                          className={`form-control py-5 px-6 ${getInputClasses(
                            "username"
                          )}`}
                          name="phone_no"


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
                        <Field
                          type="checkbox"
                          name="acceptTerms"
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
                    <div className="form-group flex-wrap flex-center">
                      <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" >
                        <span>Next</span>
                      </button>
                    </div>
                  </form>
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
        <div className="text-left mb-5">
          <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Business Info:</h1>
        </div>
        <div className="business_info">
          <Formik
            initialValues={{ name: '', billingAddress: '', size: 1, type: '', phone_country: '', phone_no: '', 'acceptTerms': false }}

            onSubmit={(values, { setSubmitting }) => {
               alert(JSON.stringify(values, null, 2))
              values.billingAddress=localStorage.getItem("Address")
              values.state=localStorage.getItem("state")
              values.city=localStorage.getItem("city")
              values.zip_code=localStorage.getItem("zipcode")
              values.street=localStorage.getItem("street")
              values.size=size.value
              values.type=type.value
              values.phone_country=phone.value
              handleChange(values)
              handleNext()
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

              <form className="form fv-plugins-bootstrap fv-plugins-framework" onSubmit={handleSubmit}>

                <div className="mb-2">
                  <h2 className="d-block h4 mb-1">Choose your business type?</h2>
                  <div className="per_busi">
                    <FormControl component="fieldset" className={classes.formControl}>
                      
                      <RadioGroup
                        aria-label="Gender"
                        className={classes.group}
                        value={value}
                        onChange={handleChanges}
                      >


                        <FormControlLabel value="personal" control={<Radio />} label="Personal" />
                        <FormControlLabel value="business" control={<Radio />} label="Business" />
                      </RadioGroup>

                    </FormControl>
                  </div>
                </div>

                <div className="form-group fv-plugins-icon-container d-flex " >
                  <div className={value === "business" ? "info_img " : "info_img d-none"}>
                    <img src="/media/auth-screen/identity_icon.svg" className="m-auto mw-100" alt="" />
                  </div>
                  <div className={value === "business" ? "col " : "col d-none"}>

                    <label className="form-label d-block" for="exampleForm.ControlInput1">Business Name</label>
                    <Field
                      placeholder="Business Name"
                      type="text"
                      className={`form-control py-5 px-6 ${getInputClasses(
                        "username"
                      )}`}                      name="name"

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
                    {value === "business" ? <label class="form-label  d-block" for="exampleForm.ControlInput1">Your Business Address</label> : <label class="form-label  d-block" for="exampleForm.ControlInput1">Your Address</label>}
                    <LocationSearchInput/>
                    {formik.touched.fullname && formik.errors.fullname ? (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">{formik.errors.fullname}</div>
                      </div>
                    ) : null}
                  </div>
                </div>
                {/* end: Fullname */}

                <div className="d-flex fv-plugins-icon-container">
                  <div className="form-group col-6 p-0 d-flex coun_cde">
                    <div className="info_img">
                      <img src="/media/auth-screen/feedback_icon.svg" className="m-auto mw-100" alt="" />
                    </div>
                    <div className="col">
                      <label class="form-label d-block" for="exampleForm.ControlInput1">Business size</label>
                      <FormControl>

                      <Select
      
      defaultValue={[business_size_options[0]]}
      options={business_size_options} onChange={setSize}
    />                          
                        
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group col-6 d-flex coun_cde">
                    <div className="info_img">
                      <img src="/media/auth-screen/branch_icon.svg" className="m-auto mw-100" alt="" />
                    </div>
                    <div className="col pr-0">
                      <label class="form-label d-block" for="exampleForm.ControlInput1">Type</label>
                      <FormControl>

                      <Select
      
      defaultValue={[business_type_options[0]]}
      options={business_type_options} onChange={setType}/>
                      </FormControl>
                    </div>

                  </div>


                </div>

                <div className="d-flex fv-plugins-icon-container">
                  <div className="form-group col-6 p-0 d-flex coun_cde">
                    <div className="info_img">
                      <img src="/media/auth-screen/phone_icon.svg" className="m-auto mw-100" alt="" />

                    </div>
                    <div className="col">
                      <label class="form-label d-block" for="exampleForm.ControlInput1">Country code</label>
                      <Select
      
      defaultValue={[options[0]]}
      options={options} onChange={setPhone}
    />       

                    </div>
                  </div>
                  <div className="form-group col-6">
                    <label class="form-label d-block" for="exampleForm.ControlInput1">Phone No</label>
                    <Field
                      placeholder="Phone"
                      type="text"
                      className={`form-control py-5 px-6 ${getInputClasses(
                        "username"
                      )}`}
                      name="phone_no"


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
                    <Field
                      type="checkbox"
                      name="acceptTerms"
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
                <div className="form-group flex-wrap flex-center">

                  <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" >
                    <span>Next</span>
                  </button>
                </div>

              </form>
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

function GenderGroup() {

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    group: {
      margin: theme.spacing(1, 0),
    },
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="personal" control={<Radio />} label="Personal" />
          <FormControlLabel value="business" control={<Radio />} label="Business" />


        </RadioGroup>
      </FormControl>

    </div>
  );
}

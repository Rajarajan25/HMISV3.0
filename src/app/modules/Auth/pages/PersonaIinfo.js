import React, { useState, useMemo } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Tooltip from "@material-ui/core/Tooltip";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Formik, Field,Form } from "formik";
import countryList from "react-select-country-list";
import Select from "react-select";
import * as Yup from 'yup';
import { DevAlertPopUp, DevConsoleLog } from "../../../SiteUtill";
const GET_USER = gql`
  {
    getUser {
      email
      _id
      first_name
      last_name
      user_name
      mobile_number
      url_referrer
      country_name
      sex
    }
  }
`;
const UPDATE_USER = gql`
  mutation updateUser($userID: ID!, $userIn: userInput!) {
    updateUser(userID: $userID, userIn: $userIn) {
      _id
      mobile_number
    }
  }
`;

const initialValues = {
  first_name: "",
  last_name: "",
  user_name: "",
  email:"",
  mobile_number:"",
  url_referrer:"",
  status:false,
  country_name:"",
  sex:"",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
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

 
 const PersonalInfoSchema = Yup.object().shape({
  first_name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
  last_name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
  user_name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
  mobile_number: Yup.string()
     .min(10, 'Invalid mobile number')
     .max(10, 'Invalid mobile number')
     .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
 });

function Registration(props) {
  let user_id = localStorage.getItem("UserId");
  let currentUser = [];
  const classes = useStyles();
  const { data } = useQuery(GET_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  if (data !== undefined) {
    currentUser = data.getUser.find((user) => user._id === user_id);
  }
  DevConsoleLog(currentUser);

  const changeHandler = (value) => {
    setValue(value);
  };

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (props,fieldname) => {
    if (props.touched[fieldname] && props.errors[fieldname]) {
      return "is-invalid";
    }
    if (props.touched[fieldname] && !props.errors[fieldname]) {
      return "is-valid";
    }
    return "";
  };

  return (
    <div className="d-flex justify-content-center flex-column col-xl-8 col-lg-11 wid col">
      {/* start:: Aside header */}
      <div class="d-lg-flex d-xl-flex d-md-flex d-block w-100 text-center">
        <Link to="/" className="flex-column-auto logo-tb mb-5">
          <img alt="Logo" src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")} />
        </Link>
        <span className="mob_title d-lg-none d-xl-none d-md-none d-inline-block mt-0">
          Profile info
        </span>
      </div>
      {/* end:: Aside header */}

      <div className="d-flex w-100 loginMaincontent shadow min-heis">
        {/*begin::Aside*/}
        <div
          className="login-aside d-none d-xl-flex d-lg-flex flex-2 bgi-size-cover bgi-no-repeat col-7 order-0 rounded-left"
          style={{
            backgroundColor: `#1D6AFF`,
          }}
        >
          {/*begin: Aside Container*/}
          <div className="d-flex flex-row-fluid flex-column justify-content-between">
            {/* start:: Aside content */}
            <div className="flex-column-fluid d-flex flex-column justify-content-center">
              <div className="d-flex flex-column h-100">
                <div className="bk_aw text-white font-weight-500 font-size-15 position-absolute ml-5 mt-7">
                  <img
                    src="/media/auth-screen/back_arrow.svg"
                    className="mr-2"
                    alt="arrow"
                  />{" "}
                  <span>Back</span>
                </div>
                <div className="mt-25 mb-10 mx-auto col-lg-11 col-11 flex-column-fluid text-center">
                  <h3 className="font-size-h1 text-uppercase font-weight-600 mb-5 text-white">
                    Profile info
                  </h3>
                  <p className="font-size-14 mx-auto loginRightimg1 font-weight-300 text-white line-height2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                  </p>
                </div>
                <div className="text-center mx-auto d-flex align-items-end">
                  <img
                    src="/media/auth-screen/personalinfo_banner.svg"
                    className="m-auto col-lg-10"
                    alt="banner"
                  />
                </div>
              </div>
            </div>

            {/* end:: Aside content */}

            {/* start:: Aside footer for desktop d-lg-flex */}
            <div className="d-none flex-column-auto  justify-content-between mt-10">
              <div className="opacity-70 font-weight-bold	text-dark">
                &copy; 2020 HMIS
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
        <div className="d-flex rounded-right bg-white registration-form login-signin col-xl-5 col-lg-5 col-12 right_banner">
          <div className="mh-100 ml-lg-5 ml-xl-5 ml-md-5 ml-0 mt-7 p-lg-5 p-xl-5 p-md-5 p-0 sets">
            <div className="text-left mb-8 ml-15">
              <h1 className="h2 mb-3 text-capitalize color_3F4772 font-weight-600">
                Fill Your Personal details:
              </h1>
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                DevAlertPopUp(values);
                enableLoading();
                updateUser({
                  variables: {
                    userID: user_id,
                    userIn: {
                      first_name: values.first_name,
                      last_name: values.last_name,
                      email: values.email,
                      user_name: values.user_name,
                      mobile_number: values.mobile_number,
                      url_referrer: values.url_referrer,
                      status: true,
                      country_name: value.label,
                      sex: values.sex,
                    },
                  },
                }).then((res) => {
                  DevConsoleLog(res.data.updateUser);
                  localStorage.setItem(
                    "UserMobileNo",
                    res.data.updateUser.mobile_number
                  );
                  disableLoading();
                  window.location.href = "/auth/registration-confirmation";
                });
              }}
              validationSchema={PersonalInfoSchema}
            >
              {({ errors, touched,handleChange }) => (
                <Form
                  id="kt_login_signin_form"
                  className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
                >
                  <div className="d-flex fv-plugins-icon-container">
                    <div className="form-group col-6 p-0 d-flex coun_cde">
                      <div className="info_img">
                        <img
                          src="/media/auth-screen/name.svg"
                          className="m-auto mw-100"
                          alt=""
                        />
                      </div>
                      <div className="col">
                        <label
                          class="form-label"
                          for="exampleForm.ControlInput1"
                        >
                          First Name
                        </label>
                        <Field
                          name="first_name"
                          placeholder="First Name"
                          type="text"
                          className={`form-control py-5 px-6 ${getInputClasses({touched,errors},
                            "first_name"
                          )}`}
                        />
                        {touched.first_name &&
                        errors.first_name ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              {errors.first_name}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="form-group col-6">
                      <label class="form-label" for="exampleForm.ControlInput1">
                        Last Name
                      </label>
                      <Field
                        placeholder="Last Name"
                        type="text"
                        className={`form-control py-5 px-6 ${getInputClasses({touched,errors},
                          "last_name"
                        )}`}
                        name="last_name"
                      />
                      {touched.last_name && errors.last_name ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            {errors.last_name}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-group fv-plugins-icon-container d-flex">
                    <div className="info_img">
                      <img
                        src="/media/auth-screen/mail.svg"
                        className="m-auto mw-100"
                        alt=""
                      />
                    </div>
                    <div className="col">
                      <label class="form-label" for="exampleForm.ControlInput1">
                        Email Id
                      </label>
                      <Field
                        placeholder="Email Id"
                        type="email"
                        className={`form-control py-5 px-6 ${getInputClasses({touched,errors},
                          "email"
                        )}`}
                        name="email"
                      />
                      {touched.email && errors.email ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            {errors.email}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="form-group fv-plugins-icon-container d-flex">
                    <div className="info_img">
                      <img
                        src="/media/auth-screen/name_icon.svg"
                        className="m-auto mw-100"
                        alt=""
                      />
                    </div>
                    <div className="col">
                      <label class="form-label" for="exampleForm.ControlInput1">
                        <span className="pr-2">Display Name</span>{" "}
                        <ControlledTooltips />{" "}
                      </label>
                      <Field
                        placeholder="Display Name"
                        type="text"
                        className={`form-control py-5 px-6 ${getInputClasses({touched,errors},
                          "user_name"
                        )}`}
                        name="user_name"
                      />
                      {touched.user_name && errors.user_name ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            {errors.user_name}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="d-flex fv-plugins-icon-container">
                    <div className="form-group col-6 p-0 d-flex coun_cde">
                      <div className="info_img">
                        <img
                          src="/media/auth-screen/phone_icon.svg"
                          className="m-auto mw-100"
                          alt=""
                        />
                      </div>
                      <div className="col">
                        <label
                          class="form-label d-block"
                          for="exampleForm.ControlInput1"
                        >
                          Country code
                        </label>
                        <Field
                          name="country_name"
                          options={options}
                          value={value}
                          onChange={changeHandler}
                          component={Select}
                        />
                      </div>
                    </div>
                    <div className="form-group col-6">
                      <label
                        class="form-label d-block"
                        for="exampleForm.ControlInput1"
                      >
                        Phone Number
                      </label>
                      <Field
                        placeholder="Phone"
                        type="text"
                        className={`form-control py-5 px-6 ${getInputClasses({touched,errors},
                          "username"
                        )}`}
                        name="mobile_number"
                      />
                      {touched.mobile_number &&
                      errors.mobile_number ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            {errors.mobile_number}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-group fv-plugins-icon-container d-flex">
                    <div className="info_img">
                      <img
                        src="/media/auth-screen/url_icon.svg"
                        className="m-auto mw-100"
                        alt=""
                      />
                    </div>
                    <div className="col">
                      <label class="form-label" for="exampleForm.ControlInput1">
                        <span>Personal/Business Url</span>{" "}
                      </label>
                      <Field
                        placeholder="https://www.lookman.in/"
                        type="text"
                        className={`form-control per_url py-5 px-6 ${getInputClasses({touched,errors},
                          "fullname"
                        )}`}
                        name="url_referrer"
                      />
                      {touched.url_referrer &&
                      errors.url_referrer ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            {errors.url_referrer}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-group d-flex  fv-plugins-icon-container">
                    <div className="info_img">
                      <img
                        src="/media/auth-screen/sex.svg"
                        className="m-auto mw-100"
                        alt=""
                      />
                    </div>
                    <div className="col gend">
                      <div className={classes.root}>
                        <FormControl
                          component="fieldset"
                          className={classes.formControl}
                        >
                          <FormLabel component="legend">Gender</FormLabel>
                          <Field
                            name="sex"
                            component={RadioGroup}
                            aria-label="Gender"
                            className={classes.group}
                            onChange={handleChange}
                          >
                            <FormControlLabel
                              name="sex"
                              value="male"
                              control={<Radio />}
                              label="Male"
                            />
                            <FormControlLabel
                              name="sex"
                              value="female"
                              control={<Radio />}
                              label="Female"
                            />
                          </Field>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                  <div className="form-group flex-wrap flex-center">
                    <button
                      type="submit"
                      className="btn btn-primary sign-btn ml-15 h-77 font-weight-500 mt-3"
                    >
                      <span>Sign Up</span>
                      {loading && (
                        <span className="ml-3 spinner spinner-white"></span>
                      )}
                    </button>

                    <Link to="/auth/login" className="d-none">
                      <button
                        type="button"
                        className="btn btn-light-primary h-77 font-weight-bold px-9 py-4 my-3 mx-4"
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Registration));

function ControlledTooltips() {
  const [open, setOpen] = React.useState(false);

  function handleTooltipClose() {
    setOpen(false);
  }

  function handleTooltipOpen() {
    setOpen(true);
  }

  return (
    <Tooltip
      className="font-size-14"
      onClose={handleTooltipClose}
      onOpen={handleTooltipOpen}
      open={open}
      title="Display Name"
    >
      <img src="/media/auth-screen/tool_icon.svg" className="mw-100" alt="" />
    </Tooltip>
  );
}

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

  return (
    <>
    
      <div className="text-left mb-6">
        <h1 className="font-size-30 color_01234B font-weight-600 mb-5">Fill your Personal details:</h1>      
     
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

            {/* begin: Firstname */}
            <div className="form-group fv-plugins-icon-container">
              <label class="form-label" for="exampleForm.ControlInput1">First Name</label>
                <input
                  placeholder="First Name"
                  type="text"
                  className={`form-control py-5 px-6 ${getInputClasses(
                    "fullname"
                  )}`}
                  name="fullname"
                  {...formik.getFieldProps("fullname")}
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">{formik.errors.fullname}</div>
                  </div>
                ) : null}
            </div>
            {/* end: Firstname */}

          {/* begin: Lastname */}
          <div className="form-group fv-plugins-icon-container">
              <label class="form-label" for="exampleForm.ControlInput1">Last Name</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  className={`form-control py-5 px-6 ${getInputClasses(
                    "fullname"
                  )}`}
                  name="fullname"
                  {...formik.getFieldProps("fullname")}
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">{formik.errors.fullname}</div>
                  </div>
                ) : null}
            </div>
            {/* end: Lastname */}

            {/* begin: Email */}
            <div className="form-group fv-plugins-icon-container">
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
            {/* end: Email */}

            {/* begin: Username */}
            <div className="form-group fv-plugins-icon-container">
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
            {/* end: Username */}

            <div className="d-flex fv-plugins-icon-container">
       
              <div className="form-group col-5 pl-0 coun_cde">
              <label class="form-label d-block" for="exampleForm.ControlInput1">Country code</label>
                    <CountryCode />
              </div>
              
              <div className="form-group col-7 pr-0">
                <label class="form-label d-block" for="exampleForm.ControlInput1">Phone Number</label>
                  <input
                    placeholder="Phone Number"
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

            <div className="d-flex fv-plugins-icon-container">
       
              <div className="form-group col-5 pl-0 coun_cde">
                <label class="form-label d-block" for="exampleForm.ControlInput1">Gender</label>
                
              </div>
              
              <div className="form-group col-7 pr-0">

              </div>
       
            </div>

            <div className="form-group fv-plugins-icon-container">
            <label class="form-label d-block" for="exampleForm.ControlInput1">Address</label>
                  <input
                    placeholder="Address1"
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
            <div className="form-group fv-plugins-icon-container">
              <input
                    placeholder="Address2"
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

            {/* begin: Terms and Conditions */}
            <div className="form-group ch-bx">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  className="m-1"
                  {...formik.getFieldProps("acceptTerms")}
                />
                <span />
                <Link
                  to="/terms"
                  target="_blank"
                  className="mr-1 terms_c"
                  rel="noopener noreferrer"
                >
                  I agree the Terms & Conditions
                </Link>
                
              </label>
              {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">{formik.errors.acceptTerms}</div>
                </div>
              ) : null}
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
          </form>
       
    </>
  );
}

export default injectIntl(connect(null, auth.actions)(Registration));

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

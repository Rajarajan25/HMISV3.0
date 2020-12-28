import React, { useState } from "react";
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { login } from "../_redux/authCrud";

/*
  INTL (i18n) docs:
  https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage
*/

/*
  Formik+YUP:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
*/

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

function Login(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
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
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      setTimeout(() => {
        login(values.email, values.password)
          .then(({ data: { accessToken } }) => {
            disableLoading();
            props.login(accessToken);
          })
          .catch(() => {
            disableLoading();
            setSubmitting(false);
            setStatus(
              intl.formatMessage({
                id: "AUTH.VALIDATION.INVALID_LOGIN",
              })
            );
          });
      }, 1000);
    },
  });

  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
      <Helmet  titleTemplate="HMIS | %s" title="Login Page" />
      {/* begin::Head */}
      <div className="text-left mb-10 mb-lg-15">
        <h1 className="font-size-30 color_01234B font-weight-600 mb-5">
          <FormattedMessage id="AUTH.LOGIN.TITLE" />
        </h1>
        <p className="font-size-14 text-muted font-weight-normal">
          Log in mow to access the latest insights Experience for your social media performance.
        </p>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form
        onSubmit={formik.handleSubmit}
        className="form fv-plugins-bootstrap fv-plugins-framework was-validated"
      >
        {formik.status ? (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : (
          <div className="mb-10 alert alert-custom alert-light-info alert-dismissible d-none">
            <div className="alert-text ">
              Use account <strong>admin@demo.com</strong> and password{" "}
              <strong>demo</strong> to continue.
            </div>
          </div>
        )}

        <div className="form-group fv-plugins-icon-container">
          <label class="form-label" for="exampleForm.ControlInput1">Email address</label>
          <div className="emailIcon">
            <input
              placeholder="Email"
              type="email"
              className={`form-control py-5 px-6 ${getInputClasses(
                "email"
              )}`}
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="fv-plugins-message-container invalid-feedback">
                <div className="fv-help-block">{formik.errors.email}</div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="form-group fv-plugins-icon-container">
          <label class="form-label" for="formBasicPassword">Password</label>
          <div className="passwordIcon">
            <input
              placeholder="Enter your password"
              type="password"
              className={`form-control py-5 px-6 ${getInputClasses(
                "password"
              )}`}
              name="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="fv-plugins-message-container invalid-feedback">
                <div className="fv-help-block">{formik.errors.password}</div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <div class="form-check">
            <input type="checkbox" id="formHorizontalCheck" class="form-check-input" />
            <label title="" for="formHorizontalCheck" class="form-check-label font-size-14 ml-3">Keep me signed in</label>
          </div>


          <Link
            to="/auth/forgot-password"
            className="text-hover-primary my-3 mr-2 font-weight-600 text-primary"
            id="kt_login_forgot"
          >
            <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
          </Link>
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-primary btn-block borderRadius-10 h-77 font-size-h5 font-weight-bold`}
          >
            Sign In
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center my-5">
          <span className="m-auto">OR</span>
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <button
            id="social_google_signin_submit"
            type="submit"
            className={`btn btn-default borderRadius-10 h-77 text-dark border`}
          >
            <img src="/media/auth-screen/google.svg" alt="Goolge Icon" className="mr-3 socialIcon" />
            Login using Google
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
          <button
            id="social_facebook_signin_submit"
            type="submit"
            className={`btn btn-default borderRadius-10 h-77 text-dark border`}
          >
            <img src="/media/auth-screen/facebook.svg" alt="facebook Icon" className="mr-3 socialIcon" />
            Login using Facebook
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>

         {/*begin::Content*/}
         <div className="form-group fv-plugins-icon-container mt-5">
            {/*begin::Content header*/}
            <div className="text-center mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
              <span className="font-weight-bold text-dark-50">
                Not registered yet? 
              </span>
              <Link
                to="/auth/registration"
                className="font-weight-bold ml-2 createAccountlink"
                id="kt_login_signup"
              >
                Create a new account
              </Link>
            </div>
            {/*end::Content header*/}
          </div>
      </form>
      {/*end::Form*/}
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Login));
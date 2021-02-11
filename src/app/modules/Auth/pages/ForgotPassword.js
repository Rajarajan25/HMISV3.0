import React, { useState } from "react";
import { Helmet } from 'react-helmet'
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as Yup from "yup";
import { injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { requestPassword } from "../_redux/authCrud";

const initialValues = {
  email: "",
};

function ForgotPassword(props) {
  const { intl } = props;
  const [isRequested, setIsRequested] = useState(false);
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
  });

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
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      requestPassword(values.email)
        .then(() => setIsRequested(true))
        .catch(() => {
          setIsRequested(false);
          setSubmitting(false);
          setStatus(
            intl.formatMessage(
              { id: "AUTH.VALIDATION.NOT_FOUND" },
              { name: values.email }
            )
          );
        });
    },
  });

  return (
    <>
      {isRequested && <Redirect to="/auth" />}
      {!isRequested && (
        <div className="d-flex flex-column justify-content-center w-100 h-100">
          <div class="d-lg-none d-xl-none d-md-none d-block w-100 text-center">
              <Link to="/" className="flex-column-auto logo-tb m--2 mr-auto">
                <img alt="Logo" src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")} />
              </Link>
              <span className="mob_title">Forgot Password</span>
          </div>
          <Helmet  titleTemplate="HMIS | %s" title="Login Page" />           
          <div className="d-flex flex-row-reverse w-100 loginMaincontent h-100">
            {/*begin::Login*/}
            <div className="d-flex flex-column flex-1 position-relative p-7 bg-white col bg-white bor-20">
            <div className="d-flex flex-column flex-column-fluid mx-auto h-100 col-lg-10 col-xl-7 col-12">
              

              <div className="login-form login-forgot my-auto" style={{ display: "block" }}>
                
                {/* begin::Head */}
                <div className="text-left mb-7 d-none">
                  <h1 className="font-size-30 color_01234B font-weight-600 mb-5">
                  </h1>
                  <p className="font-size-14 text-muted font-weight-normal">
                    Log in mow to access the latest insights Experience for your social media performance.
                  </p>
                </div>
                
                <div className="text-left mb-8">
                  <h1 className="font-size-h1 font-size-30 color_01234B font-weight-600 mb-2">Forgotten Password ?</h1>
                  <h1 className="font-size-h1 font-size-30 color_01234B font-weight-600 mb-5">Don't   worry,  we got you.</h1>
                  <p className="font-size-14 text-muted font-weight-normal">
                    Enter the email address associated with your account
                  </p>
                  <p className="text-muted font-weight-400">
                    <span class="alre_letter">Already a member?</span> 
                    <Link
                      to="/auth/login"
                      className="ml-3 font-weight-500 log_letter"
                      id="kt_login_signup"
                    >
                      Log in
                    </Link>
                  </p>
                </div>
                {/* end::Head */}
                  <form
                    onSubmit={formik.handleSubmit}
                    className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
                  >
                    {formik.status && (
                      <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
                        <div className="alert-text font-weight-bold">
                          {formik.status}
                        </div>
                      </div>
                    )}
                    <div className="form-group fv-plugins-icon-container">
                      <label class="form-label d-none" for="exampleForm.ControlInput1">Email address</label>
                      <div className="emailIcon1">
                        <input
                          placeholder="Email"
                          type="email"
                          className={`form-control py-5 pr-8 pl-0 rounded-0 border-top-0 border-left-0 border-right-0 ${getInputClasses(
                            "email"
                          )}`}
                          name="email"
                          {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="fv-plugins-message-container  invalid-feedback">
                            <div className="fv-help-block">{formik.errors.email}</div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="form-group d-flex flex-wrap lg-ac">
                      <button
                        id="kt_login_forgot_submit"
                        type="submit"
                        className="btn btn-primary font-size-h5 font-weight-400 px-9 py-4 my-3"
                        disabled={formik.isSubmitting}
                      >
                        Reset password
                      </button>                      
                    </div>
                    <div className="form-group d-flex flex-wrap lg-ac font-size-14 my-3"> 
                      Don't have an account?                
                      <Link
                        to="/auth/sign-up"
                        className="text-hover-primary ml-2 text-primary"
                        id="kt_login_forgot"
                      >
                        Sign up
                      </Link>
                    </div>
                  </form>
                </div>
              
              
                {/* begin::Mobile footer */}
                <div className="d-none d-xl-flex d-lg-flex d-md-flex flex-column-auto flex-column flex-sm-row  mt-5 px-5">
                  <div className="text-dark-50 font-weight-400 order-2 order-sm-1 my-2 mr-15">
                    &copy; 2020 HMIS. All rights reserved.
                  </div>
                  <div className="d-flex order-1 order-sm-2 my-2 ml-auto">
                    <Link to="/terms" className="text-dark-75 text-hover-primary">
                      Privacy
                    </Link>
                    <Link
                      to="/terms"
                      className="text-dark-75 text-hover-primary ml-4"
                    >
                      Legal
                    </Link>
                    <Link
                      to="/terms"
                      className="text-dark-75 text-hover-primary ml-4"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                {/* end::Mobile footer */}
            </div>
            </div>
          
            {/*begin::Aside*/}
            <div
                className="login-aside d-none d-xl-flex d-lg-flex flex-2 bgi-size-cover bgi-no-repeat p-10 p-lg-10 col"
                style={{
                  backgroundColor: `#fff`,
                  boxShadow: '0px 3px 6px #00000029',
                }}
              >
                {/*
                style={{
                  backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-4.jpg")})`,
                }}
                */}
                {/*begin: Aside Container*/}
                <div className="d-flex flex-row-fluid flex-column justify-content-between">
                  {/* start:: Aside header */}
                  <Link to="/" className="flex-column-auto pb-lg-0 pb-10 mb-10 col-9 mx-auto">
                    <img
                      alt="Logo"
                      src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
                    />
                  </Link>
                  {/* end:: Aside header */}

                  {/* start:: Aside content */}
                  <div className="flex-column-fluid d-flex flex-column justify-content-center">
                    <div className="m-auto loginRightimg d-flex flex-column">
                      <div className="text-center d-flex mx-7">
                        <img src="/media/auth-screen/forgot_password.svg" className="m-auto col-10" alt="Login screen" />
                      </div>
                      <div className="mt-30 flex-column-fluid d-flex flex-column text-center">                                    
                        <h1 className="font-size-30 color_01234B font-weight-600 mb-5">Welcome to HMIS!</h1>      
                        <p className="font-size-14 text-muted font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
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
          </div>
        </div>
      )}
    </>
  );
}

export default injectIntl(connect(null, auth.actions)(ForgotPassword));

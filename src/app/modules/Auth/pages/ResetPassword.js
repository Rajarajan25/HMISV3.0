import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";

const RESET_PASSWORD = gql`
  mutation submitForgetPassword($data: submitForgetPass!) {
    submitForgetPassword(data: $data)
  }
`;

const initialValues = {
  email: "basheer@lookman.in",
  password: "",
  confirmpassword: "",
};

function ResetPassword(props) {
  const { intl } = props;
  const [isRequested, setIsRequested] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(true);
  const [resetPassword] = useMutation(RESET_PASSWORD);
  const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    confirmpassword: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
  });

  const getInputClasses = (props, fieldname) => {
    if (props.touched[fieldname] && props.errors[fieldname]) {
      return "is-invalid";
    }

    if (props.touched[fieldname] && !props.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };
  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center w-100 h-lg-100 h-xl-100">
        <div className="d-flex flex-row-reverse w-100 loginMaincontent h-100">
          <div className="d-flex flex-column flex-1 position-relative p-7 bg-white col bor-20 mh_650">
            <div className="d-flex flex-column flex-column-fluid mx-auto h-100 col-lg-10 col-xl-7 col-12">

              <div className="login-form login-forgot my-auto" style={{ display: "block" }}>
                <div className="text-left mb-8">
                  <h1 className="font-size-h1 font-size-30 color_01234B font-weight-600 mb-2">Reset Password ?</h1>
                  <p className="font-size-14 text-muted font-weight-normal">
                    Password should contain at-least 8 characters and 1 Numeric Value is must
                  </p>
                </div>
                {isRequested && (
                  <div>
                    <p className="font-size-14 mx-auto loginRightimg1 font-weight-300 line-height2">
                      Your password reset successfully. Please go to <Link
                        to="/auth/login"
                        className="ml-3 font-weight-500 log_letter"
                        id="kt_login_signup"
                      >
                        Log in
                      </Link>
                    </p>
                  </div>
                )}
                {!isRequested && (
                  <Formik
                    initialValues={initialValues}
                    onSubmit={(values, { setStatus, setSubmitting }) => {
                      enableLoading();
                      setSubmitting(true);
                      resetPassword({
                        variables: {
                          data: {
                            email: values.email,
                            password: values.password,
                          },
                          // id: "e7661b58d69c37a2405e814f06466191",
                          //content:"18e4d2817b86fcf07820878f92c7430a737619aa86c0adaa5fb93873ee0de8db1af7fb41fdf3",
                        },
                      }).then((res) => {
                        setIsRequested(true);
                        setSubmitting(false);
                        disableLoading();
                      });
                    }}
                    validationSchema={ResetPasswordSchema}
                  >
                    {({ errors, touched, status, isSubmitting }) => (
                      <Form className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp">
                        {status && (
                          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
                            <div className="alert-text font-weight-bold">
                              {status}
                            </div>
                          </div>
                        )}
                        <div className="form-group fv-plugins-icon-container">
                          <Field
                            placeholder="Password"
                            type="password"
                            className={'form-control py-5 pl-0 rounded-0 border-top-0 border-left-0 border-right-0'}
                            name="password"
                          />
                          {touched.password && errors.password ? (
                            <div className="fv-plugins-message-container  invalid-feedback">
                              <div className="fv-help-block">
                                {errors.password}
                              </div>
                            </div>
                          ) : null}

                        </div>
                        <div className="form-group fv-plugins-icon-container">
                          <Field
                            placeholder="Confirm Password"
                            type="password"
                            className={'form-control py-5 pl-0 rounded-0 border-top-0 border-left-0 border-right-0'}
                            name="confirmpassword"
                          />
                          {touched.confirmpassword &&
                            errors.confirmpassword ? (
                            <div className="fv-plugins-message-container  invalid-feedback">
                              <div className="fv-help-block">
                                {errors.confirmpassword}
                              </div>
                            </div>
                          ) : null}

                        </div>
                        <div className="form-group d-flex flex-wrap lg-ac mt-8">
                          <button
                            id="kt_login_forgot_submit"
                            type="submit"
                            className="btn btn-primary font-size-h5 font-weight-400 px-9 py-4 my-3"
                            disabled={isSubmitting}
                          >
                            Reset password
                            {loading && (
                              <span className="ml-3 spinner spinner-white"></span>
                            )}
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                )}
              </div>
              {/* begin::Mobile footer */}
              <div className="d-none d-xl-flex d-lg-flex d-md-none flex-column-auto flex-column flex-sm-row  mt-5 px-5">
                <div className="text-dark-50 font-weight-400 order-2 order-sm-1 my-2 mr-15">
                  &copy; 2020 HMIS. All rights reserved.
                </div>
                <div className="d-flex order-1 order-sm-2 my-2 ml-auto">
                  <Link to="/terms" className="text-dark-75 text-hover-primary">Privacy</Link>
                  <Link to="/terms" className="text-dark-75 text-hover-primary ml-4">Legal</Link>
                  <Link to="/terms" className="text-dark-75 text-hover-primary ml-4">Contact</Link>
                </div>
              </div>
              {/* end::Mobile footer */}
            </div>
          </div>
          {/*begin::Aside*/}
          <div className="login-aside d-none d-xl-flex d-lg-flex flex-2 bgi-size-cover bgi-no-repeat p-10 p-lg-10 col"
            style={{
              backgroundColor: `#fff`,
              boxShadow: '0px 3px 6px #00000029',
            }}>
            <div className="d-flex flex-row-fluid flex-column justify-content-between">
              <Link to="/" className="flex-column-auto pb-lg-0 pb-10 mb-10 col-9 mx-auto">
                <img alt="Logo" src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")} />
              </Link>
              <div className="flex-column-fluid d-flex flex-column justify-content-center">
                <div className="m-auto loginRightimg d-flex flex-column">
                  <div className="text-center d-flex mx-7">
                    <img src="/media/auth-screen/reset-password.svg" className="m-auto col-10" alt="Login screen" />
                  </div>
                  <div className="mt-30 flex-column-fluid d-flex flex-column text-center">
                    <h1 className="font-size-30 color_01234B font-weight-600 mb-5">Welcome to HMIS!</h1>
                    <p className="font-size-14 text-muted font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default injectIntl(connect(null, auth.actions)(ResetPassword));

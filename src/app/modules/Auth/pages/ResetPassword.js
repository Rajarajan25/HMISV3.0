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

function ResetPassword(props) {
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
                      <div className="">
                        <input
                          placeholder="Password"
                          type="password"
                          className={'form-control py-5 pl-0 rounded-0 border-top-0 border-left-0 border-right-0'}
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
                    <div className="form-group fv-plugins-icon-container">
                      <div className="">
                        <input
                          placeholder="Confirm Password"
                          type="password"
                          className={'form-control py-5 pl-0 rounded-0 border-top-0 border-left-0 border-right-0'}
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
                    <div className="form-group d-flex flex-wrap lg-ac mt-8">
                      <button
                        id="kt_login_forgot_submit"
                        type="submit"
                        className="btn btn-primary font-size-h5 font-weight-400 px-9 py-4 my-3"
                        disabled={formik.isSubmitting}
                      >
                        Reset password
                      </button>                      
                    </div>
                  </form>
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
      )}
    </>
  );
}

export default injectIntl(connect(null, auth.actions)(ResetPassword));

import React, { useState } from "react";
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
    <div className="d-flex justify-content-center flex-column col-lg-8 col">      
      {/* start:: Aside header */}
      <Link to="/" className="flex-column-auto logo-tb mr-auto mb-5">
        <img
          alt="Logo"
          src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
        />
      </Link>
      {/* end:: Aside header */}

      <div className="d-flex w-100 loginMaincontent shadow min-heis" >
        {/*begin::Aside*/}
        <div
          className="login-aside d-flex flex-2 bgi-size-cover bgi-no-repeat col-5 order-0 rounded-left"
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
              <div className="d-flex flex-column h-100">
                <div className="bk_aw text-white font-weight-500 font-size-15 position-absolute ml-5 mt-7">
                <img src="/media/auth-screen/back_arrow.svg" className="mr-2" alt="arrow" /> <span>Back</span>
                </div>
                <div className="mt-25 mb-10 mx-auto loginRightimg1 col-lg-11 col-11 flex-column-fluid text-center">
                  <h3 className="font-size-h1 text-uppercase font-weight-600 mb-5 text-white">
                  Profile info
                  </h3>
                  <p className="font-size-14  font-weight-300 text-white line-height2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
                <div className="text-center mx-auto d-flex align-items-end">
                  <img src="/media/auth-screen/personalinfo_banner.svg" className="m-auto col-lg-10" alt="banner" />
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
        <div className="d-flex rounded-right bg-white login-signin col right_banner">
          <div className="mh-100 ml-5 mt-7 p-5"> 
            {isRequested && <Redirect to="/auth" />}
            {!isRequested && (
              <div className="login-form login-forgot" style={{ display: "block" }}>
                <div className="text-left mb-10 mb-lg-15">
                  <h1 className="font-size-h1font-size-30 color_01234B font-weight-600 mb-5">Forgotten Password ?</h1>
                  <p className="font-size-14 text-muted font-weight-normal">
                    Enter your email to reset your password
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
                          <div className="fv-plugins-message-container  invalid-feedback">
                            <div className="fv-help-block">{formik.errors.email}</div>
                          </div>
                        ) : null}
                      </div>
                  </div>
                  <div className="form-group d-flex flex-wrap flex-center">
                    <button
                      id="kt_login_forgot_submit"
                      type="submit"
                      className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                      disabled={formik.isSubmitting}
                    >
                      Submit
                    </button>
                    <Link to="/auth">
                      <button
                        type="button"
                        id="kt_login_forgot_cancel"
                        className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4"
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </div> 
        </div>
      </div>
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(ForgotPassword));

import React, { useState } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { register } from "../_redux/authCrud";
import HorizontalLabelPositionBelowStepper from "./Registration-steps/Registration-steps"
const initialValues = {
  fullname: "",
  email: "",
  username: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

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
    <div className="d-flex justify-content-center flex-column col-lg-8 col">
      
              {/* start:: Aside header */}
              <Link to="/" className="flex-column-auto logo-tb mr-auto mb-5">
                <img
                  alt="Logo"
                  src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
                />
              </Link>
              {/* end:: Aside header */}
          <div className="d-flex w-100 loginMaincontent shadow" >
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
                      Business Info
                      </h3>
                      <p className="font-size-14  font-weight-300 text-white line-height2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                    </div>
                    <div className="text-center mx-auto d-flex align-items-end">
                      <img src="/media/auth-screen/business_info_banner.svg" className="m-auto col-lg-10" alt="banner" />
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

        {/*begin::Login*/}
        <div className="d-flex flex-column flex-1 position-relative p-7 col order-1 rounded-right"
              style={{
                backgroundColor: `#fff`,
              }}
            >
    <div className="registration-form login-signin mx-auto col-lg-10" style={{ display: "block" }}>
      <div className="text-left mb-6 d-none">
        <h1 className="font-size-30 color_01234B font-weight-600 mb-5">
          <FormattedMessage id="AUTH.REGISTER.TITLE" />
        </h1>
        <p className="font-size-14 text-muted font-weight-normal">
          Enter your details to create your account
        </p>
      </div>
      <HorizontalLabelPositionBelowStepper />
      <form
        id="kt_login_signin_form"
        className="d-none form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
        onSubmit={formik.handleSubmit}
      >
        {/* begin: Alert */}
        {formik.status && (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        )}
        {/* end: Alert */}

        {/* begin: Fullname */}
        <div className="form-group fv-plugins-icon-container">
          <label class="form-label" for="exampleForm.ControlInput1">Full name</label>
            <input
              placeholder="Full name"
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
        {/* end: Fullname */}

        {/* begin: Email */}
        <div className="form-group fv-plugins-icon-container">
          <label class="form-label" for="exampleForm.ControlInput1">Email address</label>
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
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">{formik.errors.email}</div>
              </div>
            ) : null}
        </div>
        {/* end: Email */}

        {/* begin: Username */}
        <div className="form-group fv-plugins-icon-container">
          <label class="form-label" for="exampleForm.ControlInput1">User name</label>
            <input
              placeholder="User name"
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
        {/* end: Username */}

        <div className="form-row fv-plugins-icon-container">
          {/* begin: Password */}
          <div className="form-group col-12 col-md">
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
          {/* end: Password */}
          <div className="form-group d-none d-lg-block">&nbsp;</div>
          {/* begin: Confirm Password */}
          <div className="form-group col-12 col-md">
            <label class="form-label" for="exampleForm.ControlInput1">Confirm Password</label>
              <input
                placeholder="Confirm Password"
                type="password"
                className={`form-control py-5 px-6 ${getInputClasses(
                  "changepassword"
                )}`}
                name="changepassword"
                {...formik.getFieldProps("changepassword")}
              />
              {formik.touched.changepassword && formik.errors.changepassword ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    {formik.errors.changepassword}
                  </div>
                </div>
              ) : null}
          </div>
          {/* end: Confirm Password */}
        </div>

        {/* begin: Terms and Conditions */}
        <div className="form-group">
          <label className="checkbox">
            <input
              type="checkbox"
              name="acceptTerms"
              className="m-1"
              {...formik.getFieldProps("acceptTerms")}
            />
            <Link
              to="/terms"
              target="_blank"
              className="mr-1"
              rel="noopener noreferrer"
            >
              I agree the Terms & Conditions
            </Link>
            <span />
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.acceptTerms}</div>
            </div>
          ) : null}
        </div>
        {/* end: Terms and Conditions */}
        <div className="form-group d-flex flex-wrap flex-center">
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
    
    </div>
    </div>
   
    </div>
          
          
              {/* begin::Mobile footer */}
              <div className="d-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
                <div className="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
                  &copy; 2020 HMIS
                </div>
                <div className="d-flex order-1 order-sm-2 my-2">
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
 
  );
}

export default injectIntl(connect(null, auth.actions)(Registration));

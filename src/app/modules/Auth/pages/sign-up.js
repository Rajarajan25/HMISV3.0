
import React, { useState } from 'react';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";
import { Formik, Field } from 'formik';
import { gql, useMutation } from '@apollo/client';
import { UserContext } from './UserContext';

const ADD_SITE = gql`
  mutation addSite($site: SiteInput!) {
    addSite(site: $site)  {
      _id
    DefaultLanguageId
    DisplayOrder
    DisplayName
    status
    }
  }
`;
const ADD_USER = gql`
  mutation addUser($userIn: userInput!) {
    addUser(userIn: $userIn)  {
      _id
      email
      password_id
    }
  }
`;
const ADD_PASSWORD = gql`
  mutation addPassword($password: PasswordInput!) {
    addPassword(password: $password)  {
      _id
    }
  }
`;
const UPDATE_PASSWORD = gql`
  mutation updatePassword($passwordID:ID!,$password: PasswordInput!) {
    updatePassword(passwordID:$passwordID,password: $password)  {
      _id
    }
  }
`;
export default function Signup() {
  let site_id = "";
  let password_id = "";
  const [addSite] = useMutation(ADD_SITE)
  const [addUser] = useMutation(ADD_USER)
  const [addPassword] = useMutation(ADD_PASSWORD);
  const [updatePassword] = useMutation(UPDATE_PASSWORD);
  const [user, setUser] = React.useContext(UserContext);

  const handleChange = (values) => {
    var userLanguage = window.navigator.userLanguage || window.navigator.language;
    let addsite = addSite({
      variables: {
        site: {
          DefaultLanguageId: userLanguage, status: true, DisplayOrder: 1
        }
      }
    })
      .then(res => {
        console.log(res.data.addSite);
        site_id = res.data.addSite._id;
        localStorage.setItem("site_id", site_id)
        Add_Password(site_id, values);
        //Add_User(site_id,values)
        // onStaffAdd(res.data.addSite);
      })
  }
  const Add_Password = (site_id, values) => {
    let addpassword = addPassword({
      variables: {
        password: {
          password: values.password, password_format_id: 0
        }
      }
    })
      .then(res => {
        console.log(res.data.addPassword);
        password_id = res.data.addPassword._id;
        Add_User(site_id, values, password_id)

      })
  }
  const Add_User = (site_id, values, password_id) => {
    let adduser = addUser({
      variables: {
        userIn: {
          email: values.email, password_id: password_id, site_id: site_id, color_code: "#0A32E8"
        }
      }
    })
      .then(res => {
        console.log(res.data.addUser);
        let user_id = res.data.addUser._id

        PassWordUpdate(user_id, password_id)
        let user = [];
        user.push(res.data.addUser)
        setUser({
          type: "SET_STATE_USER",
          payload: user,
        });
        onAddUser(res.data.addUser);
        localStorage.setItem("UserId", user_id)

        window.location.href = "/auth/personalinfo";

        // onStaffAdd(res.data.addSite);
      })
  }
  const PassWordUpdate = (user_id, password_id) => {
    updatePassword({
      variables: {
        passwordID: password_id,
        password: {
          user_id: user_id
        }
      }
    })
  }
  const onAddUser = (values) => {
    setUser({
      type: "SET_CURRENT_USER",
      payload: values
    });

  }
  console.log(user)
  const [passwordShown, setPasswordShown] = useState(true);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (

    <div className="d-flex justify-content-center flex-column col-xl-8 col-lg-11 wid col">

      {/* start:: Aside header */}
      <div class="d-lg-flex d-xl-flex d-md-flex d-block w-100 text-center">
        <Link to="/" className="flex-column-auto logo-tb mb-5">
          <img
            alt="Logo"
            src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
          />
        </Link>
        <span className="mob_title d-lg-none d-xl-none d-md-none d-inline-block mt-0">Create account</span>
      </div>
      {/* end:: Aside header */}
      <div className="d-flex w-100 loginMaincontent shadow min-heis" >
        {/*begin::Aside*/}
        <div className="login-aside d-none d-xl-flex d-lg-flex flex-2 bgi-size-cover bgi-no-repeat col-7 order-0 rounded-left"
          style={{
            backgroundColor: `#1D6AFF`,
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
                <div className="mt-25 mb-10 mx-auto col-lg-11 col-11 flex-column-fluid text-center">
                  <h3 className="font-size-h1 text-uppercase font-weight-600 mb-5 text-white">
                    Create account
                      </h3>
                  <p className="font-size-14 mx-auto loginRightimg1 font-weight-300 text-white line-height2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                </div>
                <div className="text-center mx-auto d-flex align-items-end">
                  <img src="/media/auth-screen/sign_up_banner.svg" className="m-auto col-lg-10" alt="banner" />
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
        <div className="d-flex rounded-right bg-white registration-form login-signin col-xl-5 col-lg-5 col-12">
          <div className="mh-100 mt-7 p-5 mx-auto width_420">
            <div className="text-left mb-6">
              <h1 className="font-size-h1 color_3F4772 font-weight-600 tit_letter mb-4">Sign up to Hmis.</h1>
              <p className="text-muted font-weight-400 mb-8">
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




            <div className="login-signin reg_sec">
              <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  }
                  if (values.password.length < 8) {
                    errors.password = 'Minimum 8 letters required'
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  alert(JSON.stringify(values, null, 2))
                  handleChange(values)
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
                    <div className="form-group fv-plugins-icon-container mb-8">
                      <label class="d-block mb-3 font-weight-500">E-mail / Mobile Number</label>
                      <div className="">
                        <Field name="email" placeholder="9876543210" type="text" className="form-control py-5 px-6" />
                        <div className="fv-help-block">{errors.email}</div>


                      </div>
                    </div>
                    <div className="form-group fv-plugins-icon-container mb-10">
                      <label class="d-block mb-3 font-weight-500">Password</label>
                      <div className="sign_pass" onClick={togglePasswordVisiblity}>
                        <Field name="password" placeholder="Minimum 6 characters" className="form-control py-5 px-6" type={passwordShown ? "text" : "password"} />
                        <div className="fv-help-block">{errors.password}</div>

                      </div>
                    </div>
                    <div className="form-group d-flex cr_ac flex-wrap justify-content-between align-items-center mb-6">
                      <button
                        id="kt_login_signin_submit"
                        type="submit"
                        className={`btn btn-primary btn-block font-weight-400`}
                      >Create an account</button>
                    </div>
                    <div className="form-group or_bor d-flex flex-wrap justify-content-between align-items-center mb-6">
                      <span className="m-auto or_txt">Or</span>
                      <span className="border-bottom"></span>
                    </div>
                    <div className="fv-plugins-icon-container mb-10">
                      {/*begin::Content header*/}
                      {/* <div className="text-center flex-column-auto justify-content-center">
                  <span className="font-weight-500">
                  Signup with
                  </span>
                  <Link
                    to="/auth/personalinfo"
                    className="font-weight-500 ml-2 createAccountlink"
                    id="kt_login_signup"
                  >
                    Personal Information
                  </Link>
                </div> */}
                      {/*end::Content header*/}
                    </div>

                    <div className="form-group reg_icon text-center align-items-center">
                      <button
                        id="social_google_signin_submit"
                        type="submit"
                        className="soci"
                      >
                        <img src="/media/auth-screen/google.svg" alt="Goolge Icon" className="socialIcon" />

                      </button>
                      <button id="social_facebook_signin_submit" type="submit" className="soci">
                        <img src="/media/auth-screen/facebook.svg" alt="facebook Icon" className="socialIcon" />
                      </button>
                      <button
                        id="social_facebook_signin_submit"
                        type="submit"
                        className="soci"
                      >
                        <img src="/media/auth-screen/twitter.svg" alt="facebook Icon" className="socialIcon" />

                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>

          </div>

        </div>
      </div>
    </div>

  );
}

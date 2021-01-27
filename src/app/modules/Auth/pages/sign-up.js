
import React from 'react';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";

export default function step1() {
  return (
    <div className="d-flex justify-content-center flex-column w-100 col-lg-10 p-0">
      
    {/* start:: Aside header */}
    <Link to="/" className="flex-column-auto pb-lg-0 pb-10 mr-auto">
      <img
        alt="Logo"
        src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
      />
    </Link>
    {/* end:: Aside header */}
<div className="d-flex w-100 loginMaincontent shadow" >
    {/*begin::Aside*/}
    <div
              className="login-aside d-flex flex-2 bgi-size-cover bgi-no-repeat p-10 p-lg-10 col-7 order-0 rounded-left"
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
                  <div className="mx-auto loginRightimg d-flex flex-column-reverse">
                    <div className="text-center d-flex mx-12">
                      <img src="/media/auth-screen/Registration.svg" className="m-auto mw-100" alt="Login screen" />
                    </div>
                    <div className="mb-7 flex-column-fluid d-flex flex-column text-center">
                      <h3 className="font-size-h1 mb-5 text-white">
                        Welcome to HMIS!
                      </h3>
                      <p className="font-size-18 font-weight-lighter text-white opacity-90">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      </p>
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
      <div className=" d-flex registration-form login-signin mx-auto col-lg-5">
        <div className="my-auto mh-100 p-5 mx-auto">
          <div className="text-left mb-6">
            <h1 className="font-size-40 color_01234B font-weight-600 mb-5">Sign up to HMIS.</h1>      
            <p className="font-size-20 text-muted font-weight-normal">
              <span>You have an account?</span> 
              <Link
                to="/auth/login"
                className="ml-2"
                id="kt_login_signup"
              >
                Log in
              </Link>
            </p>
          </div>

          <div className="login-signin reg_sec">
            <form className="form fv-plugins-bootstrap fv-plugins-framework">
              <div className="form-group fv-plugins-icon-container">
                <label class="d-block font-size-18 mb-3 font-weight-500">Email / Mobile Number</label>
                <div className="">
                  <input placeholder="Email" type="email" className="form-control py-5 px-6 font-size-16" name="email" />
                </div>
              </div>
              <div className="form-group fv-plugins-icon-container">
                <label class="d-block font-size-18 mb-3 font-weight-500">Password</label>
                <div className="">
                  <input  placeholder="Enter your password" className="form-control py-5 px-6 font-size-16" name="password" />
                </div>
              </div>
              <div className="form-group d-flex cr_ac flex-wrap justify-content-between align-items-center">
                <button
                  id="kt_login_signin_submit"
                  type="submit"
                  className={`btn btn-primary btn-block font-size-16 font-weight-500`}
                >Create an account</button>
              </div>
              <div className="form-group or_bor d-flex flex-wrap justify-content-between align-items-center my-5">
                <span className="m-auto or_txt">Or</span>
                <span className="border-bottom"></span>
              </div>
              <div className="form-group fv-plugins-icon-container mt-5">
                {/*begin::Content header*/}
                <div className="text-center mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
                  <span className="font-weight-500">
                  Signup with
                  </span>
                  <Link
                    to="/auth/personalinfo"
                    className="font-weight-bold ml-2 createAccountlink"
                    id="kt_login_signup"
                  >
                    User Personal Information
                  </Link>
                </div>
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
                <button
                  id="social_facebook_signin_submit"
                  type="submit"
                  className="soci"
                >
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
          </div>  
        </div>
      </div>
    </div>
  </div>
  );
}

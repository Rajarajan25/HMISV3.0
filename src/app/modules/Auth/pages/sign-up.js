
import React from 'react';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";

export default function step1() {
  return (

    <div className="d-flex justify-content-center flex-column col-lg-8 wid col">

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
    <div className="login-aside d-flex flex-2 bgi-size-cover bgi-no-repeat col-7 order-0 rounded-left"
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
      <div className="d-flex rounded-right bg-white registration-form login-signin col-5">
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
            <form className="form fv-plugins-bootstrap fv-plugins-framework">
              <div className="form-group fv-plugins-icon-container mb-8">
                <label class="d-block mb-3 font-weight-500">E-mail / Mobile Number</label>
                <div className="">
                  <input placeholder="9876543210" type="email" className="form-control py-5 px-6" name="email" />
                </div>
              </div>
              <div className="form-group fv-plugins-icon-container mb-10">
                <label class="d-block mb-3 font-weight-500">Password</label>
                <div className="sign_pass">
                  <input  placeholder="Minimum 6 characters" className="form-control py-5 px-6" name="password" />
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
                <div className="text-center flex-column-auto justify-content-center">
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

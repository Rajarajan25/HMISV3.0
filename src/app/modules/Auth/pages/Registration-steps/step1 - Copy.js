
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { Link } from "react-router-dom";

export default function step1() {
  return (
    <>
      <div className="my-auto mh-100 p-5">
      <div className="text-left mb-6">
        <h1 className="font-size-40 color_01234B font-weight-600 mb-5">Sign up to HMIS.</h1>      
        <p className="font-size-20 text-muted font-weight-normal"><span>You have an account?</span> <Link
                          to="/auth/login"
                          className="ml-2"
                          id="kt_login_signup"
                        >
                         Log in
                        </Link></p>
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
    </>
  );
}

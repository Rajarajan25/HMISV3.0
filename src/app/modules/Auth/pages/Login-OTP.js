import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";
import OtpInput from 'react-otp-input';

export default class LoginOTP extends Component{

  state = { otp: '' }; 
  
  handleChange = otp => this.setState({ otp });

  render() {
    return (
    <>
        <div className="d-flex flex-column justify-content-center w-100 h-100 h-lg-100 h-xl-100">
            <div class="d-lg-none d-xl-none d-md-flex d-block w-100 text-center">
              <Link to="/" className="flex-column-auto logo-tb logo-log m--2">
                <img alt="Logo" src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")} />
              </Link>
              <span className="mob_title d-md-none">Login Your Account</span>
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
                
                <div className="text-left mb-10">
                  <h1 className="font-size-h1 font-size-30 color_01234B font-weight-600 mb-2">Enter One Time Password(OTP)</h1>
                  <p className="font-size-14 text-muted font-weight-normal">
                    One Time Password(OTP) has been sent to your Mobile Number,  Please enter the same here to login 
                  </p>
                </div>
                {/* end::Head */}
                  <form
                    className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
                  >
                    <div className="form-group fv-plugins-icon-container">
                      <div className="emailIcon1 d-flex mx-auto justify-content-center">
                        <OtpInput
                          value={this.state.otp}
                          onChange={this.handleChange}
                          className="loginOTP"
                          numInputs={4}
                          //separator={<span>-</span>}
                        />                        
                      </div>
                    </div>
                    <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
                      <div class="form-check mx-auto">
                        <input type="checkbox" id="formHorizontalCheck" class="form-check-input" />
                        <label title="" for="formHorizontalCheck" class="form-check-label font-size-14 ml-3">Resend OTP</label>
                      </div>                      
                    </div>

                    <div className="form-group d-flex flex-wrap lg-ac">
                      <button
                        id="kt_login_forgot_submit"
                        type="submit"
                        className="btn btn-primary font-size-h5 font-weight-400 px-9 py-4 my-3 mx-auto"
                      >
                        continue to Login
                      </button>
                    </div>
                    <div className="form-group lg-ac font-size-14 my-3 text-center"> 
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
                <div className="d-none d-xl-flex d-lg-flex d-md-none flex-column-auto flex-column flex-sm-row  mt-5 px-5">
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
                        <img src="/media/auth-screen/OTP_Web.svg" className="m-auto col-10" alt="Login screen" />
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
     
    </>
  );
}
}

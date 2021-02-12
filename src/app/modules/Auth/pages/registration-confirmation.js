
import React from 'react';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";


export default function RegistrationConfirmatoin() {
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
      <span className="mob_title d-lg-none d-xl-none d-md-none d-inline-block mt-0">Welcome to our Business!</span>
    </div>
      {/* end:: Aside header */}

      <div className="d-flex w-100 loginMaincontent shadow min-heis position-relative" >
        {/*begin::Aside*/}
        <div
          className="login-aside d-none d-xl-flex d-lg-flex flex-2 bgi-size-cover bgi-no-repeat col-7 order-0 rounded-left"
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
                    Welcome to our Business!!
                  </h3>
                  <p className="font-size-14 mx-auto loginRightimg1 font-weight-300 text-white line-height2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
                <div className="text-center mx-auto d-flex align-items-end">
                  <img src="/media/auth-screen/reg_con_banner.svg" className="m-auto col-lg-10" alt="banner" />
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
        <div className=" d-flex rounded-right bg-white registration-form login-signin mx-auto reg_con col-xl-5 col-lg-5 col-12">
          <div className="d-flex m-auto">
            <div class="loginRightimg col-lg-10 col-xl-9 ml-xl-18 ml-lg-10 ml-0">
            <img src="/media/auth-screen/welcome_img.svg" className="d-block d-xl-none d-lg-none d-md-none wlcme mw-100" alt="" />
              <div className="text-left mb-6">
                <h1 className="h1 color_3F4772 font-weight-600 d-flex my-auto"><span className="my-auto">Welcome, Saga</span> <img src="/media/auth-screen/clapping.svg" alt="clap" className="ml-3" /> <img src="/media/auth-screen/clapping.svg" alt="clap" className="ml-3" /></h1>      
                <p className="font-size-18 wl_txt mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="form-group flex-wrap flex-center">
                <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6">
                  <span>Let’s Start</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}


import React from 'react';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";


export default function RegistrationConfirmatoin() {
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
          className="login-aside d-flex flex-2 bgi-size-cover bgi-no-repeat p-10 p-lg-10 col-4 order-0 rounded-left"
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
        <div className=" d-flex registration-form login-signin mx-auto col">
          <div className="my-auto mh-100 p-5 mx-auto">
            <div class="busi_reg mt-30">
              <div className="text-left mb-6">
                <h1 className="font-size-28 color_01234B font-weight-600 mb-10">Welcome, Saga <img src="/media/auth-screen/clapping.svg" alt="clap" className="ml-3" /> <img src="/media/auth-screen/clapping.svg" alt="clap" className="ml-3" /></h1>      
                <p className="font-size-24 wl_txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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

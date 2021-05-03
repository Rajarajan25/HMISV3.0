import React from "react";
import { connect } from "react-redux";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import HorizontalLabelPositionBelowStepper from "./Registration-steps/Registration-steps";
function Registration(props) {
  return (
    <div className="d-flex justify-content-center flex-column col-xl-8 col-lg-11 wid col">
      {/* start:: Aside header */}
      <div class="d-lg-flex d-xl-flex d-md-flex d-block w-100 text-center">
        <Link to="/" className="flex-column-auto logo-tb mb-5">
          <img alt="Logo" src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")} />
        </Link>
        <span className="mob_title d-lg-none d-xl-none d-md-none d-inline-block mt-0">
          Business Info
        </span>
      </div>
      {/* end:: Aside header */}

      <div className="d-flex w-100 loginMaincontent shadow">
        {/*begin::Aside*/}
        <div className="login-aside d-none d-xl-flex d-lg-flex flex-2 bgi-size-cover bgi-no-repeat col-5 order-0 rounded-left"
          style={{backgroundColor: `#1D6AFF`}}>
          {/*begin: Aside Container*/}
          <div className="d-flex flex-row-fluid flex-column justify-content-between">
            {/* start:: Aside content */}
            <div className="flex-column-fluid d-flex flex-column justify-content-center">
              <div className="d-flex flex-column h-100">
                <div className="bk_aw d-none text-white font-weight-500 font-size-15 position-absolute ml-5 mt-7">
                  <img
                    src="/media/auth-screen/back_arrow.svg"
                    className="mr-2"
                    alt="arrow"
                  />{" "}
                  <span>Back</span>
                </div>
                <div className="mt-25 mb-10 mx-auto loginRightimg1 col-lg-11 col-11 flex-column-fluid text-center">
                  <h3 className="font-size-h1 text-uppercase font-weight-600 mb-5 text-white">
                    Business Info
                  </h3>
                  <p className="font-size-14  font-weight-300 text-white line-height2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                  </p>
                </div>
                <div className="text-center mx-auto d-flex align-items-end">
                  <img
                    src="/media/auth-screen/business_info_banner.svg"
                    className="m-auto col-lg-10"
                    alt="banner"
                  />
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
        <div className="d-flex position-relative bg-white registration-form login-signin rounded-right col">
          <div className="mx-auto mt-7 p-0 col-lg-11 pb-75">
            <HorizontalLabelPositionBelowStepper />
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
          <Link to="/terms" className="text-dark-75 text-hover-primary ml-4">
            Legal
          </Link>
          <Link to="/terms" className="text-dark-75 text-hover-primary ml-4">
            Contact
          </Link>
        </div>
      </div>
      {/* end::Mobile footer */}
    </div>
  );
}
export default injectIntl(connect(null, auth.actions)(Registration));

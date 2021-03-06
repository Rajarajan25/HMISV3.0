/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import Login from "./Login";
import Registration from "./Registration";
import Personalinfo from "./PersonaIinfo";
import EmailVerification from "./EmailVerification";
import RegistrationConfirmation from "./RegistrationConfirmation";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import LoginOTP from "./LoginOTP";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import {UserProvider} from './UserContext'
import {BusinessProvider} from './BusinessContext';
import {StaffProvider} from './StaffContext';
import ResetPassword from "./ResetPassword"
export function AuthPage() {
  
  return (
    <>
    <UserProvider>
    <BusinessProvider>
      <StaffProvider>
      <div className="d-flex flex-column flex-root">
        {/*begin::Login*/}
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg_gry"
          id="kt_login"
        >
          <div className="d-flex justify-content-center w-100 loginMaincontent h-md-100">
            {/*begin::Content*/}
            <div className="position-relative p-0 col order-1  col-12 col">
              
              {/* begin::Content body */}
              <div className="d-flex flex-column-fluid flex-center mt-5 mt-lg-0 h-100">
                <Switch>
                  <ContentRoute path="/auth/login" component={Login} />
                  
                  <ContentRoute
                    path="/auth/registration"
                    component={Registration}
                  />
                  
                  <ContentRoute
                    path="/auth/forgot-password"
                    component={ForgotPassword}
                  />
                  <ContentRoute
                    path="/auth/emailverify"
                    component={EmailVerification}
                  />

                  <ContentRoute
                    path="/auth/reset-password"
                    component={ResetPassword}
                  />

                  <ContentRoute
                    path="/auth/Login-OTP"
                    component={LoginOTP}
                  />
                  <ContentRoute
                    path="/auth/sign-up"
                    component={Signup}
                  />
                  <ContentRoute
                    path="/auth/personalinfo"
                    component={Personalinfo}
                  />
                  <ContentRoute
                    path="/auth/registration-confirmation"
                    component={RegistrationConfirmation}
                  />
                  <Redirect from="/auth" exact={true} to="/auth/login" />
                  <Redirect to="/auth/login" />
                </Switch>
              </div>
              {/*end::Content body*/}

            </div>
            {/*end::Content*/}

            {/*begin::Aside*/}
            <div
              className="login-aside d-none flex-2 bgi-size-cover bgi-no-repeat p-10 p-lg-10 col order-0"
              style={{
                backgroundColor: `#E0F4FF`,
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
                  <div className="m-auto loginRightimg">
                    <div className="text-center d-flex">
                      <img src="/media/auth-screen/login-right.png" className="m-auto mw-100" alt="Login screen" />
                    </div>
                    <div className="mt-10 flex-column-fluid d-flex flex-column text-center">
                      <h3 className="font-size-h1 mb-5 text-dark">
                        Welcome to HMIS!
                      </h3>
                      <p className="font-size-18 font-weight-lighter text-dark opacity-80">
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
          </div> 
        </div>
        {/*end::Login*/}
      </div>
      </StaffProvider>
      </BusinessProvider>
      </UserProvider>
    </>
    
  );
}

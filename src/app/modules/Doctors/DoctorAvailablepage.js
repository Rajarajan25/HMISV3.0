import React from "react";
import { Redirect, BrowserRouter as  Router, Switch, Route, Link } from "react-router-dom";
import { useSubheader } from "../../../_metronic/layout";
import AccountInformation from "./AccountInformation";
import { ProfileOverview } from "./ProfileOverview";
import ChangePassword from "./ChangePassword";
import PersonaInformation from "./PersonaInformation";
import EmailSettings from "./EmailSettings";
import { ProfileCard } from "./components/ProfileCard";
import { Filter } from "./components/Filter";
import { ListActivity01, ListActivity02, ListActivity03, ListActivity04 } from "./components/ListActivity";

export default function DoctorAvailablepage() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Staff Management");

  return (

    <div className="d-block">
      <div className="d-flex flex-row">        
        <Filter></Filter>
      </div>
      <div className="d-flex flex-column mt-15">
        <div className="pageTitlecontent">
          <div className="d-flex">
            <div className="toggleLeftHeadericon mr-2">
            <Router>
              <Link 
                to="javascript:void(0)" 
                data-toggle="collapse" 
                data-target="#holepageToggle" 
                className="borderColor11 textColor11"
              >
                <i className="fa fa-angle-down"></i>
              </Link>       
              </Router>             
            </div>
            <div className="pageTitle d-flex w-100">
              <span className="d-flex">Staff</span>
              <span className="d-flex">
                <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.5.5a.5.5 0 00-1 0v1.519c-1.204.09-2.489.504-3.468 1.298a4.36 4.36 0 00-1.1 1.31l-1.553.388A.5.5 0 000 5.5v3a.5.5 0 00.379.485l1.78.445c.48.892 1.142 1.68 1.81 2.31a9.55 9.55 0 001.644 1.253 5 5 0 00.726.36c.215.084.446.147.661.147.215 0 .446-.063.661-.147a5 5 0 00.726-.36 9.551 9.551 0 001.643-1.254c.668-.629 1.332-1.417 1.811-2.309l1.78-.445A.5.5 0 0014 8.5v-3a.5.5 0 00-.379-.485l-1.553-.388a4.36 4.36 0 00-1.1-1.31c-.98-.794-2.264-1.208-3.468-1.298V.5zM1.672 8.278a5.365 5.365 0 01-.165-.696A4.966 4.966 0 011.52 5.76L1 5.89v2.22l.672.168zM13 8.11l-.672.168c.07-.228.126-.46.165-.696a4.967 4.967 0 00-.014-1.822l.521.13v2.22zM3.662 4.094c.774-.628 1.822-.984 2.838-1.072V4.5a.5.5 0 001 0V3.022c1.016.088 2.064.444 2.838 1.072.876.71 1.426 1.783 1.169 3.324-.225 1.347-1.138 2.63-2.162 3.593a8.562 8.562 0 01-1.466 1.12 4.02 4.02 0 01-.578.29A.993.993 0 017 12.5a.993.993 0 01-.301-.08 4.02 4.02 0 01-.578-.288 8.562 8.562 0 01-1.466-1.121c-1.024-.964-1.937-2.246-2.162-3.593-.257-1.541.293-2.614 1.169-3.324zm2.691 5.552a.5.5 0 00-.707.708L6 10l-.353.354.001.001.003.003.007.007a1.56 1.56 0 00.103.093c.066.056.16.132.274.208.213.142.565.334.965.334s.752-.192.965-.334a2.898 2.898 0 00.354-.279l.016-.015.007-.007.007-.007.003-.003.001-.001L8 10l.354.354a.5.5 0 00-.706-.709h-.001v.001l-.01.01-.048.042a1.889 1.889 0 01-.179.136C7.248 9.942 7.1 10 7 10c-.1 0-.248-.058-.41-.166a1.889 1.889 0 01-.226-.178l-.01-.01zM4.75 6a.75.75 0 00-.75.75v1a.75.75 0 001.5 0v-1A.75.75 0 004.75 6zm3.75.75a.75.75 0 011.5 0v1a.75.75 0 01-1.5 0v-1z"></path></svg>
              </span>
            </div>
          </div>
        </div>
        <div className="contentSection collapse show w-100" id="holepageToggle">
          <ListActivity01></ListActivity01>
          <ListActivity02></ListActivity02>
          <ListActivity03></ListActivity03>
          <ListActivity04></ListActivity04>
        </div>
      </div>
      
      <div className="d-none flex-row">
        <ProfileCard></ProfileCard>
        <div className="flex-row-fluid ml-lg-8">
          <Switch>
            <Redirect
              from="/manage/available-doctors"
              exact={true}
              to="/manage/available-doctors"
            />
            <Route
              path="/manage/available-doctors"
              component={ProfileOverview}
            />
            <Route
              path="/manage/available-doctors/account-information"
              component={AccountInformation}
            />
            <Route
              path="/manage/available-doctors/change-password"
              component={ChangePassword}
            />
            <Route
              path="/manage/available-doctors/email-settings"
              component={EmailSettings}
            />
            <Route
              path="/manage/available-doctors/personal-information"
              component={PersonaInformation}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

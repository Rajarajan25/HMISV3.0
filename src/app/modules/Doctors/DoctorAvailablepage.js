import React from "react";
import { Redirect, BrowserRouter as  Router, Switch, Route, Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
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
      <div className="d-flex flex-column mt-1">
        <div className="add-staff">
            <Link to="#"><img src={toAbsoluteUrl("/media/patients/add_staff.svg")} alt="" className="d-block rounded-circle" /></Link>
         </div> 
        <div className="contentSection collapse show w-100">
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

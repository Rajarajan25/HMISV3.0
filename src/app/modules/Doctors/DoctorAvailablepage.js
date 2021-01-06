import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
  suhbeader.setTitle("User profile");

  return (

    <div className="d-block">
      <div className="d-flex flex-row">        
        <Filter></Filter>
      </div>
      <div className="d-flex">
        <div className="contentSection collapse show w-100 mt-15" id="holepageToggle">
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
              from="/available-doctors"
              exact={true}
              to="/available-doctors/profile-overview"
            />
            <Route
              path="/available-doctors/profile-overview"
              component={ProfileOverview}
            />
            <Route
              path="/available-doctors/account-information"
              component={AccountInformation}
            />
            <Route
              path="/available-doctors/change-password"
              component={ChangePassword}
            />
            <Route
              path="/available-doctors/email-settings"
              component={EmailSettings}
            />
            <Route
              path="/available-doctors/personal-information"
              component={PersonaInformation}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

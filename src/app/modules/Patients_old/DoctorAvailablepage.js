import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSubheader } from "../../../_metronic/layout";
import AccountInformation from "./AccountInformation";
import { ProfileOverview } from "./ProfileOverview";
import ChangePassword from "./ChangePassword";
import PersonaInformation from "./PersonaInformation";
import EmailSettings from "./EmailSettings";
import { ProfileCard } from "./components/ProfileCard";

export default function PatientListpage() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("User profile");

  return (

    <div className="d-block">
      <div className="d-flex flex-row">
        test
      </div>
      <div className="d-flex flex-row">
        <ProfileCard></ProfileCard>
        <div className="flex-row-fluid ml-lg-8">
          <Switch>
            <Redirect
              from="/manage/available-doctors"
              exact={true}
              to="/manage/available-doctors/profile-overview"
            />
            <Route
              path="/manage/available-doctors/profile-overview"
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

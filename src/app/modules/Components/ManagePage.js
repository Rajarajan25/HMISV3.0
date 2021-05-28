import React from "react";
import { Redirect, Switch,Route } from "react-router-dom";
import StaffPage from "../Doctors/StaffPage";
import PatientDetailspage from "../Patients/Patient-details";
import { ContentRoute } from "../../../_metronic/layout";
import ServiceProvider from "../Patients/Service-provider";
import EventDetails from "../Events/event-details";
export default function ManagePage() {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/manage"
        to="/manage/staff-management"
      />
        <Route path="/manage/staff-management" component={StaffPage} />
        <Route path="/manage/patients-details" component={PatientDetailspage} />
        <Route path="/manage/service-provider" component={ServiceProvider} />
        <Route path="/manage/event-details" component={EventDetails} />
      {/* Surfaces */}
      {/* <ContentRoute from="/manage/staff-management" component={StaffPage} /> */}

      {/* Layout */}
      {/* <ContentRoute from="/manage/patients-details" component={PatientDetailspage} /> */}

      
    </Switch>
  );
}

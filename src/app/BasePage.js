import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import Schedular from '././modules/Calendar/Schedular'
import FileUploadDemo from "./components/FileUploadDemo";

const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);
const StaffPage = lazy(() => import("./modules/Staffs/StaffPage"));
const PatientDetailspage = lazy(() =>
  import("./modules/Patients/Patient-details")
);

const ServiceProvider = lazy(() =>
  import("./modules/Patients/Service-provider")
);

const EventDetails = lazy(() =>
  import("./modules/Events/event-details")
);


export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen visible={false} />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={Schedular} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Route path="/image-upload" component={FileUploadDemo} />
        <ContentRoute path="/manage/staff-management" title="Staff Managements" component={StaffPage} />
        <Route path="/manage/patients-details" component={PatientDetailspage} />
        <ContentRoute path="/manage/service-provider" title="Services" component={ServiceProvider} />
        <Route path="/manage/event-details" component={EventDetails} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}

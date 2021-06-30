import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import Schedular from '././modules/Calendar/Schedular'

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ManagePage = lazy(() =>
  import("./modules/Manage/ManagePage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);
const StaffPage = lazy(() =>
  import("./modules/Doctors/StaffPage")
);
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
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={Schedular} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Route path="/manage" component={ManagePage} />
        {/* <Route path="/manage/staff-management" component={StaffPage} />
        <Route path="/manage/patients-details" component={PatientDetailspage} />
        <Route path="/manage/service-provider" component={ServiceProvider} />
        <Route path="/manage/event-details" component={EventDetails} /> */}
        
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}

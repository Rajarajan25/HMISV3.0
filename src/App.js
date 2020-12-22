import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import home from './pages/home';
import main from './template/layouts/main'
import Left_panel from './template/layouts/left_panel';
import Page_header from './template/layouts/page_header';
import Page_footer from './template/layouts/page_footer';
import Shortcut_modal from './template/layouts/shortcut_modal';
import Color_profile_reference from './template/layouts/color_profile_reference';
import Shortcut_menu from './template/layouts/shortcut-menu';
import Shortcut_messenger from './template/layouts/shortcut_messenger';
import Page_settings from './template/layouts/page_settings';
import intel_marketing_dashboard from './pages/intel_marketing_dashboard';
import ui_alerts from './pages/ui_alerts';
import staff from './pages/staff';
import Client from './pages/Client';
import services from './pages/services';
import Payment from './pages/Payment';
import AppointmentList from './pages/AppointmentList'
import Booking from './pages/Booking';
import AppointmentBooking from './pages/AppointmentBooking';
import User from './pages/User.js'
import ReviewList from './pages/ReviewList.js'
import FormBuild from './pages/FormBuilder.js'
import InvoiceList from './pages/InvoiceList.js'
// import service from './pages/service';

function App() {
  return (
    <div>
     <div>  
              {/* BEGIN Page Wrapper */}
              <div className="page-wrapper">
                <div className="page-inner">
                  {/* BEGIN Left Aside */}
                  <Left_panel />
                  {/* END Left Aside */}
                  <div className="page-content-wrapper">
                    {/* BEGIN Page Header */}
                    <Page_header />
                   {/* END Page Header */}
                    {/* BEGIN Page Content */}
                    {/* the #js-page-content id is needed for some plugins to initialize */}
                    <main id="js-page-content" role="main" className="page-content pl-0 pt-0 pr-2">
                    <React.Fragment>
                            <Router>
                              <Switch>
                              
                                <Route exact path="/" component= {main}/>
                                <Route exact path="/intel_analytics_dashboard.html" component= {home}/>
                                <Route exact path="/intel_marketing_dashboard.html" component= {intel_marketing_dashboard}/>
                                <Route exact path="/ui_alerts.html" component= {ui_alerts}/>
                                <Route exact path="/staff.html" component= {staff}/>
                                <Route exact path="/client.html" component= {Client}/>
                                <Route exact path="/service.html" component= {services}/>
                                <Route exact path="/payment.html" component={Payment}/>
                                <Route exact path="/appointmentlist.html" component={AppointmentList}/>
                                <Route exact path="/Booking.html" component={Booking}/>
                                <Route exact path="/AppointmentBooking.html" component={AppointmentBooking}/>
                                <Route exact path="/User.html" component={User}/>
                                <Route exact path="/FormBuilder.html" component={FormBuild}/>
                                <Route exact path="/ReviewList.html" component={ReviewList}/>
                                <Route exact path="/Invoice.html" component={InvoiceList}/>

                                {/* <Route exact path="/service.html" component= {service}/> */}
                                
                               
                                {/* <Route exact path="/about" Component= {about}/>
                                <Route exact path="/test" Component= {test}/> */}
                              </Switch>
                            </Router>
                    </React.Fragment>
                    </main>
                    {/* this overlay is activated only when mobile menu is triggered */}
                    <div className="page-content-overlay" data-action="toggle" data-class="mobile-nav-on" /> {/* END Page Content */}
                    {/* BEGIN Page Footer */}
                    <Page_footer />
                   
                    {/* END Page Footer */}
                    {/* BEGIN Shortcuts */}
                   <Shortcut_modal />
                   {/* END Shortcuts */}
                    {/* BEGIN Color profile */}
                    {/* this area is hidden and will not be seen on screens or screen readers */}
                    {/* we use this only for CSS color refernce for JS stuff */}
                  <Color_profile_reference />
                  
                  {/* END Color profile */}
                  </div>
                </div>
              </div>
              {/* END Page Wrapper */}
              {/* BEGIN Quick Menu */}
              {/* to add more items, please make sure to change the variable '$menu-items: number;' in your _page-components-shortcut.scss */}
             <Shortcut_menu />
             {/* END Quick Menu */}
              {/* BEGIN Messenger */}
             <Shortcut_messenger />
              {/* END Messenger */}
              {/* BEGIN Page Settings */}
              <Page_settings />
            {/* END Page Settings */}
            </div>
    </div>
  );
}

export default App;
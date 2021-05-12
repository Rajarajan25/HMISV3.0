import React from "react";
import { Redirect, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Filter } from "./components/Filter";
import ServiceProviderHeader from "./components/service-provider-header";
import  ServiceProviderContainer  from "./components/Service-provider-container";
import { useSubheader } from "../../../_metronic/layout";
import {ServiceProviders} from './components/ServiceContext'
export default function ServiceProvider() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Services");
  return (
    <ServiceProviders>
    <div className="d-block">
      <div className="d-flex flex-row">        
        <Filter></Filter>
      </div>
      <div className="d-flex flex-column mt-1"> 
        <div className="contentSection collapse show w-100" id="holepageToggle">
          <ServiceProviderContainer />
        </div>
      </div>
    </div>
    </ServiceProviders>
  );

}

import React from "react";
import { Redirect, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Filter } from "./components/Filter";
import ServiceProviderHeader from "./components/service-provider-header";
import { ServiceProviderContainer } from "./components/Service-provider-container";
import { useSubheader } from "../../../_metronic/layout";

export default function ServiceProvider() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Services");
  return (
    <div className="pat_list">
      <div className="d-block">
        <div className="d-flex flex-row">
          <Filter></Filter>
        </div> 
        <div className="d-block mt-lg-7">
          <div className="d-flex flex-column flex-xl-row">
            <div className="col">
              <ServiceProviderContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

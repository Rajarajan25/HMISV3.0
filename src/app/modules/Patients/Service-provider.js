import React from "react";
import { Redirect, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Filters } from "./Filters";
import ServiceProviderHeader from "./components/service-provider-header";
import ServiceProviderContainer from "./components/Service-provider-container";
import { useSubheader } from "../../../_metronic/layout";
import { ServiceProviders } from './components/ServiceContext'



export default function ServiceProvider() {
  const [filterListService, setFilterListService] = React.useState({});
  const suhbeader = useSubheader();
  suhbeader.setTitle("Services");

  return (
    <ServiceProviders>
      <div className="d-block">
        <Filters></Filters>
        <ServiceProviderContainer filterListService={filterListService} />
      </div>
    </ServiceProviders>
  );

}

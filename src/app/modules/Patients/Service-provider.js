import React from "react";
import { Filters } from "./Filters";
import ServiceProviderContainer from "./components/Service-provider-container";
import { useSubheader } from "../../../_metronic/layout";
import { ServiceProviders } from './components/ServiceContext'



export default function ServiceProvider() {
  const [filterListService] = React.useState({});
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

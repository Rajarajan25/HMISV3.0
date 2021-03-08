import React from "react";
import { Redirect, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Filter } from "./components/Filter";
import { AsideSearch } from "./components/Patient-list-search";
import { PatientList } from "./components/Patient";
import ServiceProviderHeader from "./components/service-provider-header";
import { ServiceProviderContainer } from "./components/Service-provider-container";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

export default function ServiceProvider() {
  return (
    <div className="pat_list">
      <div className="d-block">
        <div className="d-flex flex-row">
          <Filter></Filter>
        </div>
        <div className="d-block mt-lg-5">
          <div className="d-flex flex-column flex-xl-row">
            <div className="col">
              <ServiceProviderHeader />
            </div>
          </div>
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

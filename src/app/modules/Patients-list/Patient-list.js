import React from "react";
import { Redirect, BrowserRouter as  Router, Switch, Route, Link } from "react-router-dom";
import { useSubheader } from "../../../_metronic/layout";
import AccountInformation from "./AccountInformation";
import { ProfileOverview } from "./ProfileOverview";
import ChangePassword from "./ChangePassword";
import PersonaInformation from "./PersonaInformation";
import EmailSettings from "./EmailSettings";
import { ProfileCard } from "./components/ProfileCard";
import { Filter } from "./components/Filter";
import { ListActivity01, ListActivity02, ListActivity03, ListActivity04 } from "./components/ListActivity";

export default function PatientList() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("User profile");

  return (
  <div className="pat_list">
    <div className="d-block">
      <div className="d-flex flex-row">        
        <Filter></Filter>
      </div>
      <div className="d-block mt-15">
        <div className="d-flex">        
            <div className="col wid_360">
              <div className="d-flex align-items-center flex-wrap card_bg">
                <div className="symbol symbol-50 symbol-light">
                  <span className="symbol-label"><img src="metronic/react/demo3/media/svg/misc/006-plurk.svg" alt="" className="h-50 align-self-center" /></span>
                </div>
                <div className="d-flex flex-column card_txt">
                  <a href="#" className="font-weight-bolder text-dark-75 text-hover-primary font-size-15 mb-1">Andrea Jemmiah</a>
                  <span className="text-muted">Active</span>
                </div>
                <div className="d-flex flex-column mr-1 text-right font-size-12">
                  <span className="text-muted">Nov 4, 2020</span>
                  <span className="text-muted">10.30 AM</span>
                </div>
                <div className="d-flex flex-column min_20 text-right">
                  <a class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"><i class="ki ki-bold-more-ver"></i></a>
                </div>
              </div>
            </div>
            <div className="col">
              
            </div>
        </div>
      </div>
    </div>
  </div>
  );
}

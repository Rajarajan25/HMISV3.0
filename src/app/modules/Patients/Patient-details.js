import React from "react";
import { Filter } from "./components/Filter";
import { AsideSearch } from "./components/Patient-list-search";
import { PatientList } from "./components/Patient";
import { PatientDetailsTab } from "./components/Patient-details-tab";
import { NewCustomer } from "./components/new_customer";
import { useSubheader } from "../../../_metronic/layout";

export default function PatientDetails() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Patient Management");
  return (
  <div className="pat_list">
    <div className="d-block">
      <div className="d-flex flex-row">        
        <Filter></Filter>
      </div>
      <div className="d-block mt-lg-3">
        <NewCustomer />
        <div className="d-flex flex-column flex-xl-row">        
            <div className="col wid_360">              
              <div className="d-flex flex-row">     
                <AsideSearch />
              </div>
              <div className="d-flex align-items-center flex-wrap patientsList card_bg selectedUser">
                <PatientList />
              </div>
              <div className="d-flex align-items-center flex-wrap patientsList card_bg">
                <PatientList />
              </div>
              <div className="d-flex align-items-center flex-wrap patientsList card_bg">
                <PatientList />
              </div>
              <div className="d-flex align-items-center flex-wrap patientsList card_bg">
                <PatientList />
              </div>
              <div className="d-flex align-items-center flex-wrap patientsList card_bg">
                <PatientList />
              </div>
            </div>
            <div className="col">
              <PatientDetailsTab />
            </div>
        </div>
      </div>
    </div>
  </div>
  );
}
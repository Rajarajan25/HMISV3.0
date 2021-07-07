import React from "react";
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

export function PatientList() {
  return (
    <div className="d-flex w-100">
      <Helmet  titleTemplate="HMIS | %s" title="Patient Details" />
      <div className="symbol symbol-50 symbol-light">
        <span className="symbol-label">
          <img
            alt="patient" 
            className="mh-100 rounded-circle align-self-center"
            src={toAbsoluteUrl("/media/users/300_20.jpg")}
          />
        </span>
      </div>
      <div className="d-flex flex-column w-100">
        <div className="d-flex mb-1">
          <Link 
            to="#" 
            className="font-weight-500 font-size-14 userName"
            >
              Andrea Jemmiah
          </Link>
          <span className="my-auto ml-auto font-size-12">Nov 4, 2020</span>
        </div>
        <div className="d-flex font-size-12">
          <span className="status pl-3 online">Active</span>
          <span className="my-auto ml-auto">10.30 AM</span>
        </div>
      </div>
      <div className="d-flex flex-column text-right">
        <Link to="#" className="my-auto ml-2"><i className="ki ki-bold-more-ver font-size-18"></i></Link>
      </div>
    </div>
  );
}

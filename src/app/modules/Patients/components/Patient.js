import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

export function PatientList() {
  return (
    <div className="d-flex w-100">
      <div className="symbol symbol-50 symbol-light">
        <span className="symbol-label">
          <img
            alt="patient image" 
            className="mh-100 rounded-circle align-self-center"
            src={toAbsoluteUrl("/media/users/300_20.jpg")}
          />
        </span>
      </div>
      <div className="d-flex flex-column w-100">
        <div className="d-flex mb-1">
          <Link 
            to="#" 
            className="font-weight-500 font-size-15 userName"
            >
              Andrea Jemmiah
          </Link>
          <span className="my-auto ml-auto">Nov 4, 2020</span>
        </div>
        <div className="d-flex font-size-12">
          <span className="status pl-3 online">Active</span>
          <span className="my-auto ml-auto">10.30 AM</span>
        </div>
      </div>
      <div className="d-flex flex-column text-right">
        <a class="my-auto ml-2"><i class="ki ki-bold-more-ver font-size-18"></i></a>
      </div>
    </div>
  );
}

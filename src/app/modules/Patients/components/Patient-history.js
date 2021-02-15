import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

export function PatientHistory() {
  return (
    <div className="d-flex w-100 patientFiles mx-2">
      <div className="symbol symbol-50 symbol-light mr-3">
        <span className="symbol-label">
          <img
            alt="patient image" 
            className="mh-100 rounded align-self-center"
            src={toAbsoluteUrl("/media/users/300_20.jpg")}
          />
        </span>
      </div>
      <div className="d-flex flex-column w-100">
        <div className="d-flex my-auto">
          <Link 
            to="#" 
            className="font-weight-500 font-size-14 userName"
            >
              Check up result.pdf
          </Link>
          <span className="my-auto ml-auto font-size-12">12kb</span>
        </div>
      </div>
    </div>
  );
}
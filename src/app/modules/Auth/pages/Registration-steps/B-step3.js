
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { Link } from "react-router-dom";


export default function step5() {
  return (
    <>
      <div className="my-auto mh-100 mx-5 p-5 text-center rightPanel">
        <div className="text-left mb-6">
          <h1 className="font-size-30 color_01234B font-weight-600 mb-5">Choose your Category types:</h1>      
          <p className="font-size-14 text-muted font-weight-normal">Enter your details to create your account</p>
        </div>
        <div className="d-flex flex-column">
          <div>
          <Link
              to="#"
              className="subCategory"
            >
              <span className="catIcon rounded-circle mr-4">S</span>
              <span>Spa</span>
            </Link>
            <Link
              to="#"
              className="subCategory active"
            >
              <span className="catIcon rounded-circle mr-4">S</span>
              <span>Spa</span>
            </Link>
            <Link
              to="#"
              className="subCategory"
            >
              <span className="catIcon rounded-circle mr-4">S</span>
              <span>Spa</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

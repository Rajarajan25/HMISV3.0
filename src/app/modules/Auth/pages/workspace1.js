
import React from 'react';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";

export default function WorkSpace1() {
  return (
    <div className="workspace position-relative bg-white p-7 col bor-20 h-100">
  <div className="d-flex justify-content-center flex-column col-xl-7 col-lg-11 wid col">
    <div class="d-none w-100 text-center">
      <Link to="/" className="flex-column-auto logo-tb mb-5">
        <img
          alt="Logo"
          src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
        />
      </Link>
      <span className="mob_title d-lg-none d-xl-none d-md-none d-inline-block mt-0">Gopi</span>
    </div>
    <div className="d-flex w-100 loginMaincontent min-heis" >
      <div className="d-flex w-100">
        <Link to="/" className="flex-column-auto logo-tb mb-5">
          <img alt="Logo" src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")} />
        </Link>
        <div className="ml-10 mt-5 workspace-con">
          <h1>Workspace Name</h1>
          <div className="input-contain">
            <input type="text" placeholder="Email" name="" className="" />
          </div>
          <div className="space-btn">
            <button type="submit" className="btn btn-btn-primary">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

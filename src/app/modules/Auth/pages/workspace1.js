
import React from 'react';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";

export default function WorkSpace1() {
  return (
    <div className="workspace position-relative bg_FAFBFC p-7 col bor-20 h-100">
      <div className="d-flex justify-content-center flex-column col-xl-9 col-lg-11 wid col">
        <Link to="/" className="cancel_clr">Cancel</Link>
      </div>
  <div className="d-flex justify-content-center flex-column col-xl-9 col-lg-11 wid col h-100 ml-35">

    <div class="d-none w-100 text-center">
      <Link to="/" className="flex-column-auto logo-tb mb-5">
        <img
          alt="Logo"
          src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
        />
      </Link>
      <span className="mob_title d-lg-none d-xl-none d-md-none d-inline-block mt-0">Workspace1</span>
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




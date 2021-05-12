
import React from 'react';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";


export default function WorkSpace3() {
  return (
    <div className="workspace position-relative bg_FAFBFC p-7 col bor-20 h-100">

  <div className="d-flex justify-content-center flex-column col-xl-9 col-lg-11 wid col h-100">

    <div class="d-none w-100 text-center">
      <Link to="/" className="flex-column-auto logo-tb mb-5">
        <img
          alt="Logo"
          src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
        />
      </Link>
      <span className="mob_title d-lg-none d-xl-none d-md-none d-inline-block mt-0">Workspace3</span>
    </div>
    <div className="d-flex w-100 loginMaincontent min-heis" >
      <div className="d-flex w-100">
        <Link to="/" className="flex-column-auto logo-tb mb-5">
          <img alt="Logo" src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")} />
        </Link>
        <div className="ml-10 mt-5 workspace-con">
          <h1>Select your business type</h1>
          <div className="serve_sec">
            <div className="row">
              <div className="col-3 px-1">
                <input type="checkbox" id="pet_box_01" />
                <label className="pat_box" for="pet_box_01">
                  <div className="d-flex serve_act">
                    <span className="privatebg">Private</span>
                    <span className="ml-auto"><span>$</span> 100</span>
                  </div>
                  <div className="d-block text-center">
                    <div className="service_img d-flex">
                      <img src={toAbsoluteUrl("/media/patients/service_icon_01.svg")} alt="" className="m-auto align-items-center" />
                    </div>
                    <div className="service_title">
                      <p>Pet Services</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="space-btn">
            <button type="submit" className="btn btn-btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}


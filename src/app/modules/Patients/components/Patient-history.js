import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

export function PatientHistory() {
  return (
    <div className="history_card w-100">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="card text-center">
            <div className="MuiAvatar-root">
              <img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="" />
            </div>
            <div className="">
              <p className="card-tit text-uppercase">Robert Y.Social</p>
              <div className="card-sss-tit">
              <img src={toAbsoluteUrl("/media/users/location.svg")} alt="" width="5" className="" /><span>12 km</span><img src={toAbsoluteUrl("/media/users/ages.svg")} alt="" width="5" className="" /><span>40y old</span>
              </div>
            </div>
            <div className="d-flex border-top">
              <div className="flex-fill py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Show on Map</span></div>
              <div className="flex-fill border-left py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Send Message</span></div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            2
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            3
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            4
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            5
          </div>
        </div>
      </div>
    </div>
  );
}
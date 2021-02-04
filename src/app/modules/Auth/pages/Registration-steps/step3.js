
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { Link } from "react-router-dom";


export default function step3() {
  return (
    <>
      <div className="w-100 mh-100 text-center rightPanel">
        <div className="text-left mb-6">
          <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose your Salon types:</h1>      
        </div>
        <div className="d-flex">
          <div className="d-flex _2FwA">
              <input type="checkbox" id="hair" name="salon" className="checkbx" />
              <label className="subCategory" for="hair">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Hair Salon</span>
              </label>
          </div>
          <div className="d-flex _2FwA">
              <input type="checkbox" id="nail" name="salon" className="checkbx" />
              <label className="subCategory" for="nail">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Nail Salon</span>
              </label>
          </div>
          <div className="d-flex _2FwA">
              <input type="checkbox" id="barber" name="salon" className="checkbx" />
              <label className="subCategory" for="barber">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Barbershop</span>
              </label>
          </div>
          <div className="d-flex _2FwA">
              <input type="checkbox" id="eyebrows" name="salon" className="checkbx" />
              <label className="subCategory" for="eyebrows">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Eyebrows & Lashes</span>
              </label>
          </div>
          <div className="d-flex _2FwA">
              <input type="checkbox" id="tattoo" name="salon" className="checkbx" />
              <label className="subCategory" for="tattoo">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Tattoo & Piercing</span>
              </label>
          </div>
          <div className="d-flex _2FwA">
              <input type="checkbox" id="beauty" name="salon" className="checkbx" />
              <label className="subCategory" for="beauty">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Beauty Salon</span>
              </label>
          </div>
          <div className="d-flex _2FwA">
              <input type="checkbox" id="gym" name="salon" className="checkbx" />
              <label className="subCategory" for="gym">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Gym & Fitness</span>
              </label>
          </div>
          <div className="d-flex _2FwA">
              <input type="checkbox" id="waxing" name="salon" className="checkbx" />
              <label className="subCategory" for="waxing">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Waxing Salon</span>
              </label>
          </div>
          <div className="d-flex _2FwA">
              <input type="checkbox" id="therapy" name="salon" className="checkbx" />
              <label className="subCategory" for="therapy">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Therapy Center</span>
              </label>
          </div>
          <div className="d-flex _2FwA">
              <input type="checkbox" id="massage" name="salon" className="checkbx" />
              <label className="subCategory" for="massage">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Massage</span>
              </label>
          </div>
          <div className="d-flex _2FwA">
              <input type="checkbox" id="personal" name="salon" className="checkbx" />
              <label className="subCategory" for="personal">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Personal Trainer</span>
              </label>
          </div>
          <div className="d-flex _2FwA">
              <input type="checkbox" id="spa" name="salon" className="checkbx" />
              <label className="subCategory" for="spa">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Spa</span>
              </label>
          </div>
          <div className="d-flex _2FwA">
              <input type="checkbox" id="tanning" name="salon" className="checkbx" />
              <label className="subCategory" for="tanning">
                  <i className="catIcon rounded-circle mr-4">S</i>
                  <span className="chk_txt">Tanning Studio</span>
              </label>
          </div>
        <div>
      </div>
      </div>
      </div>
 
    </>
  );
}

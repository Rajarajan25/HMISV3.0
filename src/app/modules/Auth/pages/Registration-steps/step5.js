
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { Link } from "react-router-dom";


export default function step5() {
  return (
    <>
      <div className="my-auto mh-100 mx-5 p-5 text-center rightPanel">
        <div className="text-left mb-6">
          <h1 className="font-size-28 color_01234B font-weight-600 mb-10">Choose your Salon types:</h1>      
        </div>
        <div className="d-flex">
            <div className="d-flex _2FwA">
                <input type="checkbox" id="hair" name="salon" className="checkbx" />
                <label className="subCategory" for="hair">
                    <i className="catIcon rounded-circle mr-4">S</i>
                    <span className="chk_txt">spa</span>
                </label>
            </div>
            <div className="d-flex _2FwA">
                <input type="checkbox" id="nail" name="salon" className="checkbx" />
                <label className="subCategory" for="nail">
                    <i className="catIcon rounded-circle mr-4">S</i>
                    <span className="chk_txt">spa</span>
                </label>
            </div>
            
          <div>

          </div>
        </div>
      </div>
    </>
  );
}

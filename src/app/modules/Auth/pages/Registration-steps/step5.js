
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";


export default function step5() {
  return (
    <>
      <div className="my-auto mh-100 text-center rightPanel">
        <div className="text-left mb-6">
          <h1 className="font-size-30 color_01234B font-weight-600 mb-5">Choose your Salon types:</h1>      
        </div>
        <section className="p-3">
          <div className="col">
            <label className="btn btn-rounded form-check-label waves-effect waves-light"><input type="checkbox" className="form-check-input" autocomplete="off" /> Hair Salon </label>
          </div>
        </section>
      </div>
    </>
  );
}

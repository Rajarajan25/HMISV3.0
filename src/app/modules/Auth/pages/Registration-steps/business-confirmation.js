
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";

export default function BusinessConfirmatoin() {

  return (
    <>
    <div class="busi_col">
      <div class="busi_con col-lg-10 col-xl-10 col-12">
      <img src={toAbsoluteUrl("/media/auth-screen/busi_image.svg")} className="d-block d-xl-none d-lg-none d-md-none busicme mw-100" alt="" />
      <div className="text-left mb-6">
      <h1 class="h1 color_3F4772 font-weight-600 d-flex my-auto"><span class="mr-3 mt-8"> Congrats!!! Sagayaraj </span> <img src={toAbsoluteUrl("/media/auth-screen/thumbs-up.svg")} alt="thumbs-up" /></h1>      
        <p className="font-size-18 wl_txt mt-10">https://lookman.bitrix24.com/stream/?current_fieldset= SOCSERV</p>
      </div>
      <div className="form-group flex-wrap flex-center">
        <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6">
          <span>Open Url</span>
        </button>
      </div>
      </div>
      </div>
    </>
  );
}

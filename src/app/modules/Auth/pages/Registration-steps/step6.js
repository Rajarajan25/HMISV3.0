
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";


export default function step5() {
  return (
    <>
        <div className="my-auto mh-100 mx-5 p-5 text-center rightPanel">
          <div className="text-left mb-6">
            <h1 className="font-size-28 color_01234B font-weight-600 mb-10">Choose your business hours:</h1>     
            <p className="tim_zne font-size-16 pb-8 border-bottom">Time Zone: <span>(GMT +05:00) Kolkata, India</span></p> 
          </div>
          <div className="d-flex">
            <div className="date_bx sun_d">S</div>
            <div className="date_bx mon_d">M</div>
            <div className="date_bx tue_d">T</div>
            <div className="date_bx wed_d">W</div>
            <div className="date_bx thu_d">T</div>
            <div className="date_bx fri_d">F</div>
            <div className="date_bx sat_d">S</div>
          </div>
          <div className="date_sec text-left">
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area mon_bg d-inline-flex">
                  <div className="date_bx mon_d">M</div>
                  <div className="date_od">Monday</div>
                </div>
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area tue_bg d-inline-flex">
                  <div className="date_bx tue_d">T</div>
                  <div className="date_od">Tuesday</div>
                </div>
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area wed_bg d-inline-flex">
                  <div className="date_bx wed_d">W</div>
                  <div className="date_od">Wednesday</div>
                </div>
                
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area thu_bg d-inline-flex">
                  <div className="date_bx thu_d">T</div>
                  <div className="date_od">Thursday</div>
                </div>
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area fri_bg d-inline-flex">
                  <div className="date_bx fri_d">F</div>
                  <div className="date_od">Friday</div>
                </div>
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area sat_bg d-inline-flex">
                  <div className="date_bx sat_d">S</div>
                  <div className="date_od">Saturday</div>
                </div>
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area sun_bg d-inline-flex">
                  <div className="date_bx sun_d">S</div>
                  <div className="date_od">Sunday</div>
                </div>
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>

          </div>
      </div>
    </>
  );
}

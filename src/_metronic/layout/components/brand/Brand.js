import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_helpers";

export function Brand() {
  return (
    <>
      {/* begin::Brand */}
      <div
        className={`aside-brand d-flex flex-column align-items-center flex-column-auto`}
      >
        {/* begin::Logo */}
        <Link to="" className="brand-logo">
          <img
            alt="logo"
            src={toAbsoluteUrl("/media/logos/Logo-HMIS.png")}
            className="max-h-30px d-none"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 430.386 349">
                <g id="Group_1361" data-name="Group 1361" transform="translate(16895.193 10094)">
                  <rect id="Rectangle_180" data-name="Rectangle 180" width="61" height="303" rx="30.5" transform="translate(-16539 -10072)" fill="#fed157"></rect>
                  <rect id="Rectangle_177" data-name="Rectangle 177" width="61" height="349" rx="30.5" transform="translate(-16781 -10094)" fill="#fed157"></rect>
                  <rect id="Rectangle_179" data-name="Rectangle 179" width="61" height="349" rx="30.5" transform="translate(-16642 -10094)" fill="#9983fc"></rect>
                  <rect id="Rectangle_175" data-name="Rectangle 175" width="61" height="303" rx="30.5" transform="translate(-16882 -10072)" fill="#9983fc"></rect>
                  <rect id="Rectangle_176" data-name="Rectangle 176" width="61" height="303" rx="30.5" transform="translate(-16895.193 -10043.06) rotate(-45)" fill="#fd76c0"></rect>
                  <rect id="Rectangle_178" data-name="Rectangle 178" width="61" height="303" rx="30.5" transform="translate(-16679.061 -9827.807) rotate(-135)" fill="#62e7cb"></rect>
                  <path id="Intersection_1" data-name="Intersection 1" d="M183.193,44.194a30.889,30.889,0,0,1,8.326-21.14l1.322-1.326.17-.169a31,31,0,0,1,52.182,22.635v5.455a30.966,30.966,0,0,1-8.511,16.04l-53.489,53.637Z" transform="translate(-16722.193 -10086.693)" fill="#feb92a"></path>
                  <path id="Intersection_2" data-name="Intersection 2" d="M80.194,142.865l61-61v86.267l-61,61Z" transform="translate(-16722.193 -10094)" fill="#48d4e4"></path>
                  <path id="Intersection_3" data-name="Intersection 3" d="M114.194,165.135V78.867l61,61v86.267Z" transform="translate(-16895.193 -10094)" fill="#fd5e5e"></path>
                  <path id="Intersection_4" data-name="Intersection 4" d="M21.7,65.68a30.973,30.973,0,0,1-8.511-16.04V45.194a31,31,0,1,1,62,0v74.133Z" transform="translate(-16896.193 -10088.193)" fill="#fd52b0"></path>
                </g>
              </svg>
        </Link>
        {/* end::Logo */}
      </div>
      {/* end::Brand */}
    </>
  );
}

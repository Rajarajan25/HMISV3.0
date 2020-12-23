import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_helpers";

export function Brand() {
  return (
    <>
      {/* begin::Brand */}
      <div
        className={`aside-brand d-flex flex-column align-items-center flex-column-auto py-5 py-lg-4`}
      >
        {/* begin::Logo */}
        <Link to="" className="brand-logo">
          <img
            alt="logo"
            src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
            className="max-w-100"
          />
        </Link>
        {/* end::Logo */}
      </div>
      {/* end::Brand */}
    </>
  );
}

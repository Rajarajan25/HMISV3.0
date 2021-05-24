/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_helpers";

export function QuickActions() {
  return (
    <>
      {/* begin::Quick Actions Panel */}
      <div id="kt_quick_actions" className="offcanvas offcanvas-left p-10">
        {/* begin::Header */}
        <div className="offcanvas-header d-flex align-items-center justify-content-between pb-10">
          <h3 className="font-weight-bold m-0">
            Quick Actions
            <small className="text-muted font-size-sm ml-2">
              {""}
            </small>
          </h3>
          <a
            href="#"
            className="btn btn-xs btn-icon btn-light btn-hover-primary"
            id="kt_quick_actions_close"
          >
            <i className="ki ki-close icon-xs text-muted"></i>
          </a>
        </div>
        {/* end::Header */}

        {/* begin::Content */}
        <div className="offcanvas-content pr-5 mr-n5">
        </div>
        {/* end::Content */}
      </div>
      {/* end::Quick Actions Panel */}
    </>
  );
}

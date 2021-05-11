/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import { useSelector } from "react-redux";
//import SVG from "react-inlinesvg";
import objectPath from "object-path";
//import { toAbsoluteUrl } from "../../../_helpers";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { UserProfileDropdown } from "./dropdowns/UserProfileDropdown";

export function QuickUserToggler() {
  // const { user } = useSelector((state) => state.auth);
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas:
        objectPath.get(uiService.config, "extras.user.layout") === "offcanvas",
    };
  }, [uiService]);

  return (
    <>
      {layoutProps.offcanvas && (
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="quick-user-tooltip" className="tool_bg">User Profile</Tooltip>}
        >
          <div
            className="d-flex flex-column text-center w-100 leftMenuuserprofileicon"
            id="kt_quick_user_toggle"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            offcanvas="overlay: false"
          >
            <span className="symbol userIcon symbol-30 symbol-lg-40">
              <span className="svg-icon svg-icon-lg">
                AS
              </span>
            </span>
            <span className="symbol userIcon symbol-30 symbol-lg-40 bg-primary">
              <span className="svg-icon svg-icon-lg">
                A
              </span>
            </span>
          </div>
        </OverlayTrigger>
      )}

      {!layoutProps.offcanvas && <UserProfileDropdown />}
    </>
  );
}

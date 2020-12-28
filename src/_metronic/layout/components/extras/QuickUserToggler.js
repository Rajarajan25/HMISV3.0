/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import { useSelector } from "react-redux";
import SVG from "react-inlinesvg";
import objectPath from "object-path";
import { toAbsoluteUrl } from "../../../_helpers";
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
          overlay={<Tooltip id="quick-user-tooltip">User Profile</Tooltip>}
        >
          <div
            className="d-inline-block w-40px text-center"
            id="kt_quick_user_toggle"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            offcanvas="overlay: false"
          >
            <span className="symbol symbol-30 symbol-lg-40">
              <span className="svg-icon svg-icon-lg">
                <SVG src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")} />
              </span>
            </span>
            <span className="symbol symbol-30 symbol-lg-40 mt-n5 bg-primary">
              <span className="svg-icon svg-icon-lg">
                <SVG src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")} />
              </span>
            </span>
          </div>
        </OverlayTrigger>
      )}

      {!layoutProps.offcanvas && <UserProfileDropdown />}
    </>
  );
}

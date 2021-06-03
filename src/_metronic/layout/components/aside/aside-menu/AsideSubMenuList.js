/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import {
  DropdownItemToggler,
  DropdownMenu4,
} from "../../../../_partials/dropdowns";



export function AsideSubMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  return (
    <div className="pt-2">
     
      <div className="d-flex position-relative customSearch">
        <span className="my-auto">HMIS</span>
        <div className="menuquickIconset d-flex ml-auto my-auto">
          <Dropdown drop="down" alignRight>
            <Dropdown.Toggle
              as={DropdownItemToggler}
              id="kt_quick_actions_search_toggle"
            >
              <OverlayTrigger
                placement="left"
                overlay={
                  <Tooltip id="quick-search-tooltip" className="tool_bg">Quick search</Tooltip>
                }
              >
                <a
                  href="#"
                  className="h-40px w-40px flex-shrink-0"
                >
                  <span className="svg-icon svg-icon-sm">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/Custom/Settings.svg")}
                    />
                  </span>
                </a>
              </OverlayTrigger>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-md">
              <DropdownMenu4 />
            </Dropdown.Menu>
          </Dropdown>
          <a
            href="#"
            className="mx-3  flex-shrink-0"
          >
            <span className="svg-icon svg-icon-sm searchIcon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Custom/Search.svg")}
              />
            </span>
          </a>
        </div>
     
        {/* begin::Form */}
        <div className="searchInput d-none">
          <form>
            <div className="d-flex">
              <div className="input-icon h-40px w-100">
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid h-40px"
                  placeholder="Search..."
                  id="generalSearch"
                  autoComplete="false"
                />
                <span>
                  <span className="svg-icon svg-icon-lg">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/General/Search.svg")}
                    />
                  </span>
                </span>
              </div>

              
            </div>
          </form>
        </div>
        {/* end::Form */}
      </div>
      
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/builder", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/builder">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Calendar</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Components */}
        {/* begin::section */}
        {/* <li className="menu-section ">
          <h4 className="menu-text">Components</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li> */}
        {/* end:: section */}
      </ul>

      {/* end::Menu Nav */}
    </div>
  );
}

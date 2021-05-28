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
      {/* begin::Menu Nav */}

      <div className="d-flex position-relative customSearch">
        <span className="my-auto">Spaces</span>
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


      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item d-none ${getMenuItemActive("/builder", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/builder">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Layout Builder</span>
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

        {/* Material-UI */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/manage",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/manage/staff-management">
            <i className="fas fa-caret-right" />
            <span className="svg-icon menu-icon d-flex flex-column rounded customMenutexticon bgCustom1">
              M
            </span>
            <span className="menu-text">Manage</span>
            
          </NavLink>
          
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              {/*begin::1 Level*/}
              <li
                className={`menu-item  ${getMenuItemActive(
                  "/manage/staff-management/profile-overview"
                )}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/manage/staff-management/profile-overview"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Staff</span>
                </NavLink>
              </li>
              {/*end::1 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/manage/patients-details"
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                 <NavLink
                  className="menu-link"
                  to="/manage/patients-details"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Customers</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              <li
                className={`menu-item ${getMenuItemActive(
                  "/manage/service-provider"
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                 <NavLink
                  className="menu-link"
                  to="/manage/service-provider"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Service</span>
                </NavLink>
              </li>
           
              {/*begin::4 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/manage/event-details"
                )}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/manage/event-details"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Events</span>
                </NavLink>
              </li>
              {/*end::4 Level*/}

              {/*begin::5 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/available-patients/profile-overview"
                )}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/available-patients/profile-overview"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Class</span>
                </NavLink>
              </li>
              {/*end::5 Level*/}

              {/*begin::5 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/available-patients/profile-overview"
                )}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/available-patients/profile-overview"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Leave</span>
                </NavLink>
              </li>
              {/*end::5 Level*/}              
            </ul>
          </div>
        </li>
              
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/payments",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/payments">
            <i className="fas fa-caret-right" />
            <span className="svg-icon menu-icon d-flex flex-column rounded customMenutexticon bgCustom2">
              P
            </span>
            <span className="menu-text">Payments</span>
            
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              {/*begin::1 Level*/}
              <li
                className={`menu-item  ${getMenuItemActive(
                  "/payments/payment-overview"
                )}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/Payments/staff-management/profile-overview"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Billing & Invoices</span>
                </NavLink>
              </li>
              {/*end::1 Level*/}      
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}  
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/payments",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/payments">
            <i className="fas fa-caret-right" />
            <span className="svg-icon menu-icon d-flex flex-column rounded customMenutexticon bgCustom3">
              M
            </span>
            <span className="menu-text">Marketing</span>
            
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              {/*begin::1 Level*/}
              <li
                className={`menu-item  ${getMenuItemActive(
                  "/payments/payment-overview"
                )}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/staff-management/profile-overview"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Coupons</span>
                </NavLink>
              </li>
              {/*end::1 Level*/}      
              {/*begin::1 Level*/}
              <li
                className={`menu-item  ${getMenuItemActive(
                  "/payments/payment-overview"
                )}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/staff-management/profile-overview"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">SMS</span>
                </NavLink>
              </li>
              {/*end::1 Level*/}      
            </ul>
          </div>
        </li>
              

      </ul>

      {/* end::Menu Nav */}
    </div>
  );
}

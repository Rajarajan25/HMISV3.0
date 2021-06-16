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

export function AsideMenuList({ layoutProps }) {
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

        {/* Manage-UI */}
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

        {/* Payment-UI */}  
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

        {/* Marketing */}
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
              
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/google-material",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")} />
            </span>
            <span className="menu-text">Material UI</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Material UI</span>
                </span>
              </li>

              {/* Inputs */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/google-material/inputs",
                  true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink
                  className="menu-link menu-toggle"
                  to="/google-material/inputs"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Inputs</span>
                  <i className="menu-arrow" />
                </NavLink>
                <div className="menu-submenu ">
                  <i className="menu-arrow" />
                  <ul className="menu-subnav">
                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item  ${getMenuItemActive(
                        "/google-material/inputs/autocomplete"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/autocomplete"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Autocomplete</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/buttons"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/buttons"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Buttons</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/checkboxes"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/checkboxes"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Checkboxes</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/pickers"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/pickers"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Pickers</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/radio-buttons"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/radio-buttons"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Radio Buttons</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/selects"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/selects"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Selects</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/switches"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/switches"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Switches</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/text-fields"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/text-fields"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Text Fields</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/transfer-list"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/transfer-list"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Transfer List</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}
                  </ul>
                </div>
              </li>
              {/*end::2 Level*/}

              {/* Navigation */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu  ${getMenuItemActive(
                  "/google-material/navigation",
                  true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink
                  className="menu-link menu-toggle"
                  to="/google-material/navigation"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Navigation</span>
                  <i className="menu-arrow" />
                </NavLink>
                <div className="menu-submenu">
                  <i className="menu-arrow" />
                  <ul className="menu-subnav">
                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/navigation/bottom-navigation"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/navigation/bottom-navigation"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Bottom Navigation</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/navigation/breadcrumbs"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/navigation/breadcrumbs"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Breadcrumbs</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/navigation/drawern"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/navigation/drawer"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Drawers</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/navigation/links"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/navigation/links"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">NavLinks</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/navigation/menus"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/navigation/menus"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Menus</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/navigation/steppers"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/navigation/steppers"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Steppers</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/navigation/tabs"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/navigation/tabs"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Tabs</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}
                  </ul>
                </div>
              </li>
              {/*end::2 Level*/}

              {/* Surfaces */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/google-material/surfaces",
                  true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink
                  className="menu-link menu-toggle"
                  to="/google-material/surfaces"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Surfaces</span>
                  <i className="menu-arrow" />
                </NavLink>
                <div className="menu-submenu">
                  <i className="menu-arrow" />
                  <ul className="menu-subnav">
                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/surfaces/app-bar"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/surfaces/app-bar"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">App Bar</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/surfaces/paper"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/surfaces/paper"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Paper</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/surfaces/cards"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/surfaces/cards"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Cards</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/surfaces/expansion-panels"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/surfaces/expansion-panels"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Expansion Panels</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}
                  </ul>
                </div>
              </li>
              {/*end::2 Level*/}

              {/* Feedback */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/google-material/feedback",
                  true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink
                  className="menu-link menu-toggle"
                  to="/google-material/feedback"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Feedback</span>
                  <i className="menu-arrow" />
                </NavLink>
                <div className="menu-submenu">
                  <i className="menu-arrow" />
                  <ul className="menu-subnav">
                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/feedback/progress"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/feedback/progress"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Progress</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/feedback/dialogs"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/feedback/dialogs"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Dialogs</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/feedback/snackbars"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/feedback/snackbars"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Snackbars</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}
                  </ul>
                </div>
              </li>
              {/*end::2 Level*/}

              {/* Data Display */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/google-material/data-displays",
                  true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink
                  className="menu-link menu-toggle"
                  to="/google-material/data-displays"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Data Display</span>
                  <i className="menu-arrow" />
                </NavLink>
                <div className="menu-submenu">
                  <i className="menu-arrow" />
                  <ul className="menu-subnav">
                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/data-displays/avatars"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/data-displays/avatars"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Avatars</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/data-displays/badges"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/data-displays/badges"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Badges</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/data-displays/chips"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/data-displays/chips"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Chips</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/data-displays/dividers"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/data-displays/dividers"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Dividers</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/data-displays/icons"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/data-displays/icons"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Icons</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/data-displays/lists"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/data-displays/lists"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Lists</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/data-displays/tables"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/data-displays/tables"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Tables</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/data-displays/tooltips"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/data-displays/tooltips"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Tooltips</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/data-displays/typography"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/data-displays/typography"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Typography</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}
                  </ul>
                </div>
              </li>
              {/*end::2 Level*/}

              {/* Utils */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/google-material/utils",
                  true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink
                  className="menu-link menu-toggle"
                  to="/google-material/utils"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Utils</span>
                  <i className="menu-arrow" />
                </NavLink>
                <div className="menu-submenu">
                  <i className="menu-arrow" />
                  <ul className="menu-subnav">
                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/utils/click-away-listener"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/utils/click-away-listener"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Click Away Listener</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/utils/no-ssr"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/utils/no-ssr"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">No SSR</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/utils/popover"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/utils/popover"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Popover</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/utils/popper"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/utils/popper"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Popper</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/utils/portal"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/utils/portal"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Portal</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/utils/transitions"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/utils/transitions"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Transitions</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/utils/use-media-query"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/utils/use-media-query"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">useMediaQuery</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}
                  </ul>
                </div>
              </li>
              {/*end::2 Level*/}

              {/* Layout */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/google-material/layout",
                  true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink
                  className="menu-link menu-toggle"
                  to="/google-material/layout"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Layout</span>
                  <i className="menu-arrow" />
                </NavLink>
                <div className="menu-submenu">
                  <i className="menu-arrow" />
                  <ul className="menu-subnav">
                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/layout/box"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/layout/box"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Box</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/layout/container"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/layout/container"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Container</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/layout/grid"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/layout/grid"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Grid</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/layout/grid-list"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/layout/grid-list"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Grid list</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/layout/hidden"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/layout/hidden"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Hidden</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}
                  </ul>
                </div>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/react-bootstrap",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/react-bootstrap">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
            </span>
            <span className="menu-text">Bootstrap</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Bootstrap</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/alert"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/alert">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Alerts</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/badge"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/badge">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Badge</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/breadcrumb"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/breadcrumb"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Breadcrumb</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/buttons"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/buttons">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Buttons</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/button-group"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/button-group"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Button Group</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/cards"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/cards">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Cards</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/carousel"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/carousel">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Carousel</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/dropdowns"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/dropdowns"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Dropdowns</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/forms"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/forms">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Forms</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/input-group"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/input-group"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Input Group</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/images"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/images">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Images</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/figures"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/figures">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Figures</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/jumbotron"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/jumbotron"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Jumbotron</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/list-group"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/list-group"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">List group</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/modal"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/modal">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Modal</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/navs"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/navs">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Navs</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/navbar"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/navbar">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Navbar</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/overlays"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/overlays">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Overlays</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/pagination"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/pagination"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Pagination</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/popovers"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/popovers">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Popovers</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/progress"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/progress">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Progress</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/spinners"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/spinners">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Spinners</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/table"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/table">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Table</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/tabs"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/tabs">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Tabs</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/tooltips"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/tooltips">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Tooltips</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/toasts"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/toasts">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Toasts</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
              </ul>
            </ul>
          </div>
        </li>
      </ul>
      {/* end::Menu Nav */}
    </div>
    
  );
}

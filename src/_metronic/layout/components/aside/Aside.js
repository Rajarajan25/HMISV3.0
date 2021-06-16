/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useState } from "react";
import objectPath from "object-path";
import SVG from "react-inlinesvg";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { toAbsoluteUrl } from "../../../_helpers";
import { AsideSearch } from "./AsideSearch";
import { AsideSubmenu } from "./aside-menu/AsideSubmenu";
import { AsideMenu } from "./aside-menu/AsideMenu";
import { LanguageSelectorDropdown } from "../extras/dropdowns/LanguageSelectorDropdown";
import { QuickUserToggler } from "../extras/QuickUserToggler";
import { Brand } from "../brand/Brand";
import { KTUtil } from "./../../../_assets/js/components/util";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export function Aside() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      asideClassesFromConfig: uiService.getClasses("aside", true),
      asideSecondaryDisplay: objectPath.get(
        uiService.config,
        "aside.secondary.display"
      ),
      asideSelfMinimizeToggle: objectPath.get(
        uiService.config,
        "aside.self.minimize.toggle"
      ),
      extrasSearchDisplay: objectPath.get(
        uiService.config,
        "extras.search.display"
      ),
      extrasNotificationsDisplay: objectPath.get(
        uiService.config,
        "extras.notifications.display"
      ),
      extrasQuickActionsDisplay: objectPath.get(
        uiService.config,
        "extras.quick-actions.display"
      ),
      extrasQuickPanelDisplay: objectPath.get(
        uiService.config,
        "extras.quick-panel.display"
      ),
      extrasLanguagesDisplay: objectPath.get(
        uiService.config,
        "extras.languages.display"
      ),
      extrasUserDisplay: objectPath.get(
        uiService.config,
        "extras.user.display"
      ),
    };
  }, [uiService]);

  const tabs = {
    tabId1: "kt_aside_tab_1",
    tabId2: "kt_aside_tab_2",
    tabId3: "kt_aside_tab_3",
    tabId4: "kt_aside_tab_4", 
  };
  const [activeTab, setActiveTab] = useState(tabs.tabId2);
  const handleTabChange = (id) => {
    setActiveTab(id);
    const asideWorkspace = KTUtil.find(
      document.getElementById("kt_aside"),
      ".aside-secondary .aside-workspace"
    );
    if (asideWorkspace) {
      KTUtil.scrollUpdate(asideWorkspace);
    }
  };

  return (
    <>
      {/* begin::Aside */}
      <div
        id="kt_aside"
        className={`aside aside-left d-flex ${layoutProps.asideClassesFromConfig}`}
      >
        {/* begin::Primary */}
        <div className="aside-primary d-flex flex-column align-items-center flex-row-auto">
          <Brand />
          {/* begin::Header */}
          <div className="aside-header d-flex
           flex-column align-items-center flex-column-auto">

            <ul className="list-unstyled flex-column asideTopleftfixedmenu" role="tablist">
              {/* begin::Item */}
              
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
               
              >
              <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="quick-search-tooltip" className="tool_bg">Dashboard</Tooltip>
                  }
                >
                  <a
                    href="#"
                    className={`nav-link btn btn-icon btn-clean btn-lg ${activeTab ===
                    tabs.tabId2 && "active"}`}
                    data-toggle="tab"
                    data-target={`#${tabs.tabId2}`}
                    role="tab"
                    onClick={() => handleTabChange(tabs.tabId2)}
                  >
                    <span className="svg-icon svg-icon-md d-inline-flex">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/left-menu/Dashboard.svg"
                        )}
                      />
                    </span>
                  </a>
                  </OverlayTrigger>
              </li>
              
              {/* end::Item */}

              {/* begin::Item */}
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"

              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="quick-search-tooltip" className="tool_bg">Calendar</Tooltip>
                  }
                >
                  <a
                    href="#"
                    className={`nav-link btn btn-icon btn-clean btn-lg ${activeTab ===
                      tabs.tabId4 && "active"}`}
                    data-toggle="tab"
                    data-target={`#${tabs.tabId4}`}
                    onClick={() => handleTabChange(tabs.tabId4)}
                    role="tab"
                  >
                    <span className="svg-icon svg-icon-md d-inline-flex">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/left-menu/Calender.svg"
                        )}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

              {/* begin::Item */}
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
           
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="quick-search-tooltip" className="tool_bg">Manage</Tooltip>
                  }
                >
                  <a
                    href="#"
                    className="nav-link btn btn-icon btn-clean btn-lg"
                    data-toggle="tab"
                    data-target="#kt_aside_tab_3"
                    role="tab"
                  >
                    <span className="svg-icon svg-icon-md d-inline-flex">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/left-menu/Services.svg"
                        )}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li>
              {/* end::Item */}
            </ul>                        
          </div>
          {/* end::Header */}

          {/* begin::Nav Wrapper */}
          <div className="aside-nav d-flex flex-column align-items-center flex-column-fluid scroll scroll-pull">
            {/* begin::Nav */}
            <ul className="list-unstyled flex-column" role="tablist">
              {/* begin::Item */}
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
         
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="quick-search-tooltip" className="tool_bg">Payments</Tooltip>
                  }
                >
                  <a
                    href="#"
                    className="nav-link btn btn-icon btn-clean btn-lg"
                    data-toggle="tab"
                    data-target="#kt_aside_tab_3"
                    role="tab"
                  >
                    <span className="svg-icon svg-icon-md d-inline-flex">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/left-menu/Payment.svg"
                        )}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

              {/* begin::Item */}
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
       
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="quick-search-tooltip" className="tool_bg">Marketing</Tooltip>
                  }
                >
                  <a
                    href="#"
                    className="nav-link btn btn-icon btn-clean btn-lg"
                    data-toggle="tab"
                    data-target="#kt_aside_tab_3"
                    role="tab"
                  >
                    <span className="svg-icon svg-icon-md d-inline-flex">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/left-menu/Speaker.svg"
                        )}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

              {/* begin::Item */}
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
      
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="quick-search-tooltip" className="tool_bg">Products</Tooltip>
                  }
                >
                  <a
                    href="#"
                    className="nav-link btn btn-icon btn-clean btn-lg"
                    data-toggle="tab"
                    data-target="#kt_aside_tab_3"
                    role="tab"
                  >
                    <span className="svg-icon svg-icon-md d-inline-flex">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/left-menu/Chart.svg"
                        )}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

              {/* begin::Item */}
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
           
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="quick-search-tooltip" className="tool_bg">Reports</Tooltip>
                  }
                >
                  <a
                    href="#"
                    className="nav-link btn btn-icon btn-clean btn-lg"
                    data-toggle="tab"
                    data-target="#kt_aside_tab_3"
                    role="tab"
                  >
                    <span className="svg-icon svg-icon-md d-inline-flex">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/left-menu/Products.svg"
                        )}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

              {/* begin::Item */}
              <li
                className="nav-item d-none"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
                title="Project Management"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="quick-search-tooltip" className="tool_bg">
                      Project Management
                    </Tooltip>
                  }
                >
                  <a
                    href="#"
                    className="nav-link btn btn-icon btn-clean btn-lg"
                    data-toggle="tab"
                    data-target="#kt_aside_tab_4"
                    role="tab"
                  >
                    <span className="svg-icon svg-icon-md d-inline-flex">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/left-menu/Setting.svg"
                        )}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

              {/* begin::Item */}
              <li
                className="nav-item d-none"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
                title="User Management"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="user-management" className="tool_bg">User Management</Tooltip>
                  }
                >
                  <a
                    href="#"
                    className="nav-link btn btn-icon btn-clean btn-lg"
                    data-toggle="tab"
                    data-target="#kt_aside_tab_5"
                    role="tab"
                  >
                    <span className="svg-icon svg-icon-md d-inline-flex">
                      <SVG
                        src={toAbsoluteUrl("/media/svg/left-menu/Help.svg")}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

            </ul>
            {/* end::Nav */}
          </div>
          {/* end::Nav Wrapper */}

          {/* begin::Footer */}
          <div className="aside-footer d-flex flex-column align-items-center flex-column-auto w-100">
            {/* begin::Aside Toggle */}
            {layoutProps.asideSecondaryDisplay &&
              layoutProps.asideSelfMinimizeToggle && (
                <>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip id="toggle-aside" className="tool_bg">Toggle Aside</Tooltip>}
                  >
                    <span
                      className="aside-toggle btn btn-icon btn-toggleIcon btn-hover-primary shadow-sm"
                      id="kt_aside_toggle"
                    >
                      <i className="ki ki-arrow-back icon-xs" />
                    </span>
                  </OverlayTrigger>
                </>
              )}
            {/* end::Aside Toggle */}
            <div className="d-flex flex-column asideFooterbottommenu">
            {/* begin::Search */}
            {layoutProps.extrasSearchDisplay && (
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="toggle-search" className="tool_bg">Quick Search</Tooltip>}
              >
                <a
                  href="#"
                  className="btn btn-icon btn-clean btn-lg"
                  id="kt_quick_search_toggle"
                >
                  <span className="svg-icon svg-icon-md d-inline-flex">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/General/Search.svg")}
                    />
                  </span>
                </a>
              </OverlayTrigger>
            )}
            {/* end::Search */}

            {/* begin::Notifications */}
            {layoutProps.extrasNotificationsDisplay && (
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="toggle-notifications" className="tool_bg">Notifications</Tooltip>
                }
              >
                <a
                  href="#"
                  className="btn btn-icon btn-clean btn-lg position-relative"
                  id="kt_quick_notifications_toggle"
                  data-placement="right"
                  data-container="body"
                  data-boundary="window"
                >
                  <span className="svg-icon svg-icon-md d-inline-flex">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}
                    />
                  </span>
                </a>
              </OverlayTrigger>
            )}
            {/* end::Notifications */}

            {/* begin::Quick Actions */}
            {layoutProps.extrasQuickActionsDisplay && (
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="toggle-quick-actions" className="tool_bg">Settings</Tooltip>
                }
              >
                <a
                  href="#"
                  className="btn btn-icon btn-clean btn-lg"
                  id="kt_quick_actions_toggle"
                >
                  <span className="svg-icon svg-icon-md d-inline-flex">
                    <SVG
                      src={toAbsoluteUrl(
                        "/media/svg/left-menu/Setting.svg"
                      )}
                    />
                  </span>
                </a>
              </OverlayTrigger>
            )}
            {/* end::Quick Actions */}
            {/* begin::Quick Actions */}
            {layoutProps.extrasQuickActionsDisplay && (
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="toggle-quick-actions" className="tool_bg">Help</Tooltip>
                }
              >
                <a
                  href="#"
                  className="btn btn-icon btn-clean btn-lg"
                  id="kt_quick_actions_toggle"
                >
                  <span className="svg-icon svg-icon-md d-inline-flex">
                    <SVG
                      src={toAbsoluteUrl(
                        "/media/svg/left-menu/Help.svg"
                      )}
                    />
                  </span>
                </a>
              </OverlayTrigger>
            )}
            {/* end::Quick Actions */}
            {/* begin::Quick Actions */}
            {layoutProps.extrasQuickActionsDisplay && (
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="toggle-quick-actions" className="tool_bg">Quick Actions</Tooltip>
                }
              >
                <a
                  href="#"
                  className="btn btn-icon btn-clean btn-lg"
                  id="kt_quick_actions_toggle"
                >
                  <span className="svg-icon svg-icon-md d-inline-flex">
                  <img src={toAbsoluteUrl("/media/svg/left-menu/Thunder.png")} alt="Thunder" />
                  </span>
                </a>
              </OverlayTrigger>
            )}
            {/* end::Quick Actions */}

            {/* begin::Quick Panel */}
            {layoutProps.extrasQuickPanelDisplay && (
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="toggle-quick-panel" className="tool_bg">Notifications</Tooltip>}
              >
                <a
                  href="#"
                  className="btn btn-icon btn-clean btn-lg position-relative"
                  id="kt_quick_panel_toggle"
                  data-placement="right"
                  data-container="body"
                  data-boundary="window"
                >
                  <span className="svg-icon svg-icon-md d-inline-flex">
                    <SVG
                      src={toAbsoluteUrl(
                        "/media/svg/left-menu/Notification.svg"
                      )}
                    />
                  </span>
                  <span className="label label-sm label-light-danger label-rounded font-weight-bolder position-absolute top-0 right-0 mt-1 mr-1">
                    3
                  </span>
                </a>
              </OverlayTrigger>
            )}
            {/* end::Quick Panel */}
            </div>
            {/* begin::Languages*/}
            {layoutProps.extrasLanguagesDisplay && <LanguageSelectorDropdown />}
            {/* end::Languages */}

            {/* begin::User*/}
            {layoutProps.extrasUserDisplay && <QuickUserToggler />}
            {/* end::User */}
          </div>
          {/* end::Footer */}
        </div>
        {/* end::Primary */}

        {layoutProps.asideSecondaryDisplay && (
          <>
            {/* begin::Secondary */}
            <div className="aside-secondary d-flex flex-row-fluid">
              {/* begin::Workspace */}
              <div className="aside-workspace scroll scroll-push">
                <div className="tab-content">
                  <AsideSearch isActive={activeTab === tabs.tabId1} />
                  <AsideMenu isActive={activeTab === tabs.tabId2} />
                  <AsideMenu isActive={activeTab === tabs.tabId3} />
                  <AsideSubmenu isActive={activeTab === tabs.tabId4} />
                </div>
              </div>
              {/* end::Workspace */}
            </div>
            {/* end::Secondary */}
          </>
        )}
      </div>
      {/* end::Aside */}
    </>
  );
}

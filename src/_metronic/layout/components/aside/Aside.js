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

const AsideHeaderList=[
  {
    name:"Dashboard",
    tooltip:"Dashboard",
    key:"dashboard",
    icon:"/media/svg/left-menu/Dashboard.svg",
    visible:true,
  },
  {
    name:"Calendar",
    tooltip:"Calendar",
    key:"calender",
    icon:"/media/svg/left-menu/Calender.svg",
    visible:true,
  },
  {
    name:"Manage",
    tooltip:"Manage",
    key:"manage",
    icon:"/media/svg/left-menu/Services.svg",
    visible:true,
  }
]
const AsideMiddleList=[
  {
    name:"Payments",
    tooltip:"Payments",
    key:"payment",
    icon:"/media/svg/left-menu/Payment.svg",
    visible:true,
  },
  {
    name:"Marketing",
    tooltip:"Marketing",
    key:"marketing",
    icon:"/media/svg/left-menu/Speaker.svg",
    visible:true,
  },
  {
    name:"Products",
    tooltip:"Products",
    key:"product",
    icon:"/media/svg/left-menu/Chart.svg",
    visible:true,
  },
  {
    name:"Reports",
    tooltip:"Reports",
    key:"reports",
    icon:"/media/svg/left-menu/Products.svg",
    visible:true,
  },
  {
    name:"Setting",
    tooltip:"Setting",
    key:"setting",
    icon:"/media/svg/left-menu/Setting.svg",
    visible:false,
  },
  {
    name:"User Management",
    tooltip:"User Management",
    key:"user_manager",
    icon:"/media/svg/left-menu/Help.svg",
    visible:false,
  }
]

const AsideSubMenuList={
  dashboard:[
    {
      name:"Dashboard",
      isMenu:false,
      visible:true,
      shortName:"D",
      to:"/dashboard",
      icon:"/media/svg/icons/Design/Layers.svg",
      backgroundColor:""
    }
  ],
  calender:[
    {
      name:"Calendar",
      isMenu:false,
      visible:true,
      shortName:"C",
      to:"/builder",
      icon:"/media/svg/icons/Home/Library.svg",
      backgroundColor:""
    }
  ],
  manage:[
    {
      name:"Manage",
      isMenu:true,
      visible:true,
      shortName:"M",
      to:"/manage",
      icon:"",
      backgroundColor:"",
      subMenuList:[
        {
          name:"Staff",
          visible:true,
          to:"/manage/staff-management/profile-overview",
          icon:"/media/events/cogwheel.svg",
          backgroundColor:"#FD5D81"
        },
        {
          name:"Customers",
          visible:true,
          to:"/manage/patients-details",
          icon:"/media/events/patient.svg",
          backgroundColor:"#FEC55D"
        },
        {
          name:"Service",
          visible:true,
          to:"/manage/service-provider",
          icon:"/media/events/customer.svg",
          backgroundColor:"#7F5DFC"
        },
        {
          name:"Events",
          visible:true,
          to:"/manage/event-details",
          icon:"/media/events/doctor.svg",
          backgroundColor:"#FD905D"
        },
        {
          name:"Class",
          visible:true,
          to:"/available-patients/profile-overview",
          icon:"/media/events/cogwheel.svg",
          backgroundColor:"#6bc950"
        },
        {
          name:"Leave",
          visible:true,
          to:"/available-patients/profile-overview",
          icon:"/media/events/cogwheel.svg",
          backgroundColor:"#e6511b"
        }
      ]
    }
  ],
  payment:[
    {
      name:"Billing & Invoices",
      isMenu:false,
      visible:true,
      shortName:"B",
      to:"/Payments/billinginvoice",
      icon:"/media/events/cogwheel.svg",
      backgroundColor:"#fd7fab",
    }
  ],
  marketing:[
    {
      name:"Coupons",
      isMenu:false,
      visible:true,
      shortName:"C",
      to:"/marketing/coupons",
      icon:"/media/events/cogwheel.svg",
      backgroundColor:"#bf55ec",
    },
    {
      name:"SMS",
      isMenu:false,
      visible:true,
      shortName:"S",
      to:"/marketing/sms",
      icon:"/media/events/cogwheel.svg",
      backgroundColor:"#0a32e8",
    }
  ]
}

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
    tabId1: "tab_1",
    tabId2: "tab_2",
    tabId3: "tab_3",
    tabId4: "tab_4", 
  };
  const [activeTab, setActiveTab] = useState(tabs.tabId2);
  const handleTabChange = (id) => {
    setActiveTab(id);
    console.log("Aside menu",AsideSubMenuList[id]);
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
              {AsideHeaderList.map((item,i)=>{
                return(<li
                  className={`nav-item ${!item.visible && "d-none"}`}
                  data-toggle="tooltip"
                  data-placement="rigth"
                  data-container="body"
                  key={i}
                  data-boundary="window"
                 
                >
                <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip id="quick-search-tooltip" className="tool_bg">{item.tooltip}</Tooltip>
                    }
                  >
                    <a
                      href="#"
                      className={`nav-link btn btn-icon btn-clean btn-lg ${activeTab ===item.key && "active"}`}
                      data-toggle="tab"
                      data-target={`#${item.key}`}
                      role="tab"
                      onClick={() => handleTabChange(item.key)}
                    >
                      <span className="svg-icon svg-icon-md d-inline-flex">
                        <SVG
                          src={toAbsoluteUrl(item.icon)}
                        />
                      </span>
                    </a>
                    </OverlayTrigger>
                </li>)
              })}
              {/* end::Item */}
            </ul>                        
          </div>
          {/* end::Header */}

          {/* begin::Nav Wrapper */}
          <div className="aside-nav d-flex flex-column align-items-center flex-column-fluid scroll scroll-pull">
            {/* begin::Nav */}
            <ul className="list-unstyled flex-column" role="tablist">
              {/* begin::Item */}
              {AsideMiddleList.map((item,i)=>{
                return(
                  <li
                  className={`nav-item ${!item.visible && "d-none"}`}
                  data-toggle="tooltip"
                  data-placement="rigth"
                  data-container="body"
                  key={i}
                  data-boundary="window">
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip id="quick-search-tooltip" className="tool_bg">{item.tooltip}</Tooltip>
                    }
                  >
                    <a
                      href="#"
                      className={`nav-link btn btn-icon btn-clean btn-lg ${activeTab ===item.key && "active"}`}
                      data-toggle="tab"
                      data-target={`#${item.key}`}
                      role="tab"
                      onClick={() => handleTabChange(item.key)}
                    >
                      <span className="svg-icon svg-icon-md d-inline-flex">
                        <SVG
                          src={toAbsoluteUrl(item.icon)}
                        />
                      </span>
                    </a>
                  </OverlayTrigger>
                </li>
                )
              })}
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
                  {/* <AsideSearch isActive={activeTab === tabs.tabId1} /> */}
                  <AsideMenu isActive={true} menuList={AsideSubMenuList[activeTab]}/>
                  {/* <AsideMenu isActive={activeTab === tabs.tabId3} />
                  <AsideSubmenu isActive={activeTab === tabs.tabId4} /> */}
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

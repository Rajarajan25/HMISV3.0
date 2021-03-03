import React, { useMemo } from "react";
import { AsideSubMenuList } from "./AsideSubMenuList";
import { useHtmlClassService } from "../../../_core/MetronicLayout";

export function AsideSubmenu({ isActive }) {
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      layoutConfig: uiService.config,
      asideMenuAttr: uiService.getAttributes("aside_menu"),
      ulClasses: uiService.getClasses("aside_menu_nav", true),
      asideClassesFromConfig: uiService.getClasses("aside_menu", true),
    };
  }, [uiService]);

  return (
    <div className={`tab-pane fade ${isActive && "show active"}`}>
      <div className="aside-menu-wrapper flex-column-fluid">
        {/* begin::Menu Container */}
        <div
          id="kt_aside_menu"
          data-menu-vertical="1"
          className={`aside-menu  min-h-lg-800px ${layoutProps.asideClassesFromConfig}`}
          {...layoutProps.asideMenuAttr}
        >
          <div className="favoriteLink">
            Favorites
          </div>
          <AsideSubMenuList layoutProps={layoutProps} />
        </div>
        {/* end::Menu Container */}
      </div>
    </div>
  );
}

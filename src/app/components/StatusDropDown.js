import { Dropdown } from "react-bootstrap";
import React from 'react';
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
export function StatusDropDown(props) {
  return(<Dropdown drop="down" alignCenter className="dropdown h-100">
    <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
      <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">{props.item.status||""}</a>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
      <StatusDropdownMenu />
    </Dropdown.Menu>
  </Dropdown>)
}
export function StatusDropdownMenu() {
  return <>
    {/*begin::Navigation*/}
    <ul className="navi navi-hover">
      <li className="navi-item">
        <a href="#" className="navi-link">
          <span className="navi-circle active_bg"></span>
          <span className="navi-text">Active</span>
        </a>
      </li>
      <li className="navi-item ina_hover">
        <a href="#" className="navi-link">
          <span className="navi-circle inactive_bg"></span>
          <span className="navi-text">Inactive</span>
        </a>
      </li>
    </ul>
    {/*end::Navigation*/}

  </>
}
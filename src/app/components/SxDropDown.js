import { Dropdown } from "react-bootstrap";
import React from 'react';
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
export function SxDropDown(props) {
  return(<Dropdown drop="down" alignCenter className="dropdown h-100">
    <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
      <div className="d-flex text-white h-100 align-items-center justify-content-center">{props.item.gender||"Male"}</div>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav sx_hover">
      <SxDropdownMenu />
    </Dropdown.Menu>
  </Dropdown>)
}

export function SxDropdownMenu() {
  return <>
    {/*begin::Navigation*/}
    <ul className="navi navi-hover">
      <li className="navi-item">
        <a href="#" className="navi-link">
          <span className="navi-text">Male</span>
        </a>
      </li>
      <li className="navi-item fe_hover">
        <a href="#" className="navi-link">
          <span className="navi-text">Female</span>
        </a>
      </li>
    </ul>
    {/*end::Navigation*/}

  </>
}
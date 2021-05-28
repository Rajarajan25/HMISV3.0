import { Dropdown } from "react-bootstrap";
import React from 'react';
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
export function SxDropDown(props) {
  return(<Dropdown drop="down" aligncenter="true"  className="dropdown h-100">
    <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
      <div className="d-flex text-white h-100 align-items-center justify-content-center pointer"><span>{props.item.gender||"Select gender"}</span></div>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav sx_hover">
      <SxDropdownMenu handleChangeDropDown={props.handleChangeDropDown} item={props.item}/>
    </Dropdown.Menu>
  </Dropdown>)
}

export function SxDropdownMenu(props) {
  const {handleChangeDropDown, item} = props;
  return <>
    {/*begin::Navigation*/}
    <ul className="navi navi-hover">
      <li className="navi-item" onClick={()=>handleChangeDropDown("Male", item.id, 'gender')}>
        <a href="#" className="navi-link">
          <span className="navi-text">Male</span>
        </a>
      </li>
      <li className="navi-item fe_hover" onClick={()=>handleChangeDropDown("Female", item.id, 'gender')}>
        <a href="#" className="navi-link">
          <span className="navi-text">Female</span>
        </a>
      </li>
    </ul>
    {/*end::Navigation*/}

  </>
}
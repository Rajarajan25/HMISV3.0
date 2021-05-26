import { Dropdown } from "react-bootstrap";
import React from 'react';
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
export function StatusDropDown(props) {
  return(<Dropdown drop="down" alignCenter className="dropdown h-100">
    <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
      <div  className="d-flex text-white h-100 align-items-center justify-content-center pointer">{props.item.status||"Select status"}</div>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
      <StatusDropdownMenu handleChangeDropDown={props.handleChangeDropDown} item={props.item}/>
    </Dropdown.Menu>
  </Dropdown>)
}
export function StatusDropdownMenu(props) {
  const {handleChangeDropDown, item} = props;
  const statusMenu=["Active","Inactive"];
  return <>
    {/*begin::Navigation*/}
    <ul className="navi navi-hover">
    <li className="navi-item" onClick={()=>handleChangeDropDown("Active", item._id, 'status')}>
        <a href="#" className="navi-link">
          <span className="navi-text">Active</span>
        </a>
      </li>
      <li className="navi-item fe_hover" onClick={()=>handleChangeDropDown("Inactive", item._id, 'status')}>
        <a href="#" className="navi-link">
          <span className="navi-text">Inactive</span>
        </a>
      </li>
    </ul>
    {/*end::Navigation*/}

  </>
}
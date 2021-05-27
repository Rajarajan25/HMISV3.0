import { Dropdown } from "react-bootstrap";
import React from 'react';
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
export function StatusDropDown(props) {
  const{item}=props;
  return(<Dropdown drop="down" aligncenter="true"  className="dropdown h-100">
    <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
      <div  className="d-flex text-white h-100 align-items-center justify-content-center pointer">{item.status?"Active":"Inactive"}</div>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover" >
      <StatusDropdownMenu handleChangeDropDown={props.handleChangeDropDown} item={props.item}/>
    </Dropdown.Menu>
  </Dropdown>)
}
export function StatusDropdownMenu(props) {
  const {handleChangeDropDown, item} = props;
  const statusMenu=["Active","Inactive"];
  return <>
    {/*begin::Navigation*/}
    <div >
    <Dropdown.Item eventKey="1"  className="p-0" onClick={()=>handleChangeDropDown(true, item._id, 'status')}>
    <ul className="navi navi-hover"> <li className="navi-item">
        <a href="#" className="navi-link">
          <span className="navi-text">Active</span>
        </a>
      </li> </ul>
    </Dropdown.Item>
    <Dropdown.Item eventKey="2"  className="p-0" onClick={()=>handleChangeDropDown(false, item._id, 'status')}>
    <ul className="navi navi-hover"> <li className="navi-item fe_hover">
        <a href="#" className="navi-link">
          <span className="navi-text">Inactive</span>
        </a>
      </li> </ul>
      </Dropdown.Item>
    {/* <li className="navi-item" onClick={()=>handleChangeDropDown(true, item._id, 'status')}>
        <a href="#" className="navi-link">
          <span className="navi-text">Active</span>
        </a>
      </li>
      <li className="navi-item fe_hover" onClick={()=>handleChangeDropDown(false, item._id, 'status')}>
        <a href="#" className="navi-link">
          <span className="navi-text">Inactive</span>
        </a>
      </li> */}
    </div>
    {/*end::Navigation*/}

  </>
}
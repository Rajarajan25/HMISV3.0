import { Dropdown } from "react-bootstrap";
import React from 'react';
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
const statusData = [
  { name: "Public", hover: "", value: "true" },
  { name: "Private", hover: "ina_hover",  value: "false" },
];
export function STypeDropdown(props) {
  const { handleChangeDropDown, item } = props;
  return (<Dropdown drop="down" aligncenter="true" className="dropdown h-100 w_130">
  <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
    <span className="d-flex pointer h-100 align-items-center justify-content-center font_weight_medium">{item.service_type}</span>
  </Dropdown.Toggle>
  <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav st_hover">
    <STypeDropdownMenu item={item} handleChangeDropDown={handleChangeDropDown}/>
  </Dropdown.Menu>
</Dropdown>)
}
export function STypeDropdownMenu(props) {
  const { handleChangeDropDown, item } = props;
  return <>
    {/*begin::Navigation*/}
    <ul className="navi navi-hover">
      {statusData.map((gender, index) => {
        return (
          <li className={`navi-item ${gender.hover}`} onClick={() => handleChangeDropDown(gender.name, item.id, 'service_type')} key={index}>
            <a href="#" className="navi-link">
              <span className="navi-text">{gender.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
    {/* <Dropdown.Item eventKey="1"  className="p-0" onClick={()=>handleChangeDropDown("true", item.id, 'is_active')}>
    <ul className="navi navi-hover"> <li className="navi-item">
        <a href="#" className="navi-link">
          <span className="navi-text">Active</span>
        </a>
      </li> </ul>
    </Dropdown.Item>
    <Dropdown.Item eventKey="2"  className="p-0" onClick={()=>handleChangeDropDown("false", item.id, 'is_active')}>
    <ul className="navi navi-hover"> <li className="navi-item fe_hover">
        <a href="#" className="navi-link">
          <span className="navi-text">Inactive</span>
        </a>
      </li> </ul>
      </Dropdown.Item> */}
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
    {/*end::Navigation*/}

  </>
}
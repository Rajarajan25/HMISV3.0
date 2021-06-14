import { Dropdown } from "react-bootstrap";
import React from 'react';
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";

const sxData = [
  { name: "Male", hover: "" },
  { name: "Female", hover: "fe_hover" },
];
export function SxDropDown(props) {
  const { item, handleChangeDropDown } = props;
  return (
    <Dropdown drop="down" className={`dropdown h-100 activeStatuscontent text-white ${item.gender?(item.gender === 'Male' ? "male_bg" : "female_bg"):""}`}>
      <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
        <div className="d-flex text-white h-100 align-items-center justify-content-center pointer">
          <span className={`${item.gender?"":"text-muted font-size-sm font-style-italic"}`}>{item.gender || "Select gender"}</span>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav sx_hover">
        <SxDropdownMenu handleChangeDropDown={handleChangeDropDown} item={item} />
      </Dropdown.Menu>
    </Dropdown>
  )
}

export function SxDropdownMenu(props) {
  const { handleChangeDropDown, item } = props;
  return <>
    {/*begin::Navigation*/}
    <ul className="navi navi-hover">
      {sxData.map((gender, index) => {
        return (
          <li className={`navi-item ${gender.hover}`} onClick={() => handleChangeDropDown(gender.name, item.id, 'gender')} key={index}>
            <a href="#" className="navi-link">
              <span className="navi-text">{gender.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
    {/*end::Navigation*/}

  </>
}
import { Dropdown } from "react-bootstrap";
import React from 'react';
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { gql, useQuery } from "@apollo/client";

const GET_STAFF = gql`
  {
    getStaffs {
      name
    }
  }
`;
export function ProviderDropDown() {
  return (
    <Dropdown drop="down" aligncenter="true" className="dropdown h-100">
      <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
        <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
          <div class="d-flex mt-1 mb-1 justify-content-center">
            <span className="ProviderIcon" style={{ backgroundColor: `#2ecd6f` }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
            <span className="ProviderIcon" style={{ backgroundColor: `#1D58FF` }}>GM</span>
            <span className="ProviderIcon" style={{ backgroundColor: `#2ecd6f` }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
            <span className="ProviderIcon" style={{ backgroundColor: `#2ecd6f` }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
            <span className="ProviderIcon" style={{ backgroundColor: `#A2A2A2` }}>+5</span>
          </div>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
        <ProviderDropDownMenu />
      </Dropdown.Menu>
    </Dropdown>
  )
}
export function ProviderDropDownMenu() {
  const { data } = useQuery(GET_STAFF);
  return <>
    {/*begin::Navigation*/}
    {data &&
      <ul className="navi navi-hover">
        <li className="navi-item">
          <div className="service_search position-relative">
            <img src={toAbsoluteUrl("/media/patients/drop_search.svg")} alt="search" className="drop_search" />
            <input type="text" placeholder="Search" className="form-control" />
          </div>
        </li>

        <li className="navi-item">
          <div className="dropdown-menu-search-main">
            <div className="service_select">
              {data.getStaffs.map(staff => {
                return (
                  <div class="d-flex justify-content-left py-1">
                    <span className="specialInfo text-white position-relative" style={{ backgroundColor: `rgba(230, 81, 27,0.1)` }}>
                      <span className="ProviderIcon" style={{ backgroundColor: `#2ecd6f` }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                      <span className="ProviderName" style={{ color: `rgba(230, 81, 27,1)` }}>{staff.name}</span>
                    </span>
                  </div>
                )

              })}

            </div>
          </div>
        </li>
      </ul>}
    {/*end::Navigation*/}
  </>
}

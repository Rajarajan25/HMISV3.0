/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
//import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
//import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
//import GroupFilter from "./GroupFilterSelect";
//import GroupFilterSelectSubtask from "./GroupFilterSelectSubtask";
//import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
//import { DropdownCustomToggler,DropdownMenu4 } from "../../../../_metronic/_partials/dropdowns";
import Select from 'react-select';
import { Modal } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import {DropdownItemToggler} from "../../../../_metronic/_partials/dropdowns";

const options = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
]

export function Filter() {
  const user = useSelector(({ auth }) => auth.user, shallowEqual);

  useEffect(() => {
    return () => {};
  }, [user]);

  return (
    <>
      {user && (
        <div className="d-flex flex-row-auto w-100" id="kt_profile_aside">
          <div className="filterFixedheader">
                  <div className="card-body">
                    <div className="d-flex flex-wrap flex-column align-items-center">
                      <div className="w-100 d-flex">        
                        <form autoComplete="off" className="filterForm w-100">
                          <div className="d-flex">
                            <div className="filters">
                              <Dropdown drop="down" alignCenter className="dropdown h-100">
                                <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                  <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                                    <div class="d-flex mt-1 mb-1 justify-content-center">
                                      <span className="fas fa-filter filter-icon"></span>
                                    </div>
                                  </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu  className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                                  <ServicesDropdownMenu />
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="searchbar d-flex justify-items-center">
                              <input className="search_input" type="text" name="" placeholder="Search Staff" />
                              <a href="#" className="search_icon"><img src={toAbsoluteUrl("/media/patients/cat_search.svg")} alt="" className="" /></a>
                            </div>                         
                          </div>
                          <div className="d-flex ml-auto align-items-center">   
                            <div className="sort-text">Sort By:</div>
                            <div className="select-box p-3">
                              <Select className="form-control-select" options={options} />
                            </div>
                            <div className="HoverView">
                                <Link to="#" className="d-block p-3"><img src={toAbsoluteUrl("/media/health/gridview.svg")} alt="" className="mx-auto" /></Link>
                            </div>
                            <div className="HoverView">
                                <Link to="#" className="d-block p-3 active"><img src={toAbsoluteUrl("/media/health/listview.svg")} alt="" className="mx-auto" /></Link>
                            </div>         

                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      )}
    </>
  );
}

const duedate = [
  { value: 'duedate', label: 'Due Date' },
  { value: 'date', label: 'Date' },
]

const Isdate = [
  { value: 'is', label: 'Is' },
  { value: 'is1', label: 'Is1' },
]

const Tom = [
  { value: 'tommorrow', label: 'Tommorrow' },
  { value: 'today', label: 'Today' },
]




export function ServicesDropdownMenu() {
  return <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
          <li className="navi-item">
            <p className="filter-title">Active Filters</p>
            <div className="clearfix p-2 d-none">
              <div className="filter-con">
                <div className="d-flex align-items-center">
                  <span className="p-2">Where</span>
                  <div className="w-150 p-2">
                    <div className="re_select">
                      <Select options={duedate} /> 
                    </div>
                  </div>
                  <div className="w-110 p-2">
                    <div className="re_select">
                      <Select options={Isdate} /> 
                    </div>
                  </div>
                  <div className="w-250 p-2">
                    <div className="re_select">
                      <Select options={Tom} /> 
                    </div>
                  </div>
                  <span className="p-2">X</span>
                </div>
              </div>
            </div>
          </li>
      </ul>
      {/*end::Navigation*/}

  </>
}
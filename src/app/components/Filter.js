/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { FilterDropDown } from './FilterDropDown';
import Search from '../components/Search';
import SortBy from '../components/SortBy';
const options = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
]

export function Filter(props) {
  const user = useSelector(({ auth }) => auth.user, shallowEqual);
  const { value, handleDataSource, fields, handleSort } = props;
  const [isdropOpen,setDropOpen]=useState(false);
  useEffect(() => {
    return () => { };
  }, [user]);

  const handleClose=(values)=>{
    setDropOpen(values);
  }
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
                        <div className="d-flex mt-1 mb-1" onClick={()=>handleClose(!isdropOpen)}>
                          <span className="fas fa-filter filter-icon"></span>
                        </div>

                        {isdropOpen && <div className="filter-popup">
                          <FilterDropDown value={value} handleDataSource={handleDataSource} fields={fields}/>
                        </div>}
                      </div>
                      <Search handleSearch={handleDataSource} data={value}></Search>
                    </div>
                    <SortBy data={value} handleSort={handleSort} />
                    {/* <div className="d-flex ml-auto align-items-center">
                      <div className="sort-text">Sort Byh:</div>
                      <div className="select-box p-3">
                        <Select className="form-control-select" options={options} />
                      </div>
                      <div className="HoverView">
                        <Link to="#" className="d-block p-3"><img src={toAbsoluteUrl("/media/health/gridview.svg")} alt="" className="mx-auto" /></Link>
                      </div>
                      <div className="HoverView">
                        <Link to="#" className="d-block p-3 active"><img src={toAbsoluteUrl("/media/health/listview.svg")} alt="" className="mx-auto" /></Link>
                      </div>

                    </div> */}
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





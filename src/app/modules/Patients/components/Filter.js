/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import Select from 'react-select';
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

export function Filter() {
  const user = useSelector(({ auth }) => auth.user, shallowEqual);

  const options = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
  ]

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

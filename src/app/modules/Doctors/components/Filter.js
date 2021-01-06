/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
//import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import GroupFilter from "./GroupFilterSelect";
import GroupFilterSelectSubtask from "./GroupFilterSelectSubtask";
//import SVG from "react-inlinesvg";
//import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import {
  DropdownCustomToggler,
  DropdownMenu4,
} from "../../../../_metronic/_partials/dropdowns";

export function Filter() {
  const user = useSelector(({ auth }) => auth.user, shallowEqual);

  useEffect(() => {
    return () => {};
  }, [user]);

  return (
    <>
      {user && (
        <div
        className="d-flex flex-row-auto w-100"
          id="kt_profile_aside"
        >
          <div className="card filterFixedheader">
                  <div className="card-body">
                    <div className="d-flex flex-wrap flex-column align-items-center">
                      <div className="w-100 d-flex">
                        <div className=" d-flex">
                          <div className="d-flex">
                            <div className="m-auto">                              
                              <i className="fa fa-filter fa-sm mx-3 my-auto"></i>
                            </div>
                            <span className="m-auto"><input type="text" placeholder="Filter by task name..." className="form-control" /></span> 
                          </div>                          
                        </div>
                        <div className=" d-flex ml-auto ">                          
                          <form autoComplete="off" className="filterForm">
                            <GroupFilter></GroupFilter>
                            <GroupFilterSelectSubtask></GroupFilterSelectSubtask>
                          </form>
                        </div>
                        </div>
                    </div>
                  </div>
                </div>
        </div>
      )}
    </>
  );
}

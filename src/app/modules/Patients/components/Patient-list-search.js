/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import {
  DropdownItemToggler,
  DropdownMenu4,
} from "../../../../_metronic/_partials/dropdowns";

export  class AsideSearch extends React.Component {
  constructor(){
    super();
    this.state={
        show:false
    }
}

render() {
  return (
    <div className="d-flex align-items-center flex-wrap patientsList card_bg w-100">
      {/* begin::Form */}
      <form className="p-0 w-100">
        <div className="d-flex w-100 position-relative">          
          <Dropdown drop="down" alignRight className="mr-auto">
            <Dropdown.Toggle
              as={DropdownItemToggler}
              id="kt_quick_actions_search_toggle"
            >
              <OverlayTrigger
                placement="left"
                overlay={
                  <Tooltip id="quick-search-tooltip" className="tool_bg">Quick search</Tooltip>
                }
              >
                <a href="#" className="d-flex pt-3 pl-2">
                  <span className="svg-icon svg-icon-xl font-weight-bold font-size-14 color_292D34">
                    All Categories
                    <img className="pl-2" src={toAbsoluteUrl("/media/patients/cat_caret.svg")} />
                  </span>
                </a>
              </OverlayTrigger>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
              <DropdownMenu4 />
            </Dropdown.Menu>
          </Dropdown>
        
          <div className="d-flex h-40px">
            {
              this.state.show?
              <div className="patientSearch">
                <input
                  type="text"
                  className="form-control border-0 h-40px"
                  placeholder="Search..."
                  id="patientlistSearch"
                  autoComplete="false"
                />  
              </div>
              : null
            }
            <div className="ml-auto my-auto searchIcon">
              <Link to="#">
                <span className="svg-icon svg-icon-lg mr-4">
                  <img
                    src={toAbsoluteUrl("/media/patients/cat_menu.svg")}
                  />
                </span>
              </Link>
            </div>
            <div className="ml-auto my-auto searchIcon">
              <Link
                to="#"
               onClick={()=>{this.setState({show:!this.state.show})}}>
                <span className="svg-icon svg-icon-lg">
                  <img
                    src={toAbsoluteUrl("/media/patients/cat_search.svg")}
                  />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </form>
      {/* end::Form */}
    </div>
  );
}
}
export default AsideSearch;
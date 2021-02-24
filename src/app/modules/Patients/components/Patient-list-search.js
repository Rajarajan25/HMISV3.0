/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
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
          <Dropdown drop="down" alignRight>
            <Dropdown.Toggle
              as={DropdownItemToggler}
              id="kt_quick_actions_search_toggle"
            >
              <OverlayTrigger
                placement="left"
                overlay={
                  <Tooltip id="quick-search-tooltip">Quick search</Tooltip>
                }
              >
                <a
                  href="#"
                  className="btn btn-icon btn-default btn-hover-primary ml-2 h-40px w-40px flex-shrink-0"
                >
                  <span className="svg-icon svg-icon-xl">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/Code/Compiling.svg")}
                    />
                  </span>
                </a>
              </OverlayTrigger>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
              <DropdownMenu4 />
            </Dropdown.Menu>
          </Dropdown>
        
          <div className="d-flex h-40px w-100">
            {
              this.state.show?
              <div className="patientSearch">
                <input
                  type="text"
                  className="form-control border-0 h-40px"
                  placeholder="Search..."
                  id="generalSearch"
                  autoComplete="false"
                />  
              </div>
              : null
            }
            <div className="ml-auto my-auto searchIcon">
              <Link
                to="#"
               onClick={()=>{this.setState({show:!this.state.show})}}>
                <span className="svg-icon svg-icon-lg">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/General/Search.svg")}
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
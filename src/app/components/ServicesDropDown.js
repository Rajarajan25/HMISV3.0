import { Dropdown } from "react-bootstrap";
import React from 'react';
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
export function ServicesDropDown(props) {
    return(<Dropdown drop="down" alignCenter className="dropdown h-100">
        <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
            <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                <div class="d-flex mt-1 mb-1 justify-content-center">
                    <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#E6511B` }}>{props.item.service||""}
                        <span className="dropdown_label_remove" style={{ backgroundColor: `#E6511B` }}>
                            <span className="dropdown_label_remove_icon">x</span>
                        </span>
                    </span>
                </div>
            </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
            <ServicesDropdownMenu />
        </Dropdown.Menu>
    </Dropdown>)
}

export function ServicesDropdownMenu() {




    //testing.............
    return <>
        {/*begin::Navigation*/}
        <ul className="navi navi-hover">
            <li className="navi-item">
                <div className="service_select p-4">
                    <div class="d-inline-flex justify-content-center">
                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#E6511B` }}>Acupunture
                    <span className="dropdown_label_remove" style={{ backgroundColor: `#E6511B` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                    <div class="d-inline-flex justify-content-center">
                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#FD7FAB` }}>Dental
                    <span className="dropdown_label_remove" style={{ backgroundColor: `#FD7FAB` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                    <div class="d-inline-flex justify-content-center">
                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#EA80FC` }}>Skin Care
                    <span className="dropdown_label_remove" style={{ backgroundColor: `#EA80FC` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                    <div class="d-inline-flex justify-content-center">
                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#1DBC9C` }}>Ambien
                    <span className="dropdown_label_remove" style={{ backgroundColor: `#1DBC9C` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="service_search position-relative">
                    <img src={toAbsoluteUrl("/media/patients/drop_search.svg")} alt="search" className="drop_search" />
                    <input type="text" placeholder="Search" className="form-control" />
                </div>
            </li>
            <li className="navi-item">
                <div className="dropdown-menu-search-main">
                    <div class="dropdown-menu-search-title">Relevant</div>
                    <div className="service_select">
                        <div class="d-flex justify-content-left py-1">
                            <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#E6511B` }}>Acupunture</span>
                        </div>
                        <div class="d-flex justify-content-left py-1">
                            <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#FD7FAB` }}>Dental</span>
                        </div>
                        <div class="d-flex justify-content-left py-1">
                            <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#EA80FC` }}>Skin Care</span>
                        </div>
                        <div class="d-flex justify-content-left py-1">
                            <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#1DBC9C` }}>Ambien</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        {/*end::Navigation*/}
    </>
}

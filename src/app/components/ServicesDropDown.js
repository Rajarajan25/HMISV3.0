import { Dropdown } from "react-bootstrap";
import React, { useEffect } from 'react';
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { useQuery, gql } from "@apollo/client";
import { GET_SERVICE } from "../modules/Patients/graphql/queries";
import Search from "./Search"
export function ServicesDropDown(props) {
    return (<Dropdown drop="down" aligncenter="true" className="dropdown h-100">
        <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle1" className="h-100">
            <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                <div className="d-flex mt-1 mb-1 justify-content-center">
                    <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#E6511B` }}>{props.item.services || "Select service"}
                        <span className="dropdown_label_remove" style={{ backgroundColor: `#E6511B` }}>
                            <span className="dropdown_label_remove_icon">x</span>
                        </span>
                    </span>
                </div>
            </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
            <ServicesDropdownMenu handleChangeDropDown={props.handleChangeDropDown} item={props.item} />
        </Dropdown.Menu>
    </Dropdown>)
}
export function ServicesDropdownMenu(props) {
    const { handleChangeDropDown, item } = props;
    const serviceArray = [
        { name: "Acupunture", color: "#E6511B" },
        { name: "Dental", color: "#FD7FAB" },
        { name: "Skin Care", color: "#EA80FC" },
        { name: "Ambien", color: "#1DBC9C" }];

    const { data, loading } = useQuery(GET_SERVICE);
    const [listData, setListData] = React.useState(serviceArray);
    let handleSerach = (arr) => {
        setListData(arr);
    }
    useEffect(() => {
        if (loading === false && data) {
            setListData(data.getService);
        }
    }, [data])

    return <>
        {/*begin::Navigation*/}
        <ul className="navi navi-hover">
            <li className="navi-item">
                <div className="service_select p-4">
                    <div className="d-inline-flex justify-content-center">
                    <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#E6511B1a` }}>
                                            {/* <span className="ProviderIcon" style={{ backgroundColor: staff.color_code }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span> */}
                                            <span className="ProviderName" style={{ color:  `#E6511B` }}>Dental</span>
                            <span className="dropdown_label_remove" style={{ backgroundColor: `#E6511B` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                    <div className="d-inline-flex justify-content-center">
                    <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#E6511B1a` }}>
                                            {/* <span className="ProviderIcon" style={{ backgroundColor: staff.color_code }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span> */}
                                            <span className="ProviderName" style={{ color:  `#E6511B` }}>Dental</span>
                            <span className="dropdown_label_remove" style={{ backgroundColor: `#E6511B` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                    <div className="d-inline-flex justify-content-center">
                    <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#EA80FC1a` }}>
                                            {/* <span className="ProviderIcon" style={{ backgroundColor: staff.color_code }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span> */}
                                            <span className="ProviderName" style={{ color:  `#EA80FC` }}>Skin Care</span>
                            <span className="dropdown_label_remove" style={{ backgroundColor: `#EA80FC` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                        
                    </div>
                    <div className="d-inline-flex justify-content-center">
                    <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#1DBC9C1a` }}>
                                            {/* <span className="ProviderIcon" style={{ backgroundColor: staff.color_code }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span> */}
                                            <span className="ProviderName" style={{ color:  `#1DBC9C` }}>Ambian</span>
                            <span className="dropdown_label_remove" style={{ backgroundColor: `#1DBC9C` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                    
                </div>
                {/* <div className="service_search position-relative">
                    <img src={toAbsoluteUrl("/media/patients/drop_search.svg")} alt="search" className="drop_search" />
                    <input type="text" placeholder="Search" className="form-control" onChange={handleSerach} />
                </div> */}
                <Search handleSearch={handleSerach} data={listData} uiType="small" />
            </li>
            {data &&
                <li className="navi-item">
                    <div className="dropdown-menu-search-main">
                        <div className="dropdown-menu-search-title">Relevant</div>
                        <div className="service_select">
                            {
                                data.getService.map((e) => {
                                    return <div class="d-flex justify-content-left py-1" key={e.type}>
                                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: e.color_code + "1a" }}>
                                            {/* <span className="ProviderIcon" style={{ backgroundColor: staff.color_code }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span> */}
                                            <span className="ProviderName" style={{ color: e.color_code }}>{e.name}</span>
                                        </span>                        </div>
                                })}
                        </div>
                    </div>
                </li>}
        </ul>
        {/*end::Navigation*/}

    </>
}

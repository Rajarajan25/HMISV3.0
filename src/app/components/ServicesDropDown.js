import { Dropdown } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { useQuery, gql } from "@apollo/client";
import Search from "./Search"
const PageName = {
    STAFF: "staff",
    SERVICE: "service"
};
const GET_SERVICE = gql`
  query{
    getService{
      id
      name
      color_code
    } 
    }
  `;

const GET_STAFF = gql`
  query{
   
    getStaffs{
        id
        name
        color_code
    }
    }
  `;
export function ServicesDropDown(props) {
    const { pagename } = props;
    const queryData = pagename === PageName.STAFF ? GET_SERVICE : GET_STAFF;
    const { data, loading } = useQuery(queryData);
    const [listData, setListData] = useState([]);
    React.useEffect(() => {
        if (loading === false && data) {
            if (listData.length === 0) {
                setListData(pagename === PageName.STAFF ? data.getService : data.getStaffs);
            }
        }
    }, [data]);
    return (
        <Dropdown drop="down" aligncenter="true" className="dropdown h-100">
            <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle1" className="h-100">
                <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                    <div className="d-flex mt-1 mb-1 justify-content-center">
                        {props.pagename === PageName.STAFF ? <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#E6511B` }}>{props.item.services || "Select service"}
                            <span className="dropdown_label_remove" style={{ backgroundColor: `#E6511B` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span> :
                            <>
                                <span className="ProviderIcon" style={{ backgroundColor: `#2ecd6f` }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                                <span className="ProviderIcon" style={{ backgroundColor: `#1D58FF` }}>GM</span>
                                <span className="ProviderIcon" style={{ backgroundColor: `#2ecd6f` }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                                <span className="ProviderIcon" style={{ backgroundColor: `#2ecd6f` }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                                <span className="ProviderIcon" style={{ backgroundColor: `#A2A2A2` }}>+5</span>
                            </>}
                    </div>
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                <ServicesDropdownMenu handleChangeDropDown={props.handleChangeDropDown} item={props.item} data={listData} pagename={props.pagename} />
            </Dropdown.Menu>
        </Dropdown>
    )
}
export function ServicesDropdownMenu(props) {
    const { handleChangeDropDown, item, data } = props;
    const [listData, setListData] = React.useState(data);
    let handleSerach = (arr) => {
        setListData(arr);
    }

    return <>
        {/*begin::Navigation*/}
        <ul className="navi navi-hover">
            <li className="navi-item">
                <div className="service_select p-4">
                    <div className="d-inline-flex justify-content-center">
                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#E6511B1a` }}>
                            {/* <span className="ProviderIcon" style={{ backgroundColor: staff.color_code }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span> */}
                            <span className="ProviderName" style={{ color: `#E6511B` }}>Dental</span>
                            <span className="dropdown_label_remove" style={{ backgroundColor: `#E6511B` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                    <div className="d-inline-flex justify-content-center">
                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#E6511B1a` }}>
                            {/* <span className="ProviderIcon" style={{ backgroundColor: staff.color_code }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span> */}
                            <span className="ProviderName" style={{ color: `#E6511B` }}>Dental</span>
                            <span className="dropdown_label_remove" style={{ backgroundColor: `#E6511B` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                    <div className="d-inline-flex justify-content-center">
                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#EA80FC1a` }}>
                            {/* <span className="ProviderIcon" style={{ backgroundColor: staff.color_code }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span> */}
                            <span className="ProviderName" style={{ color: `#EA80FC` }}>Skin Care</span>
                            <span className="dropdown_label_remove" style={{ backgroundColor: `#EA80FC` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>

                    </div>
                    <div className="d-inline-flex justify-content-center">
                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#1DBC9C1a` }}>
                            {/* <span className="ProviderIcon" style={{ backgroundColor: staff.color_code }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span> */}
                            <span className="ProviderName" style={{ color: `#1DBC9C` }}>Ambian</span>
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

            <li className="navi-item">
                <div className="dropdown-menu-search-main">
                    <div className="dropdown-menu-search-title">Relevant</div>
                    <div className="service_select">
                        {
                            listData.map((e) => {
                                return <div class="d-flex justify-content-left py-1" key={e.type}>
                                    <span className="specialInfo text-white position-relative" style={{ backgroundColor: e.color_code + "1a" ||`#2ecd6f1a` }}>
                                        <span className="ProviderIcon" style={{ backgroundColor: e.color_code || `#2ecd6f` }}>{e.avatar ? <img src={toAbsoluteUrl(e.avatar)} alt="" className="mh-100 d-block rounded-circle" /> : e.name ? e.name.substr(0, 2).toUpperCase() : ""}</span>
                                        <span className="ProviderName" style={{ color: e.color_code || `#2ecd6f`}}>{e.name}</span>
                                    </span>                        </div>
                            })}
                    </div>


                </div>
            </li>
        </ul>
        {/*end::Navigation*/}

    </>
}

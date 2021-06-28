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
    const { pagename, item } = props;
    const current = JSON.parse(JSON.stringify(item))
    const initValue = pagename === PageName.SERVICE ? {
        staff: current.service_relationships.service_staff
    } : { staff: current.staff_services }
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
    const handleItemSelect = (item) => {
        // let selectedVal=JSON.parse(JSON.stringify(selectedItem))
        let selectedItem = JSON.parse(JSON.stringify(initValue.staff))
        if (pagename === PageName.SERVICE) {
            let index = selectedItem.findIndex(value => value.staff_id.id === item.id);
            if (index != -1) {
                selectedItem = selectedItem.filter(el => el.staff_id.id !== item.id);
            } else {
                let id = { "staff_id": item.id }
                selectedItem.push(id);
            }
            props.handleChangeServices(selectedItem, "service_staff", props.item.id);
        }
        else {
            let index = selectedItem.findIndex(value => value.service_id.id === item.id);
            if (index != -1) {
                selectedItem = selectedItem.filter(el => el.service_id.id !== item.id);
            } else {
                let id = { "service_id": item.id }
                selectedItem.push(id);
            }
            props.handleChangeServices(selectedItem, "staff_services", props.item.id);
        }


    }
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
                                {item.service_relationships.service_staff.map(val => {
                                    return (
                                        <>
                                            <span className="ProviderIcon" style={{ backgroundColor: val.staff_id.color_code || `#2ecd6f` }}>{val.staff_id.booking_url ? <img src={toAbsoluteUrl(val.staff_id.booking_url)} alt="" className="mh-100 d-block rounded-circle" /> : val.staff_id.name ? val.staff_id.name.substr(0, 2).toUpperCase() : ""}</span>


                                        </>
                                    )
                                })}

                            </>}
                    </div>
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                <ServicesDropdownMenu handleItemSelect={handleItemSelect} item={props.item} data={listData} pagename={props.pagename} />
            </Dropdown.Menu>
        </Dropdown>
    )
}
export function ServicesDropdownMenu(props) {
    const { handleItemSelect, item, data, pagename } = props;
    const [listData, setListData] = React.useState(data);
    let handleSerach = (arr) => {
        setListData(arr);
    }
    let itemData = pagename === PageName.SERVICE ? item.service_relationships.service_staff : item.staff_services

    return <>
        {/*begin::Navigation*/}
        <ul className="navi navi-hover">
            <li className="navi-item">
                <div className="service_select p-4">

                    {itemData.map(val => {
                        return (
                            <div className="d-inline-flex justify-content-center">
                                {pagename === PageName.SERVICE && <span className="specialInfo text-white position-relative" style={{ backgroundColor: val.staff_id.color_code + "1a" || `#2ecd6f1a` }}>
                                    <span className="ProviderName" style={{ color: val.staff_id.color_code || `#2ecd6f` }}>{val.staff_id.name}</span>
                                    <span className="dropdown_label_remove" style={{ backgroundColor: val.staff_id.color_code }}>
                                        <span className="dropdown_label_remove_icon">x</span>
                                    </span>
                                </span>}
                                {pagename === PageName.STAFF && <span className="specialInfo text-white position-relative" style={{ backgroundColor: val.service_id.color_code + "1a" || `#2ecd6f1a` }}>
                                    <span className="ProviderName" style={{ color: val.service_id.color_code || `#2ecd6f` }}>{val.service_id.name}</span>
                                    <span className="dropdown_label_remove" style={{ backgroundColor: val.service_id.color_code }}>
                                        <span className="dropdown_label_remove_icon">x</span>
                                    </span>
                                </span>}
                            </div>
                        )
                    })}




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
                                return <div class="d-flex justify-content-left py-1" key={e.type} onClick={() => handleItemSelect(e)}>
                                    <span className="specialInfo text-white position-relative" style={{ backgroundColor: e.color_code + "1a" || `#2ecd6f1a` }}>
                                        <span className="ProviderIcon" style={{ backgroundColor: e.color_code || `#2ecd6f` }}>{e.booking_url ? <img src={toAbsoluteUrl(e.booking_url)} alt="" className="mh-100 d-block rounded-circle" /> : e.name ? e.name.substr(0, 2).toUpperCase() : ""}</span>
                                        <span className="ProviderName" style={{ color: e.color_code || `#2ecd6f` }}>{e.name}</span>
                                    </span>                        </div>
                            })}
                    </div>


                </div>
            </li>
        </ul>
        {/*end::Navigation*/}

    </>
}

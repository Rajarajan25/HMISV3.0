import { Dropdown } from "react-bootstrap";
import React from 'react';
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
export function ServicesDropDown(props) {
    return(<Dropdown drop="down" aligncenter="true"  className="dropdown h-100">
        <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle1" className="h-100">
            <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                <div className="d-flex mt-1 mb-1 justify-content-center">
                    <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#E6511B` }}>{props.item.services||"Select service"}
                        <span className="dropdown_label_remove" style={{ backgroundColor: `#E6511B` }}>
                            <span className="dropdown_label_remove_icon">x</span>
                        </span>
                    </span>
                </div>
            </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
            <ServicesDropdownMenu handleChangeDropDown={props.handleChangeDropDown} item={props.item}/>
        </Dropdown.Menu>
    </Dropdown>)
}
export function ServicesDropdownMenu(props) {
    const {handleChangeDropDown, item} = props;
    const serviceArray=[
        {type: "Acupunture", color: "#E6511B"},
        {type: "Dental", color: "#FD7FAB"},
        {type: "Skin Care", color: "#EA80FC"},
        {type: "Ambien", color: "#1DBC9C"}];
        
    const [service, setSerivce] = React.useState(serviceArray);
    let handleSerach = (event) => {
        let search=event.target.value;
        let arr=serviceArray.filter((e)=>{return e.type.toLowerCase().match(new RegExp(search.toLowerCase(), "g"))});
        setSerivce(arr);
    }
    
    return <>
        {/*begin::Navigation*/}
        <ul className="navi navi-hover">
            <li className="navi-item">
                <div className="service_select p-4">
                    <div className="d-inline-flex justify-content-center">
                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#E6511B` }} onClick={()=>handleChangeDropDown("Acupunture", item.id), "service"}>Acupunture
                    <span className="dropdown_label_remove" style={{ backgroundColor: `#E6511B` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                    <div className="d-inline-flex justify-content-center">
                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#FD7FAB` }} onClick={()=>handleChangeDropDown("Dental", item.id, "service")}>Dental
                    <span className="dropdown_label_remove" style={{ backgroundColor: `#FD7FAB` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                    <div className="d-inline-flex justify-content-center">
                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#EA80FC` }} onClick={()=>handleChangeDropDown("Skin Care", item.id, "service")}>Skin Care
                    <span className="dropdown_label_remove" style={{ backgroundColor: `#EA80FC` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                    <div className="d-inline-flex justify-content-center">
                        <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#1DBC9C` }} onClick={()=>handleChangeDropDown("Ambien", item.id, "service")}>Ambien
                    <span className="dropdown_label_remove" style={{ backgroundColor: `#1DBC9C` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="service_search position-relative">
                    <img src={toAbsoluteUrl("/media/patients/drop_search.svg")} alt="search" className="drop_search" />
                    <input type="text" placeholder="Search" className="form-control" onChange={handleSerach} />
                </div>
            </li>
           <li className="navi-item">
                <div className="dropdown-menu-search-main">
                    <div className="dropdown-menu-search-title">Relevant</div>
                    <div className="service_select">
                        {
                         service.map((e)=> {
                            return <div class="d-flex justify-content-left py-1" key={e.type}>
                            <span className="specialInfo text-white position-relative" style={{ backgroundColor: e.color }} onClick={()=>handleChangeDropDown(e.type, item._id, "service")}> {e.type}</span>
                        </div>
                        })}
                    </div>
                </div>
            </li>
        </ul>
        {/*end::Navigation*/}

    </>
}

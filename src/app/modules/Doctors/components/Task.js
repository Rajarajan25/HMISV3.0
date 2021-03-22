import React from "react";
import styled from "@emotion/styled";
import { Draggable } from "react-beautiful-dnd";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "react-bootstrap";
import { DropdownItemToggler } from "../../../../_metronic/_partials/dropdowns";
const Container = styled("div")`
  border: 0;
  margin-bottom: 0px;
  border-radius: 0px;
  padding: 2px;
 
  background: ${props => (props.isDragging ? "lightgreen" : "white")};
`;

const Task = ({ task, index, column }) => {
    const isDragDisabled = (column.id != "column-0");
      
     return (
      
        <Draggable 
        draggableId={task.id} index={index} type="task"  key={task.id} >
            {(provided, snapshot) => (
                
                <div>
                         
                
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    {...snapshot.draggingOver="column-1"}
                   
                >
                    
                    {provided.placeholder}
                       {column.id == "column-0" ? <li className="col-lg-3 ">
                                        <div className="userLogoicon align-content-center">
                                            <Link to="#" className="d-flex"><span className="listprofileIcon" style={{
                                                backgroundColor: `#2ecd6f`
                                            }}>AK</span> <span>{task.name
                                            }</span></Link >
                                            <Link to="#" className="edit_staff">
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={
                                                        <Tooltip id="quick-search-tooltip" className="tool_bg">Rename</Tooltip>
                                                    }>
                                                    <div className="tab_col mt-0 mb-0">
                                                        <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                                                    </div>
                                                </OverlayTrigger>
                                            </Link >
                                        </div>
                                    </li> : null}
                                    
                                    </Container>
                    <div className="innerContent collapse show" id="availabledoctors">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="topMiddlecontent">
 <div className="d-flex drag_sel drag_selected position-relative">
                                    <ul className="list-inline w-100 row">
                                 
                                    {column.id == "column-1" ? <li className="col-lg-3 my-auto">
                                        <div className="userLogoicon align-content-center">
                                             <span>11/3/19</span>
                                            
                                        </div>
                                    </li>  : null}
                                    {column.id == "column-2" ? <li className="col-lg-3 my-auto ">

                                        <div className="specialInfo text-white align-content-center" style={{ backgroundColor: `#E6511B` }}>Acupunture</div>

                                    </li> : null}
                                    {column.id == "column-3" ? <li className="col-lg-1 activeStatuscontent active_clr text-white align-content-center">
                                        <Dropdown drop="down" className="dropdown h-100">
                                            <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                                <a href="#" className="d-flex text-white h-100 ">Active</a>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-50 drop_nav">
                                                <ul className="navi navi-hover">
                                                    <li className="navi-item">
                                                        <a href="#" className="navi-link">
                                                            <span className="navi-circle active_bg"></span>
                                                            <span className="navi-text">Active</span>
                                                        </a>
                                                    </li>
                                                    <li className="navi-item">
                                                        <a href="#" className="navi-link">
                                                            <span className="navi-circle inactive_bg"></span>
                                                            <span className="navi-text">Inactive</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li> : null}
                                    {column.id == "column-4" ? <li className="col-lg-1 activeStatuscontent male_bg text-white">
                                        <Dropdown drop="down" className="dropdown h-200">
                                            <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-500">
                                                <a href="#" className="d-flex text-white h-500 ">Male</a>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav sx_hover">
                                                <ul className="navi navi-hover">
                                                    <li className="navi-item">
                                                        <a href="#" className="navi-link">
                                                            <span className="navi-circle active_bg"></span>
                                                            <span className="navi-text">Active</span>
                                                        </a>
                                                    </li>
                                                    <li className="navi-item">
                                                        <a href="#" className="navi-link">
                                                            <span className="navi-circle inactive_bg"></span>
                                                            <span className="navi-text">Inactive</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li> : null}
                                    {column.id == "column-5" ? <li className="col-lg-1 my-auto">
                                        <Dropdown drop="down" className="dropdown h-100">
                                            <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                                <div className="d-flex ">
                                                    <div className="d-flex mt-2 mb-2">
                                                        <span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span>
                                                        <span>Chat</span>
                                                    </div>
                                                </div>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                                                <ul className="navi navi-hover">
                                                    <li className="navi-item">
                                                        <a href="#" className="navi-link">
                                                            <span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="mt-0" /></span>
                                                            <span>Chat</span>
                                                        </a>
                                                    </li>
                                                    <li className="navi-item">
                                                        <a href="#" className="navi-link">
                                                            <span className="avails video_bg"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="mt-0" /></span>
                                                            <span>Video</span>
                                                        </a>
                                                    </li>
                                                    <li className="navi-item">
                                                        <a href="#" className="navi-link">
                                                            <span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="mt-0" /></span>
                                                            <span>Phone</span>
                                                        </a>
                                                    </li>
                                                    <li className="navi-item">
                                                        <a href="#" className="navi-link">
                                                            <span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="mt-0" /></span>
                                                            <span>Inperson</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </li> : null}
                                    {column.id == "column-6" ?  <li className="col-lg-2 activeStatuscontent my-auto ">
                                        <div className="userLogoicon align-content-center">
                                             <span>{task.email_signature}</span>
                                            
                                        </div>
                                    </li> : null}
                                    {column.id == "column-7" ?<li className="col-lg-3 my-auto">
                                        <div className="userLogoicon align-content-center">
                                             <span>{task.mobile_number}</span>
                                            
                                            </div>
                                       
                                       
                                    </li> : null}
                                    </ul>
                                    </div>
                                    </div>
                                    </div></div>
                                    </div>
                                    </div>
                      
                    
                )}
            </Draggable>
    );
};

export default Task;

export function StatusDropdownMenu() {
    return <>
        {/*begin::Navigation*/}
        <ul className="navi navi-hover">
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-circle active_bg"></span>
                    <span className="navi-text">Active</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-circle inactive_bg"></span>
                    <span className="navi-text">Inactive</span>
                </a>
            </li>
        </ul>
        {/*end::Navigation*/}

    </>
}




export function SxDropdownMenu() {

    return <>
        {/*begin::Navigation*/}
        <ul className="navi navi-hover">
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-text">Male</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-text">Female</span>
                </a>
            </li>
        </ul>
        {/*end::Navigation*/}

    </>
}


export function AvailDropdownMenu() {
    return <>
        {/*begin::Navigation*/}

        <ul className="navi navi-hover">
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="mt-0" /></span>
                    <span>Chat</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="avails video_bg"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="mt-0" /></span>
                    <span>Video</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="mt-0" /></span>
                    <span>Phone</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="mt-0" /></span>
                    <span>Inperson</span>
                </a>
            </li>
        </ul>
        {/*end::Navigation*/}

    </>
}

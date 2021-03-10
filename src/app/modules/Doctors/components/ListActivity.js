import React from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {DropdownItemToggler} from "../../../../_metronic/_partials/dropdowns";

export function ListActivity01() {  

  return (
    <div className="contentAreaouter">
            <div className="contentArea">
              <div className="topHeadercontent d-flex">
                <div className="toggleLefticon">
                  <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#availabledoctors" className="borderColor11 textColor11">
                    <i className="fa fa-angle-down"></i>
                  </Link >                    
                </div>
                <ul className="list-inline w-100 row">
                  <li className="col-lg-3">
                    <span className="headingHighlight customProfileBG11 text-white">Service Provider</span>
                    <span className="tasklistCount">1 Staff</span>
                  </li>
                  <li className="col-lg-1"><span>Last seen</span></li>
                  <li className="col-lg-1"><span>Services</span></li>
                  <li className="col-lg-1"><span>Status</span></li>
                  <li className="col-lg-1"><span>Sex</span></li>
                  <li className="col-lg-1"><span>Availability</span></li>
                  <li className="col-lg-2"><span>Email</span></li>
                  <li className="col-lg-2 position-relative"><span>Phone</span> <span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span></li>
                </ul>
              </div>
              <div className="innerContent collapse show" id="availabledoctors">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="topMiddlecontent">
                      <div className="d-flex drag_sel drag_selected position-relative">
                        <div className="drag_hov mh-100 my-auto">
                            <span className="cu-task-row-toggle__marker"></span>
                            <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                        </div>
                        <ul className="list-inline w-100 row">
                          <li className="col-lg-3 my-auto">
                            <div className="userLogoicon align-content-center">
                              <Link to="#" className="d-flex"><span className="listprofileIcon" style={{
                backgroundColor: `#2ecd6f`}}>AK</span> <span>Anand</span></Link >
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
                          </li>
                          <li className="col-lg-1 my-auto">11/3/19</li>
                          <li className="col-lg-1 my-auto">
                            <div class="d-flex mt-1 mb-1 justify-content-center">
                              <span className="specialInfo text-white position-relative" style={{backgroundColor: `#E6511B`}}>Acupunture 
                                <span className="dropdown_label_remove" style={{backgroundColor: `#E6511B`}}>
                                  <span className="dropdown_label_remove_icon">x</span>
                                </span>
                              </span>
                            </div>
                          </li>
                          <li className="col-lg-1 activeStatuscontent active_clr text-white">
                            <Dropdown drop="down" alignCenter className="dropdown h-100">
                              <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                  <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Active</a>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                                <ServicesDropdownMenu />
                              </Dropdown.Menu>
                            </Dropdown>
                          </li>
                          <li className="col-lg-1 activeStatuscontent male_bg text-white">
                            <Dropdown drop="down" alignCenter className="dropdown h-100">
                              <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                  <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Male</a>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav sx_hover">
                                <SxDropdownMenu />
                              </Dropdown.Menu>
                            </Dropdown>
                          </li>
                          <li className="col-lg-1 my-auto">
                          <Dropdown drop="down" alignCenter className="dropdown h-100">
                              <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                <div className="d-flex justify-content-center flex-column avail_wid">
                                  <div className="d-flex mt-1 mb-1 p-1">
                                    <span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span>
                                    <span>Chat</span>
                                  </div>
                                </div>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                                <AvailDropdownMenu />
                              </Dropdown.Menu>
                            </Dropdown>
              
                          </li>
                          <li className="col-lg-2 activeStatuscontent my-auto">sagayaraj@lookman.in</li>
                          <li className="col-lg-2 my-auto">
                            <div className="ph_no">9876543210</div>
                            <div className="avalib">
                            <div className="d-flex justify-content-center">
                              <OverlayTrigger 
                                  placement="top"
                                  overlay={
                                  <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                                  }>
                                <div className="tab_col mt-0 mb-0">
                                  <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" className="mai1" />
                                </div>
                              </OverlayTrigger>
                              <OverlayTrigger 
                                  placement="top"
                                  overlay={
                                  <Tooltip id="quick-search-tooltip" className="tool_bg">Delete</Tooltip>
                                  }>
                                <div className="tab_col mt-0 mb-0">
                                  <img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="delete" className="mai" />
                                </div>
                              </OverlayTrigger>
                              <OverlayTrigger 
                                  placement="top"
                                  overlay={
                                  <Tooltip id="quick-search-tooltip" className="tool_bg">Duplicate</Tooltip>
                                  }>
                                <div className="tab_col mt-0 mb-0">
                                  <img src={toAbsoluteUrl("/media/patients/blue_copy_icon.svg")} alt="copy" />
                                </div>
                              </OverlayTrigger>
                              <OverlayTrigger 
                                  placement="top"
                                  overlay={
                                  <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                                  }>
                                <div className="tab_col mt-0 mb-0">
                                  <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                                </div>
                              </OverlayTrigger>
                            </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <ul className="newTask_1 row">
                        <li className="col-lg-8">
                          <Link to="#" className="userLogoicon">
                            <button type="button" className="removeNewtask">X</button>
                            <input type="text" className="newTaskinput" name="" id="" placeholder="Doctor name" />  
                          </Link>                            
                        </li>              
                        <li className="col-lg-4 text-right">
                          <span className="ctrlSpan">ctrl + enter to open </span>
                          <Link  to="javascript:void(0)" className="rounddashedCircle mx-1 text-center" data-toggle="modal" data-target="#medicalDetails">
                            <i className="fas fa-edit fa-sm"></i>
                          </Link>
                          <Link  to="javascript:void(0)" className="rounddashedCircle mx-1 text-center" data-toggle="modal" data-target="#medicalDetails">
                            <i className="fa fa-tags fa-sm"></i>
                          </Link>
                          <button type="button" className="btn btn-primary btn-sm font-sm mx-1 saveNewtask">SAVE</button>
                        </li>
                      </ul>

                    </div>
                    <button type="button" className="customNewtaskBTN">+ New Staff</button>
                  </div>    
                </div>                 
              </div>
            </div>
          </div>
              
  );
}

export function ListActivity02() {  

  return (
    <div className="contentAreaouter">                  
      <div className="contentArea">
          <div className="topHeadercontent d-flex">
            <div className="toggleLefticon">
              <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#availabledoctors" className="borderColor12 textColor12">
                <i className="fa fa-angle-down"></i>
              </Link >                    
            </div>
            <ul className="list-inline w-100 row">
              <li className="col-lg-3">
                <span className="headingHighlight customProfileBG12 text-white">Staff</span>
                <span className="tasklistCount">1 Staff</span>
              </li>
              <li className="col-lg-1"><span>Last seen</span></li>
              <li className="col-lg-1"><span>Services</span></li>
              <li className="col-lg-1"><span>Status</span></li>
              <li className="col-lg-1"><span>Sex</span></li>
              <li className="col-lg-1"><span>Availability</span></li>
              <li className="col-lg-2"><span>Email</span></li>
              <li className="col-lg-2 position-relative"><span>Phone</span> <span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span></li>
            </ul>
          </div>
          <div className="innerContent collapse show" id="availabledoctors">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="topMiddlecontent">
                  <div className="d-flex drag_sel position-relative">
                    <div className="drag_hov mh-100 my-auto">
                        <span className="cu-task-row-toggle__marker"></span>
                        <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                    </div>
                    <ul className="list-inline w-100 row">
                      <li className="col-lg-3 my-auto">
                        <div className="userLogoicon align-content-center">
                          <Link to="#" className="d-flex"><span className="listprofileIcon" style={{backgroundColor: `#2ecd6f`}}>AK</span> <span>Sivagami</span></Link >
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
                      </li>
                      <li className="col-lg-1 my-auto">10/16/20</li>
                      <li className="col-lg-1 my-auto">
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo text-white" style={{backgroundColor: `#FD7FAB`}}>Dental</span>
                        </div>
                      </li>
                      <li className="col-lg-1 activeStatuscontent inactive_clr text-white">Inactive</li>
                      <li className="col-lg-1 activeStatuscontent female_bg text-white">Female</li>
                      <li className="col-lg-1 my-auto">
                        <div className="d-flex justify-content-center flex-column avail_wid">
                          <div className="d-flex mt-2 mb-2"><span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="" /></span><span>Phone</span></div>
                        </div>
                      </li>
                      <li className="col-lg-2 my-auto activeStatuscontent">sagayaraj@lookman.in</li>
                      <li className="col-lg-2 my-auto">
                        <div className="ph_no">9876543210</div>
                        <div className="avalib">
                          <div className="d-flex justify-content-center">
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" className="mai1" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Delete</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="delete" className="mai" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Duplicate</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_copy_icon.svg")} alt="copy" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                              </div>
                            </OverlayTrigger>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <button type="button" className="customNewtaskBTN">+ New Staff</button>
              </div>    
            </div>                 
          </div>
        </div>   
    </div>
  );
}

export function ListActivity03() {  

  return (
    
    <div className="contentAreaouter">                  
      <div className="contentArea">
          <div className="topHeadercontent d-flex">
            <div className="toggleLefticon">
              <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#availabledoctors" className="borderColor13 textColor13">
                <i className="fa fa-angle-down"></i>
              </Link >                    
            </div>
            <ul className="list-inline w-100 row">
              <li className="col-lg-3">
                <span className="headingHighlight customProfileBG13 text-white">Admin</span>
                <span className="tasklistCount">1 Staff</span>
              </li>
              <li className="col-lg-1"><span>Last seen</span></li>
              <li className="col-lg-1"><span>Services</span></li>
              <li className="col-lg-1"><span>Status</span></li>
              <li className="col-lg-1"><span>Sex</span></li>
              <li className="col-lg-1"><span>Availability</span></li>
              <li className="col-lg-2"><span>Email</span></li>
              <li className="col-lg-2 position-relative"><span>Phone</span> <span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span></li>
            </ul>
          </div>
          <div className="innerContent collapse show" id="availabledoctors">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="topMiddlecontent">
                  <div className="d-flex drag_sel position-relative">
                    <div className="drag_hov mh-100 my-auto">
                        <span className="cu-task-row-toggle__marker"></span>
                        <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                    </div>
                    <ul className="list-inline w-100 row">
                      <li className="col-lg-3 my-auto">
                        <div className="userLogoicon align-content-center">
                          <Link to="#" className="d-flex"><span className="listprofileIcon" style={{backgroundColor: `#2ecd6f`}}>AK</span> <span>Anand Kumar</span></Link >
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
                      </li>
                      <li className="col-lg-1 my-auto">11/3/19</li>
                      <li className="col-lg-1 my-auto">
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo text-white" style={{backgroundColor: `#EA80FC`}}>Skin Care</span>
                        </div>
                      </li>
                      <li className="col-lg-1 activeStatuscontent active_clr text-white">Active</li>
                      <li className="col-lg-1 activeStatuscontent male_bg text-white">Male</li>
                      <li className="col-lg-1 my-auto">
                      <div className="d-flex justify-content-center flex-column avail_wid">
                        <div className="d-flex mt-2 mb-2"><span className="avails video_bg"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="" /></span><span>Video</span></div>
                      </div>
                      </li>
                      <li className="col-lg-2 my-auto activeStatuscontent">sagayaraj@lookman.in</li>
                      <li className="col-lg-2 my-auto">
                        <div className="ph_no">9876543210</div>
                        <div className="avalib">
                          <div className="d-flex justify-content-center">
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" className="mai1" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Delete</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="delete" className="mai" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Duplicate</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_copy_icon.svg")} alt="copy" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                              </div>
                            </OverlayTrigger>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex drag_sel position-relative">
                    <div className="drag_hov mh-100 my-auto">
                        <span className="cu-task-row-toggle__marker"></span>
                        <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                    </div>
                    <ul className="list-inline w-100 row clearfix">
                      <li className="col-lg-3 my-auto">
                        <div className="userLogoicon align-content-center">
                          <Link to="#" className="d-flex"><span className="listprofileIcon" style={{
                backgroundColor: `#2ecd6f`}}>AK</span> <span>Anand Kumar</span></Link >
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
                      </li>
                      <li className="col-lg-1 my-auto">11/3/19</li>
                      <li className="col-lg-1 my-auto">
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo text-white" style={{backgroundColor: `#0A31E8`}}>Amoxicillin</span>
                        </div>
                      </li>
                      <li className="col-lg-1 activeStatuscontent active_clr text-white">Active</li>
                      <li className="col-lg-1 activeStatuscontent male_bg text-white">Male</li>
                      <li className="col-lg-1 my-auto">
                      <div className="d-flex justify-content-center flex-column avail_wid">
                        <div className="d-flex mt-2 mb-2"><span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="" /></span><span>Inperson</span></div>
                      </div>
                      </li>
                      <li className="col-lg-2 my-auto activeStatuscontent">sagayaraj@lookman.in</li>
                      <li className="col-lg-2 my-auto">
                        <div className="ph_no">9876543210</div>
                        <div className="avalib">
                          <div className="d-flex justify-content-center">
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" className="mai1" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Delete</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="delete" className="mai" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Duplicate</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_copy_icon.svg")} alt="copy" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                              </div>
                            </OverlayTrigger>
                          </div>
                        </div>
                      </li>
                    </ul>
       
                  </div>
                  <div className="d-flex drag_sel position-relative">
                    <div className="drag_hov mh-100 my-auto">
                        <span className="cu-task-row-toggle__marker"></span>
                        <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                    </div>
                    <ul className="list-inline w-100 row clearfix">
                      <li className="col-lg-3 my-auto">
                        <div className="userLogoicon align-content-center">
                          <Link to="#" className="d-flex"><span className="listprofileIcon" style={{
                backgroundColor: `#2ecd6f`}}>AK</span> <span>Anand Kumar</span></Link >
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
                      </li>
                      <li className="col-lg-1 my-auto">11/3/19</li>
                      <li className="col-lg-1 my-auto">
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo text-white" style={{backgroundColor: `#F9D930`}}>Calcium</span>
                        </div>
                      </li>
                      <li className="col-lg-1 activeStatuscontent inactive_clr text-white">Inactive</li>
                      <li className="col-lg-1 activeStatuscontent female_bg text-white">Female</li>
                      <li className="col-lg-1 my-auto">
                      <div className="d-flex justify-content-center flex-column avail_wid">
                        <div className="d-flex mt-2 mb-2"><span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="" /></span><span>Phone</span></div>
                      </div>
                      </li>
                      <li className="col-lg-2 my-auto activeStatuscontent">sagayaraj@lookman.in</li>
                      <li className="col-lg-2 my-auto">
                        <div className="ph_no">9876543210</div>
                        <div className="avalib">
                          <div className="d-flex justify-content-center">
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" className="mai1" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Delete</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="delete" className="mai" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Duplicate</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_copy_icon.svg")} alt="copy" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                              </div>
                            </OverlayTrigger>
                          </div>
                        </div>
                      </li>
                    </ul>
       
                  </div>
                  <div className="d-flex drag_sel position-relative">
                    <div className="drag_hov mh-100 my-auto">
                        <span className="cu-task-row-toggle__marker"></span>
                        <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                    </div>
                    <ul className="list-inline w-100 row clearfix">
                      <li className="col-lg-3 my-auto">
                        <div className="userLogoicon align-content-center">
                          <Link to="#" className="d-flex"><span className="listprofileIcon" style={{
                backgroundColor: `#2ecd6f`}}>AK</span> <span>Anand Kumar</span></Link >
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
                      </li>
                      <li className="col-lg-1 my-auto">11/3/19</li>
                      <li className="col-lg-1 my-auto">
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo text-white" style={{backgroundColor: `#1DBC9C`}}>Ambien</span>
                        </div>
                      </li>
                      <li className="col-lg-1 activeStatuscontent active_clr text-white">Active</li>
                      <li className="col-lg-1 activeStatuscontent male_bg text-white">Male</li>
                      <li className="col-lg-1 my-auto">
                      <div className="d-flex justify-content-center flex-column avail_wid">
                        <div className="d-flex mt-2 mb-2"><span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span><span>Chat</span></div>
                      </div>
                      </li>
                      <li className="col-lg-2 my-auto activeStatuscontent">sagayaraj@lookman.in</li>
                      <li className="col-lg-2 my-auto">
                        <div className="ph_no">9876543210</div>
                        <div className="avalib">
                          <div className="d-flex justify-content-center">
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" className="mai1" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Delete</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="delete" className="mai" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Duplicate</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_copy_icon.svg")} alt="copy" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                              </div>
                            </OverlayTrigger>
                          </div>
                        </div>
                      </li>
                    </ul>
       
                  </div>
                </div>
                <button type="button" className="customNewtaskBTN">+ New Staff</button>
              </div>    
            </div>                 
          </div>
        </div>   
    </div>

  );
}


export function ListActivity04() {  

  return (
    <div className="contentAreaouter">                  
      <div className="contentArea">
          <div className="topHeadercontent d-flex">
            <div className="toggleLefticon">
              <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#availabledoctors" className="borderColor1 textColor14">
                <i className="fa fa-angle-down"></i>
              </Link >                    
            </div>
            <ul className="list-inline w-100 row">
              <li className="col-lg-3">
                <span className="headingHighlight customProfileBG14 text-white">Receptionist</span>
                <span className="tasklistCount">1 Staff</span>
              </li>
              <li className="col-lg-1"><span>Last seen</span></li>
              <li className="col-lg-1"><span>Services</span></li>
              <li className="col-lg-1"><span>Status</span></li>
              <li className="col-lg-1"><span>Sex</span></li>
              <li className="col-lg-1"><span>Availability</span></li>
              <li className="col-lg-2"><span>Email</span></li>
              <li className="col-lg-2 position-relative"><span>Phone</span> <span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span></li>
            </ul>
          </div>
          <div className="innerContent collapse show" id="availabledoctors">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="topMiddlecontent">
                  <div className="d-flex drag_sel position-relative">
                    <div className="drag_hov mh-100 my-auto">
                        <span className="cu-task-row-toggle__marker"></span>
                        <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                    </div>
                    <ul className="list-inline w-100 row">
                      <li className="col-lg-3 my-auto">
                        <div className="userLogoicon align-content-center">
                          <Link to="#" className="d-flex"><span className="listprofileIcon" style={{
                backgroundColor: `#2ecd6f`}}>AK</span> <span>Anand Kumar</span></Link >
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
                      </li>
                      <li className="col-lg-1 my-auto">11/3/19</li>
                      <li className="col-lg-1 my-auto">
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo text-white" style={{backgroundColor: `#FD7FAB`}}>Prinvil</span>
                        </div>
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo text-white" style={{backgroundColor: `#EA80FC`}}>Advil</span>
                        </div>
                      </li>
                      <li className="col-lg-1 activeStatuscontent active_clr text-white">Active</li>
                      <li className="col-lg-1 activeStatuscontent male_bg text-white">Male</li>
                      <li className="col-lg-1 my-auto">
                        <div className="d-flex justify-content-center flex-column avail_wid">
                          <div className="d-flex mt-2 mb-2"><span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="" /></span><span>Phone</span></div>
                          <div className="d-flex mt-2 mb-2"><span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="" /></span><span>Inperson</span></div>
                          <div className="d-flex mt-2 mb-2"><span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span><span>Chat</span></div>
                          <div className="d-flex mt-2 mb-2"><span className="avails video_bg"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="" /></span><span>Video</span></div>
                        </div>
                      </li>
                      <li className="col-lg-2 my-auto activeStatuscontent">sagayaraj@lookman.in</li>
                      <li className="col-lg-2 my-auto">
                        <div className="ph_no">9876543210</div>
                        <div className="avalib">
                          <div className="d-flex justify-content-center">
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" className="mai1" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Delete</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="delete" className="mai" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">Duplicate</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_copy_icon.svg")} alt="copy" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                                }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                              </div>
                            </OverlayTrigger>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <button type="button" className="customNewtaskBTN">+ New Staff</button>
              </div>    
            </div>                 
          </div>
        </div>   
    </div>

  );
}



export function ServicesDropdownMenu() {
  return <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
          <li className="navi-item">
            <input type="text" placeholder="search" className="form-control" />
          </li>
          <li className="navi-item">
            <div className="navnk">
              <ul>
                <li>
                  <div class="d-flex justify-content-center">
                    <span className="specialInfo text-white position-relative" style={{backgroundColor: `#E6511B`}}>Acupunture 
                      <span className="dropdown_label_remove" style={{backgroundColor: `#E6511B`}}>
                        <span className="dropdown_label_remove_icon">x</span>
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
      </ul>
      {/*end::Navigation*/}

  </>
}

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
                <span className="navi-text">Chat</span>
              </a>
          </li>
          <li className="navi-item">
              <a href="#" className="navi-link">
                <span className="avails video_bg"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="mt-0" /></span>
                <span className="navi-text">Video</span>
              </a>
          </li>
          <li className="navi-item">
              <a href="#" className="navi-link">
                <span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="mt-0" /></span>
                <span className="navi-text">Phone</span>
              </a>
          </li>
          <li className="navi-item">
              <a href="#" className="navi-link">
                <span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="mt-0" /></span>
                <span className="navi-text">Inperson</span>
              </a>
          </li>
      </ul>
      {/*end::Navigation*/}

  </>
}
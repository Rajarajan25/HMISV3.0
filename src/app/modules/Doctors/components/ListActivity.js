import React from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
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
                <ul className="list-inline w-100">
                  <li>
                    <span className="headingHighlight customProfileBG11 text-white">Service Provider</span>
                    <span className="tasklistCount">1 Staff</span>
                  </li>
                  <li className="mw_70"><span>Last seen</span></li>
                  <li className="mw_120"><span>Services</span></li>
                  <li><span>Status</span></li>
                  <li><span>Sex</span></li>
                  <li className="mw_120"><span>Availability</span></li>
                  <li className="mw_180"><span>Email</span></li>
                  <li><span>Phone</span></li>
                  <li className="mw_160 position-relative"><span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span></li>
                </ul>
              </div>
              <div className="innerContent collapse show" id="availabledoctors">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="topMiddlecontent">
                      <div className="d-flex drag_sel drag_selected position-relative">
                        <div className="drag_hov mh-100 my-auto">
                            <span className="cu-task-row-toggle__marker"></span>
                            <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                        </div>
                        <ul>
                          <li>
                            <div className="userLogoicon align-content-center">
                              <Link to="#" className="d-flex"><span className="listprofileIcon customProfileBG4">AK</span> <span>Anand</span></Link >
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
                          <li className="mw_70">11/3/19</li>
                          <li className="mw_120">
                            <div class="d-flex mt-1 mb-1 justify-content-center">
                              <span className="specialInfo acupunture text-white">Acupunture</span>
                            </div>
                          </li>
                          <li className="activeStatuscontent active_clr text-white">Active</li>
                          <li className="activeStatuscontent male_bg text-white">Male</li>
                          <li className="mw_120">
                          <div className="d-flex justify-content-center flex-column avail_wid">
                            <div className="d-flex mt-2 mb-2"><span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span><span>Chat</span></div>
                          </div>
                          </li>
                          <li className="activeStatuscontent mw_180">Sagayaraj@lookman.in</li>
                          <li>9876543210</li>
                          <li className="avalib mw_160">
                            <div className="d-flex justify-content-end">
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
                          </li>
                        </ul>
                      </div>

                      <ul className="newTask_1">
                        <li>
                          <Link to="#" className="userLogoicon">
                            <button type="button" className="removeNewtask">X</button>
                            <input type="text" className="newTaskinput" name="" id="" placeholder="Doctor name" />  
                          </Link>                            
                        </li>              
                        <li className="text-right">
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
            <ul className="list-inline w-100">
              <li>
                <span className="headingHighlight customProfileBG12 text-white">Staff</span>
                <span className="tasklistCount">1 Staff</span>
              </li>
              <li className="mw_70"><span>Last seen</span></li>
              <li className="mw_120"><span>Services</span></li>
              <li><span>Status</span></li>
              <li><span>Sex</span></li>
              <li className="mw_120"><span>Availability</span></li>
              <li className="mw_180"><span>Email</span></li>
              <li><span>Phone</span></li>
              <li className="mw_160 position-relative"><span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span></li>
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
                    <ul>
                      <li>
                        <div className="userLogoicon align-content-center">
                          <Link to="#" className="d-flex"><span className="listprofileIcon customProfileBG1">AK</span> <span>Sivagami</span></Link >
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
                      <li className="mw_70">10/16/20</li>
                      <li className="mw_120">
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo dental text-white">Dental</span>
                        </div>
                      </li>
                      <li className="activeStatuscontent inactive_clr text-white">Inactive</li>
                      <li className="activeStatuscontent female_bg text-white">Female</li>
                      <li  className="mw_120">
                        <div className="d-flex justify-content-center flex-column avail_wid">
                          <div className="d-flex mt-2 mb-2"><span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="" /></span><span>Phone</span></div>
                        </div>
                      </li>
                      <li className="activeStatuscontent mw_180">Sagayaraj@lookman.in</li>
                      <li>9876543210</li>
                      <li className="avalib mw_160">
                        <div className="d-flex justify-content-end">
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
            <ul className="list-inline w-100">
              <li>
                <span className="headingHighlight customProfileBG13 text-white">Admin</span>
                <span className="tasklistCount">1 Staff</span>
              </li>
              <li className="mw_70"><span>Last seen</span></li>
              <li className="mw_120"><span>Services</span></li>
              <li><span>Status</span></li>
              <li><span>Sex</span></li>
              <li className="mw_120"><span>Availability</span></li>
              <li className="mw_180"><span>Email</span></li>
              <li><span>Phone</span></li>
              <li className="mw_160 position-relative"><span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span></li>
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
                    <ul className="clearfix">
                      <li>
                        <div className="userLogoicon align-content-center">
                          <Link to="#" className="d-flex"><span className="listprofileIcon customProfileBG1">AK</span> <span>Anand Kumar</span></Link >
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
                      <li className="mw_70">11/3/19</li>
                      <li className="mw_120">
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo skincare text-white">Skin Care</span>
                        </div>
                      </li>
                      <li className="activeStatuscontent active_clr text-white">Active</li>
                      <li className="activeStatuscontent male_bg text-white">Male</li>
                      <li className="mw_120">
                      <div className="d-flex justify-content-center flex-column avail_wid">
                        <div className="d-flex mt-2 mb-2"><span className="avails video_bg"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="" /></span><span>Video</span></div>
                      </div>
                      </li>
                      <li className="activeStatuscontent mw_180">Sagayaraj@lookman.in</li>
                      <li>9876543210</li>
                      <li className="avalib mw_160">
                        <div className="d-flex justify-content-end">
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
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex drag_sel position-relative">
                    <div className="drag_hov mh-100 my-auto">
                        <span className="cu-task-row-toggle__marker"></span>
                        <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                    </div>
                    <ul className="clearfix">
                      <li>
                        <div className="userLogoicon align-content-center">
                          <Link to="#" className="d-flex"><span className="listprofileIcon customProfileBG1">AK</span> <span>Anand Kumar</span></Link >
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
                      <li className="mw_70">11/3/19</li>
                      <li className="mw_120">
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo amoxicillin text-white">Amoxicillin</span>
                        </div>
                      </li>
                      <li className="activeStatuscontent active_clr text-white">Active</li>
                      <li className="activeStatuscontent male_bg text-white">Male</li>
                      <li className="mw_120">
                      <div className="d-flex justify-content-center flex-column avail_wid">
                        <div className="d-flex mt-2 mb-2"><span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="" /></span><span>Inperson</span></div>
                      </div>
                      </li>
                      <li className="activeStatuscontent mw_180">Sagayaraj@lookman.in</li>
                      <li>9876543210</li>
                      <li className="avalib mw_160">
                        <div className="d-flex justify-content-end">
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
                      </li>
                    </ul>
       
                  </div>
                  <div className="d-flex drag_sel position-relative">
                    <div className="drag_hov mh-100 my-auto">
                        <span className="cu-task-row-toggle__marker"></span>
                        <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                    </div>
                    <ul className="clearfix">
                      <li>
                        <div className="userLogoicon align-content-center">
                          <Link to="#" className="d-flex"><span className="listprofileIcon customProfileBG1">AK</span> <span>Anand Kumar</span></Link >
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
                      <li className="mw_70">11/3/19</li>
                      <li className="mw_120">
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo calcium text-white">Calcium</span>
                        </div>
                      </li>
                      <li className="activeStatuscontent inactive_clr text-white">Inactive</li>
                      <li className="activeStatuscontent female_bg text-white">Female</li>
                      <li className="mw_120">
                      <div className="d-flex justify-content-center flex-column avail_wid">
                        <div className="d-flex mt-2 mb-2"><span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="" /></span><span>Phone</span></div>
                      </div>
                      </li>
                      <li className="activeStatuscontent mw_180">Sagayaraj@lookman.in</li>
                      <li>9876543210</li>
                      <li className="avalib mw_160">
                        <div className="d-flex justify-content-end">
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
                      </li>
                    </ul>
       
                  </div>
                  <div className="d-flex drag_sel position-relative">
                    <div className="drag_hov mh-100 my-auto">
                        <span className="cu-task-row-toggle__marker"></span>
                        <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                    </div>
                    <ul className="clearfix">
                      <li>
                        <div className="userLogoicon align-content-center">
                          <Link to="#" className="d-flex"><span className="listprofileIcon customProfileBG1">AK</span> <span>Anand Kumar</span></Link >
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
                      <li className="mw_70">11/3/19</li>
                      <li className="mw_120">
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo ambien text-white">Ambien</span>
                        </div>
                      </li>
                      <li className="activeStatuscontent active_clr text-white">Active</li>
                      <li className="activeStatuscontent male_bg text-white">Male</li>
                      <li className="mw_120">
                      <div className="d-flex justify-content-center flex-column avail_wid">
                        <div className="d-flex mt-2 mb-2"><span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span><span>Chat</span></div>
                      </div>
                      </li>
                      <li className="activeStatuscontent mw_180">Sagayaraj@lookman.in</li>
                      <li>9876543210</li>
                      <li className="avalib mw_160">
                        <div className="d-flex justify-content-end">
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
            <ul className="list-inline w-100">
              <li>
                <span className="headingHighlight customProfileBG14 text-white">Receptionist</span>
                <span className="tasklistCount">1 Staff</span>
              </li>
              <li className="mw_70"><span>Last seen</span></li>
              <li className="mw_120"><span>Services</span></li>
              <li><span>Status</span></li>
              <li><span>Sex</span></li>
              <li className="mw_120"><span>Availability</span></li>
              <li className="mw_180"><span>Email</span></li>
              <li><span>Phone</span></li>
              <li className="mw_160 position-relative"><span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span></li>
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
                    <ul>
                      <li>
                        <div className="userLogoicon align-content-center">
                          <Link to="#" className="d-flex"><span className="listprofileIcon customProfileBG1">AK</span> <span>Anand Kumar</span></Link >
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
                      <li className="mw_70">11/3/19</li>
                      <li className="mw_120">
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo prinvil text-white">Prinvil</span>
                        </div>
                        <div class="d-flex mt-1 mb-1 justify-content-center">
                          <span className="specialInfo advil text-white">Advil</span>
                        </div>
                      </li>
                      <li className="activeStatuscontent active_clr text-white">Active</li>
                      <li className="activeStatuscontent male_bg text-white">Male</li>
                      <li className="mw_120">
                      <div className="d-flex justify-content-center flex-column avail_wid">
                        <div className="d-flex mt-2 mb-2"><span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="" /></span><span>Phone</span></div>
                        <div className="d-flex mt-2 mb-2"><span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="" /></span><span>Inperson</span></div>
                        <div className="d-flex mt-2 mb-2"><span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span><span>Chat</span></div>
                        <div className="d-flex mt-2 mb-2"><span className="avails video_bg"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="" /></span><span>Video</span></div>
                      </div>
                      </li>
                      <li className="activeStatuscontent mw_180">Sagayaraj@lookman.in</li>
                      <li>9876543210</li>
                      <li className="avalib mw_160">
                        <div className="d-flex justify-content-end">
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

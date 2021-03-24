import React from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {DropdownItemToggler} from "../../../../_metronic/_partials/dropdowns";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Drawer from '@material-ui/core/Drawer';

import { StaffDetailsTab } from "./staff-details-tab";

const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});





export function ListActivity01() {  
  const classes = useStyles();
const [state, setState] = React.useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});
const styles = {
  BackdropProps: {
    background: 'transparent'
  }
};

const toggleDrawer = (side, open) => event => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }
  setState({ ...state, [side]: open });
};

const toggleDrawerClose = () => {
  setState(false);
};
  return (
    <div className="contentAreaouter"> 
        <div className="add-staff">
          <Link to="#" onClick={toggleDrawer('right', true)}><img src={toAbsoluteUrl("/media/patients/add_staff.svg")} alt="" className="d-block rounded-circle" /></Link>
        </div>
      <Drawer className="patientProfileinfo StaffInfo" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        <div className="p-0 overflow-auto">
          <Link to="#" className="closeDrawer" onClick={toggleDrawerClose}><span className="my-auto font-weight-500">X</span></Link>
          <StaffDetails />
        </div>
      </Drawer>
            <div className="contentArea">
              <div className="topHeadercontent d-flex">
                <div className="toggleLefticon LefticonBG11">
                  <Link  to="#" data-toggle="collapse" data-target="#staffmanagement" className="borderColor11 customProfileBG11">
                    <i className="fa fa-minus text-white"></i>
                  </Link>                   
                </div>
                <ul className="list-inline w-100 row">
                  <li className="col-lg-3">
                    <span className="headingHighlight customProfileBG11 text-white">Service Provider</span>
                    <span className="tasklistCount">1 Staff</span>
                  </li>
                  <li className="col-lg-1"><span className="title_drag">Experience</span></li>
                  <li className="col-lg-1"><span className="title_drag">Services</span></li>
                  <li className="col-lg-1"><span className="title_drag">Status</span></li>
                  <li className="col-lg-1"><span className="title_drag">Sex</span></li>
                  <li className="col-lg-1"><span className="title_drag">Availability</span></li>
                  <li className="col-lg-2"><span className="title_drag">Email</span></li>
                  <li className="col-lg-2 position-relative">
                    <span className="title_drag">Phone</span> 
                    <span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span>
                  </li>
                </ul>
              </div>
              <div className="innerContent collapse show" id="staffmanagement">
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
                              <Dropdown drop="down" alignCenter className="dropdown h-100">
                                <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                    <span className="listprofileIcon" style={{backgroundColor: `#2ecd6f`}}>AK</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu  className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                                  <ColorDropdownMenu />
                                </Dropdown.Menu>
                              </Dropdown>
                              <div className="d-flex"> 
                                <span><Link to="#" onClick={toggleDrawer('right', true)}>Anand</Link></span>
                              </div>
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
                              </Link>
                            </div>
                          </li>
                          <li className="col-lg-1 my-auto">
                            <div className="d-flex justify-content-center">
                              <span className="f-12 font-weight-500">4.5 <span className="f-10">Years</span></span>
                            </div>
                          </li>
                          <li className="col-lg-1 my-auto">
                            <Dropdown drop="down" alignCenter className="dropdown h-100">
                              <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                                  <div class="d-flex mt-1 mb-1 justify-content-center">
                                    <span className="specialInfo text-white position-relative" style={{backgroundColor: `#E6511B`}}>Acupunture 
                                      <span className="dropdown_label_remove" style={{backgroundColor: `#E6511B`}}>
                                        <span className="dropdown_label_remove_icon">x</span>
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                                <ServicesDropdownMenu />
                              </Dropdown.Menu>
                            </Dropdown>
                          </li>
                          <li className="col-lg-1 activeStatuscontent active_clr text-white">
                            <Dropdown drop="down" alignCenter className="dropdown h-100">
                              <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                  <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Active</a>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
                                <StatusDropdownMenu />
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
                                <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
                                  <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                                    <span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span>
                                    <span>Chat</span> <span className="close_icons chat_bg">x</span>
                                  </div>
                                </div>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                                <AvailDropdownMenu />
                              </Dropdown.Menu>
                            </Dropdown>
                          </li>
                          <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                            <span className="d-inline-flex">sagayaraj@lookman.in</span>
                            <Link to="#" className="edit_staff">
                              <OverlayTrigger 
                                  placement="top"
                                  overlay={
                                  <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                                  }>
                                  <div className="tab_col mt-0 mb-0">
                                    <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                                  </div>
                              </OverlayTrigger>
                            </Link >
                          </li>
                          <li className="col-lg-2 my-auto d-flex justify-content-center">
                            <span className="d-inline-flex">9876543210</span>
                            <Link to="#" className="edit_staff">
                              <OverlayTrigger 
                                  placement="top"
                                  overlay={
                                  <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                                  }>
                                  <div className="tab_col mt-0 mb-0"  style={{top: '-3px'}}>
                                    <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                                  </div>
                              </OverlayTrigger>
                            </Link >
                            <div className="d-flex justify-content-end more_icon">
                              <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                                }>
                                <div className="tab_col mt-0 mb-0">
                                  <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                                </div>
                              </OverlayTrigger>
                              <div className="avalib">
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
                                </div>
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
                        <ul className="list-inline w-100 row">
                          <li className="col-lg-3 my-auto">
                            <div className="userLogoicon align-content-center">
                              <Dropdown drop="down" alignCenter className="dropdown h-100">
                                <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                    <span className="listprofileIcon" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu  className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                                  <ColorDropdownMenu />
                                </Dropdown.Menu>
                              </Dropdown>
                              <div className="d-flex">
                                <input type="text" className="edit_name" name="" id="" placeholder="Anand" />  
                              </div>
                            </div>
                          </li>
                          <li className="col-lg-1 my-auto">
                            <div className="d-flex justify-content-center">
                              <span className="f-12 font-weight-500">4.5 <span className="f-10">Years</span></span>
                            </div>
                          </li>
                          <li className="col-lg-1 my-auto">
                            <Dropdown drop="down" alignCenter className="dropdown h-100">
                              <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                                  <div class="d-flex mt-1 mb-1 justify-content-center">
                                    <span className="specialInfo text-white position-relative" style={{backgroundColor: `#E6511B`}}>Acupunture 
                                      <span className="dropdown_label_remove" style={{backgroundColor: `#E6511B`}}>
                                        <span className="dropdown_label_remove_icon">x</span>
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                                <ServicesDropdownMenu />
                              </Dropdown.Menu>
                            </Dropdown>
                          </li>
                          <li className="col-lg-1 activeStatuscontent active_clr text-white">
                            <Dropdown drop="down" alignCenter className="dropdown h-100">
                              <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                  <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Active</a>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
                                <StatusDropdownMenu />
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
                                <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
                                  <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                                    <span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span>
                                    <span>Chat</span> <span className="close_icons chat_bg">x</span>
                                  </div>
                                </div>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                                <AvailDropdownMenu />
                              </Dropdown.Menu>
                            </Dropdown>
                          </li>
                          <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                            <span className="d-inline-flex"><input type="text" class="edit_mail" name="" id="" placeholder="sagayaraj@lookman.in" /></span>
                          </li>
                          <li className="col-lg-2 my-auto d-flex justify-content-center">
                            <span className="d-inline-flex"><input type="text" class="edit_mobile" name="" id="" placeholder="9876543210" /></span>
                            <div className="d-flex justify-content-end more_icon">
                              <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                                }>
                                <div className="tab_col mt-0 mb-0">
                                  <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                                </div>
                              </OverlayTrigger>
                              <div className="avalib">
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
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <ul className="newTask_1 row">
                        <li className="col-lg-8">
                          <Link to="#" className="userLogoicon">
                            <img src={toAbsoluteUrl("/media/patients/close_icon.svg")} alt="close" className="removeNewtask" />
                            <input type="text" className="newTaskinput" name="" id="" placeholder="Doctor name" />  
                          </Link>                            
                        </li>              
                        <li className="col-lg-4 text-right">
                          <span className="ctrlSpan">ctrl + enter to open </span>
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
            <div className="toggleLefticon LefticonBG12">
              <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#staffmanagement" className="borderColor12 customProfileBG12">
                <i className="fa fa-minus text-white"></i>
              </Link >                    
            </div>
            <ul className="list-inline w-100 row">
              <li className="col-lg-3">
                <span className="headingHighlight customProfileBG12 text-white">Staff</span>
                <span className="tasklistCount">1 Staff</span>
              </li>
              <li className="col-lg-1"><span className="title_drag">Experience</span></li>
              <li className="col-lg-1"><span className="title_drag">Services</span></li>
              <li className="col-lg-1"><span className="title_drag">Status</span></li>
              <li className="col-lg-1"><span className="title_drag">Sex</span></li>
              <li className="col-lg-1"><span className="title_drag">Availability</span></li>
              <li className="col-lg-2"><span className="title_drag">Email</span></li>
              <li className="col-lg-2 position-relative">
                <span className="title_drag">Phone</span> 
                <span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span>
              </li>
            </ul>
          </div>
          <div className="innerContent collapse show" id="staffmanagement">
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
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                              <span className="listprofileIcon" style={{backgroundColor: `#2ecd6f`}}>AK</span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                            <ColorDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="d-flex">
                          <span>Anand</span>
                        </div>
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
                      <li className="col-lg-1 my-auto">
                        <div className="d-flex justify-content-center">
                          <span className="f-12 font-weight-500">4.5 <span className="f-10">Years</span></span>
                        </div>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                            <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                              <div class="d-flex mt-1 mb-1 justify-content-center">
                                <span className="specialInfo text-white position-relative" style={{backgroundColor: `#FD7FAB`}}>Dental 
                                  <span className="dropdown_label_remove" style={{backgroundColor: `#FD7FAB`}}>
                                    <span className="dropdown_label_remove_icon">x</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                            <ServicesDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-1 activeStatuscontent inactive_clr text-white">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                              <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Inactive</a>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
                            <StatusDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-1 activeStatuscontent female_bg text-white">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                              <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Female</a>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav sx_hover">
                            <SxDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                            <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
                              <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                                <span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="" /></span>
                                <span>Phone</span> <span className="close_icons phone_bg">x</span>
                              </div>
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                            <AvailDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                        <span className="d-inline-flex">sagayaraj@lookman.in</span>
                        <Link to="#" className="edit_staff">
                          <OverlayTrigger 
                              placement="top"
                              overlay={
                              <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                              }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                              </div>
                          </OverlayTrigger>
                        </Link >
                      </li>
                      <li className="col-lg-2 my-auto d-flex justify-content-center">
                        <span className="d-inline-flex">9876543210</span>
                        <Link to="#" className="edit_staff">
                          <OverlayTrigger 
                              placement="top"
                              overlay={
                              <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                              }>
                              <div className="tab_col mt-0 mb-0"  style={{top: '-3px'}}>
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                              </div>
                          </OverlayTrigger>
                        </Link >
                        <div className="d-flex justify-content-end more_icon">
                          <OverlayTrigger 
                            placement="top"
                            overlay={
                            <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                            }>
                            <div className="tab_col mt-0 mb-0">
                              <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                            </div>
                          </OverlayTrigger>
                          <div className="avalib">
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
                            </div>
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
            <div className="toggleLefticon LefticonBG13">
              <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#staffmanagement" className="borderColor13 customProfileBG13">
                <i className="fa fa-minus text-white"></i>
              </Link >                    
            </div>
            <ul className="list-inline w-100 row">
              <li className="col-lg-3">
                <span className="headingHighlight customProfileBG13 text-white">Admin</span>
                <span className="tasklistCount">1 Staff</span>
              </li>
              <li className="col-lg-1"><span className="title_drag">Experience</span></li>
              <li className="col-lg-1"><span className="title_drag">Services</span></li>
              <li className="col-lg-1"><span className="title_drag">Status</span></li>
              <li className="col-lg-1"><span className="title_drag">Sex</span></li>
              <li className="col-lg-1"><span className="title_drag">Availability</span></li>
              <li className="col-lg-2"><span className="title_drag">Email</span></li>
              <li className="col-lg-2 position-relative">
                <span className="title_drag">Phone</span> 
                <span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span>
              </li>
            </ul>
          </div>
          <div className="innerContent collapse show" id="staffmanagement">
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
                          <Dropdown drop="down" alignCenter className="dropdown h-100">
                            <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                <span className="listprofileIcon" style={{backgroundColor: `#2ecd6f`}}>AK</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu  className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                              <ColorDropdownMenu />
                            </Dropdown.Menu>
                          </Dropdown>
                          <div className="d-flex"> 
                            <span>Anand</span>
                          </div>
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
                          </Link>
                        </div>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <div className="d-flex justify-content-center">
                          <span className="f-12 font-weight-500">4.5 <span className="f-10">Years</span></span>
                        </div>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                            <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                              <div class="d-flex mt-1 mb-1 justify-content-center">
                                <span className="specialInfo text-white position-relative" style={{backgroundColor: `#EA80FC`}}>Skin Care 
                                  <span className="dropdown_label_remove" style={{backgroundColor: `#EA80FC`}}>
                                    <span className="dropdown_label_remove_icon">x</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                            <ServicesDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-1 activeStatuscontent active_clr text-white">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                              <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Active</a>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
                            <StatusDropdownMenu />
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
                            <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
                              <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                                <span className="avails video_bg"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="" /></span>
                                <span>Video</span> <span className="close_icons video_bg">x</span>
                              </div>
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                            <AvailDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                        <span className="d-inline-flex">sagayaraj@lookman.in</span>
                        <Link to="#" className="edit_staff">
                          <OverlayTrigger 
                              placement="top"
                              overlay={
                              <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                              }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                              </div>
                          </OverlayTrigger>
                        </Link >
                      </li>
                      <li className="col-lg-2 my-auto d-flex justify-content-center">
                        <span className="d-inline-flex">9876543210</span>
                        <Link to="#" className="edit_staff">
                          <OverlayTrigger 
                              placement="top"
                              overlay={
                              <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                              }>
                              <div className="tab_col mt-0 mb-0"  style={{top: '-3px'}}>
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                              </div>
                          </OverlayTrigger>
                        </Link >
                        <div className="d-flex justify-content-end more_icon">
                          <OverlayTrigger 
                            placement="top"
                            overlay={
                            <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                            }>
                            <div className="tab_col mt-0 mb-0">
                              <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                            </div>
                          </OverlayTrigger>
                          <div className="avalib">
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
                            </div>
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
                          <Dropdown drop="down" alignCenter className="dropdown h-100">
                            <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                <span className="listprofileIcon" style={{backgroundColor: `#2ecd6f`}}>AK</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu  className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                              <ColorDropdownMenu />
                            </Dropdown.Menu>
                          </Dropdown>
                          <div className="d-flex"> 
                            <span>Anand</span>
                          </div>
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
                          </Link>
                        </div>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <div className="d-flex justify-content-center">
                          <span className="f-12 font-weight-500">4.5 <span className="f-10">Years</span></span>
                        </div>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                            <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                              <div class="d-flex mt-1 mb-1 justify-content-center">
                                <span className="specialInfo text-white position-relative" style={{backgroundColor: `#0A31E8`}}>Amoxicillin
                                  <span className="dropdown_label_remove" style={{backgroundColor: `#0A31E8`}}>
                                    <span className="dropdown_label_remove_icon">x</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                            <ServicesDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-1 activeStatuscontent active_clr text-white">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                              <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Active</a>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
                            <StatusDropdownMenu />
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
                            <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
                              <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                                <span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="" /></span>
                                <span>Inperson</span> <span className="close_icons visit_bg">x</span>
                              </div>
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                            <AvailDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                        <span className="d-inline-flex">sagayaraj@lookman.in</span>
                        <Link to="#" className="edit_staff">
                          <OverlayTrigger 
                              placement="top"
                              overlay={
                              <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                              }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                              </div>
                          </OverlayTrigger>
                        </Link >
                      </li>
                      <li className="col-lg-2 my-auto d-flex justify-content-center">
                        <span className="d-inline-flex">9876543210</span>
                        <Link to="#" className="edit_staff">
                          <OverlayTrigger 
                              placement="top"
                              overlay={
                              <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                              }>
                              <div className="tab_col mt-0 mb-0"  style={{top: '-3px'}}>
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                              </div>
                          </OverlayTrigger>
                        </Link >
                        <div className="d-flex justify-content-end more_icon">
                          <OverlayTrigger 
                            placement="top"
                            overlay={
                            <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                            }>
                            <div className="tab_col mt-0 mb-0">
                              <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                            </div>
                          </OverlayTrigger>
                          <div className="avalib">
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
                            </div>
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
                          <Dropdown drop="down" alignCenter className="dropdown h-100">
                            <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                <span className="listprofileIcon" style={{backgroundColor: `#2ecd6f`}}>AK</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu  className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                              <ColorDropdownMenu />
                            </Dropdown.Menu>
                          </Dropdown>
                          <div className="d-flex"> 
                            <span>Anand</span>
                          </div>
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
                          </Link>
                        </div>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <div className="d-flex justify-content-center">
                          <span className="f-12 font-weight-500">4.5 <span className="f-10">Years</span></span>
                        </div>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                            <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                              <div class="d-flex mt-1 mb-1 justify-content-center">
                                <span className="specialInfo text-white position-relative" style={{backgroundColor: `#F9D930`}}>Calcium
                                  <span className="dropdown_label_remove" style={{backgroundColor: `#F9D930`}}>
                                    <span className="dropdown_label_remove_icon">x</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                            <ServicesDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-1 activeStatuscontent inactive_clr text-white">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                              <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Inactive</a>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
                            <StatusDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-1 activeStatuscontent female_bg text-white">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                              <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Female</a>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav sx_hover">
                            <SxDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                            <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
                              <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                                <span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="" /></span>
                                <span>Phone</span> <span className="close_icons phone_bg">x</span>
                              </div>
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                            <AvailDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                        <span className="d-inline-flex">sagayaraj@lookman.in</span>
                        <Link to="#" className="edit_staff">
                          <OverlayTrigger 
                              placement="top"
                              overlay={
                              <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                              }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                              </div>
                          </OverlayTrigger>
                        </Link >
                      </li>
                      <li className="col-lg-2 my-auto d-flex justify-content-center">
                        <span className="d-inline-flex">9876543210</span>
                        <Link to="#" className="edit_staff">
                          <OverlayTrigger 
                              placement="top"
                              overlay={
                              <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                              }>
                              <div className="tab_col mt-0 mb-0"  style={{top: '-3px'}}>
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                              </div>
                          </OverlayTrigger>
                        </Link >
                        <div className="d-flex justify-content-end more_icon">
                          <OverlayTrigger 
                            placement="top"
                            overlay={
                            <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                            }>
                            <div className="tab_col mt-0 mb-0">
                              <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                            </div>
                          </OverlayTrigger>
                          <div className="avalib">
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
                            </div>
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
                          <Dropdown drop="down" alignCenter className="dropdown h-100">
                            <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                <span className="listprofileIcon" style={{backgroundColor: `#2ecd6f`}}>AK</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu  className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                              <ColorDropdownMenu />
                            </Dropdown.Menu>
                          </Dropdown>
                          <div className="d-flex"> 
                            <span>Anand</span>
                          </div>
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
                          </Link>
                        </div>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <div className="d-flex justify-content-center">
                          <span className="f-12 font-weight-500">4.5 <span className="f-10">Years</span></span>
                        </div>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                            <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                              <div class="d-flex mt-1 mb-1 justify-content-center">
                                <span className="specialInfo text-white position-relative" style={{backgroundColor: `#1DBC9C`}}>Ambien
                                  <span className="dropdown_label_remove" style={{backgroundColor: `#1DBC9C`}}>
                                    <span className="dropdown_label_remove_icon">x</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                            <ServicesDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-1 activeStatuscontent active_clr text-white">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                              <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Active</a>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
                            <StatusDropdownMenu />
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
                            <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
                              <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                                <span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span>
                                <span>Chat</span> <span className="close_icons chat_bg">x</span>
                              </div>
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                            <AvailDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                        <span className="d-inline-flex">sagayaraj@lookman.in</span>
                        <Link to="#" className="edit_staff">
                          <OverlayTrigger 
                              placement="top"
                              overlay={
                              <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                              }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                              </div>
                          </OverlayTrigger>
                        </Link >
                      </li>
                      <li className="col-lg-2 my-auto d-flex justify-content-center">
                        <span className="d-inline-flex">9876543210</span>
                        <Link to="#" className="edit_staff">
                          <OverlayTrigger 
                              placement="top"
                              overlay={
                              <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                              }>
                              <div className="tab_col mt-0 mb-0"  style={{top: '-3px'}}>
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                              </div>
                          </OverlayTrigger>
                        </Link >
                        <div className="d-flex justify-content-end more_icon">
                          <OverlayTrigger 
                            placement="top"
                            overlay={
                            <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                            }>
                            <div className="tab_col mt-0 mb-0">
                              <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                            </div>
                          </OverlayTrigger>
                          <div className="avalib">
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
                            </div>
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
            <div className="toggleLefticon LefticonBG14">
              <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#staffmanagement" className="borderColor14 customProfileBG14">
                <i className="fa fa-minus text-white"></i>
              </Link >                    
            </div>
            <ul className="list-inline w-100 row">
              <li className="col-lg-3">
                <span className="headingHighlight customProfileBG14 text-white">Receptionist</span>
                <span className="tasklistCount">1 Staff</span>
              </li>
              <li className="col-lg-1"><span className="title_drag">Experience</span></li>
              <li className="col-lg-1"><span className="title_drag">Services</span></li>
              <li className="col-lg-1"><span className="title_drag">Status</span></li>
              <li className="col-lg-1"><span className="title_drag">Sex</span></li>
              <li className="col-lg-1"><span className="title_drag">Availability</span></li>
              <li className="col-lg-2"><span className="title_drag">Email</span></li>
              <li className="col-lg-2 position-relative">
                <span className="title_drag">Phone</span> 
                <span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span>
              </li>
            </ul>
          </div>
          <div className="innerContent collapse show" id="staffmanagement">
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
                          <Dropdown drop="down" alignCenter className="dropdown h-100">
                            <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                <span className="listprofileIcon" style={{backgroundColor: `#2ecd6f`}}>AK</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu  className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                              <ColorDropdownMenu />
                            </Dropdown.Menu>
                          </Dropdown>
                          <div className="d-flex"> 
                            <span>Anand</span>
                          </div>
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
                          </Link>
                        </div>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <div className="d-flex justify-content-center">
                          <span className="f-12 font-weight-500">4.5 <span className="f-10">Years</span></span>
                        </div>
                      </li>
                      <li className="col-lg-1">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                            <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                              <div class="d-flex mt-1 mb-1 justify-content-center">
                                <span className="specialInfo text-white position-relative" style={{backgroundColor: `#FD7FAB`}}>Prinvil
                                  <span className="dropdown_label_remove" style={{backgroundColor: `#FD7FAB`}}>
                                    <span className="dropdown_label_remove_icon">x</span>
                                  </span>
                                </span>
                              </div>
                              <div class="d-flex mt-1 mb-1 justify-content-center">
                                <span className="specialInfo text-white position-relative" style={{backgroundColor: `#EA80FC`}}>Advil
                                  <span className="dropdown_label_remove" style={{backgroundColor: `#EA80FC`}}>
                                    <span className="dropdown_label_remove_icon">x</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                            <ServicesDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-1 activeStatuscontent active_clr text-white">
                        <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                              <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Active</a>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
                            <StatusDropdownMenu />
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
                      <li className="col-lg-1">
                      <Dropdown drop="down" alignCenter className="dropdown h-100">
                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                            <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
                              <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                                <span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="" /></span>
                                <span>Phone</span> <span className="close_icons phone_bg">x</span>
                              </div>
                              <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                                <span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="" /></span>
                                <span>Inperson</span> <span className="close_icons visit_bg">x</span>
                              </div>
                              <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                                <span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span>
                                <span>Chat</span> <span className="close_icons chat_bg">x</span>
                              </div>
                              <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                                <span className="avails video_bg"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="" /></span>
                                <span>Video</span> <span className="close_icons video_bg">x</span>
                              </div>
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                            <AvailDropdownMenu />
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                        <span className="d-inline-flex">sagayaraj@lookman.in</span>
                        <Link to="#" className="edit_staff">
                          <OverlayTrigger 
                              placement="top"
                              overlay={
                              <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                              }>
                              <div className="tab_col mt-0 mb-0">
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                              </div>
                          </OverlayTrigger>
                        </Link >
                      </li>
                      <li className="col-lg-2 my-auto d-flex justify-content-center">
                        <span className="d-inline-flex">9876543210</span>
                        <Link to="#" className="edit_staff">
                          <OverlayTrigger 
                              placement="top"
                              overlay={
                              <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                              }>
                              <div className="tab_col mt-0 mb-0"  style={{top: '-3px'}}>
                                <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="edit" />
                              </div>
                          </OverlayTrigger>
                        </Link >
                        <div className="d-flex justify-content-end more_icon">
                          <OverlayTrigger 
                            placement="top"
                            overlay={
                            <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
                            }>
                            <div className="tab_col mt-0 mb-0">
                              <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
                            </div>
                          </OverlayTrigger>
                          <div className="avalib">
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
                            </div>
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

export function ColorDropdownMenu() {
  return <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
          <li className="navi-item">
            <div className="color_select p-2">
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_01" name="color-code" className="" />
                <label className="" for="color_01">
                  <span style={{backgroundColor: `#41BC87`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_02" name="color-code" className="" />
                <label className="" for="color_02">
                  <span style={{backgroundColor: `#1DBC9C`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_03" name="color-code" className="" />
                <label className="" for="color_03">
                  <span style={{backgroundColor: `#27AE60`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_04" name="color-code" className="" />
                <label className="" for="color_04">
                  <span style={{backgroundColor: `#21D726`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_05" name="color-code" className="" />
                <label className="" for="color_05">
                  <span style={{backgroundColor: `#F41D2F`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_06" name="color-code" className="" />
                <label className="" for="color_06">
                  <span style={{backgroundColor: `#181D21`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_07" name="color-code" className="" />
                <label className="" for="color_07">
                  <span style={{backgroundColor: `#FD575E`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_08" name="color-code" className="" />
                <label className="" for="color_08">
                  <span style={{backgroundColor: `#FDB42B`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_09" name="color-code" className="" />
                <label className="" for="color_09">
                  <span style={{backgroundColor: `#B17F22`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_10" name="color-code" className="" />
                <label className="" for="color_10">
                  <span style={{backgroundColor: `#F34D1D`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_11" name="color-code" className="" />
                <label className="" for="color_11">
                  <span style={{backgroundColor: `#FD8624`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_12" name="color-code" className="" />
                <label className="" for="color_12">
                  <span style={{backgroundColor: `#2798B7`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_13" name="color-code" className="" />
                <label className="" for="color_13">
                  <span style={{backgroundColor: `#2980B9`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_14" name="color-code" className="" />
                <label className="" for="color_14">
                  <span style={{backgroundColor: `#3598DC`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_15" name="color-code" className="" />
                <label className="" for="color_15">
                  <span style={{backgroundColor: `#528CCB`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_16" name="color-code" className="" />
                <label className="" for="color_16">
                  <span style={{backgroundColor: `#0921EC`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_17" name="color-code" className="" />
                <label className="" for="color_17">
                  <span style={{backgroundColor: `#199EC7`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <span className="color_add"><i>+</i></span>
              </div>
            </div>
            <div className="avatar_search position-relative d-flex p-2">
              <img src={toAbsoluteUrl("/media/patients/drop_search.svg")} alt="search" className="drop_search" />
              <input type="text" placeholder="Search" className="form-control" />
              <Link to="#" className="add-avatar">+ Add Avatar</Link>
            </div>
          </li>
          <li className="navi-item">
            <div className="avatar_select p-2">
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id="avatar_01" name="avatar_img" className="" />
                <label className="avatar_col" for="avatar_01">
                  <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id="avatar_02" name="avatar_img" className="" />
                <label className="avatar_col" for="avatar_02">
                  <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id="avatar_03" name="avatar_img" className="" />
                <label className="avatar_col" for="avatar_03">
                  <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id="avatar_04" name="avatar_img" className="" />
                <label className="avatar_col" for="avatar_04">
                  <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id="avatar_05" name="avatar_img" className="" />
                <label className="avatar_col" for="avatar_05">
                  <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id="avatar_06" name="avatar_img" className="" />
                <label className="avatar_col" for="avatar_06">
                  <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id="avatar_07" name="avatar_img" className="" />
                <label className="avatar_col" for="avatar_07">
                  <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id="avatar_08" name="avatar_img" className="" />
                <label className="avatar_col" for="avatar_08">
                  <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id="avatar_09" name="avatar_img" className="" />
                <label className="avatar_col" for="avatar_09">
                  <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id="avatar_10" name="avatar_img" className="" />
                <label className="avatar_col" for="avatar_10">
                  <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id="avatar_11" name="avatar_img" className="" />
                <label className="avatar_col" for="avatar_11">
                  <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id="avatar_12" name="avatar_img" className="" />
                <label className="avatar_col" for="avatar_12">
                  <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
            </div>
          </li>
      </ul>
      {/*end::Navigation*/}

  </>
}



export function ServicesDropdownMenu() {
  return <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
          <li className="navi-item">
            <div className="service_select p-4">
              <div class="d-inline-flex justify-content-center">
                <span className="specialInfo text-white position-relative" style={{backgroundColor: `#E6511B`}}>Acupunture 
                  <span className="dropdown_label_remove" style={{backgroundColor: `#E6511B`}}>
                    <span className="dropdown_label_remove_icon">x</span>
                  </span>
                </span>
              </div>
              <div class="d-inline-flex justify-content-center">
                <span className="specialInfo text-white position-relative" style={{backgroundColor: `#FD7FAB`}}>Dental 
                  <span className="dropdown_label_remove" style={{backgroundColor: `#FD7FAB`}}>
                    <span className="dropdown_label_remove_icon">x</span>
                  </span>
                </span>
              </div>
              <div class="d-inline-flex justify-content-center">
                <span className="specialInfo text-white position-relative" style={{backgroundColor: `#EA80FC`}}>Skin Care 
                  <span className="dropdown_label_remove" style={{backgroundColor: `#EA80FC`}}>
                    <span className="dropdown_label_remove_icon">x</span>
                  </span>
                </span>
              </div>
              <div class="d-inline-flex justify-content-center">
                <span className="specialInfo text-white position-relative" style={{backgroundColor: `#1DBC9C`}}>Ambien 
                  <span className="dropdown_label_remove" style={{backgroundColor: `#1DBC9C`}}>
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
                  <span className="specialInfo text-white position-relative" style={{backgroundColor: `#E6511B`}}>Acupunture</span>
                </div>
                <div class="d-flex justify-content-left py-1">
                  <span className="specialInfo text-white position-relative" style={{backgroundColor: `#FD7FAB`}}>Dental</span>
                </div>
                <div class="d-flex justify-content-left py-1">
                  <span className="specialInfo text-white position-relative" style={{backgroundColor: `#EA80FC`}}>Skin Care</span>
                </div>
                <div class="d-flex justify-content-left py-1">
                  <span className="specialInfo text-white position-relative" style={{backgroundColor: `#1DBC9C`}}>Ambien</span>
                </div>
              </div>
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
          <li className="navi-item ina_hover">
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
          <li className="navi-item fe_hover">
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

export function StaffDetails() {
  const classes = useStyles();
  return (
    <div className="staff_detail">
      <StaffDetailsTab />
    </div>
  );
}
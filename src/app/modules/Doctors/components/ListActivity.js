import React from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { DropdownItemToggler } from "../../../../_metronic/_partials/dropdowns";
import { makeStyles } from '@material-ui/core/styles';
import { StaffDetailsTab } from "./staff-details-tab";
import { SxDropDown } from '../../../components/SxDropDown';
import { StatusDropDown } from '../../../components/StatusDropDown';
import { ServicesDropDown } from '../../../components/ServicesDropDown';
import { AvailableDropDown } from '../../../components/AvailableDropDown';
import { ColorAndAvatarDropDown } from '../../../components/ColorAndAvatarDropDown';
import { TableHeader } from '../../../components/TableHeader';

const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});

const Column=[{name:"Service Provider",hide:false},
{name:"Experiencer",hide:false},
{name:"Services",hide:false},
{name:"Status",hide:false},
{name:"Sex",hide:false},
{name:"Availability",hide:false},
{name:"Email",hide:false},
{name:"Phone",hide:false},
]

export function ListActivity01(props) {
  const {dataList}=props;
  const classes = useStyles();
  return (
    <div className="contentArea">
      <TableHeader column={Column} listCount={dataList.length} expandVisiable={true} countLable="staff"/>
      <div className="innerContent collapse show" id="staffmanagement">
        <div className="row">
          <div className="col-lg-12">
            <div className="topMiddlecontent">
              {dataList.map((item, i) => {
                return (<div className="d-flex drag_sel drag_selected position-relative" key={i}>
                  <div className="drag_hov mh-100 my-auto">
                    <span className="cu-task-row-toggle__marker"></span>
                    <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                  </div>
                  <ul className="list-inline w-100 row">
                    <li className="col-lg-3 my-auto">
                      <div className="userLogoicon align-content-center">
                        <ColorAndAvatarDropDown item={item}/>
                        <div className="d-flex">
                          <span><Link to="#" onClick={props.toggleDrawer(true)}>{item.name}</Link></span>
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
                        <span className="f-12 font-weight-500">{item.experience_year}.{item.experience_month} <span className="f-10">Years</span></span>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <ServicesDropDown item={item}/>
                    </li>
                    <li className="col-lg-1 activeStatuscontent active_clr text-white">
                      <StatusDropDown item={item}/>
                    </li>
                    <li className="col-lg-1 activeStatuscontent male_bg text-white">
                      <SxDropDown item={item}/>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <AvailableDropDown item={item}/>
                    </li>
                    <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">{item.official_email}</span>
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
                      <span className="d-inline-flex">{item.mobile}</span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="quick-search-tooltip" className="tool_bg">Edit</Tooltip>
                          }>
                          <div className="tab_col mt-0 mb-0" style={{ top: '-3px' }}>
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
                </div>)
              })}

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
                          <span className="listprofileIcon" style={{ backgroundColor: `#2ecd6f` }}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                          <ColorAndAvatarDropDown />
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
                            <span className="specialInfo text-white position-relative" style={{ backgroundColor: `#E6511B` }}>Acupunture
                                      <span className="dropdown_label_remove" style={{ backgroundColor: `#E6511B` }}>
                                <span className="dropdown_label_remove_icon">x</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                        <ServicesDropDown />
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="col-lg-1 activeStatuscontent active_clr text-white">
                    <Dropdown drop="down" alignCenter className="dropdown h-100">
                      <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                        <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Active</a>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
                        <StatusDropDown />
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="col-lg-1 activeStatuscontent male_bg text-white">
                    <Dropdown drop="down" alignCenter className="dropdown h-100">
                      <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                        <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Male</a>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav sx_hover">
                        <SxDropDown />
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
                      <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                        <AvailableDropDown />
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
  );
}



export function StaffDetails() {
  const classes = useStyles();
  return (
    <div className="staff_detail">
      <StaffDetailsTab />
    </div>
  );
}
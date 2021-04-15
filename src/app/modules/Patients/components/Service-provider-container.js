import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {DropdownItemToggler} from "../../../../_metronic/_partials/dropdowns";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import { ServiceDetailsTab } from "./service-details-tab";
const useStyles = makeStyles({
   list: {
     width: 650,
   },
   fullList: {
     width: 'auto',
   },
 });
 

export function ServiceProviderContainer() { 
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
         <div className="clearfix">
            <Drawer className="patientProfileinfo StaffInfo" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
               <div className="p-0 overflow-auto">
                  <Link to="#" className="closeDrawer" onClick={toggleDrawerClose}>
                     <span className="my-auto font-weight-500">
                     <img src={toAbsoluteUrl("/media/patients/drawer_close.svg")} alt="" className="d-block" />
                     </span>
                  </Link>
                  <ServiceDetails />
               </div>
            </Drawer>
            <div className="contentAreaouter">
               <div className="contentArea Ser_Pro">
                  <div className="topHeadercontent d-flex">
                     <div className="toggleLefticon LefticonBG11">
                        <Link  to="#" data-toggle="collapse" data-target="#staffmanagement" className="borderColor11 customProfileBG11">
                           <i className="fa fa-minus text-white"></i>
                        </Link>                   
                     </div>
                     <ul className="list-inline w-100 row">
                        <li className="col-lg-5">
                        <span className="headingHighlight customProfileBG11 text-white">Ent<a class="ml-3"><i class="fa fa-pen"></i></a></span>
                        <span className="tasklistCount">1 Staff</span>
                        </li>    
                        <li className="col-lg-2"><span className="title_drag">Service Type</span></li>
                        <li className="col-lg-2"><span className="title_drag">Providers</span></li>
                        <li className="col-lg-3 position-relative">
                           <span className="title_drag"></span> 
                        </li>
                     </ul>
                  </div>
                  <div className="innerContent collapse show" id="staffmanagement">
                     <div className="row">
                        <div className="col-lg-12">
                           <div className="topMiddlecontent">
                              <div className="d-flex drag_sel drag_selected position-relative">
                              <ul className="list-inline w-100 row">
                                 <li className="col-lg-5 my-auto">
                                    <div className="userLogoicon align-content-center">
                                       <Dropdown drop="down" alignCenter className="dropdown h-100">
                                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                             <span className="listprofileIcon" style={{backgroundColor: `#2ecd6f`}}>AK</span>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu  className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                                             <ColorDropdownMenu />
                                          </Dropdown.Menu>
                                       </Dropdown>
                                       <div className="">
                                          <div className="d-flex"> 
                                             <span className="serv_title"><Link to="#" onClick={toggleDrawer('right', true)}>Health</Link></span>
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
                                          <div className="d-flex">
                                             <span className="DurationBg">Duration: 30 Mins</span>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="col-lg-2 activeStatuscontent">
                                    <Dropdown drop="down" alignCenter className="dropdown h-100 w_130">
                                       <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                       <span className="d-flex pointer h-100 align-items-center justify-content-center font_weight_medium">Private</span>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu  className="dropdown-menu p-0 mt-1 drop_nav st_hover">
                                          <STypeDropdownMenu />
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="col-lg-2 my-auto">
                                    <Dropdown drop="down" alignCenter className="dropdown h-100">
                                       <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                       <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                                          <div class="d-flex mt-1 mb-1 justify-content-center">
                                             <span className="ProviderIcon" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                                             <span className="ProviderIcon" style={{backgroundColor: `#1D58FF`}}>GM</span>
                                             <span className="ProviderIcon" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                                             <span className="ProviderIcon" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                                             <span className="ProviderIcon" style={{backgroundColor: `#A2A2A2`}}>+5</span>
                                          </div>
                                       </div>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu  className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                                         <ProviderDropdownMenu />
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="col-lg-3 my-auto d-flex justify-content-center">
                                    <div className="d-flex border-left pl-8">
                                       <span className="d-flex align-items-center font-size-13">Price</span>
                                       <Link to="#" className="pay_amt">Rs. 200</Link>
                                    </div>
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
                                 </li>
                              </ul>
                           </div>
                           <div className="d-flex drag_sel position-relative">
                              <ul className="list-inline w-100 row">
                                 <li className="col-lg-5 my-auto">
                                    <div className="userLogoicon align-content-center">
                                       <Dropdown drop="down" alignCenter className="dropdown h-100">
                                          <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                             <span className="listprofileIcon" style={{backgroundColor: `#f5f6fa`}}><img src={toAbsoluteUrl("/media/health/heartbeat.svg")} alt="" className="" /></span>
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
                                 <li className="col-lg-2 activeStatuscontent">
                                    <Dropdown drop="down" alignCenter className="dropdown h-100 w_130">
                                       <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                          <span className="d-flex pointer h-100 align-items-center justify-content-center font_weight_medium">Public</span>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav st_hover">
                                       <STypeDropdownMenu />
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="col-lg-2 my-auto">
                                    <Dropdown drop="down" alignCenter className="dropdown h-100">
                                       <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                       <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                                          <div class="d-flex mt-1 mb-1 justify-content-center">
                                             <span className="ProviderIcon" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                                             <span className="ProviderIcon" style={{backgroundColor: `#1D58FF`}}>GM</span>
                                             <span className="ProviderIcon" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                                             <span className="ProviderIcon" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                                             <span className="ProviderIcon" style={{backgroundColor: `#A2A2A2`}}>+5</span>
                                          </div>
                                       </div>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu  className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                                       <ProviderDropdownMenu />
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="col-lg-3 my-auto d-flex justify-content-center">
                                    <div className="d-flex border-left pl-8">
                                       <span className="d-flex align-items-center font-size-13">Price</span>
                                       <Link to="#" className="pay_amt">Rs. 200</Link>
                                    </div>
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
 
 export function ProviderDropdownMenu() {
   return <>
       {/*begin::Navigation*/}
         <ul className="navi navi-hover">
            <li className="navi-item">
               <div className="service_search position-relative">
                  <img src={toAbsoluteUrl("/media/patients/drop_search.svg")} alt="search" className="drop_search" />
                  <input type="text" placeholder="Search" className="form-control" />
               </div>
            </li>
            <li className="navi-item">
               <div className="dropdown-menu-search-main">
                  <div className="service_select">
                     <div class="d-flex justify-content-left py-1">
                        <span className="specialInfo text-white position-relative" style={{backgroundColor: `rgba(230, 81, 27,0.1)`}}>
                           <span className="ProviderIcon" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                           <span className="ProviderName" style={{color: `rgba(230, 81, 27,1)`}}>Gopinath</span> 
                        </span>
                     </div>
                     <div class="d-flex justify-content-left py-1">
                        <span className="specialInfo text-white position-relative" style={{backgroundColor: `rgba(10, 49, 232,0.1)`}}>
                           <span className="ProviderIcon" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                           <span className="ProviderName" style={{color: `rgba(10, 49, 232,1)`}}>Mani</span> 
                        </span>
                     </div>
                     <div class="d-flex justify-content-left py-1">
                        <span className="specialInfo text-white position-relative" style={{backgroundColor: `rgba(29, 188, 156,0.1)`}}>
                           <span className="ProviderIcon" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                           <span className="ProviderName" style={{color: `rgba(29, 188, 156,1)`}}>Sankar</span> 
                        </span>
                     </div>
                     <div class="d-flex justify-content-left py-1">
                        <span className="specialInfo text-white position-relative" style={{backgroundColor: `rgba(234, 128, 252,0.1)`}}>
                           <span className="ProviderIcon" style={{backgroundColor: `#2ecd6f`}}><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                           <span className="ProviderName" style={{color: `rgba(234, 128, 252,1)`}}>Kavinesh</span> 
                        </span>
                     </div>
                  </div>
               </div>
            </li>
         </ul>
      {/*end::Navigation*/}
   </>
 }
 

 
 export function STypeDropdownMenu() {
   return <>
       {/*begin::Navigation*/}
       <ul className="navi navi-hover">
           <li className="navi-item">
               <a href="#" className="navi-link">
                 <span className="navi-text">Private</span>
               </a>
           </li>
           <li className="navi-item">
               <a href="#" className="navi-link">
                 <span className="navi-text">Public</span>
               </a>
           </li>
       </ul>
       {/*end::Navigation*/}
   </>
 }


 export function ServiceDetails() {
   const classes = useStyles();
   return (
     <div className="staff_detail">
       <ServiceDetailsTab />
     </div>
   );
 }


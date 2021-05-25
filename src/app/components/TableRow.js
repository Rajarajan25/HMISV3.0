import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { SxDropDown } from '../components/SxDropDown';
import { StatusDropDown } from '../components/StatusDropDown';
import { ServicesDropDown } from '../components/ServicesDropDown';
import { AvailableDropDown } from '../components/AvailableDropDown';
import { ColorAndAvatarDropDown } from '../components/ColorAndAvatarDropDown';
export function TableRow(props) {
    const { row, drawer, addButton, addText } = props;
    const [addnew, setAddNew] = useState(false);
    return (
        <div className="innerContent collapse show" id="staffmanagement">
            <div className="row">
                <div className="col-lg-12">
                    <div className="topMiddlecontent">
                        {row.map((item, i) => {
                            return (<div className="d-flex drag_sel drag_selected position-relative" key={i}>
                                <div className="drag_hov mh-100 my-auto">
                                    <span className="cu-task-row-toggle__marker"></span>
                                    <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                                </div>
                                <ul className="list-inline w-100 row">
                                    <li className="col-lg-3 my-auto">
                                        <div className="userLogoicon align-content-center">
                                            <ColorAndAvatarDropDown item={item} />
                                            <div className="d-flex">
                                                <span><Link to="#" onClick={drawer(true,item)}>{item.name}</Link></span>
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
                                        <ServicesDropDown item={item} />
                                    </li>
                                    <li className="col-lg-1 activeStatuscontent active_clr text-white">
                                        <StatusDropDown item={item} />
                                    </li>
                                    <li className="col-lg-1 activeStatuscontent male_bg text-white">
                                        <SxDropDown item={item} />
                                    </li>
                                    <li className="col-lg-1 my-auto">
                                        <AvailableDropDown item={item} />
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
                        {addnew ? <ul className="newTask_1 row" >
                            <li className="col-lg-8">
                                <Link to="#" className="userLogoicon" >
                                    <img src={toAbsoluteUrl("/media/patients/close_icon.svg")} alt="close" className="removeNewtask" onClick={() => setAddNew(false)} />
                                    <input type="text" className="newTaskinput" name="" id="" placeholder="Doctor name" />
                                </Link>
                            </li>
                            <li className="col-lg-4 text-right">
                                <span className="ctrlSpan">ctrl + enter to open </span>
                                <button type="button" className="btn btn-primary btn-sm font-sm mx-1 saveNewtask">SAVE</button>
                            </li>
                        </ul> : <div></div>}
                    </div>
                    {addButton ? <button type="button" className="customNewtaskBTN" onClick={() => setAddNew(true)}>+ {addText}</button> : <div></div>}
                </div>
            </div>
        </div>)
}
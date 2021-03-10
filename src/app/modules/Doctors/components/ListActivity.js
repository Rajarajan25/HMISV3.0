import React, { useMemo, useLayoutEffect, useEffect, useState, Component, Suspense } from "react";
import { useFormik } from "formik";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { Dropdown } from "react-bootstrap";
import {DropdownItemToggler} from "../../../../_metronic/_partials/dropdowns";
import * as Yup from "yup";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { PatientContext } from '../PatientContext'
import usestaffs from '../InfiniteList.hooksOriginal'
import gql from "graphql-tag";
const ADD_STAFF = gql`
mutation addStaff($name:String,$status:Boolean,$category:String) {
  addStaff(name: $name,status:$status,category:$category) {
    id
    name
    status
    category
  }
}`;
const initialValues = {
  title: "",
  username: "",
  email: "",
  mobilenumber: "",
  sex: "",
  location: "",
  address: "",
  submitBttn: '',
  first_name: ""
};
export function ListActivity() {  
  const formik = useFormik({
    initialValues,
    validationSchema: ModalFormSchema,
    onSubmit: (values, index, { setStatus, setSubmitting }) => {
      console.log("Values" + JSON.stringify(values))
      if (values.submitBttn == 'submit') {
        console.log("ValuesAdded" + JSON.stringify(values))
        const values = [...fields];
        console.log(values)
        AddStaff(values[index].value);
        alert("FORMIK added" + JSON.stringify(values[index]))
      }
    }
  });
  const [addStaff] = useMutation(ADD_STAFF)
  const [modalShow, setModalShow] = useState(false);
  const AddStaff = async (values, type) => {
    let add_User = addStaff({
      variables: {
        name: values,
        status: true,
        category: type
      }
    })
      .then(res => {
        console.log(res.data.addStaff);
        onStaffAdd(res.data.addStaff);
      })
    handleRemove()
  };
  const ModalFormSchema = Yup.object({
    username: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .min(3, 'Must be 3 characters or more')
      .required('Required User Name'),
  });
  const [fields, setFields] = useState([{ value: null }]);
  const { staffs, loading, error, loadMore, hasNextPage } = usestaffs()
  console.log(staffs)
  React.useEffect(() => {
    if (loading === false && staffs) {
      setpatient({
        type: "SETSTATE_PATIENT",
        payload: staffs,
      });
    }
  }, [loading]);
  const [patient, setpatient] = React.useContext(PatientContext);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  let currentPatient = patient.currentPatient;
  console.log("data" + JSON.stringify(staffs));
  var serviceprovider = [];
  var staff = [];
  var admin = [];
  var receptionist = [];
  var scheduled = [];
  console.log(patient.listPatient.length)
  if (patient.listPatient !== undefined && (patient.listPatient.length !== undefined || patient.listPatient.length > 1)) {
    patient.listPatient.map(value => {
      if (value.name !== null && value.name !== undefined) {
        if (value.category == "service_provider") {
          serviceprovider.push(value);
        }
        else if (value.category == "staff") {
          staff.push(value);
        }
        else if (value.category == "admin") {
          admin.push(value);
        }
        else if (value.category == "receptionist") {
          receptionist.push(value);
        }
        else if (value.category == "scheduled") {
          scheduled.push(value);
        }
      }
      console.log(JSON.stringify(serviceprovider, null, 2))
    });
  }
  const onStaffAdd = (patient) => {
    setpatient({
      type: "ADD_PATIENT",
      payload: patient
    });
    console.log(patient)
  }
  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }
  function handleRemove() {
    const values = [...fields];
    values.splice(1, 1);
    setFields(values);
  }
  function handleAdd(type) {
    const values = [...fields];
    values.push({ "type": type })
    setFields(values);

  }
  function handleSave(index, type) {
    const values = [...fields];
    console.log(values)
    AddStaff(values[index].value, type);
    alert("FORMIK added" + JSON.stringify(values[index]))
  }

 
  return (
    <>
 
 
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
                    <span className="tasklistCount">{serviceprovider.length} Staff</span>
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
                    {serviceprovider.map(value => {
                    return (
                      <>
                      <div className="d-flex drag_sel drag_selected position-relative">
                        <div className="drag_hov mh-100 my-auto">
                            <span className="cu-task-row-toggle__marker"></span>
                            <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                        </div>
                        <ul className="list-inline w-100 row">
                          <li className="col-lg-3 my-auto">
                            <div className="userLogoicon align-content-center">
                              <Link to="#" className="d-flex"><span className="listprofileIcon" style={{
                backgroundColor: `#2ecd6f`}}>AK</span> <span>{value.name
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
                          </li>
                          <li className="col-lg-1 my-auto">11/3/19</li>
                          <li className="col-lg-1 my-auto">
                            <div class="d-flex mt-1 mb-1 justify-content-center">
                              <span className="specialInfo text-white" style={{backgroundColor: `#E6511B`}}>Acupunture</span>
                            </div>
                          </li>
                          <li className="col-lg-1 activeStatuscontent active_clr text-white">
                            <Dropdown drop="down" alignCenter className="dropdown h-100">
                              <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                  <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Active</a>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
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
                                <div className="d-flex justify-content-center flex-column avail_wid">
                                  <div className="d-flex mt-2 mb-2">
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
                      </>
                    );
                  }
                  )}
                      {fields.map((field, idx) => {
                    return (
                      <form
                        id="kt_login_signin_form"
                        className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
                        onSubmit={formik.handleSubmit}
                      >
                        <div key={`${field}-${idx}`}>
                          {idx != 0 && field != undefined && fields[1].type == "service_provider" ?  <ul className="newTask_1 row">
                        <li className="col-lg-8">
                          <Link to="#" className="userLogoicon">
                            <button type="button" className="removeNewtask">X</button>
                            <input type="text"
                                  style={{ border: 'none', outline: 0 }}
                                  className="newTaskinput"
                                  placeholder="Doctor name"
                                  value={field.value || ""}
                                  onChange={e => handleChange(idx, e)}
                                />
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
                          <button type="button" className="btn btn-primary btn-sm font-sm mx-1 saveNewtask" onClick={() => {
                                handleSave(idx, "service_provider")
                                formik.setFieldValue('submitBttn', 'submit')

                              }} >SAVE</button>
                        </li>
                        </ul> : ""}
                        </div>
                      </form>
                    );
                  })}

                    </div>
                    <button type="button" className="customNewtaskBTN"  onClick={() => handleAdd("service_provider")}>+ New Staff</button>
                  </div>    
                </div>                 
              </div>
            </div>
          </div>

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
                    <span className="headingHighlight customProfileBG11 text-white">Staff</span>
                    <span className="tasklistCount">{staff.length} Staff</span>
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
                    {staff.map(value => {
                    return (
                      <>
                      <div className="d-flex drag_sel drag_selected position-relative">
                        <div className="drag_hov mh-100 my-auto">
                            <span className="cu-task-row-toggle__marker"></span>
                            <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                        </div>
                        <ul className="list-inline w-100 row">
                          <li className="col-lg-3 my-auto">
                            <div className="userLogoicon align-content-center">
                              <Link to="#" className="d-flex"><span className="listprofileIcon" style={{
                backgroundColor: `#2ecd6f`}}>AK</span> <span>{value.name
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
                          </li>
                          <li className="col-lg-1 my-auto">11/3/19</li>
                          <li className="col-lg-1 my-auto">
                            <div class="d-flex mt-1 mb-1 justify-content-center">
                              <span className="specialInfo text-white" style={{backgroundColor: `#E6511B`}}>Acupunture</span>
                            </div>
                          </li>
                          <li className="col-lg-1 activeStatuscontent active_clr text-white">
                            <Dropdown drop="down" alignCenter className="dropdown h-100">
                              <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                  <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Active</a>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
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
                                <div className="d-flex justify-content-center flex-column avail_wid">
                                  <div className="d-flex mt-2 mb-2">
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
                      </>
                    );
                  }
                  )}
                      {fields.map((field, idx) => {
                    return (
                      <form
                        id="kt_login_signin_form"
                        className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
                        onSubmit={formik.handleSubmit}
                      >
                        <div key={`${field}-${idx}`}>
                          {idx != 0 && field != undefined && fields[1].type == "staff" ?  <ul className="newTask_1 row">
                        <li className="col-lg-8">
                          <Link to="#" className="userLogoicon">
                            <button type="button" className="removeNewtask">X</button>
                            <input type="text"
                                  style={{ border: 'none', outline: 0 }}
                                  className="newTaskinput"
                                  placeholder="Doctor name"
                                  value={field.value || ""}
                                  onChange={e => handleChange(idx, e)}
                                />
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
                          <button type="button" className="btn btn-primary btn-sm font-sm mx-1 saveNewtask" onClick={() => {
                                handleSave(idx, "staff")
                                formik.setFieldValue('submitBttn', 'submit')

                              }} >SAVE</button>
                        </li>
                        </ul> : ""}
                        </div>
                      </form>
                    );
                  })}

                    </div>
                    <button type="button" className="customNewtaskBTN"  onClick={() => handleAdd("staff")}>+ New Staff</button>
                  </div>    
                </div>                 
              </div>
            </div>
          </div>

          
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
                    <span className="headingHighlight customProfileBG11 text-white">Admin</span>
                    <span className="tasklistCount">{admin.length} Staff</span>
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
                    {admin.map(value => {
                    return (
                      <>
                      <div className="d-flex drag_sel drag_selected position-relative">
                        <div className="drag_hov mh-100 my-auto">
                            <span className="cu-task-row-toggle__marker"></span>
                            <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                        </div>
                        <ul className="list-inline w-100 row">
                          <li className="col-lg-3 my-auto">
                            <div className="userLogoicon align-content-center">
                              <Link to="#" className="d-flex"><span className="listprofileIcon" style={{
                backgroundColor: `#2ecd6f`}}>AK</span> <span>{value.name
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
                          </li>
                          <li className="col-lg-1 my-auto">11/3/19</li>
                          <li className="col-lg-1 my-auto">
                            <div class="d-flex mt-1 mb-1 justify-content-center">
                              <span className="specialInfo text-white" style={{backgroundColor: `#E6511B`}}>Acupunture</span>
                            </div>
                          </li>
                          <li className="col-lg-1 activeStatuscontent active_clr text-white">
                            <Dropdown drop="down" alignCenter className="dropdown h-100">
                              <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                  <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Active</a>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
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
                                <div className="d-flex justify-content-center flex-column avail_wid">
                                  <div className="d-flex mt-2 mb-2">
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
                      </>
                    );
                  }
                  )}
                      {fields.map((field, idx) => {
                    return (
                      <form
                        id="kt_login_signin_form"
                        className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
                        onSubmit={formik.handleSubmit}
                      >
                        <div key={`${field}-${idx}`}>
                          {idx != 0 && field != undefined && fields[1].type == "admin" ?  <ul className="newTask_1 row">
                        <li className="col-lg-8">
                          <Link to="#" className="userLogoicon">
                            <button type="button" className="removeNewtask">X</button>
                            <input type="text"
                                  style={{ border: 'none', outline: 0 }}
                                  className="newTaskinput"
                                  placeholder="Doctor name"
                                  value={field.value || ""}
                                  onChange={e => handleChange(idx, e)}
                                />
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
                          <button type="button" className="btn btn-primary btn-sm font-sm mx-1 saveNewtask" onClick={() => {
                                handleSave(idx, "admin")
                                formik.setFieldValue('submitBttn', 'submit')

                              }} >SAVE</button>
                        </li>
                        </ul> : ""}
                        </div>
                      </form>
                    );
                  })}

                    </div>
                    <button type="button" className="customNewtaskBTN"  onClick={() => handleAdd("admin")}>+ New Staff</button>
                  </div>    
                </div>                 
              </div>
            </div>
          </div>

          
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
                    <span className="headingHighlight customProfileBG11 text-white">Receptionist</span>
                    <span className="tasklistCount">{receptionist.length} Staff</span>
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
                    {receptionist.map(value => {
                    return (
                      <>
                      <div className="d-flex drag_sel drag_selected position-relative">
                        <div className="drag_hov mh-100 my-auto">
                            <span className="cu-task-row-toggle__marker"></span>
                            <img src={toAbsoluteUrl("/media/patients/drag_hover.svg")} alt="" className="drag_img" />
                        </div>
                        <ul className="list-inline w-100 row">
                          <li className="col-lg-3 my-auto">
                            <div className="userLogoicon align-content-center">
                              <Link to="#" className="d-flex"><span className="listprofileIcon" style={{
                backgroundColor: `#2ecd6f`}}>AK</span> <span>{value.name
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
                          </li>
                          <li className="col-lg-1 my-auto">11/3/19</li>
                          <li className="col-lg-1 my-auto">
                            <div class="d-flex mt-1 mb-1 justify-content-center">
                              <span className="specialInfo text-white" style={{backgroundColor: `#E6511B`}}>Acupunture</span>
                            </div>
                          </li>
                          <li className="col-lg-1 activeStatuscontent active_clr text-white">
                            <Dropdown drop="down" alignCenter className="dropdown h-100">
                              <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                  <a href="#" className="d-flex text-white h-100 align-items-center justify-content-center">Active</a>
                              </Dropdown.Toggle>
                              <Dropdown.Menu  className="dropdown-menu p-0 mt-1 w-100 drop_nav">
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
                                <div className="d-flex justify-content-center flex-column avail_wid">
                                  <div className="d-flex mt-2 mb-2">
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
                      </>
                    );
                  }
                  )}
                      {fields.map((field, idx) => {
                    return (
                      <form
                        id="kt_login_signin_form"
                        className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
                        onSubmit={formik.handleSubmit}
                      >
                        <div key={`${field}-${idx}`}>
                          {idx != 0 && field != undefined && fields[1].type == "receptionist" ?  <ul className="newTask_1 row">
                        <li className="col-lg-8">
                          <Link to="#" className="userLogoicon">
                            <button type="button" className="removeNewtask">X</button>
                            <input type="text"
                                  style={{ border: 'none', outline: 0 }}
                                  className="newTaskinput"
                                  placeholder="Doctor name"
                                  value={field.value || ""}
                                  onChange={e => handleChange(idx, e)}
                                />
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
                          <button type="button" className="btn btn-primary btn-sm font-sm mx-1 saveNewtask" onClick={() => {
                                handleSave(idx, "receptionist")
                                formik.setFieldValue('submitBttn', 'submit')

                              }} >SAVE</button>
                        </li>
                        </ul> : ""}
                        </div>
                      </form>
                    );
                  })}

                    </div>
                    <button type="button" className="customNewtaskBTN"  onClick={() => handleAdd("receptionist")}>+ New Staff</button>
                  </div>    
                </div>                 
              </div>
            </div>
          </div>


          </>

)
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

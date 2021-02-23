
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
                    <span className="headingHighlight customProfileBG11 text-white">Healthy 
                      <Router>
                        <Link  to="javascript:void(0)" className="ml-3"><i className="fa fa-pen"></i></Link >
                        <Link  to="javascript:void(0)"><i className="fa fa-check-square"></i></Link >
                        <Link  to="javascript:void(0)"><i className="fa fa-ellipsis-h"></i></Link >
                      </Router>
                    </span>
                    <span className="tasklistCount">5 Doctors</span>
                  </li>
                  <li><span>Assignee</span></li>
                  <li><span>Last seen</span></li>
                  <li className="d-none"><span>Date created</span></li>
                  <li><span>Working Hours</span></li>
                  <li><span>New Patient</span></li>
                  <li><span>Medications</span></li>
                  <li className="d-none"><span>Physician</span></li>
                  <li className="d-none"><span>Insurance</span></li>
                  <li><span>Surgeries</span></li>
                  <li><span>Allergies</span></li>
                  <li><span>Priority</span></li>
                  <li className="d-none"><span>Conditions</span></li>
                  <li><span className="mr-2">Comments</span><span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span></li>
                </ul>
              </div>
              <div className="innerContent collapse show" id="availabledoctors">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="topMiddlecontent">
                      <ul>
                        <li>
                          <div className="userLogoicon">
                            <Link to="#" className="d-flex"><span className="listprofileIcon customProfileBG1">AK</span> <span>Anand Kumar</span></Link >
                            <Link to="#" className="ml-1 edit_staff">
                              <OverlayTrigger 
                                placement="top"
                                overlay={
                                <Tooltip id="quick-search-tooltip">Rename</Tooltip>
                                }>
                                  <img src={toAbsoluteUrl("/media/patients/edit_staff.svg")} alt="" className="" />
                              </OverlayTrigger>
                            </Link >
                          </div>
                        </li>
                        <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li className="activeStatuscontent customProfileBG4">May 2020</li>
                        <li className="d-none">Date created</li>
                        <li>
                          <svg id="noun_Calendar_3528893" xmlns="http://www.w3.org/2000/svg" width="17.049" height="17.049" viewBox="0 0 17.049 17.049">
                            <path id="Path_335" data-name="Path 335" d="M20.155,5.947h-.379V5.379a.379.379,0,0,0-.758,0v.568H17.882V5.379a.379.379,0,0,0-.758,0v.568h-7.2V5.379a.379.379,0,0,0-.758,0v.568H8.031V5.379a.379.379,0,0,0-.758,0v.568H6.894A1.9,1.9,0,0,0,5,7.842V20.155a1.9,1.9,0,0,0,1.894,1.894H20.155a1.9,1.9,0,0,0,1.894-1.894V7.842A1.9,1.9,0,0,0,20.155,5.947ZM6.894,6.7h.379v.568a.379.379,0,0,0,.758,0V6.7H9.168v.568a.379.379,0,0,0,.758,0V6.7h7.2v.568a.379.379,0,0,0,.758,0V6.7h1.137v.568a.379.379,0,0,0,.758,0V6.7h.379a1.138,1.138,0,0,1,1.137,1.137V9.168H5.758V7.842A1.138,1.138,0,0,1,6.894,6.7ZM20.155,21.292H6.894a1.138,1.138,0,0,1-1.137-1.137V9.925H21.292v10.23A1.138,1.138,0,0,1,20.155,21.292Zm-6.63-9.851a4.168,4.168,0,1,0,4.168,4.168A4.173,4.173,0,0,0,13.525,11.441Zm0,7.578a3.41,3.41,0,1,1,3.41-3.41A3.414,3.414,0,0,1,13.525,19.018Zm1.786-4.654a.38.38,0,0,1-.006.536l-1.928,1.894c-.009.009-.021.017-.032.027a.24.24,0,0,1-.025.021.452.452,0,0,1-.042.023c-.008,0-.015.009-.025.013a.262.262,0,0,1-.051.015l-.021.006a.464.464,0,0,1-.072.008.3.3,0,0,1-.072-.008l-.021-.006a.213.213,0,0,1-.049-.015l-.025-.013a.293.293,0,0,1-.042-.023.131.131,0,0,1-.025-.021.218.218,0,0,1-.032-.027l-1.1-1.082a.379.379,0,0,1,.53-.542l.837.822,1.663-1.633A.38.38,0,0,1,15.311,14.364Z" transform="translate(-5 -5)" fill="#707070"></path>
                          </svg>
                        </li>
                        <li>Yes</li>
                        <li>
                          <Link  to="javascript:void(0)" className="specialInfo bg-danger text-white" data-toggle="modal" data-target="#medicalDetails">PRINIVIL</Link>
                          <Link  to="javascript:void(0)" className="specialInfo bg-primary text-white" data-toggle="modal" data-target="#medicalDetails">PRINIVIL</Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li className="activeStatuscontent customProfileBG12">No</li>
                        <li className="activeStatuscontent customProfileBG13">Yes</li>
                        <li><span className="rounddashedCircle"><i className="fa fa-flag text-danger fa-sm"></i></span></li>
                        <li className="d-none">Conditions</li>
                        <li>
                          <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-comments fa-sm"></i></Link>
                        </li>
                      </ul>
                      <ul>
                        <li><Link  to="javascript:void(0)" className="userLogoicon" data-toggle="modal" data-target="#commonModalright"><span className="listprofileIcon customProfileBG2">SK</span> <span>Siva Kumar</span></Link></li>
                        <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li className="activeStatuscontent customProfileBG7">Sep 2020</li>
                        <li className="d-none">Date created</li>
                        <li>
                          <svg id="noun_Calendar_3528893" xmlns="http://www.w3.org/2000/svg" width="17.049" height="17.049" viewBox="0 0 17.049 17.049">
                            <path id="Path_335" data-name="Path 335" d="M20.155,5.947h-.379V5.379a.379.379,0,0,0-.758,0v.568H17.882V5.379a.379.379,0,0,0-.758,0v.568h-7.2V5.379a.379.379,0,0,0-.758,0v.568H8.031V5.379a.379.379,0,0,0-.758,0v.568H6.894A1.9,1.9,0,0,0,5,7.842V20.155a1.9,1.9,0,0,0,1.894,1.894H20.155a1.9,1.9,0,0,0,1.894-1.894V7.842A1.9,1.9,0,0,0,20.155,5.947ZM6.894,6.7h.379v.568a.379.379,0,0,0,.758,0V6.7H9.168v.568a.379.379,0,0,0,.758,0V6.7h7.2v.568a.379.379,0,0,0,.758,0V6.7h1.137v.568a.379.379,0,0,0,.758,0V6.7h.379a1.138,1.138,0,0,1,1.137,1.137V9.168H5.758V7.842A1.138,1.138,0,0,1,6.894,6.7ZM20.155,21.292H6.894a1.138,1.138,0,0,1-1.137-1.137V9.925H21.292v10.23A1.138,1.138,0,0,1,20.155,21.292Zm-6.63-9.851a4.168,4.168,0,1,0,4.168,4.168A4.173,4.173,0,0,0,13.525,11.441Zm0,7.578a3.41,3.41,0,1,1,3.41-3.41A3.414,3.414,0,0,1,13.525,19.018Zm1.786-4.654a.38.38,0,0,1-.006.536l-1.928,1.894c-.009.009-.021.017-.032.027a.24.24,0,0,1-.025.021.452.452,0,0,1-.042.023c-.008,0-.015.009-.025.013a.262.262,0,0,1-.051.015l-.021.006a.464.464,0,0,1-.072.008.3.3,0,0,1-.072-.008l-.021-.006a.213.213,0,0,1-.049-.015l-.025-.013a.293.293,0,0,1-.042-.023.131.131,0,0,1-.025-.021.218.218,0,0,1-.032-.027l-1.1-1.082a.379.379,0,0,1,.53-.542l.837.822,1.663-1.633A.38.38,0,0,1,15.311,14.364Z" transform="translate(-5 -5)" fill="#707070"></path>
                          </svg>
                        </li>
                        <li>Yes</li>
                        <li>
                          <Link  to="javascript:void(0)" className="specialInfo bg-warning text-white" data-toggle="modal" data-target="#medicalDetails">Advil</Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li className="activeStatuscontent customProfileBG9">No</li>
                        <li className="activeStatuscontent customProfileBG12">Yes</li>
                        <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                        <li className="d-none">Conditions</li>
                        <li>
                          <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-comments fa-sm"></i></Link>
                        </li>
                      </ul>
                      <ul className="d-none">
                        <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG3">SB</span> <span>Sureshbabu</span></Link></li>
                        <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li>Aug 2020</li>
                        <li className="d-none">Date created</li>
                        <li>
                          <svg id="noun_Calendar_3528893" xmlns="http://www.w3.org/2000/svg" width="17.049" height="17.049" viewBox="0 0 17.049 17.049">
                            <path id="Path_335" data-name="Path 335" d="M20.155,5.947h-.379V5.379a.379.379,0,0,0-.758,0v.568H17.882V5.379a.379.379,0,0,0-.758,0v.568h-7.2V5.379a.379.379,0,0,0-.758,0v.568H8.031V5.379a.379.379,0,0,0-.758,0v.568H6.894A1.9,1.9,0,0,0,5,7.842V20.155a1.9,1.9,0,0,0,1.894,1.894H20.155a1.9,1.9,0,0,0,1.894-1.894V7.842A1.9,1.9,0,0,0,20.155,5.947ZM6.894,6.7h.379v.568a.379.379,0,0,0,.758,0V6.7H9.168v.568a.379.379,0,0,0,.758,0V6.7h7.2v.568a.379.379,0,0,0,.758,0V6.7h1.137v.568a.379.379,0,0,0,.758,0V6.7h.379a1.138,1.138,0,0,1,1.137,1.137V9.168H5.758V7.842A1.138,1.138,0,0,1,6.894,6.7ZM20.155,21.292H6.894a1.138,1.138,0,0,1-1.137-1.137V9.925H21.292v10.23A1.138,1.138,0,0,1,20.155,21.292Zm-6.63-9.851a4.168,4.168,0,1,0,4.168,4.168A4.173,4.173,0,0,0,13.525,11.441Zm0,7.578a3.41,3.41,0,1,1,3.41-3.41A3.414,3.414,0,0,1,13.525,19.018Zm1.786-4.654a.38.38,0,0,1-.006.536l-1.928,1.894c-.009.009-.021.017-.032.027a.24.24,0,0,1-.025.021.452.452,0,0,1-.042.023c-.008,0-.015.009-.025.013a.262.262,0,0,1-.051.015l-.021.006a.464.464,0,0,1-.072.008.3.3,0,0,1-.072-.008l-.021-.006a.213.213,0,0,1-.049-.015l-.025-.013a.293.293,0,0,1-.042-.023.131.131,0,0,1-.025-.021.218.218,0,0,1-.032-.027l-1.1-1.082a.379.379,0,0,1,.53-.542l.837.822,1.663-1.633A.38.38,0,0,1,15.311,14.364Z" transform="translate(-5 -5)" fill="#707070"></path>
                          </svg>
                        </li>
                        <li>No</li>
                        <li>
                          <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li>No</li>
                        <li>No</li>
                        <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                        <li className="d-none">Conditions</li>
                        <li>
                          <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-comments fa-sm"></i></Link>
                        </li>
                      </ul>
                      <ul className="d-none">
                        <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG4">PB</span> <span>Prabaker</span></Link></li>
                        <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li>July 2020</li>
                        <li className="d-none">Date created</li>
                        <li>
                          <svg id="noun_Calendar_3528893" xmlns="http://www.w3.org/2000/svg" width="17.049" height="17.049" viewBox="0 0 17.049 17.049">
                            <path id="Path_335" data-name="Path 335" d="M20.155,5.947h-.379V5.379a.379.379,0,0,0-.758,0v.568H17.882V5.379a.379.379,0,0,0-.758,0v.568h-7.2V5.379a.379.379,0,0,0-.758,0v.568H8.031V5.379a.379.379,0,0,0-.758,0v.568H6.894A1.9,1.9,0,0,0,5,7.842V20.155a1.9,1.9,0,0,0,1.894,1.894H20.155a1.9,1.9,0,0,0,1.894-1.894V7.842A1.9,1.9,0,0,0,20.155,5.947ZM6.894,6.7h.379v.568a.379.379,0,0,0,.758,0V6.7H9.168v.568a.379.379,0,0,0,.758,0V6.7h7.2v.568a.379.379,0,0,0,.758,0V6.7h1.137v.568a.379.379,0,0,0,.758,0V6.7h.379a1.138,1.138,0,0,1,1.137,1.137V9.168H5.758V7.842A1.138,1.138,0,0,1,6.894,6.7ZM20.155,21.292H6.894a1.138,1.138,0,0,1-1.137-1.137V9.925H21.292v10.23A1.138,1.138,0,0,1,20.155,21.292Zm-6.63-9.851a4.168,4.168,0,1,0,4.168,4.168A4.173,4.173,0,0,0,13.525,11.441Zm0,7.578a3.41,3.41,0,1,1,3.41-3.41A3.414,3.414,0,0,1,13.525,19.018Zm1.786-4.654a.38.38,0,0,1-.006.536l-1.928,1.894c-.009.009-.021.017-.032.027a.24.24,0,0,1-.025.021.452.452,0,0,1-.042.023c-.008,0-.015.009-.025.013a.262.262,0,0,1-.051.015l-.021.006a.464.464,0,0,1-.072.008.3.3,0,0,1-.072-.008l-.021-.006a.213.213,0,0,1-.049-.015l-.025-.013a.293.293,0,0,1-.042-.023.131.131,0,0,1-.025-.021.218.218,0,0,1-.032-.027l-1.1-1.082a.379.379,0,0,1,.53-.542l.837.822,1.663-1.633A.38.38,0,0,1,15.311,14.364Z" transform="translate(-5 -5)" fill="#707070"></path>
                          </svg>
                        </li>
                        <li>No</li>
                        <li>
                          <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li>Yes</li>
                        <li>No</li>
                        <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                        <li className="d-none">Conditions</li>
                        <li>
                          <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-comments fa-sm"></i></Link>
                        </li>
                      </ul>

                      <ul className="newTask_1">
                        <li>
                          <Link to="javascript:void(0)" className="userLogoicon">
                            <span className="listprofileIcon customProfileBG4">
                              <i className="fe fe-user-plus"></i> 
                            </span> 
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
                    <button type="button" className="customNewtaskBTN">+ New Doctor</button>
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
                  <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#onFielddoctors" className="borderColor2 textColor2">
                    <i className="fa fa-angle-down"></i> 
                  </Link>                           
                </div>
                <ul className="list-inline w-100">
                  <li>
                    <span className="headingHighlight customProfileBG2 text-white">On-Field Doctors 
                      <Link  to="javascript:void(0)" className="ml-3"><i className="fa fa-pen"></i></Link>
                      <Link  to="javascript:void(0)"><i className="fa fa-check-square"></i></Link>
                      <Link  to="javascript:void(0)"><i className="fa fa-ellipsis-h"></i></Link>
                    </span>
                    <span className="tasklistCount">5 Doctors</span>
                  </li>
                </ul>
              </div>
              <div className="innerContent collapse show" id="onFielddoctors">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="topMiddlecontent">
                      <ul>
                        <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG1">AK</span> <span>Anandkumar</span></Link></li>
                        <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li>May 2020</li>
                        <li className="d-none">Date created</li>
                        <li>Yes</li>
                        <li>
                          <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li>No</li>
                        <li>Yes</li>
                        <li><span className="rounddashedCircle"><i className="fa fa-flag text-danger fa-sm"></i></span></li>
                        <li className="d-none">Conditions</li>
                        <li>
                          <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-comments fa-sm"></i></Link>
                        </li>
                      </ul>
                      <ul>
                        <li><Link  to="javascript:void(0)" className="userLogoicon" data-toggle="modal" data-target="#commonModalright"><span className="listprofileIcon customProfileBG2">SK</span> <span>Sivakumar</span></Link></li>
                        <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li>Sep 2020</li>
                        <li className="d-none">Date created</li>
                        <li>Yes</li>
                        <li>
                          <Link  to="javascript:void(0)" className="m-auto rounded-circle " data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li>Yes</li>
                        <li>Yes</li>
                        <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                        <li className="d-none">Conditions</li>
                        <li><i className="far fa-comments fa-sm"></i></li>
                      </ul>
                      <ul>
                        <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG3">SB</span> <span>Sureshbabu</span></Link></li>
                        <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li>Aug 2020</li>
                        <li className="d-none">Date created</li>
                        <li>No</li>
                        <li>
                          <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li>No</li>
                        <li>No</li>
                        <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                        <li className="d-none">Conditions</li>
                        <li><i className="far fa-comments fa-sm"></i></li>
                      </ul>
                      <ul>
                        <li><Link to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG4">PB</span> <span>Prabaker</span></Link></li>
                        <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li>July 2020</li>
                        <li className="d-none">Date created</li>
                        <li>No</li>
                        <li>
                          <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li>Yes</li>
                        <li>No</li>
                        <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                        <li className="d-none">Conditions</li>
                        <li><i className="far fa-comments fa-sm"></i></li>
                      </ul>
                    </div>
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
                <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#labAssitentcontent" className="borderColor3 textColor3">
                  <i className="fa fa-angle-down"></i> 
                </Link>                    
              </div>
              <ul className="list-inline w-100">
                <li>
                  <span className="headingHighlight customProfileBG3 text-white">Lab Assistant 
                    <Link  to="javascript:void(0)" className="ml-3"><i className="fa fa-pen"></i></Link>
                    <Link  to="javascript:void(0)"><i className="fa fa-check-square"></i></Link>
                    <Link  to="javascript:void(0)"><i className="fa fa-ellipsis-h"></i></Link>
                  </span>
                  <span className="tasklistCount">3 Lab Assistant</span>
                </li>
              </ul>
            </div>
            <div className="innerContent collapse show" id="labAssitentcontent">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="topMiddlecontent">
                    <ul>
                      <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG1">AK</span> <span>Anandkumar</span></Link></li>
                      <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                      <li>May 2020</li>
                      <li className="d-none">Date created</li>
                      <li>Yes</li>
                      <li>
                        <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                      </li>
                      <li className="d-none">Physician</li>
                      <li className="d-none">Insurance</li>
                      <li>No</li>
                      <li>Yes</li>
                      <li><span className="rounddashedCircle"><i className="fa fa-flag text-danger fa-sm"></i></span></li>
                      <li className="d-none">Conditions</li>
                      <li>
                        <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-comments fa-sm"></i></Link>
                      </li>
                    </ul>
                    <ul>
                      <li><Link  to="javascript:void(0)" className="userLogoicon" data-toggle="modal" data-target="#commonModalright"><span className="listprofileIcon customProfileBG2">SK</span> <span>Sivakumar</span></Link></li>
                      <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                      <li>Sep 2020</li>
                      <li className="d-none">Date created</li>
                      <li>Yes</li>
                      <li>
                        <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                      </li>
                      <li className="d-none">Physician</li>
                      <li className="d-none">Insurance</li>
                      <li>Yes</li>
                      <li>Yes</li>
                      <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                      <li className="d-none">Conditions</li>
                      <li><i className="far fa-comments fa-sm"></i></li>
                    </ul>
                    <ul>
                      <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG3">SB</span> <span>Sureshbabu</span></Link></li>
                      <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                      <li>Aug 2020</li>
                      <li className="d-none">Date created</li>
                      <li>No</li>
                      <li>
                        <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                      </li>
                      <li className="d-none">Physician</li>
                      <li className="d-none">Insurance</li>
                      <li>No</li>
                      <li>No</li>
                      <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                      <li className="d-none">Conditions</li>
                      <li><i className="far fa-comments fa-sm"></i></li>
                    </ul>
                    <ul>
                      <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG4">PB</span> <span>Prabaker</span></Link></li>
                      <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                      <li>July 2020</li>
                      <li className="d-none">Date created</li>
                      <li>No</li>
                      <li>
                        <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                      </li>
                      <li className="d-none">Physician</li>
                      <li className="d-none">Insurance</li>
                      <li>Yes</li>
                      <li>No</li>
                      <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                      <li className="d-none">Conditions</li>
                      <li><i className="far fa-comments fa-sm"></i></li>
                    </ul>
                  </div>
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
            <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#emergencyDepartment" className="borderColor9 textColor9">
              <i className="fa fa-angle-down"></i> 
            </Link>                    
          </div>
          <ul className="list-inline w-100">
            <li>
              <span className="headingHighlight customProfileBG9 text-white">Emergency Department 
                <Link  to="javascript:void(0)" className="ml-3"><i className="fa fa-pen"></i></Link>
                <Link  to="javascript:void(0)"><i className="fa fa-check-square"></i></Link>
                <Link  to="javascript:void(0)"><i className="fa fa-ellipsis-h"></i></Link>
              </span>
              <span className="tasklistCount">12 Emergency</span>
            </li>
          </ul>
        </div>
        <div className="innerContent collapse show" id="emergencyDepartment">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="topMiddlecontent">
                <ul>
                  <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG1">AK</span> <span>Anandkumar</span></Link></li>
                  <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                  <li>May 2020</li>
                  <li className="d-none">Date created</li>
                  <li>Yes</li>
                  <li>
                    <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                  </li>
                  <li className="d-none">Physician</li>
                  <li className="d-none">Insurance</li>
                  <li>No</li>
                  <li>Yes</li>
                  <li><span className="rounddashedCircle"><i className="fa fa-flag text-danger fa-sm"></i></span></li>
                  <li className="d-none">Conditions</li>
                  <li>
                    <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-comments fa-sm"></i></Link>
                  </li>
                </ul>
                <ul>
                  <li><Link  to="javascript:void(0)" className="userLogoicon" data-toggle="modal" data-target="#commonModalright"><span className="listprofileIcon customProfileBG2">SK</span> <span>Sivakumar</span></Link></li>
                  <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                  <li>Sep 2020</li>
                  <li className="d-none">Date created</li>
                  <li>Yes</li>
                  <li>
                    <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                  </li>
                  <li className="d-none">Physician</li>
                  <li className="d-none">Insurance</li>
                  <li>Yes</li>
                  <li>Yes</li>
                  <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                  <li className="d-none">Conditions</li>
                  <li><i className="far fa-comments fa-sm"></i></li>
                </ul>
                <ul>
                  <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG3">SB</span> <span>Sureshbabu</span></Link></li>
                  <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                  <li>Aug 2020</li>
                  <li className="d-none">Date created</li>
                  <li>No</li>
                  <li>
                    <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                  </li>
                  <li className="d-none">Physician</li>
                  <li className="d-none">Insurance</li>
                  <li>No</li>
                  <li>No</li>
                  <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                  <li className="d-none">Conditions</li>
                  <li><i className="far fa-comments fa-sm"></i></li>
                </ul>
                <ul>
                  <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG4">PB</span> <span>Prabaker</span></Link></li>
                  <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                  <li>July 2020</li>
                  <li className="d-none">Date created</li>
                  <li>No</li>
                  <li>
                    <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                  </li>
                  <li className="d-none">Physician</li>
                  <li className="d-none">Insurance</li>
                  <li>Yes</li>
                  <li>No</li>
                  <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                  <li className="d-none">Conditions</li>
                  <li><i className="far fa-comments fa-sm"></i></li>
                </ul>
              </div>
            </div>    
          </div>                 
        </div>
      </div>
    </div>

  );
}

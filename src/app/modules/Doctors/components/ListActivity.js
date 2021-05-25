import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { DropdownItemToggler } from "../../../../_metronic/_partials/dropdowns";
import { makeStyles } from "@material-ui/core/styles";
import { StaffDetailsTab } from "./staff-details-tab";
import { ColorPalette } from "../../../components/ColorPalette";
import { SxDropDown } from "../../../components/SxDropDown";
import { StatusDropDown } from "../../../components/StatusDropDown";
import { ServicesDropDown } from "../../../components/ServicesDropDown";
import { AvailableDropDown } from "../../../components/AvailableDropDown";
import { ServiceEdit } from "../../../components/ServiceEdit";

const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: "auto",
  },
});

export function ListActivity01(props) {
  const classes = useStyles();
  const [staffList, setStaffList] = React.useState(props.dataList);
  const [selectedIndexName, setSelectedIndexName] = React.useState(-1);
  const [selectedIndexMail, setSelectedIndexMail] = React.useState(-1);
  const [selectedIndexMobile, setSelectedIndexMobile] = React.useState(-1);
  const updatedValue = React.useRef("");

  const handleOnChange = () => setStaffList(props.dataList);
  const handleEdit = (type, index) => {
    if (type === "name") setSelectedIndexName(index);
    if (type === "mail") setSelectedIndexMail(index);
    if (type === "mobile") setSelectedIndexMobile(index);
  };
  const handleSave = (type, index) => {
    props.handleSave(updatedValue.current.value, type, index);
    handleCancel(type);
  };
  const handleCancel = (type) => {
    if (type === "name") setSelectedIndexName(-1);
    if (type === "mail") setSelectedIndexMail(-1);
    if (type === "mobile") setSelectedIndexMobile(-1);
  };

  return (
    <div className="contentArea">
      <div className="topHeadercontent d-flex">
        <div className="toggleLefticon LefticonBG11">
          <Link
            data-toggle="collapse"
            data-target="#staffmanagement"
            className="borderColor11 customProfileBG11"
          >
            <i className="fa fa-minus text-white"></i>
          </Link>
        </div>
        <ul className="list-inline w-100 row">
          <li className="col-lg-3">
            <span className="headingHighlight customProfileBG11 text-white">
              Service Provider
              <a class="ml-3">
                <i class="fa fa-pen"></i>
              </a>
            </span>
            <span className="tasklistCount">1 Staff</span>
          </li>
          <li className="col-lg-1">
            <span className="title_drag">Experience</span>
          </li>
          <li className="col-lg-1">
            <span className="title_drag">Services</span>
          </li>
          <li className="col-lg-1">
            <span className="title_drag">Status</span>
          </li>
          <li className="col-lg-1">
            <span className="title_drag">Sex</span>
          </li>
          <li className="col-lg-1">
            <span className="title_drag">Availability</span>
          </li>
          <li className="col-lg-2">
            <span className="title_drag">Email</span>
          </li>
          <li className="col-lg-2 position-relative">
            <span className="title_drag">Phone</span>
            <span className="addMultiplecolumn rounded-circle bg-grey">
              <i className="fa fa-plus fa-sm"></i>
            </span>
          </li>
        </ul>
      </div>
      <div className="innerContent collapse show" id="staffmanagement">
        <div className="row">
          <div className="col-lg-12">
            <div className="topMiddlecontent">
              {staffList.map((item, index) => {
                return (
                  <div className="d-flex drag_sel drag_selected position-relative">
                    <div className="drag_hov mh-100 my-auto">
                      <span className="cu-task-row-toggle__marker"></span>
                      <img
                        src={toAbsoluteUrl("/media/patients/drag_hover.svg")}
                        alt=""
                        className="drag_img"
                      />
                    </div>
                    <ul className="list-inline w-100 row">
                      <li className="col-lg-3 my-auto">
                        <div className="userLogoicon align-content-center">
                          <Dropdown
                            drop="down"
                            alignCenter
                            className="dropdown h-100"
                          >
                            <Dropdown.Toggle
                              as={DropdownItemToggler}
                              id="kt_quick_actions_search_toggle"
                              className="h-100"
                            >
                              <span
                                className="listprofileIcon"
                                style={{
                                  backgroundColor: item.avatar_bg_color,
                                }}
                              >
                                {item.avatar ? (
                                  <img
                                    src={toAbsoluteUrl(item.avatar)}
                                    alt=""
                                    className="mh-100 d-block rounded-circle"
                                  />
                                ) : (
                                  "AK"
                                )}
                              </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                              <ColorDropdownMenu />
                            </Dropdown.Menu>
                          </Dropdown>
                          <div className="d-flex">
                            <span>
                              {selectedIndexName === index ? (
                                <input
                                  ref={updatedValue}
                                  type="text"
                                  defaultValue={item.name}
                                  onChange={handleOnChange}
                                />
                              ) : (
                                <Link to="#" onClick={props.toggleDrawer(true)}>
                                  {item.name}
                                </Link>
                              )}
                            </span>
                            <ServiceEdit
                              type={"name"}
                              index={index}
                              clickEdit={handleEdit}
                              clickSave={handleSave}
                              clickCancel={handleCancel}
                              selectedIndex={selectedIndexName}
                            ></ServiceEdit>
                          </div>
                        </div>
                      </li>
                      <li className="col-lg-1 my-auto">
                        <div className="d-flex justify-content-center">
                          <span className="f-12 font-weight-500">
                            {item.experience_year}.{item.experience_month}{" "}
                            <span className="f-10">Years</span>
                          </span>
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
                        {selectedIndexMail === index ? (
                          <input
                            type="text"
                            defaultValue={item.official_email}
                            onChange={handleOnChange}
                          />
                        ) : (
                          <span className="d-inline-flex">
                            {item.official_email}
                          </span>
                        )}
                        <ServiceEdit
                          type={"mail"}
                          index={index}
                          clickEdit={handleEdit}
                          clickSave={handleSave}
                          clickCancel={handleCancel}
                          selectedIndex={selectedIndexMail}
                        ></ServiceEdit>
                      </li>
                      <li className="col-lg-2 my-auto d-flex justify-content-center">
                        <span>
                          {selectedIndexMobile === index ? (
                            <input
                              type="text"
                              defaultValue={item.mobile}
                              onChange={handleOnChange}
                            />
                          ) : (
                            <span className="d-inline-flex">{item.mobile}</span>
                          )}
                        </span>
                        <ServiceEdit
                          type={"mobile"}
                          index={index}
                          clickEdit={handleEdit}
                          clickSave={handleSave}
                          clickCancel={handleCancel}
                          selectedIndex={selectedIndexMobile}
                        ></ServiceEdit>
                        <div className="d-flex justify-content-end more_icon">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip
                                id="quick-search-tooltip"
                                className="tool_bg"
                              >
                                More
                              </Tooltip>
                            }
                          >
                            <div className="tab_col mt-0 mb-0">
                              <img
                                src={toAbsoluteUrl(
                                  "/media/patients/more_icon.svg"
                                )}
                                alt="more"
                              />
                            </div>
                          </OverlayTrigger>
                          <div className="avalib">
                            <div className="d-flex justify-content-end">
                              <OverlayTrigger
                                placement="top"
                                overlay={
                                  <Tooltip
                                    id="quick-search-tooltip"
                                    className="tool_bg"
                                  >
                                    Edit
                                  </Tooltip>
                                }
                              >
                                <div className="tab_col mt-0 mb-0">
                                  <img
                                    src={toAbsoluteUrl(
                                      "/media/patients/blue_edit_icon.svg"
                                    )}
                                    alt="edit"
                                    className="mai1"
                                  />
                                </div>
                              </OverlayTrigger>
                              <OverlayTrigger
                                placement="top"
                                overlay={
                                  <Tooltip
                                    id="quick-search-tooltip"
                                    className="tool_bg"
                                  >
                                    Delete
                                  </Tooltip>
                                }
                              >
                                <div className="tab_col mt-0 mb-0">
                                  <img
                                    src={toAbsoluteUrl(
                                      "/media/patients/blue_delete_icon.svg"
                                    )}
                                    alt="delete"
                                    className="mai"
                                  />
                                </div>
                              </OverlayTrigger>
                              <OverlayTrigger
                                placement="top"
                                overlay={
                                  <Tooltip
                                    id="quick-search-tooltip"
                                    className="tool_bg"
                                  >
                                    Duplicate
                                  </Tooltip>
                                }
                              >
                                <div className="tab_col mt-0 mb-0">
                                  <img
                                    src={toAbsoluteUrl(
                                      "/media/patients/blue_copy_icon.svg"
                                    )}
                                    alt="copy"
                                  />
                                </div>
                              </OverlayTrigger>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                );
              })}

              <div className="d-flex drag_sel position-relative">
                <div className="drag_hov mh-100 my-auto">
                  <span className="cu-task-row-toggle__marker"></span>
                  <img
                    src={toAbsoluteUrl("/media/patients/drag_hover.svg")}
                    alt=""
                    className="drag_img"
                  />
                </div>
                <ul className="list-inline w-100 row">
                  <li className="col-lg-3 my-auto">
                    <div className="userLogoicon align-content-center">
                      <Dropdown
                        drop="down"
                        alignCenter
                        className="dropdown h-100"
                      >
                        <Dropdown.Toggle
                          as={DropdownItemToggler}
                          id="kt_quick_actions_search_toggle"
                          className="h-100"
                        >
                          <span
                            className="listprofileIcon"
                            style={{ backgroundColor: `#2ecd6f` }}
                          >
                            <img
                              src={toAbsoluteUrl("/media/users/300_20.jpg")}
                              alt=""
                              className="mh-100 d-block rounded-circle"
                            />
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                          <ColorDropdownMenu />
                        </Dropdown.Menu>
                      </Dropdown>
                      <div className="d-flex">
                        <input
                          type="text"
                          className="edit_name"
                          name=""
                          id=""
                          placeholder="Anand"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="col-lg-1 my-auto">
                    <div className="d-flex justify-content-center">
                      <span className="f-12 font-weight-500">
                        4.5 <span className="f-10">Years</span>
                      </span>
                    </div>
                  </li>
                  <li className="col-lg-1 my-auto">
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100"
                      >
                        <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                          <div class="d-flex mt-1 mb-1 justify-content-center">
                            <span
                              className="specialInfo text-white position-relative"
                              style={{ backgroundColor: `#E6511B` }}
                            >
                              Acupunture
                              <span
                                className="dropdown_label_remove"
                                style={{ backgroundColor: `#E6511B` }}
                              >
                                <span className="dropdown_label_remove_icon">
                                  x
                                </span>
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
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100"
                      >
                        <a
                          href="#"
                          className="d-flex text-white h-100 align-items-center justify-content-center"
                        >
                          Active
                        </a>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
                        <StatusDropDown />
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="col-lg-1 activeStatuscontent male_bg text-white">
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100"
                      >
                        <a
                          href="#"
                          className="d-flex text-white h-100 align-items-center justify-content-center"
                        >
                          Male
                        </a>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav sx_hover">
                        <SxDropDown />
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="col-lg-1 my-auto">
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100"
                      >
                        <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
                          <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                            <span className="avails chat_bg">
                              <img
                                src={toAbsoluteUrl(
                                  "/media/patients/avail_chat.svg"
                                )}
                                alt=""
                                className=""
                              />
                            </span>
                            <span>Chat</span>{" "}
                            <span className="close_icons chat_bg">x</span>
                          </div>
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                        <AvailableDropDown />
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                    <span className="d-inline-flex">
                      <input
                        type="text"
                        class="edit_mail"
                        name=""
                        id=""
                        placeholder="sagayaraj@lookman.in"
                      />
                    </span>
                  </li>
                  <li className="col-lg-2 my-auto d-flex justify-content-center">
                    <span className="d-inline-flex">
                      <input
                        type="text"
                        class="edit_mobile"
                        name=""
                        id=""
                        placeholder="9876543210"
                      />
                    </span>
                    <div className="d-flex justify-content-end more_icon">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip
                            id="quick-search-tooltip"
                            className="tool_bg"
                          >
                            More
                          </Tooltip>
                        }
                      >
                        <div className="tab_col mt-0 mb-0">
                          <img
                            src={toAbsoluteUrl("/media/patients/more_icon.svg")}
                            alt="more"
                          />
                        </div>
                      </OverlayTrigger>
                      <div className="avalib">
                        <div className="d-flex justify-content-end">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip
                                id="quick-search-tooltip"
                                className="tool_bg"
                              >
                                Edit
                              </Tooltip>
                            }
                          >
                            <div className="tab_col mt-0 mb-0">
                              <img
                                src={toAbsoluteUrl(
                                  "/media/patients/blue_edit_icon.svg"
                                )}
                                alt="edit"
                                className="mai1"
                              />
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip
                                id="quick-search-tooltip"
                                className="tool_bg"
                              >
                                Delete
                              </Tooltip>
                            }
                          >
                            <div className="tab_col mt-0 mb-0">
                              <img
                                src={toAbsoluteUrl(
                                  "/media/patients/blue_delete_icon.svg"
                                )}
                                alt="delete"
                                className="mai"
                              />
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip
                                id="quick-search-tooltip"
                                className="tool_bg"
                              >
                                Duplicate
                              </Tooltip>
                            }
                          >
                            <div className="tab_col mt-0 mb-0">
                              <img
                                src={toAbsoluteUrl(
                                  "/media/patients/blue_copy_icon.svg"
                                )}
                                alt="copy"
                              />
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
                    <img
                      src={toAbsoluteUrl("/media/patients/close_icon.svg")}
                      alt="close"
                      className="removeNewtask"
                    />
                    <input
                      type="text"
                      className="newTaskinput"
                      name=""
                      id=""
                      placeholder="Doctor name"
                    />
                  </Link>
                </li>
                <li className="col-lg-4 text-right">
                  <span className="ctrlSpan">ctrl + enter to open </span>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm font-sm mx-1 saveNewtask"
                  >
                    SAVE
                  </button>
                </li>
              </ul>
            </div>
            <button type="button" className="customNewtaskBTN">
              + New Staff
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ListActivity02(props) {
  return (
    <div className="contentAreaouter">
      <div className="contentArea">
        <div className="topHeadercontent d-flex">
          <div className="toggleLefticon LefticonBG12">
            <Link
              to="javascript:void(0)"
              data-toggle="collapse"
              data-target="#staffmanagement"
              className="borderColor12 customProfileBG12"
            >
              <i className="fa fa-minus text-white"></i>
            </Link>
          </div>
          <ul className="list-inline w-100 row">
            <li className="col-lg-3">
              <span className="headingHighlight customProfileBG12 text-white">
                Staff{" "}
                <a class="ml-3">
                  <i class="fa fa-pen"></i>
                </a>
              </span>
              <span className="tasklistCount">1 Staff</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Experience</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Services</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Status</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Sex</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Availability</span>
            </li>
            <li className="col-lg-2">
              <span className="title_drag">Email</span>
            </li>
            <li className="col-lg-2 position-relative">
              <span className="title_drag">Phone</span>
              <span className="addMultiplecolumn rounded-circle bg-grey">
                <i className="fa fa-plus fa-sm"></i>
              </span>
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
                    <img
                      src={toAbsoluteUrl("/media/patients/drag_hover.svg")}
                      alt=""
                      className="drag_img"
                    />
                  </div>
                  <ul className="list-inline w-100 row">
                    <li className="col-lg-3 my-auto">
                      <div className="userLogoicon align-content-center">
                        <Dropdown
                          drop="down"
                          alignCenter
                          className="dropdown h-100"
                        >
                          <Dropdown.Toggle
                            as={DropdownItemToggler}
                            id="kt_quick_actions_search_toggle"
                            className="h-100"
                          >
                            <span
                              className="listprofileIcon"
                              style={{ backgroundColor: `#2ecd6f` }}
                            >
                              AK
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
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
                              <Tooltip
                                id="quick-search-tooltip"
                                className="tool_bg"
                              >
                                Rename
                              </Tooltip>
                            }
                          >
                            <div className="tab_col mt-0 mb-0">
                              <img
                                src={toAbsoluteUrl(
                                  "/media/patients/blue_edit_icon.svg"
                                )}
                                alt="edit"
                              />
                            </div>
                          </OverlayTrigger>
                        </Link>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <div className="d-flex justify-content-center">
                        <span className="f-12 font-weight-500">
                          4.5 <span className="f-10">Years</span>
                        </span>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <Dropdown
                        drop="down"
                        alignCenter
                        className="dropdown h-100"
                      >
                        <Dropdown.Toggle
                          as={DropdownItemToggler}
                          id="kt_quick_actions_search_toggle"
                          className="h-100"
                        >
                          <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                            <div class="d-flex mt-1 mb-1 justify-content-center">
                              <span
                                className="specialInfo text-white position-relative"
                                style={{ backgroundColor: `#FD7FAB` }}
                              >
                                Dental
                                <span
                                  className="dropdown_label_remove"
                                  style={{ backgroundColor: `#FD7FAB` }}
                                >
                                  <span className="dropdown_label_remove_icon">
                                    x
                                  </span>
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
                    <li className="col-lg-1 activeStatuscontent inactive_clr text-white">
                      <Dropdown
                        drop="down"
                        alignCenter
                        className="dropdown h-100"
                      >
                        <Dropdown.Toggle
                          as={DropdownItemToggler}
                          id="kt_quick_actions_search_toggle"
                          className="h-100"
                        >
                          <a
                            href="#"
                            className="d-flex text-white h-100 align-items-center justify-content-center"
                          >
                            Inactive
                          </a>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
                          <StatusDropDown />
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className="col-lg-1 activeStatuscontent female_bg text-white">
                      <Dropdown
                        drop="down"
                        alignCenter
                        className="dropdown h-100"
                      >
                        <Dropdown.Toggle
                          as={DropdownItemToggler}
                          id="kt_quick_actions_search_toggle"
                          className="h-100"
                        >
                          <a
                            href="#"
                            className="d-flex text-white h-100 align-items-center justify-content-center"
                          >
                            Female
                          </a>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav sx_hover">
                          <SxDropDown />
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <Dropdown
                        drop="down"
                        alignCenter
                        className="dropdown h-100"
                      >
                        <Dropdown.Toggle
                          as={DropdownItemToggler}
                          id="kt_quick_actions_search_toggle"
                          className="h-100"
                        >
                          <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
                            <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                              <span className="avails phone_bg">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/avail_phone.svg"
                                  )}
                                  alt=""
                                  className=""
                                />
                              </span>
                              <span>Phone</span>{" "}
                              <span className="close_icons phone_bg">x</span>
                            </div>
                          </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                          <AvailableDropDown />
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">
                        sagayaraj@lookman.in
                      </span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              Edit
                            </Tooltip>
                          }
                        >
                          <div className="tab_col mt-0 mb-0">
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/blue_edit_icon.svg"
                              )}
                              alt="edit"
                            />
                          </div>
                        </OverlayTrigger>
                      </Link>
                    </li>
                    <li className="col-lg-2 my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">9876543210</span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              Edit
                            </Tooltip>
                          }
                        >
                          <div
                            className="tab_col mt-0 mb-0"
                            style={{ top: "-3px" }}
                          >
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/blue_edit_icon.svg"
                              )}
                              alt="edit"
                            />
                          </div>
                        </OverlayTrigger>
                      </Link>
                      <div className="d-flex justify-content-end more_icon">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              More
                            </Tooltip>
                          }
                        >
                          <div className="tab_col mt-0 mb-0">
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/more_icon.svg"
                              )}
                              alt="more"
                            />
                          </div>
                        </OverlayTrigger>
                        <div className="avalib">
                          <div className="d-flex justify-content-end">
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Edit
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_edit_icon.svg"
                                  )}
                                  alt="edit"
                                  className="mai1"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Delete
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_delete_icon.svg"
                                  )}
                                  alt="delete"
                                  className="mai"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Duplicate
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_copy_icon.svg"
                                  )}
                                  alt="copy"
                                />
                              </div>
                            </OverlayTrigger>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <button type="button" className="customNewtaskBTN">
                + New Staff
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ListActivity03(props) {
  return (
    <div className="contentAreaouter">
      <div className="contentArea">
        <div className="topHeadercontent d-flex">
          <div className="toggleLefticon LefticonBG13">
            <Link
              to="javascript:void(0)"
              data-toggle="collapse"
              data-target="#staffmanagement"
              className="borderColor13 customProfileBG13"
            >
              <i className="fa fa-minus text-white"></i>
            </Link>
          </div>
          <ul className="list-inline w-100 row">
            <li className="col-lg-3">
              <span className="headingHighlight customProfileBG13 text-white">
                Admin{" "}
                <a class="ml-3">
                  <i class="fa fa-pen"></i>
                </a>
              </span>
              <span className="tasklistCount">1 Staff</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Experience</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Services</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Status</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Sex</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Availability</span>
            </li>
            <li className="col-lg-2">
              <span className="title_drag">Email</span>
            </li>
            <li className="col-lg-2 position-relative">
              <span className="title_drag">Phone</span>
              <span className="addMultiplecolumn rounded-circle bg-grey">
                <i className="fa fa-plus fa-sm"></i>
              </span>
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
                    <img
                      src={toAbsoluteUrl("/media/patients/drag_hover.svg")}
                      alt=""
                      className="drag_img"
                    />
                  </div>
                  <ul className="list-inline w-100 row">
                    <li className="col-lg-3 my-auto">
                      <div className="userLogoicon align-content-center">
                        <Dropdown
                          drop="down"
                          alignCenter
                          className="dropdown h-100"
                        >
                          <Dropdown.Toggle
                            as={DropdownItemToggler}
                            id="kt_quick_actions_search_toggle"
                            className="h-100"
                          >
                            <span
                              className="listprofileIcon"
                              style={{ backgroundColor: `#2ecd6f` }}
                            >
                              AK
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
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
                              <Tooltip
                                id="quick-search-tooltip"
                                className="tool_bg"
                              >
                                Rename
                              </Tooltip>
                            }
                          >
                            <div className="tab_col mt-0 mb-0">
                              <img
                                src={toAbsoluteUrl(
                                  "/media/patients/blue_edit_icon.svg"
                                )}
                                alt="edit"
                              />
                            </div>
                          </OverlayTrigger>
                        </Link>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <div className="d-flex justify-content-center">
                        <span className="f-12 font-weight-500">
                          4.5 <span className="f-10">Years</span>
                        </span>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <Dropdown
                        drop="down"
                        alignCenter
                        className="dropdown h-100"
                      >
                        <Dropdown.Toggle
                          as={DropdownItemToggler}
                          id="kt_quick_actions_search_toggle"
                          className="h-100"
                        >
                          <div class="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column pointer">
                            <div class="d-flex mt-1 mb-1 justify-content-center">
                              <span
                                className="specialInfo text-white position-relative"
                                style={{ backgroundColor: `#EA80FC` }}
                              >
                                Skin Care
                                <span
                                  className="dropdown_label_remove"
                                  style={{ backgroundColor: `#EA80FC` }}
                                >
                                  <span className="dropdown_label_remove_icon">
                                    x
                                  </span>
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
                      <Dropdown
                        drop="down"
                        alignCenter
                        className="dropdown h-100"
                      >
                        <Dropdown.Toggle
                          as={DropdownItemToggler}
                          id="kt_quick_actions_search_toggle"
                          className="h-100"
                        >
                          <a
                            href="#"
                            className="d-flex text-white h-100 align-items-center justify-content-center"
                          >
                            Active
                          </a>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav status_hover">
                          <StatusDropDown />
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className="col-lg-1 activeStatuscontent male_bg text-white">
                      <Dropdown
                        drop="down"
                        alignCenter
                        className="dropdown h-100"
                      >
                        <Dropdown.Toggle
                          as={DropdownItemToggler}
                          id="kt_quick_actions_search_toggle"
                          className="h-100"
                        >
                          <a
                            href="#"
                            className="d-flex text-white h-100 align-items-center justify-content-center"
                          >
                            Male
                          </a>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav sx_hover">
                          <SxDropDown />
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <Dropdown
                        drop="down"
                        alignCenter
                        className="dropdown h-100"
                      >
                        <Dropdown.Toggle
                          as={DropdownItemToggler}
                          id="kt_quick_actions_search_toggle"
                          className="h-100"
                        >
                          <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
                            <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                              <span className="avails video_bg">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/avail_video.svg"
                                  )}
                                  alt=""
                                  className=""
                                />
                              </span>
                              <span>Video</span>{" "}
                              <span className="close_icons video_bg">x</span>
                            </div>
                          </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav">
                          <AvailableDropDown />
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">
                        sagayaraj@lookman.in
                      </span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              Edit
                            </Tooltip>
                          }
                        >
                          <div className="tab_col mt-0 mb-0">
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/blue_edit_icon.svg"
                              )}
                              alt="edit"
                            />
                          </div>
                        </OverlayTrigger>
                      </Link>
                    </li>
                    <li className="col-lg-2 my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">9876543210</span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              Edit
                            </Tooltip>
                          }
                        >
                          <div
                            className="tab_col mt-0 mb-0"
                            style={{ top: "-3px" }}
                          >
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/blue_edit_icon.svg"
                              )}
                              alt="edit"
                            />
                          </div>
                        </OverlayTrigger>
                      </Link>
                      <div className="d-flex justify-content-end more_icon">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              More
                            </Tooltip>
                          }
                        >
                          <div className="tab_col mt-0 mb-0">
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/more_icon.svg"
                              )}
                              alt="more"
                            />
                          </div>
                        </OverlayTrigger>
                        <div className="avalib">
                          <div className="d-flex justify-content-end">
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Edit
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_edit_icon.svg"
                                  )}
                                  alt="edit"
                                  className="mai1"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Delete
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_delete_icon.svg"
                                  )}
                                  alt="delete"
                                  className="mai"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Duplicate
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_copy_icon.svg"
                                  )}
                                  alt="copy"
                                />
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
                    <img
                      src={toAbsoluteUrl("/media/patients/drag_hover.svg")}
                      alt=""
                      className="drag_img"
                    />
                  </div>
                  <ul className="list-inline w-100 row clearfix">
                    <li className="col-lg-3 my-auto">
                      <div className="userLogoicon align-content-center">
                        <Dropdown
                          drop="down"
                          alignCenter
                          className="dropdown h-100"
                        >
                          <Dropdown.Toggle
                            as={DropdownItemToggler}
                            id="kt_quick_actions_search_toggle"
                            className="h-100"
                          >
                            <span
                              className="listprofileIcon"
                              style={{ backgroundColor: `#2ecd6f` }}
                            >
                              AK
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
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
                              <Tooltip
                                id="quick-search-tooltip"
                                className="tool_bg"
                              >
                                Rename
                              </Tooltip>
                            }
                          >
                            <div className="tab_col mt-0 mb-0">
                              <img
                                src={toAbsoluteUrl(
                                  "/media/patients/blue_edit_icon.svg"
                                )}
                                alt="edit"
                              />
                            </div>
                          </OverlayTrigger>
                        </Link>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <div className="d-flex justify-content-center">
                        <span className="f-12 font-weight-500">
                          4.5 <span className="f-10">Years</span>
                        </span>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <ServicesDropDown />
                    </li>
                    <li className="col-lg-1 activeStatuscontent active_clr text-white">
                      <StatusDropDown />
                    </li>
                    <li className="col-lg-1 activeStatuscontent male_bg text-white">
                      <SxDropDown />
                    </li>
                    <li className="col-lg-1 my-auto">
                      <AvailableDropDown />
                    </li>
                    <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">
                        sagayaraj@lookman.in
                      </span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              Edit
                            </Tooltip>
                          }
                        >
                          <div className="tab_col mt-0 mb-0">
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/blue_edit_icon.svg"
                              )}
                              alt="edit"
                            />
                          </div>
                        </OverlayTrigger>
                      </Link>
                    </li>
                    <li className="col-lg-2 my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">9876543210</span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              Edit
                            </Tooltip>
                          }
                        >
                          <div
                            className="tab_col mt-0 mb-0"
                            style={{ top: "-3px" }}
                          >
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/blue_edit_icon.svg"
                              )}
                              alt="edit"
                            />
                          </div>
                        </OverlayTrigger>
                      </Link>
                      <div className="d-flex justify-content-end more_icon">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              More
                            </Tooltip>
                          }
                        >
                          <div className="tab_col mt-0 mb-0">
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/more_icon.svg"
                              )}
                              alt="more"
                            />
                          </div>
                        </OverlayTrigger>
                        <div className="avalib">
                          <div className="d-flex justify-content-end">
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Edit
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_edit_icon.svg"
                                  )}
                                  alt="edit"
                                  className="mai1"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Delete
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_delete_icon.svg"
                                  )}
                                  alt="delete"
                                  className="mai"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Duplicate
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_copy_icon.svg"
                                  )}
                                  alt="copy"
                                />
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
                    <img
                      src={toAbsoluteUrl("/media/patients/drag_hover.svg")}
                      alt=""
                      className="drag_img"
                    />
                  </div>
                  <ul className="list-inline w-100 row clearfix">
                    <li className="col-lg-3 my-auto">
                      <div className="userLogoicon align-content-center">
                        <Dropdown
                          drop="down"
                          alignCenter
                          className="dropdown h-100"
                        >
                          <Dropdown.Toggle
                            as={DropdownItemToggler}
                            id="kt_quick_actions_search_toggle"
                            className="h-100"
                          >
                            <span
                              className="listprofileIcon"
                              style={{ backgroundColor: `#2ecd6f` }}
                            >
                              AK
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
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
                              <Tooltip
                                id="quick-search-tooltip"
                                className="tool_bg"
                              >
                                Rename
                              </Tooltip>
                            }
                          >
                            <div className="tab_col mt-0 mb-0">
                              <img
                                src={toAbsoluteUrl(
                                  "/media/patients/blue_edit_icon.svg"
                                )}
                                alt="edit"
                              />
                            </div>
                          </OverlayTrigger>
                        </Link>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <div className="d-flex justify-content-center">
                        <span className="f-12 font-weight-500">
                          4.5 <span className="f-10">Years</span>
                        </span>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <ServicesDropDown />
                    </li>
                    <li className="col-lg-1 activeStatuscontent inactive_clr text-white">
                      <StatusDropDown />
                    </li>
                    <li className="col-lg-1 activeStatuscontent female_bg text-white">
                      <SxDropDown />
                    </li>
                    <li className="col-lg-1 my-auto">
                      <AvailableDropDown />
                    </li>
                    <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">
                        sagayaraj@lookman.in
                      </span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              Edit
                            </Tooltip>
                          }
                        >
                          <div className="tab_col mt-0 mb-0">
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/blue_edit_icon.svg"
                              )}
                              alt="edit"
                            />
                          </div>
                        </OverlayTrigger>
                      </Link>
                    </li>
                    <li className="col-lg-2 my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">9876543210</span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              Edit
                            </Tooltip>
                          }
                        >
                          <div
                            className="tab_col mt-0 mb-0"
                            style={{ top: "-3px" }}
                          >
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/blue_edit_icon.svg"
                              )}
                              alt="edit"
                            />
                          </div>
                        </OverlayTrigger>
                      </Link>
                      <div className="d-flex justify-content-end more_icon">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              More
                            </Tooltip>
                          }
                        >
                          <div className="tab_col mt-0 mb-0">
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/more_icon.svg"
                              )}
                              alt="more"
                            />
                          </div>
                        </OverlayTrigger>
                        <div className="avalib">
                          <div className="d-flex justify-content-end">
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Edit
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_edit_icon.svg"
                                  )}
                                  alt="edit"
                                  className="mai1"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Delete
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_delete_icon.svg"
                                  )}
                                  alt="delete"
                                  className="mai"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Duplicate
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_copy_icon.svg"
                                  )}
                                  alt="copy"
                                />
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
                    <img
                      src={toAbsoluteUrl("/media/patients/drag_hover.svg")}
                      alt=""
                      className="drag_img"
                    />
                  </div>
                  <ul className="list-inline w-100 row clearfix">
                    <li className="col-lg-3 my-auto">
                      <div className="userLogoicon align-content-center">
                        <Dropdown
                          drop="down"
                          alignCenter
                          className="dropdown h-100"
                        >
                          <Dropdown.Toggle
                            as={DropdownItemToggler}
                            id="kt_quick_actions_search_toggle"
                            className="h-100"
                          >
                            <span
                              className="listprofileIcon"
                              style={{ backgroundColor: `#2ecd6f` }}
                            >
                              AK
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
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
                              <Tooltip
                                id="quick-search-tooltip"
                                className="tool_bg"
                              >
                                Rename
                              </Tooltip>
                            }
                          >
                            <div className="tab_col mt-0 mb-0">
                              <img
                                src={toAbsoluteUrl(
                                  "/media/patients/blue_edit_icon.svg"
                                )}
                                alt="edit"
                              />
                            </div>
                          </OverlayTrigger>
                        </Link>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <div className="d-flex justify-content-center">
                        <span className="f-12 font-weight-500">
                          4.5 <span className="f-10">Years</span>
                        </span>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <ServicesDropDown />
                    </li>
                    <li className="col-lg-1 activeStatuscontent active_clr text-white">
                      <StatusDropDown />
                    </li>
                    <li className="col-lg-1 activeStatuscontent male_bg text-white">
                      <SxDropDown />
                    </li>
                    <li className="col-lg-1 my-auto">
                      <AvailableDropDown />
                    </li>
                    <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">
                        sagayaraj@lookman.in
                      </span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              Edit
                            </Tooltip>
                          }
                        >
                          <div className="tab_col mt-0 mb-0">
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/blue_edit_icon.svg"
                              )}
                              alt="edit"
                            />
                          </div>
                        </OverlayTrigger>
                      </Link>
                    </li>
                    <li className="col-lg-2 my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">9876543210</span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              Edit
                            </Tooltip>
                          }
                        >
                          <div
                            className="tab_col mt-0 mb-0"
                            style={{ top: "-3px" }}
                          >
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/blue_edit_icon.svg"
                              )}
                              alt="edit"
                            />
                          </div>
                        </OverlayTrigger>
                      </Link>
                      <div className="d-flex justify-content-end more_icon">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              More
                            </Tooltip>
                          }
                        >
                          <div className="tab_col mt-0 mb-0">
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/more_icon.svg"
                              )}
                              alt="more"
                            />
                          </div>
                        </OverlayTrigger>
                        <div className="avalib">
                          <div className="d-flex justify-content-end">
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Edit
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_edit_icon.svg"
                                  )}
                                  alt="edit"
                                  className="mai1"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Delete
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_delete_icon.svg"
                                  )}
                                  alt="delete"
                                  className="mai"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Duplicate
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_copy_icon.svg"
                                  )}
                                  alt="copy"
                                />
                              </div>
                            </OverlayTrigger>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <button type="button" className="customNewtaskBTN">
                + New Staff
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ListActivity04(props) {
  return (
    <div className="contentAreaouter">
      <div className="contentArea">
        <div className="topHeadercontent d-flex">
          <div className="toggleLefticon LefticonBG14">
            <Link
              to="javascript:void(0)"
              data-toggle="collapse"
              data-target="#staffmanagement"
              className="borderColor14 customProfileBG14"
            >
              <i className="fa fa-minus text-white"></i>
            </Link>
          </div>
          <ul className="list-inline w-100 row">
            <li className="col-lg-3">
              <span className="headingHighlight customProfileBG14 text-white">
                Receptionist{" "}
                <a class="ml-3">
                  <i class="fa fa-pen"></i>
                </a>
              </span>
              <span className="tasklistCount">1 Staff</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Experience</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Services</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Status</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Sex</span>
            </li>
            <li className="col-lg-1">
              <span className="title_drag">Availability</span>
            </li>
            <li className="col-lg-2">
              <span className="title_drag">Email</span>
            </li>
            <li className="col-lg-2 position-relative">
              <span className="title_drag">Phone</span>
              <span className="addMultiplecolumn rounded-circle bg-grey">
                <i className="fa fa-plus fa-sm"></i>
              </span>
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
                    <img
                      src={toAbsoluteUrl("/media/patients/drag_hover.svg")}
                      alt=""
                      className="drag_img"
                    />
                  </div>
                  <ul className="list-inline w-100 row">
                    <li className="col-lg-3 my-auto">
                      <div className="userLogoicon align-content-center">
                        <Dropdown
                          drop="down"
                          alignCenter
                          className="dropdown h-100"
                        >
                          <Dropdown.Toggle
                            as={DropdownItemToggler}
                            id="kt_quick_actions_search_toggle"
                            className="h-100"
                          >
                            <span
                              className="listprofileIcon"
                              style={{ backgroundColor: `#2ecd6f` }}
                            >
                              AK
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
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
                              <Tooltip
                                id="quick-search-tooltip"
                                className="tool_bg"
                              >
                                Rename
                              </Tooltip>
                            }
                          >
                            <div className="tab_col mt-0 mb-0">
                              <img
                                src={toAbsoluteUrl(
                                  "/media/patients/blue_edit_icon.svg"
                                )}
                                alt="edit"
                              />
                            </div>
                          </OverlayTrigger>
                        </Link>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <div className="d-flex justify-content-center">
                        <span className="f-12 font-weight-500">
                          4.5 <span className="f-10">Years</span>
                        </span>
                      </div>
                    </li>
                    <li className="col-lg-1">
                      <ServicesDropDown />
                    </li>
                    <li className="col-lg-1 activeStatuscontent active_clr text-white">
                      <StatusDropDown />
                    </li>
                    <li className="col-lg-1 activeStatuscontent male_bg text-white">
                      <SxDropDown />
                    </li>
                    <li className="col-lg-1">
                      <AvailableDropDown />
                    </li>
                    <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">
                        sagayaraj@lookman.in
                      </span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              Edit
                            </Tooltip>
                          }
                        >
                          <div className="tab_col mt-0 mb-0">
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/blue_edit_icon.svg"
                              )}
                              alt="edit"
                            />
                          </div>
                        </OverlayTrigger>
                      </Link>
                    </li>
                    <li className="col-lg-2 my-auto d-flex justify-content-center">
                      <span className="d-inline-flex">9876543210</span>
                      <Link to="#" className="edit_staff">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              Edit
                            </Tooltip>
                          }
                        >
                          <div
                            className="tab_col mt-0 mb-0"
                            style={{ top: "-3px" }}
                          >
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/blue_edit_icon.svg"
                              )}
                              alt="edit"
                            />
                          </div>
                        </OverlayTrigger>
                      </Link>
                      <div className="d-flex justify-content-end more_icon">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip
                              id="quick-search-tooltip"
                              className="tool_bg"
                            >
                              More
                            </Tooltip>
                          }
                        >
                          <div className="tab_col mt-0 mb-0">
                            <img
                              src={toAbsoluteUrl(
                                "/media/patients/more_icon.svg"
                              )}
                              alt="more"
                            />
                          </div>
                        </OverlayTrigger>
                        <div className="avalib">
                          <div className="d-flex justify-content-end">
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Edit
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_edit_icon.svg"
                                  )}
                                  alt="edit"
                                  className="mai1"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Delete
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_delete_icon.svg"
                                  )}
                                  alt="delete"
                                  className="mai"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip
                                  id="quick-search-tooltip"
                                  className="tool_bg"
                                >
                                  Duplicate
                                </Tooltip>
                              }
                            >
                              <div className="tab_col mt-0 mb-0">
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/blue_copy_icon.svg"
                                  )}
                                  alt="copy"
                                />
                              </div>
                            </OverlayTrigger>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <button type="button" className="customNewtaskBTN">
                + New Staff
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ColorDropdownMenu() {
  const avatarDropDown = [
    "/media/users/300_20.jpg",
    "/media/users/300_20.jpg",
    "/media/users/300_20.jpg",
    "/media/users/300_20.jpg",
    "/media/users/300_20.jpg",
    "/media/users/300_20.jpg",
    "/media/users/300_20.jpg",
    "/media/users/300_20.jpg",
    "/media/users/300_20.jpg",
    "/media/users/300_20.jpg",
    "/media/users/300_20.jpg",
    "/media/users/300_20.jpg",
  ];
  return (
    <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
        <li className="navi-item">
          <ColorPalette />
          <div className="avatar_search position-relative d-flex p-2">
            <img
              src={toAbsoluteUrl("/media/patients/drop_search.svg")}
              alt="search"
              className="drop_search"
            />
            <input type="text" placeholder="Search" className="form-control" />
            <Link to="#" className="add-avatar">
              + Add Avatar
            </Link>
          </div>
        </li>
        <li className="navi-item">
          <div className="avatar_select p-2">
            {avatarDropDown.map((item, index) => {
              return (
                <div class="d-inline-flex avatar_box p-2">
                  <input
                    type="radio"
                    id={"avatar_" + index}
                    name="avatar_img"
                    className=""
                  />
                  <label className="avatar_col" for={"avatar_" + index}>
                    <img
                      src={toAbsoluteUrl(item)}
                      alt=""
                      className="mh-100 d-block rounded-circle"
                    />
                  </label>
                </div>
              );
            })}
          </div>
        </li>
      </ul>
      {/*end::Navigation*/}
    </>
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

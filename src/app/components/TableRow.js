import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { SxDropDown } from "../components/SxDropDown";
import { StatusDropDown } from "../components/StatusDropDown";
import { ServicesDropDown } from "../components/ServicesDropDown";
import { AvailableDropDown } from "../components/AvailableDropDown";
import { ColorAndAvatarDropDown } from "../components/ColorAndAvatarDropDown";
import { ServiceEdit } from "../components/ServiceEdit";
export function TableRow(props) {
  const {
    row,
    drawer,
    addButton,
    addText,
    handleSave,
    addNew,
    handleChangeDropDown,
    pagename,
  } = props;
  const [addNewRow, setAddNewRow] = useState(false);
  const [selectedIndexName, setSelectedIndexName] = React.useState(-1);
  const [selectedIndexMail, setSelectedIndexMail] = React.useState(-1);
  const [selectedIndexMobile, setSelectedIndexMobile] = React.useState(-1);
  const updatedValue = React.useRef("");
  const newName = React.useRef("");

  const handleNew = () => {
    addNew(newName.current.value);
    setAddNewRow(false);
  };
  const handleDuplicate = (item) =>{
    props.handleDuplicate(item);
  }
  const handleEdit = (type, index) => {
    if (type === "name") setSelectedIndexName(index);
    if (type === "email") setSelectedIndexMail(index);
    if (type === "phone_no") setSelectedIndexMobile(index);
  };

  const handleSaved = (type, index) => {
    handleSave(updatedValue.current.value, type, index);
    handleCancel(type);
  };
  const handleCancel = (type) => {
    if (type === "name") setSelectedIndexName(-1);
    if (type === "email") setSelectedIndexMail(-1);
    if (type === "phone_no") setSelectedIndexMobile(-1);
  };
  const handleDelete = (item) => {
    props.handleDelete(item);
  };

  return (
    <div className="innerContent collapse show" id="staffmanagement">
      <div className="row">
        <div className="col-lg-12">
          <div className="topMiddlecontent">
            {row.map((item, i) => {
              return (
                <div
                  className="d-flex drag_sel drag_selected position-relative"
                  key={i}
                >
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
                        <ColorAndAvatarDropDown
                          item={item}
                          handleChangeDropDown={handleChangeDropDown}
                        />
                        <div className="d-flex">
                          <span>
                            {selectedIndexName === i ? (
                              <input
                                ref={updatedValue}
                                type="text"
                                style={{ width: "100px" }}
                                defaultValue={item.name}
                              />
                            ) : (
                              <Link to="#" onClick={drawer(true, item, i)}>
                                {item.name}
                              </Link>
                            )}
                          </span>
                        </div>
                        <ServiceEdit
                          type={"name"}
                          index={i}
                          value={item.name}
                          clickEdit={handleEdit}
                          clickSave={handleSaved}
                          clickCancel={handleCancel}
                          selectedIndex={selectedIndexName}
                        ></ServiceEdit>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <div className="d-flex justify-content-center">
                        <span className="f-12 font-weight-500">
                          {item.experience_year || "0"}.
                          {item.experience_month || "0"}{" "}
                          <span className="f-10">Years</span>
                        </span>
                      </div>
                    </li>
                    <li className="col-lg-1 my-auto">
                      <ServicesDropDown
                        item={item}
                        handleChangeDropDown={handleChangeDropDown}
                      />
                    </li>
                    <li className="col-lg-1 activeStatuscontent active_clr text-white">
                      <StatusDropDown
                        item={item}
                        handleChangeDropDown={handleChangeDropDown}
                      />
                    </li>
                    <li className="col-lg-1 activeStatuscontent male_bg text-white">
                      <SxDropDown
                        item={item}
                        handleChangeDropDown={handleChangeDropDown}
                      />
                    </li>
                    <li className="col-lg-1 my-auto">
                      <AvailableDropDown
                        item={item}
                        handleChangeDropDown={handleChangeDropDown}
                      />
                    </li>
                    <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                      {selectedIndexMail === i ? (
                        <input
                          type="text"
                          ref={updatedValue}
                          style={{ width: "100px" }}
                          defaultValue={item.email}
                        />
                      ) : (
                        <span className="d-inline-flex">{item.email}</span>
                      )}
                      <ServiceEdit
                        type={"email"}
                        index={i}
                        value={item.email}
                        clickEdit={handleEdit}
                        clickSave={handleSaved}
                        clickCancel={handleCancel}
                        selectedIndex={selectedIndexMail}
                      ></ServiceEdit>
                    </li>
                    <li className="col-lg-2 my-auto d-flex justify-content-center">
                      <span>
                        {selectedIndexMobile === i ? (
                          <input
                            type="text"
                            ref={updatedValue}
                            style={{ width: "100px" }}
                            defaultValue={item.phone_no}
                          />
                        ) : (
                          <span className="d-inline-flex">{item.phone_no}</span>
                        )}
                      </span>
                      <ServiceEdit
                        type={"phone_no"}
                        index={i}
                        value={item.phone_no}
                        clickEdit={handleEdit}
                        clickSave={handleSaved}
                        clickCancel={handleCancel}
                        selectedIndex={selectedIndexMobile}
                      ></ServiceEdit>

                      <>
                        <div
                          className="d-flex justify-content-end more_icon"
                          style={{ marginLeft: "200px" }}
                        >
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
                                <div
                                  className="tab_col mt-0 mb-0"
                                  onClick={drawer(true, item, i)}
                                >
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
                                <div
                                  className="tab_col mt-0 mb-0"
                                  onClick={() => handleDelete(item)}
                                >
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
                                <div className="tab_col mt-0 mb-0" onClick={() =>handleDuplicate(item)}>
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
                      </>
                    </li>
                  </ul>
                </div>
              );
            })}
            {addNewRow ? (
              <AddNewField
                {...props}
                nameRef={newName}
                handleNew={handleNew}
                setAddNewRow={setAddNewRow}
              />
            ) : (
              <div></div>
            )}
          </div>
          {addButton ? (
            <button
              type="button"
              className="customNewtaskBTN"
              onClick={() => setAddNewRow(true)}
            >
              + {addText}
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export function AddNewField(props) {
  const { setAddNewRow, nameRef, handleNew } = props;
  return (
    <ul className="newTask_1 row">
      <li className="col-lg-8">
        <Link to="#" className="userLogoicon">
          <img
            src={toAbsoluteUrl("/media/patients/close_icon.svg")}
            alt="close"
            className="removeNewtask"
            onClick={() => setAddNewRow(false)}
          />
          <input
            type="text"
            className="newTaskinput"
            name="name"
            id=""
            placeholder="Doctor name"
            ref={nameRef}
          />
        </Link>
      </li>
      <li className="col-lg-4 text-right">
        <span className="ctrlSpan">ctrl + enter to open </span>
        <button
          type="button"
          className="btn btn-primary btn-sm font-sm mx-1 saveNewtask"
          onClick={() => handleNew()}
        >
          SAVE
        </button>
      </li>
    </ul>
  );
}

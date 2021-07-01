import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { SxDropDown } from "../components/SxDropDown";
import { StatusDropDown } from "../components/StatusDropDown";
import { ServicesDropDown } from "../components/ServicesDropDown";
import { AvailableDropDown } from "../components/AvailableDropDown";
import { ColorAndAvatarDropDown } from "../components/ColorAndAvatarDropDown";
import { ServiceEdit } from "../components/ServiceEdit";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { AccordionDetails } from "@material-ui/core";
import { STypeDropdownMenu } from './STypeDropdownMenu'
import { Dropdown } from "react-bootstrap";
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { ProviderDropDown } from './ProviderDropdownMenu'
import { DevConsoleLog } from "../SiteUtill";
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
    handleDataSource,
    isDragDisabled,
    searchValue,
    field,
    handleChangeServices
  } = props;
  const [addNewRow, setAddNewRow] = useState(false);
  const [selectedIndexName, setSelectedIndexName] = React.useState(-1);
  const [selectedIndexMail, setSelectedIndexMail] = React.useState(-1);
  const [selectedIndexMobile, setSelectedIndexMobile] = React.useState(-1);
  const updatedValue = React.useRef("");
  const newName = React.useRef("");
  useEffect(()=>{
    if (updatedValue && updatedValue.current) {
    updatedValue.current.addEventListener('blur', onBlur);
    }
  })
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(row);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    handleDataSource(items);
  }
  const handleNew = () => {
    addNew({ name: newName.current.value });
    setAddNewRow(false);
  };
  const handleEdit = (type, index) => {
    if (type === "name") setSelectedIndexName(index);
    if (type === "email") setSelectedIndexMail(index);
    if (type === "phone_no") setSelectedIndexMobile(index);
  };

  const handleSaved = (type, index, id) => {
    handleSave(updatedValue.current.value, id, type,index);
    handleCancel(type);
  };
  const handleCancel = (type) => {
    if (type === "name") setSelectedIndexName(-1);
    if (type === "email") setSelectedIndexMail(-1);
    if (type === "phone_no") setSelectedIndexMobile(-1);
  };

  const onBlur=(event)=>{
    let id=event.target.id;
    let name=event.target.name;
    let newValue=event.target.value;
    let oldValue=event.target.defaultValue;
    DevConsoleLog("New onBlur-->",id);
    DevConsoleLog("New onBlur-->",name);
    DevConsoleLog("New onBlur-->",newValue);
    DevConsoleLog("New onBlur-->",oldValue);
    if(newValue!==oldValue&&newValue.length!==0){
      handleSave(newValue,id,name,0);
    }
    handleCancel(name);
    
  }

  return (
    <div className="w-100" data-parent="#accordionExample">
      <div className="row">
        <div className="col-lg-12 Ser_Pro">
          <div className="topMiddlecontent">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <ul {...provided.droppableProps} ref={provided.innerRef}>
                    {row.map((item, i) => {
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={i}
                          isDragDisabled={isDragDisabled}
                        >
                          {(provided) => (
                            <div
                              className="d-flex drag_sel"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              key={i}
                            >
                              <div className="drag_hov mh-100 my-auto cursor-move">
                                <span className="cu-task-row-toggle__marker"></span>
                                <img
                                  src={toAbsoluteUrl(
                                    "/media/patients/drag_hover.svg"
                                  )}
                                  alt=""
                                  className="drag_img"
                                />
                              </div>
                              <ul className="list-inline w-100 row">
                                {field.name &&
                                  <li className={`col-lg-${field.name.col_size} my-auto`}>
                                    <div className="userLogoicon align-content-center align-items-center">
                                      <ColorAndAvatarDropDown
                                        item={item}
                                        handleChangeDropDown={
                                          handleChangeDropDown
                                        }
                                      />
                                      <div className="">
                                        <div className="d-flex">
                                          <span  className="serv_title">
                                            {selectedIndexName === i ? (
                                              <input
                                                ref={updatedValue}
                                                autoFocus
                                                id={item.id}
                                                name="name"
                                                className="edit_name"
                                                type="text"
                                                style={{ width: "100%" }}
                                                defaultValue={item.name}
                                              />
                                            ) : (
                                                <Link
                                                  to="#"
                                                  onClick={drawer(true, item, i)}
                                                >
                                                  {item.name}
                                                </Link>
                                            )}
                                          </span>
                                          <ServiceEdit
                                            type={"name"}
                                            index={i}
                                            value={item.name}
                                            clickEdit={handleEdit}
                                            selectedIndex={selectedIndexName}
                                          ></ServiceEdit>
                                        </div>
                                        {field.duration && <div className="d-flex">
                                          <span className="DurationBg">Duration: 30 Mins</span>
                                        </div>}
                                      </div>
                                    </div>
                                  </li>}
                                  
                                {field.experience && <li className="col-lg-1 my-auto">
                                  <div className="d-flex justify-content-center">
                                    <span className="f-12 font-weight-500">
                                      {item.experience_year || "0"}.
                                      {item.experience_month || "0"}{" "}
                                      <span className="f-10">Years</span>
                                    </span>
                                  </div>
                                </li>}
                                {field.service_type && <li className="col-lg-2 activeStatuscontent">
                                  <Dropdown drop="down" aligncenter="true" className="dropdown h-100 w_130">
                                    <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                                      <span className="d-flex pointer h-100 align-items-center justify-content-center font_weight_medium">{item.service_type}</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav st_hover">
                                      <STypeDropdownMenu item={item} handleChangeDropDown={handleChangeDropDown} />
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </li>}
                                {field.services && <li className="col-lg-1 my-auto">
                                  <ServicesDropDown
                                    item={item}
                                    handleChangeServices={handleChangeServices}
                                    pagename={props.pagename} service={props.service}
                                  />
                                </li>}
                                {field.providers && <li className="col-lg-2 my-auto">
                                  <ServicesDropDown
                                    item={item}
                                    handleChangeServices={handleChangeServices}
                                    pagename={props.pagename} service={props.service}

                                  />
                                </li>}
                                {field.status && <li className="col-lg-1 p-0">
                                  <StatusDropDown
                                    item={item}
                                    handleChangeDropDown={handleChangeDropDown}
                                  />
                                </li>}
                                {field.sex && <li className="col-lg-1 p-0">
                                  <SxDropDown
                                    item={item}
                                    handleChangeDropDown={handleChangeDropDown}
                                  />
                                </li>}
                                {field.availablity && <li className="col-lg-1 my-auto">
                                  <AvailableDropDown
                                    item={item}
                                    handleChangeDropDown={handleChangeDropDown}
                                  />
                                </li>}
                                {field.email && <li className="col-lg-2 activeStatuscontent my-auto d-flex justify-content-center">
                                  {selectedIndexMail === i ? (
                                    <input
                                    ref={updatedValue}
                                    autoFocus
                                    id={item.id}
                                    name="email"
                                    className="edit_mail"
                                    type="text"
                                    style={{ width: "80%" }}
                                    defaultValue={item.email}
                                  />
                                    
                                  ) : (
                                    <span className={item.email&&`limt-col`}>
                                      {item.email}
                                    </span>
                                  )}
                                  <ServiceEdit
                                    type={"email"}
                                    index={i}
                                    value={item.email}
                                    clickEdit={handleEdit}
                                    selectedIndex={selectedIndexMail}
                                  ></ServiceEdit>
                                  
                                </li>}
                                {field.phone && <li className="col-lg-2 my-auto d-flex justify-content-center">
                                  <span>
                                    {selectedIndexMobile === i ? (
                                      <input
                                      ref={updatedValue}
                                      autoFocus
                                      id={item.id}
                                      name="phone_no"
                                      className="edit_mobile"
                                      type="text"
                                      style={{ width: "100%" }}
                                      defaultValue={item.phone_no}
                                    />
                                    ) : (
                                      <span className="limt-col">
                                        {item.phone_no}
                                      </span>
                                    )}
                                  </span>
                                  <ServiceEdit
                                    type={"phone_no"}
                                    index={i}
                                    value={item.phone_no}
                                    clickEdit={handleEdit}
                                    selectedIndex={selectedIndexMobile}
                                  ></ServiceEdit>
                                  <MoreOption {...props} item={item} index={i} />
                                </li>}
                                {field.price && <li className="col-lg-3 my-auto d-flex justify-content-center">


                                  <div className="d-flex border-left pl-8">
                                    <span className="d-flex align-items-center font-size-13">Cost</span>
                                    <Link to="#" className="pay_amt">Rs. {item.cost}</Link>
                                  </div>



                                  <>
                                    <MoreOption {...props} item={item} index={i} />

                                  </>
                                </li>}
                              </ul>
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
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
          {addButton ? <button type="button" className="customNewtaskBTN" onClick={() => setAddNewRow(true)}>+ {addText}</button> : <div></div>}
        </div>
      </div>
    </div>
  );
}

export function AddNewField(props) {
  const { setAddNewRow, nameRef, handleNew } = props;
  return (
    <ul className="newTask_1 row w-100">
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

export function MoreOption(props) {
  return (
    <div className="d-flex justify-content-end more_icon">
      <Dropdown drop="down"  aligncenter="true" className="dropdown h-100">
        <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="quick-search-tooltip" className="tool_bg">More</Tooltip>
            }>
            <div className="tab_col mt-0 mb-0">
              <img src={toAbsoluteUrl("/media/patients/more_icon.svg")} alt="more" />
            </div>
          </OverlayTrigger>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu p-0">
          <MoreDropdownMenu {...props} />
        </Dropdown.Menu>
      </Dropdown>
    </div>

  );
}


export function MoreDropdownMenu(props) {
  const { drawer, handleDelete, handleDuplicate, index, item } = props;
  return <>
    {/*begin::Navigation*/}
    <ul className="navi navi-hover more_hover">
      <li className="navi-item" onClick={drawer(true, item, index)}>
        <a href="#" className="navi-link">
          <div className="more_imgs mt-0 mb-0">
            <img src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")} alt="Edit" className="mai1" />
          </div>
          <span className="navi-text">Edit</span>
        </a>
      </li>
      <li className="navi-item" onClick={() => handleDelete(item)}>
        <a href="#" className="navi-link">
          <div className="more_imgs mt-0 mb-0">
            <img src={toAbsoluteUrl("/media/patients/blue_delete_icon.svg")} alt="Delete" className="mai" />
          </div>
          <span className="navi-text">Delete</span>
        </a>
      </li>
      <li className="navi-item" onClick={() => handleDuplicate(item)} >
        <a href="#" className="navi-link">
          <div className="more_imgs mt-0 mb-0">
            <img src={toAbsoluteUrl("/media/patients/blue_copy_icon.svg")} alt="Copy" className="" />
          </div>
          <span className="navi-text">Copy</span>
        </a>
      </li>
    </ul>
  </>
}
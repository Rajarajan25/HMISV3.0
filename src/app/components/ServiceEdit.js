import React from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { DevConsoleLog } from "../SiteUtill";

export function ServiceEdit(props) {
  const { value, type, index, clickEdit, clickSave, clickCancel, selectedIndex } = props;
  const handleClick = (type, handleType, index) => {
    if (handleType === "save") props.clickSave(type, index);
    if (handleType === "cancel") props.clickCancel(type, index);
    if (handleType === "edit") props.clickEdit(type, index);
  };

  // console.log(props);
  return (
    <div className="d-flex">
      {selectedIndex === index ? (<div className="row">
        <div className="edit_staff">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="quick-search-tooltip" className="tool_bg">
                  Save
              </Tooltip>
              }
            >
              <div className="tab_col mt-0 mb-0">
                <img
                  src={toAbsoluteUrl("/media/patients/floppy-disk.svg")}
                  alt="save"
                  onClick={() => handleClick(type, "save", index)}
                />
              </div>
            </OverlayTrigger>
            
        </div>
        <div className="edit_staff">
        <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="quick-search-tooltip" className="tool_bg">
            Cancel
        </Tooltip>
        }
      >
        <div className="tab_col mt-0 mb-0 tab-col-left">
          <img
            src={toAbsoluteUrl("/media/patients/close_icon.svg")}
            alt="Close"
            onClick={() => handleClick(type, "cancel", -1)}
          />
        </div>
      </OverlayTrigger>
      </div>
      </div>
      ) : (
        value ? (<div className="edit_staff">
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="quick-search-tooltip" className="tool_bg">
                Edit
              </Tooltip>
            }
          >
            <div
              className="tab_col mt-0 mb-0"
              onClick={() => handleClick(type, "edit", index)}
            >
              <img
                src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")}
                alt="edit"
              />
            </div>
          </OverlayTrigger>
        </div>) : (<div
          className="pointer mt-0 mb-0"
          onClick={() => handleClick(type, "edit", index)}
        >
          <img
            src={toAbsoluteUrl("/media/patients/add-advanced.svg")}
            alt="add"
          />
        </div>)
      )}
    </div>
  );
}

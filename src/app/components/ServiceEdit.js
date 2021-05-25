import React from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

export function ServiceEdit(props) {
  const handleClick = (type, handleType, index) => {
    if (handleType === "save") props.clickSave(type, index);
    if (handleType === "cancel") props.clickCancel(type, index);
    if (handleType === "edit") props.clickEdit(type, index);
  };

  // console.log(props);
  return (
    <span>
      {props.selectedIndex === props.index ? (
        <Link to="#" className="edit_staff">
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
                alt="edit"
                onClick={() => handleClick(props.type, "save", props.index)}
              />
            </div>
          </OverlayTrigger>
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
                onClick={() => handleClick(props.type, "cancel", -1)}
              />
            </div>
          </OverlayTrigger>
        </Link>
      ) : (
        <Link to="#" className="edit_staff">
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
              onClick={() => handleClick(props.type, "edit", props.index)}
            >
              <img
                src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")}
                alt="edit"
              />
            </div>
          </OverlayTrigger>
        </Link>
      )}
    </span>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

export function ServiceEdit(props) {
  const { value, type, index, clickEdit, selectedIndex } = props;
  return (
    <div className="d-flex">
      {selectedIndex === index ? (<div></div>) : (
        value ? (
        <div className="edit_staff">
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
              onClick={() => clickEdit(type, index)}
            >
              <img
                src={toAbsoluteUrl("/media/patients/blue_edit_icon.svg")}
                alt="edit"
              />
            </div>
          </OverlayTrigger>
        </div>) : (<div
          className="pointer mt-0 mb-0"
          onClick={() => clickEdit(type,index)}
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

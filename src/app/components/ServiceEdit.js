import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import EmptyColumn from "./EmptyColumn";
import PropTypes from 'prop-types';

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
            onClick={() => clickEdit(type, index)}
          >
            {/* <img
            src={toAbsoluteUrl("/media/patients/add-advanced.svg")}
            alt="add"
          /> */}
            <EmptyColumn />
          </div>)
      )}
    </div>
  );
}

ServiceEdit.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  clickEdit: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired
}
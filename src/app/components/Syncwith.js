import React from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
export function Syncwith(props) {
    return (<div className="form-group m-0">
    <div className="col-12">
      <label class="form-label d-block">Sync with</label>
    </div>
    <div className="d-flex">
      <div className="col-12">
        <div className="pre_social d-flex">
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="quick-search-tooltip" style={{ zIndex: `1301` }} className="tool_bg">Google</Tooltip>
            }>
            <Link to="#" className="social_col">
              <img src={toAbsoluteUrl("/media/patients/google.svg")} alt="Google" className="mt-0" />
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="quick-search-tooltip" style={{ zIndex: `1301` }} className="tool_bg">Microsoft</Tooltip>
            }>
            <Link to="#" className="social_col">
              <img src={toAbsoluteUrl("/media/patients/microsoft.svg")} alt="Microsoft" className="mt-0" />
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="quick-search-tooltip" style={{ zIndex: `1301` }} className="tool_bg">Apple</Tooltip>
            }>
            <Link to="#" className="social_col">
              <img src={toAbsoluteUrl("/media/patients/apple.svg")} alt="Apple" className="mt-0" />
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="quick-search-tooltip" style={{ zIndex: `1301` }} className="tool_bg">Calendar</Tooltip>
            }>
            <Link to="#" className="social_col">
              <img src={toAbsoluteUrl("/media/patients/google-calendar.svg")} alt="Google Calendar" className="mt-0" />
            </Link>
          </OverlayTrigger>
        </div>
      </div>
    </div>
  </div>)
}
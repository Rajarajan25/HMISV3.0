import React from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from 'prop-types';

const SynwithOption = [
  { name: "Google", svg: "/media/patients/google.svg" },
  { name: "Microsoft", svg: "/media/patients/microsoft.svg" },
  { name: "Apple", svg: "/media/patients/apple.svg" },
  { name: "Calendar", svg: "/media/patients/google-calendar.svg" }
];

export function Syncwith(props) {
 const {providerEnable} = props;
  return (
    <>
    {providerEnable ? <div className="form-group m-0">
    <div className="col-12">
      <label className="form-label d-block">Sync with</label>
    </div>
    <div className="d-flex">
      <div className="col-12">
        <div className="pre_social d-flex">
          {SynwithOption.map((item, index) => {
            return (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="quick-search-tooltip" className="tool_bg">{item.name}</Tooltip>
                } key={index}>
                <Link to="#" className="social_col">
                  <img src={toAbsoluteUrl(item.svg)} alt={item.name} className="mt-0" />
                </Link>
              </OverlayTrigger>
            )
          })}
        </div>
      </div>
    </div>
  </div>:null}
  </>
  )
  
}

Syncwith.propType={
  providerEnable:PropTypes.bool.isRequired
}
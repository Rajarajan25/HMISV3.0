import React from 'react';
import {Image, Row, Col} from "react-bootstrap";
import { toAbsoluteUrl } from "../../../../../../_metronic/_helpers";

export default function Stepper3() {
  return (
    <div className="d-flex stepperWidth justify-content-center">
      <span className="defaultIcon d-flex justify-content-center m-auto">
        <Image className="h-auto d-flex default" src={toAbsoluteUrl("/media/auth-screen/theme_color_default.svg")} alt="" />
      </span>
      <div className="d-none stepperContnet">
        <span className="stepperIcon d-flex rounded-circle justify-content-center mr-3">
          <Image className="h-auto d-flex active" src={toAbsoluteUrl("/media/auth-screen/theme_color.svg")} alt="" />
          <Image className="h-auto d-flex stepCompleted" src={toAbsoluteUrl("/media/auth-screen/theme_color_completed.svg")} alt="" />
        </span>
        <div className="d-flex flex-column text-left stepperRight my-auto">
          <span className="stepperSMtext">
          Step: <text>3</text>/5 
          </span>
          <span className="stepperName">
            Our Business Type
          </span>
        </div>
      </div>        
    </div>
  );
}

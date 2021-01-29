import React from 'react';
import {Image, Row, Col} from "react-bootstrap";
import { toAbsoluteUrl } from "../../../../../../_metronic/_helpers";

export default function Stepper1() {
  return (
    <div className="d-flex stepperWidth">
      <span className="stepperIcon d-flex rounded-circle justify-content-center mr-3">
        <Image className="h-auto d-flex active" src={toAbsoluteUrl("/media/auth-screen/business_details.svg")} alt="" />
        <Image className="h-auto d-flex stepCompleted" src={toAbsoluteUrl("/media/auth-screen/business_details_completed.svg")} alt="" />
      </span>
      <div className="d-flex flex-column text-left stepperRight my-auto">
        <span className="stepperSMtext">
        Step: <text>1</text>/5 
        </span>
        <span className="stepperName">
          Business Profile
        </span>
      </div>        
    </div>
  );
}

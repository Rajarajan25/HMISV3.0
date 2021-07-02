import { Dropdown } from "react-bootstrap";
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import React from 'react';
import { AvailabilityModel } from "../models/AvailabilityModel";
import { OncallModel } from "../models/OncallModel";
import { VideoData } from "../models/VideoData";
import { InpersionModel } from "../models/InpersionModel";
import { TimingsModel } from "../models/TimingsModel";
import PropTypes from 'prop-types';

const Type = {
  INPERSON: "Inperson",
  PHONE: "Oncall",
  VIDEO: "Video",
  CHAT: "Chat"
};
Object.freeze(Type);
export function StaffAvailablity(props) {
  const { handleChangeDropDown, item } = props;

  const handleDelete = (type) => {
    let ava = { ...AvailabilityModel };
    let timings = item.staff_timings || [];
    if (timings[0].timing_id.availability_id) {
      ava = { ...timings[0].timing_id.availability_id };
    }
    switch (type) {
      case Type.INPERSON:
        ava.inperson = { ...InpersionModel };
        break;
      case Type.PHONE:
        ava.oncall = { ...OncallModel };
        break;
      case Type.VIDEO:
        ava.video = [];
        break;
      case Type.CHAT:
        ava.video = [];
        break;
      default:
        break
    }
    timings[0].timing_id.availability_id = { ...ava };
    handleChangeDropDown(timings, item.id, "staff_timings");
  };


  const selectOpt = [];
  if (item.staff_timings && item.staff_timings.length !== 0) {
    const { availability_id } = item.staff_timings[0].timing_id;
    if (availability_id) {
      if (availability_id.inperson) {
        const { buinsess_address, client_address } = availability_id.inperson;
        if (buinsess_address || client_address) {
          selectOpt.push(<InpersonUI />);
        }
      }
      if (availability_id.oncall) {
        const { client, staff } = availability_id.oncall;
        if (client || staff) {
          selectOpt.push(<PhoneUI />);
        }
      }

      const video = availability_id.video && availability_id.video.length !== 0;
      if (video) {
        selectOpt.push(<VideoUI />);
      }
    }
  }

  return (<>
    {selectOpt.map((item, i) => {
      return (
        <div className="d-flex" key={i}>
          {item}
        </div>
      );
    })}
  </>)
}


export function InpersonUI(props) {
  return (
    <span className="avails visit_bg">
      <img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="In Person" className="m-0" />
    </span>
  )
}

export function PhoneUI(props) {
  return (
    <span className="avails phone_bg">
      <img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="Phone" className="m-0" />
    </span>
  )
}

export function VideoUI(props) {
  return (
    <span className="avails video_bg">
      <img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="Video" className="m-0" />
    </span>
  )
}
export function ChatUI(props) {
  return (
    <span className="avails chat_bg">
      <img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="Chat" className="m-0" />
    </span>
  )
}

StaffAvailablity.propTypes={
  handleChangeDropDown:PropTypes.func.isRequired,
  item:PropTypes.object.isRequired
}


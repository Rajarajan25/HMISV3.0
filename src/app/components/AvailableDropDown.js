import { Dropdown } from "react-bootstrap";
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import React from 'react';
import { AvailabilityModel } from "../models/AvailabilityModel";
import { OncallModel } from "../models/OncallModel";
import { VideoData } from "../models/VideoData";
import { InpersionModel } from "../models/InpersionModel";
import { TimingsModel } from "../models/TimingsModel";
import { TimingModel } from "../models/TimingModel";
export function AvailableDropDown(props) {
  const { handleChangeDropDown, item } = props;
  const selectOpt = [];
  if (item.staff_timings && item.staff_timings.length != 0) {
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

      const video = availability_id.VideoData && availability_id.VideoData.length != 0;
      if (video) {
        selectOpt.push(<VideoUI />);
      }
    }
  }

  if (selectOpt.length === 0) {
    selectOpt.push(<span>Select availability</span>);
  }
  return (<Dropdown drop="down" aligncenter="true" className="dropdown h-100">
    <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle2" className="h-100">
      <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
          {selectOpt.map((item, index) => {
            return (
              <div key={index} className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
                {item}
              </div>
            );
          })}
      </div>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav">
      <AvailableDropdownMenu handleChangeDropDown={handleChangeDropDown} item={item} />
    </Dropdown.Menu>
  </Dropdown>)
}

export function AvailableDropdownMenu(props) {
  const { handleChangeDropDown, item } = props;
  const avaiableArray = [
    //{ type: "Chat", icon: "/media/patients/avail_chat.svg", color_bg: "chat_bg" },
    { type: "Video", icon: "/media/patients/avail_video.svg", color_bg: "video_bg" },
    { type: "Phone", icon: "/media/patients/avail_phone.svg", color_bg: "phone_bg" },
    { type: "Inperson", icon: "/media/patients/avail_visit.svg", color_bg: "visit_bg" }];
  const handleDropDown = (type) => {
    let ava = { ...AvailabilityModel };
    let timings = item.staff_timings||[];
    if(timings.length===0||!timings[0].timing_id) timings=[TimingsModel];
    if(timings[0].timing_id.availability_id){
      ava={...timings[0].timing_id.availability_id};
    }

    if (type === "Chat") {
      ava.video = [{ ...VideoData, video_type: "Zoom" }];
    } else if (type === "Video") {
      ava.video = [{ ...VideoData, video_type: "Zoom" }];
    } else if (type === "Phone") {
      ava.oncall = { ...OncallModel, client: true };
    } else if (type === "Inperson") {
      ava.inperson = { ...InpersionModel, buinsess_address: true };
    }
    
    timings[0].timing_id.availability_id = {...ava};
    
    handleChangeDropDown(timings, item.id, "staff_timings")
  };
  return <>
    {/*begin::Navigation*/}
    <ul className="navi navi-hover">
      {avaiableArray.map((avItem, index) => {
        return (
          <li className="navi-item" key={index}>
            <a href="#" className="navi-link">
              <span className={`avails ${avItem.color_bg}`}><img src={toAbsoluteUrl(avItem.icon)} alt="" className="mt-0" /></span>
              <span className="navi-text" onClick={() => handleDropDown(avItem.type)}>{avItem.type}</span>
            </a>
          </li>
        );
      })}
    </ul>
    {/*end::Navigation*/}
  </>
}
export function InpersonUI(props) {
  return (
    <>
      <span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="" /></span>
      <span>Inperson</span> <span className="close_icons visit_bg">x</span>
    </>
  )
}

export function PhoneUI(props) {
  return (
    <>
      <span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="" /></span>
      <span>Phone</span> <span className="close_icons phone_bg">x</span>
    </>
  )
}


export function VideoUI(props) {
  return (
    <>
      <span className="avails video_bg"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="" /></span>
      <span>Video</span> <span className="close_icons video_bg">x</span>
    </>
  )
}

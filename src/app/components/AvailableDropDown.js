import { Dropdown } from "react-bootstrap";
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import React from "react";
import { AvailabilityModel } from "../models/AvailabilityModel";
import { OncallModel } from "../models/OncallModel";
import { VideoData } from "../models/VideoData";
import { InpersionModel } from "../models/InpersionModel";
import { TimingsModel } from "../models/TimingsModel";
const Type = {
  INPERSON: "Inperson",
  PHONE: "Oncall",
  VIDEO: "Video",
  CHAT: "Chat",
};
Object.freeze(Type);
export function AvailableDropDown(props) {
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
        break;
    }
    timings[0].timing_id.availability_id = { ...ava };
    handleChangeDropDown(timings, item.id, "staff_timings");
  };

  const selectOpt = [];
  if (item.staff_timings && item.staff_timings.length != 0) {
    const { availability_id } = item.staff_timings[0].timing_id;
    //console.log(availability_id);
    if (availability_id) {
      if (availability_id.inperson) {
        const { buinsess_address, client_address } = availability_id.inperson;
        if (buinsess_address || client_address) {
          selectOpt.push(<InpersonUI deleteUI={handleDelete} />);
        }
      }
      if (availability_id.oncall) {
        const { client, staff } = availability_id.oncall;
        if (client || staff) {
          selectOpt.push(<PhoneUI deleteUI={handleDelete} />);
        }
      }

      const video = availability_id.video && availability_id.video.length != 0;
      if (video) {
        selectOpt.push(<VideoUI deleteUI={handleDelete} />);
      }
    }
  }

  if (selectOpt.length === 0) {
    selectOpt.push(<span>Select availability</span>);
  }

  return (
    <Dropdown drop="down" aligncenter="true" className="dropdown h-100">
      <Dropdown.Toggle
        as={DropdownItemToggler}
        id="kt_quick_actions_search_toggle2"
        className="h-100"
      >
        <div className="d-flex flex-wrap h-100 justify-content-center flex-column flex-column avail_wid">
          {/* <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid"> */}
          {selectOpt.map((item, i) => {
            return <div key={i}> {item}</div>;
          })}
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav">
        <AvailableDropdownMenu
          handleChangeDropDown={handleChangeDropDown}
          item={item}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function AvailableDropdownMenu(props) {
  const { handleChangeDropDown, item } = props;
  const avaiableArray = [
    {
      type: Type.INPERSON,
      icon: "/media/patients/avail_visit.svg",
      color_bg: "visit_bg",
    },
    {
      type: Type.PHONE,
      icon: "/media/patients/avail_phone.svg",
      color_bg: "phone_bg",
    },
    {
      type: Type.VIDEO,
      icon: "/media/patients/avail_video.svg",
      color_bg: "video_bg",
    },
    //{ type: Type.CHAT, icon: "/media/patients/avail_chat.svg", color_bg: "chat_bg" },
  ];
  const handleDropDown = (type) => {
    let ava = { ...AvailabilityModel };
    let timings = JSON.parse(JSON.stringify(item.staff_timings)) || [];
    if (timings.length === 0 || !timings[0].timing_id) timings = [TimingsModel];
    if (timings[0].timing_id.availability_id) {
      ava = { ...timings[0].timing_id.availability_id };
    }

    switch (type) {
      case Type.INPERSON:
        ava.inperson = { ...InpersionModel, buinsess_address: true };
        break;
      case Type.PHONE:
        ava.oncall = { ...OncallModel, client: true };
        break;
      case Type.VIDEO:
        ava.video = [{ ...VideoData, video_type: "Zoom" }];
        break;
      case Type.CHAT:
        ava.video = [];
        break;
      default:
        break;
    }
    timings[0].timing_id.availability_id = { ...ava };
    let currentVal = {
      video: timings[0].timing_id.availability_id.video,
      oncall: timings[0].timing_id.availability_id.oncall,
      inperson: timings[0].timing_id.availability_id.inperson,
    };
    let perviousVal = {
      video: item.staff_timings[0].timing_id.availability_id.video,
      oncall: item.staff_timings[0].timing_id.availability_id.oncall,
      inperson: item.staff_timings[0].timing_id.availability_id.inperson,
    };
    if (currentVal.video.length !== perviousVal.video.length) {
      handleChangeDropDown(timings, item.id, "staff_timings");
    } else if (
      currentVal.oncall.client !== perviousVal.oncall.client ||
      currentVal.oncall.staff !== perviousVal.oncall.staff
    ) {
      handleChangeDropDown(timings, item.id, "staff_timings");
    } else if (
      currentVal.inperson.buinsess_address !==
        perviousVal.inperson.buinsess_address ||
      currentVal.inperson.client_address !== perviousVal.inperson.client_address
    ) {
      handleChangeDropDown(timings, item.id, "staff_timings");
    }
  };
  return (
    <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
        {avaiableArray.map((avItem, index) => {
          return (
            <li className="navi-item" key={index}>
              <a href="#" className="navi-link">
                <span className={`avails ${avItem.color_bg}`}>
                  <img
                    src={toAbsoluteUrl(avItem.icon)}
                    alt=""
                    className="mt-0"
                  />
                </span>
                <span
                  className="navi-text"
                  onClick={() => handleDropDown(avItem.type)}
                >
                  {avItem.type}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      {/*end::Navigation*/}
    </>
  );
}

export function InpersonUI(props) {
  const { deleteUI } = props;
  return (
    <>
      <div className="d-flex mt-1 mb-1 pl-5 py-1 pr-1 avail_hover">
        <span className="avails visit_bg">
          <img
            src={toAbsoluteUrl("/media/patients/avail_visit.svg")}
            alt=""
            className=""
          />
        </span>
        <span>Inperson</span>{" "}
        <span
          className="close_icons visit_bg"
          onClick={() => deleteUI(Type.INPERSON)}
        >
          x
        </span>
      </div>
    </>
  );
}

export function PhoneUI(props) {
  const { deleteUI } = props;
  return (
    <>
      <div className="d-flex mt-1 mb-1 pl-5 py-1 pr-1 avail_hover">
        <span className="avails phone_bg">
          <img
            src={toAbsoluteUrl("/media/patients/avail_phone.svg")}
            alt=""
            className=""
          />
        </span>
        <span>Phone</span>{" "}
        <span
          className="close_icons phone_bg"
          onClick={() => deleteUI(Type.PHONE)}
        >
          x
        </span>
      </div>
    </>
  );
}

export function VideoUI(props) {
  const { deleteUI } = props;
  return (
    <>
      <div className="d-flex mt-1 mb-1 pl-5 py-1 pr-1 avail_hover">
        <span className="avails video_bg">
          <img
            src={toAbsoluteUrl("/media/patients/avail_video.svg")}
            alt=""
            className=""
          />
        </span>
        <span>Video</span>{" "}
        <span
          className="close_icons video_bg"
          onClick={() => deleteUI(Type.VIDEO)}
        >
          x
        </span>
      </div>
    </>
  );
}
export function ChatUI(props) {
  const { deleteUI } = props;
  return (
    <>
      <div className="d-flex mt-1 mb-1 pl-5 py-1 pr-1 avail_hover">
        <span className="avails chat_bg">
          <img
            src={toAbsoluteUrl("/media/patients/avail_chat.svg")}
            alt=""
            className=""
          />
        </span>
        <span>Chat</span>{" "}
        <span
          className="close_icons chat_bg"
          onClick={() => deleteUI(Type.CHAT)}
        >
          x
        </span>
      </div>
    </>
  );
}

import { Dropdown } from "react-bootstrap";
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import React from 'react';
export function AvailableDropDown(props) {
  return(<Dropdown drop="down" aligncenter="true"  className="dropdown h-100">
    <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle2" className="h-100">
      <div className="d-flex flex-wrap h-100 align-items-center justify-content-center flex-column flex-column avail_wid">
        <div className="d-flex mt-1 mb-1 p-1 justify-content-center avail_hover">
          <span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="" /></span>
          <span>{props.item.availability||"Select availability"}</span> <span className="close_icons chat_bg">x</span>
        </div>
      </div>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu p-0 mt-1 w-100 drop_nav">
      <AvailableDropdownMenu handleChangeDropDown={props.handleChangeDropDown} item={props.item}/>
    </Dropdown.Menu>
  </Dropdown>)
}

export function AvailableDropdownMenu(props) {
  const {handleChangeDropDown, item} = props;
  return <>
    {/*begin::Navigation*/}
    <ul className="navi navi-hover">
      <li className="navi-item">
        <a href="#" className="navi-link">
          <span className="avails chat_bg"><img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="" className="mt-0" /></span>
          <span className="navi-text" onClick={()=>handleChangeDropDown("Chat", item.id, "availability")}>Chat</span>
        </a>
      </li>
      <li className="navi-item">
        <a href="#" className="navi-link">
          <span className="avails video_bg"><img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="" className="mt-0" /></span>
          <span className="navi-text" onClick={()=>handleChangeDropDown("Video", item.id, "availability")}>Video</span>
        </a>
      </li>
      <li className="navi-item">
        <a href="#" className="navi-link">
          <span className="avails phone_bg"><img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="" className="mt-0" /></span>
          <span className="navi-text" onClick={()=>handleChangeDropDown("Phone", item.id, "availability")}>Phone</span>
        </a>
      </li>
      <li className="navi-item">
        <a href="#" className="navi-link">
          <span className="avails visit_bg"><img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="mt-0" /></span>
          <span className="navi-text" onClick={()=>handleChangeDropDown("Inperson", item.id, "availability")}>Inperson</span>
        </a>
      </li>
    </ul>
    {/*end::Navigation*/}
  </>
}
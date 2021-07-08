import React from 'react';
import { Dropdown } from "react-bootstrap";
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

const Available = [
    {
        id: 1,
        type: "In Person",
        name: "inPerson",
        url: toAbsoluteUrl("/media/patients/avail_visit.svg"),
        dropDown: [{
            id: 4,
            check: "My Business Address ",
        }, {
            id: 45,
            check: "Client Address At Booking"
        }]

    },
    {
        id: 2,
        type: "In Call",
        name: "inCall",
        url: toAbsoluteUrl("/media/patients/avail_phone.svg"),
        dropDown: [{
            id: 54,
            check: "Client will call you",
        }, {
            id: 55,
            check: "You will call the client"
        }]
    },
]
const Video = [
    {
        vid: 3,
        vurl: toAbsoluteUrl("/media/patients/avail_chat.svg"),
        vtype: "Chat",
        name: "chat"
    },
    {
        vid: 6,
        vurl: toAbsoluteUrl("/media/patients/zoom_icon.png"),
        vtype: "Zoom",
        name: "zoom"
    },
    {
        vid: 7,
        vtype: "Webex",
        name: "webex1",
        vurl: toAbsoluteUrl("/media/patients/webex_icon.png")
    },
    {
        vid: 8,
        vtype: "Skype",
        name: "skype",
        vurl: toAbsoluteUrl("/media/patients/skype_icon.png")
    },
    {
        vid: 9,
        vtype: "Goto Meeting",
        name: "gotoMeeting",
        vurl: toAbsoluteUrl("/media/patients/goto_icon.png")
    },
    {
        vid: 10,
        vtype: "Webex",
        name: "webex",
        vurl: toAbsoluteUrl("/media/patients/webex1_icon.png")
    },
    {
        vid: 11,
        vtype: "Google Meet",
        name: "googleMeet",
        vurl: toAbsoluteUrl("/media/patients/google-meet_icon.png")
    },
]

export default function AvailabilityNew() {
    const [vTypeSelcted, setVTypeSelected] = React.useState({
        zoom: false,
        webex1: false,
        skype: false,
        gotoMeeting: false,
        webex: false,
        googleMeet: false,
        chat: false,
        inPerson: false,
        inCall: false
    });

    const hanldeSelectTypeClick = (item) => {
        setVTypeSelected({ ...vTypeSelcted, [item.name]: !vTypeSelcted[item.name] })
    }

    return (
        <div className="clearfix staff_first">
            <div className="event_detail timingavail">
                <label class="staff_title_text mb-3">Availability</label>

                <div className="clearfix">
                    <div className="device_avail">
                        {Available.map((item) => {
                            return (
                                <div className="d-inline-flex" key={item.id} onClick={() => hanldeSelectTypeClick(item)}>

                                    <Dropdown drop="down" alignCenter className="dropdown h-100">
                                        <Dropdown.Toggle
                                            as={DropdownItemToggler}
                                            id="kt_quick_actions_search_toggle"
                                            className="h-100"
                                        >
                                            <label className={vTypeSelcted[item.name] ? "d-flex vid_bg active" : "d-flex vid_bg"} >
                                                <span className="avails visit_bg">
                                                    <img
                                                        src={item.url}
                                                        alt=""

                                                    />
                                                </span>
                                                <span>{item.type} </span>
                                            </label>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav avail-list">
                                            <DropdownMenu dropDown={item.dropDown} type={item.type} />
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </div>

                            )
                        })}
                        {Video.map((item) => {
                            return (
                                <div className="d-inline-flex" key={item.vid} onClick={() => hanldeSelectTypeClick(item)}>
                                    <label className={vTypeSelcted[item.name] ? "d-flex vid_bg active" : "d-flex vid_bg"} for="video_02" htmlFor={item.vid}>
                                        <span className={item.name + "_bg"}>
                                            <img
                                                src={item.vurl}
                                                alt=""
                                                className=""
                                            />
                                        </span>
                                        <span>{item.vtype}</span>
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export function DropdownMenu(props) {
    const { dropDown, type } = props;
    const handleStopClick = (e) => {
        e.stopPropagation();
    }
    const handleRadioClick = (e) => {
        e.stopPropagation();
        console.log(e.target.value);
    }
    return (
        <>
            {/*begin::Navigation*/}
            <ul className="navi navi-hover" onClick={(e) => handleStopClick(e)}>
                <li className="navi-item">
                    <label class="staff_title_text mb-3">{type}</label>
                    <div className="clearfix">
                        <div className="event-range">
                            {dropDown.map((item) => {
                                return (
                                    <div className="event-radio" key={item.id} >
                                        <input
                                            type="radio"
                                            id="availperson_01"
                                            name="availperson"
                                            className=""
                                            value={item.check1}
                                            onClick={(e) => handleRadioClick(e)}
                                            checked={true}
                                        />
                                        <label className="eprice pr-0" for="availperson_01">
                                            <span className="circle-border"></span>
                                            <span className="chk_txt">{item.check}</span>
                                        </label>
                                    </div>
                                )

                            })}
                            {/* <div className="event-radio">
                                        <input
                                            onClick={(e) => handleRadioClick(e)}
                                            type="radio"
                                            id="availperson_02"
                                            name="availperson"
                                            className=""
                                            value={item.check2}
                                            checked={isInPersonSelect}
                                        />
                                        <label className="eprice pr-0" for="availperson_02">
                                            <span className="circle-border"></span>
                                            <span className="chk_txt">{item.check2}</span>
                                        </label>
                                    </div> */}
                        </div>
                    </div>
                </li>
            </ul>

        </>
    );
}
export function PhoneDropdownMenu() {
    return (
        <>

            {/*begin::Navigation*/}
            {/* {Incall.map((item) => {
                return (
                    <ul className="navi navi-hover" key={item.id}>
                        <li className="navi-item">
                            <label class="staff_title_text mb-3">In Call</label>
                            <div className="clearfix">
                                <div className="event-range">
                                    <div className="event-radio">
                                        <input
                                            type="radio"
                                            id="availcall_01"
                                            name="availcall"
                                            className=""
                                        />
                                        <label className="eprice pr-0" for="availcall_01">
                                            <span className="circle-border"></span>
                                            <span className="chk_txt">{item.check3}</span>
                                        </label>
                                    </div>
                                    <div className="event-radio">
                                        <input
                                            type="radio"
                                            id="availcall_02"
                                            name="availcall"
                                            className=""
                                        />
                                        <label className="eprice pr-0" for="availcall_02">
                                            <span className="circle-border"></span>
                                            <span className="chk_txt">{item.check4}</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                )
            })} */}
        </>

    );
}



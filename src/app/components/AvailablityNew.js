import { ChartTitle } from 'devextreme-react/chart';
import React from 'react';

const Available = [
    {
        id: 1,
        type: "inperson",
        url: toAbsoluteUrl("/media/patients/avail_visit.svg"),
        check1: "My Business Address",
        check2: "Client Address At Booking"
    },
    {
        id: 2,
        type: "In call",
        url: toAbsoluteUrl("/media/patients/avail_phone.svg"),
        check1: "Client will call you",
        check2: "You will call the client"
    },
    {
        id: 3,
        url: toAbsoluteUrl("/media/patients/avail_chat.svg"),
        type: "Chat",

    },
    {
        id: 4,
        type: "Video",
    },
    {
        id: 5,
        url: toAbsoluteUrl("/media/patients/zoom_icon.png"),
        type: "Zoom",
    },
    {
        id: 6,
        type: "Webex",
        url: toAbsoluteUrl("/media/patients/webex_icon.png")
    },
    {
        id: 7,
        type: "Skype",
        url: toAbsoluteUrl("/media/patients/skype_icon.png")
    },
    {
        id: 8,
        type: "Goto Meeting",
        url: toAbsoluteUrl("/media/patients/goto_icon.png")
    },
    {
        id: 8,
        type: "Webex",
        url: toAbsoluteUrl("/media/patients/webex1_icon.png")
    },
    {
        id: 9,
        type: "Google Meet",
        url: toAbsoluteUrl("/media/patients/google-meet_icon.png")
    },
]

export default function AvailabilityNew() {
    return (
        <div className="clearfix staff_first">
            <div className="event_detail timingavail">
                <label class="staff_title_text mb-3">Availability</label>
                <div className="clearfix">
                    <div className="device_avail">
                        {Available.map((item) => {
                            <div className="d-inline-flex" key={item.id}>
                                <Dropdown drop="down" alignCenter className="dropdown h-100">
                                    <Dropdown.Toggle
                                        as={DropdownItemToggler}
                                        id="kt_quick_actions_search_toggle"
                                        className="h-100"
                                    >
                                        <label className="d-flex vid_bg">
                                            <span className="avails visit_bg">
                                                <img
                                                    src={item.url}
                                                    alt=""
                                                    className=""
                                                />
                                            </span>
                                            <span>{item.type} </span>
                                        </label>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav avail-list">
                                        <PersonDropdownMenu />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

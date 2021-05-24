import React from 'react';
import { AvatarDropDown } from './AvatarDropDown';
import { ColorPalette } from './ColorPalette';
import { Dropdown } from "react-bootstrap";
import { DropdownItemToggler } from "../../_metronic/_partials/dropdowns";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
export function ColorAndAvatarDropDown(props) {
    const {item} =props;
    return (
        <Dropdown drop="down" alignCenter className="dropdown h-100">
            <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                <span className="listprofileIcon" style={{ backgroundColor: item.avatar_bg_color }}>{item.avatar ? <img src={toAbsoluteUrl(item.avatar)} alt="" className="mh-100 d-block rounded-circle" /> : "AK"}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                <ColorAndAvatarDropDownMenu />
            </Dropdown.Menu>
        </Dropdown>
    )
}

export function ColorAndAvatarDropDownMenu() {
    return (<>
        {/*begin::Navigation*/}
        <ul className="navi navi-hover">
            <li className="navi-item">
                <ColorPalette />
            </li>
            <li className="navi-item">
                <AvatarDropDown />
            </li>
        </ul>
        {/*end::Navigation*/}

    </>)
}
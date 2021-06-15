import React, { useEffect, useState } from "react";
import { SpinnerLarge, SpinnerSmall } from "./Spinner";
import { queries } from "../modules/Staffs/graphql";
import Search from "./Search";
import { gql, useQuery } from "@apollo/client";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { DevConsoleLog } from "../SiteUtill";
const PageName = {
    STAFF: "staff",
    SERVICE: "service"
};
export function StaffServiceList(props) {
    const { pagename, selectedItem, setFieldValue } = props;
    const { data, loading } = useQuery(gql`${queries.staff}`);
    const [listData, setListData] = useState([]);
    useEffect(() => {
        if (loading === false && data) {
        if (listData.length === 0) {
            setListData(data.getStaffs);
        }
    }
    }, [data]);
    const handleSearch = (data) => {
        setListData(data);
    }

    function handleItemSelect(item) {
        let index = selectedItem.findIndex(value => value === item.id);
        if (index != -1) {
            selectedItem = selectedItem.filter(el => el !== item.id);
        } else {
            selectedItem.push(item.id);
        }

        if (PageName.STAFF === pagename)
            setFieldValue(`staff`, selectedItem);

        if (PageName.SERVICE === pagename)
            setFieldValue(`service`, selectedItem);
    }
    return (
        <div className="form-group">
            <div className="d-flex mb-3">
                <label className="d-block staff_title_text mt-2 mr-auto">Services</label>
                <Search handleSearch={handleSearch} data={listData} />
            </div>
            <div className="serve_sec">
                <div className="row">
                    <SpinnerLarge loading={loading} />
                    {listData.map((item, i) => {
                        return (
                            <StaffItems item={item} index={i} key={i} onClick={() => handleItemSelect(item)} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


function StaffItems(props) {
    const { item, index } = props;
    return (
        <div className="col-4 px-1">
            <input type="checkbox" id={"pet_box_" + index} />
            <label className="pat_box staff_sales" htmlFor={"pet_box_" + index} >
                <div className="d-flex align-items-center mb-3">
                    <span className="staff_sales_icon my-auto">
                        <img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" />
                    </span>
                    <div className="my-auto">
                        <p className="staff_sales_name m-0">{item.name}</p>
                        <span className="staff_sales_desc d-block">{item.mobile_number}</span>
                    </div>
                </div>
                <div className="d-flex">
                    <span className="avails chat_bg">
                        <img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="Chat" className="m-0" />
                    </span>
                    <span className="avails phone_bg">
                        <img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="Phone" className="m-0" />
                    </span>
                    <span className="avails video_bg">
                        <img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="Video" className="m-0" />
                    </span>
                    <span className="avails visit_bg">
                        <img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="In Person" className="m-0" />
                    </span>
                </div>
            </label>
        </div>

    )

}
function ServiceItems(props) {
    return (
        <div className="col-3 px-1">
            <input type="checkbox" id="pet_box_02" />
            <label className="pat_box" for="pet_box_02">
                <div className="d-flex serve_act">
                    <span className="publicbg">Public</span>
                    <span className="ml-auto"><span>$</span> 100</span>
                </div>
                <div className="d-block text-center">
                    <div className="service_img d-flex" style={{ backgroundColor: `#FEEFF6` }}>
                        <img src={toAbsoluteUrl("/media/patients/service_icon_02.svg")} alt="" className="m-auto align-items-center" />
                    </div>
                    <div className="service_title">
                        <p>Pet Services</p>
                        <p><span>Duration:</span><span>30 Mins</span></p>
                    </div>
                </div>
            </label>
        </div>
    )

}
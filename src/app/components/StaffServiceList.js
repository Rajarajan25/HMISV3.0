import React, { useEffect, useState } from "react";
import { SpinnerLarge } from "./Spinner";
import Search from "./Search";
import { gql, useQuery } from "@apollo/client";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { StaffAvailablity } from "./StaffAvailablity";
import PropTypes from 'prop-types';

const PageName = {
    STAFF: "staff",
    SERVICE: "service"
};
// const Type = {
//     INPERSON: "Inperson",
//     PHONE: "Oncall",
//     VIDEO: "Video",
//     CHAT: "Chat"
// };
const GET_SERVICE = gql`
  query{
    getService{
      id
      name
      color_code
      service_type
    } 
    }
  `;

const GET_STAFF = gql`
  query{
   
    getStaffs{
        name
        id
        color_code
        booking_url
        staff_timings{
          timing_id{
            availability_id{
              name
              oncall{
                staff
                client
              }
              inperson{
                client_address
                buinsess_address
              }
              video{
                id
                video_type
              }
            }
          }
        }
    }
    }
  `;
export function StaffServiceList(props) {
    const { pagename, selectedItem, setFieldValue } = props;
    const queryData = pagename === PageName.STAFF ? GET_SERVICE : GET_STAFF;
    const { data, loading } = useQuery(queryData);
    const [listData, setListData] = useState([]);
    useEffect(() => {
        if (loading === false && data) {
            if (listData.length === 0) {
                setListData(pagename === PageName.STAFF ? data.getService : data.getStaffs);
            }
        }
    }, [data]);
    const handleSearch = (data) => {
        setListData(data);
    }
    const handleItemSelect = (item) => {
        let selectedVal = [...selectedItem];
        if (pagename === PageName.SERVICE) {
            let index = selectedVal.findIndex(value => value.staff_id.id === item.id);
            if (index !== -1) {
                selectedVal = selectedVal.filter(el => el.staff_id.id !== item.id);
            } else {
                let id = { staff_id: { id: item.id } }
                selectedVal.push(id);
            }
            setFieldValue("staff", selectedVal);
        } else {
            let index = selectedVal.findIndex(value => value.service_id.id === item.id);
            if (index !== -1) {
                selectedVal = selectedVal.filter(el => el.service_id.id !== item.id);
            } else {
                let id = { service_id: { id: item.id } }
                selectedVal.push(id);
            }
            setFieldValue("service", selectedVal);
        }


    }
    const getActive = (id) => {
        if (selectedItem===undefined || selectedItem.length === 0) return
        if (pagename === PageName.SERVICE) return !!selectedItem.find(value => value.staff_id.id === id);
        else return !!selectedItem.find(value => value.service_id.id === id);
    };

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
                        return (pagename === PageName.SERVICE ?
                            <StaffItems item={item} index={i} key={i} handleItemSelect={handleItemSelect} getActive={getActive} />
                            : <ServiceItems item={item} index={i} key={i} handleItemSelect={handleItemSelect} getActive={getActive} />

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

StaffServiceList.propTypes = {
    selectedItem: PropTypes.object.isRequired,
    pagename: PropTypes.string.isRequired,
    setFieldValue: PropTypes.object.isRequired
}


function StaffItems(props) {
    const { item, index, handleItemSelect, getActive } = props;
    return (
        <div className="col-4 px-1" >
            <input type="checkbox" id={"pet_box_" + index} onClick={() => handleItemSelect(item)} checked={getActive(item.id)} />
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
                    <StaffAvailablity item={item} />
                </div>
            </label>
        </div>

    )

}

StaffItems.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleItemSelect: PropTypes.func.isRequired,
    getActive: PropTypes.func.isRequired
}
function ServiceItems(props) {
    const { item, index, handleItemSelect, getActive } = props;

    return (
        <div className="col-3 px-1">
            <input type="checkbox" id={"pet_box_" + index} onClick={() => handleItemSelect(item)} checked={getActive(item.id)} />
            <label className="pat_box" htmlFor={"pet_box_" + index}>
                <div className="d-flex serve_act">
                    <span className="publicbg">{item.service_type}</span>
                    <span className="ml-auto"><span>$</span> 100</span>
                </div>
                <div className="d-block text-center">
                    <div className="service_img d-flex" style={{ backgroundColor: item.color_code }}>
                        <img src={toAbsoluteUrl("/media/patients/service_icon_02.svg")} alt="" className="m-auto align-items-center" />
                    </div>
                    <div className="service_title">
                        <p>{item.name}</p>
                        <p><span>Duration:</span><span>30 Mins</span></p>
                    </div>
                </div>
            </label>
        </div>
    )

}
ServiceItems.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleItemSelect: PropTypes.func.isRequired,
    getActive: PropTypes.func.isRequired
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
import 'date-fns';
import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { TimePickersUtils } from "../components/DateAndTimePicker"
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import { BusinessProvider } from '../modules/Auth/pages/BusinessContext';
import { useQuery, gql } from "@apollo/client";
import BusinessTime from './BusinessTime'

const GET_BUSINESS = gql`
  {
    getBusiness {
      sub_category_ids
      phone_no
      name
      billingAddress
      size
      type
      phone_country
      phone_no
      _id
      parent_category_ids
      timezone
      applyWeek
      applyMonth
      acceptTerms
      timings {
        timing {
          start_time
          end_time
          work_day_id
        }
      }
    }
  }
`;


export default function BusinessTiming(props) {
    let startdate = new Date();
    startdate = new Date(startdate.setHours(10));
    let enddate = new Date();
    enddate = new Date(startdate.setHours(19));
    
    const days = [
        { work_day_id: 1, short_name: "S", color: "sun_d", name: "Sunday", bg_color: "sun_bg", start_time: startdate, end_time: enddate },
        { work_day_id: 2, short_name: "M", color: "mon_d", name: "Monday", bg_color: "mon_bg", start_time: startdate, end_time: enddate },
        { work_day_id: 3, short_name: "T", color: "tue_d", name: "Tuesday", bg_color: "tue_bg", start_time: startdate, end_time: enddate },
        { work_day_id: 4, short_name: "W", color: "wed_d", name: "Wednesday", bg_color: "wed_bg", start_time: startdate, end_time: enddate },
        { work_day_id: 5, short_name: "T", color: "thu_d", name: "Thursday", bg_color: "thu_bg", start_time: startdate, end_time: enddate },
        { work_day_id: 6, short_name: "F", color: "fri_d", name: "Friday", bg_color: "fri_bg", start_time: startdate, end_time: enddate },
        { work_day_id: 7, short_name: "S", color: "sat_d", name: "Saturday", bg_color: "sat_bg", start_time: startdate, end_time: enddate },
    ];
    const [businessHours, setBusinessHours] = useState(days);

    const { data } = useQuery(GET_BUSINESS, { notifyOnNetworkStatusChange: true });
    let business_id = localStorage.getItem("Business_id");
    const [selectedDays, setSelectedDays] = useState([]);

    let currentBusiness;
    React.useEffect(() => {
        if (data) {
            currentBusiness = data.getBusiness.filter(e => e._id === business_id)
            const sDays = [];
            const sTimes = [...days];
            currentBusiness[0].timings.timing.forEach((item) => {
                let WorkingId = parseInt(item.work_day_id);
                sDays.push(WorkingId);
                const findIndex = sTimes.findIndex(x => x.work_day_id === WorkingId);
                if (findIndex !== -1) {
                    const findItem = sTimes[findIndex];
                    findItem.work_day_id = WorkingId;
                    findItem.start_time = new Date('Fri Apr 20 2020 ' + item.start_time);
                    findItem.end_time = new Date('Fri Apr 20 2020 ' + item.end_time);
                    setSelectedDays(findIndex)
                    sTimes[findIndex] = findItem;
                }
            });
            setBusinessHours(sTimes);
            setSelectedDays(sDays);
        }
    }, [data]);
    const [show, setShow] = React.useState(false);
    const handleShow = () => {
        setShow(true);
    };

    const handleHide = () => {
        setShow(false);
    }
    return (
        <div>
            <div className="text-left  mt-3 pb-2 session_start border-bottom">
                <label className="staff_title_text p-l-5">Working Days</label>
                {businessHours.map((value, i) => {
                    return (
                        <div className="session_part row mb-3" key={i}>
                            <div className="col-4 pr-2 min_width100">
                                <div className="session_select">
                                    <label className="staff_title_text min_wid">{value.name}</label>
                                </div>
                            </div>

                            <div className="col-4 p-0 d-flex">
                                <div className="tm_area text-left pl-0">
                                    <span className="st_tm"><TimePickers value={value.start_time} disabled={true} /></span>
                                    <span className="se_to">to</span>
                                    <span className="end_tm"><EndTimePickers value={value.end_time} disabled={true} /></span>
                                </div>
                            </div>


                        </div>
                    )
                })}
                <div className="d-flex">
                    <Link to="#" className="ml-auto add_setting" onClick={handleShow}>Modify</Link>
                </div>
                <Modal
                    className="timemodal"
                    show={show}
                    onHide={handleHide}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <label class="staff_title_text m-0">Business Hours</label>
                    </Modal.Header>
                    <Modal.Body>
                        <BusinessProvider>
                            <BusinessTime businessHours={businessHours} selectedDays={selectedDays} handleHide={handleHide} />
                        </BusinessProvider>
                    </Modal.Body>
                </Modal>

            </div>

        </div>

    )
}


export function TimePickers(props) {
    return (
        <Grid container justify="space-around">
            <TimePickersUtils {...props} />
        </Grid>
    );
}



export function EndTimePickers(props) {
    return (
        <Grid container justify="space-around">
            <TimePickersUtils {...props} />
        </Grid>
    );
}

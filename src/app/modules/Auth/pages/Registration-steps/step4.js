import React, { useContext, useState } from 'react';
import TimezoneSelect from 'react-timezone-select'
import { BusinessContext } from '../BusinessContext';
import { gql, useMutation } from "@apollo/client";
import { Formik, Field } from 'formik';
import 'date-fns';
import {TimePickersUtil} from "../../../../components/DateAndTimePicker"
import { DevConsoleLog } from '../../../../SiteUtill';
import PropTypes from 'prop-types';

const UPDATE_BUSINESS = gql`
      mutation updateBusiness($businessID: ID!,$business: BusinessInput) {
        updateBusiness(businessID:$businessID,business: $business){
          sub_category_ids
          phone_no
          name
          acceptTerms
          billingAddress
          size
          type
          phone_country
          phone_no
          _id
          parent_category_ids
          timezone
          applyWeek
          street
          city
          state
          zip_code
          applyMonth
          timings{
            timing{
              work_day_id
              start_time
              end_time
              name
            }
          }
        }
      }
`;
export default function Step4(props) {
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let business_id = localStorage.getItem("Business_id");
  let startdate = new Date();
  startdate=new Date(startdate.setHours(10));
  let enddate = new Date();
  enddate = new Date(startdate.setHours(19));
  const days = [
    { work_day_id: 1, short_name: "S" ,color:"sun_d", name:"Sunday", bg_color:"sun_bg" ,start_time: startdate, end_time:enddate},
    { work_day_id: 2, short_name: "M" ,color:"mon_d" ,name:"Monday", bg_color:"mon_bg",start_time: startdate, end_time: enddate},
    { work_day_id: 3, short_name: "T" ,color:"tue_d" ,name:"Tuesday", bg_color:"tue_bg",start_time: startdate, end_time: enddate},
    { work_day_id: 4, short_name: "W" ,color:"wed_d" ,name:"Wednesday", bg_color:"wed_bg",start_time: startdate, end_time: enddate},
    { work_day_id: 5, short_name: "T" ,color:"thu_d" ,name:"Thursday", bg_color:"thu_bg",start_time: startdate, end_time: enddate},
    { work_day_id: 6, short_name: "F" ,color:"fri_d" ,name:"Friday", bg_color:"fri_bg",start_time: startdate, end_time: enddate},
    { work_day_id: 7, short_name: "S" ,color:"sat_d" ,name:"Saturday", bg_color:"sat_bg",start_time: startdate, end_time: enddate},
  ];

  const { handleNext } = props;
  const [updateBusiness] = useMutation(UPDATE_BUSINESS);
  const [loading, setLoading] = useState(false);
  const [preloading, setPreLoading] = useState(false);
  const [business, setBusiness] = useContext(BusinessContext);
  const [seletedDays, setSelectedDays] = useState([]);
  const [businessHours, setBusinessHours] = useState(days);
  const [timePickerIndex, setTimePickerIndex] = useState(null);

  const [selectedTimezone, setSelectedTimezone] = useState({
    value: timeZone,
    label: timeZone
  });
  

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const handleToggle = value => () => {
    const seletedItem = seletedDays.includes(value)
            ? seletedDays.filter(i => i !== value) // remove item
            : [ ...seletedDays, value ]; // add item
      setSelectedDays(seletedItem);
  }

  const handleDateChange = (e, index,key) => {
    DevConsoleLog("e-->",e);
    const updatedData = businessHours.map((x,i) => (i === index ? { ...x, [key]: e } : x));
    setBusinessHours(updatedData);
  }

  const clickTimePicker = (e, index) => {
    setTimePickerIndex(index);
  }

  const handleAppyAll = () => {
    const {start_time,end_time}=businessHours[timePickerIndex];
    const updatedData = businessHours.map((x,i) =>(seletedDays.includes((i+1))?{ ...x, start_time: start_time,end_time:end_time}:x));
    setBusinessHours(updatedData);
  }

  
  const getActive = (id) => {
    const found = seletedDays.find(value =>value===id);
    return found? true:false;
  };

  let currentBusiness = business.currentBusiness;

  if (currentBusiness.size && !preloading) {
    setSelectedTimezone({value:currentBusiness.timezone,label:currentBusiness.timezone});
    const sDays=[];
    const sTimes=[...days];
    currentBusiness.timings.timing.map((item) =>{
      let WorkingId=parseInt(item.work_day_id);
      sDays.push(WorkingId);
      const findIndex=sTimes.findIndex(x=>x.work_day_id===WorkingId);
      if(findIndex!=-1){
        const findItem=sTimes[findIndex];
        findItem.work_day_id=WorkingId;
        //"2021-04-29T06:49:48.257Z"
       // 19:24:59 GMT+0530 (India Standard Time)
       //"Fri Apr 20 2020 00:00:00 GMT+0530 (India Standard Time)"
        findItem.start_time=new Date('Fri Apr 20 2020 ' + item.start_time );
        findItem.end_time=new Date('Fri Apr 20 2020 ' + item.end_time);
        sTimes[findIndex]=findItem;
      }
    });
    setBusinessHours(sTimes);
    setSelectedDays(sDays);
    setPreLoading(!preloading);
  }

  return (
    <>
      <Formik
        initialValues={{timezone: '', applyWeek: false, applyMonth: false}}
        onSubmit={
          () => {
            let timing=[];
             businessHours.map((item) =>{
              if(seletedDays.includes(item.work_day_id)){
                const { short_name, bg_color,color, ...rItem } = item;
                rItem.work_day_id=rItem.work_day_id.toString();
                rItem.start_time=rItem.start_time?.toTimeString();
                rItem.end_time=rItem.end_time?.toTimeString();
                timing=[...timing,rItem]
              }
            });
            enableLoading();
            localStorage.setItem("SelectedTimezone", selectedTimezone.label)
            updateBusiness({
              variables: {
                businessID: business_id,
                business: {
                  timezone: selectedTimezone.label,
                  timings: {
                    timing: timing
                  }
                }
              }
            }).then(res => {
                console.log(res.data.updateBusiness);
                handleNext();
                disableLoading();
                //localStorage.setItem("Business_id",business_id)
                setBusiness({
                  type: "SET_CURRENT_BUSINESS",
                  payload: res.data.updateBusiness
                });
            });
            
          }}
      >
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}  >
              <div className="w-100 mh-100 text-center rightPanel">
                <div className="text-left mb-5">
                  <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose your business hours:</h1>
                </div>
                <div className="form-group fv-plugins-icon-container d-flex font-weight-500 pb-3" >
                  <div className={"info_img"}>
                    <img src="/media/auth-screen/wall_clock.svg" alt="thumbs-up" />
                  </div>
                  <div className="col">
                    <label className="form-label d-block">Time Zone:</label>
                    <Field
                    type="text"
                    component={TimezoneSelect}
                    onChange={setSelectedTimezone}
                    value={selectedTimezone}
                    name="timezone" />
                  </div>
                </div>

                <div className="d-flex mt-5 mb-8">
                {businessHours.map((item,index)=>{
                  return <div key={index} className={`date_bx ${item.color} ${getActive(item.work_day_id)?"date_bx_select":""}`} id="checkbox" checked={getActive(item.work_day_id)} onClick={handleToggle(item.work_day_id)}>{item.short_name}</div>
                })}
                </div>
                <div className="date_sec text-left">
                {businessHours.map((item,index)=>{
                  return <div className="d-flex row mt-4" key={index}>
                  <div className="col-3" onClick={handleToggle(item.work_day_id)}>
                    <div className={`dt_area d-inline-flex ${item.bg_color}`}>
                      <div className={`date_bx ${item.color} ${getActive(item.work_day_id)?"date_bx_select":""}`} id="checkbox" checked={getActive(item.work_day_id)} >{item.short_name}</div>
                      <div className="date_od">{item.name}</div>
                    </div>
                  </div>
                  <div className="tm_area text-left col">
                    <Field component={TimePickersUtil} timeZone ={selectedTimezone} autoOk={true} name={`start_time_${index}`} label="Time" variant="inline" value={item.start_time}  disabled={!getActive(item.work_day_id)} onChange={(e) =>handleDateChange(e,index,"start_time")} onOpen={e => clickTimePicker(e,index)}/>
                    <span className="se_to">to</span>  
                    <Field component={TimePickersUtil} timeZone ={selectedTimezone} autoOk={true} name={`end_time_${index}`} variant="inline" value={item.end_time} disabled={!getActive(item.work_day_id)} onChange={(e) =>handleDateChange(e,index,"end_time")} onOpen={e => clickTimePicker(e,index)}/>
                  </div>
                  {index===timePickerIndex&&seletedDays.length>1&&<a><button className="btn btn-link" type="button" onClick={handleAppyAll}>Apply All</button></a>}
                </div>
                })}
                </div>
                <div className="form-group  flex-wrap flex-center">
                  <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" >
                    <span>Next</span>
                    {loading && <span className="ml-3 spinner spinner-white"></span>}
                  </button>
                </div>
              </div>
            </form>
        )}
      </Formik>
    </>
  )
}

Step4.propTypes={
  handleNext:PropTypes.func.isRequired
}





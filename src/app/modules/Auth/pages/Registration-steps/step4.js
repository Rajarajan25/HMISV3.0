import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { Link } from "react-router-dom";
import TimezoneSelect from 'react-timezone-select'
import { BusinessContext } from '../BusinessContext';
import { gql, useQuery, useMutation } from "@apollo/client";
import { Formik, Field } from 'formik';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from 'formik-material-ui-pickers';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';

const UPDATE_BUSINESS = gql`
    mutation updateBusiness($businessID: ID!,$business: BusinessInput) {
      updateBusiness(businessID:$businessID,business: $business)  {
        sub_category_ids
        phone_no
      name
     billingAddress
     acceptTerms
     size
     type
     phone_country
     phone_no
     _id
      parent_category_ids
      timezone
      applyWeek
      applyMonth
      timings{
        timing{
          start_time
          end_time
        }
      }
      }
    }
  `;
const GET_BUSINESS = gql`
  {
    getBusiness{
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
    timings{
      timing{
        start_time
        end_time
      }
    }
  }
  }
`;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

export default function Step4(props) {
  const { handleNext } = props
  const { data } = useQuery(GET_BUSINESS)
  const [business, setBusiness] = React.useContext(BusinessContext);
  let currentBusiness = business.currentBusiness;
  let timeZone=Intl.DateTimeFormat().resolvedOptions().timeZone
  const [selectedTimezone, setSelectedTimezone] = 
  React.useState({
    value:timeZone,
    label:timeZone
  }) 
  const [selectedtimeZone,setSelectedTimeZone] =React.useState({
    value:localStorage.getItem("SelectedTimezone"),
    label:localStorage.getItem("SelectedTimezone")
  })
   const [sun, setsun] = React.useState(false)
  const [state1, setstate1] = React.useState(false);
  const [state2, setstate2] = React.useState(false);
  const [state3, setstate3] = React.useState(false);
  const [state4, setstate4] = React.useState(false);
  const [state5, setstate5] = React.useState(false);
  const [state6, setstate6] = React.useState(false);
  const [state7, setstate7] = React.useState(false);
  const [state8, setstate8] = React.useState(false);
  const [state9, setstate9] = React.useState(false);

  const [state10, setstate10] = React.useState(false);
  const [state11, setstate11] = React.useState(false);
  const [state12, setstate12] = React.useState(false);
  const [state13, setstate13] = React.useState(false);
  const [state14, setstate14] = React.useState(false);
 
  
  const [value, setValue] = React.useState(
    {timeZone}
  );
  const [updateBusiness] = useMutation(UPDATE_BUSINESS)
  let business_id = localStorage.getItem("Business_id");
  console.log(selectedTimezone)
  const handleChanges = () => {
    if (!sun) {
      setsun(true)
    }
    else {
      setsun(false)
    }
  }
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    
  };
const [applyall,setApplyall] =React.useState(false)
  const handleClick = () => {
    let timings=[
      { start_time:"",end_time:""},
      { start_time:"",end_time:""},
      { start_time:"",end_time:""},
      { start_time:"",end_time:""},
      { start_time:"",end_time:""},
      { start_time:"",end_time:""},
      { start_time:"",end_time:""},
    ];
    setApplyall(true)
    let starttime=document.getElementsByName("timings[0].start_time");
    let endtime =document.getElementsByName("timings[0].end_time");
    // document.getElementsByName("timings[1].end_time").defaultValue=endtime[0].defaultValue;
    // document.getElementsByName("timings[1].start_time").defaultValue=starttime[0].defaultValue;
    // document.getElementsByName("timings[2].end_time").defaultValue=endtime[0].defaultValue;
    // document.getElementsByName("timings[2].start_time").defaultValue=starttime[0].defaultValue;
    // document.getElementsByName("timings[3].end_time").defaultValue=endtime[0].defaultValue;
    // document.getElementsByName("timings[3].start_time").defaultValue=starttime[0].defaultValue;
    // document.getElementsByName("timings[4].end_time").defaultValue=endtime[0].defaultValue;
    // document.getElementsByName("timings[4].start_time").defaultValue=starttime[0].defaultValue;
    // document.getElementsByName("timings[5].end_time").defaultValue=endtime[0].defaultValue;
    // document.getElementsByName("timings[5].start_time").defaultValue=starttime[0].defaultValue;
    // document.getElementsByName("timings[6].end_time").defaultValue=endtime[0].defaultValue;
    // document.getElementsByName("timings[6].start_time").defaultValue=starttime[0].defaultValue;
   
      timings[0].start_time=starttime[0].defaultValue;
      timings[0].end_time=endtime[0].defaultValue;
      let i=1;
      for(i=0;i<=6;i++)
      {
        timings[i].start_time=starttime[0].defaultValue;
        timings[i].end_time=endtime[0].defaultValue;
      }
      currentBusiness.timings.timing=timings;
    
    
    
  
  }
  if (localStorage.getItem("BackFlag") === "Y") {
    if (currentBusiness.timings.timing != undefined && currentBusiness.timings.timing.length != 0) {

      return (
        <>
          <Formik
            initialValues={currentBusiness}
            onSubmit={
              fields => {
                //fields.parent_category_ids=fieldValue;
                localStorage.setItem("SelectedTimezone",selectedtimeZone.label)
                updateBusiness({
                  variables: {
                    businessID: business_id,
                    business: {
                      timezone: selectedtimeZone.label,
                      applyMonth: fields.applyMonth,
                      applyWeek: fields.applyWeek,
                      timings: {
                        timing: currentBusiness.timings.timing
                      }
                    }
                  }
                }).then(res => {
                  console.log(res.data.updateBusiness);
                  //let business_id=res.data.addBusiness._id
                  //localStorage.setItem("Business_id",business_id)
                  setBusiness({
                    type: "SET_CURRENT_BUSINESS",
                    payload: res.data.updateBusiness
                  });
                });
                handleNext()

              }}

          >
            {({ values, errors, touched, handleSubmit, onChange }) => (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <form onSubmit={handleSubmit}  >
                <div className="w-100 mh-100 text-center rightPanel">
                  <div className="text-left mb-5">
                    <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose your business hours:</h1>
                  </div>
                  <div className="d-flex font-weight-500 pb-3">
                    <div className="wal_clk">
                      <img src="/media/auth-screen/wall_clock.svg" alt="thumbs-up" /> <span>Time Zone:</span>
                    </div>
                    <div className="tim_zne">
                      <div className='select-wrapper'>
                        <Field name="timezone" component={TimezoneSelect}
                          onChange={setSelectedTimeZone}
                          value={selectedtimeZone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-5 mb-8">
                    <div className={!sun ? "date_bx sun_d" : "date_bx_Select sun_d"} id="checkbox" onClick={handleChanges}>S</div>
                    <div className={!sun ? "date_bx sun_d" : "date_bx_Select sun_d"} id="checkbox" onClick={handleChanges}>M</div>
                    <div className="date_bx tue_d">T</div>
                    <div className="date_bx wed_d">W</div>
                    <div className="date_bx thu_d">T</div>
                    <div className="date_bx fri_d">F</div>
                    <div className="date_bx sat_d">S</div>
                  </div>
                  <div className="date_sec text-left">
                    <div className="d-flex row mt-4">
                      <div className="col-3">
                        <div className="dt_area mon_bg d-inline-flex">
                          <div className="date_bx mon_d">M</div>
                          <div className="date_od">Monday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">


                        <Link
                          to="#"
                          onClick={() => { setstate1(true) }}>
                          {
                            state1 ?

                              <Field component={TimePicker} name="timings[0].start_time" placeholder="hrs:mins" min="09:00" max="18:00" />

                              : <span className="st_tm">{currentBusiness.timings.timing[0].start_time}</span>
                          }
                        </Link>
                        <span className="se_to">to</span>  <Link
                          to="#"
                          onClick={() => { setstate2(true) }}>
                          {
                            state2 ?

                              <Field component={TimePicker} name="timings[0].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[0].end_time}</span>
                          }
                        </Link>
                      </div>
                      <button type="button" onClick={handleClick}>Apply All</button>

                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area tue_bg d-inline-flex">
                          <div className="date_bx tue_d">T</div>
                          <div className="date_od">Tuesday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate3(true) }}>
                          {
                            state3 ?

                              <Field component={TimePicker} name="timings[1].start_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[1].start_time}</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate4(true) }}>
                          {
                            state4 ?

                              <Field component={TimePicker} name="timings[1].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[1].end_time}</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area wed_bg d-inline-flex">
                          <div className="date_bx wed_d">W</div>
                          <div className="date_od">Wednesday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate5(true) }}>
                          {
                            state5 ?

                              <Field component={TimePicker} name="timings[2].start_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[2].start_time}</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate6(true) }}>
                          {
                            state6 ?

                              <Field component={TimePicker} name="timings[2].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[2].end_time}</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area thu_bg d-inline-flex">
                          <div className="date_bx thu_d">T</div>
                          <div className="date_od">Thursday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate7(true) }}>
                          {
                            state7 ?

                              <Field component={TimePicker} name="timings[3].start_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[3].start_time}</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate8(true) }}>
                          {
                            state8 ?

                              <Field component={TimePicker} name="timings[3].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[3].end_time}</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area fri_bg d-inline-flex">
                          <div className="date_bx fri_d">F</div>
                          <div className="date_od">Friday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate9(true) }}>
                          {
                            state9 ?

                              <Field component={TimePicker} name="timings[4].start_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[4].start_time}</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate10(true) }}>
                          {
                            state10 ?

                              <Field component={TimePicker} name="timings[4].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[4].end_time}</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area sat_bg d-inline-flex">
                          <div className="date_bx sat_d">S</div>
                          <div className="date_od">Saturday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate11(true) }}>
                          {
                            state11 ?

                              <Field component={TimePicker} name="timings[5].start_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[5].start_time}</span>
                          }
                        </Link> <span className="se_to">to</span><Link
                          to="#"
                          onClick={() => { setstate12(true) }}>
                          {
                            state12 ?

                              <Field component={TimePicker} name="timings[5].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[5].end_time}</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area sun_bg d-inline-flex">
                          <div className="date_bx sun_d">S</div>
                          <div className="date_od">Sunday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate13(true) }}>
                          {
                            state13 ?

                              <Field component={TimePicker} name="timings[6].start_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[6].start_time}</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate14(true) }}>
                          {
                            state14 ?

                              <Field component={TimePicker} name="timings[6].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[6].end_time}</span>
                          }
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="form-group d-flex mt-7 ml-3">
                    <div class="form-check">
                      <Field name="applyWeek" type="checkbox" id="formHorizontalCheck" class="form-check-input mt-2" />
                      <label title="" for="formHorizontalCheck" class="form-check-label ml-3 mr-lg-17 mr-md-17 mr-3">Apply to this week</label>
                    </div>
                    <div class="form-check">
                      <Field name="applyMonth" type="checkbox" id="formHorizontalCheck1" class="form-check-input mt-2" />
                      <label title="" for="formHorizontalCheck1" class="form-check-label ml-3">Apply to this month</label>
                    </div>
                  </div>
                  <div className="form-group  flex-wrap flex-center">
                    <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" >
                      <span>Next</span>
                    </button>
                  </div>
                </div>
              </form>
              </MuiPickersUtilsProvider>
            )}
          </Formik>
        </>
      );
    }

    else {
      return (
        <>


        </>
      );
    }

  }
  else {
    if (currentBusiness.timings.timing !== undefined && currentBusiness.timings.timing.length !== 0) {
      return (
        <>
          <Formik
            initialValues={currentBusiness}
            onSubmit={
              fields => {
                //fields.parent_category_ids=fieldValue;
                localStorage.setItem("SelectedTimezone",selectedtimeZone.label)
                // if(applyall)
                // {
                //   updateBusiness({
                //     variables: {
                //       businessID: business_id,
                //       business: {
                //         timezone: selectedTimezone.label,
                //         applyMonth: fields.applyMonth,
                //         applyWeek: fields.applyWeek,
                //         timings: {
                //           timing: fields.timings
                //         }
                //       }
                //     }
                //   }).then(res => {
                //     console.log(res.data.updateBusiness);
                //     //let business_id=res.data.addBusiness._id
                //     //localStorage.setItem("Business_id",business_id)
                //     setBusiness({
                //       type: "SET_CURRENT_BUSINESS",
                //       payload: res.data.updateBusiness
                //     });
                //   });
                // }
                updateBusiness({
                  variables: {
                    businessID: business_id,
                    business: {
                      timezone: selectedtimeZone.label,
                      applyMonth: fields.applyMonth,
                      applyWeek: fields.applyWeek,
                      timings: {
                        timing: currentBusiness.timings.timing
                      }
                    }
                  }
                }).then(res => {
                  console.log(res.data.updateBusiness);
                  //let business_id=res.data.addBusiness._id
                  //localStorage.setItem("Business_id",business_id)
                  setBusiness({
                    type: "SET_CURRENT_BUSINESS",
                    payload: res.data.updateBusiness
                  });
                });
                handleNext()

              }}

          >
            {({ values, errors, touched, handleSubmit, onChange }) => (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <form onSubmit={handleSubmit}  >
                <div className="w-100 mh-100 text-center rightPanel">
                  <div className="text-left mb-5">
                    <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose your business hours:</h1>
                  </div>
                  <div className="d-flex font-weight-500 pb-3">
                    <div className="wal_clk">
                      <img src="/media/auth-screen/wall_clock.svg" alt="thumbs-up" /> <span>Time Zone:</span>
                    </div>
                    <div className="tim_zne">
                      <div className='select-wrapper'>
                      <Field name="timezone" component={TimezoneSelect}
                          onChange={setSelectedTimeZone}
                          value={selectedtimeZone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-5 mb-8">
                    <div className={!sun ? "date_bx sun_d" : "date_bx_Select sun_d"} id="checkbox" onClick={handleChanges}>S</div>
                    <div className={!sun ? "date_bx sun_d" : "date_bx_Select sun_d"} id="checkbox" onClick={handleChanges}>M</div>
                    <div className="date_bx tue_d">T</div>
                    <div className="date_bx wed_d">W</div>
                    <div className="date_bx thu_d">T</div>
                    <div className="date_bx fri_d">F</div>
                    <div className="date_bx sat_d">S</div>
                  </div>
                  <div className="date_sec text-left">
                    <div className="d-flex row mt-4">
                      <div className="col-3">
                        <div className="dt_area mon_bg d-inline-flex">
                          <div className="date_bx mon_d">M</div>
                          <div className="date_od">Monday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">


                        <Link
                          to="#"
                          onClick={() => { setstate1(true) }}>
                          {
                            state1 ?

                              <Field component={TimePicker} name="timings[0].start_time" placeholder="hrs:mins" min="09:00" max="18:00" />

                              : <span className="st_tm">{currentBusiness.timings.timing[0].start_time}</span>
                          }
                        </Link>
                        <span className="se_to">to</span>  <Link
                          to="#"
                          onClick={() => { setstate2(true) }}>;
                          {
                            state2 ?

                              <Field component={TimePicker} name="timings[0].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[0].end_time}</span>
                          }
                        </Link>
                      </div>
                      <button type="button" onClick={handleClick}>Apply All</button>

                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area tue_bg d-inline-flex">
                          <div className="date_bx tue_d">T</div>
                          <div className="date_od">Tuesday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate3(true) }}>
                          {
                            state3 ?

                              <Field component={TimePicker} name="timings[1].start_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[1].start_time}</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate4(true) }}>
                          {
                            state4 ?

                              <Field component={TimePicker} name="timings[1].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[1].end_time}</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area wed_bg d-inline-flex">
                          <div className="date_bx wed_d">W</div>
                          <div className="date_od">Wednesday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate5(true) }}>
                          {
                            state5 ?

                              <Field component={TimePicker} name="timings[2].start_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[2].start_time}</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate6(true) }}>
                          {
                            state6 ?

                              <Field component={TimePicker} name="timings[2].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[2].end_time}</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area thu_bg d-inline-flex">
                          <div className="date_bx thu_d">T</div>
                          <div className="date_od">Thursday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate7(true) }}>
                          {
                            state7 ?

                              <Field component={TimePicker} name="timings[3].start_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[3].start_time}</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate8(true) }}>
                          {
                            state8 ?

                              <Field component={TimePicker} name="timings[3].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[3].end_time}</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area fri_bg d-inline-flex">
                          <div className="date_bx fri_d">F</div>
                          <div className="date_od">Friday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate9(true) }}>
                          {
                            state9 ?

                              <Field component={TimePicker} name="timings[4].start_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[4].start_time}</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate10(true) }}>
                          {
                            state10 ?

                              <Field component={TimePicker} name="timings[4].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[4].end_time}</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area sat_bg d-inline-flex">
                          <div className="date_bx sat_d">S</div>
                          <div className="date_od">Saturday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate11(true) }}>
                          {
                            state11 ?

                              <Field component={TimePicker} name="timings[5].start_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[5].start_time}</span>
                          }
                        </Link> <span className="se_to">to</span><Link
                          to="#"
                          onClick={() => { setstate12(true) }}>
                          {
                            state12 ?

                              <Field component={TimePicker} name="timings[5].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[5].end_time}</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area sun_bg d-inline-flex">
                          <div className="date_bx sun_d">S</div>
                          <div className="date_od">Sunday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate13(true) }}>
                          {
                            state13 ?

                              <Field component={TimePicker} name="timings[6].start_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[6].start_time}</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate14(true) }}>
                          {
                            state14 ?

                              <Field component={TimePicker} name="timings[6].end_time" />

                              : <span className="st_tm">{currentBusiness.timings.timing[6].end_time}</span>
                          }
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="form-group d-flex mt-7 ml-3">
                    <div class="form-check">
                      <Field name="applyWeek" type="checkbox" id="formHorizontalCheck" class="form-check-input mt-2" />
                      <label title="" for="formHorizontalCheck" class="form-check-label ml-3 mr-lg-17 mr-md-17 mr-3">Apply to this week</label>
                    </div>
                    <div class="form-check">
                      <Field name="applyMonth" type="checkbox" id="formHorizontalCheck1" class="form-check-input mt-2" />
                      <label title="" for="formHorizontalCheck1" class="form-check-label ml-3">Apply to this month</label>
                    </div>
                  </div>
                  <div className="form-group  flex-wrap flex-center">
                    <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" >
                      <span>Next</span>
                    </button>
                  </div>
                </div>
              </form>
              </MuiPickersUtilsProvider>
            )}
          </Formik>
        </>

      );
    }
    else {
      return (
        <>
          <Formik
            initialValues={{
              timezone: '', applyWeek: false, applyMonth: false, start_time: '', timings: [{
                start_time: ""
              }

              ]
            }}
            onSubmit={
              fields => {
                //fields.parent_category_ids=fieldValue;
                localStorage.setItem("SelectedTimezone",selectedTimezone.label)
                  updateBusiness({
                    variables: {
                      businessID: business_id,
                      business: {
                        timezone: selectedTimezone.label,
                        applyMonth: fields.applyMonth,
                        applyWeek: fields.applyWeek,
                        timings: {
                          timing: fields.timings
                        }
                      }
                    }
                  })
                    .then(res => {
                      console.log(res.data.updateBusiness);
                      //let business_id=res.data.addBusiness._id
                      //localStorage.setItem("Business_id",business_id)
                      setBusiness({
                        type: "SET_CURRENT_BUSINESS",
                        payload: res.data.updateBusiness
                      });
                   });
                
                
                handleNext()

              }}
          >
            {({ values, errors, touched, handleSubmit, onChange }) => (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <form onSubmit={handleSubmit}  >
                <div className="w-100 mh-100 text-center rightPanel">
                  <div className="text-left mb-5">
                    <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose your business hours:</h1>
                  </div>
                  <div className="d-flex font-weight-500 pb-3">
                    <div className="wal_clk">
                      <img src="/media/auth-screen/wall_clock.svg" alt="thumbs-up" /> <span>Time Zone:</span>
                    </div>
                    <div className="tim_zne">
                      <div className='select-wrapper'>
                      <Field name="timezone" component={TimezoneSelect}
                          onChange={setSelectedTimezone}
                          value={selectedTimezone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-5 mb-8">
                    <div className={!sun ? "date_bx sun_d" : "date_bx_Select sun_d"} id="checkbox" onClick={handleChanges}>S</div>
                    <div className={!sun ? "date_bx sun_d" : "date_bx_Select sun_d"} id="checkbox" onClick={handleChanges}>M</div>
                    <div className="date_bx tue_d">T</div>
                    <div className="date_bx wed_d">W</div>
                    <div className="date_bx thu_d">T</div>
                    <div className="date_bx fri_d">F</div>
                    <div className="date_bx sat_d">S</div>
                  </div>
                  <div className="date_sec text-left">
                    <div className="d-flex row mt-4">
                      <div className="col-3">
                        <div className="dt_area mon_bg d-inline-flex">
                          <div className="date_bx mon_d">M</div>
                          <div className="date_od">Monday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">


                        <Link
                          to="#"
                          onClick={() => { setstate1(true) }}>
                          {
                            state1 ?
                            
                            
                            
                            <Field component={TimePicker} name="timings[0].start_time" label="Time" />
                          

                              : <span className="st_tm">9:00 am</span>
                          }
                        </Link>
                        <span className="se_to">to</span>  <Link
                          to="#"
                          onClick={() => { setstate2(true) }}>
                          {
                            state2 ?

                              <Field component={TimePicker} name="timings[0].end_time" />

                              : <span className="st_tm">12:00 pm</span>
                          }
                        </Link>
                      </div>
                      <button type="button" onClick={handleClick}>Apply All</button>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area tue_bg d-inline-flex">
                          <div className="date_bx tue_d">T</div>
                          <div className="date_od">Tuesday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate3(true) }}>
                          {
                            state3 ?

                              <Field component={TimePicker} name="timings[1].start_time" />

                              : <span className="st_tm">9:00 am</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate4(true) }}>
                          {
                            state4 ?

                              <Field component={TimePicker} name="timings[1].end_time" />

                              : <span className="st_tm">12:00 pm</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area wed_bg d-inline-flex">
                          <div className="date_bx wed_d">W</div>
                          <div className="date_od">Wednesday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate5(true) }}>
                          {
                            state5 ?

                              <Field component={TimePicker} name="timings[2].start_time" />

                              : <span className="st_tm">9:00 am</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate6(true) }}>
                          {
                            state6 ?

                              <Field component={TimePicker} name="timings[2].end_time" />

                              : <span className="st_tm">12:00 pm</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area thu_bg d-inline-flex">
                          <div className="date_bx thu_d">T</div>
                          <div className="date_od">Thursday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate7(true) }}>
                          {
                            state7 ?

                              <Field component={TimePicker} name="timings[3].start_time" />

                              : <span className="st_tm">9:00 am</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate8(true) }}>
                          {
                            state8 ?

                              <Field component={TimePicker} name="timings[3].end_time" />

                              : <span className="st_tm">12:00 pm</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area fri_bg d-inline-flex">
                          <div className="date_bx fri_d">F</div>
                          <div className="date_od">Friday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate9(true) }}>
                          {
                            state9 ?

                              <Field component={TimePicker} name="timings[4].start_time" />

                              : <span className="st_tm">9:00 am</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate10(true) }}>
                          {
                            state10 ?

                              <Field component={TimePicker} name="timings[4].end_time" />

                              : <span className="st_tm">12:00 pm</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area sat_bg d-inline-flex">
                          <div className="date_bx sat_d">S</div>
                          <div className="date_od">Saturday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate11(true) }}>
                          {
                            state11 ?

                              <Field component={TimePicker} name="timings[5].start_time" />

                              : <span className="st_tm">9:00 am</span>
                          }
                        </Link> <span className="se_to">to</span><Link
                          to="#"
                          onClick={() => { setstate12(true) }}>
                          {
                            state12 ?

                              <Field component={TimePicker} name="timings[5].end_time" />

                              : <span className="st_tm">12:00 pm</span>
                          }
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex row mt-3">
                      <div className="col-3">
                        <div className="dt_area sun_bg d-inline-flex">
                          <div className="date_bx sun_d">S</div>
                          <div className="date_od">Sunday</div>
                        </div>
                      </div>
                      <div className="tm_area text-left col">
                        <Link
                          to="#"
                          onClick={() => { setstate13(true) }}>
                          {
                            state13 ?

                              <Field component={TimePicker} name="timings[6].start_time" />

                              : <span className="st_tm">9:00 am</span>
                          }
                        </Link> <span className="se_to">to</span> <Link
                          to="#"
                          onClick={() => { setstate14(true) }}>
                          {
                            state14 ?

                              <Field component={TimePicker} name="timings[6].end_time" />

                              : <span className="st_tm">12:00 pm</span>
                          }
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="form-group d-flex mt-7 ml-3">
                    <div class="form-check">
                      <Field name="applyWeek" type="checkbox" id="formHorizontalCheck" class="form-check-input mt-2" />
                      <label title="" for="formHorizontalCheck" class="form-check-label ml-3 mr-lg-17 mr-md-17 mr-3">Apply to this week</label>
                    </div>
                    <div class="form-check">
                      <Field name="applyMonth" type="checkbox" id="formHorizontalCheck1" class="form-check-input mt-2" />
                      <label title="" for="formHorizontalCheck1" class="form-check-label ml-3">Apply to this month</label>
                    </div>
                  </div>
                  <div className="form-group  flex-wrap flex-center">
                    <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" >
                      <span>Next</span>
                    </button>
                  </div>
                </div>
              </form>
              </MuiPickersUtilsProvider>
             
            )}
          </Formik>
        </>
        
      )
    }
  }
}







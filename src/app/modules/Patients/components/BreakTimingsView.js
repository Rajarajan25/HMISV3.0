import React, { useState } from 'react';
import { Formik, Field, FieldArray, Form } from 'formik';
//import breaktimeschema from "../utils/timeutils";

import { gql, useMutation } from '@apollo/client';

const UPDATE_TIMINGS = gql`
  mutation updateTimings( $staffID : String!, $location_id: String!, $timings_id: String!,$timings: [TimingsInput]
    ) {
    updateTimings( staffID :$staffID, location_id: $location_id, timings_id: $timings_id,timings:$timings) {
      name
		locations {
			name
			timings {
				work_day_id
				work_day_name
				end_time	
			}
		}
    }
  }
`;
const BreakTimingsView = ({ weekDay, callb }) => {
  const [update_Timings] = useMutation(UPDATE_TIMINGS)
  const [fields, setFields] = useState([]);
  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
    let length = weekDay.breaktime.length;
    let breaks = weekDay.breaktime[length - 1];
    const currentIndex = weekDay.breaktime.indexOf(breaks);
    weekDay.breaktime.splice(currentIndex, 1);
  }
  function handleValueRemove(i) {
    const values = [weekDay];
    values.splice(i.idvalue, 1);
    setFields(values);
    weekDay.breaktime.splice(i.idvalue, 1);
    callb(weekDay)
  }
  const handleAdd = () => {
    let breaks = [];
    breaks = {
      start_time: "00:00",
      end_time: "00:00"
    }
    let element = document.getElementsByClassName('form-group_start_break')
    for (var i = 0; i < element; i++) {
      document.getElementById('start_break_' + i).disabled = false
      document.getElementById('end_break_' + i).disabled = false
    }
    weekDay.breaktime.push(breaks);
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }
  const setWeekDay = () => (
    weekDay
  );
  const handleChangess = () => {
    let element = document.getElementsByClassName('form-group_start_break')
    let len = (element.length) - 1
    if (localStorage.getItem("staffEditFlag") === "true") {
      document.getElementById('start_break_' + len).disabled = false
      document.getElementById('end_break_' + len).disabled = false
    }
    else {
      document.getElementById('start_break_' + len).disabled = true
      document.getElementById('end_break_' + len).disabled = true
    }
  }
  return (
    <Formik
      enableReinitialize
      initialValues={weekDay}
      onSubmit={fields => {
        callb(fields)
        document.getElementById("starttime").disabled = true;
        document.getElementById("endtime").disabled = true;
        let element = document.getElementsByClassName('form-group_start_break').length
        for (var i = 0; i < element; i++) {
          document.getElementById('start_break_' + i).disabled = true
          document.getElementById('end_break_' + i).disabled = true
        }
      }}
      //validationSchema={breaktimeschema}
    >
      {({ values, errors, touched }) => (
        <Form className="needs-validation h-100" >
          <div className="form-row">
            <div className="col-md-12 mb-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="custom-control custom-switch" >
                    <Field name="work_day_name" type="checkbox" className="custom-control-input" id="monday" />
                    <label >{values.work_day_name} </label>
                  </div>
                </div>
                <div className="col-md-12  mt-3 mb-3">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="form-group" >
                        <label className="form-label" htmlFor="example-time-2">Start Time</label>
                        <Field id={"starttime"} name="start_time" className="form-control" type="time" defaultValue={values.start_time} disabled />
                        {errors.start_time && touched.start_time || values.start_time == "00:00" ? (
                          <div name="er1" ><font color="red">{errors.start_time}</font></div>) : ""}
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="example-time-2">End Time</label>
                        <Field id={"endtime"} name="end_time" type="time" className="form-control" defaultValue={weekDay.end_time || ""} disabled />
                        {errors.end_time && touched.end_time || values.end_time == "00:00" ? (
                          <div name="er1" ><font color="red">{errors.end_time}</font></div>) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <FieldArray
                  name="breaktime"
                  render={({ insert, remove, push, arrayHelpers }) => (
                    <>
                      <div className="col-md-4 breakstartTime">
                        <div className="row">
                          <label className="form-label col-md-12 hidden-sm hidden-xs" htmlFor="example-time-2">&nbsp;</label>
                          <div className="col-md-12">
                            {values.breaktime.length > 0 ? <button name="break_add_button" className="btn btn-primary ml-auto waves-effect waves-themed" type="button"
                              onClick={() => {
                                push({ start_time: "00:00", end_time: "00:00" })
                                setTimeout(function () {
                                  handleChangess()
                                }, 500)
                              }
                              }> + Break </button> : ""}
                          </div>
                        </div>
                      </div>
                      {values.breaktime &&
                        values.breaktime.map((breaktime, index) => (
                          <div className="col-md-12 mt-3 mb-3">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="form-group_start_break">
                                  <label className="form-label" htmlFor="example-time-2">Break Start Time</label>
                                  {values.breaktime && values.breaktime.length > 0 ? <Field id={"start_break_" + index} name={`breaktime.${index}.start_time`} type="time" className="form-control" defaultValue={breaktime.start_time || ""} disabled /> : ""}
                                  {errors.breaktime && errors.breaktime.length > 0 && touched.breaktime && touched.breaktime.length > 0 && errors.breaktime[index] != null
                                    ? (<div name="er1" ><font color="red">{errors.breaktime[index].start_time}</font></div>) : ""}
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group_end_break">
                                  <label className="form-label" htmlFor="example-time-2">Break End Time</label>
                                  {values.breaktime && values.breaktime.length > 0 ? <Field id={"end_break_" + index} name={`breaktime.${index}.end_time`} type="time" className="form-control" defaultValue={breaktime.end_time || ""} disabled /> : ""}
                                  {errors.breaktime && errors.breaktime.length > 0 && touched.breaktime && touched.breaktime.length > 0 && errors.breaktime[index] != null
                                    ? (<div name="er1" ><font color="red">{errors.breaktime[index].end_time}</font></div>) : ""}
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label className="form-label" htmlFor="example-time-2"></label>
                                  <button name={"break_remove_button_" + index} className="btn btn-primary ml-auto waves-effect waves-themed mt-4" type="button" onClick={() => remove(index)}> - Break </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </>
                  )}
                />
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary ml-auto waves-effect waves-themed" > Save </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default BreakTimingsView;

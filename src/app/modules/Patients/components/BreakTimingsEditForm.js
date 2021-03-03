import React, { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import BreakTimingsView from "./BreakTimingsView";
import { PatientContext } from '../PatientContext';
import { gql, useMutation } from '@apollo/client';
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const BreakTimingsEditForm = ({ nstaff, callb, cancelRow }) => {
  const [update_Timings] = useMutation(UPDATE_TIMINGS)
  const classes = useStyles();
  localStorage.setItem("staffEditFlag", false);
  const [patient, setPatient] = useContext(PatientContext);
  let currentPatient = patient.currentPatient
  const alphabets = ["a", "b", "c", "d", "e", "f", "g"];
  const [weekDay, setWeekDay] = useState({ breaktime: [] });
  const handleChang = (values, value) => {
    localStorage.setItem("staffEditFlag", true)
   var form = document.getElementById("breaktimeview").innerHTML;
    document.getElementById("starttime").disabled = false
    document.getElementById("endtime").disabled = false
    let element = document.getElementsByClassName('form-group_start_break').length
    for (var i = 0; i < element; i++) {
      document.getElementById('start_break_' + i).disabled = false
      document.getElementById('end_break_' + i).disabled = false
    }
  }
  const handleChangeAccor = (values, value) => {
    localStorage.setItem("LocationAccor", "work_day_name" + values)
  }
  const handleChanges = (values, value) => {
    let orgvalues="";
    value.timings.map(
      valuess => {
        {
          if (valuess.work_day_name == values) {
            orgvalues = valuess;
          }
        }
      })
    setWeekDay(orgvalues);
    localStorage.setItem("Locationid", value._id)
    localStorage.setItem("Timingsid", (orgvalues._id))
  }
  const editPatient = (weekDay) => {
    setWeekDay(
      weekDay
    );
    currentPatient.locations.map(
      values => {
        {
          if (localStorage.getItem("Locationid") == values._id) {
            let timingid = localStorage.getItem("Timingsid");
            const index = values.timings.findIndex(item => item._id === timingid)
            values.timings[index] = weekDay;
          }
        }
      })
    localStorage.setItem("staffid", currentPatient.id)
    setPatient({
      type: "SET_CURRENT_PATIENT",
      payload: currentPatient
    });
  }
  React.useEffect(() => {
  }, [weekDay]);
  return (
    <Formik
      initialValues={weekDay}
      onSubmit={fields => {
        editPatient(weekDay)
        update_Timings({
          variables: {
            staffID: localStorage.getItem("staffid"), location_id: localStorage.getItem("Locationid"),
            timings_id: weekDay._id, timings: {
              start_time: weekDay.start_time,
              end_time: weekDay.end_time,
              breaktime: weekDay.breaktime
            }
          }
        });
      }}
    >
      {({ values, errors, touched, handleEdit, handleSave, handleChange, handleBlur }) => (
        <Form className="needs-validation h-100" noValidate >

<div className="row">
                  <div className="col-md-6 col-sm-6 col-12 mb-4">
                 
                    <div className="form-group">

                      <label className="control-label">Time Zone</label>
                      <select className="select2 form-control">
                        <option>(GMT+05:30) New Delhi</option>
                        <option>(GMT+05:30) New Delhi2</option>
                        <option>(GMT+05:30) New Delhi3</option>
                        <option>(GMT+05:30) New Delhi4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-12 mb-4">
                    <div className="form-group">
                      <label className="control-label">Timings</label>
                      <select className="select2-placeholder-multiple form-control" multiple="multiple" id="typeOfwork">
                        <option value="BL">By Location</option>
                        <option value="BA">By Availability</option>
                        <option value="BC">By Company</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="accordion accordion-hover mb-4 setcustomTimer" id="js_demo_accordion-5">
          {currentPatient && currentPatient.locations && currentPatient.locations.map((value, key) => {
              let jsAccordion = "js_demo_accordion-5" + alphabets[key];
              let jsAccordionPrefix = "#" + jsAccordion;
            return (
              <div className="card" key={value.id}>
              <div className="card-header">
              <div className={classes.root}>
                <Accordion data-target={jsAccordionPrefix} aria-expanded="false" onClick={event => handleChangeAccor(jsAccordionPrefix, value)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}> {value.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails id={jsAccordion}>
                  <AccordionActions>
                    <Typography>
                    <select className="form-control" id={"work_day_name" + jsAccordionPrefix} value={value.work_day_name}
                                  onClick={event => handleChanges((event.target.value), value)}>
                                  <option value="" >--Please choose an option--</option>
                      {value.timings && value.timings.length > 0 ? < option id="Monday" value={value.timings[0].work_day_name}    > {value.timings[0].work_day_name}</option> : ""}
                      {value.timings && value.timings.length > 1 ? < option id="Tuesday" value={value.timings[1].work_day_name} > {value.timings[1].work_day_name}</option> : ""}
                      {value.timings && value.timings.length > 2 ? < option id="Wednesday" value={value.timings[2].work_day_name} > {value.timings[2].work_day_name}</option> : ""}
                      {value.timings && value.timings.length > 3 ? < option id="Thursday" value={value.timings[3].work_day_name} > {value.timings[3].work_day_name}</option> : ""}
                      {value.timings && value.timings.length > 4 ? < option id="Friday" value={value.timings[4].work_day_name} > {value.timings[4].work_day_name}</option> : ""}
                      {value.timings && value.timings.length > 5 ? < option id="Saturday" value={value.timings[5].work_day_name} > {value.timings[5].work_day_name}</option> : ""}
                      {value.timings && value.timings.length > 6 ? < option id="Sunday" value={value.timings[6].work_day_name} > {value.timings[6].work_day_name}</option> : ""}
                      </select>
                      <div className="col-10">
                                {document.getElementById("work_day_name" + jsAccordionPrefix) && value.timings.map((values, key) => {
                                  return (
                                    <div className="row">
                                      {(localStorage.getItem("Timingsid")) == (values._id) && (localStorage.getItem("LocationAccor")) == ("work_day_name" + jsAccordionPrefix) ?
                                        <div>
                                          <p id={"work_day_start_end" + jsAccordionPrefix} className="form-control-plaintext widthAuto float-left norFontweight">
                                            {values.start_time} - {values.end_time}</p>
                                          {values.breaktime && (
                                            <p id={jsAccordion + "work_day_break_ start_end" + jsAccordionPrefix} className="form-control-plaintext widthAuto float-left norFontweight">    {values.breaktime.map(
                                              valuess => {
                                                {
                                                  return (
                                                    <div>
                                                      Start Time {valuess.start_time} - End Time {valuess.end_time}
                                                    </div>
                                                  )
                                                }
                                              }
                                            )}</p>
                                          )}
                                          {/* <Button onClick={() => handleChang(values, value)} type="button" className="btn btn-primary btn-sm btn-icon rounded-circle shadow-0 waves-effect waves-themed" data-toggle="tooltip" data-template="<div class=&quot;tooltip&quot; role=&quot;tooltip&quot;><div class=&quot;tooltip-inner bg-primary-500&quot;></div></div>" data-original-title="Edit">
                                            <i className="fal fa-pen-alt" />
                                          </Button> */}
                                        </div> : ""}
                                    </div>)
                                })}
                              </div>
                              {/* {localStorage.getItem("LocationAccor") == ("work_day_name" + jsAccordionPrefix) ?
                              <div id="breaktimeview" ><BreakTimingsView weekDay={weekDay} callb={editPatient} /></div> : ""} */}
                    </Typography>
                    </AccordionActions>
                  </AccordionDetails>
                </Accordion>
              </div>
              </div>
              </div>
            )
          })}
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="panel-content border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center  pb-3 pr-3 pt-3">
                <button className="btn btn-primary ml-auto waves-effect waves-themed" type="submit">Save</button>
              </div>
            </div>
          </div>
        </Form>
      )
      }
    </Formik >
  )
}
export default BreakTimingsEditForm;

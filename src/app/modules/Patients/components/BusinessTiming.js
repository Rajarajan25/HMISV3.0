import 'date-fns';
import React, { useState } from "react";
import Select from 'react-select';
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {ServiceContext} from './ServiceContext'
import { Formik, Field } from 'formik';
import { dateTimePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';


const days = [
    { work_day_id: 1, name:"Sunday",start_time: "Week Off",isWorking:false},
    { work_day_id: 2 ,name:"Monday",start_time: "9:00 AM", end_time: "6:30 PM",isWorking:false},
    { work_day_id: 3 ,name:"Tuesday",start_time: "9:00 AM", end_time: "6:30 PM",isWorking:false},
    { work_day_id: 4 ,name:"Wednesday",start_time: "9:00 AM", end_time: "6:30 PM",isWorking:false},
    { work_day_id: 5 ,name:"Thursday",start_time: "9:00 AM", end_time: "6:30 PM",isWorking:false},
    { work_day_id: 6 ,name:"Friday",start_time: "9:00 AM", end_time: "6:30 PM",isWorking:false},
    { work_day_id: 7 ,name:"Saturday",start_time: "Week Off",isWorking:false},
  ];
export default function BusinessTiming(props) {
    const [businessHours, setBusinessHours] = useState(days);
    const [service,setservice]=React.useContext(ServiceContext);
    let currentService=props.service;
    const [state, setState] = React.useState({
        checkedA: false,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };
    return (
        <Formik
        initialValues={{currentService}}
        enableReinitialize
        onSubmit={(values, { setSubmitting }) => {
            //values.timings.timing=businessHours;
            values.timings.availablity.data[0].availability_type="In-Person";
            values.timings.availablity.data[0].session.data=businessHours;
          setservice({
            type: "EDIT_SERVICE",
            payload: values
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (

          <form onSubmit={handleSubmit}>
        <div>
        <div className="text-left  mt-3 pb-2 session_start border-bottom">
        
            {businessHours.map(value=>{
                return(

                <div className="session_part row mb-3">
                     <div className="col-4 pr-2 min_width100">
            <div className="session_select">
              <label className="staff_title_text min_wid">{value.name}</label>
              <div className="switchlabel"><SwitchLabels value={value.name}/></div>
            </div>
          </div>
                        {value.name === "Sunday" || value.name === "Saturday" ?
                            <div className="col-4 p-0 d-flex">
                                <div className="tm_area text-left pl-0 my-auto">
                                    <span className="day_off">Week Off</span>
                                </div>
                            </div> :
                            <div className="col-4 p-0 d-flex">
                                <div className="tm_area text-left pl-0">
                                    <span className="st_tm"><TimePickers value={value.name} /></span> <span className="se_to">to</span> <span className="end_tm"><EndTimePickers value={value.name}/></span>
                                </div>
                            </div>
                        }
          
                    </div>
                )
            })}
            <div className="form-group mb-0">
                <div className="d-flex justify-content-end patientButton pos_fix">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
          
      </div> 
            
        </div>
        </form>
        )}
      </Formik>
    )
}
export function SwitchLabels(value) {

    const [state, setState] = React.useState({
        checkedA: false,
    });

    const handleChange = (name,values) => event => {
        setState({ ...state, [name]: event.target.checked });
        days.map(val=>{
            if(val.name===values)
            {
                val.isWorking=true;
            }
        })
    };
    let values=value.value;
    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch checked={state.checkedA} onChange={handleChange('checkedA',values)} value="checkedA" />
                }
            />
        </FormGroup>
    );
}

export function TimePickers(value) {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    let values=value.value
    const handleDateChange = (date) => {
        setSelectedDate(date);
        days.map(val=>{
            if(val.name===values)
            {
                val.start_time=selectedDate
            }
        })

    };
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardTimePicker
                    variant="inline"
                    margin="normal"
                    id="time-picker-inline"
                    value={selectedDate}
                    autoOk={true}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        onFocus: e => {
                            setIsOpen(true);
                        }
                    }}
                    PopoverProps={{
                        disableRestoreFocus: true,
                        onClose: () => {
                            setIsOpen(false);
                        }
                    }}
                    InputProps={{
                        disableRestoreFocus: true,
                        onFocus: () => {
                            setIsOpen(true);
                        }
                    }}
                    open={isOpen}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}



export function EndTimePickers(value) {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    let values=value.value
    const handleDateChange = (date) => {
        setSelectedDate(date);
        days.map(val=>{
            if(val.name===values)
            {
                val.end_time=selectedDate
            }
        })

    };
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardTimePicker
                    variant="inline"
                    margin="normal"
                    id="time-picker-inline"
                    value={selectedDate}
                    autoOk={true}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        onFocus: e => {
                            setIsOpen(true);
                        }
                    }}
                    PopoverProps={{
                        disableRestoreFocus: true,
                        onClose: () => {
                            setIsOpen(false);
                        }
                    }}
                    InputProps={{
                        disableRestoreFocus: true,
                        onFocus: () => {
                            setIsOpen(true);
                        }
                    }}
                    open={isOpen}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

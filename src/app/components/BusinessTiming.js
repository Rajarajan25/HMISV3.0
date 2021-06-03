import 'date-fns';
import React, { useState } from "react";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { TimePickersUtil } from "../components/DateAndTimePicker"

const days = [
    { work_day_id: 1, name: "Sunday", start_time: "Week Off", isWorking: false },
    { work_day_id: 2, name: "Monday", start_time: "9:00 AM", end_time: "6:30 PM", isWorking: false },
    { work_day_id: 3, name: "Tuesday", start_time: "9:00 AM", end_time: "6:30 PM", isWorking: false },
    { work_day_id: 4, name: "Wednesday", start_time: "9:00 AM", end_time: "6:30 PM", isWorking: false },
    { work_day_id: 5, name: "Thursday", start_time: "9:00 AM", end_time: "6:30 PM", isWorking: false },
    { work_day_id: 6, name: "Friday", start_time: "9:00 AM", end_time: "6:30 PM", isWorking: false },
    { work_day_id: 7, name: "Saturday", start_time: "Week Off", isWorking: false },
];
export default function BusinessTiming(props) {
    const [businessHours, setBusinessHours] = useState(days);
    const { current } = props
    const [state, setState] = React.useState({
        checkedA: false,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };
    return (
        <div>
            <div className="text-left  mt-3 pb-2 session_start border-bottom">
            <label className="staff_title_text p-l-5">Working Days</label>
                {businessHours.map((value,i) => {
                    return (
                        <div className="session_part row mb-3" key={i}>
                            <div className="col-4 pr-2 min_width100">
                                <div className="session_select">
                                    <label className="staff_title_text min_wid">{value.name}</label>
                                    <div className="switchlabel"><SwitchLabels value={value.name} /></div>
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
                                        <span className="st_tm"><TimePickers value={new Date('Fri Apr 20 2020 ' + value.start_time)} disabled={true}/></span> <span className="se_to">to</span> <span className="end_tm"><EndTimePickers value={new Date('Fri Apr 20 2020 ' + value.end_time)} disabled={true}/></span>
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

    )
}
export function SwitchLabels(value) {
    const [state, setState] = React.useState({
        checkedA: false,
    });
    const handleChange = (name, values) => event => {
        setState({ ...state, [name]: event.target.checked });
        days.map(val => {
            if (val.name === values) {
                val.isWorking = true;
            }
        })
    };
    let values = value.value;
    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch checked={state.checkedA} onChange={handleChange('checkedA', values)} value="checkedA" />
                }
            />
        </FormGroup>
    );
}

export function TimePickers(props) {
    return (
        <Grid container justify="space-around">
            <TimePickersUtil {...props}/>
        </Grid>
    );
}



export function EndTimePickers(props) {
    return (
        <Grid container justify="space-around">
            <TimePickersUtil {...props}/>
        </Grid>
    );
}

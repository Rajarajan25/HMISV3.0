
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

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
  },
}));

export default function stee4() {
  return (
    <>
        <div className="my-auto mh-100 mx-5 p-5 text-center rightPanel">
          <div className="text-left mb-6">
            <h1 className="font-size-28 color_01234B font-weight-600 mb-10">Choose your business hours:</h1>     
            <p className=" "> <span></span></p> 
          </div>
          <div className="d-flex font-size-16 font-weight-500 pb-8 border-bottom">
            <div className="wal_clk">
            <img src="/media/auth-screen/wall_clock.svg" alt="thumbs-up" /> <span>Time Zone:</span>
            </div>
            <div className="tim_zne">
            <TimeZone />
            </div>
          </div>
          <div className="d-flex mt-10">
            <div className="date_bx sun_d">S</div>
            <div className="date_bx mon_d">M</div>
            <div className="date_bx tue_d">T</div>
            <div className="date_bx wed_d">W</div>
            <div className="date_bx thu_d">T</div>
            <div className="date_bx fri_d">F</div>
            <div className="date_bx sat_d">S</div>
          </div>
          <div className="date_sec text-left">
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area mon_bg d-inline-flex">
                  <div className="date_bx mon_d">M</div>
                  <div className="date_od">Monday</div>
                </div>
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area tue_bg d-inline-flex">
                  <div className="date_bx tue_d">T</div>
                  <div className="date_od">Tuesday</div>
                </div>
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area wed_bg d-inline-flex">
                  <div className="date_bx wed_d">W</div>
                  <div className="date_od">Wednesday</div>
                </div>
                
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area thu_bg d-inline-flex">
                  <div className="date_bx thu_d">T</div>
                  <div className="date_od">Thursday</div>
                </div>
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area fri_bg d-inline-flex">
                  <div className="date_bx fri_d">F</div>
                  <div className="date_od">Friday</div>
                </div>
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area sat_bg d-inline-flex">
                  <div className="date_bx sat_d">S</div>
                  <div className="date_od">Saturday</div>
                </div>
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
            <div className="d-flex mt-10">
              <div className="col-3">
                <div className="dt_area sun_bg d-inline-flex">
                  <div className="date_bx sun_d">S</div>
                  <div className="date_od">Sunday</div>
                </div>
              </div>
              <div className="tm_area text-left col">
                <span className="st_tm">9:00 am - 12:00 pm</span> <span className="se_to">to</span> <span className="end_tm">12:00 pm - 6:00 pm</span>
              </div>
            </div>
          </div>
          <div className="form-group d-flex mt-15 ml-5 font-size-15">
            <div class="form-check">
              <input type="checkbox" id="formHorizontalCheck" class="form-check-input mt-2" />
              <label title="" for="formHorizontalCheck" class="form-check-label font-size-14 ml-3 mr-20">Apply to this week</label>
            </div>
            <div class="form-check">
              <input type="checkbox" id="formHorizontalCheck1" class="form-check-input mt-2" />
              <label title="" for="formHorizontalCheck1" class="form-check-label font-size-14 ml-3">Apply to this month</label>
            </div>
          </div>
      </div>
    </>
  );
}


function TimeZone() {
  
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
      <FormControl className={classes.formControl}>
        
        <Select
          value={values.age}
          onChange={handleChange}
          input={<Input name="age"/>}
          displayEmpty
          name="age"
          className={classes.selectEmpty}
        >
          <MenuItem value="">
          (GMT +05:00) Kolkata, India
          </MenuItem>
          <MenuItem value={10}>(GMT +05:00) Kolkata, India</MenuItem>
          <MenuItem value={20}>(GMT +05:00) Kolkata, India</MenuItem>
          <MenuItem value={30}>(GMT +05:00) Kolkata, India</MenuItem>
        </Select>
      </FormControl>
  );
}

import 'date-fns';
import React, { useState } from "react";
import { duration, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import { RadioGroup } from 'formik-material-ui';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Timings from './Timings'
import TimezoneSelect from 'react-timezone-select'
import { Price } from './Price'
import { Formik, Field } from 'formik';
import SelectDropDown from './SelectDropDown'
import { DevConsoleLog } from '../SiteUtill';
import { ButtonLoading } from './ButtonLoading';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },

}));

const durationtime = [
  { value: 5, label: '5 Mins' },
  { value: 10, label: '10 Mins' },
  { value: 15, label: '15 Mins' },
  { value: 20, label: '20 Mins' },
  { value: 25, label: '25 Mins' },
  { value: 30, label: '30 Mins' },
  { value: 35, label: '35 Mins' },
  { value: 40, label: '40 Mins' },
  { value: 45, label: '45 Mins' },
  { value: 50, label: '50 Mins' },
  { value: 55, label: '55 Mins' },
  { value: 1, label: '1 Hour' }
]

const buffertime = [
  { value: 5, label: '5 Mins' },
  { value: 10, label: '10 Mins' },
  { value: 15, label: '15 Mins' },
  { value: 20, label: '20 Mins' }
]

export function Duration(props) {
  const classes = useStyles();
  const { current, handleSave, fields,index,handleUpdate ,isloading } = props
  const { duration,timings, payments } = current;
  const initValue = {
    duration:duration,
    timings: timings,
    payments: payments,
  }
  DevConsoleLog("initValue", initValue);
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [selectedTimezone, setSelectedTimezone] = useState({
    value: timeZone,
    label: timeZone
  });

  return (
    <Formik
      initialValues={initValue}
      enableReinitialize
      onSubmit={(values) => {
        DevConsoleLog("values", JSON.stringify(values));
        handleSave(values);
      }}>
      {({
        handleSubmit, setFieldValue, values
      }) => (

        <form onSubmit={handleSubmit}>
          <div className="clearfix p-5">
            <div className="staff_first staff_second w-100">
              {fields.timezone && <div className="form-group">
                <div className="row">
                  <div className="col-12">
                    <label className="form-label d-block">Time Zone</label>
                    <div className="re_select">
                      <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                      />                            </div>
                  </div>
                </div>
              </div>
              }
              {fields.duration &&
                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <label className="form-label d-block">Duration</label>
                      <div className="re_select">
                        <SelectDropDown
                          className='input'
                          onChange={value => setFieldValue('duration.duration_minutes', value.value)}
                          value={values.duration.duration_minutes}
                          options={durationtime}
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <label className="form-label d-block">Buffer Time Before</label>
                      <div className="re_select">

                        <SelectDropDown
                          className='input'
                          onChange={value => setFieldValue('duration.buffer_before_min', value.value)}
                          value={values.duration.buffer_before_min}
                          options={buffertime}
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <label className="form-label d-block">Buffer Time After</label>
                      <div className="re_select">
                        <SelectDropDown
                          className='input'
                          onChange={value => setFieldValue('duration.buffer_after_min', value.value)}
                          value={values.duration.buffer_after_min}
                          options={buffertime}
                        />

                      </div>
                    </div>
                  </div>
                </div>
              }
              {fields.daterange &&
                <div className="form-group">
                  <label className="form-label d-block mr-5 mb-2">Date Range</label>
                  <div className="d-flex mb-2">
                    <div className="busi_cus ser_tme clearfix">
                      <div className={classes.root}>
                        <Field component={RadioGroup} name="duration.date_range">
                          <FormControlLabel value="range" control={<Radio />} label="Range" />
                          <FormControlLabel value="infinity" control={<Radio />} label="Infinity" />
                          <FormControlLabel value="default" control={<Radio />} label="Default" />
                        </Field>
                      </div>

                    </div>
                  </div>

                {values.duration.date_range==="range"?  <input placeholder="Date Range" type="text" className="form-control" name="" />:null}
                </div>

              }
              {fields.price &&
                <Price formikValues={values} setFieldValue={setFieldValue} />
              }
              {fields.timing && <Timings formikValues={values} setFieldValue={setFieldValue}/>}
              <ButtonLoading label="Save" loading={isloading}/>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

function DateRange() {

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    group: {
      margin: theme.spacing(1, 0),
    },
  }));

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <Field component={RadioGroup}
          name="date_range"
          className={classes.group}
        >
          <FormControlLabel value="range" control={<Radio />} label="Range" />
          <FormControlLabel value="infinity" control={<Radio />} label="Infinity" />
          <FormControlLabel value="default" control={<Radio />} label="Default" />
        </Field>
      </FormControl>

    </div>
  );
}

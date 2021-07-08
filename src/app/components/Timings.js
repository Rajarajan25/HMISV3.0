import React from 'react'
import BusinessTiming from './BusinessTiming';
import CustomTiming from './CustomTiming'
import { Field } from 'formik'
import { TimingsModel } from '../models/TimingsModel';
// import Availability from './Availability';
import PropTypes from 'prop-types';
import AvailabilityNew from './AvailablityNew';
export default function Timings(props) {
  const { formikValues, setFieldValue } = props;

  if (!formikValues.timings || !formikValues.timings.timing_id) {
    formikValues.timings = TimingsModel;
  }

  function handleTimingChanges(event) {
    let value = event.target.value === "true" ? true : false;
    setFieldValue(`timings.timing_id.sessions.business_hour`, value);
    setFieldValue(`timings.timing_id.sessions.custome_hour`, !value);
  }
  return (
    <div>
      <div className="form-group mb-2">
        <label className="staff_title_text m-0">Timings</label>
      </div>
      <div className="busi_cus ser_tme mt-3 mb-5 clearfix">
        <div className="d-flex radio-header">
          <div className="radio-section">
            <Field
              type="radio"
              id="range_01"
              onChange={handleTimingChanges}
              name="timings.timing_id.sessions.business_hour"
              value={true}
            />
            <label className="eprice" htmlFor="range_01">
              <span className="circle-border"></span>
              <span className="chk_txt">Business hours</span>
            </label>
          </div>
          <div className="radio-section">
            <Field
              type="radio"
              id="range_02"
              onChange={handleTimingChanges}
              name="timings.timing_id.sessions.business_hour"
              value={false}
            />
            <label className="eprice" htmlFor="range_02">
              <span className="circle-border"></span>
              <span className="chk_txt">Custom hours</span>
            </label>
          </div>
        </div>
        {/* <div className={classes.root}>
          <Field component={RadioGroup} name="timings.timing_id.sessions.business_hour" onChange={handleTimingChanges}>
            <FormControlLabel value={true} checked={formikValues.timings.timing_id.sessions.business_hour} control={<Radio />} label="Business hours" />
            <FormControlLabel value={false} checked={formikValues.timings.timing_id.sessions.custome_hour} control={<Radio />} label="Custom" />
          </Field>
        </div> */}
        {/* <Availability {...props} /> */}
        <AvailabilityNew />
        {formikValues.timings.timing_id.sessions.business_hour ?
          <BusinessTiming {...props} /> :
          <CustomTiming {...props} addTiming={false} />}
      </div>
    </div>
  )
}

Timings.propTypes = {
  formikValues: PropTypes.object.isRequired,
  setFieldValue: PropTypes.object.isRequired
}
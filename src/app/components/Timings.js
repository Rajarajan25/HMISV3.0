import React from 'react'
import BusinessTiming from './BusinessTiming';
import CustomTiming from './CustomTiming'
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
// import { DevConsoleLog } from '../SiteUtill';
import { Field } from 'formik'
import { TimingsModel } from '../models/TimingsModel';
import Availability from './Availability';
import PropTypes from 'prop-types';

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

export default function Timings(props) {
  const { formikValues, setFieldValue } = props;
  const classes = useStyles();

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
        <div className={classes.root}>
          <Field component={RadioGroup} name="timings.timing_id.sessions.business_hour" onChange={handleTimingChanges}>
            <FormControlLabel value={true} checked={formikValues.timings.timing_id.sessions.business_hour} control={<Radio />} label="Business hours" />
            <FormControlLabel value={false} checked={formikValues.timings.timing_id.sessions.custome_hour} control={<Radio />} label="Custom" />
          </Field>
        </div>
        <Availability {...props} />
        {formikValues.timings.timing_id.sessions.business_hour ? <BusinessTiming {...props} /> : <CustomTiming {...props} addTiming={false} />}
      </div>
    </div>
  )
}

Timings.propTypes = {
  formikValues: PropTypes.object.isRequired,
  setFieldValue: PropTypes.object.isRequired
}
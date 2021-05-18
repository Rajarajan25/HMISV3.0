import React from 'react'
import BusinessTiming from './BusinessTiming';
import CustomTiming from './CustomTiming'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

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
  
export default function Timings(props){
    const {current} = props;
    const [values, setValues] = React.useState('business');
    const classes = useStyles();

  function handleTimingChanges(event) {
    setValues(event.target.value);
  }
    return(
        <div>
            <div className="form-group mb-2">
                <label className="staff_title_text m-0">Timings</label>
              </div>
              <div className="busi_cus ser_tme mt-3 mb-5 clearfix">
                <div className={classes.root}>
                  <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup
            name="business"
            className={classes.group}
            value={values}
            onChange={handleTimingChanges}
          >
            <FormControlLabel value="business" control={<Radio />} label="Business hours" />
            <FormControlLabel value="custom" control={<Radio />} label="Custom" />
          </RadioGroup>
                  </FormControl>

                </div>
                {values === "business" ? <BusinessTiming current={current} /> : <CustomTiming current={current} />}
              </div>
        </div>
    )
}
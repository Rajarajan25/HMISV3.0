import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});


export function ServiceSettings() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_second w-100 p-6">
      <div className="form-group border-bottom">
        <div className="d-flex align-items-center">
          <label class="staff_title_text">Service Type</label>
        </div>
      </div>
      <div className="busi_cus ser_tme mt-3 mb-5 clearfix">
        <ServiceType />
      </div>
      <div className="form-group border-bottom">
        <div className="d-flex align-items-center">
          <label class="staff_title_text">Availability</label>
        </div>
      </div>
      <div className="form-group mb-0">
        <div className="d-flex justify-content-end patientButton pos_fix">
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}


export default function SwitchLabels() {

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
      />
    </FormGroup>
  );
}

function ServiceType() {

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
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          name="business"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="business" control={<Radio />} label="Public" />
          <FormControlLabel value="custom" control={<Radio />} label="Private" />
        </RadioGroup>
      </FormControl>
      
    </div>
  );
}
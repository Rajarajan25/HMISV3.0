import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field } from 'formik';
import { ColorPaletteFormik } from "./ColorPalette";
import { UploadAvatar } from "./UploadAvatar"
import Visiblity from './Visiblity'
import Grid from '@material-ui/core/Grid';
import { DatePickersUtil } from './DateAndTimePicker'
import {GenderFormik} from './Gender'
import {Syncwith} from './Syncwith'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export function Details(props) {
  const classes = useStyles();
  const { handleSave, current, fields } = props;
  return (
    <Formik
      initialValues={current}
      enableReinitialize
      onSubmit={(values) => {
        console.log("values", JSON.stringify(values));
        handleSave(values);
      }}
    >
      {({
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="clearfix">
            <div className="staff_first w-100 p-5">
              {fields.name && <div className="form-group">
                <label class="form-label d-block">Name *</label>
                <div className="d-flex">
                  <Field placeholder={fields.name} type="text" className={`form-control`} name="name" />
                </div>
              </div>}
              {fields.visiblity && <Visiblity name="Visiblity" />}
              {fields.description && <div className="form-group">
                <label class="form-label d-block">{fields.description}</label>
                <div className="d-flex">
                  <Field as="textarea" placeholder={fields.description} type="text" className={`form-control`} name="description"> </Field>
                </div>
              </div>}
              <div className="form-group">
                <div className="d-flex">
                  {fields.phone && <div className="col-6">
                    <label class="form-label d-block">{fields.phone}</label>
                    <Field placeholder={fields.phone} type="number" className={`form-control`} name="mobile" />
                  </div>}
                  {fields.email && <div className="col-6">
                    <label class="form-label d-block">{fields.email}</label>
                    <Field placeholder={fields.email} type="email" className={`form-control`} name="email" />
                  </div>}
                </div>
              </div>
              {fields.daterange && <div className="form-group">
                <div className="col-12">
                  <label class="form-label d-block">{fields.daterange}</label>
                </div>
                <div className="d-flex">
                  <div className="col-6">
                    <DatePicker />
                  </div>
                  <div className="col-6">
                    <DatePicker />
                  </div>
                </div>
              </div>}
              {fields.experience && <div className="form-group">
                <div className="col-12">
                  <label class="form-label d-block">{fields.experience}</label>
                </div>
                <div className="d-flex">
                  <div className="col-6">
                    <Field placeholder="Years" type="number" className={`form-control`} name="experience_year" />
                  </div>
                  <div className="col-6">
                    <Field placeholder="Month" type="number" className={`form-control`} name="experience_month" />
                  </div>
                </div>
              </div>}
              {fields.avatar && <div className="form-group">
                <div className="d-flex pb-2">
                  <UploadAvatar classes={classes} />
                  <div className="col-9 pr-0">
                    <ColorPaletteFormik />
                  </div>
                </div>
              </div>}
              {fields.gender && <GenderFormik label={fields.gender}/>}
              {fields.status && <div className="form-group">
                <div className="row">
                  <div className="col-6">
                    <div className="col-12">
                      <label class="form-label d-block">{fields.status}</label>
                    </div>
                    <div className="d-flex">
                      <div className="col-12">
                        <div className="pre_status">
                          <SwitchLabels />
                        </div>
                      </div>
                    </div>
                  </div>
                  {fields.provider && <div className="col-6">
                    <div className="col-12">
                      <label class="form-label d-block">{fields.provider}</label>
                    </div>
                    <div className="d-flex">
                      <div className="col-12">
                        <div className="pre_status">
                          <ProviderLabels />
                        </div>
                      </div>
                    </div>
                  </div>}
                </div>
              </div>}
              {fields.link && <div className="form-group">
                <label class="form-label d-block">{fields.link}</label>
                <div className="d-flex">
                  <a href="https://Hmis/Sagayaraj/https://dribbble.com/search/more 20options" className="booking_link" target="blank">
                    https://Hmis/Sagayaraj/https://dribbble.com/search/more 20options
            </a>
                </div>
              </div>}
              {fields.syncwith &&<Syncwith/>}
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
  );
}

export function DatePicker() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid container justify="space-around">
      <DatePickersUtil />
    </Grid>
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
        label="Active"
      />
    </FormGroup>
  );
}

export function ProviderLabels() {

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
        label="Yes"
      />
    </FormGroup>
  );
}
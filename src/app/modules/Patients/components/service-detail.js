import 'date-fns';
import React from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ServiceContext } from './ServiceContext'
import { Formik, Field } from 'formik';
import { GenderFormik } from '../../../components/Gender'
import { ColorPaletteFormik } from '../../../components/ColorPalette';
import { UploadAvatar } from '../../../components/UploadAvatar';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));
const initialValues = { name: '', description: '', color_code: '', prefered_gender: '', booking_url: '' };

export function ServiceDetail(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState();
 const {editService,currentService} =props;


  return (
    <Formik
      initialValues={currentService || initialValues}
      enableReinitialize
      onSubmit={(values) => {
        editService(values);
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
          <div className="staff_first w-100 p-4">
            <div className="form-group">
              <div className="col-12">
                <label class="form-label d-block">Service Name</label>
              </div>
              <div className="d-flex">
                <div className="col-12">
                  <Field placeholder="Spa" type="text" className={`form-control`} name="name" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-12">
                <label class="form-label d-block">Description</label>
              </div>
              <div className="d-flex">
                <div className="col-12">
                  <Field as="textarea" placeholder="Description" type="text" className={`form-control`} name="description"> </Field>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="d-flex">
                <UploadAvatar classes={classes}/>
                <ColorPaletteFormik />
              </div>
            </div>
            <GenderFormik label={"Preferred Genders"} />
            <div className="form-group">
              <div className="col-12">
                <label class="form-label d-block">Service URL</label>
              </div>
              <div className="d-flex">
                <div className="col-12">
                  <Field name="booking_url" type="text" className="booking_link" target="blank">
                  </Field>
                </div>
              </div>
            </div>
            <div className="form-group mb-0">
              <div className="d-flex justify-content-end patientButton pos_fix">
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );


}


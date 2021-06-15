import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import Search from '../../../components/Search';
import StaffCommission from "../../../components/StaffCommission"
import { Formik } from 'formik';
import { StaffServiceList } from "../../../components/StaffServiceList";
const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});


export function StaffService(props) {
  const classes = useStyles();
  const { current, fields, index, handleUpdate, addNew } = props;
  const [loading, setLoading] = useState(false);
  const { commission } = current;
  const initValue = {
    commission: commission,
    staff:[],
  }
  
  return (<>
    <div className="staff_first staff_third w-100 p-6 d-none">
      <div className="form-group border-bottom d-none">
        <div className="d-flex">
          <label className="d-block staff_title_text">Test Included</label>
          <span className="ml-auto add_on_more">+ Add On More</span>
        </div>
        <div className="inc_bg mb-3">
          <div className="row">
            <div className="col-3 px-1">
              <div className="inc_box bg-white">
                <img src={toAbsoluteUrl("/media/patients/scan_test.svg")} alt="" className="d-block" />
                <span className="d-block scan_point">Scan Point</span>
              </div>
            </div>
            <div className="col-3 px-1">
              <div className="inc_box bg-white">
                <img src={toAbsoluteUrl("/media/patients/blood-test.svg")} alt="" className="d-block" />
                <span className="d-block blood_test">Blood Test</span>
              </div>
            </div>
            <div className="col-3 px-1">
              <div className="inc_box bg-white">
                <img src={toAbsoluteUrl("/media/patients/blood-tube.svg")} alt="" className="d-block" />
                <span className="d-block kidney_test">Kidney Test</span>
              </div>
            </div>
            <div className="col-3 px-1">
              <div className="inc_box bg-white">
                <img src={toAbsoluteUrl("/media/patients/swab.svg")} alt="" className="d-block" />
                <span className="d-block corona_test">Corona Test</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
      </div>
    </div>
    <Formik
      initialValues={initValue}
      enableReinitialize={true}
      onSubmit={(values) => {
        console.log("values", JSON.stringify(values));
        if (index != -1) {
          handleUpdate(values, index);
          return;
        } else {
          setLoading(true);
        }
      }}
    >
      {({
        handleSubmit, setFieldValue, values
      }) => (
        <form onSubmit={handleSubmit} className="form fv-plugins-framework">
          <div className="staff_first staff_third w-100 p-6">
            <StaffServiceList selectedItem={values.staff} pagename="staff"/>
            <StaffCommission fields={fields} formikValues={values} setFieldValue={setFieldValue} />
            <div className="form-group mb-0">
              <div className="d-flex justify-content-end patientButton pos_fix">
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </form>
      )}

    </Formik>

  </>);
}
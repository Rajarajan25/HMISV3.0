import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import Search from '../../../components/Search';
import StaffCommission from "../../../components/StaffCommission"
import { Formik } from 'formik';
import { StaffServiceList } from "../../../components/StaffServiceList";
import { ButtonLoading } from "../../../components/ButtonLoading";

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
  const { current, fields, index,handleChangeServices,isloading} = props;
  const { commission,staff_services } = current;
  const initValue = {
    commission: commission,
    service:staff_services,
  }
  
  return (<>
    <Formik
      initialValues={initValue}
      enableReinitialize={true}
      onSubmit={(values) => {
        console.log("values", JSON.stringify(values));
        if (index != -1) {
          handleChangeServices(values.service,"staff_services", current.id);
          return;
        }
      }}
    >
      {({
        handleSubmit, setFieldValue, values
      }) => (
        <form onSubmit={handleSubmit} className="form fv-plugins-framework">
          <div className="staff_first staff_third w-100 p-6">
            <StaffServiceList selectedItem={values.service} pagename="staff" setFieldValue={setFieldValue}/>
            <StaffCommission fields={fields} formikValues={values} setFieldValue={setFieldValue} />
            <ButtonLoading label="Save" loading={isloading} />

          </div>
        </form>
      )}

    </Formik>

  </>);
}
import React from "react";
import StaffCommission from "../../../components/StaffCommission"
import { Formik } from 'formik';
import { StaffServiceList } from "../../../components/StaffServiceList";
import { ButtonLoading } from "../../../components/ButtonLoading";
import PropTypes from 'prop-types';

export function StaffService(props) {
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
        if (index !== -1) {
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


StaffServiceList.propTypes={
  current:PropTypes.object.isRequired,
  fields:PropTypes.object.isRequired,
  index:PropTypes.number.isRequired,
  handleChangeServices:PropTypes.func.isRequired,
  isloading:PropTypes.bool.isRequired
}

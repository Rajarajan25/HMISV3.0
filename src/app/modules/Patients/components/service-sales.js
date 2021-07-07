import React from "react";
import { Formik } from 'formik';
import { StaffServiceList } from "../../../components/StaffServiceList";
import { ButtonLoading } from "../../../components/ButtonLoading";
import PropTypes from 'prop-types';

export function StaffService(props) {
  const { current,index,handleChangeServices,isloading } = props;
  const { service_relationships} = current;
  const initValue = {
    staff:service_relationships.service_staff,
  }
  
  return (<>
    <Formik
      initialValues={initValue}
      enableReinitialize={true}
      onSubmit={(values) => {
        console.log("values", JSON.stringify(values));
        if (index !== -1) {
          handleChangeServices(values.staff,"service_staff", current.id);
          return;
        }
      }}
    >
      {({
        handleSubmit, setFieldValue, values
      }) => (
        <form onSubmit={handleSubmit} className="form fv-plugins-framework">
          <div className="staff_first staff_third w-100 p-6">
            <StaffServiceList selectedItem={values.staff} pagename="service" setFieldValue={setFieldValue}/>
            <ButtonLoading label="Save" loading={isloading} />
          </div>
        </form>
      )}

    </Formik>

  </>);
}

StaffService.propTypes={
  current:PropTypes.object.isRequired,
  index:PropTypes.number.isRequired,
  handleChangeServices:PropTypes.func.isRequired,
  isloading:PropTypes.bool.isRequired
}
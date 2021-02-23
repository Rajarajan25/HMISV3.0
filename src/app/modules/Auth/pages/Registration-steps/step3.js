
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from 'formik';
import {  useMutation,useQuery, useLazyQuery } from "@apollo/client";
import { ADD_USER,GET_USER} from "../query/graphql";
export default function Step3(props) {
  const { values, field1, field2, activeStep, isLastStep, handleBack, handleNext,steps } = props;
  const initialValues = {
    
  };
  const [addUser] = useMutation(ADD_USER);
  const AddUser = async (values) => {
    
    addUser({
      variables: {
        data: {
          "user_type": values.type,
         
         
      }
    }
    });
  };
  const {data } = useQuery(GET_USER, {
    variables: { query: { business_id: localStorage.getItem("BusinessName")}}
  });
  if(localStorage.getItem("BackFlag")==="Y")
  {
    
      if(data!==undefined )
      {
  return (
    <>
    <Formik
      initialValues={data.user}
      onSubmit={
        fields => {
         
         alert(JSON.stringify(fields,null,2))
         AddUser(fields);
         handleNext()
      
        }}
    >
      {({ values, errors, touched, handleSubmit, onChange }) => (
        <Form onSubmit={handleSubmit}  >
      <div className="w-100 mh-100 text-center rightPanel">
        <div className="text-left mb-6">
          <h1 className="font-size-28 color_3F4772 text-capitalize font-weight-600 mb-10">Choose your Salon types:</h1>      
        </div>
        <div className="d-flex">
            <div className="d-flex _2FwA">
                <Field name="hairspa" type="checkbox" id="hair" className="checkbx" />
                <label className="subCategory" for="hair">
                    <i className="catIcon rounded-circle mr-4">S</i>
                    <span className="chk_txt">Hair spa</span>
                </label>
            </div>
            <div className="d-flex _2FwA">
                <Field name="nailspa" type="checkbox" id="nail"  className="checkbx" />
                <label className="subCategory" for="nail">
                    <i className="catIcon rounded-circle mr-4">S</i>
                    <span className="chk_txt">Nail spa</span>
                </label>
            </div>
            
          <div>

          </div>
        </div>
      </div>
      <div className="form-group flex-wrap flex-center">
        <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6">
          <span>Next</span>
        </button>
      </div>
       </Form>
       )}
     </Formik>
    </>
  );
}
else{
  return(<></>)
}
    }
    else{
      return (
        <>
        <Formik
          initialValues={initialValues}
          onSubmit={
            fields => {
             
             alert(JSON.stringify(fields,null,2))
             AddUser(fields);
             handleNext()
          
            }}
        >
          {({ values, errors, touched, handleSubmit, onChange }) => (
            <Form onSubmit={handleSubmit}  >
          <div className="w-100 mh-100 text-center rightPanel">
            <div className="text-left mb-6">
              <h1 className="font-size-28 color_3F4772 text-capitalize font-weight-600 mb-10">Choose your Salon types:</h1>      
            </div>
            <div className="d-flex">
                <div className="d-flex _2FwA">
                    <Field name="hairspa" type="checkbox" id="hair" className="checkbx" />
                    <label className="subCategory" for="hair">
                        <i className="catIcon rounded-circle mr-4">S</i>
                        <span className="chk_txt">Hair spa</span>
                    </label>
                </div>
                <div className="d-flex _2FwA">
                    <Field name="nailspa" type="checkbox" id="nail"  className="checkbx" />
                    <label className="subCategory" for="nail">
                        <i className="catIcon rounded-circle mr-4">S</i>
                        <span className="chk_txt">Nail spa</span>
                    </label>
                </div>
                
              <div>
    
              </div>
            </div>
          </div>
          <div className="form-group flex-wrap flex-center">
            <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6">
              <span>Next</span>
            </button>
          </div>
           </Form>
           )}
         </Formik>
        </>
      );
    }
    }
   

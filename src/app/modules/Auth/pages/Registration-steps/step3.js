
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { Link } from "react-router-dom";
import { InputField, CheckboxField,CheckboxField1, SelectField,BoxField } from './FormFields';
import { useField } from 'formik';


export default function Step3(props) {
  const {
    formField: {
      business_name,
      business_address,
      business_size,
      business_type,
      country_code,
      phone_number,
      business,
      spa_type,
      acceptTerms
    }
  } = props;
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const handleClick =(e)=>{
    let idaval = e.currentTarget.getAttribute("id");
    localStorage.setItem("selectedvalue",idaval)
    console.log(idaval)
  }
  return (
    <>
    
      <div className="w-100 mh-100 text-center rightPanel">
        <div className="text-left mb-6">
          <h1 className="font-size-28 color_3F4772 text-capitalize font-weight-600 mb-10">Choose your Salon types:</h1>      
        </div>
        <div className="d-flex">
            <div className="d-flex _2FwA">
            <CheckboxField name={spa_type.name}  onClick={handleClick}/>
                
                
                <label className="subCategory" for="hair">
                    <i className="catIcon rounded-circle mr-4">S</i>
                    <span className="chk_txt">Hair spa</span>
                </label>
                
            </div>
            <div className="d-flex _2FwA">
                <CheckboxField1 name={spa_type.name}  onClick={handleClick}/>
                
                <label className="subCategory" for="nail">
                
                    <i className="catIcon rounded-circle mr-4">S</i>
                    <span className="chk_txt">Nail spa</span>
                </label>
            </div>
            
          <div>

          </div>
        </div>
      </div>
    </>
  );
}

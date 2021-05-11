
import React, { useContext, useState } from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Formik } from 'formik';
import { BusinessContext } from '../BusinessContext';
import { DevConsoleLog } from '../../../../SiteUtill';
const GET_CATEGORY = gql`
{
  getCategory{
    _id
    category_name
    parant_category_id
  }
} 
  `;
const UPDATE_BUSINESS = gql`
  mutation updateBusiness($businessID: ID!,$business: BusinessInput) {
    updateBusiness(businessID:$businessID,business: $business){
      sub_category_ids
      phone_no
      name
      acceptTerms
      billingAddress
      size
      type
      phone_country
      phone_no
      _id
      parent_category_ids
      timezone
      applyWeek
      street
      city
      state
      zip_code
      applyMonth
      timings{
        timing{
          start_time
          end_time
        }
      }
    }
  }
`;
//Our Business
let parent_category = [];
export default function Step2(props) {
  let business_id = localStorage.getItem("Business_id");
  const { handleNext } = props;
  const { data } = useQuery(GET_CATEGORY);

  const [updateBusiness] = useMutation(UPDATE_BUSINESS);
  const [business, setBusiness] = useContext(BusinessContext);
  const [check, setChecked] = useState([]);
  const [preloading, setPreLoading] = useState(false);
  const [loading, setLoading] = useState(false);


  let currentBusiness = business.currentBusiness;
  let isCategory=currentBusiness&&currentBusiness.parent_category_ids

  if (data&&data.getCategory&&!parent_category.length) {
    parent_category = data.getCategory.filter(values =>!values.parant_category_id&&values.category_name);
    DevConsoleLog("parent_category-->",parent_category);
  }

  if(isCategory&&!preloading){
    DevConsoleLog("currentBusiness.parent_category_ids-->",currentBusiness.parent_category_ids);
    setPreLoading(!preloading);
    setChecked(currentBusiness.parent_category_ids);
  }
  
  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };
  const handleToggle = value => () => {
    const seletedItem = check.includes(value)
            ? check.filter(i => i !== value) // remove item
            : [ ...check, value ]; // add item
    setChecked(seletedItem);
  };
  const getActive = (id) => {
    if(!isCategory) return;
    return !!check.find(value =>value===id);
  };

  return (
    <>
      
      <Formik
        initialValues={{ category: '' }}
        onSubmit={() => {
            enableLoading();
            updateBusiness({
              variables: {
                businessID: business_id,
                business: {
                  parent_category_ids: check,
                }
              }
            }).then(res => {
              disableLoading();
              DevConsoleLog(res.data.updateBusiness);
              setBusiness({
                type: "SET_CURRENT_BUSINESS",
                payload: res.data.updateBusiness
              });
              handleNext();
            });
            
          }}
      >
        {({handleSubmit}) => (
          <form onSubmit={handleSubmit}  >
            <div className="my-auto mh-100 text-center rightPanel">
              <div className="text-left mb-6">
                <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose Your Business Below</h1>
              </div>
              {!parent_category.length&&<span className="ml-3 spinner spinner-lg spinner-primary"></span>}
              <div className="row categoryList  scroll scroll-pull">
                {parent_category.map((item) => {
                  return (
                    <>
                    <div className="m-0 _2FwA">
                      <input type="checkbox" id={item.category_name} name="subcategory" className={`checkbx`}  checked={getActive(item._id)} onClick={handleToggle(item._id)} />
                      <label className={`btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column`} for={item.category_name}>
                      <span className="svg-icon svg-icon-3x svg-icon-primary m-auto " >
                            <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/hospital.svg")} />
                          </span>
                          <span className="d-block font-weight-500 text-truncate mt-3 mb-2" >{item.category_name}</span>
                      </label>
                    </div>
                    </>
                  )
                })}
              </div>
              {parent_category.length!==0&&<div className="form-group  flex-wrap flex-center">
                <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" >
                  <span>Next</span>
                  {loading && <span className="ml-3 spinner spinner-white"></span>}
                </button>
              </div>}
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

import React,{useState,useContext} from 'react';
import { Formik } from 'formik';
import { gql, useQuery, useMutation } from "@apollo/client";
import { BusinessContext } from '../BusinessContext';
import { DevConsoleLog } from '../../../../SiteUtill';

const GET_CATEGORY_AND_GET_BUSINESS = gql`
    {
      getCategory{
        _id
        category_name
        parant_category_id
      }
      getBusiness{
        _id
        parent_category_ids
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
  let sub_category = [];
export default function Step3(props) {
  let business_id = localStorage.getItem("Business_id");
  const { handleNext } = props;

  const { data } = useQuery(GET_CATEGORY_AND_GET_BUSINESS);
  const [updateBusiness] = useMutation(UPDATE_BUSINESS);
  const [business, setBusiness] = useContext(BusinessContext);
  const [check, setChecked] = useState([]);
  const [preloading, setPreLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  
  let currentBusiness = business.currentBusiness;
  let isSubCategory=currentBusiness&&currentBusiness.sub_category_ids;

  if (data&&data.getCategory&&isSubCategory) {
    let parentCat=currentBusiness.parent_category_ids;
    sub_category = data.getCategory.filter(values =>values.parant_category_id
      &&values.category_name
      &&parentCat.includes(values.parant_category_id));
    DevConsoleLog("sub_category-->",sub_category);
  }

  if(isSubCategory&&!preloading){
    DevConsoleLog("sub_category-->",currentBusiness.sub_category_ids);
    setPreLoading(!preloading);
    setChecked(currentBusiness.sub_category_ids);
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

  // const getActive = (id) => {
  //   if(!isSubCategory) return"";
  //   const found = check.find(value =>value===id);
  //   return found?"active":"";
  // };
  const getActive = (id) => {
    if(!isSubCategory) return;
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
                  sub_category_ids: check,
                }
              }
            }).then(res => {
              disableLoading();
              setBusiness({
                type: "SET_CURRENT_BUSINESS",
                payload: res.data.updateBusiness
              });
              handleNext();
            });
          }}
      >
        {({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <div className="w-100 mh-100 rightPanel">
              <div className="text-left mb-6">
                <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose your Business types:</h1>
              </div>
              {!sub_category.length&&<span className="ml-3 spinner spinner-lg spinner-primary"></span>}
              <div className="w-100">
                {sub_category.map(item => {
                  return (
                    <div className="d-inline-flex _2FwA">
                      <input type="checkbox" id={item.category_name} name="subcategory" className={`checkbx`}  checked={getActive(item._id)} onClick={handleToggle(item._id)} />
                      <label className="subCategory" for={item.category_name}>
                        <i className="catIcon rounded-circle mr-2">H</i>
                        <span className="chk_txt">{item.category_name}</span>
                      </label>
                    </div>
                  )
                })}
              </div>
              {sub_category.length!==0&&<div className="form-group  flex-wrap flex-center text-center">
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

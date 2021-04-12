
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Formik, Field } from 'formik';
import { BusinessContext } from '../BusinessContext';
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
    updateBusiness(businessID:$businessID,business: $business)  {
      sub_category_ids
      phone_no
    name
   billingAddress
   size
   type
   phone_country
   phone_no
   _id
   acceptTerms
    parent_category_ids
    timezone
    applyWeek
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

export default function Step2(props) {
  const [check, setChecked] = React.useState([]);
  const [business, setBusiness] = React.useContext(BusinessContext);
  let currentBusiness = business.currentBusiness;
  const { data } = useQuery(GET_CATEGORY);
  const { handleNext } = props;
  const [updateBusiness] = useMutation(UPDATE_BUSINESS)
  console.log(data)
  let parent_category = [];
  let sub_category = [];
  let business_id = localStorage.getItem("Business_id");
  if (data !== undefined) {
    data.getCategory.map(values => {
      if (values.parant_category_id === null || values.parent_category === "") {
        parent_category.push(values);
      }
      else {
        sub_category.push(values)
      }
    })
  }
  const [fieldValue, setfieldValue] = React.useState([]);

  //  const handleClick = value => () => {
  //   const currentIndex = check.indexOf(value);

  // };
  let category = [];

  const handleToggle = value => () => {
    const currentIndex = check.indexOf(value);
    // state.Services=[];
    const newChecked = [...check];

    if (currentIndex === -1) {
      newChecked.push(value);

    } else {
      newChecked.splice(currentIndex, 1);

    }

    setChecked(newChecked);
    console.log(check)
    // newChecked.map(function(items,i)
    // {
    //   state.Services[i]=items     
    // },
    // );
  };
  
  if (localStorage.getItem("BackFlag") === "Y") {
    if (currentBusiness) {
      return (
        <>
          <Formik
            initialValues={currentBusiness}
            enableReinitialize
            onSubmit={
              fields => {
                //fields.parent_category_ids=fieldValue;
                //currentBusiness.parent_category_ids.push.apply(currentBusiness.parent_category_ids,check)
                currentBusiness.parent_category_ids.push.apply(currentBusiness.parent_category_ids, check)
                updateBusiness({
                  variables: {
                    businessID: business_id,
                    business: {
                      parent_category_ids: currentBusiness.parent_category_ids,
                    }
                  }
                }).then(res => {
                  console.log(res.data.updateBusiness);
                  //let business_id=res.data.addBusiness._id
                  //localStorage.setItem("Business_id",business_id)
                  setBusiness({
                    type: "SET_CURRENT_BUSINESS",
                    payload: res.data.updateBusiness
                  });
                });
                handleNext()

              }}
          >
            {({ values, errors, touched, handleSubmit, onChange }) => (
              <form onSubmit={handleSubmit}  >
                <div className="my-auto mh-100 text-center rightPanel">
                  <div className="text-left mb-6">
                    <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose Your Business Below</h1>
                  </div>
                  <div className="row categoryList  scroll scroll-pull">
                    {parent_category.map(value => {
                      {currentBusiness.parent_category_ids.map(category => {
                        if(value._id===category) {
                          value.flag=true;
                        }
                      })}
                      return (
                        <>
                          <div className="m-0" >
                            {/* {currentBusiness.parent_category_ids.map(category => {
                              return ( */}
                                <div className={value.flag=== true ? "btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column active" : "btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column"}
                                id="checkbox" onClick={handleToggle(value._id)} tabindex="0">
                                  <span className="svg-icon svg-icon-3x svg-icon-primary m-auto " >
                                    <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/hospital.svg")} />
                                  </span>
                                  <span className="d-block font-weight-500 text-truncate mt-3 mb-2" >{value.category_name}</span>
                                </div>
                              {/* )

                            })} */}



                          </div>

                        </>
                      )
                    })}
                  </div>
                  <div className="form-group  flex-wrap flex-center">
                    <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" >
                      <span>Next</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </>
      );
    }

    else {
      return (
        <>


        </>
      );
    }

  }
  else {
    if (currentBusiness.parent_category_ids !== undefined && currentBusiness.parent_category_ids.length > 0) {
      return (
        <>
          <Formik
            initialValues={currentBusiness}
            onSubmit={
              fields => {
                //fields.parent_category_ids=fieldValue;

                updateBusiness({
                  variables: {
                    businessID: business_id,
                    business: {
                      parent_category_ids: currentBusiness.parent_category_ids,
                    }
                  }
                }).then(res => {
                  console.log(res.data.updateBusiness);
                  //let business_id=res.data.addBusiness._id
                  //localStorage.setItem("Business_id",business_id)
                  setBusiness({
                    type: "SET_CURRENT_BUSINESS",
                    payload: res.data.updateBusiness
                  });
                });
                handleNext()

              }}
          >
            {({ values, errors, touched, handleSubmit, onChange }) => (
              <form onSubmit={handleSubmit}  >
                <div className="my-auto mh-100 text-center rightPanel">
                  <div className="text-left mb-6">
                    <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose Your Business Below</h1>
                  </div>
                  <div className="row categoryList  scroll scroll-pull">
                    {/* {parent_category.map(value => {
                      return (
                        <>
                          <div className="m-0" >
                            {currentBusiness.parent_category_ids.map(category => {
                              return (
                                <div className={value._id === category ? "btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column active" : "btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column"}
                                 id="checkbox" onClick={handleToggle(value._id)} tabindex="0">
                                  <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                                    <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/hospital.svg")} />
                                  </span>
                                  <span className="d-block font-weight-500 text-truncate mt-3 mb-2" >{value.category_name}</span>
                                </div>
                              )

                            })}
                          </div>

                        </>
                      )
                    })} */}
                    {parent_category.map(value => {
                      {currentBusiness.parent_category_ids.map(category => {
                        if(value._id===category) {
                          value.flag=true;
                        }
                      })}
                      return (
                        <>
                          <div className="m-0" >
                            {/* {currentBusiness.parent_category_ids.map(category => {
                              return ( */}
                                <div className={value.flag=== true ? "btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column active" : "btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column"}
                                id="checkbox" onClick={handleToggle(value._id)} tabindex="0">
                                  <span className="svg-icon svg-icon-3x svg-icon-primary m-auto " >
                                    <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/hospital.svg")} />
                                  </span>
                                  <span className="d-block font-weight-500 text-truncate mt-3 mb-2" >{value.category_name}</span>
                                </div>
                              {/* )

                            })} */}



                          </div>

                        </>
                      )
                    })}
                  </div>
                  <div className="form-group  flex-wrap flex-center">
                    <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" >
                      <span>Next</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </>
      );
    }
    else {
      return (
        <>
          <Formik
            initialValues={{ category: '' }}
            onSubmit={
              fields => {
                //fields.parent_category_ids=fieldValue;

                updateBusiness({
                  variables: {
                    businessID: business_id,
                    business: {
                      parent_category_ids: check,
                    }
                  }
                }).then(res => {
                  console.log(res.data.updateBusiness);
                  //let business_id=res.data.addBusiness._id
                  //localStorage.setItem("Business_id",business_id)
                  setBusiness({
                    type: "SET_CURRENT_BUSINESS",
                    payload: res.data.updateBusiness
                  });
                });
                handleNext()

              }}
          >
            {({ values, errors, touched, handleSubmit, onChange }) => (
              <form onSubmit={handleSubmit}  >
                <div className="my-auto mh-100 text-center rightPanel">
                  <div className="text-left mb-6">
                    <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose Your Business Below</h1>
                  </div>
                  <div className="row categoryList  scroll scroll-pull">
                    {parent_category.map(value => {
                      return (
                        <>
                          <div className="m-0" >

                            <div className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column " id="checkbox" onClick={handleToggle(value._id)} tabindex="0">
                              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto " >
                                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/hospital.svg")} />
                              </span>
                              <span className="d-block font-weight-500 text-truncate mt-3 mb-2" >{value.category_name}</span>
                            </div>
                          </div>

                        </>
                      )
                    })}
                  </div>
                  <div className="form-group  flex-wrap flex-center">
                    <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" >
                      <span>Next</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </>
      );
    }

  }
}
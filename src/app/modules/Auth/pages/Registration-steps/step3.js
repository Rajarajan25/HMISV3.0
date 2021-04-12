
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field } from 'formik';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { gql, useQuery, useMutation } from "@apollo/client";
import { BusinessContext } from '../BusinessContext';
const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

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
      updateBusiness(businessID:$businessID,business: $business)  {
       
        sub_category_ids
        phone_no
      name
     billingAddress
     acceptTerms
     size
     type
     phone_country
     phone_no
     _id
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

export default function Step3(props) {
  const [check, setChecked] = React.useState([]);
  const { data } = useQuery(GET_CATEGORY_AND_GET_BUSINESS);
  const [Business, setBusiness] = React.useContext(BusinessContext)
  let currentBusiness = Business.currentBusiness;
  let category = [];
  let business = [];
  let parent_category = [];
  let sub_category = [];
  let subcategory = [];
  let subcategorylst = [];
  const { handleNext } = props;
  const [updateBusiness] = useMutation(UPDATE_BUSINESS)
  let business_id = localStorage.getItem("Business_id");
  if (data !== undefined) {
    category = data.getCategory;
    business = data.getBusiness;
    data.getCategory.map(values => {
      if (values.parant_category_id === null || values.parant_category_id === "") {
        parent_category.push(values);
      }
      else {
        sub_category.push(values)
      }
    })
    // subcategory=sub_category.find(businesses => businesses._id === currentBusiness.parent_category_ids);
    if (currentBusiness.parent_category_ids !== undefined) {
      sub_category.map(valuee => {
        currentBusiness.parent_category_ids.map(valueee => {
          if (valuee.parant_category_id === valueee) {
            subcategory.push(valuee)
          }
        })
      })
    }


  }
  console.log(subcategory)

  const handleToggle = value => () => {

    const currentIndex = check.indexOf(value);
    // state.Services=[];
    const newChecked = [...check];

    if (currentIndex === -1) {
      newChecked.push(value._id);

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
            onSubmit={
              fields => {
                //fields.parent_category_ids=fieldValue;
                currentBusiness.sub_category_ids.push.apply(currentBusiness.sub_category_ids, check)
                updateBusiness({
                  variables: {
                    businessID: business_id,
                    business: {
                      sub_category_ids: currentBusiness.sub_category_ids,
                    }
                  }
                }).then(res => {
                  console.log(res.data.updateBusiness);
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
                <div className="w-100 mh-100 rightPanel">
                  <div className="text-left mb-6">
                    <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose your Salon types:</h1>
                  </div>
                  <div className="w-100">
                    {/* {subcategory.map(val => {
                      return (

                        <div className="d-inline-flex _2FwA">
                          {currentBusiness.sub_category_ids.map(subcat => {
                            return (
                              <>
                                <input type="checkbox" id={val.category_name} name="salon" className="checkbx" checked={val._id === subcat ? true : false} onClick={handleToggle(val)} />
                                <label className="subCategory" for={val.category_name}>
                                  <i className="catIcon rounded-circle mr-2">H</i>
                                  <span className="chk_txt">{val.category_name}</span>
                                </label>
                              </>
                            )
                          })}

                        </div>

                      )
                    })} */}
                    {subcategory.map(val => {
                      {currentBusiness.sub_category_ids.map(subcat => {
                        if(val._id===subcat) {
                          val.flag=true;
                        }
                      })}
                      return (

                        <div className="d-inline-flex _2FwA">
                          {/* {currentBusiness.sub_category_ids.map(subcat => {
                           
                              return ( */}
                                <>
                                  <input type="checkbox" id={val.category_name} name="salon" className="checkbx" checked={val.flag===true ? true : false} onClick={handleToggle(val)} />
                                  <label className="subCategory" for={val.category_name}>
                                    <i className="catIcon rounded-circle mr-2">H</i>
                                    <span className="chk_txt">{val.category_name}</span>
                                  </label>
                                </>
                              {/* )
                           
                            
                          })} */}

                        </div>

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
    if (currentBusiness.sub_category_ids !== undefined && currentBusiness.sub_category_ids.length > 0) {
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
                      sub_category_ids: currentBusiness.sub_category_ids,
                    }
                  }
                }).then(res => {
                  console.log(res.data.updateBusiness);
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
                <div className="w-100 mh-100 rightPanel">
                  <div className="text-left mb-6">
                    <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose your Salon types:</h1>
                  </div>
                  <div className="w-100">
                    {subcategory.map(val => {
                      {currentBusiness.sub_category_ids.map(subcat => {
                        if(val._id===subcat) {
                          val.flag=true;
                        }
                      })}
                      return (

                        <div className="d-inline-flex _2FwA">
                          {/* {currentBusiness.sub_category_ids.map(subcat => {
                           
                              return ( */}
                                <>
                                  <input type="checkbox" id={val.category_name} name="salon" className="checkbx" checked={val.flag===true ? true : false} onClick={handleToggle(val)} />
                                  <label className="subCategory" for={val.category_name}>
                                    <i className="catIcon rounded-circle mr-2">H</i>
                                    <span className="chk_txt">{val.category_name}</span>
                                  </label>
                                </>
                              {/* )
                           
                            
                          })} */}

                        </div>

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
      )
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
                      sub_category_ids: check,
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
                <div className="w-100 mh-100 rightPanel">
                  <div className="text-left mb-6">
                    <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">Choose your Salon types:</h1>
                  </div>
                  <div className="w-100">
                    {subcategory.map(val => {
                      return (

                        <div className="d-inline-flex _2FwA">
                          <input type="checkbox" id={val.category_name} name="salon" className="checkbx" onClick={handleToggle(val)} />
                          <label className="subCategory" for={val.category_name}>
                            <i className="catIcon rounded-circle mr-2">H</i>
                            <span className="chk_txt">{val.category_name}</span>
                          </label>
                        </div>

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

function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <img src="/media/auth-screen/plus_sym.svg" className="mw-100" alt="" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'end',
        }}
        className={'pop_head'}
      >
        <Typography className={'type_pop' + ' ' + classes.typography}>
          <div className="w-100">
            <div class="d-flex">
              <input type="text" className="form-control col" placeholder="Create New Type..." />
              <span className="col-2 mh-100 d-flex p-0 flex-wrap align-content-center justify-content-end cur-poin" onClick={handleClose}></span>
            </div>

          </div>
        </Typography>
      </Popover>
    </div>
  );
}

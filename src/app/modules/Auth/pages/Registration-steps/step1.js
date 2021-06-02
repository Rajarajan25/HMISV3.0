import React, { useState, useMemo, useContext } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import * as auth from "../../_redux/authRedux";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import countryList from "react-select-country-list";
import Select from "react-select";
import { Formik, Field } from "formik";
import { gql, useQuery, useMutation } from "@apollo/client";
import { BusinessContext } from "../BusinessContext";
import LocationSearchInput from "./LocationSearchInput";
import { DevConsoleLog } from "../../../../SiteUtill";
const ADD_BUSINESS = gql`
  mutation addBusiness($business: BusinessInput) {
    addBusiness(business: $business) {
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
      timings {
        timing {
          start_time
          end_time
        }
      }
    }
  }
`;
const GET_BUSINESS = gql`
  {
    getBusiness {
      sub_category_ids
      phone_no
      name
      billingAddress
      size
      type
      phone_country
      phone_no
      _id
      parent_category_ids
      timezone
      applyWeek
      applyMonth
      acceptTerms
      timings {
        timing {
          start_time
          end_time
        }
      }
    }
  }
`;
const UPDATE_BUSINESS = gql`
  mutation updateBusiness($businessID: ID!, $business: BusinessInput) {
    updateBusiness(businessID: $businessID, business: $business) {
      sub_category_ids
      phone_no
      name
      billingAddress
      size
      type
      phone_country
      phone_no
      _id
      parent_category_ids
      acceptTerms
      timezone
      applyWeek
      applyMonth
      timings {
        timing {
          start_time
          end_time
        }
      }
    }
  }
`;
const initialValues = {
  name: "",
  billingAddress: "",
  size: 1,
  type: "",
  phone_country: "",
  phone_no: "",
  acceptTerms: false,
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

function Registration(props) {
  const { intl } = props;
  const { handleNext } = props;
  let business_id = localStorage.getItem("Business_id");
  let formPrefill = localStorage.getItem("BackFlag") === "Y";
  const business_size_options = [
    { value: 100, label: 100 },
    { value: 200, label: 200 },
    { value: 400, label: 400 },
  ];

  const business_type_options = [
    { value: "HO", label: "Head Office" },
    { value: "Branch1", label: "Branch1" },
    { value: "Branch2", label: "Branch2" },
  ];
  const [business, setBusiness] = useContext(BusinessContext);
  const options = useMemo(() => countryList().getData(), []);
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [preloading, setPreLoading] = useState(false);
  const [size, setSize] = useState(business_size_options[0]);
  const [type, setType] = useState(business_type_options[0]);
  const [phone, setPhone] = useState(options[0]);
  const [addBusiness] = useMutation(ADD_BUSINESS);
  const [updateBusiness] = useMutation(UPDATE_BUSINESS);
  const { data } = useQuery(GET_BUSINESS);
  const [formValues, setFormValues] = useState(null);
  const [googleAddress, setGoogleAddress] = useState(null);
  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (props, fieldname) => {
    if (props.touched[fieldname] && props.errors[fieldname]) {
      return "is-invalid";
    }

    if (props.touched[fieldname] && !props.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const handleAddBusiness = (values) => {
    enableLoading();
    let site_id = localStorage.getItem("site_id");
    addBusiness({
      variables: {
        business: {
          type: values.type,
          name: values.name,
          site_id: site_id,
          size: values.size,
          phone_no: values.phone_no,
          billingAddress: values.billingAddress,
          phone_country: values.phone_country,
          acceptTerms: values.acceptTerms,
          street: values.street,
          state: values.state,
          city: values.city,
          zip_code: values.zip_code,
        },
      },
    }).then((res) => {
      disableLoading();
      console.log(res.data.addBusiness);
      let business_id = res.data.addBusiness._id;
      localStorage.setItem("Business_id", business_id);
      setBusiness({
        type: "SET_CURRENT_BUSINESS",
        payload: values,
      });
      handleNext();
    });
  };
  const handleUpdateBisness = (values) => {
    enableLoading();
    updateBusiness({
      variables: {
        businessID: business_id,
        business: {
          type: values.type,
          name: values.name,
          size: values.size,
          phone_no: values.phone_no,
          billingAddress: values.billingAddress,
          phone_country: values.phone_country,
          acceptTerms: values.acceptTerms,
        },
      },
    }).then((res) => {
      console.log(res.data.updateBusiness);
      disableLoading();
      setBusiness({
        type: "SET_CURRENT_BUSINESS",
        payload: values,
      });
      handleNext();
    });
  };
  console.log(business.currentBusiness);
  const [value, setValue] = React.useState("business");
  function handleChanges(event) {
    setValue(event.target.value);
  }

  let currentBusiness = business.currentBusiness;
  if (currentBusiness.size && !preloading) {
    currentBusiness.bussinessType =
      currentBusiness.name !== "" ? "business" : "personal";
    let selectedSize = business_size_options.find(
      (bus) => bus.value === currentBusiness.size
    );
    let selectedType = business_type_options.find(
      (bus) => bus.value === currentBusiness.type
    );
    let selectedPhone = options.find(
      (bus) => bus.value === currentBusiness.phone_country
    );
    let businessType = currentBusiness.name !== "" ? "business" : "personal";
    setFormValues(currentBusiness);
    setSize(selectedSize);
    setType(selectedType);
    setPhone(selectedPhone);
    setPreLoading(!preloading);
    setValue(businessType);
    // setSize(selectedSize)
  }

  const handleLocationChange = (address) => {
    DevConsoleLog("google address--->", address);
    setFormValues(address);
    setGoogleAddress(address);
  };

  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }
  return (
    <>
      <div className="text-left mb-5">
        <h1 className="h2 mb-3 color_3F4772 text-capitalize font-weight-600">
          Business Info:
        </h1>
      </div>
      <div className="business_info">
        <Formik
          initialValues={formValues || initialValues}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            values.billingAddress =
              googleAddress?.fulladdress || formValues?.billingAddress;
            values.name = value === "business" ? values.name : "";
            values.size = size.value;
            values.type = type.value;
            values.phone_country = phone.value;
            formPrefill
              ? handleUpdateBisness(values)
              : handleAddBusiness(values);
          }}
        >
          {(props) => (
            <form
              className="form fv-plugins-bootstrap fv-plugins-framework"
              onSubmit={props.handleSubmit}
              onKeyDown={onKeyDown}
            >
              <div className="mb-2">
                <h2 className="d-block h4 mb-1">Choose your business type?</h2>
                <div className="per_busi">
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">Business Type</FormLabel>
                    <RadioGroup
                      className={classes.group}
                      value={value || "business"}
                      name="bussinessType"
                      onChange={handleChanges}
                    >
                      <FormControlLabel
                        value="personal"
                        control={<Radio />}
                        label="Personal"
                      />
                      <FormControlLabel
                        value="business"
                        control={<Radio />}
                        label="Business"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div className="form-group fv-plugins-icon-container d-flex ">
                <div
                  className={
                    value === "business" ? "info_img " : "info_img d-none"
                  }
                >
                  <img
                    src="/media/auth-screen/identity_icon.svg"
                    className="m-auto mw-100"
                    alt=""
                  />
                </div>
                <div className={value === "business" ? "col " : "col d-none"}>
                  <label
                    className="form-label d-block"
                    for="exampleForm.ControlInput1"
                  >
                    Business Name
                  </label>
                  <Field
                    placeholder="Business Name"
                    type="text"
                    className={`form-control py-5 px-6 ${getInputClasses(
                      props,
                      "fullname"
                    )}`}
                    name="name"
                  />
                  {value === "business" &&
                  props.touched.name &&
                  props.errors.name ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">{props.errors.name}</div>
                    </div>
                  ) : null}
                </div>
              </div>
              {/* end: Fullname */}
              {/* begin: bussiness name */}
              <div className="form-group fv-plugins-icon-container d-flex">
                <div className="info_img">
                  <img
                    src="/media/auth-screen/location_icon.svg"
                    className="m-auto mw-100"
                    alt=""
                  />
                </div>
                <div className="col">
                  {value === "business" ? (
                    <label
                      class="form-label  d-block"
                      for="exampleForm.ControlInput1"
                    >
                      Your Business Address
                    </label>
                  ) : (
                    <label
                      class="form-label  d-block"
                      for="exampleForm.ControlInput1"
                    >
                      Your Address
                    </label>
                  )}
                  <Field
                    placeholder="Business Address"
                    type="text"
                    id="ship-address"
                    autoComplete="off"
                    className={"form-control py-5 px-6"}
                    name="location_name"
                  />
                </div>
              </div>
              {/* end: bussiness name */}
              <div className="d-flex fv-plugins-icon-container">
                <div className="form-group col-6 p-0 d-flex coun_cde">
                  <div className="col">
                    <label
                      class="form-label d-block"
                      for="exampleForm.ControlInput1"
                    >
                      Street
                    </label>
                    <Field
                      type="text"
                      autoComplete="off"
                      className={"form-control py-5 px-6"}
                      name="street"
                    />
                  </div>
                </div>
                <div className="form-group col-6 d-flex coun_cde">
                  <div className="col pr-0">
                    <label
                      class="form-label d-block"
                      for="exampleForm.ControlInput1"
                    >
                      City
                    </label>
                    <Field
                      type="text"
                      autoComplete="off"
                      className={"form-control py-5 px-6"}
                      name="city"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex fv-plugins-icon-container">
                <div className="form-group col-6 p-0 d-flex coun_cde">
                  <div className="col">
                    <label
                      class="form-label d-block"
                      for="exampleForm.ControlInput1"
                    >
                      State
                    </label>
                    <Field
                      type="text"
                      autoComplete="off"
                      className={"form-control py-5 px-6"}
                      name="state"
                    />
                  </div>
                </div>
                <div className="form-group col-6 d-flex coun_cde">
                  <div className="col pr-0">
                    <label
                      class="form-label d-block"
                      for="exampleForm.ControlInput1"
                    >
                      Postal code
                    </label>
                    <Field
                      type="text"
                      autoComplete="off"
                      className={"form-control py-5 px-6"}
                      name="zip_code"
                    />
                  </div>
                </div>
              </div>

              <LocationSearchInput
                callback={handleLocationChange}
                searchField="#ship-address"
              />

              <div className="d-flex fv-plugins-icon-container">
                <div className="form-group col-6 p-0 d-flex coun_cde">
                  <div className="info_img">
                    <img
                      src="/media/auth-screen/feedback_icon.svg"
                      className="m-auto mw-100"
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <label
                      class="form-label d-block"
                      for="exampleForm.ControlInput1"
                    >
                      Business size
                    </label>
                    <FormControl>
                      <Select
                        value={size}
                        options={business_size_options}
                        onChange={setSize}
                      />
                    </FormControl>
                  </div>
                </div>
                <div className="form-group col-6 d-flex coun_cde">
                  <div className="info_img">
                    <img
                      src="/media/auth-screen/branch_icon.svg"
                      className="m-auto mw-100"
                      alt=""
                    />
                  </div>
                  <div className="col pr-0">
                    <label
                      class="form-label d-block"
                      for="exampleForm.ControlInput1"
                    >
                      Type
                    </label>
                    <FormControl>
                      <Select
                        value={type}
                        options={business_type_options}
                        onChange={setType}
                      />
                    </FormControl>
                  </div>
                </div>
              </div>

              <div className="d-flex fv-plugins-icon-container">
                <div className="form-group col-6 p-0 d-flex coun_cde">
                  <div className="info_img">
                    <img
                      src="/media/auth-screen/phone_icon.svg"
                      className="m-auto mw-100"
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <label
                      class="form-label d-block"
                      for="exampleForm.ControlInput1"
                    >
                      Country code
                    </label>
                    <Select
                      value={phone}
                      options={options}
                      onChange={setPhone}
                    />
                  </div>
                </div>
                <div className="form-group col-6">
                  <label
                    class="form-label d-block"
                    for="exampleForm.ControlInput1"
                  >
                    Phone No
                  </label>
                  <Field
                    placeholder="Phone"
                    type="text"
                    className={`form-control py-5 px-6 ${getInputClasses(
                      props,
                      "username"
                    )}`}
                    name="phone_no"
                  />
                  {props.touched.username && props.errors.username ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {props.errors.username}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              {/* begin: Terms and Conditions */}
              <div className="form-group d-flex ch-bx">
                <label className="checkbox mr-auto">
                  <Field type="checkbox" name="acceptTerms" className="m-1" />
                  <span />
                  <Link
                    to="javascript:void(0);"
                    target="_blank"
                    className="mr-1 terms_c"
                    rel="noopener noreferrer"
                  >
                    Show my phone number & address to my clients
                  </Link>
                </label>
                {props.touched.acceptTerms && props.errors.acceptTerms ? (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      {props.errors.acceptTerms}
                    </div>
                  </div>
                ) : null}

                <div className="plus_sym">
                  <img
                    src="/media/auth-screen/plus_sym.svg"
                    className="m-auto mw-100"
                    alt=""
                  />
                </div>
              </div>
              {/* end: Terms and Conditions */}
              <div className="form-group flex-wrap flex-center text-center">
                <button
                  type="submit"
                  className="btn btn-primary sign-btn h-77 font-weight-500 mt-6"
                >
                  <span>Next</span>
                  {loading && (
                    <span className="ml-3 spinner spinner-white"></span>
                  )}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default injectIntl(connect(null, auth.actions)(Registration));

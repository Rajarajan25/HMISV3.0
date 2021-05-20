import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Field, Formik, FieldArray } from 'formik'
import SelectDropDown from './SelectDropDown'
import { DevConsoleLog } from "../SiteUtill";
import {AdvanceServicePriceModel} from "../models/AdvanceServicePriceModel"
const pricetype = [
  { value: 'free', label: 'Free' },
  { value: 'fixed', label: 'Fixed' }
]
const durationtime = [
  { value: 5, label: '5 Mins' },
  { value: 10, label: '10 Mins' },
  { value: 15, label: '15 Mins' },
  { value: 20, label: '20 Mins' },
  { value: 25, label: '25 Mins' },
  { value: 30, label: '30 Mins' },
  { value: 35, label: '35 Mins' },
  { value: 40, label: '40 Mins' },
  { value: 45, label: '45 Mins' },
  { value: 50, label: '50 Mins' },
  { value: 55, label: '55 Mins' },
  { value: 1, label: '1 Hour' }
]


export function Price(props) {
  const { formikValues, setFieldValue } = props
  DevConsoleLog("formikValues-->", formikValues);
  const expandServiceField = () => {
    if(formikValues.payments.service_pricing_by_staff.length==0){
      formikValues.payments.service_pricing_by_staff.push(AdvanceServicePriceModel);
    }
    setFieldValue("payments.isAdvancedPrice",!formikValues.payments.isAdvancedPrice);
  }

  const addServiceField = () => {
    formikValues.payments.service_pricing_by_staff.push(AdvanceServicePriceModel);
  }

  return (
    <div className="clearfix">
      <div className="staff_first staff_second">
        <div className="form-group">
          <div className="d-flex row">
            <div className="col-4">
              <label class="form-label d-block">Price Type</label>
              <div className="re_select">
                <SelectDropDown
                  className='input'
                  onChange={value => setFieldValue('payments.price_type', value.value)}
                  value={formikValues.payments.price_type}
                  options={pricetype}
                />
              </div>
            </div>
            <div className="col-4">
              <label class="form-label d-block">Price (&#2352;)</label>
              <Field placeholder="500" type="text" className={`form-control`} name="payments.retail-price" />
            </div>
            <div className="col-4">
              <label class="form-label d-block">Special Price (&#2352;)</label>
              <Field placeholder="500" type="text" className={`form-control`} name="payments.special-price" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex justify-content-end">
            <div className="btn btn-link" onClick={expandServiceField}>
              <img src={formikValues.payments.isAdvancedPrice?toAbsoluteUrl("/media/patients/minus.svg"):toAbsoluteUrl("/media/patients/add-advanced.svg")} alt="" className="" />
              <span className="color_6B58B6 pl-2 font-weight-500">Advanced Pricing</span>
            </div>
          </div>
        </div>
        {formikValues.payments.isAdvancedPrice? (
          <div>
            <div className="form-group border-bottom">
              <div className="d-flex">
                <label class="staff_title_text">Advanced Pricing Option <span className="font-weight-normal">(Optional)</span></label>
              </div>
            </div>
            <div className="form-group">
              <FieldArray name="payments.service_pricing_by_staff">
                {() => (formikValues.payments.service_pricing_by_staff.map((service_pricing, i) => {
                  return (
                    <div className="d-flex row" key={i}>
                      <div className="col-4">
                        <label class="form-label d-block">Provider/Staff Name</label>
                        <Field placeholder="Gopinath" type="text" className={`form-control`} name={`payments.service_pricing_by_staff.${i}.staff_id`} />
                      </div>
                      <div className="col-3">
                        <label class="form-label d-block">Duration</label>
                        <div className="re_select">
                          <SelectDropDown
                            className='input'
                            name={`payments.service_pricing_by_staff.${i}.duration_minutes`}
                            onChange={value => {
                              console.log("value.value-->", value.value);
                              setFieldValue(`payments.service_pricing_by_staff.${i}.duration_minutes`, value.value)
                            }}
                            value={formikValues.payments.service_pricing_by_staff[i].duration_minutes}
                            options={durationtime}
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <label class="form-label d-block">Price Type</label>
                        <div className="re_select">
                          <SelectDropDown
                            className='input'
                            name={`payments.service_pricing_by_staff.${i}.price_type`}
                            onChange={value => setFieldValue(`payments.service_pricing_by_staff.${i}.price_type`, value.value)}
                            value={service_pricing.price_type}
                            options={pricetype}
                          />
                        </div>
                      </div>
                      <div className="col-2">
                        <label class="form-label d-block">Price (&#2352;)</label>
                        <Field placeholder="500" type="text" className={`form-control`} name={`payments.service_pricing_by_staff.${i}.retail_price`} />
                      </div>
                    </div>
                  );
                }))}
              </FieldArray>
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-end">
                <Link to="#" onClick={addServiceField}>
                  <img src={toAbsoluteUrl("/media/patients/add-advanced.svg")} alt="" className="" />
                  <span className="color_6B58B6 pl-2 font-weight-500">Add</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (<div></div>)}


        <div className="form-group mb-0">
          <div className="d-flex justify-content-end patientButton pos_fix">
            <button type="button" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}


function SelectPrice() {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    group: {
      margin: theme.spacing(1, 0),
    },
  }));
  const classes = useStyles();
  const [value, setValue] = React.useState('female');
  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          name="business"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="free" control={<Radio />} label="Free" />
          <FormControlLabel value="paid" control={<Radio />} label="Paid" />

        </RadioGroup>
      </FormControl>

    </div>
  );
}
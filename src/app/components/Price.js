import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from 'react-select';
import { Field, Formik,FieldArray } from 'formik'
const pricetype = [
  { value: 'free', label: 'Free' },
  { value: 'fixed', label: 'Fixed' }
]
const durationtime = [
  { value: '5mins', label: '5 Mins' },
  { value: '10mins', label: '10 Mins' },
  { value: '15mins', label: '15 Mins' },
  { value: '20mins', label: '20 Mins' },
  { value: '25mins', label: '25 Mins' },
  { value: '30mins', label: '30 Mins' },
  { value: '35mins', label: '35 Mins' },
  { value: '40mins', label: '40 Mins' },
  { value: '45mins', label: '45 Mins' },
  { value: '50mins', label: '50 Mins' },
  { value: '55mins', label: '55 Mins' },
  { value: '1hour', label: '1 Hour' }
]
const buffertime = [
  { value: '5mins', label: '5 Mins' },
  { value: '10mins', label: '10 Mins' },
  { value: '15mins', label: '15 Mins' },
  { value: '20mins', label: '20 Mins' }
]
const availability = [
  { value: 'chat', label: 'Chat' },
  { value: 'call', label: 'Call' },
  { value: 'video', label: 'Video' },
  { value: 'inperson', label: 'In Person' }
]

export function Price(props) {
  const { current } = props
  const [preloading, setPreLoading] = React.useState(false);
  const [priceType, setPriceType] = React.useState(pricetype[0]);
  if (current && !preloading) {
    let selectedPriceType = pricetype.find(dur => dur.value === current.payments.price_type);
    setPriceType(selectedPriceType)
    setPreLoading(!preloading);
  }
  return (
          <div className="clearfix">
            <div className="staff_first staff_second">
              <div className="form-group">
                <div className="d-flex row">
                  <div className="col-4">
                    <label class="form-label d-block">Price Type</label>
                    <div className="re_select">
                      <Select value={priceType}
                        options={pricetype} onChange={setPriceType} />
                    </div>
                  </div>
                  <div className="col-4">
                    <label class="form-label d-block">Price (&#2352;)</label>
                    <Field placeholder="500" type="text" className={`form-control`} name="retail-price" />
                  </div>
                  <div className="col-4">
                    <label class="form-label d-block">Special Price (&#2352;)</label>
                    <Field placeholder="500" type="text" className={`form-control`} name="special-price" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-end">
                  <Link to="#">
                    <img src={toAbsoluteUrl("/media/patients/add-advanced.svg")} alt="" className="" />
                    <span className="color_6B58B6 pl-2 font-weight-500">Advanced Pricing</span>
                  </Link>
                </div>
              </div>
              <div className="form-group border-bottom">
                <div className="d-flex">
                  <label class="staff_title_text">Advanced Pricing Option <span className="font-weight-normal">(Optional)</span></label>
                </div>
              </div>
              
              

                          <div className="form-group">
                <div className="d-flex row">
                  <div className="col-4">
                    <label class="form-label d-block">Provider/Staff Name</label>
                    <Field placeholder="Gopinath" type="text" className={`form-control`} name="staff_name" />
                  </div>
                  <div className="col-3">
                    <label class="form-label d-block">Duration</label>
                    <div className="re_select">
                      <Select options={durationtime} />
                    </div>
                  </div>
                  <div className="col-3">
                    <label class="form-label d-block">Price Type</label>
                    <div className="re_select">
                      <Select options={pricetype} />
                    </div>
                  </div>
                  <div className="col-2">
                    <label class="form-label d-block">Price (&#2352;)</label>
                    <Field placeholder="500" type="text" className={`form-control`} name="retail_price" />
                  </div>
                </div>
              </div>
            
              <div className="form-group">
                <div className="d-flex justify-content-end">
                  <Link to="#">
                    <img src={toAbsoluteUrl("/media/patients/add-advanced.svg")} alt="" className="" />
                    <span className="color_6B58B6 pl-2 font-weight-500">Add</span>
                  </Link>
                </div>
              </div>
              
       
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
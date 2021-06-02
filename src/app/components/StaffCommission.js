import React from 'react';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Field} from 'formik'
export default function StaffCommission (props){
    const {field,current}=props;
    return(
        
        <div>
             {field.staffCommission && <div className="form-group border-bottom">
        <div className="d-flex">
          <label class="staff_title_text">{field.staffCommission}</label>
          <div className="pre_status staff_commission">
              <SwitchLabels />
          </div>
        </div>
      </div>}
      {field.commission&&<div className="form-group">
        <div className="d-flex row">
          <div className="col-6">
            <label class="form-label d-block">{field.commission}</label>
            <Field placeholder="100" type="text" className={`form-control`} name="commission.Commision"/>
          </div>
        </div>
      </div>}
      <div className="form-group">
      {field.serviceTax&&<label class="d-block staff_title_text pb-2">{field.serviceTax}</label>}
        <div className="d-flex row">
        {field.amount &&<div className="col-6">
            <label class="form-label d-block">{field.amount} </label>
            <Field placeholder="100" type="text" className={`form-control`} name="commission.tax_amount"/>
          </div>}
          {field.Percentage &&<div className="col-6">
            <label class="form-label d-block">{field.Percentage}</label>
            <Field placeholder="10%" type="text" className={`form-control`} name="commission.tax_percent"/>
          </div>}
        </div>
      </div>
      <div className="form-group">
        {field.Voucher&&<label class="d-block staff_title_text pb-2">{field.Voucher}</label>}
        <div className="d-flex row">
          {field.VoucherAmount&&<div className="col-6">
          <label class="form-label d-block">{field.VoucherAmount}</label>
            <Field placeholder="100" type="text" className={`form-control`} name="commission.voucher_amount"/>
          </div>}
          {field.VoucherPercent&&<div className="col-6">
          <label class="form-label d-block">{field.VoucherPercent}</label>
            <Field placeholder="10%" type="text" className={`form-control`} name="commission.voucher_percent"/>
          </div>}
        </div>
      </div>
      
        </div>
        
    )
}

export  function SwitchLabels() {
  
    const [state, setState] = React.useState({
      checkedA: true,
    });
  
    const handleChange = name => event => {
      setState({ ...state, [name]: event.target.checked });
    };
  
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
          }
        />
      </FormGroup>
    );
  }
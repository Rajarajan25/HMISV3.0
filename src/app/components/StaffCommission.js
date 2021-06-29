import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Field, FieldArray } from 'formik'
import { CommissionModel } from '../models/CommissionModel';
export default function StaffCommission(props) {
  const { fields, formikValues, setFieldValue } = props;
  return (
    <div>
      <div className="form-group border-bottom">
        <div className="d-flex">
          <label className="staff_title_text">{fields.staffCommission}</label>
          <div className="pre_status staff_commission">
            <SwitchLabels
              label="Active"
              name="is_active"
              value={true}
              checked={formikValues.commission && formikValues.commission.length !== 0 ? true : false}
              onChange={(event, checked) => {
                if(checked){
                  let cm ={...CommissionModel};
                  cm.commission_type = "Set Service Commission";
                  let cmArray=[];
                  cmArray.push(cm);
                  let cm2 = {...CommissionModel};
                  cm2.commission_type = "Set Product Commission";
                  cmArray.push(cm2);
                  //formikValues.commission = [];
                  //formikValues.commission.push(cm);
                  setFieldValue("commission",cmArray);
                }else{
                  setFieldValue("commission",[]);
                }
              }}
            />
          </div>
        </div>
      </div>
      {formikValues.commission && <FieldArray name="commission">
        {() => (formikValues.commission.map((item, i) => {
          return (
            <div className="form-group" key={i}>
              <label className="d-block staff_title_text pb-2">{formikValues.commission[i].commission_type}</label>
              <div className="d-flex row">
                <div className="col-6">
                  <label className="form-label d-block">Amount (र)</label>
                  <Field placeholder="100" type="number" className={`form-control`} name={`commission.${i}.amount`} />
                </div>
                <div className="col-6">
                  <label className="form-label d-block">Percentage (%)</label>
                  <Field placeholder="10%" type="number" className={`form-control`} name={`commission.${i}.percentage`} />
                </div>
              </div>
            </div>
          );
        }))}
      </FieldArray>}

      {/* <div className="form-group">
        <label class="d-block staff_title_text pb-2">{fields.productCommision}</label>
        <div className="d-flex row">
          <div className="col-6">
            <label class="form-label d-block">Amount (र)</label>
            <Field placeholder="100" type="text" className={`form-control`} name="commission.voucher_amount" />
          </div>
          <div className="col-6">
            <label class="form-label d-block">Percentage (%)</label>
            <Field placeholder="10%" type="text" className={`form-control`} name="commission.voucher_percent" />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export function SwitchLabels(props) {
  const { lable } = props;

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch {...props} value="" />
        }
        label={lable}
      />
    </FormGroup>
  );
}
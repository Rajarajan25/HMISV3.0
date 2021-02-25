import React from "react";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import {PatientContext} from '../PatientContext';
export function PatientInvoice() {
  const [patient,setpatient] = React.useContext(PatientContext)
  let currentPatient= patient.currentPatient;
  console.log(currentPatient)
  
if(currentPatient)
{
  
  return (
    <div className="invoice_card w-100">
      <div className="text-center">
        <h2 className="font-size-24 font_weight_bold my-4">Hmis</h2>
        <p className="font-size-16 color_707070 font_weight_bold mb-8">info@hmisservice.com, 9876543210</p>
      </div>
      <div className="row m-0 pb-10">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <p className="font-size-18 font_weight_bold mb-6">Doctor Treatment Invoice</p>
          <div className="d-flex mb-3">
            <span className="font_weight_medium color_707070 mw_130">Invoice Number:</span>
            <span className="font_weight_bold">012345</span>
          </div>
          <div className="d-flex mb-3">
            <span className="font_weight_medium color_707070 mw_130">Billing To:</span>
            <span className="font_weight_bold">{currentPatient.first_name}</span>
          </div>
          <div className="d-flex mb-3">
            <span className="font_weight_medium color_707070 mw_130">Client Address:</span>
            <span className="font_weight_bold">{currentPatient.BillingAddress}</span>
          </div>
          <div className="d-flex mb-3">
            <span className="font_weight_medium color_707070 mw_130">Email:</span>
            <span className="font_weight_bold">{currentPatient.email}</span>
          </div>
          <div className="d-flex mb-3">
            <span className="font_weight_medium color_707070 mw_130">Due Date:</span>
            <span className="font_weight_bold">12th Feb 2021</span>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="d-flex justify-content-end align-items-end h-100">
            <button type="button" className="btn btn-primary">Preview</button>
            <button type="button" className="btn btn-primary">Download</button>
          </div>
        </div>
      </div>
      <Table className="table border-top color_292D34 font_weight_medium font-size-14">
        <thead>
        <tr>
            <th colSpan="6" className="font-size-16 py-5">Invoice Details</th>
          </tr>
          <tr>
            <th>#</th>
            <th>Service</th>
            <th>Qty</th>
            <th>Hours</th>
            <th>Tax INR</th>
            <th>Total Cost INR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>General Checkup</td>
            <td>2</td>
            <td>15 Mins</td>
            <td><span>&#2352;</span> 20</td>
            <td><span>&#2352;</span> 200</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Medicine</td>
            <td>4</td>
            <td>30 Mins</td>
            <td><span>&#2352;</span> 10</td>
            <td><span>&#2352;</span> 100</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="color_707070">Total Cost:</td>
            <td className="font_weight_bold"><span>&#2352;</span> 500</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="color_707070">Total Tax:</td>
            <td className="font_weight_bold"><span>&#2352;</span> 50</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="color_707070">Grand Total:</td>
            <td className="font_weight_bold"><span>&#2352;</span> 550</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
  else{
    return(
      <><img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="400" /></>
    )
  }
}
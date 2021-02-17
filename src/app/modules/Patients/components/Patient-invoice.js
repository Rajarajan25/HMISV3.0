import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Table from '@material-ui/core/Table';

export function PatientInvoice() {
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
            <span className="font_weight_bold">Andrea Jemmiah</span>
          </div>
          <div className="d-flex mb-3">
            <span className="font_weight_medium color_707070 mw_130">Client Address:</span>
            <span className="font_weight_bold">12 Gandhi Nagar, Chennai - 600176</span>
          </div>
          <div className="d-flex mb-3">
            <span className="font_weight_medium color_707070 mw_130">Email:</span>
            <span className="font_weight_bold">Andrea@gmail.com</span>
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
            <th colSpan="6" className="font-size-16 py-3">Invoice Details</th>
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
            <td>&#2352; 20</td>
            <td>200</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Medicine</td>
            <td>4</td>
            <td>30 Mins</td>
            <td>10</td>
            <td>100</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="color_707070">Total Cost:</td>
            <td>100</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="color_707070">Total Tax:</td>
            <td>100</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
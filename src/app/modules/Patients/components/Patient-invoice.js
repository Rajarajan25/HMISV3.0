import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Table from '@material-ui/core/Table';

export function PatientInvoice() {
  return (
    <div className="invoice_card w-100">
      <div className="text-center">
        <h2>HMIS</h2>
        <p>info@hmisservice.com, 9876543210</p>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <p>Doctor Treatment Invoice</p>
          <div className="d-flex">
            <span>Invoice Number:</span>
            <span>012345</span>
          </div>
          <div className="d-flex">
            <span>Invoice Number:</span>
            <span>012345</span>
          </div>
          <div className="d-flex">
            <span>Invoice Number:</span>
            <span>012345</span>
          </div>
          <div className="d-flex">
            <span>Invoice Number:</span>
            <span>012345</span>
          </div>
          <div className="d-flex">
            <span>Invoice Number:</span>
            <span>012345</span>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="d-flex justify-content-end align-items-end h-100">
            <button type="button" className="btn btn-primary">Preview</button>
            <button type="button" className="btn btn-primary">Download</button>
          </div>
        </div>
      </div>
      <Table className="table">
        <thead>
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
        </tbody>
      </Table>
    </div>
  );
}
import React from "react";
import {Table, Image} from "react-bootstrap";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";


export function PatientApponiment() {
  return (
    <div className="d-flex w-100">      
      <Table className="w-100" striped  size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Appoinment Services</th>
            <th>Date</th>
            <th>Paid</th>
            <th>Rate</th>
            <th>Invoiced</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image 
                className="appoinmentIcon rounded-circle"
                src={toAbsoluteUrl("/media/users/300_20.jpg")}
                alt="service type" 
              />
            </td>
            <td>
              <div className="d-flex flex-column">
                <strong>Acupunture</strong>
                <span>ID: 12345</span>
              </div>
            </td>
            <td>Nov 5, 2020</td>
            <td><span className="paymentStatus">x</span></td>
            <td>Rs 500</td>
            <td><span className="paymentStatus">x</span></td>
            <td>10Am</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
import React from "react";
import {Table, Image} from "react-bootstrap";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";


export function PatientApponiment() {
  return (
    <div className="d-flex w-100 patientAppoinment">      
      <Table className="w-100 text-center" striped  size="sm" cellSpacing="10">
        <thead>
          <tr>
            <th colSpan="2" className="text-left">Appoinment Services</th>
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
              <span className="appoinmentIcon rounded-circle">
                <Image 
                 
                  src={toAbsoluteUrl("/media/patients/acupunture.svg")}
                  alt="service type" 
                />
              </span>              
            </td>
            <td className="text-left">
              <div className="d-flex flex-column">
                <strong>Acupunture</strong>
                <span className="font-size-12">ID: 12345</span>
              </div>
            </td>
            <td>Nov 5, 2020</td>
            <td>
              <span className="paymentStatus paid rounded-circle">
                <Image                  
                 src={toAbsoluteUrl("/media/patients/paid.svg")}
                 alt="service type" 
                />
              </span>
            </td>
            <td>Rs 500</td>
            <td>              
              <span className="paymentStatus paid rounded-circle">
                <Image                  
                 src={toAbsoluteUrl("/media/patients/paid.svg")}
                 alt="service type" 
                />
              </span>
            </td>
            <td>10 Am</td>
          </tr>
          <tr>
            <td>
              <span className="appoinmentIcon rounded-circle">
                <Image 
                 
                  src={toAbsoluteUrl("/media/patients/dental.svg")}
                  alt="service type" 
                />
              </span>
            </td>
            <td className="text-left">
              <div className="d-flex flex-column">
                <strong>Acupunture</strong>
                <span className="font-size-12">ID: 12345</span>
              </div>
            </td>
            <td>Nov 5, 2020</td>
            <td>              
              <span className="paymentStatus unpaid rounded-circle">
                <Image                  
                 src={toAbsoluteUrl("/media/patients/unpaid.svg")}
                 alt="service type" 
                />
              </span>
            </td>
            <td>Rs 500</td>
            <td>              
              <span className="paymentStatus paid rounded-circle">
                <Image                  
                 src={toAbsoluteUrl("/media/patients/paid.svg")}
                 alt="service type" 
                />
              </span>
            </td>
            <td>10 Am</td>
          </tr>
          <tr>
            <td>
              <span className="appoinmentIcon rounded-circle">
                <Image 
                 
                  src={toAbsoluteUrl("/media/patients/hospital.svg")}
                  alt="service type" 
                />
              </span>
            </td>
            <td className="text-left">
              <div className="d-flex flex-column">
                <strong>Acupunture</strong>
                <span className="font-size-12">ID: 12345</span>
              </div>
            </td>
            <td>Nov 5, 2020</td>
            <td>              
              <span className="paymentStatus paid rounded-circle">
                <Image                  
                 src={toAbsoluteUrl("/media/patients/paid.svg")}
                 alt="service type" 
                />
              </span>
            </td>
            <td>Rs 500</td>
            <td>              
              <span className="paymentStatus paid rounded-circle">
                <Image                  
                 src={toAbsoluteUrl("/media/patients/paid.svg")}
                 alt="service type" 
                />
              </span>
            </td>
            <td>10 Am</td>
          </tr>
          <tr>
            <td>
              <span className="appoinmentIcon rounded-circle">
                <Image 
                 
                  src={toAbsoluteUrl("/media/patients/general-checkup.svg")}
                  alt="service type" 
                />
              </span>
            </td>
            <td className="text-left">
              <div className="d-flex flex-column">
                <strong>Acupunture</strong>
                <span className="font-size-12">ID: 12345</span>
              </div>
            </td>
            <td>Nov 5, 2020</td>
            <td>              
              <span className="paymentStatus paid rounded-circle">
                <Image                  
                 src={toAbsoluteUrl("/media/patients/paid.svg")}
                 alt="service type" 
                />
              </span>
            </td>
            <td>Rs 500</td>
            <td>              
              <span className="paymentStatus paid rounded-circle">
                <Image                  
                 src={toAbsoluteUrl("/media/patients/paid.svg")}
                 alt="service type" 
                />
              </span>
            </td>
            <td>10 Am</td>
          </tr>
          <tr>
            <td>
              <span className="appoinmentIcon rounded-circle">
              <Image 
               
                src={toAbsoluteUrl("/media/patients/medician.svg")}
                alt="service type" 
              />
              </span>
            </td>
            <td className="text-left">
              <div className="d-flex flex-column">
                <strong>Acupunture</strong>
                <span className="font-size-12">ID: 12345</span>
              </div>
            </td>
            <td>Nov 5, 2020</td>
            <td>              
              <span className="paymentStatus paid rounded-circle">
                <Image                  
                 src={toAbsoluteUrl("/media/patients/paid.svg")}
                 alt="service type" 
                />
              </span>
            </td>
            <td>Rs 500</td>
            <td>              
              <span className="paymentStatus paid rounded-circle">
                <Image                  
                 src={toAbsoluteUrl("/media/patients/paid.svg")}
                 alt="service type" 
                />
              </span>
            </td>
            <td>10 Am</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
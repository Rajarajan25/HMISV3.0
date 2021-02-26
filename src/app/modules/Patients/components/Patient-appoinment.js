import React from "react";
import {Table, Image} from "react-bootstrap";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import {PatientContext} from '../PatientContext';
export function PatientApponiment() {
 
  const [patient,setpatient] = React.useContext(PatientContext)
  let currentPatient= patient.currentPatient;
  console.log(currentPatient)
  
if(currentPatient)

{
  if(currentPatient.appointment)
  {
    return(
 
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
           {currentPatient.appointment.map(values=>{
             return(
               <>
               <tr className="no_shadow">
              <td colSpan="7"></td>
            </tr>
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
                  <strong>{values.name}</strong>
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
               </>
             )
            
           })}
            
            <tr className="no_shadow">
              <td colSpan="7"></td>
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
                  <strong>Hospital</strong>
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
            <tr className="no_shadow">
              <td colSpan="7"></td>
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
                  <strong>Dental</strong>
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
            <tr className="no_shadow">
              <td colSpan="7"></td>
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
                  <strong>General Check Up</strong>
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
            <tr className="no_shadow">
              <td colSpan="7"></td>
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
                  <strong>Medicine</strong>
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
            <tr className="no_shadow">
              <td colSpan="7"></td>
            </tr>
            <tr>
              <td>
                <span className="appoinmentIcon rounded-circle">
                <Image 
                 
                  src={toAbsoluteUrl("/media/patients/skine-care.svg")}
                  alt="service type" 
                />
                </span>
              </td>
              <td className="text-left">
                <div className="d-flex flex-column">
                  <strong>Skin Care</strong>
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
            <tr className="no_shadow">
              <td colSpan="7"></td>
            </tr>
            <tr>
              <td>
                <span className="appoinmentIcon rounded-circle">
                <Image 
                 
                  src={toAbsoluteUrl("/media/patients/wellness.svg")}
                  alt="service type" 
                />
                </span>
              </td>
              <td className="text-left">
                <div className="d-flex flex-column">
                  <strong>Wellness Center</strong>
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
            <tr className="no_shadow">
              <td colSpan="7"></td>
            </tr>
            <tr>
              <td>
                <span className="appoinmentIcon rounded-circle">
                <Image 
                 
                  src={toAbsoluteUrl("/media/patients/yoga.svg")}
                  alt="service type" 
                />
                </span>
              </td>
              <td className="text-left">
                <div className="d-flex flex-column">
                  <strong>Yoga</strong>
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
  else{
    return(
      <> return(
 
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
             
              
              <tr className="no_shadow">
                <td colSpan="7"></td>
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
                    <strong>Hospital</strong>
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
              <tr className="no_shadow">
                <td colSpan="7"></td>
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
                    <strong>Dental</strong>
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
              <tr className="no_shadow">
                <td colSpan="7"></td>
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
                    <strong>General Check Up</strong>
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
              <tr className="no_shadow">
                <td colSpan="7"></td>
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
                    <strong>Medicine</strong>
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
              <tr className="no_shadow">
                <td colSpan="7"></td>
              </tr>
              <tr>
                <td>
                  <span className="appoinmentIcon rounded-circle">
                  <Image 
                   
                    src={toAbsoluteUrl("/media/patients/skine-care.svg")}
                    alt="service type" 
                  />
                  </span>
                </td>
                <td className="text-left">
                  <div className="d-flex flex-column">
                    <strong>Skin Care</strong>
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
              <tr className="no_shadow">
                <td colSpan="7"></td>
              </tr>
              <tr>
                <td>
                  <span className="appoinmentIcon rounded-circle">
                  <Image 
                   
                    src={toAbsoluteUrl("/media/patients/wellness.svg")}
                    alt="service type" 
                  />
                  </span>
                </td>
                <td className="text-left">
                  <div className="d-flex flex-column">
                    <strong>Wellness Center</strong>
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
              <tr className="no_shadow">
                <td colSpan="7"></td>
              </tr>
              <tr>
                <td>
                  <span className="appoinmentIcon rounded-circle">
                  <Image 
                   
                    src={toAbsoluteUrl("/media/patients/yoga.svg")}
                    alt="service type" 
                  />
                  </span>
                </td>
                <td className="text-left">
                  <div className="d-flex flex-column">
                    <strong>Yoga</strong>
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
      );</>
    )
  }
}
else{
  return(
    <><img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="400" /></>
  )
}
}
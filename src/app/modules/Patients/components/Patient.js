import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import {  useMutation,useQuery, useLazyQuery } from "@apollo/client";
import { ADD_USER,GET_ALL_USER,GET_USER} from "../query/graphql";
import {PatientContext} from '../PatientContext'
import usestaffs from '../InfiniteList.hooksOriginal'
export function PatientList() {
  const { staffs, loading, loadMore, hasNextPage } = usestaffs()
  console.log(staffs)
  React.useEffect(() => {
    if (loading === false && staffs) {
      setpatient({
        type: "SETSTATE_PATIENT",
        payload: staffs,
      });
    }
  }, [loading]);
  const [patient,setpatient]= React.useContext(PatientContext);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  let currentPatient= patient.currentPatient;
  const handleClick=(_id)=>{
    
      let service= patient.listPatient.find(service => service._id === _id);
      setpatient({
        type: "SET_CURRENT_PATIENT",
        payload: service
      });

  }
  if(staffs!==undefined)
  {
    return (
     <>
        {patient.listPatient.map(value => {
          return (
            <>
              <div className="d-flex align-items-center flex-wrap patientsList card_bg" selected={selectedIndex === value._id}  key={value._id} button={value._id} onClick={(event) => { handleClick(value._id)}}>
                <div className="d-flex w-100">

                  <div className="symbol symbol-50 symbol-light">
                    <span className="symbol-label">
                      <img
                        alt="patient image"
                        className="mh-100 rounded-circle align-self-center"
                        src={toAbsoluteUrl("/media/users/300_21.jpg")}
                      />
                    </span>
                  </div>
                  <div className="d-flex flex-column w-100">
                    <div className="d-flex mb-1">
                      <Link
                        to="#"
                        className="font-weight-500 font-size-14 userName"
                      >
                        {value.name}
                      </Link>
                      <span className="my-auto ml-auto font-size-12">Nov 4, 2020</span>
                    </div>
                    <div className="d-flex font-size-12">
                      <span className="status pl-3 online">Active</span>
                      <span className="my-auto ml-auto">10.30 AM</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column text-right">
                    <Link to="#" className="my-auto ml-2"><i className="ki ki-bold-more-ver font-size-18"></i></Link>
                  </div>
                </div>
              </div>

            </>
          );
        })}
      </>
    );
  }
  else {
    return (
      <><img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="400" /></>
    )
  }

}

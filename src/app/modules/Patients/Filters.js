import React from 'react';
import {Filter} from '../../components/Filter'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {ServiceSlice} from "../Patients/components/ServiceSlice";
const {actions} = ServiceSlice;
export  function Filters(){
  const dispatch = useDispatch();
  const { currentState } = useSelector(
    (state) => ({ currentState: state.service }),
    shallowEqual
  );

  const { listService, currentService } = currentState;
    const fields = [
        {
         dataField: 'name',
         dataType: 'string'
       }, {
         caption: 'Cost',
         dataField: 'cost',
         dataType: 'number',
         format: 'currency'
       }
     ];
    const handleDataSource =(values)=>{
      dispatch(actions.serviceFetched(values));

    }
    return(
        <Filter value={listService} handleDataSource={handleDataSource} fields={fields} placeholder="Service Search"/>
    )
}

  
   
  
import React from 'react';
import {ServiceContext} from './components/ServiceContext';
import {Filter} from '../../components/Filter'

export  function Filters(){
    
    const [service,setService]=React.useContext(ServiceContext);
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
        setService({
            type: "SETSTATE_SERVICE",
            payload: values
          });
    }
    return(
        <Filter value={service.listService} handleDataSource={handleDataSource} fields={fields}/>
    )
}

  
   
  
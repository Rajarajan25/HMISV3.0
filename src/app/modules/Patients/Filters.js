import React from 'react';
import {ServiceContext} from './components/ServiceContext';
import {Filter} from '../../components/Filter'

export  function Filters(){
    const [service,setService]=React.useContext(ServiceContext);
    const handleDataSource =(values)=>{
        setService({
            type: "SETSTATE_SERVICE",
            payload: values
          });
    }
    return(
        <Filter value={service.listService} handleDataSource={handleDataSource}/>
    )
}
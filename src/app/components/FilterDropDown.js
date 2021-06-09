import React from 'react';
import FilterQuery from './FilterQuery'
const duedate = [
    { value: 'duedate', label: 'Due Date' },
    { value: 'date', label: 'Date' },
  ]
  
  const Isdate = [
    { value: 'is', label: 'Is' },
    { value: 'is1', label: 'Is1' },
  ]
  
  const Tom = [
    { value: 'tommorrow', label: 'Tommorrow' },
    { value: 'today', label: 'Today' },
  ]
  
export function FilterDropDown(props) {
  const {value,handleDataSource,fields}=props;
    return <>
        {/*begin::Navigation*/}
       <FilterQuery value={value} handleDataSource={handleDataSource} fields={fields}/>
        {/*end::Navigation*/}
  
    </>
  }
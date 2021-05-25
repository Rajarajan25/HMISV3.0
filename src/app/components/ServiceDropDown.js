import React from 'react';
import Select from 'react-select';
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
  
export function ServiceDropDown() {
    return <>
        {/*begin::Navigation*/}
       <FilterQuery />
        {/*end::Navigation*/}
  
    </>
  }
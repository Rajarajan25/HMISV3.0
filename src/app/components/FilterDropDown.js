import React from 'react';
import FilterQuery from './FilterQuery'
import PropTypes from 'prop-types';
  
export function FilterDropDown(props) {
  const {value,handleDataSource,fields}=props;
    return <>
        {/*begin::Navigation*/}
       <FilterQuery value={value} handleDataSource={handleDataSource} fields={fields}/>
        {/*end::Navigation*/}
  
    </>
  }

  FilterDropDown.propTypes={
    value:PropTypes.string,
    fields:PropTypes.array,
    handleDataSource:PropTypes.func,
  }
  
  FilterDropDown.propTypes={
    children:PropTypes.element.isRequired
  }
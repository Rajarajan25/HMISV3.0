import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText
} from '@material-ui/core';

export default function CheckboxField1(props) {
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  function _onChange(e) {
    setValue(e.target.checked);
  }

  return (
    // <FormControl {...rest}>
    //   <FormControlLabel
    //     value={field.checked}
    //     checked={field.checked}
    //     control={<input type="checkbox" {...field} onChange={_onChange} id="hair" className="checkbx"/>}
    //     label={label}
    //   />
    //   {_renderHelperText()}
    // </FormControl>
    <input type="checkbox" id="nail" {...field} {...rest} value={field.checked} checked={field.checked}/>
  );
}

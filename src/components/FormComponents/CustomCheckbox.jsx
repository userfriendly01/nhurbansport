import React from 'react';
import {
  Checkbox,
  FormControlLabel
} from '@material-ui/core'

const CustomCheckbox = ({
  label,
  form,
  setForm,
  checked,
  id
}) => {

  const handleCheckBox = event => {
    const key = event.target.value;
    const value = !form[id];
    const updatedObject = {
      ...form
    }
    updatedObject[key] = value;
    setForm(updatedObject);
  }

  console.log("Here's the key: ", id);
  return (
    <FormControlLabel
      value={id}
      control={
        <Checkbox 
          color="primary" 
          checked={checked}
          onChange={handleCheckBox}
        />}
      label={label}
      labelPlacement="end"
    />
  );
}

export default CustomCheckbox;
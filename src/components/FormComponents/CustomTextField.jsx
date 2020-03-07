import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const StyledTextField = styled(TextField)`
  width: 200;
  margin: 20;
`

const CustomTextField = ({
  form,
  setForm,
  id,
  label,
  margin
}) => {
  
  const handleChange = event => {
    const key = event.target.id;
    const value = event.target.value;
    const updatedObject = {
      ...form
    }
    updatedObject[key] = value;
    setForm(updatedObject);
  };
  return (
    <StyledTextField 
      id={id}
      value={form[id]}
      label={label}
      margin={margin ? margin : "normal"}
      onChange={handleChange}
      />
  )
}

export default CustomTextField;
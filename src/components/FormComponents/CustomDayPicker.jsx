import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  width: 200;
  margin: 20;
`
const CustomDayPicker = ({
  label,
  form,
  setForm,
  id
}) => {

  const handleDateChange = date => {
    const key = id;
    const value = date;
    const updatedObject = {
      ...form
    }
    updatedObject[key] = value.toLocaleDateString();
    setForm(updatedObject);
  }

  return (
    <DayPickerInput 
      id={id}
      value={form[id]}
      onDayChange={handleDateChange} 
      component={props => <StyledTextField {...props}
        label={label}
        style={{marginRight: "70px"}}
      />}
    /> 
  );
}

export default CustomDayPicker;
import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import dateFnsFormat from 'date-fns/format';
import { parse } from 'date-fns';
import 'react-day-picker/lib/style.css';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';


const StyledTextField = styled(TextField)`
  width: 200;
  margin: 20;
  color: black;
  background-color: white;
`
const CustomDayPicker = ({
  label,
  onChangeFunction,
  value
}) => {


  const formatDate = date => {
    const format ="iiii, MMMM do";
    return dateFnsFormat(date, format);
  }

  const parseDate = dateString => {
    const parseFormat = "E MMM dd yyyy"
    return parse(dateString, parseFormat, new Date());
  }

  return (
    <DayPickerInput 
      formatDate={formatDate}
      // format={format}
      value={value ? parseDate(value) : null}
      onDayChange={onChangeFunction} 
      component={props => <StyledTextField {...props}
        label={label ? label : null}
        style={{marginRight: "70px"}}
      />}
    /> 
  );
}

export default CustomDayPicker;
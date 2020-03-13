import React, { useState } from 'react';
import Select from 'react-select';
import {
  Wrapper 
} from '../../components';
import styled from "styled-components"

const StandardDropDown = ({
  options,
  updateFunction,
  value,
  props,
  styles
}) => {

  const [ selectedValue, setSelectedValue ] = useState(value ? value : null);

  const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    width: ${styles ? styles.width : null };
    margin: 0;
  `

  const StyledLabel = styled(Wrapper)`
    font-size: 14;
    margin: 0 0 -10 0;
    color: grey;
  `
  
  const validateProp = prop => {
    if(props){
      return props[prop] ? props[prop] : null;
    } else{
      return null
    }
  }
  
  const customStyles = { 
    menu: base => ({ ...base, width: styles ? styles.width : null }),
    container: base => ({ ...base, width: styles ? styles.width : null, margin: 10 })
  }

  const handleUpdate = selection => {
    setSelectedValue(selection);
    updateFunction(selection);
  }
  
    return (
      <StyledWrapper>
        <StyledLabel>{validateProp("label")}</StyledLabel>
      <Select
        styles={customStyles}
        isSearchable={validateProp("isSearchable")}
        placeholder={validateProp("placeholder")}
        value={selectedValue}
        noOptionsMessage={validateProp("noOptionMessage")}
        options={options}
        onChange={handleUpdate}
      />
      </StyledWrapper>
    );
}

export default StandardDropDown;
import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import styled from "styled-components";
import { Wrapper} from "../../components"

const CreateDropDown = ({
  options,
  updateFunction,
  addNewFunction,
  value,
  props,
  styles
}) => {
  
  const [ selectedValue, setSelectedValue ] = useState(value ? value : null);

  const StyledWrapper = styled(Wrapper)`
  flex-direction: column;
  width: ${styles.width};
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
    <>
    {validateProp("label") ?
      <StyledWrapper>
        <StyledLabel>{validateProp("label")}</StyledLabel>
        <CreatableSelect
          styles={customStyles}
          isClearable= {validateProp("isClearable")}
          isSearchable= {validateProp("isSearchable")}
          placeholder={validateProp("placeholder")}
          value={selectedValue}
          noOptionsMessage={validateProp("noOptionMessage")}
          options={options}
          onChange={handleUpdate}
          onCreateOption={addNewFunction}
        />
      </StyledWrapper>
    : 
      <CreatableSelect
        styles={customStyles}
        isClearable= {validateProp("isClearable")}
        isSearchable= {validateProp("isSearchable")}
        placeholder={validateProp("placeholder")}
        value={selectedValue}
        noOptionsMessage={validateProp("noOptionMessage")}
        options={options}
        onChange={handleUpdate}
        onCreateOption={addNewFunction}
      />
      }
    </>
  );
}

export default CreateDropDown;
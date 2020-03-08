import React from 'react';
import CreatableSelect from 'react-select/creatable';

const CreateDropDown = ({
  options,
  label,
  value,
  placeholder,
  customOnChangeFunction,
  addNewFunction,
  optionLabelKey,
  optionValueKey,
  width
}) => {
  
  const isCustom = customOnChangeFunction ? customOnChangeFunction : false;

  const generateOptions = () => {
    const formattedOptions = [];
    options.map(option => {
      formattedOptions.push({
        label: option[optionLabelKey],
        value: option[optionValueKey]
      });
    });
    return formattedOptions
  };

  const customStyles = { 
    menu: base => ({ ...base, width: width }),
    container: base => ({ ...base, width: width, margin: 10 })
  }

  const handleChange = (newValue, actionMeta) => {
    // console.group('Value Changed');
    // console.log(newValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
  };
  const handleInputChange = (inputValue, actionMeta) => {
    // console.group('Input Changed');
    // console.log(inputValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
  };
console.log("Value", value)
    return (
      <CreatableSelect
        styles={customStyles}
        isClearable
        value={value}
        placeholder={placeholder}
        options={generateOptions()}
        onChange={isCustom ? customOnChangeFunction : handleChange}
        // onInputChange={handleInputChange}
        onCreateOption={addNewFunction}
      />
    );
}

export default CreateDropDown;
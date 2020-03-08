import React from 'react';
import CreatableSelect from 'react-select/creatable';

const CreateDropDown = (props) => {
  const options = props.options ? props.options : null;
  const optionLabelKey = props.label ? props.label : null;
  const optionValueKey = props.value ? props.value : null;
  const addNewFunction = props.addNewFunction ? props.addNewFunction : null;

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
    menu: base => ({ ...base, width: props.width }),
    container: base => ({ ...base, width: props.width, margin: 10 })
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

    return (
      <CreatableSelect
        styles={customStyles}
        isClearable
        options={generateOptions()}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onCreateOption={addNewFunction}
      />
    );
}

export default CreateDropDown;
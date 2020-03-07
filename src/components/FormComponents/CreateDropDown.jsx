import React from 'react';
import CreatableSelect from 'react-select/creatable';

const CreateDropDown = (props) => {
  const options = props.options ? props.options : null;
  const optionLabelKey = props.label ? props.label : null;
  const optionValueKey = props.value ? props.value : null;
  const addNewFunction = props.addNewFunction ? props.addNewFunction : null;

  const generateOptions = () => {
    console.group("DropDown Evaluation");
    console.log("Label Key: ", optionLabelKey);
    console.log("Value Key: ", optionValueKey);
    console.groupEnd();
    const formattedOptions = [];
    options.map(option => {
      console.group("DropDown Evaluation Per Option");
      console.log("Label: ", option[optionLabelKey]);
      console.log("Value: ", option[optionValueKey]);
      console.groupEnd();
      formattedOptions.push({
        label: option[optionLabelKey],
        value: option[optionValueKey].toLowerCase()
      });
    });
    return formattedOptions
  };

  const customStyles = { 
    menu: base => ({ ...base, width: props.width }),
    container: base => ({ ...base, width: props.width, margin: 10 })
  }

  const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
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
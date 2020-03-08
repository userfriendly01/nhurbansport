import React from 'react';
import Select from 'react-select';

const StandardDropDown = props => {
  const options = props.options ? props.options : null;
  const optionLabelKey = props.label ? props.label : null;
  const optionValueKey = props.value ? props.value : null;
  const placeholder = props.placeholder ? props.placeholder : null;
  const noOptionMessage = props.noOptionMessage ? props.noOptionMessage : null;
  const updateFunction = props.updateFunction ? props.updateFunction : null;

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
    updateFunction(newValue);
  };

    return (
      <Select
        styles={customStyles}
        isSearchable={props.isSearchable}
        options={generateOptions()}
        onChange={handleChange}
        placeholder={placeholder}
        noOptionsMessage={noOptionMessage ? () => noOptionMessage : null}
      />
    );
}

export default StandardDropDown;
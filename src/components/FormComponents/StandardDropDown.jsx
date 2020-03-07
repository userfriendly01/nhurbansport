import React from 'react';
import Select from 'react-select';

const StandardDropDown = props => {
  const options = props.options ? props.options : null;
  const updateFunction = props.updateFunction ? props.updateFunction : null;


  const generateOptions = () => {
    const formattedOptions = [];
    console.log("The Standard Options are: ", options);
    options.map(label => {
      formattedOptions.push({
        label,
        value: label.toLowerCase().replace(/\W/g, '')
      });
    });
    console.log("Options List Looks Like: ", formattedOptions);
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
    updateFunction(newValue);
  };

    return (
      <Select
        styles={customStyles}
        isSearchable={props.isSearchable}
        options={generateOptions()}
        onChange={handleChange}
      />
    );
}

export default StandardDropDown;
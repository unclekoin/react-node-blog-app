import React from 'react';
import Select from 'react-select';

const MultiSelect = ({ name, options, onChange, optionsDefault = [] }) => {

  const handleChange = (value) => {
    onChange(value.map((item) => item.value));
  };

  return (
    <Select
      value={optionsDefault}
      options={options}
      className="multi-select"
      classNamePrefix="multi-select"
      placeholder="Выбрать теги..."
      name={name}
      onChange={handleChange}
      isMulti
      closeMenuOnSelect={false}
    />
  );
};

export default MultiSelect;

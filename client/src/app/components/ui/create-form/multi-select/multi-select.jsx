import React from 'react';
import Select from 'react-select';

const MultiSelect = ({ name, options, onChange, optionsDefault = [] }) => {
  const defaultValue = options.filter((option) =>
  optionsDefault.includes(option.value)
  );

  console.log(defaultValue);

  const handleChange = (value) => {
    onChange(value.map((item) => item.value));
  };

  return (
    <Select
      value={defaultValue}
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

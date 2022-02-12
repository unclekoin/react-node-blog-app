import React from 'react';
import { checkConfig } from '../../../utils';

const InputGroup = ({
  id,
  name,
  type = 'text',
  cls = '',
  placeholder,
  register,
  errors = {},
}) => {
  return (
    <div className="input-group">
      <label
        className={`input-group__label${
          cls ? ` input-group__label-${cls}` : ''
        }`}
        htmlFor={id}
      >
        <input
          className={`input-group__input${
            errors[name]?.message ? ' input-group__input-danger' : ''
          } `}
          type={type}
          id={id}
          name={name}
          placeholder={type !== 'file' ? placeholder : ''}
          {...register(name, checkConfig(name))}
        />
        {type === 'file' ? placeholder : ''}
      </label>
      {errors[name] && (
        <span className="input-group__error">{errors[name].message}</span>
      )}
    </div>
  );
};

export default InputGroup;

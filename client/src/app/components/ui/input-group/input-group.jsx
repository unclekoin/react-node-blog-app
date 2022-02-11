import React from 'react'

const InputGroup = ({ id, name, type, error }) => {
  return (
    <div className="input-group">
        <label className="input-group__label" htmlFor="">
          Имя
        </label>
        <input className="input-group__input" type="text" />
        <span className="input-group__error"></span>
      </div>
  )
}

export default InputGroup;
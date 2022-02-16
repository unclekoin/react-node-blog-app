import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { nanoid } from 'nanoid';
import TypesMenu from './types-menu/types-menu';
import CreateFormInputGroup from './create-form-input-group/create-form-input-group';

const CreateForm = () => {
  const [isTypeMenuOpen, setTypeMenuOpen] = useState(false);
  const [typesList, setTypesList] = useState([]);
  const [data, setData, sections, setSections, title, setTitle] =
    useOutletContext();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const toggleTypesMenu = () => {
    setTypeMenuOpen((prevState) => !prevState);
  };

  const addInput = (type) => {
    setTypesList((prevState) => [...prevState, type]);
    setTypeMenuOpen((prevState) => !prevState);
    console.log(type);
  };

  return (
    <div className="create-form">
      <input
        onChange={onTitleChange}
        autoFocus
        value={title}
        className="create-form__title-input"
        type="text"
        placeholder="Введите заголовок..."
      />
      {typesList.length
        ? typesList.map((type, index) => (
            <CreateFormInputGroup key={nanoid()} type={type} />
          ))
        : null}
      <div className="create-form__buttons">
        <TypesMenu isOpen={isTypeMenuOpen} addInput={addInput} />
        <i
          onClick={toggleTypesMenu}
          className={`bi bi-${
            isTypeMenuOpen ? 'x' : 'plus'
          }-circle create-form__add-input`}
          role="button"
        ></i>
      </div>
    </div>
  );
};

export default CreateForm;

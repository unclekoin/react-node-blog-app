import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import TypesMenu from './types-menu/types-menu';
import CreateFormInputGroup from './create-form-input-group/create-form-input-group';

const CreateForm = () => {
  const [isTypeMenuOpen, setTypeMenuOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [typeFieldList, setTypesFieldList, data, setData] =
    useOutletContext();

  const handleTitleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const toggleTypesMenu = () => {
    setTypeMenuOpen((prevState) => !prevState);
  };

  const addInput = (typeField) => {
    if (typeField === 'divider') {
      setData((prevState) => ({
        ...prevState,
        [`${typeField}zzz${count}`]: 'divider',
      }));

      setCount((prevState) => prevState + 1);
    }
    setTypesFieldList((prevState) => [...prevState, typeField]);
    setTypeMenuOpen((prevState) => !prevState);
  };

  const handleInputChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <div className="create-form">
      <input
        onChange={handleTitleChange}
        name="title"
        value={data.title}
        className="create-form__title-input"
        type="text"
        placeholder="Введите заголовок..."
      />
      <div className="create-form__container">
        {typeFieldList.length
          ? typeFieldList.map((typeField, index) => (
              <CreateFormInputGroup
                key={`${typeField}-${index + 1}`}
                onChange={handleInputChange}
                value={data[`${typeField}zzz${index + 1}`] || ''}
                name={`${typeField}zzz${index + 1}`}
                typeField={typeField}
              />
            ))
          : null}
      </div>
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
      <button className='create-form__reset'>Очистить форму</button>
    </div>
  );
};

export default CreateForm;

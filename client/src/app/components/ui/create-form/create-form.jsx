import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useModal } from '../../../hooks/use-modal';
import TypesMenu from './types-menu/types-menu';
import CreateFormInputGroup from './create-form-input-group/create-form-input-group';
import ResetModal from './reset-modal/reset-modal';
import { nanoid } from 'nanoid';

const CreateForm = () => {
  const { toggleWindow } = useModal();
  const [isTypeMenuOpen, setTypeMenuOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [
    data,
    setData,
    handlePreview,
    isDisabled,
    removeElement,
  ] = useOutletContext();

  const handleTitleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const toggleTypesMenu = () => {
    setTypeMenuOpen((prevState) => !prevState);
  };

  const addInput = (type) => {
    setData((prevState) => [...prevState, { _id: nanoid(), type, content: '' }]);
  };

  console.log(data);

  const handleInputChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const cleanForm = () => {
    setData({ title: '' });
    if (localStorage.preview) localStorage.removeItem('preview');
    toggleWindow();
  };

  return (
    <>
      <ResetModal cleanForm={cleanForm} />
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
          {data.length
            ? data.map((typeField, index) => (
                <CreateFormInputGroup
                  key={`${typeField}-${index + 1}`}
                  onChange={handleInputChange}
                  value={data[`${typeField}zzz${index + 1}`] || ''}
                  name={`${typeField}zzz${index + 1}`}
                  typeField={typeField}
                  removeElement={removeElement}
                />
              ))
            : null}
        </div>
        <div className="create-form__menu-buttons">
          <TypesMenu isOpen={isTypeMenuOpen} addInput={addInput} />
          <i
            onClick={toggleTypesMenu}
            className={`bi bi-${
              isTypeMenuOpen ? 'x' : 'plus'
            }-circle create-form__add-input`}
            role="button"
          ></i>
        </div>
        <div className="create-form__line"></div>
        <div className="create-form__buttons">
          <button onClick={() => toggleWindow()} className="create-form__reset">
            Очистить форму
          </button>
          <button
            onClick={handlePreview}
            className="create-form__preview"
            disabled={isDisabled}
          >
            Предпросмотр
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateForm;

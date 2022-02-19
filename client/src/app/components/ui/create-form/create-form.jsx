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
  const [data, setData, handlePreview, isDisabled, removeElement] =
    useOutletContext();

  const title = data.find((element) => element.type === 'title');

  const handleTitleChange = ({ target }) => {
    setData((prevState) =>
      prevState.map((element) =>
        element.type === target.name
          ? { ...element, content: target.value }
          : element
      )
    );
  };

  const toggleTypesMenu = () => {
    setTypeMenuOpen((prevState) => !prevState);
  };

  const addInput = (type) => {
    setData((prevState) => [
      ...prevState,
      { _id: nanoid(), type, content: '' },
    ]);
  };

  const handleInputChange = ({ target }) => {
    setData((prevState) =>
      prevState.map((element) =>
        element._id === target.name
          ? { ...element, content: target.value }
          : element
      )
    );
  };

  const cleanForm = () => {
    setData([{ _id: nanoid(), type: 'title', content: '' }]);
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
          value={title.content}
          className="create-form__title-input"
          type="text"
          placeholder="Введите заголовок..."
        />
        <div className="create-form__container">
          {data.length
            ? data.map(({ _id, type, content }) => {
                if (type !== 'title') {
                  return (
                    <CreateFormInputGroup
                      key={_id}
                      onChange={handleInputChange}
                      value={content || ''}
                      name={_id}
                      type={type}
                      removeElement={removeElement}
                    />
                  );
                }
                return null;
              })
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

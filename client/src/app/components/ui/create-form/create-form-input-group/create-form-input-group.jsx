import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Divider from '../../divider/divider';

const CreateFormInputGroup = ({ typeField, value, name, onChange, removeElement }) => {
  return (
    <div className="create-form-input-group">
      {typeField === 'text' ? (
        <TextareaAutosize
          onChange={onChange}
          value={value}
          name={name}
          placeholder={getPlaceholderText(typeField)}
        />
      ) : typeField === 'divider' ? (
        <Divider />
      ) : (
        <input
          onChange={onChange}
          value={value}
          name={name}
          type="text"
          placeholder={getPlaceholderText(typeField)}
        />
      )}
      <button onClick={() => removeElement(name)} className="create-form-input-group__delete-button">
      <i className="bi bi-x" />
      </button>
    </div>
  );
};

const getPlaceholderText = (type) => {
  switch (type) {
    case 'text':
      return 'Введите текст абзаца...';
    case 'img':
      return 'Вставьте ссылку...';
    case 'h3':
      return 'Введите подзаголовок...';
    case 'divider':
      return 'divider';
    default:
      return;
  }
};

export default CreateFormInputGroup;

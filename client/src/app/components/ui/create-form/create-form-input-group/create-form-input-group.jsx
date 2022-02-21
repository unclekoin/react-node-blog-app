import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Divider from '../../divider/divider';

const CreateFormInputGroup = ({
  type,
  value,
  name,
  inputRef,
  onChange,
  removeElement,
}) => {
  return (
    <div className="create-form-input-group">
      {type === 'snippet' || type === 'text' || type === 'conclusion' ? (
        <TextareaAutosize
          ref={inputRef}
          onChange={onChange}
          value={value}
          name={name}
          placeholder={getPlaceholderText(type)}
        />
      ) : type === 'divider' ? (
        <Divider />
      ) : (
        <input
          ref={inputRef}
          onChange={onChange}
          value={value}
          name={name}
          type="text"
          placeholder={getPlaceholderText(type)}
        />
      )}
      <button
        onClick={() => removeElement(name)}
        className="create-form-input-group__delete-button"
      >
        <i className="bi bi-x" />
      </button>
    </div>
  );
};

const getPlaceholderText = (type) => {
  switch (type) {
    case 'snippet':
      return 'Введите текст сниппета...';
    case 'text':
      return 'Введите текст абзаца...';
    case 'image':
      return 'Вставьте ссылку...';
    case 'subtitle':
      return 'Введите подзаголовок...';
    case 'divider':
      return 'divider';
    case 'conclusion':
      return 'Введите текст заключения...';
    default:
      return;
  }
};

export default CreateFormInputGroup;

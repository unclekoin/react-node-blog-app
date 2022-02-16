import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Divider from '../../divider/divider';
import { getInputTypesList } from '.././../../../utils';

function getPlaceholderText(type) {
  const { text, img, h3, divider } = getInputTypesList();
  switch (type) {
    case text:
      return 'Введите текст абзаца...';
    case img:
      return 'Вставьте ссылку...';
    case h3:
      return 'Введите подзаголовок...';
    case divider:
      return 'divider';
    default:
      return;
  }
}

const CreateFormInputGroup = ({ type }) => {
  return (
    <div className="create-form-input-group">
      {type === 'text-paragraph' ? (
        <TextareaAutosize autoFocus placeholder={getPlaceholderText(type)} />
      ) : type === 'hr' ? (
        <Divider />
      ) : (
        <input autoFocus type="text" placeholder={getPlaceholderText(type)} />
      )}
    </div>
  );
};

export default CreateFormInputGroup;

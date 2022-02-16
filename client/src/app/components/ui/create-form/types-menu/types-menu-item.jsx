import React from 'react';
import { getInputTypesList } from '../../../../utils';

const TypesMenuItem = ({ type, addInput }) => {
  const typeList = getInputTypesList();
  const getToolTip = () => {
    switch (type) {
      case 'text':
        return 'Текст';
      case 'img':
        return 'Ссылка';
      case 'h3':
        return 'Подзаголовок';
      case 'divider':
        return 'Линия';
      default:
        return;
    }
  };
  return (
    <li className="types-menu__item">
      <i
        onClick={() => addInput(type)}
        className={`bi bi-${typeList[type]} types-menu__icon`}
        data-tooltip={getToolTip()}
        role="button"
      ></i>
    </li>
  );
};

export default TypesMenuItem;

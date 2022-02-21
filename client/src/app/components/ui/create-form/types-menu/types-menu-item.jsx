import React from 'react';
import { getInputTypesList } from '../../../../utils';

const TypesMenuItem = ({ type, addInput, focusHandler }) => {
  const typeList = getInputTypesList();
  const getToolTip = () => {
    switch (type) {
      case 'text':
        return 'Текст';
      case 'image':
        return 'Ссылка';
      case 'subtitle':
        return 'Подзаголовок';
      case 'divider':
        return 'Линия';
      case 'snippet':
        return 'Сниппет';
      case 'conclusion':
        return 'Заключение';
      default:
        return;
    }
  };

  const handleClick = (type) => {
    addInput(type);
    setTimeout(() => {
      focusHandler();
    }, 0);    
  };
  return (
    <li className="types-menu__item">
      <i
        onClick={() => handleClick(type)}
        className={`bi bi-${typeList[type]} types-menu__icon`}
        data-tooltip={getToolTip()}
        role="button"
      ></i>
    </li>
  );
};

export default TypesMenuItem;

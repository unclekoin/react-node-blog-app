import React from 'react';

const TypesMenuItem = ({ type, addInput }) => {
  const getToolTip = () => {
    switch (type) {
      case 'text-paragraph':
        return 'Текст';
      case 'camera':
        return 'Ссылка';
      case 'type-h3':
        return 'Подзаголовок';
      case 'hr':
        return 'Линия';
      default:
        return;
    }
  };
  return (
    <li className="types-menu__item">
      <i
        onClick={() => addInput(type)}
        className={`bi bi-${type} types-menu__icon`}
        data-tooltip={getToolTip()}
        role="button"
      ></i>
    </li>
  );
};

export default TypesMenuItem;

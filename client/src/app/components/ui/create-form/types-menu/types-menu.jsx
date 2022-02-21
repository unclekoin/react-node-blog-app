import React from 'react';
import { nanoid } from 'nanoid';
import TypesMenuItem from './types-menu-item';
import { getInputTypesList } from '../../../../utils';

const TypesMenu = ({ isOpen, addInput, focusHandler }) => {
  const inputTypesList = Object.keys(getInputTypesList());
  return (
    <div className={`types-menu${isOpen ? ' types-menu--hidden' : ''}`}>
      <ul className="types-menu__list">
        {inputTypesList.map((type) => (
          <TypesMenuItem key={nanoid()} type={type} addInput={addInput} focusHandler={focusHandler} />
        ))}
      </ul>
    </div>
  );
};

export default TypesMenu;

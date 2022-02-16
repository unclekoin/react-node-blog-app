import React from 'react';
import { nanoid } from 'nanoid';
import TypesMenuItem from './types-menu-item';
import { getInputTypesList } from '../../../../utils';

const TypesMenu = ({ isOpen, addInput }) => {
  const inputTypesList = getInputTypesList();
  return (
    <div className={`types-menu${isOpen ? ' types-menu--hidden' : ''}`}>
      <ul className="types-menu__list">
        {Object.keys(inputTypesList).map((type) => (
          <TypesMenuItem key={nanoid()} type={inputTypesList[type]} addInput={addInput} />
        ))}
      </ul>
    </div>
  );
};

export default TypesMenu;

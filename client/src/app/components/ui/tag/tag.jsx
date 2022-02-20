import React from 'react';

const Tag = ({ name }) => {
  return (
    <li className="sidebar__tag tag" role="button">
      <span>{name}</span>
    </li>
  );
};

export default Tag;

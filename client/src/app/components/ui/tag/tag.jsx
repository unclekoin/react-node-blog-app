import React from 'react';

const Tag = ({ name }) => {
  return (
    <li className="sidebar__tag tag" role="button">
      <a href="/">{name}</a>
    </li>
  );
};

export default Tag;

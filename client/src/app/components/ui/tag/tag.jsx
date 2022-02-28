import React from 'react';
import { useTagId } from '../../../hooks/use-tag-id';

const Tag = ({ _id, name, cls = '' }) => {
  const { setTagId } = useTagId();
  return (
    <li onClick={() => setTagId(_id)} className={`sidebar__tag tag ${cls}`} role="button">
      <span>{name}</span>
    </li>
  );
};

export default Tag;

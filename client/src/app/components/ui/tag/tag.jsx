import React from 'react';
import { useTagId } from '../../../hooks/use-tag-id';
import { useAuthor } from '../../../hooks/use-author';

const Tag = ({ _id, name, cls = '' }) => {
  const { setTagId } = useTagId();
  const { setAuthor } = useAuthor();
  const resetFilters = () => {
    setTagId(_id);
    setAuthor(null);
  };
  return (
    <li
      onClick={resetFilters}
      className={`sidebar__tag tag ${cls}`}
      role="button"
    >
      <span>{name}</span>
    </li>
  );
};

export default Tag;

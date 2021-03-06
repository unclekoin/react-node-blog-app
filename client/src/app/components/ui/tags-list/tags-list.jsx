import React from 'react';
import { useSelector } from 'react-redux';
import { getTags, getTagsLoadingStatus } from '../../../store/tags';
import Tag from '../tag';

const TagsList = () => {
  const tags = useSelector(getTags());
  const isLoading = useSelector(getTagsLoadingStatus());

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      {tags.map((tag) => (
        <Tag key={tag._id} {...tag} />
      ))}
      <Tag id="reset" name="Сбросить все" cls="reset" />
    </>
  );
};

export default TagsList;

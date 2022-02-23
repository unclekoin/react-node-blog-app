import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getTags,
  loadTagsList,
  getTagsLoadingStatus,
} from '../../../store/tags';
import Tag from '../tag';

const TagsList = () => {
  const dispatch = useDispatch();
  const tags = useSelector(getTags());
  const isLoading = useSelector(getTagsLoadingStatus());

  useEffect(() => {
    dispatch(loadTagsList());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <h3>Loading...</h3>
  
  return <>
    {tags.map((tag) => <Tag key={tag._id} name={tag.name} />)}
  </>;
};

export default TagsList;

import React from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { articleId } = useParams();
  return (
    <div>
      <h1>Edit</h1>
      <div>Edit {articleId}</div>
    </div>
  );
};

export default Edit;

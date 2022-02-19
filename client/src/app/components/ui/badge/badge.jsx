import React from 'react';

const Badge = ({ tag }) => {
  return (
    <span className="badge">
      {tag.name}
    </span>
  );
};

export default Badge;

import React from 'react';
import { useCommentsModal } from '../../../hooks/use-comments-modal';

const Overlay = () => {
  const { isOpen, toggleCommentsWindow } = useCommentsModal();

  return (
    <div
      onClick={toggleCommentsWindow}
      className={`overlay${isOpen ? ' overlay-open' : ''}`}
    ></div>
  );
};

export default Overlay;

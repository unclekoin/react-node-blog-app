import React from 'react';
import { useModal } from '../../../hooks/use-modal';

const Overlay = () => {
  const { isOpen, toggleWindow } = useModal();
  if (isOpen) {
    document.body.className = 'no-scroll';
  } else {
    document.body.removeAttribute('class');
  }
  return (
    <div
      onClick={toggleWindow}
      className={`overlay${isOpen ? ' overlay-open' : ''}`}
    ></div>
  );
};

export default Overlay;

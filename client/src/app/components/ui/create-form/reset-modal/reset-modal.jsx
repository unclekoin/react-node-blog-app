import React from 'react';

const ResetModal = ({ open, onClose, cleanForm }) => {
  return (
    <div className={`reset-modal${open ? ' reset-modal--open' : ''}`}>
      <div className="reset-modal__title">Точно очистить?</div>
      <div className="reset-modal__buttons">
        <button
          onClick={cleanForm}
          className="reset-modal__button reset-modal__button--confirm"
        >
          Точно
        </button>
        <button
          onClick={onClose}
          className="reset-modal__button reset-modal__button--cancel"
        >
          Подумаю еще
        </button>
      </div>
    </div>
  );
};

export default ResetModal;

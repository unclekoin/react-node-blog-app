import React from 'react';
import { useModal } from '../../../../hooks/use-modal'

const ResetModal = ({ clearForm }) => {
  const { isOpen, toggleWindow } = useModal();
  return (
    <div className={`reset-modal${isOpen ? ' reset-modal--open' : ''}`}>
      <div className="reset-modal__title">Точно очистить?</div>
      <div className="reset-modal__buttons">
        <button
          onClick={clearForm}
          className="reset-modal__button reset-modal__button--confirm"
        >
          Точно
        </button>
        <button
          onClick={toggleWindow}
          className="reset-modal__button reset-modal__button--cancel"
        >
          Подумаю еще
        </button>
      </div>
    </div>
  );
};


export default ResetModal;

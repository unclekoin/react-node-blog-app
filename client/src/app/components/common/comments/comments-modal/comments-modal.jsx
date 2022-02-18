import React from 'react';
import { useModal } from '../../../../hooks/use-modal';
import Comment from '../comment/comment';
import CommentsForm from '../comments-form/comments-form';

const CommentsModal = () => {
  const { isOpen, toggleWindow } = useModal();
  return (
    <div className={`comments-modal${isOpen ? ' comments-modal-open' : ''}`}>
      <div className="comments-modal__header">
        <h3 className="comments-modal__title">Комментарии (3)</h3>
        <i
          onClick={toggleWindow}
          className="bi bi-x comments-modal__close"
          role="button"
        ></i>
      </div>
      <CommentsForm />
      <div className="comments-modal__line"></div>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentsModal;

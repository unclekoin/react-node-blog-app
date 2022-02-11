import React from 'react';
import { useCommentsModal } from '../../../../hooks/use-comments-modal';
import Comment from '../comment/comment';
import CommentsForm from '../comments-form/comments-form';

const CommentsModal = () => {
  const { isOpen, toggleCommentsWindow } = useCommentsModal();
  return (
    <div className={`comments-modal${isOpen ? ' comments-modal-open' : ''}`}>
      <div className="comments-modal__header">
        <h3 className="comments-modal__title">Комментарии (3)</h3>
        <i
          onClick={toggleCommentsWindow}
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

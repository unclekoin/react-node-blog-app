import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Logo from '../../components/ui/logo';
import AvatarFrame from '../../components/ui/avatar-frame';
import avatar from '../../../assets/images/avatar.png';
import { getArticleById } from '../../../mock-data';

const Create = () => {
  const [data, setData] = useState([
    { _id: nanoid(), type: 'title', content: '' },
  ]);
  const [articleTags, setArticleTags] = useState();
  const navigate = useNavigate();
  const { articleId } = useParams();
  const article = getArticleById(articleId);
  const { state } = useLocation();

  console.log(articleTags);

  useEffect(() => {
    if (localStorage.getItem('preview')) {
      const savedData = JSON.parse(localStorage.getItem('preview'));
      setData(savedData);
    }

    if (localStorage.getItem('tags')) {
      const savedTags = JSON.parse(localStorage.getItem('tags'));
      setArticleTags(savedTags);
    }

    if (articleId) {
      setData([
        { _id: 'title-h1', type: 'title', content: article.title },
        ...article.content,
      ]);
      setArticleTags(article.tags);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectChange = (tags) => {
    setArticleTags(tags);
  };

  const isDisabled = Object.keys(data).length <= 1 && !data.title;

  const submitData = () => {
    console.log(data);
    setData({ title: '' });
    localStorage.removeItem('preview');
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handlePreview = () => {
    localStorage.preview = JSON.stringify(data);
    localStorage.tags = JSON.stringify(articleTags);
    navigate('/preview');
  };

  const removeElement = (elementId) => {
    const newData = [...data].filter((element) => element._id !== elementId);
    setData(newData);
  };

  return (
    <div className="create">
      <div
        className={`create__header${
          offset > 30 ? ' create__header--shadow' : ''
        }`}
      >
        <div className="create__header-wrapper">
          <Logo />
          <div className="create__info">
            <button
              onClick={submitData}
              className="create__button"
              disabled={isDisabled}
            >
              Опубликовать
            </button>
            <button className="create__header-image-button">
              <AvatarFrame>
                <img
                  className="create__header-image"
                  src={avatar}
                  alt="avatar"
                />
              </AvatarFrame>
            </button>
          </div>
        </div>
      </div>
      <div className="create__container">
        <Outlet
          context={[
            data,
            setData,
            articleTags,
            handleSelectChange,
            handlePreview,
            isDisabled,
            removeElement,
            state,
          ]}
        />
      </div>
    </div>
  );
};

export default Create;

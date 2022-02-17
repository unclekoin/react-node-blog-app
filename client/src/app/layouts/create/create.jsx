import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../components/ui/logo';
import avatar from '../../../assets/images/avatar.png';

const Create = () => {
  const [typeFieldList, setTypesFieldList] = useState([]);
  const [data, setData] = useState({ title: '' });
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (localStorage.getItem('preview')) {
      const savedData = JSON.parse(localStorage.getItem('preview'));
      Object.keys(savedData)
        .slice(1)
        .forEach((key) => {
          const [type] = key.split('zzz');
          setTypesFieldList((prevState) => [...prevState, type]);
        });
      setData(savedData);
    }
  }, [state]);

  const isDisabled = Object.keys(data).length > 1 && data.title;

  const savePreview = () => {
    localStorage.preview = JSON.stringify(data);
  };

  const submitData = () => {
    console.log(data);
    setData({ title: '' });
    setTypesFieldList([]);
    localStorage.removeItem('preview');
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toPreview = () => navigate('/preview');

  return (
    <div className="create">
      <button
        onClick={() => {
          savePreview();
          toPreview();
        }}
        className="create__preview-button"
        disabled={!isDisabled}
      >
        <i className="bi bi-eyeglasses preview-icon" />
      </button>
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
              disabled={!isDisabled}
            >
              Опубликовать
            </button>
            <button className="create__header-image-button">
              <img className="create__header-image" src={avatar} alt="avatar" />
            </button>
          </div>
        </div>
      </div>
      <div className="create__container">
        <Outlet
          context={[typeFieldList, setTypesFieldList, data, setData, state]}
        />
      </div>
    </div>
  );
};

export default Create;

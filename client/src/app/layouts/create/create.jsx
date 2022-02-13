import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../components/ui/logo';
import avatar from '../../../assets/images/avatar.png';

const Create = () => {
  const [sections, setSections] = useState([]);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');

  const submitData = () => {
    console.log(data);
    setSections([]);
    setTitle('');
  };
  return (
    <div className="create">
      <div className="create__header">
        <Logo />
        <div className="create__info">
          <button onClick={submitData} className="create__button">
            Publish
          </button>
          <button className="create__header-button">
            <img className="create__header-image" src={avatar} alt="avatar" />
          </button>
        </div>
      </div>
      <div className="create__container">
        <Outlet
          context={[data, setData, sections, setSections, title, setTitle]}
        />
      </div>
    </div>
  );
};

export default Create;

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../components/ui/logo';
import avatar from '../../../assets/images/avatar.png';

const Create = () => {
  const [typeFieldList, setTypesFieldList] = useState([]);
  const [data, setData] = useState({ title: '' });

  const submitData = () => {
    console.log(data);
    setData({title: ''});
    setTypesFieldList([]);
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
        <Outlet context={[typeFieldList, setTypesFieldList, data, setData]} />
      </div>
    </div>
  );
};

export default Create;

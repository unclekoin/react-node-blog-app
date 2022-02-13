import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { nanoid } from 'nanoid';

const CreateForm = () => {
  const [data, setData, sections, setSections, title, setTitle] =
    useOutletContext();
  
  const [text, setText] = useState('');
  
  // const setInput = () => {
  //   setSections((prevState) => [
  //     ...prevState,
  //     <div
  //       onKeyDown={preventKeyDown}
  //       key={nanoid()}
  //       className="create-form__input"
  //       role="textbox"
  //       contentEditable={true}
  //     />,
  //   ]);
  // };

  const handleChange = (e) => {
    console.log(e.target.textContent);
    setText(e.target.textContent)
    console.log(text);
  }

  const createInput = (e) => {
    setSections((prevState) => [
      ...prevState,
      <div
        // onKeyDown={preventKeyDown}
        onInput={handleChange}
        key={nanoid()}
        className="create-form__input"
        role="textbox"
        contentEditable={true}
      />,
    ]);

    setTimeout(() => e.target.previousSibling.focus(), 0);
    if (e.target.previousSibling) {
      setData((prevState) => [
        ...prevState,
        e.target.previousSibling.textContent || e.target.previousSibling.value,
      ]);
    }
  };

  // const preventKeyDown = (e) => {
  //   if (e.keyCode === 13) {
  //     e.preventDefault();
  //     setInput();
  //   }
  // };

  // useEffect(() => {
  //   setInput();
  //   // eslint-disable-next-line
  // }, []);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="create-form">
      <input
        onChange={onTitleChange}
        autoFocus
        value={title}
        className="create-form__title-input"
        type="text"
        placeholder="Заголовок"
      />
      {sections.map((item) => item)}
      <i
        onClick={createInput}
        className="bi bi-plus-circle create-icon create-form__add-input"
        role="button"
      ></i>
    </div>
  );
};

export default CreateForm;

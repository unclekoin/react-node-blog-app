import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/pages/main';
import Article from './components/pages/article';
import About from './components/pages/about';
import Contacts from './components/pages/contacts';
import NotFound from './components/pages/not-found';
import Wrapper from './layouts/wrapper';
import Create from './layouts/create';
import Login from './layouts/login';
import Overlay from './components/common/overlay/overlay';
import ModalProvider from './hoc/modal-provider';
import RegisterForm from './components/ui/register-form/register-form';
import LoginForm from './components/ui/login-form/login-form';
import CreateForm from './components/ui/create-form/create-form';
import Preview from './layouts/preview/preview';
import ArticleContent from './components/ui/article-content/article-content';
import Tags from './components/pages/tags/tags';

const App = () => {
  const [favorites, setFavorite] = useState([]);

  const addFavorite = (articleId) => {
    if (favorites.includes(articleId)) {
      setFavorite((prevState) => prevState.filter((id) => id !== articleId));
    } else {
      setFavorite((prevState) => [...prevState, articleId]);
    }
  };

  useEffect(() => {
    if (localStorage.favorites) {
      setFavorite(JSON.parse(localStorage.getItem('favorites')));
    }
  }, []);

  useEffect(() => {
    localStorage.favorites = JSON.stringify(favorites);
  }, [favorites]);

  return (
    <>
      <ModalProvider>
        <Overlay />
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route
              index
              element={<Main addFavorite={addFavorite} favorites={favorites} />}
            />
            <Route
              path="article/:articleId"
              element={
                <Article addFavorite={addFavorite} favorites={favorites} />
              }
            />
            <Route
              path="favorites"
              element={<Main addFavorite={addFavorite} favorites={favorites} />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route>
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          <Route path="login/" element={<Login />}>
            <Route index element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>

          <Route path="create/" element={<Create />}>
            <Route index element={<CreateForm />} />
          </Route>

          <Route path="edit/:articleId" element={<Create />}>
            <Route index element={<CreateForm />} />
          </Route>

          <Route path="preview/" element={<Preview />}>
            <Route index element={<ArticleContent />} />
          </Route>
          <Route path="tags/">
            <Route index element={<Tags />} />
          </Route>
        </Routes>
      </ModalProvider>
    </>
  );
};

export default App;

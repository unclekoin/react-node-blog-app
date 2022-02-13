import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/pages/main';
import Article from './components/pages/article';
import About from './components/pages/about';
import Contacts from './components/pages/contacts';
import NotFound from './components/pages/not-found';
import Selected from './components/pages/selected';
import Wrapper from './layouts/wrapper';
import Create from './layouts/create';
import Edit from './components/pages/edit';
import Login from './layouts/login';
import Overlay from './components/common/overlay/overlay';
import CommentsModalProvider from './hoc/comments-modal-provider';
import RegisterForm from './components/ui/register-form/register-form';
import LoginForm from './components/ui/login-form/login-form';
import CreateForm from './components/ui/create-form/create-form';

const App = () => {
  return (
    <>
      <CommentsModalProvider>
        <Overlay />
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Main />} />
            <Route path=":articleId" element={<Article />} />
            <Route path=":articleId/edit" element={<Edit />} />
            <Route path="selected" element={<Selected />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="login/" element={<Login />}>
            <Route index element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>
          <Route path="create/" element={<Create />}>
            <Route index element={ <CreateForm />} />
          </Route>
        </Routes>
      </CommentsModalProvider>
    </>
  );
};

export default App;

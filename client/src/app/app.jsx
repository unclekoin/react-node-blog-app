import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/pages/main';
import Article from './components/pages/article';
import About from './components/pages/about';
import Contacts from './components/pages/contacts';
import NotFound from './components/pages/not-found';
import Selected from './components/pages/selected';
import Wrapper from './layouts/wrapper';
import Admin from './layouts/admin';
import Edit from './components/pages/edit';
import Login from './components/pages/login';
import RequireAuth from './hoc/require-auth';
import AuthProvider from './hoc/auth-provider';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Main />} />
            <Route path=":articleId" element={<Article />} />
            <Route path=":articleId/edit" element={<Edit />} />
            <Route path="selected" element={<Selected />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route
              path="/admin"
              element={
                <RequireAuth>
                  <Admin />
                </RequireAuth>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;

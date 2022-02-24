import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from './app/store/create-store';
import { Provider } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss';
import App from './app/app';
import { history } from './app/utils';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

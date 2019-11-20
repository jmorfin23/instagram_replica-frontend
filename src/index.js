import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/userContext.js';
import { LoginProvider } from './components/loginContext.js';

ReactDOM.render(
  <LoginProvider>
  <UserProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </UserProvider>
  </LoginProvider>
  ,

  document.getElementById('root')

);

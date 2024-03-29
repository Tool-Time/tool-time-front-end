import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Auth0Provider
    domain = {process.env.REACT_APP_DOMAIN}
    clientId = {process.env.REACT_APP_CLIENT_ID}
    redirectUri = {process.env.REACT_APP_REDIRECT_URI}
  >
    <React.StrictMode>
     <App />
    </React.StrictMode>
  </Auth0Provider>,

  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './styles/global';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <HelmetProvider>
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
  </HelmetProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

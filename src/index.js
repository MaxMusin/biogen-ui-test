import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle, defaultTheme } from './theme/global-style';
import { ThemeProvider } from 'styled-components';
import * as serviceWorker from './serviceWorker';
import StateProvider from './context/StoreContext'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <StateProvider>
        <GlobalStyle />
        <App />
      </StateProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      <ToastContainer limit={1} />
    </RecoilRoot>
  </React.StrictMode>,
);

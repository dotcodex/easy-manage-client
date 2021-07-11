import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

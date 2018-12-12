import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-webpack-loader-syntax,import/no-unresolved
import theme from 'sass-extract-loader?{"plugins":["sass-extract-js"]}!./theme.scss';
import './index.scss';
import App from './js/components/App';

ReactDOM.render(
  React.createElement(
    ThemeProvider,
    { theme },
    React.createElement(App),
  ),
  document.querySelector('#root'),
);

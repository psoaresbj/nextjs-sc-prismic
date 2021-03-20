import { GlobalStyle } from '../theme/components';
import { ModalManager } from 'react-modal-handler';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import modals from '../modals';
import theme from '../theme';

const MyApp = props => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ModalManager modals={modals} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object
};

export default MyApp;

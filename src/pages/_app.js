import { DataProvider } from '../components/DataProvider/DataProvider';
import { GlobalStyle } from '../theme/components';
import { ModalManager } from 'react-modal-handler';
import { SEO } from '../components';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import modals from '../modals';
import theme from '../theme';

const baseUrl = process.env.NEXT_PUBLIC_URL;

const MyApp = props => {
  const { Component, pageProps, router: routerFromProps } = props;
  const { pathname, locale } = routerFromProps;
  const { config: baseConfig, page } = pageProps;

  const config = {
    ...baseConfig,
    seo_url: `${baseUrl}/${locale}${pathname}`
  };

  return (
    <DataProvider config={config} locale={locale} page={page}>
      <ThemeProvider theme={theme}>
        <SEO />
        <GlobalStyle />
        <ModalManager modals={modals} />
        <Component {...pageProps} />
      </ThemeProvider>
    </DataProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
  router: PropTypes.object
};

export default MyApp;

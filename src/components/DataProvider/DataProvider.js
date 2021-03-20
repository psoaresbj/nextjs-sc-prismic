import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import langConfig from '../../../lang-config';

const defaultLang = langConfig.find(({ isDefault }) => isDefault)?.code || 'pt-pt';

export const DataContext = createContext({});

export const DataProvider = props => {
  const { children, config, locale, page } = props;

  const lang = langConfig.find(({ code }) => code === locale) || defaultLang;

  return <DataContext.Provider value={{ config, lang, page }}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.any,
  config: PropTypes.object,
  locale: PropTypes.string,
  page: PropTypes.object,
  url: PropTypes.string
};

export const useData = () => {
  const { config, lang, page } = React.useContext(DataContext);

  return { config, lang, page };
};

export const DataConsumer = DataContext.Consumer;

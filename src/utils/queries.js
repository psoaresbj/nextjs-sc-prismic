import { client } from './prismicHelpers';
import Prismic from '@prismicio/client';
import langConfig from '../../lang-config';

const defaultLocale = langConfig.find(({ isDefault }) => isDefault)?.code;
const configType = 'config';

async function fetchDocuments(query = '', page = 1, routes = []) {
  const response = await client().query(query, { lang: '*', page, pageSize: 100 });
  const allRoutes = routes.concat(response.results);

  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocuments(query, page + 1, allRoutes);
  }

  return [...new Set(allRoutes)];
}

/* Fetches all Prismic documents and filters them.
 *  In production, you would probably query documents
 *  by type instead of filtering them.
 *  This intend to be a demonstration only.
 */
export const queryRepeatableDocuments = async filter => {
  const allRoutes = await fetchDocuments();

  return allRoutes.filter(filter);
};

export const testQuery = async () => {
  const allRoutes = await fetchDocuments();

  return allRoutes.filter(doc => doc.type === 'config').slice(0, 5);
};

export const getPage = async ({ locale = defaultLocale, type }) => {
  const response = await client().query(Prismic.Predicates.any('document.type', [configType, `page_${type}`]), {
    lang: '*'
  });

  const { results } = response || {};

  if (!results) {
    return {};
  }

  const config =
    results.find(({ lang, type }) => type === configType && lang === locale) ||
    results.find(({ lang, type }) => type === configType && lang === defaultLocale) ||
    {};

  const document =
    results.find(({ lang, type }) => type === `page_${type}` && lang === locale) ||
    results.find(({ lang, type }) => type === `page_${type}` && lang === defaultLocale) ||
    {};

  return { config, document };
};

import { accessToken, apiEndpoint, hrefResolver } from '../../prismic-configuration';
import Link from 'next/link';
import Prismic from '@prismicio/client';
import React from 'react';

// Helper function to get the Prismic repository name from the URL
export const [, prismicRepoName] = apiEndpoint.match(/https?:\/\/([^.]+)?\.(cdn\.)?.+/);

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content) => (
  <Link href={hrefResolver(element.data)} key={element.data.id}>
    <a>{content}</a>
  </Link>
);

let cachedClient = null;

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};

  return {
    ...reqOption,
    ...accessTokenOption,
    apiDataTTL: 500
  };
};

// Client method to query documents from the Prismic repo
export const client = (req = null) => {
  if (cachedClient) {
    return cachedClient;
  }

  const clientInstance = Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

  cachedClient = clientInstance;

  return clientInstance;
};

export const manageLocal = (Locales, locale) => {
  // Languages from API response
  // // Setting Master language as default language option
  const [mainLanguage] = Locales;
  // // Sets current language based on the locale
  const currentLang = locale !== undefined ? locale : mainLanguage;
  const isMyMainLanguage = mainLanguage === currentLang;

  return { currentLang, isMyMainLanguage, mainLanguage };
};

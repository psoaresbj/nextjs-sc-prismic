import { extractFromData } from '../../utils/extractFromData';
import { useData } from '../DataProvider/DataProvider';
import Head from 'next/head';
import React from 'react';

const getMetaData = metaData =>
  Object.keys(metaData).reduce((meta, metaName) => {
    const metaValue = metaData[metaName];

    if (!metaValue) {
      return meta;
    }

    if (metaName === 'image') {
      return [
        ...meta,
        { content: metaValue, property: `og:${metaName}` },
        { content: metaValue, property: `og:${metaName}:secure_url` },
        { content: metaValue, name: `twitter:${metaName}` }
      ];
    }

    if (metaName === 'keywords') {
      return [...meta, { content: metaValue, name: metaName }];
    }

    if (metaName === 'title') {
      return [
        ...meta,
        { content: metaValue, property: `og:${metaName}` },
        { content: metaValue, name: `twitter:${metaName}` }
      ];
    }

    if (metaName === 'url') {
      return [...meta, { content: metaValue, property: `og:${metaName}` }];
    }

    return [
      ...meta,
      { content: metaValue, name: metaName },
      { content: metaValue, name: `twitter:${metaName}` },
      { content: metaValue, property: `og:${metaName}` }
    ];
  }, []);

export const SEO = () => {
  const { config, page } = useData();

  const defaultMetaFromConfig = extractFromData(config, 'seo');
  const metaFromDocument = extractFromData(page, 'seo');

  const title = metaFromDocument?.title || defaultMetaFromConfig?.title;

  const defaultMeta = { ...defaultMetaFromConfig, image: defaultMetaFromConfig?.image?.url };
  const meta = { ...metaFromDocument, image: metaFromDocument?.image?.url };

  const mergedMeta = Object.assign(defaultMeta, meta);
  const parsedMeta = getMetaData(mergedMeta);

  return (
    <Head>
      <title>{title}</title>
      {parsedMeta.map((metaprops, index) => (
        <meta key={index} {...metaprops} />
      ))}
    </Head>
  );
};

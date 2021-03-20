/* eslint-disable max-params */
import { Elements } from 'prismic-reactjs';
import { bracked } from './bracked';
import React from 'react';
import parse from 'html-react-parser';

export const prismicSerializer = (variables, type, element, content, children, key) => {
  switch (type) {
    case Elements.image:
      return React.createElement('img', { alt: element.alt || '', key, src: element.url });

    case Elements.hyperlink: {
      const target = element?.data?.target || '_blank';
      const rel = 'noopener noreferrer';

      const props = { className: 'ab-text-link', href: element.data.url, key, rel, target };

      return React.createElement('a', props, children);
    }

    case Elements.span:
      return parse(bracked(element.text, variables));

    default:
      return null;
  }
};

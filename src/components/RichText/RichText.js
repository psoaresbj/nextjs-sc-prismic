import { RichText as BaseRichText } from 'prismic-reactjs';
import { Text } from '../../theme/components';
import { prismicSerializer } from '../../utils/prismicSerializer';
import PropTypes from 'prop-types';
import React from 'react';

export const RichText = props => {
  const { content, variables, ...forwardProps } = props;
  const richTextSerializer = prismicSerializer.bind(null, variables || {});

  return (
    <Text div {...forwardProps}>
      <BaseRichText htmlSerializer={richTextSerializer} render={content} />
    </Text>
  );
};

RichText.propTypes = {
  content: PropTypes.any,
  variables: PropTypes.object
};

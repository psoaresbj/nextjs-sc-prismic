import { Div } from '../../theme/components';
import PropTypes from 'prop-types';
import React from 'react';

export const Slice = props => {
  const { children, index } = props;

  return <Div mt={index ? 3 : 0}>{children}</Div>;
};

Slice.propTypes = {
  children: PropTypes.any,
  index: PropTypes.number
};

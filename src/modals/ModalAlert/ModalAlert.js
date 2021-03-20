import { Div, Heading, Text } from '../../theme/components';
import { withModal } from '../../HOC/withModal/withModal';
import PropTypes from 'prop-types';
import React from 'react';

const ModalAlertComponent = props => {
  const { heading, message } = props;

  return (
    <Div p={2}>
      <Heading h3 p06>
        {heading}
      </Heading>
      <Text large mt={1.5}>
        {message}
      </Text>
    </Div>
  );
};

ModalAlertComponent.propTypes = {
  heading: PropTypes.string,
  message: PropTypes.string
};

export const ModalAlert = withModal(ModalAlertComponent);

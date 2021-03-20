import { Col, Div, Grid, Row } from '../../theme/components';
import { RichText } from '../../components';
import PropTypes from 'prop-types';
import React from 'react';

export const RichContent = props => {
  const { content } = props;

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <Div>
            <RichText content={content} />
          </Div>
        </Col>
      </Row>
    </Grid>
  );
};

RichContent.propTypes = {
  content: PropTypes.any
};

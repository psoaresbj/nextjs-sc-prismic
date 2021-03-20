import { Col, Div, Grid, Row } from '../../theme/components';
import PropTypes from 'prop-types';
import React from 'react';

export const Gallery = props => {
  const { items } = props;

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <Div>
            {items.map(({ image }, index) => (
              <img alt={image?.alt} key={index} src={image?.url} style={{ display: 'inline-block', width: 150 }} />
            ))}
          </Div>
        </Col>
      </Row>
    </Grid>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      url: PropTypes.string
    })
  )
};

import { Col, Grid, Icon, Row } from '../theme/components';
import { colors } from '../theme';
import { getPage } from '../utils/queries';
import React from 'react';

const icons = [
  { icon: 'youtube', sWidth: 1 },
  { icon: 'instagram', sHeight: 1 },
  { icon: 'facebook', sHeight: 1 },
  { icon: 'twitter', sWidth: 1 },
  { icon: 'caret', sWidth: 0.5 },
  { icon: 'arrowLeft', sWidth: 1 },
  { icon: 'arrowRight', sWidth: 1 }
];

const ColoredCol = () => (
  <Col xs={1}>
    <div style={{ backgroundColor: colors.p06, height: 800, width: '100%' }} />
  </Col>
);

const cols = new Array(12).fill('');

const Homepage = props => {
  console.log(props);

  return (
    <Grid>
      <Row>
        <Col md={12}>
          {icons.map((icon, index) => (
            <Icon key={index} {...icon} ml={index ? 1 : 0} p06 />
          ))}
        </Col>
        <Col xs={12}>
          <h1>Homepage</h1>
          <p>test</p>
        </Col>
      </Row>
      <Row>
        {cols.map((_, index) => (
          <ColoredCol key={index} />
        ))}
      </Row>
    </Grid>
  );
};

export const getServerSideProps = async ({ locale }) => {
  const data = await getPage({ locale, type: 'about' });

  return {
    props: {
      ...data
    }
  };
};

export default Homepage;

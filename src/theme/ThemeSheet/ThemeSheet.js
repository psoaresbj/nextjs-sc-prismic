import { Code, Col, Div, Grid, Heading, Icon, Row, Text } from '../components';
import { RichText } from '../../components';
import { bodySizes, headingSizes } from '../variables/fonts';
import { colors } from '../variables/colors';
import { flexboxgrid } from '../variables/flexboxgrid';
import { modal } from 'react-modal-handler';
import PropTypes from 'prop-types';
import React from 'react';
import Slices from '../../components/Slices/Slices';
import ui from '../components/Icon/ui';

const icons = Object.keys(ui);
const cols = new Array(12).fill('');
const colorKeys = Object.keys(colors);
const headings = Object.keys(headingSizes);
const textSizes = Object.keys(bodySizes);

export const ThemeSheet = props => {
  const text = props?.data?.rich_text;
  const slices = props?.data?.body1;

  return (
    <>
      <Grid p="2 null 5">
        <Row>
          <Col xs={12}>
            <Heading h1>Theme sheet page</Heading>
            <Text large mt={1}>
              This page make us to keep track with the base options we have on the theme and have some examples of UI
              components and helpers.
            </Text>
            <Text mt={0.5} small>
              A nice to know about this page: Don&apos;t have any specific created component to build it...
            </Text>
          </Col>
        </Row>
        {/* Icons */}
        <Row mt={3}>
          <Col xs={12}>
            <Heading h4 p06>
              Icons
            </Heading>
            <Code>{`<Icon icon="facebook" />`}</Code>
          </Col>
          <Col md={12} mt={1}>
            <Div flex flexWrap m={-1} pt={1}>
              {icons.map((icon, index) => (
                <Div flex="column" flexAlign="center" key={index} noFontSize p={1} w={6}>
                  <Icon h={1} icon={icon} w={1} />
                  <Text mt={0.5} semibold XSmall>
                    {icon}
                  </Text>
                </Div>
              ))}
            </Div>
          </Col>
        </Row>

        {/* Heading */}
        <Row mt={3}>
          <Col xs={12}>
            <Heading h4 p06>
              Heading component
            </Heading>
            <Code>{`<Heading h1>My nice heading</Heading>`}</Code>
          </Col>
          <Col mt={1} xs={12}>
            {headings.map((heading, index) => {
              const type = { [heading]: true };

              return (
                <Div key={heading} mt={index ? 0.5 : 0}>
                  <Text n04 semibold small>
                    {heading}
                  </Text>
                  <Heading {...type}>Lorem ipsum dolor sit amet</Heading>
                </Div>
              );
            })}
          </Col>
        </Row>

        {/* Text */}
        <Row mt={3}>
          <Col xs={12}>
            <Heading h4 p06>
              Text component
            </Heading>
            <Code>{`<Text XXLarge>My awesome text</Text>`}</Code>
          </Col>
          <Col mt={1} xs={12}>
            {textSizes.map((size, index) => {
              const type = { [size]: true };

              return (
                <Div key={size} mt={index ? 0.5 : 0}>
                  <Text n04 semibold small>
                    {size}
                  </Text>
                  <Text {...type} key={size}>
                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                    dignissim pellentesque felis.
                  </Text>
                </Div>
              );
            })}
          </Col>
        </Row>

        {/* Grid */}
        <Row mt={3}>
          <Col mb={1} xs={12}>
            <Heading h4 p06>
              Grid
            </Heading>
            <Code>
              <pre>{`<Grid>
    <Row>
      <Col md={6} xs={12}>
        My column content
      </Col>
    <Row>
  </Grid>

  /**
    ${flexboxgrid.gridSize} Columns
    Outer margin: ${flexboxgrid.outerMargin * 16}px
    Gutter: ${flexboxgrid.gutterWidth * 16}px
    Width: ${(flexboxgrid.container.lg - (flexboxgrid.outerMargin * 2 - flexboxgrid.gutterWidth)) * 16}px
  */
  `}</pre>
            </Code>
          </Col>
          {cols.map((_, index) => (
            <Col key={index} xs={1}>
              <Div bgN02 h={5} w="100%" />
            </Col>
          ))}
        </Row>

        {/* Colors */}
        <Row mt={3}>
          <Col xs={12}>
            <Heading h4 p06>
              Colors
            </Heading>
          </Col>
          <Col mt={1} xs={12}>
            <Div flex flexWrap m={-1}>
              {colorKeys.map((colorKey, index) => {
                const colorProp = { [`bg${colorKey.charAt(0).toUpperCase()}${colorKey.slice(1)}`]: true };

                return (
                  <Div flex="column" flexAlign="center" key={index} noFontSize p={1}>
                    <Div pt="100%" w={5} {...colorProp} style={{ border: '1px solid rgba(0, 0, 0, 0.08)' }} />
                    <Text bold mt={0.5} semibold XXSmall>
                      {colorKey}
                    </Text>
                    <Text n04 small>
                      {colors[colorKey]}
                    </Text>
                  </Div>
                );
              })}
            </Div>
          </Col>
        </Row>

        {/* Flex */}
        <Row mt={3}>
          <Col xs={12}>
            <Heading h4 p06>
              Flex prop
            </Heading>
            <Code>{`<Div flex="column" flexAlign="center">Content will be center and mid aligned</Div>`}</Code>
          </Col>
          <Col mt={1} xs={12}>
            <Div bgN02 flex="column" flexAlign="center" h={10} w="100%">
              <Text p={1}>Testing flex (direction, inline)</Text>
              <Text p={1}>Testing flex align (justify-content, align-items)</Text>
            </Div>
          </Col>
        </Row>

        {/* Modal */}
        <Row mt={3}>
          <Col xs={12}>
            <Heading h4 p06>
              Modal
            </Heading>
            <Code>{`<button onClick={() => modal.open('alert', { heading: 'Modal Heading', message: 'Lorem ipsum donet' })}>Open modal</button>`}</Code>
            <Div mt={1}>
              <button onClick={() => modal.open('alert', { heading: 'Modal Heading', message: 'Lorem ipsum donet' })}>
                Open modal
              </button>
            </Div>
          </Col>
        </Row>

        {/* RichText */}
        {text && (
          <Row mt={3}>
            <Col xs={12}>
              <Heading h4 p06>
                Rich Text from Prismic
              </Heading>
              <Code>{`<RichText content={myContentFromPrismicRichText} variables={{ var1: "I'll replace: {{ var1 }} in the content" }} />`}</Code>
              <RichText content={text} mt={1} />
            </Col>
          </Row>
        )}
      </Grid>

      {/* Slices */}
      {slices && (
        <>
          <Grid mt={3}>
            <Row>
              <Col xs={12}>
                <Heading h4 p06>
                  Slices from Prismic
                </Heading>
                <Code>{`<Slices slices={slices} />`}</Code>
              </Col>
            </Row>
          </Grid>
          <Div mt={1}>
            <Slices slices={slices} />
          </Div>
        </>
      )}
    </>
  );
};

ThemeSheet.propTypes = {
  data: PropTypes.object
};

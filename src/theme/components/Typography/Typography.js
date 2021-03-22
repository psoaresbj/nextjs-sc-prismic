/* eslint-disable no-nested-ternary */
import { bodySizes, fonts, headingSizes } from '../../variables/fonts';
import { generateProps, mq, variations } from 'styled-gen';
import { getTag } from '../../helpers/getTag';
import styled, { css } from 'styled-components';

const applySingularSize = size => css`
  font-size: ${(typeof size === 'number' ? size : size[0]) / 16}rem;
  letter-spacing: ${typeof size === 'number' ? undefined : size[2] !== undefined ? `${size[2] / 16}rem` : undefined};
  line-height: ${typeof size === 'number' ? undefined : size[1] !== undefined ? size[1] : undefined};
`;

const applyMultipleSizes = sizes =>
  Object.keys(sizes).map(size =>
    size === 'xs' ? applySingularSize(sizes[size]) : mq.from(size, applySingularSize(sizes[size]))
  );

const applySizes = sizes =>
  typeof sizes === 'number' || Array.isArray(sizes) ? applySingularSize(sizes) : applyMultipleSizes(sizes);

const setSizeVariations = sizeVariations =>
  Object.keys(sizeVariations).reduce(
    (result, key) => ({
      ...result,
      [key]: css`
        ${applySizes(sizeVariations[key])}
      `
    }),
    {}
  );

const headingSizeVariations = setSizeVariations(headingSizes);

const BodySizeVariations = setSizeVariations(bodySizes);

const miscVariations = {
  XXSmall: css`
    text-transform: uppercase;
    letter-spacing: 0.075em;
  `
};

export const Heading = styled.h1.attrs(props => ({
  as: getTag(props, { defaultTag: 'h1' })
}))`
  font-weight: ${fonts.weights.semibold};

  ${variations(headingSizeVariations)};

  ${generateProps};
`;

export const Text = styled.p.attrs(props => ({
  as: getTag(props, { defaultTag: 'p' })
}))`
  ${variations(miscVariations)};
  ${variations(BodySizeVariations)};

  ${generateProps};
`;

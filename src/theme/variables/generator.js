/*
 * styled-gen generator
 * https://github.com/psoaresbj/styled-gen/tree/master/src/generator
 */
/* eslint-disable sort-keys */
import { alignments } from './alignments';
import { colors } from './colors';
import { flexFunctions } from '../helpers/flex';
import { fonts } from './fonts';
import { margin, padding, position, size } from 'polished';

export const generator = {
  // Named props
  namedProps: [
    { prefix: 'bg', list: colors, cssProp: 'background-color' },
    { list: colors, cssProp: 'color' },
    { list: fonts.weights, cssProp: 'font-weight' },
    { prefix: 'text', list: alignments, cssProp: 'text-align' },
    { prefix: 'flex', list: { wrap: 'wrap', nowrap: 'nowrap' }, cssProp: 'flex-wrap' }
  ],

  // Space props
  spaceProps: [{ prop: 'margin', units: 'rem' }, { prop: 'padding', units: 'rem' }],

  // Variable props
  variableProps: [
    { name: 'h', cssProp: 'height', units: 'rem' },
    { name: 'align', list: alignments, cssProp: 'text-align' },
    { name: 'w', cssProp: 'width', units: 'rem' },

    // fn props
    { name: 'm', helperFn: margin, units: 'rem' },
    { name: 'p', helperFn: padding, units: 'rem' },
    { name: 'pos', helperFn: position, units: 'rem' },
    { name: 'size', helperFn: size, units: 'rem' },
    ...Object.keys(flexFunctions).map(name => ({ name, helperFn: flexFunctions[name] }))
  ]
};

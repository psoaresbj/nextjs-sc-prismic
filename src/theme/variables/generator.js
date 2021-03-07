/*
 * styled-gen generator
 * https://github.com/psoaresbj/styled-gen/tree/master/src/generator
 */
/* eslint-disable sort-keys */
export const generator = {
  // Named props
  namedProps: [{ list: 'colors', cssProp: 'color' }, { list: 'fonts.weights', cssProp: 'font-weight' }],

  // Space props
  spaceProps: [{ prop: 'margin', units: 'rem' }, { prop: 'padding', units: 'rem' }],

  // Variable props
  variableProps: [
    { name: 'sHeight', cssProp: 'height', units: 'rem' },
    { name: 'sTextAlign', list: 'alignments', cssProp: 'text-align' },
    { name: 'sWidth', cssProp: 'width', units: 'rem' },
    { name: 'sZIndex', cssProp: 'z-index' }
  ]
};

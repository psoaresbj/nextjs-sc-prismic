import { css } from 'styled-components';

const flex = (direction, inline) => css`
  display: ${inline === 'inline' ? 'inline-flex' : 'flex'};
  flex-direction: ${typeof direction === 'string' ? direction : undefined};
`;

const flexAlign = (justifyContent, alignItems) => css`
  align-items: ${alignItems || 'center'};
  justify-content: ${typeof justifyContent === 'string' ? justifyContent : undefined};
`;

export const flexFunctions = {
  flex,
  flexAlign
};

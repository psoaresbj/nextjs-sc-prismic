import * as FlexboxGrid from 'react-styled-flexboxgrid';
import { generateProps, mq } from 'styled-gen';
import styled, { css } from 'styled-components';

export const Col = styled(FlexboxGrid.Col)`
  max-width: 100%;

  ${generateProps};
`;

export const Grid = styled(FlexboxGrid.Grid)`
  max-width: 100vw;

  ${mq.upTo(
    'tabletLandscape',
    css`
      width: 100%;
    `
  )}

  ${generateProps};
`;

export const Row = styled(FlexboxGrid.Row)`
  ${generateProps};
`;

import { generateProps } from 'styled-gen';
import styled, { css } from 'styled-components';

export const Div = styled.div`
  ${({ noFontSize }) => css`
    font-size: ${noFontSize ? 0 : undefined};
  `}

  ${generateProps};
`;

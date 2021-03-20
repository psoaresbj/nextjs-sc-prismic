import { generateProps } from 'styled-gen';
import styled from 'styled-components';

export const Code = styled.code`
  background-color: #3a4b53;
  border-radius: 0.25rem;
  color: #e9e9e9;
  display: inline-flex;
  padding: 0.25rem;
  line-height: 1.25;
  font-size: 14px;
  font-family: monospace;

  ${generateProps}
`;

export const Pre = styled.pre``;

import { colors } from '../../variables/colors';
import { createGlobalStyle, css } from 'styled-components';
import { fonts } from '../../variables/fonts';
import { mq } from 'styled-gen';
import reset from 'styled-reset';

const fontVariations = [{ name: 'gilroy-extrabold', weight: 900 }, { name: 'gilroy-light', weight: 300 }];

export const GlobalStyle = createGlobalStyle`
  ${reset};

  ${fontVariations.map(
    ({ name, weight }) => css`
      @font-face {
        font-family: 'Gilroy';
        src: url('fonts/${name}.woff') format('woff'), url('fonts/${name}.woff2') format('woff2');
        font-display: swap;
        font-style: normal;
        font-weight: ${weight};
      }
    `
  )}

  html,
  body {
    min-height: 100%;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    box-sizing: border-box;
    color: ${colors.n06};
    font-family: ${fonts.families.secondary};
    font-size: 1.125rem;
    line-height: 1.5;
    overflow-x: hidden;
    overflow-y: scroll;

    -webkit-overflow-scrolling: touch;

    * {
      box-sizing: border-box;
    }

    &.menu-open {
      ${mq.phone(css`
        overflow-y: hidden;
      `)};
    }
  }

  a {
    outline: 0;
    text-decoration: none;

    &:active,
    &:focus,
    &:hover {
      outline: 0;
      text-decoration: none;
    }

    &:not(:disabled) {
      cursor: pointer;
    }
  }

  b {
    font-weight: ${fonts.weights.bold};
  }
`;

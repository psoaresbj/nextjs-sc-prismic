/* eslint-disable sort-keys */
const weights = {
  extralight: 200,
  light: 300,
  regular: 400,
  semibold: 600,
  bold: 700,
  black: 900
};

export const headingSizes = {
  h1: { xs: [48, 1], md: [64, 1] },
  h2: { xs: [36, 1.1], md: [48, 1.1] },
  h3: { xs: [24, 1.25], md: [36, 1.25] },
  h4: { xs: [20, 1.25], md: [24, 1.25] },
  h5: { xs: [18, 1.25] },
  h6: { xs: [14, 1.25] }
};

export const bodySizes = {
  XXLarge: [24, 1.5],
  XLarge: [20, 1.5],
  large: [18, 1.5],
  default: [16, 1.5],
  small: [14, 1.5],
  XSmall: [12, 1.25],
  XXSmall: [10, 1.25]
};

export const fonts = {
  families: {
    primary: "'Gilroy', sans-serif",
    secondary: "'Source Sans Pro', sans-serif"
  },
  weights
};

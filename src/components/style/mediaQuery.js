import {css} from 'styled-components';

export const gridMaxWidths = {
  sm: '708px',
  md: '1200px',
  lg: '1440px'
};

export const breakpoints = {
  xs: 0,
  sm: 768,
  md: 1260,
  lg: 1500
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc;
}, {});
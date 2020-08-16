import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import PoppinsLightWoff from '../assets/fonts/poppins/poppins-light.woff';
import PoppinsLightWoff2 from '../assets/fonts/poppins/poppins-light.woff2';
import PoppinsMediumWoff from '../assets/fonts/poppins/poppins-medium.woff';
import PoppinsMediumWoff2 from '../assets/fonts/poppins/poppins-medium.woff2';

const colors = {
  white: '#FFFFFF',
  black: '#1F252E',
  blueDenim: '#1487CC',
  athensGray: '#EEEDF0',
  cadetblue: '#A9B4C5',
};

export const defaultTheme = {
  font: {
    primary: '"Poppins", sans-serif',
  },
  color: {
    primary: colors.blueDenim,
    text: {
      primary: colors.black,
    },
    white: colors.white,
    black: colors.black,
    gray: colors.athensGray,
    grayDraker: colors.cadetblue
  },
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'Poppins';
    src: local('Poppins Light'), local('PoppinsLight'),
    url(${PoppinsLightWoff2}) format('woff2'),
    url(${PoppinsLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Poppins';
    src: local('Poppins Medium'), local('PoppinsMedium'),
    url(${PoppinsMediumWoff2}) format('woff2'),
    url(${PoppinsMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  
  html {
    position: relative;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    font-family: ${defaultTheme.font.primary};
    font-weight: 300;
    font-size: 16px;
    color: ${defaultTheme.color.black};
  }
  
  *, 
  ::after, ::before {
    box-sizing: border-box;
  }
  
  ::selection {
    color: ${defaultTheme.color.white} !important;
    background: ${defaultTheme.color.primary};
  }
  
  ::-moz-selection {
    color: ${defaultTheme.color.white} !important;
    background: ${defaultTheme.color.primary};
  }
  
  ::-webkit-selection {
    color: ${defaultTheme.color.white} !important;
    background: ${defaultTheme.color.primary};
  }
`
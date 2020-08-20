import React from 'react';
import styled from 'styled-components';
import {media} from '../style/mediaQuery';

const BrandWrapper = styled.a`
  display: block;
  width: 84px;
  height: 27px;
  border-radius: 10px;
  background: ${(props) => props.theme.color.gray};
  margin-left: 16px;

  ${media.md`
    margin-left: 0;
  `}
`

const Brand = () => (
  <BrandWrapper />
);

export default Brand;
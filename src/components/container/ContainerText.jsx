import React from 'react';
import styled from 'styled-components';
import {gridMaxWidths} from '../style/mediaQuery';

const ContainerTextWrapper = styled.div`
  max-width: ${gridMaxWidths.sm};
  width: 100%;
  margin: 0 auto;
  padding: 12px 30px;
  margin-top: 50px;
`

const ContainerText = ({children}) => (
  <ContainerTextWrapper>{children}</ContainerTextWrapper>
);

export default ContainerText;
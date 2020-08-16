import React from 'react';
import styled from 'styled-components';
import {gridMaxWidths} from '../style/mediaQuery';

const ContainerWrapper = styled.div`
  max-width: ${gridMaxWidths.lg};
  width: 100%;
  margin: 0 auto;
  padding: 12px 30px;
  margin-top: 50px;
`;

const Container = ({children, className}) => (
  <ContainerWrapper className={className}>
    {children}
  </ContainerWrapper>
);

export default Container;
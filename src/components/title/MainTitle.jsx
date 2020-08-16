import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: ${props => props.theme.color.black};
  margin-bottom: 30px;
`

const MainTitle = ({children}) => (
  <Title>{children}</Title>
);

export default MainTitle;
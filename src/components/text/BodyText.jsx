import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  line-height: 1.5;
`
const BodyText = ({children}) => (
  <Text>
    {children}
  </Text>
);

export default BodyText;
import React, {useContext} from 'react';
import styled from 'styled-components';

// => Context
import {StoreContext} from '../../context/StoreContext'

// => Components
import Navbar from '../nav/Navbar';

const Wrapper = styled.div`
  ${props => {
    if (props.isOpen) {
      return `overflow: hidden;
                    width: 100vw;
                    height: 100vh;`
    }
  }}
`

const Layout = ({children}) => {
  const { state } = useContext(StoreContext)
  const { isOpen } = state
  return (
    <Wrapper isOpen={isOpen}>
      <Navbar />
      {children}
    </Wrapper>
  )
};

export default Layout;
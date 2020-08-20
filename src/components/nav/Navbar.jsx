import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'

// => Context
import { StoreContext } from '../../context/StoreContext'

// => Components
import Burger from './Burger'
import Brand from './Brand'
import RightNav from './RightNav'

// => Styles
import { media } from '../style/mediaQuery'
import { gridMaxWidths } from '../style/mediaQuery'

const Nav = styled.nav`
  overflow: ${(props) => (props.isOpen ? 'hidden' : 'visible')};
  background: ${(props) => props.theme.color.white};
  box-shadow: 6px 6px 6px rgba(222, 222, 222, 0.25);
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
  z-index: 900;
  height: 72px;
`

const Container = styled.div`
  max-width: ${gridMaxWidths.lg};
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 900;
  transition: all 0.3s ease;
  left: ${(props) => (props.isOpen ? 'calc(100% - 26px)' : '0')};
  width: 100%;

  ${media.sm`
    left: ${(props) => (props.isOpen ? '230px' : '0')};
  `}

  ${media.md`
    width: auto;
    left: 0;
  `}
`

const Navbar = () => {
  const { state, dispatch } = useContext(StoreContext)
  const { isOpen } = state

  const node = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => {
    dispatch({ type: 'TOGGLE', isOpen: false })
  }

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return
    }
    dispatch({ type: 'TOGGLE', isOpen: false })
  }

  return (
    <Nav isOpen={isOpen}>
      <Container ref={node}>
        <LeftNav isOpen={isOpen}>
          <Burger />
          <Brand />
        </LeftNav>
        <RightNav />
      </Container>
    </Nav>
  )
}

export default Navbar

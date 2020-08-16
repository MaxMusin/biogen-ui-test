import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

// => Context
import { StoreContext } from '../../context/StoreContext'

// => Components
import Avatar from '../avatar/Avatar'
import Notification from '../notification/Notification'
import Dropdown from '../dropdown/Dropdown'

// => Styles
import { media } from '../style/mediaQuery'
import { gridMaxWidths } from '../style/mediaQuery'

// => Assets
import UserImage from '../../assets/images/user-image.jpg'

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

const MobileWrapper = styled.div`
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

const Toggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  float: left;
  padding: 10px;
  margin-left: -10px;
  ${media.md`
    display: none;
  `};
`

const BarWrapper = styled.div`
  position: relative;
  width: 26px;
  height: 25px;
`

const Bar = styled.span`
  background: ${(props) => props.theme.color.gray};
  height: 2px;
  width: 26px;
  display: block;
  border-radius: 2px;
  position: absolute;
  transform-origin: center;
  transition: all 0.3s ease;
  &:nth-child(1) {
    top: calc(50% - 9px);
    transform: ${(props) =>
      props.isOpen
        ? 'translate(0%, 9px) rotate(45deg)'
        : 'translate(0%, Opx) rotate(0deg)'};
  }
  &:nth-child(2) {
    top: calc(50% - 1px);
    opacity: ${(props) => (props.isOpen ? '0' : '1')};
    width: 20px;
  }
  &:nth-child(3) {
    top: calc(50% + 7px);
    transform: ${(props) =>
      props.isOpen
        ? 'translate(0%, -7px) rotate(-45deg)'
        : 'translate(0%, 0px) rotate(0deg)'};
  }
`

const Brand = styled.a`
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

const RightNav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  left: ${(props) => (props.isOpen ? 'calc(100% - 26px)' : '0')};

  ${media.sm`
    left: 0;
  `}
`

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 30;
  background: ${(props) => props.theme.color.white};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.35s ease;
  width: calc(100vw - 87px);
  box-shadow: 6px 6px 6px rgba(222, 222, 222, 0.25);

  ${media.sm`
    width: 230px;
  `}

  ${media.md`
    transition: none;
    position: relative;
    flex-flow: row nowrap;
    width: auto;
    transform: none;
    background: none;
    box-shadow: none;
  `}
`

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 20px 0 40px;

  ${media.md`
    position: relative;
    flex-flow: row nowrap;
    width: auto;
    padding: 0;
    transform: none;
    box-shadow: none;
  `}

  li {
    text-align: left;
    transition: opacity 0.35s ease-out, transform 0.35s ease-out;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transform: ${(props) =>
      props.isOpen ? 'none' : 'scale(1.1) translateY(-24px)'};

    ${media.md`
      text-align: center;
      opacity: 1;
      transform: none;
    `}

    &:nth-child(1) {
      transition-delay: 300ms, 300ms;
    }
    &:nth-child(2) {
      transition-delay: 350ms, 350ms;
    }
    &:nth-child(3) {
      transition-delay: 400ms, 400ms;
    }
    &:nth-child(4) {
      transition-delay: 450ms, 450ms;
    }
    &:nth-child(5) {
      transition-delay: 500ms, 500ms;
    }

    ${media.md`
        margin: 0px 36px; 
    `}

    a {
      display: block;
      text-align: left;
      font-family: ${(props) => props.theme.font.primary};
      font-size: 1rem;
      padding: 22px 16px 21px;
      color: ${(props) => props.theme.color.black};
      position: relative;
      cursor: pointer;
      text-decoration: none;
      border-left: 3px solid transparent;

      ${media.md`
        padding: 28px 4px 25px;
        text-align: center;
        display: inline-block;
        border-bottom: 2px solid transparent;
        border-left: none;
      `}

      &.active {
        font-weight: 500;
        border-left: 3px solid ${(props) => props.theme.color.primary};
        
        ${media.md`
          border-bottom: 2px solid ${(props) => props.theme.color.primary};
          border-left: none;
        `}
        
      }

      &:hover {
        border-left: 3px solid ${(props) => props.theme.color.primary};
        
        ${media.md`
          border-bottom: 2px solid ${(props) => props.theme.color.primary};
          border-left: none;
        `}
      }

      &:focus {
        border-left: 3px solid ${(props) => props.theme.color.primary};
        outline-color: ${(props) => props.theme.color.primary};
        
        ${media.md`
          border-bottom: 2px solid ${(props) => props.theme.color.primary};
          border-left: none;
        `}
      }
      
      &:after {
        content: '';
        position: absolute;
        width: calc(100% - 32px);
        left: 50%;
        -webkit-transform: translate(-50%);
        -ms-transform: translate(-50%);
        transform: translate(-50%);
        bottom: 0;
        height: 1px;
        background: ${(props) => props.theme.color.gray};
        opacity: 0.75;
        
        ${media.md`
          content: initial;
        `}
      }
    }
  }
`

const NotificationWrapper = styled(Notification)`
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;

  ${media.sm`
        margin: 0 26px;
  `}
`

const DropdownWrapper = styled(Dropdown)`
  margin: 0 -10px 0 0;

  ${media.sm`
        margin: 0 0 0 26px;
  `}

  button {
    padding: 16px 10px;
    transition: transform 0.35s ease-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }

    &:before, &:after {
      content: '';
      position: absolute;
      width: 42px;
      height: 42px;
      left: 9px;
      top: 15px;
      z-index: 40;
      border-radius: 20px;
      transition: opacity 0.35s ease-out;
    }
    
    &:before {
      border: 4px solid ${(props) => props.theme.color.white};
      z-index: 40; 
    }
    
    &:after {
      box-shadow: 2px 2px 6px 2px rgba(222, 222, 222, 0.55);
      z-index: 0;
    }
  }
`

const UserDropdownList = styled.ul`
  padding: 20px;
  min-width: 181px;

  li {
    margin-bottom: 19px;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      text-decoration: none;
      display: block;
      padding: 8px 4px;
      color: ${(props) => props.theme.color.black};
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom-color: ${(props) => props.theme.color.primary};
      }

      &:focus {
        outline-color: ${(props) => props.theme.color.primary};
        border-bottom-color: ${(props) => props.theme.color.primary};
      }
    }
  }
`

const Header = styled.div`
  padding: 22px 14px 23px;
  background: linear-gradient(-26deg, #188df2 0%, #00ccbe 100%);
  
  ${media.md`
    display: none;
  `}
`

const Body = styled.div`
  overflow-y: scroll;
  height: calc(100% - 118px);
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0 -2px 4px 0 rgba(18, 19, 18, 0.09);
  
  ${media.md`
    display: none;
  `}
  
  p {
    font-size: 0.75rem;
    line-height: 0.875rem;
    padding: 16px;
  }
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

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE', isOpen: !isOpen })
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
        <MobileWrapper isOpen={isOpen}>
          <Toggle onClick={handleToggle}>
            <BarWrapper>
              <Bar isOpen={isOpen} />
              <Bar isOpen={isOpen} />
              <Bar isOpen={isOpen} />
            </BarWrapper>
          </Toggle>
          <Brand />
        </MobileWrapper>
        <RightNav isOpen={isOpen}>
          <MobileNav isOpen={isOpen}>
            <Header>
              <Brand />
            </Header>
            <Body>
              <MenuList isOpen={isOpen}>
                <li>
                  <NavLink exact to="/" activeClassName="active" onClick={handleToggle}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/events" activeClassName="active" onClick={handleToggle}>
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/clinical-data" activeClassName="active" onClick={handleToggle}>
                    Clinical data
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/therapies" activeClassName="active" onClick={handleToggle}>
                    Therapies
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/patient-support" activeClassName="active" onClick={handleToggle}>
                    Patient support
                  </NavLink>
                </li>
              </MenuList>
            </Body>
            <Footer>
              <p>© 2020 myBiogen. All rights reserved</p>
            </Footer>
          </MobileNav>
          <NotificationWrapper />
          <DropdownWrapper>
            <Avatar imageSrc={UserImage} altText={'User image'} />
            <UserDropdownList>
              <li>
                <Link to="/">Account settings</Link>
              </li>
              <li>
                <Link to="/">Log out</Link>
              </li>
            </UserDropdownList>
          </DropdownWrapper>
        </RightNav>
      </Container>
    </Nav>
  )
}

export default Navbar

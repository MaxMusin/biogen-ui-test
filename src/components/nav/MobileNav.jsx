import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// => Context
import { StoreContext } from '../../context/StoreContext'

// => Components
import Brand from './Brand'

// => Styles
import { media } from '../style/mediaQuery'

// => Mock
import { mockMenuList } from './mockMenuList'

const MobileNavWrapper = styled.div`
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
`

const MenuItem = styled.li`
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
`

const MobileNavHeader = styled.div`
  padding: 22px 14px 23px;
  background: linear-gradient(-26deg, #188df2 0%, #00ccbe 100%);

  ${media.md`
    display: none;
  `}
`

const MobileNavBody = styled.div`
  overflow-y: scroll;
  height: calc(100% - 118px);
`

const MobileNavFooter = styled.div`
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

const MobileNav = () => {
  const { state, dispatch } = useContext(StoreContext)
  const { isOpen } = state

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE', isOpen: !isOpen })
  }

  return (
    <MobileNavWrapper isOpen={isOpen}>
      <MobileNavHeader>
        <Brand />
      </MobileNavHeader>
      <MobileNavBody>
        <MenuList isOpen={isOpen}>
          {mockMenuList.map((menuItem) =>
            menuItem.path === '/' ? (
              <MenuItem isOpen={isOpen} key={menuItem.id}>
                <NavLink
                  exact
                  to={menuItem.path}
                  activeClassName="active"
                  onClick={handleToggle}
                >
                  {menuItem.name}
                </NavLink>
              </MenuItem>
            ) : (
              <MenuItem isOpen={isOpen} key={menuItem.id}>
                <NavLink
                  to={menuItem.path}
                  activeClassName="active"
                  onClick={handleToggle}
                >
                  {menuItem.name}
                </NavLink>
              </MenuItem>
            )
          )}
        </MenuList>
      </MobileNavBody>
      <MobileNavFooter>
        <p>© 2020 myBiogen. All rights reserved</p>
      </MobileNavFooter>
    </MobileNavWrapper>
  )
}

export default MobileNav

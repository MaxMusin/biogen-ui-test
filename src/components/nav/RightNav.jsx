import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// => Context
import { StoreContext } from '../../context/StoreContext'

// => Components
import Avatar from '../avatar/Avatar'
import Notification from '../notification/Notification'
import Dropdown from '../dropdown/Dropdown'
import MobileNav from './MobileNav'

// => Styles
import { media } from '../style/mediaQuery'

// => Assets
import UserImage from '../../assets/images/user-image.jpg'


const RightNavWrapper = styled.div`
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

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 42px;
      height: 42px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
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

const RightNav = () => {
  const { state } = useContext(StoreContext)
  const { isOpen } = state


  return (
    <RightNavWrapper isOpen={isOpen}>
      <MobileNav />
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
    </RightNavWrapper>
  )
}

export default RightNav

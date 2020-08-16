import React from 'react';
import styled from 'styled-components';

// => Assets
import { ReactComponent as NotificationIcon } from '../../assets/images/notification-icon.svg'

const NotificationWrapper = styled.button`
    background: none;
    border: none;
    padding: 22px 0 21px;
    cursor: pointer;
    
    &:focus {
      outline-color: ${(props) => props.theme.color.primary};
    }
`;

const Notification = ({className}) => (
  <NotificationWrapper className={className}>
    <NotificationIcon/>
  </NotificationWrapper>
);

export default Notification;
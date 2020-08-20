import React, {useContext} from 'react';
import styled from 'styled-components';
import {media} from '../style/mediaQuery';
import {StoreContext} from '../../context/StoreContext';

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

const Burger = () => {
  const { state, dispatch } = useContext(StoreContext)
  const { isOpen } = state

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE', isOpen: !isOpen })
  }

 return (
   <Toggle onClick={handleToggle}>
     <BarWrapper>
       <Bar isOpen={isOpen} />
       <Bar isOpen={isOpen} />
       <Bar isOpen={isOpen} />
     </BarWrapper>
   </Toggle>
 )
};

export default Burger;
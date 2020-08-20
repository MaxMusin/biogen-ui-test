import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const DropdownWrapper = styled.div`
  position: relative;
`

const Toggle = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  &:focus {
    outline-color: ${(props) => props.theme.color.primary};
  }
`

const Panel = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 4px 60px rgba(100, 133, 157, 0.15);
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.color.gray};
  position: absolute;
  right: 0;
`

const Dropdown = ({ children, className }) => {
  const node = useRef()
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return
    }
    setToggle(false)
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <DropdownWrapper
      ref={node}
      className={className}
    >
      <Toggle onClick={handleToggle}>
        {children[0]}
      </Toggle>
      <Panel isOpen={toggle}>{children[1]}</Panel>
    </DropdownWrapper>
  )
}

export default Dropdown

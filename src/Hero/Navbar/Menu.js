import React from 'react'
import styled from 'styled-components'

import { styles } from '../../UI'

const {
  constants: { orange }
} = styles;

const MenuBlock = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  font-size: .9em;
  text-transform: uppercase;
`

const MenuItem = styled.li`
  margin-left: 10px;
  padding: 2px 5px;
  position: relative;
  transition-duration: 0.3s;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    position: absolute;
    opacity: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 5px;
    width: 5px;
    background-color: ${orange};
    margin: 2px auto 0 auto;
    border-radius: 50%;
    transition-duration: 0.3s;
  }

  &:hover {
    color: ${orange};
  }

  &:hover:after {
    opacity: 1;
    box-shadow: 10px 0 ${orange}, -10px 0 ${orange};
  }
`

const Menu = props => {
  return (
    <MenuBlock>
      <MenuItem><span>Home</span></MenuItem>
      <MenuItem><span>Projects</span></MenuItem>
      <MenuItem><span>Experience</span></MenuItem>
      <MenuItem><span>Contact</span></MenuItem>
    </MenuBlock>
  )
}

export default Menu

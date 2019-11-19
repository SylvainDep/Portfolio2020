import React, { Component } from 'react'
import styled from 'styled-components'
import SmoothScrolling from "../../UI/shared/SmoothScrolling";

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

class Menu extends Component {
  scrollHandler = (anchor) => {
    SmoothScrolling.scrollTo(anchor);
  }

  render() {
    return (
      <MenuBlock>
        <MenuItem>
          <a onClick={() => this.scrollHandler("services")}>Services</a>
        </MenuItem>
        <MenuItem>
          <a onClick={() => this.scrollHandler("projects")}>Projects</a>
        </MenuItem>
        <MenuItem>
          <a onClick={() => this.scrollHandler("skills")}>Skills</a>
        </MenuItem>
        <MenuItem>
          <a onClick={() => this.scrollHandler("experience")}>Experience</a>
        </MenuItem>
        <MenuItem>
          <a onClick={() => this.scrollHandler("contact")}>Contact</a>
        </MenuItem>
      </MenuBlock>
    )
  }
}

export default Menu

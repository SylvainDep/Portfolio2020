import React, { Component } from 'react'
import styled from 'styled-components'
import SmoothScrolling from "../../UI/shared/SmoothScrolling";

import { styles } from '../../UI'

const {
  uiblocks: { Mask },
  constants: { dark_grey, orange, mobile_width }
} = styles;

const MenuBlock = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  font-size: .9em;
  text-transform: uppercase;
  z-index: 1000;
  margin: 0;

  @media screen and (max-width: ${mobile_width}) {
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin: 0;
    padding: 20px;
    width: 250px;
    position: fixed;
    top: 0;
    left: ${props => props.open ? '0' : '-250px'};
    font-size: 1em;
    background-color: ${dark_grey}
    height: 100vh;
    transition-duration: 0.3s;
  }
`

const MenuItem = styled.li`
  margin-left: 10px;
  padding: 2px 5px;
  position: relative;
  transition-duration: 0.3s;
  cursor: pointer;
  padding: 20px 10px;

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

  @media screen and (max-width: ${mobile_width}) {
    margin: 20px 0;
  }
`

const MenuIcon = styled.div`
  background-color: ${orange};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  position: relative;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 1000;

  @media screen and (min-width: ${mobile_width}) {
    display: none;
  }
`

const MenuDrawer = styled.div`
  height: 3px;
  width: 25px;
  background-color: white;
  position: relative;
  cursor: pointer;

  &:before {
    position: absolute;
    top: -8px;
    display: block;
    content: '';
    height: 3px;
    width: 25px;
    background-color: white;
  }

  &:after {
    position: absolute;
    bottom: -8px;
    display: block;
    content: '';
    height: 3px;
    width: 25px;
    background-color: white;
  }
`

class Menu extends Component {
  state = {
    isMobileMenuOpen: false
  }

  toggleMobileMenu = () => {
    this.setState(prevState => {
      return {isMobileMenuOpen: !prevState.isMobileMenuOpen}
    })

    console.log(this.state.isMobileMenuOpen)
  }

  scrollHandler = (anchor) => {
    SmoothScrolling.scrollTo(anchor);
    this.toggleMobileMenu();
  }

  render() {
    return (
      <>
      <Mask open={this.state.isMobileMenuOpen} />
        <MenuBlock open={this.state.isMobileMenuOpen}>
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
        <MenuIcon onClick={() => this.toggleMobileMenu()}>
          <MenuDrawer />
        </MenuIcon>
      </>
    )
  }
}

export default Menu

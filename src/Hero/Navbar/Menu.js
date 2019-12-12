import React, { Component } from 'react'
import styled from 'styled-components'
import SmoothScrolling from "../../UI/shared/SmoothScrolling";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  position: relative;
  transition-duration: 0.3s;
  cursor: pointer;
  padding: 20px 10px;

  a {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: ${mobile_width}) {
    margin: 20px 0;
  }

  .menuitem-icon {
    margin-right: 5px;
    opacity: 0;
    transition-duration: .3s;
  }

  :hover {
    .menuitem-icon {
      opacity: 1;
    }
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
            <a onClick={() => this.scrollHandler("services")}>
              <FontAwesomeIcon className="menuitem-icon" icon={faHome} size="sm"/>
              Services
            </a>
          </MenuItem>
          <MenuItem>
            <a onClick={() => this.scrollHandler("projects")}>
              <FontAwesomeIcon className="menuitem-icon" icon={faHome} size="sm"/>
              Projects
            </a>
          </MenuItem>
          <MenuItem>
            <a onClick={() => this.scrollHandler("skills")}>
              <FontAwesomeIcon className="menuitem-icon" icon={faHome} size="sm"/>
              Skills
            </a>
          </MenuItem>
          <MenuItem>
            <a onClick={() => this.scrollHandler("experience")}>
              <FontAwesomeIcon className="menuitem-icon" icon={faHome} size="sm"/>
              Experience
            </a>
          </MenuItem>
          <MenuItem>
            <a onClick={() => this.scrollHandler("contact")}>
              <FontAwesomeIcon className="menuitem-icon" icon={faHome} size="sm"/>
              Contact
            </a>
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

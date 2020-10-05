import React, { Component } from 'react'
import styled from 'styled-components'
import SmoothScrolling from "../../UI/shared/SmoothScrolling";
import { faRocket, faBriefcase, faHistory, faStar, faCode } from "@fortawesome/free-solid-svg-icons";
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
  position: relative;
  transition-duration: 0.3s;
  cursor: pointer;
  padding: 20px 10px;

  a {
    display: flex;
    align-items: center;
  }

  .menuitem-icon {
    margin-right: 5px;
    opacity: 0;
    transition-duration: .3s;
    transform: translateY(5px);
  }

  :after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${orange};
    height: 3px;
    width: 0;
    border-radius: 0 0 10px 10px;
    transition-duration: .3s;
    opacity: 0;
  }

  :before {
    position: absolute;
    top: -4px;
    left: 50%;
    right: 50%;
    content: "";
    border-bottom: 8px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${orange};
    margin-left: -4px;
    transition: all 0.3s ease;
    opacity: 0;
  }

  :hover {
    .menuitem-icon {
      opacity: 1;
      transform: translateY(0);
    }

    :after {
      opacity: 1;
      width: 100%;
    }

    :before {
      opacity: 1;
      top: 0;
    }
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
  visibility: ${props => props.open ? "hidden" : "visible"}

  &:before {
    transition-duration: .3s;
    position: absolute;
    top: ${props => props.open ? "0" : "-8px"};
    display: block;
    content: '';
    height: 3px;
    width: 25px;
    background-color: white;
    visibility: visible;
    transform: rotate(${props => props.open ? "45deg" : "0deg"})
  }

  &:after {
    transition-duration: .3s;
    position: absolute;
    bottom: ${props => props.open ? "0" : "-8px"};
    display: block;
    content: '';
    height: 3px;
    width: 25px;
    background-color: white;
    visibility: visible;
    transform: rotate(${props => props.open ? "-45deg" : "0deg"})
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
              <FontAwesomeIcon className="menuitem-icon" icon={faRocket} size="sm"/>
              Services
            </a>
          </MenuItem>
          <MenuItem>
            <a onClick={() => this.scrollHandler("projects")}>
              <FontAwesomeIcon className="menuitem-icon" icon={faBriefcase} size="sm"/>
              Projects
            </a>
          </MenuItem>
          <MenuItem>
            <a onClick={() => this.scrollHandler("skills")}>
              <FontAwesomeIcon className="menuitem-icon" icon={faCode} size="sm"/>
              Skills
            </a>
          </MenuItem>
          <MenuItem>
            <a onClick={() => this.scrollHandler("experience")}>
              <FontAwesomeIcon className="menuitem-icon" icon={faHistory} size="sm"/>
              Experience
            </a>
          </MenuItem>
          <MenuItem>
            <a onClick={() => this.scrollHandler("contact")}>
              <FontAwesomeIcon className="menuitem-icon" icon={faStar} size="sm"/>
              Contact
            </a>
          </MenuItem>
        </MenuBlock>
        <MenuIcon onClick={() => this.toggleMobileMenu()}>
          <MenuDrawer open={this.state.isMobileMenuOpen} />
        </MenuIcon>
      </>
    )
  }
}

export default Menu

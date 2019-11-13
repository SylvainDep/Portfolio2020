import React, { Component } from 'react'
import styled from 'styled-components'

import Navbar from './Navbar/Navbar'
import HeroModule from './HeroModule/HeroModule'
import bgImg from '../assets/img/personal-bg.jpg';

const HeroArea = styled.div`
  display: flex;
  align-items:center;
  height: 680px;
  background: repeating-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3) 2px,
    rgba(0, 0, 0, 0.4) 2px,
    rgba(0, 0, 0, 0.4) 4px
  ), url(${bgImg}) no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center
`

class Hero extends Component {
  render() {
    return (
      <HeroArea>
        <Navbar />
        <HeroModule />
      </HeroArea>
    )
  }
}

export default Hero

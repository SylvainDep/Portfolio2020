import React, { Component } from 'react'
import styled from 'styled-components'
import { faRocket, faBriefcase, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SmoothScrolling from "../UI/shared/SmoothScrolling";

import Navbar from './Navbar/Navbar'
import HeroModule from './HeroModule/HeroModule'
import bgImg from '../assets/img/personal-bg.jpg';

const HeroArea = styled.div`
  display: flex;
  align-items:center;
  position: relative;
  height: 680px;
  max-height: 75vh;
  background: repeating-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3) 2px,
    rgba(0, 0, 0, 0.4) 2px,
    rgba(0, 0, 0, 0.4) 4px
  ), url(${bgImg}) no-repeat center center;
  background-size: cover;
  color: white;
  text-align: left
`

const ButtonDown = styled.div`
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  border: 2px solid white;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
  font-size: 1.4em;
  cursor: pointer;

  .hero_chevron {
    display: block;
  }

  .hero_chevron.first {
    animation-delay: 0.2s;
    transform: translateY(4px);
    animation-name: bounceChevron1;
    animation-duration:1.4s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
  }

  .hero_chevron.second {
    transform: translateY(-3px);
    animation-name: bounceChevron2;
    animation-duration:1.4s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
  }

  @keyframes bounceChevron1 {
    0% {opacity: 1; transform: translateY(4px) scale(1);}
    25%{opacity: 0; transform:translateY(10px) scale(0.9);}
    26%{opacity: 0; transform:translateY(-10px) scale(0.9);}
    55% {opacity: 1; transform: translateY(4px) scale(1);}
  }

  @keyframes bounceChevron2 {
    0% {opacity: 1; transform: translateY(-3px) scale(1);}
    25%{opacity: 0; transform:translateY(10px) scale(0.9);}
    26%{opacity: 0; transform:translateY(-10px) scale(0.9);}
    55% {opacity: 1; transform: translateY(-3px) scale(1);}
  }
`

class Hero extends Component {

    scrollHandler = (anchor) => {
      SmoothScrolling.scrollTo(anchor);
    }

  render() {
    return (
      <HeroArea>
        <Navbar />
        <HeroModule />
          <ButtonDown onClick={() => this.scrollHandler("about_anchor")}>
            <FontAwesomeIcon className="hero_chevron first" icon={faChevronDown}/>
            <FontAwesomeIcon className="hero_chevron second" icon={faChevronDown}/>
          </ButtonDown>
      </HeroArea>
    )
  }
}

export default Hero

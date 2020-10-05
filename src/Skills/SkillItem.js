import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from '../UI'

const {
  constants: { dark_grey, orange, mobile_width }
} = styles;

const SkillItemContainer = styled.div`
  flex-basis: 50%
`

const SkillBar = styled.div`
  display: block;
  position: relative;
  height: 5px;
  width: calc(100% - 50px);
  background-color: white;

  &:before {
    content: '';
    display: block;
    height: 5px;
    width: 0%;
    background-color: ${orange};
    transition: width .5s ease ${props => props.delay}s;
  }

  &:after {
    content: '${props => props.level}%';
    font-size: .9em;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-50%, -50%);
    background-color: ${orange};
    transition: left .5s ease ${props => props.delay}s;
  }

  &.visible {
    &:before {
      width: ${props => props.level}%;
    }

    &:after {
      left: ${props => props.level}%;
    }
  }

  @media screen and (max-width: ${mobile_width}) {
    width: 100%;
  }
`

const SkillItem = props => {
  let isVisible = props.visible ? 'visible' : 'hidden'
  const transitionDelay = props.index/8

  return (
    <SkillItemContainer>
      <h3>{props.title}</h3>
      <SkillBar  className={isVisible} level={props.level} delay={transitionDelay} />
    </SkillItemContainer>
  )
}

export default SkillItem

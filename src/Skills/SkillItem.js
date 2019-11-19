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
    width: ${props => props.level}%;
    background-color: ${orange};
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
    left: ${props => props.level}%;
    transform: translate(-50%, -50%);
    background-color: ${orange};
  }

  @media screen and (max-width: ${mobile_width}) {
    width: 100%;
  }
`

const SkillItem = props => {
  return (
    <SkillItemContainer>
      <h3>{props.title}</h3>
      <SkillBar level={props.level} />
    </SkillItemContainer>
  )
}

export default SkillItem

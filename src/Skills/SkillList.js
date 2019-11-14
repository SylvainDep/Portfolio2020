import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SkillItem from './SkillItem'

import { styles } from '../UI'

const {
  constants: { dark_grey, orange }
} = styles;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SkillList = props => {
  return (
    <SkillsContainer>
      <SkillItem level={40}/>
      <SkillItem/>
      <SkillItem/>
      <SkillItem/>
      <SkillItem/>
      <SkillItem/>
      <SkillItem/>
      <SkillItem/>
    </SkillsContainer>
  )
}

export default SkillList

import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SkillItem from './SkillItem'

import { styles } from '../UI'

const {
  constants: { dark_grey, orange, mobile_width }
} = styles;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: ${mobile_width}) {
    display: block;
  }
`

const SkillList = props => {
  return (
    <SkillsContainer>
      <SkillItem title="HTML5/CSS3" level={95} />
      <SkillItem title="Javascript ES6" level={70} />
      <SkillItem title="ReactJS" level={55} />
      <SkillItem title="PHP/MySQL" level={40} />
      <SkillItem title="Git" level={67} />
      <SkillItem title="Jimdo" level={100} />
      <SkillItem title="Wordpress" level={58} />
      <SkillItem title="Adobe Developper Suite" level={64} />
    </SkillsContainer>
  )
}

export default SkillList

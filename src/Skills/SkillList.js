import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from 'react-intersection-observer';

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
  const { ref, inView, entry } = useInView({
    threshold: .5,
    triggerOnce: true
  });
  
  return (
    <SkillsContainer ref={ref}>
      <SkillItem title="HTML5/CSS3" level={95} visible={inView} index={1} />
      <SkillItem title="Javascript ES6" level={70} visible={inView} index={2} />
      <SkillItem title="ReactJS" level={55} visible={inView} index={3} />
      <SkillItem title="PHP/MySQL" level={40} visible={inView} index={4} />
      <SkillItem title="Git" level={67} visible={inView} index={5} />
      <SkillItem title="Jimdo" level={100} visible={inView} index={6} />
      <SkillItem title="Wordpress" level={58} visible={inView} index={7} />
      <SkillItem title="Photoshop/Illustrator" level={64} visible={inView} index={8} />
    </SkillsContainer>
  )
}

export default SkillList

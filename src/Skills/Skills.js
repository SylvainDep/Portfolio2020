import React, { Component } from 'react'
import { faRocket, faCode, faMobileAlt, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { styles } from '../UI'

import SectionHeader from '../UI/shared/SectionHeader'
import SkillList from './SkillList'

const {
  uiblocks: { CustomContentBlock, ContentArea, Grid },
  constants: { light_grey }
} = styles;

class Skills extends Component {
  render() {
    return (
      <CustomContentBlock bgImg={require('../assets/img/skills.jpg')} color="white" section>
        <ContentArea background="rgba(0, 0, 0, .5)" section>
          <SectionHeader
            icon={faRocket}
            title="My Skills"
            text="All this package is delivered with its pretty ribbon of good practices: Responsive Design, Object-oriented programming, SEO-oriented and other considerations are always kept in mind in my projects." />
          <SkillList />
        </ContentArea>
      </CustomContentBlock>
    )
  }
}

export default Skills

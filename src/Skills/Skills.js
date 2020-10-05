import React, { Component } from 'react'
import { faCode } from "@fortawesome/free-solid-svg-icons";

import { styles } from '../UI'

import SectionHeader from '../UI/shared/SectionHeader'
import SkillList from './SkillList'

const {
  uiblocks: { CustomContentBlock, ContentArea }
} = styles;

class Skills extends Component {
  render() {
    return (
      <CustomContentBlock id="skills" bgImg={require('../assets/img/skills.jpg')} color="white" section>
        <ContentArea background="rgba(0, 0, 0, .5)" section>
          <SectionHeader
            icon={faCode}
            title="My Skills"
            text="All this package is delivered with its pretty ribbon of good practices: Responsive Design, Object-oriented programming, SEO-oriented and other considerations are always kept in mind in my projects." />
          <SkillList />
        </ContentArea>
      </CustomContentBlock>
    )
  }
}

export default Skills

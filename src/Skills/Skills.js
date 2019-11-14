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
        <ContentArea background="rgba(0, 0, 0, .5)">
          <SectionHeader
            icon={faRocket}
            title="My Skills"
            text="From conception to publication, I can intervene a any step of your project and bring it to the next level." />
          <SkillList />
        </ContentArea>
      </CustomContentBlock>
    )
  }
}

export default Skills

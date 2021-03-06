import React, { Component } from 'react'
import { faHistory } from "@fortawesome/free-solid-svg-icons";

import { styles } from '../UI'

import SectionHeader from '../UI/shared/SectionHeader'
import SectionFooter from '../UI/shared/SectionFooter'
import Timeline from './Timeline'

const {
  uiblocks: { ContentBlock, ContentArea },
  constants: { light_grey }
} = styles;

class Experience extends Component {
  render() {
    return (
      <ContentBlock id="experience" background={light_grey} section>
        <ContentArea>
          <SectionHeader
            icon={faHistory}
            title="Work & Education"
            text="More than 5 years of experience and expertise in the web industry to help you reach your goals." />
          <Timeline />
          <SectionFooter />
        </ContentArea>
      </ContentBlock>
    )
  }
}

export default Experience

import React, { Component } from 'react'
import { faHistory } from "@fortawesome/free-solid-svg-icons";

import { styles } from '../UI'

import SectionHeader from '../UI/shared/SectionHeader'
import Timeline from './Timeline'

const {
  uiblocks: { ContentBlock, ContentArea },
  constants: { light_grey }
} = styles;

class Experience extends Component {
  render() {
    return (
      <ContentBlock background={light_grey} section>
        <ContentArea>
          <SectionHeader icon={faHistory} title="Work & Education" />
          <Timeline />
        </ContentArea>
      </ContentBlock>
    )
  }
}

export default Experience

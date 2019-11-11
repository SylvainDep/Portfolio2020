import React, { Component } from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import SectionHeader from '../UI/shared/SectionHeader'
import Timeline from './Timeline'

const {
  uiblocks: { ContentBlock, ContentArea, Grid },
  constants: { light_grey, dark_grey }
} = styles;

class Experience extends Component {
  render() {
    return (
      <ContentBlock background={light_grey} section>
        <ContentArea>
          <SectionHeader />
          <Timeline />
        </ContentArea>
      </ContentBlock>
    )
  }
}

export default Experience

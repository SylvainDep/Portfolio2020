import React, { Component } from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import SectionHeader from '../UI/shared/SectionHeader'
import PortfolioGallery from './PortfolioGallery'

const {
  uiblocks: { ContentBlock, ContentArea, Grid },
  constants: { light_grey, dark_grey }
} = styles;

class Portfolio extends Component {
  render() {
    return (
      <ContentBlock color={dark_grey} section>
        <ContentArea>
          <SectionHeader />
          <PortfolioGallery />
        </ContentArea>
      </ContentBlock>
    )
  }
}

export default Portfolio

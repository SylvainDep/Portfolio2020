import React, { Component } from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import SectionHeader from '../UI/shared/SectionHeader'
import ServiceTile from './ServiceTile'

const {
  uiblocks: { ContentBlock, ContentArea, Grid },
  constants: { light_grey, dark_grey }
} = styles;

class Service extends Component {
  render() {
    return (
      <ContentBlock color={dark_grey} background={light_grey} section>
        <ContentArea>
          <SectionHeader />
          <Grid>
            <ServiceTile />
            <ServiceTile />
            <ServiceTile />
            <ServiceTile />
          </Grid>
        </ContentArea>
      </ContentBlock>
    )
  }
}

export default Service

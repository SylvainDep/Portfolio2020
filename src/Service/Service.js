import React, { Component } from 'react'
import styled from 'styled-components'
import { faRocket } from "@fortawesome/free-solid-svg-icons";

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
      <ContentBlock background={light_grey} section>
        <ContentArea>
          <SectionHeader icon={faRocket} title="My Services" />
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

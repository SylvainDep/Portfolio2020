import React, { Component } from 'react'
import styled from 'styled-components'
import { faRocket, faCode, faMobileAlt, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

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
            <ServiceTile
              icon={faCode}
              title="Development"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some"/>
            <ServiceTile
              icon={faPencilRuler}
              title="Webdesign"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some"/>
            <ServiceTile
              icon={faMobileAlt}
              title="Responsive"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some"/>
            <ServiceTile
              icon={faGoogle}
              title="SEO"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some"/>
          </Grid>
        </ContentArea>
      </ContentBlock>
    )
  }
}

export default Service

import React, { Component } from 'react'
import { faRocket, faCode, faMobileAlt, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { styles } from '../UI'

import SectionHeader from '../UI/shared/SectionHeader'
import ServiceTile from './ServiceTile'

const {
  uiblocks: { ContentBlock, ContentArea, Grid },
  constants: { light_grey }
} = styles;

class Service extends Component {
  render() {
    return (
      <ContentBlock background={light_grey} section>
        <ContentArea>
          <SectionHeader icon={faRocket} title="My Services" />
          <Grid vertical="stretch">
            <ServiceTile
              icon={faCode}
              title="Development"
              text="Let's build or optimize the amazing vitrine you've always dreamt of. From scratch or with the CMS of your choice"/>
            <ServiceTile
              icon={faPencilRuler}
              title="Webdesign"
              text="Having a website build to be handy AND beautiful is a must today. No matter what your communications needs are."/>
            <ServiceTile
              icon={faMobileAlt}
              title="Responsive"
              text="Make your website not only accessible, but also optimized for any kind of device or screen size."/>
            <ServiceTile
              icon={faGoogle}
              title="SEO"
              text="The handiest website ain't much if noone actually sees it. Optimize it so everyone sees it on top of search engines' lists"/>
          </Grid>
        </ContentArea>
      </ContentBlock>
    )
  }
}

export default Service

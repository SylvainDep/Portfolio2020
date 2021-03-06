import React from 'react'
import { faRocket, faCode, faMobileAlt, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { styles } from '../UI'

import SectionHeader from '../UI/shared/SectionHeader'
import SectionFooter from '../UI/shared/SectionFooter'
import ServiceTile from './ServiceTile'

const {
  uiblocks: { ContentBlock, ContentArea, Grid, AnimWrapper },
  constants: { light_grey }
} = styles;

const Service = () => {

  return (
    <ContentBlock id="services" background={light_grey} firstsection>
      <ContentArea>
        <SectionHeader
          icon={faRocket}
          title="My Services"
          text="From conception to publication, I can step in at any step of your project and bring it to the next level." />
        <Grid vertical="stretch">
          <AnimWrapper>
            <ServiceTile
              icon={faCode}
              title="Development"
              text="Let's build or optimize the amazing vitrine you've always dreamt of. From scratch or with the CMS of your choice"
              index={1} />
          </AnimWrapper>
          <AnimWrapper>
            <ServiceTile
              icon={faPencilRuler}
              title="Webdesign"
              text="Having a website build to be handy AND beautiful is a must today. No matter what your communications needs are"
              index={2} />
          </AnimWrapper>
          <AnimWrapper>
            <ServiceTile
              icon={faMobileAlt}
              title="Responsive"
              text="Make your website not only accessible, but also optimized for any kind of device or screen size from which it will be seen"
              index={3} />
          </AnimWrapper>
          <AnimWrapper>
            <ServiceTile
              icon={faGoogle}
              title="SEO"
              text="The handiest website ain't much if noone actually sees it. Optimize it so everyone sees it on top of search engines' lists"
              index={4} />
          </AnimWrapper>
        </Grid>
        <SectionFooter />
      </ContentArea>
    </ContentBlock>
  )
}

export default Service

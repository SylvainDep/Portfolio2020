import React from 'react'
import { useInView } from 'react-intersection-observer';

import { styles } from '../UI'

import GalleryTile from './GalleryTile'

const {
  uiblocks: { Grid }
} = styles;

const PortfolioGallery = props => {
  const { ref, inView, entry } = useInView({
    threshold: .2,
    triggerOnce: true
  });

  return (
    <Grid justify="flex-start" ref={ref} portfolio>
      <GalleryTile
        img={require('../assets/img/jimdo_logo.png')}
        company="Jimdo"
        skills="Content/SEO, HTML/CSS, JS, Design"
        address="https://www.jimdo.com/"
        visible={inView}
        index={1} />
      <GalleryTile
        img={require('../assets/img/jimdo_helpcenter.png')}
        company="Jimdo Helpcenter"
        skills="Content/SEO, HTML/CSS, JS, Design"
        address="https://help.jimdo.com/hc/en-us"
        visible={inView}
        index={2} />
      <GalleryTile
        img={require('../assets/img/sendesignal.png')}
        company="Sendesignal"
        skills="HTML/CSS, JS, JQuery"
        address="https://sendesignal.de/"
        visible={inView}
        index={3} />
      <GalleryTile
        img={require('../assets/img/seaeye.png')}
        company="Sea Eye"
        skills="Wordpress, custom template"
        address="https://sea-eye.org/"
        visible={inView}
        index={4} />
      <GalleryTile
        img={require('../assets/img/nussknacker.png')}
        company="Nussknacker"
        skills="Wordpress, custom template"
        address="http://vorschau.sendesignal-hosting.de/vitalaltona/wir-gehoeren-zu-hamburg/"
        visible={inView}
        index={5} />
      <GalleryTile
        img={require('../assets/img/volksbank.png')}
        company="Volksbank"
        skills="React, Javascript"
        address="http://onlinefinder.info/vvb/partnermodell/#/overview"
        visible={inView}
        index={6} />
    </Grid>
  )
}

export default PortfolioGallery

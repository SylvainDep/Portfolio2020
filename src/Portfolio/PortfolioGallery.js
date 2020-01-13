import React from 'react'

import { styles } from '../UI'

import GalleryTile from './GalleryTile'

const {
  uiblocks: { Grid }
} = styles;

const PortfolioGallery = props => {
  return (
    <Grid justify="flex-start" portfolio>
      <GalleryTile
        img={require('../assets/img/jimdo_logo.png')}
        company="Jimdo"
        skills="Content/SEO, HTML/CSS, JS, Design"
        address="https://www.jimdo.com/" />
      <GalleryTile
        img={require('../assets/img/jimdo_helpcenter.png')}
        company="Jimdo Helpcenter"
        skills="Content/SEO, HTML/CSS, JS, Design"
        address="https://help.jimdo.com/hc/en-us" />
      <GalleryTile
        img={require('../assets/img/sendesignal.png')}
        company="Sendesignal"
        skills="HTML/CSS, JS, JQuery"
        address="https://sendesignal.de/" />
      <GalleryTile
        img={require('../assets/img/seaeye.png')}
        company="Sea Eye"
        skills="Wordpress, custom template"
        address="https://sea-eye.org/" />
      <GalleryTile
        img={require('../assets/img/nussknacker.png')}
        company="Nussknacker"
        skills="Wordpress, custom template"
        address="http://vorschau.sendesignal-hosting.de/vitalaltona/wir-gehoeren-zu-hamburg/" />
      <GalleryTile
        img={require('../assets/img/volksbank.png')}
        company="Volksbank"
        skills="React, Javascript"
        address="http://onlinefinder.info/vvb/partnermodell/#/overview" />
    </Grid>
  )
}

export default PortfolioGallery

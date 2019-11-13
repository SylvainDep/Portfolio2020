import React from 'react'

import { styles } from '../UI'

import GalleryTile from './GalleryTile'

const {
  uiblocks: { Grid }
} = styles;

const PortfolioGallery = props => {
  return (
    <Grid justify="flex-start">
      <GalleryTile
        img={require('../assets/img/jimdo.png')}
        company="Jimdo"
        skills="Content/SEO, HTML/CSS, JS, Design" />
      <GalleryTile
        img={require('../assets/img/jimdo_helpcenter.png')}
        company="Jimdo Helpcenter"
        skills="Content/SEO, HTML/CSS, JS, Design" />
      <GalleryTile
        img={require('../assets/img/webagency.png')}
        company="Webagency"
        skills="HTML/CSS, Design"
        studycase />
      <GalleryTile
        img={require('../assets/img/velov.png')}
        company="Velo'V"
        skills="HTML/CSS, JS, Design"
        studycase />
      <GalleryTile
        img={require('../assets/img/ot_strasbourg.jpg')}
        company="OT Strasbourg"
        skills="HTML/CSS, JS, PHP, Wordpress"
        studycase />
      <GalleryTile
        img={require('../assets/img/sendesignal.png')}
        company="Jimdo"
        skills="HTML/CSS, JS, React" />
    </Grid>
  )
}

export default PortfolioGallery

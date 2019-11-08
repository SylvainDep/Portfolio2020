import React from 'react'
import styled from 'styled-components'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from '../UI'

import GalleryTile from './GalleryTile'

const {
  uiblocks: { Grid },
  constants: { dark_grey, orange }
} = styles;

const PortfolioGallery = props => {
  return (
    <Grid justify="flex-start">
      <GalleryTile />
      <GalleryTile />
      <GalleryTile />
      <GalleryTile />
      <GalleryTile />
      <GalleryTile />
    </Grid>
  )
}

export default PortfolioGallery

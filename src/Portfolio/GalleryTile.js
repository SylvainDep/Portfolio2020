import React from 'react'
import styled from 'styled-components'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { styles } from '../UI'

const {
  constants: { dark_grey, orange }
} = styles;

const GalleryItem = styled.div`
  flex-basis: 25%;
  height: 0;
  padding-bottom: 25%;
  background: url(${props => props.bgImg}) no-repeat center center;
  background-size: cover;
`

const GalleryTile = props => {
  return (
    <GalleryItem bgImg={require('../assets/img/portfolio.jpg')}>
    </GalleryItem>
  )
}

export default GalleryTile

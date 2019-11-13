import React from 'react'
import styled from 'styled-components'


import { styles } from '../UI'

const {
  constants: { orange }
} = styles;

const GalleryItem = styled.div`
  flex-basis: 25%;
  height: 0;
  padding-bottom: 25%;
  background: url(${props => props.bgImg}) no-repeat center center;
  background-size: 100%;
  position: relative;
`

const GalleryItemFrame = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: white;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    transition-duration: 0.5s;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: white;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    transition-duration: 0.5s;
  }

  h3, p {
    max-width: calc(100% - 60px)
  }
`

const GalleryItemContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(242, 120, 75, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  transition-duration: 0.3s;

  h3 {
    color: white;
  }

  &:hover {
    opacity: 1;

    &:before {
      height: 60%;
    }

    &:after {
      height: 60%;
    }

    ${GalleryItemFrame} {
      &:before {
        content: "";
        display: block;
        position: absolute;
        width: 60%;
        height: 2px;
        background-color: white;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%)
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 60%;
        height: 2px;
        background-color: white;
        top: 20px;
        left: 50%;
        transform: translateX(-50%)
      }
    }
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 0%;
    width: 2px;
    background-color: white;
    left: 20px;
    transition-duration: 0.5s;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 0%;
    width: 2px;
    background-color: white;
    right: 20px;
    transition-duration: 0.5s;
  }
`

const GalleryTile = props => {
  return (
    <GalleryItem bgImg={props.img}>
      <GalleryItemContent>
        <GalleryItemFrame>
          <h3>{props.company}</h3>
          <p>{props.skills}</p>
        </GalleryItemFrame>
      </GalleryItemContent>
    </GalleryItem>
  )
}

export default GalleryTile

import React from 'react'
import styled from 'styled-components'

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from '../UI'

const {
  constants: { orange, mobile_width, mobile_width_strict, desktop_width }
} = styles;

const GalleryItem = styled.a.attrs(props => ({
  target: "_blank",
}))`
  display: block;
  flex-basis: 23%;
  margin: 1%;
  height: 0;
  padding-bottom: 23%;
  background: url(${props => props.bgImg}) no-repeat center center;
  background-size: 100%;
  position: relative;
  box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.5);

  transition: opacity .25s ease ${props => props.delay}s, transform .25s ease ${props => props.delay}s;
  transform: translateY(20px);
  opacity: 0;

  &.visible {
    transform: translateY(0px);
    opacity: 1;
  }

  @media screen and (max-width: ${desktop_width}) {
    flex-basis: calc((100% / 3) - 2%);
    padding-bottom: 31%;
  }

  @media screen and (max-width: ${mobile_width}) {
    flex-basis: 48%;
    padding-bottom: 48%;
  }

  @media screen and (max-width: ${mobile_width_strict}) {
    flex-basis: 98%;
    padding-bottom: 98%;
  }
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
    margin: 0;
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

const GalleryIcon = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: ${orange};
  height: 25px;
  width: 25px;
  border-radius: 100%;
  box-shadow: 0px 0px 4px 1px lightgrey;
`

const GalleryTile = props => {
  let isVisible = props.visible ? 'visible' : 'hidden'
  const transitionDelay = props.index/6

  return (
    <GalleryItem className={isVisible} delay={transitionDelay} bgImg={props.img} href={props.address} target="_blank">
      <GalleryItemContent>
        <GalleryItemFrame>
          <h3>{props.company}</h3>
          <p>{props.skills}</p>
          <GalleryIcon href={props.address}>
            {props.address && <FontAwesomeIcon icon={faLink}/>}
          </GalleryIcon>
        </GalleryItemFrame>
      </GalleryItemContent>
    </GalleryItem>
  )
}

export default GalleryTile

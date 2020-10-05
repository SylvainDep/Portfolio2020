import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from 'react-intersection-observer';

import { styles } from '../UI'

const {
  constants: { dark_grey, orange, mobile_width },
  uiblocks: { AnimWrapper }
} = styles;

const Tile = styled.div`
  flex-basis: 23%;
  height: 100%;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.20);
  padding: 20px;
  text-align: center;
  background-color: white;
  max-width: 400px;
  transform: rotateY(180deg);
  opacity: 0;
  transition: background-color .3s ease, transform .5s ease ${props => props.delay}s, opacity .5s ease ${props => props.delay}s;

  > * {
    opacity: 0;
    transition: opacity .25s ease ${props => props.delay + 0.25}s;
  }

  &.visible {
    transform: rotateY(0deg);
    opacity: 1;

    > * {
      opacity: 1;
    }
  }

  &:hover {
    background-color: ${orange};
    color: white;

    h3 {
      color: white;
    }

    svg {
      color: white;
    }
  }

  p {
    margin: 0
  }

  @media screen and (max-width: ${mobile_width}) {
    flex-basis: 100%;
    margin: 5px auto;
    padding: 15px;
    transition: background-color .3s ease, transform .5s ease, opacity .5s ease;

    > * {
      transition: opacity .25s ease 0.25s;
    }
  }
`

const ServiceTile = props => {
  const { ref, inView, entry } = useInView({
    threshold: .5,
    triggerOnce: true
  });

  let isVisible = inView ? 'visible' : 'hidden'
  const transitionDelay = props.index/5
  return (
    <AnimWrapper ref={ref}>
      <Tile className={isVisible} delay={transitionDelay}>
        <FontAwesomeIcon icon={props.icon} color={dark_grey} size="3x" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </Tile>
    </AnimWrapper>
  )
}

export default ServiceTile

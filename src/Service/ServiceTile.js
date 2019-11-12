import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from '../UI'

const {
  constants: { dark_grey, orange }
} = styles;

const Tile = styled.div`
  flex-basis: 23%;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.20);
  padding: 20px;
  text-align: center;
  background-color: white;
  transition-duration: 0.2s;

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
`

const ServiceTile = props => {
  return (
    <Tile>
      <FontAwesomeIcon icon={props.icon} color={dark_grey} size="3x" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </Tile>
  )
}

export default ServiceTile

import React from 'react'
import styled from 'styled-components'
import { faHome } from "@fortawesome/free-solid-svg-icons";
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
      <FontAwesomeIcon icon={faHome} color={dark_grey} size="3x" />
      <h3>Webdevelopment</h3>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
    </Tile>
  )
}

export default ServiceTile

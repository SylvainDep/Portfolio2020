import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const {
  elements: { Badge },
  constants: { orange }
} = styles;

const AboutTabsContainer = styled.ul`
  padding: 10px 20px;
  list-style-type: none;

  li:not(:last-child) {
    margin-bottom: 50px;
    position: relative;
  }

  li:not(:last-child):before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    height: 90px;
    width: 2px;
    background-color: ${orange};
  }
`

const AboutTabs = (props) => {
  return (
    <AboutTabsContainer>
      <li>
        <Badge focus size="40px"><FontAwesomeIcon icon={faHome} /></Badge>
      </li>
      <li>
        <Badge size="40px"><FontAwesomeIcon icon={faHome} /></Badge>
      </li>
      <li>
        <Badge size="40px"><FontAwesomeIcon icon={faHome} /></Badge>
      </li>
      <li>
        <Badge size="40px"><FontAwesomeIcon icon={faHome} /></Badge>
      </li>
    </AboutTabsContainer>
  )
}

export default AboutTabs

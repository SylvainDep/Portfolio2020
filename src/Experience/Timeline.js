import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TimelineItem from './TimelineItem'

const {
  elements: { Badge },
  constants: { orange }
} = styles;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 5px;
    background-color: ${orange};
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    border-radius: 5px;
  }
`

const Timeline = (props) => {
  return (
    <TimelineContainer>
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
    </TimelineContainer>
  )
}

export default Timeline

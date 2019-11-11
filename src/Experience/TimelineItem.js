import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TimelineText from './TimelineText'
import TimelineDate from './TimelineDate'

const {
  elements: { Badge },
  constants: { orange }
} = styles;

const TimelineItemContainer = styled.div`
  display: flex;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;

    & div:before {
      border: 15px solid transparent;
      border-right-color: #ccc;
      left: -31px;
      top: 29px;
      content: "";
      position: absolute;
    }

    & div:after {
      border: 15px solid transparent;
      border-right-color: #fff;
      left: -30px;
      top: 26px;
      content: "";
      position: absolute;
    }
  }

  &:nth-child(odd) {

    & div:before {
      border: 15px solid transparent;
      border-left-color: #ccc;
      right: -31px;
      top: 29px;
      content: "";
      position: absolute;
    }

    & div:after {
      border: 15px solid transparent;
      border-left-color: #fff;
      right: -30px;
      top: 26px;
      content: "";
      position: absolute;
    }
  }
`

const TimelineItem = (props) => {
  return (
    <TimelineItemContainer>
      <TimelineText />
      <TimelineDate />
    </TimelineItemContainer>
  )
}

export default TimelineItem

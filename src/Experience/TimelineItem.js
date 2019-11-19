import React from 'react'
import styled from 'styled-components'

import TimelineText from './TimelineText'
import TimelineDate from './TimelineDate'

import { styles } from '../UI'

const {
  constants: { mobile_width }
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

    @media screen and (max-width: ${mobile_width}) {
      flex-direction: row-reverse;

      & div:before {
        width: 0;
        border: 15px solid transparent;
        border-right-color: #ccc;
        left: -31px;
        top: 29px;
        content: "";
        position: absolute;
      }

      & div:after {
        width: 0;
        border: 15px solid transparent;
        border-right-color: #fff;
        left: -30px;
        top: 26px;
        content: "";
        position: absolute;
      }
    }
  }

  @media screen and (max-width: ${mobile_width}) {
    margin: 10px 0;
  }
`

const TimelineItem = (props) => {
  return (
    <TimelineItemContainer>
      <TimelineText data={props.data}/>
      <TimelineDate data={props.data}/>
    </TimelineItemContainer>
  )
}

export default TimelineItem

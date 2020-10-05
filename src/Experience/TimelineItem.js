import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';

import TimelineText from './TimelineText'
import TimelineAnchor from './TimelineAnchor'

import { styles } from '../UI'

const {
  constants: { mobile_width }
} = styles;

const TimelineItemContainer = styled.div`
  display: flex;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;

    & .experience_content:before {
      border: 15px solid transparent;
      border-right-color: #ccc;
      left: -31px;
      top: 29px;
      content: "";
      position: absolute;
    }

    & .experience_content:after {
      border: 15px solid transparent;
      border-right-color: #fff;
      left: -30px;
      top: 26px;
      content: "";
      position: absolute;
    }
  }

  &:nth-child(odd) {

    & .experience_content:before {
      border: 15px solid transparent;
      border-left-color: #ccc;
      right: -31px;
      top: 29px;
      content: "";
      position: absolute;
    }

    & .experience_content:after {
      border: 15px solid transparent;
      border-left-color: #fff;
      right: -30px;
      top: 26px;
      content: "";
      position: absolute;
    }

    @media screen and (max-width: ${mobile_width}) {
      flex-direction: row-reverse;

      & .experience_content:before {
        width: 0;
        border: 15px solid transparent;
        border-right-color: #ccc;
        left: -31px;
        top: 29px;
        content: "";
        position: absolute;
      }

      & .experience_content:after {
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
  const { ref, inView } = useInView({
    threshold: .5,
    triggerOnce: true
  });

  return (
    <TimelineItemContainer ref={ref}>
      <TimelineText data={props.data} visible={inView} />
      <TimelineAnchor data={props.data} />
    </TimelineItemContainer>
  )
}

export default TimelineItem

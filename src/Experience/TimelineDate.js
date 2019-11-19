import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

const {
  constants: { orange, mobile_width }
} = styles;

const Date = styled.span`
  position: absolute;
  top: 27px;
  left: 50%;
  width: 60px;
  transform: translateX(-50%);
  text-align: center;
  padding: 3px 6px;
  background-color: ${orange};
  border-radius: 3px;
  color: white;

  @media screen and (max-width: ${mobile_width}) {
    left: 0;
    transform: translateX(0);
  }
`

const TimelineDate = (props) => {
  return (
    <Date>{props.data.dateTag}</Date>
  )
}

export default TimelineDate

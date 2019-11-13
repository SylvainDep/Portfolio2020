import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

const {
  constants: { orange }
} = styles;

const Date = styled.span`
  position: absolute;
  top: 27px;
  left: 50%;
  transform: translateX(-50%);
  padding: 3px 6px;
  background-color: ${orange};
  border-radius: 3px;
  color: white;
`

const TimelineDate = (props) => {
  return (
    <Date>Jan19</Date>
  )
}

export default TimelineDate

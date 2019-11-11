import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const {
  elements: { Badge },
  constants: { orange }
} = styles;

const TimelineTextBlock = styled.div`
  padding: 10px;
  background-color: white;
  box-shadow: 1px 1px 6px rgba(20, 20, 20, 0.4);;
  width: calc(50% - 50px);
  position: relative;
`

const TimelineText = (props) => {
  return (
    <TimelineTextBlock>
      <h3>Salut</h3>
      <p>Starting College DayInterdum et malesuada fames ac ante ipsum primis in faucibus. Etiam efficitur ultricies elit, eget ullamcorper enim scelerisque sit amet. Pellentesque blandit venenatis rhoncus.</p>
    </TimelineTextBlock>
  )
}

export default TimelineText

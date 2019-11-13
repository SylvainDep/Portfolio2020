import React from 'react'
import styled from 'styled-components'

import { faHome, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from '../UI'

const {
  constants: { orange }
} = styles;

const TimelineTextBlock = styled.div`
  padding: 15px;
  background-color: white;
  box-shadow: 1px 1px 6px rgba(20, 20, 20, 0.4);;
  width: calc(50% - 50px);
  position: relative;

  h3 {
    margin: 0;
  }

  i {
    font-size: .8em;
  }

  ul {
    padding-left: 18px;
    margin-bottom: 0;

    li {
      margin-bottom: 5px;
    }
  }
`

const TimelineDetails = styled.div`
  display: flex;
  justify-content: flex-start;

  .location, .date {
    display: flex;
    align-items: center;
  }

  .location {
    margin-right: 12px;
  }

  svg {
    margin-right: 5px;
    color: ${orange}
  }
`

const TimelineText = (props) => {
  return (
    <TimelineTextBlock>
      <h3>{props.data.title}</h3>
      <TimelineDetails>
        <div className="location">
          <FontAwesomeIcon icon={faHome} color="white" size="xs" />
          <i>{props.data.city}, {props.data.country}</i>
        </div>
        <div className="date">
          <FontAwesomeIcon icon={faCalendar} color="white" size="xs" />
          <i>{props.data.startDate} - {props.data.endDate}</i>
        </div>
      </TimelineDetails>
      <ul>
        <li>{props.data.tasks[0]}</li>
        <li>{props.data.tasks[1]}</li>
        <li>{props.data.tasks[2]}</li>
      </ul>
    </TimelineTextBlock>
  )
}

export default TimelineText

import React from 'react'
import styled from 'styled-components'

import { faHome, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from '../UI'

const {
  constants: { orange, mobile_width }
} = styles;

const TimelineTextBlock = styled.div`
  padding: 15px;
  background-color: white;
  box-shadow: 1px 1px 6px rgba(20, 20, 20, 0.4);;
  width: calc(50% - 50px);
  position: relative;

  h3 {
    margin: 0;
    height: 2em;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      max-height: 100%;
      margin-left: 10px;
    }
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

  @media screen and (max-width: ${mobile_width}) {
    width: calc(100% - 80px);
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
    margin-right: 2px;
    color: ${orange};
    width: 14px!important;
  }

  @media screen and (max-width: ${mobile_width}) {
    display: block;
    margin-top: 5px;
  }
`

const TimelineText = (props) => {
  return (
    <TimelineTextBlock>
      <h3>{props.data.title}<img src={props.data.logo} /></h3>
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

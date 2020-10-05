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

  transition: transform 1s ease, opacity 1s ease;
  opacity: 0;
  transform: translateY(50px);

  &.visible {
    opacity: 1;
    transform: translateY(0px)
  }

  h3 {
    margin: 0;
    height: 2em;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #666;

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }

  i {
    font-size: .8em;
  }

  ul {
    padding-left: 18px;
    margin: 0;

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

const Position = styled.p`
  margin: .5em 0;
  font-weight: 700;
  color: #353535;
  font-size: 1.3em;
  line-height: 1.3em;
`

const TimelineText = (props) => {
  let isVisible = props.visible ? 'visible' : 'hidden'

  return (
    <TimelineTextBlock className={"experience_content " + isVisible}>
      <h3><img src={props.data.logo} alt="logo" /></h3>
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
      <Position>{props.data.position}</Position>
      <ul>
        <li>{props.data.tasks[0]}</li>
        <li>{props.data.tasks[1]}</li>
        <li>{props.data.tasks[2]}</li>
      </ul>
    </TimelineTextBlock>
  )
}

export default TimelineText

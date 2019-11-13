import React from 'react'
import styled from 'styled-components'

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
  justify-content: space-between;
`

const TimelineText = (props) => {
  return (
    <TimelineTextBlock>
      <h3>{props.data.title}</h3>
      <TimelineDetails>
        <i>{props.data.city}, {props.data.country}</i>
        <i>{props.data.startDate} - {props.data.endDate}</i>
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

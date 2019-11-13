import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import TimelineItem from './TimelineItem'

const {
  constants: { orange }
} = styles;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 5px;
    background-color: ${orange};
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    border-radius: 5px;
  }
`

const Timeline = (props) => {
  const experiences = {
    sendesignal: {
      title: 'Sendesignal',
      startDate: 'Aug 2019',
      endDate: 'Today',
      city: 'Hamburg',
      country: 'Germany',
      tasks: [
        'Development of banking product Finders with vanilla JS',
        'Implementation of new features/Optimization in existing Finders',
        'Developped the use of the modern adequate tech with React'
      ]
    },
    jimdo: {
      title: 'Jimdo',
      startDate: 'Nov 2014',
      endDate: 'May 2019',
      city: 'Hamburg',
      country: 'Germany',
      tasks: [
        'Cross Platform SEO: Optimization of in-site content as well as in surrounding services, such as Youtube (production and publication of multiple videos)',
        'Implementation of new features/Optimization in existing Finders',
        'Developped the use of the modern adequate tech with React'
      ]
    },
  }

  return (
    <TimelineContainer>
      <TimelineItem data={experiences.sendesignal}/>
      <TimelineItem data={experiences.jimdo}/>
    </TimelineContainer>
  )
}

export default Timeline

import React, { Component } from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import TimelineItem from './TimelineItem'

const {
  elements: { Button },
  constants: { orange, mobile_width }
} = styles;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  position: relative;
  margin-bottom: 100px;

  &:before {
    content: '';
    position: absolute;
    display: block;
    height: 105%;
    width: 5px;
    background-color: ${orange};
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    border-radius: 5px;

    @media screen and (max-width: ${mobile_width}) {
      left: 30px;
      transform: translateX(-50%);
    }
  }

  ${Button} {
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    margin: 0;

    @media screen and (max-width: ${mobile_width}) {
      left: 0;
      transform: translateX(0);
    }
  }
`

class Timeline extends Component {
  state = {
    sendesignal: {
      title: 'Sendesignal',
      startDate: 'Aug 2019',
      endDate: 'Today',
      dateTag: '2019',
      city: 'Hamburg',
      country: 'Germany',
      tasks: [
        'Development of banking product Finders with vanilla JS',
        'Implementation of new features/optimization in existing Finders',
        'Developped the use of the modern adequate tech with React'
      ]
    },
    jimdo: {
      title: 'Jimdo',
      startDate: 'Nov 2014',
      endDate: 'May 2019',
      dateTag: '2014 - 2019',
      city: 'Hamburg',
      country: 'Germany',
      tasks: [
        'Template fixing in an AGILE environment',
        'Cross Platform SEO: Optimization of in-site content as well as in surrounding services, such as Youtube (production and publication of multiple videos)',
        'Multilingual technical support (FR/EN) for pro customers, specialised in design and technically challenging projects'
      ]
    },
    openclassroom: {
      title: 'OpenClassroom',
      startDate: 'Feb 2018',
      endDate: 'Oct 2018',
      dateTag: '2018',
      city: 'Online',
      country: 'French school',
      tasks: [
        'Conceptualizing and developping 5 projects focusing on different web technologies, with the support of a professional mentor for best practices',
        'Introduction to Git, and Frameworks such as Symfony, React, Angular...',
        'Application of OOP, focus on a clean and readable code'
      ]
    },
    sncf: {
      title: 'SNCF',
      startDate: 'Sep 2011',
      endDate: 'Jul 2013',
      dateTag: '2011 - 2013',
      city: 'Paris 13',
      country: 'France',
      tasks: [
        'POS material structuring, positionning and optimizing ; Orientation and global information for international clientele',
        'Feeding the regional network blog (traffic information, commercial offers...) ; Online after-sales service',
        'Lead Project: Modernizing and optimizing a key parisian station (Paris Austerlitz) signage, using new technologies'
      ]
    },
    ifcv: {
      title: 'Bachelor in (Online-) Store Management',
      startDate: 'Sep 2011',
      endDate: 'Jul 2013',
      dateTag: '2011 - 2013',
      city: 'Levallois-P.',
      country: 'France',
      tasks: [
        'Sandwich course training, completed along at the SNCF',
        'Managing offers/products/resources with focus on clientele needs analysis',
        'Lead Project: Modernizing and optimizing a key parisian station (Paris Austerlitz) signage, using new technologies'
      ]
    },
    expanded: false
  }

  toggleExpansion = () => {
    this.setState(prevState => {
      return {expanded: !prevState.expanded}
    });

    console.log(this.state.expanded)
  }

  render() {
    return (
      <TimelineContainer>
        <TimelineItem data={this.state.sendesignal} />
        <TimelineItem data={this.state.jimdo} />
        <TimelineItem data={this.state.openclassroom} />
        {this.state.expanded &&
          <>
            <TimelineItem data={this.state.sncf} />
            <TimelineItem data={this.state.ifcv} />
          </>
        }
        <Button onClick={() => this.toggleExpansion()} primary>{!this.state.expanded ? 'Show More' : 'Collapse'}</Button>
      </TimelineContainer>
    )
  }
}

export default Timeline

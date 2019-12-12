import React, { Component } from 'react'
import styled from 'styled-components'

import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from '../UI'

const {
  constants: { orange, mobile_width }
} = styles;

const Anchor = styled.div`
  position: absolute;
  top: 15px;
  left: 50%;
  width: 50px;
  height: 50px;
  transform: translateX(-50%);
  background-color: ${orange};
  border-radius: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${mobile_width}) {
    left: 5px;
    transform: translateX(0);
  }
`

class TimelineAnchor extends Component {
  render() {
    let anchorType = '';

    switch (this.props.data.type) {
      case 'training':
        anchorType = <FontAwesomeIcon icon={faGraduationCap} color="white" size="lg" />
        break;
      case 'job':
        anchorType = <FontAwesomeIcon icon={faBriefcase} color="white" size="lg" />
        break;
      default:
    }

    return (
      <Anchor>{anchorType}</Anchor>
    )
  }
}

export default TimelineAnchor

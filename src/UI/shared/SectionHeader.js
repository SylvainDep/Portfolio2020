import React from 'react'
import styled from 'styled-components'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from '../../UI'

const {
  constants: { orange }
} = styles;

const SectionHeaderContainer = styled.div`
  text-align: center;
  max-width: 740px;
  margin: auto;
  margin-bottom: 50px;

  & h2 {
    text-transform: uppercase;
    font-size: 1.8em;
    margin-bottom: 0;
    padding-bottom: 0
  }

  & h2:after {
    display: none;
  }
`

const Separator = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin: 15px auto;
  background-color: ${orange};
  border-radius: 50%;

  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 2px;
    background-color: ${orange};
  }

  &:before {
    left: -40px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:after {
    right: -40px;
    top: 50%;
    transform: translateY(-50%);
  }
`

const SectionHeader = props => {
  return (
    <SectionHeaderContainer>
     <h2>My services</h2>
     <Separator>
       <FontAwesomeIcon icon={faHome} color="white" size="xs" />
     </Separator>
     <p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
    </SectionHeaderContainer>
  )
}

export default SectionHeader

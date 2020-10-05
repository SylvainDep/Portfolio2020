import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from 'react-intersection-observer';

import { styles } from '../../UI'

const {
  constants: { orange }
} = styles;

const SectionHeaderContainer = styled.div`
  text-align: center;
  max-width: 740px;
  margin: auto;
  margin-bottom: 50px;
  overflow: hidden;

  .fromLeft, .fromRight {
    transition: transform .5s ease, opacity .5s ease;
  }

  .fromLeft {
    transform: translateX(-80px);
    opacity: 0;

    &.visible {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  .fromRight {
    transform: translateX(80px);
    opacity: 0;

    &.visible {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  & h2 {
    text-transform: uppercase;
    font-size: 1.8em;
    margin-bottom: 0;
    padding-bottom: 0
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
  const { ref, inView } = useInView({
    threshold: .5,
    triggerOnce: true
  });

  let isVisible = inView ? 'visible' : 'hidden'

  return (
    <SectionHeaderContainer ref={ref}>
      <div className={"fromLeft "+isVisible}>
        <h2>{props.title}</h2>
        <Separator>
          <FontAwesomeIcon icon={props.icon} color="white" size="xs" />
        </Separator>
      </div>
      <div className={"fromRight "+isVisible}>
        <p>{props.text}</p>
      </div>
    </SectionHeaderContainer>
  )
}

export default SectionHeader

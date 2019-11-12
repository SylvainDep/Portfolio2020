import React from 'react'
import styled from 'styled-components'
import { faRocket, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from '../../UI'

const {
  uiblocks: { Grid, ContentArea },
  elements: { Button }
} = styles;

const SubTitle = styled.span`
  display: block;
  margin: 15px 0;
  font-size: 1.5em;
`

const HeroModule = props => {
  return (
    <ContentArea>
      <h1>Hey, my name is Sylvain</h1>
      <SubTitle>I am webdevelopper</SubTitle>
      <Grid justify="center">
        <Button primary><FontAwesomeIcon className="contacticon" icon={faRocket}/>Hire Me</Button>
        <Button secondary><FontAwesomeIcon className="contacticon" icon={faBriefcase}/>My Projects</Button>
      </Grid>
    </ContentArea>
  )
}

export default HeroModule

import React from 'react'
import styled from 'styled-components'

import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from '../../UI'

const {
  constants: { orange },
  uiblocks: { Grid },
  elements: { Button }
} = styles

const SectionFooterContainer = styled.div`
  margin-top: 30px;
`

const SectionFooter = props => {
  return (
    <SectionFooterContainer>
      <Grid justify="center">
        <Button primary><FontAwesomeIcon className="contacticon" icon={faEnvelope}/>Contact</Button>
        <Button secondary><FontAwesomeIcon className="contacticon" icon={faFile}/>Download CV</Button>
      </Grid>
    </SectionFooterContainer>
  )
}

export default SectionFooter

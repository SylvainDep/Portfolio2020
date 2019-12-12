import React from 'react'
import styled from 'styled-components'
import SmoothScrolling from "../../UI/shared/SmoothScrolling";

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
  const scrollHandler = (anchor) => {
    SmoothScrolling.scrollTo(anchor);
  }

  return (
    <SectionFooterContainer>
      <Grid justify="center">
        <Button onClick={() => scrollHandler("contact")} primary><FontAwesomeIcon className="contacticon" icon={faEnvelope}/>Contact</Button>
        <Button href='../../assets/misc/test.pdf' download><FontAwesomeIcon className="contacticon" icon={faFile}/>Download CV</Button>
      </Grid>
    </SectionFooterContainer>
  )
}

export default SectionFooter

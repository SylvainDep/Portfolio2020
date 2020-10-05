import React from 'react'
import styled from 'styled-components'
import SmoothScrolling from "../../UI/shared/SmoothScrolling";

import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Resume from "../../assets/misc/Resume - Sylvain Depardieu.pdf";

import { styles } from '../../UI'

const {
  uiblocks: { Grid },
  elements: { Button }
} = styles

const SectionFooterContainer = styled.div`
  margin-top: 30px;

  a {
    text-decoration: none;
  }
`

const SectionFooter = props => {
  const scrollHandler = (anchor) => {
    SmoothScrolling.scrollTo(anchor);
  }

  return (
    <SectionFooterContainer>
      <Grid justify="center">
        <Button onClick={() => scrollHandler("contact")} primary>
          <FontAwesomeIcon className="contacticon" icon={faEnvelope}/>
          Contact
        </Button>
        <Button href={Resume} download="Resume - Sylvain Depardieu.pdf">
          <FontAwesomeIcon className="contacticon" icon={faFile}/>
          Download CV
        </Button>
      </Grid>
    </SectionFooterContainer>
  )
}

export default SectionFooter

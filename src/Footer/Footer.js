import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const {
  uiblocks: { ContentBlock, ContentArea },
  elements: { Badge },
  constants: { orange }
} = styles;

const FooterArea = styled.div`
  p {
    margin: 0;
  }
`

const Footer = (props) => {
  return (
    <ContentBlock background="black" style={{padding: 5}} section>
      <ContentArea>
        <FooterArea>
         <p>© Copyright Sylvain Depardieu 2019</p>
        </FooterArea>
      </ContentArea>
    </ContentBlock>
  )
}

export default Footer

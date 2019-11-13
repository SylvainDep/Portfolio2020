import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

const {
  uiblocks: { ContentBlock, ContentArea }
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

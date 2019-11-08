import React, { Component } from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import AboutTabs from './AboutTabs'
import AboutContent from './AboutContent'

const {
  uiblocks: { ContentBlock, ContentArea, Grid },
  constants: { light_grey, dark_grey }
} = styles;

const AboutContainer = styled.div`
  display: flex;
  margin-top: -50px;
  background-color: ${dark_grey};
  width: 100%;
  padding: 10px;
`

class Hero extends Component {
  render() {
    return (
      <ContentBlock background={light_grey}>
        <ContentArea>
          <Grid>
            <AboutContainer>
              <AboutTabs />
              <AboutContent />
            </AboutContainer>
          </Grid>
        </ContentArea>
      </ContentBlock>
    )
  }
}

export default Hero

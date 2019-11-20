import React, { Component } from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import AboutContent from './AboutContent'

const {
  uiblocks: { ContentBlock, ContentArea, Grid },
  constants: { light_grey, dark_grey }
} = styles;

const AboutContainer = styled.div`
  display: flex;
  transform: translateY(-50px);
  background-color: ${dark_grey};
  width: 100%;
  padding: 20px;
`

class Hero extends Component {
  render() {
    return (
      <ContentBlock color="white" background={light_grey}>
        <ContentArea>
          <Grid>
            <AboutContainer id="about">
              <AboutContent />
            </AboutContainer>
          </Grid>
        </ContentArea>
      </ContentBlock>
    )
  }
}

export default Hero

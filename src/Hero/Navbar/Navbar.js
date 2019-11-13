import React, { Component } from 'react'
import { styles } from '../../UI'

import Logo from './Logo'
import Menu from './Menu'

const {
  uiblocks: { Fixed, ContentBlock, ContentArea, Grid },
  constants: { dark_grey }
} = styles;

class Navbar extends Component {
  render() {
    return (
      <Fixed>
        <ContentBlock color="white" background={dark_grey}>
          <ContentArea>
            <Grid>
              <Logo>Sylvain Depardieu</Logo>
              <Menu />
            </Grid>
          </ContentArea>
        </ContentBlock>
      </Fixed>
    )
  }
}

export default Navbar

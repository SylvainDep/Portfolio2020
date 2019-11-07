import React from 'react'
import styled from 'styled-components'

import { styles } from '../../UI'

const {
  constants: { orange }
} = styles;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.2em;

  &:before {
    content: '';
    display: inline-block;
    height: 12px;
    width: 12px;
    background-color: ${orange};
    border-radius: 50%;
    margin-right: 10px;
  }
`

const Logo = props => {
  return (
    <LogoLink>Sylvain Depardieu</LogoLink>
  )
}

export default Logo

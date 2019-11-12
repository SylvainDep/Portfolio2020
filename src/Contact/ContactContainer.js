import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Form from './Form'
import ContactData from './ContactData'

const {
  uiblocks: { Grid },
  elements: { Badge },
  constants: { orange }
} = styles;

const ContactContainer = (props) => {
  return (
    <Grid vertical="flex-start">
      <Form />
      <ContactData />
    </Grid>
  )
}

export default ContactContainer

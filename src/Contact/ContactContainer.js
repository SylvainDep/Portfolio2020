import React from 'react'

import { styles } from '../UI'

import Form from './Form'
import ContactData from './ContactData'

const {
  uiblocks: { Grid }
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

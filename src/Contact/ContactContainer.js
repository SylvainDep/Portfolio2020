import React from 'react'

import { styles } from '../UI'

import Form from './Form'

const {
  uiblocks: { Grid }
} = styles;

const ContactContainer = (props) => {
  return (
    <Grid vertical="flex-start" justify="center" responsive>
      <Form />
      {/* <ContactData /> */}
    </Grid>
  )
}

export default ContactContainer

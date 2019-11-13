import React, { Component } from 'react'
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { styles } from '../UI'

import SectionHeader from '../UI/shared/SectionHeader'
import ContactContainer from './ContactContainer'

const {
  uiblocks: { ContentBlock, ContentArea }
} = styles;

class Contact extends Component {
  render() {
    return (
      <ContentBlock section>
        <ContentArea>
          <SectionHeader icon={faStar} title="Get in touch!" />
          <ContactContainer />
        </ContentArea>
      </ContentBlock>
    )
  }
}

export default Contact

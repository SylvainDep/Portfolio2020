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
          <SectionHeader
            icon={faStar}
            title="Get in touch!"
            text="If you want to know more about me, my work or if youʼre a Nigerian prince who wants to offer me a lot of money, feel free to contact me." />
          <ContactContainer />
        </ContentArea>
      </ContentBlock>
    )
  }
}

export default Contact

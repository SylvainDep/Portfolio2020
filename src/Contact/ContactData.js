import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const {
  uiblocks: { ContactBlock },
  elements: { Badge },
  constants: { orange }
} = styles;

const ContactDataItem = styled.div`
  display: flex;
  align-items: center

  .contacticon {
    padding: 10px;
    height: 40px;
    width: 40px;
    margin-right: 20px;
    color: ${orange}
    border: 1px solid #ddd;
  }
`

const ContactData = (props) => {
  return (
    <ContactBlock>
      <ContactDataItem>
        <FontAwesomeIcon className="contacticon" icon={faHome}/>
        <div>
          <h3>Address</h3>
          <p>+1-202-555-0100,</p>
        </div>
      </ContactDataItem>
      <ContactDataItem>
        <FontAwesomeIcon className="contacticon" icon={faHome}/>
        <div>
          <h3>Address</h3>
          <p>+1-202-555-0100,</p>
        </div>
      </ContactDataItem>
      <ContactDataItem>
        <FontAwesomeIcon className="contacticon" icon={faHome}/>
        <div>
          <h3>Address</h3>
          <p>+1-202-555-0100,</p>
        </div>
      </ContactDataItem>
    </ContactBlock>
  )
}

export default ContactData

import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import { faPhoneAlt, faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const {
  uiblocks: { ContactBlock },
  constants: { orange }
} = styles;

const ContactDataItem = styled.div`
  display: flex;
  align-items: center;

  .contacticonholder {
    display: block;
    position: relative;

    &:before {
      content: 'Copy to clipboard';
      display: block;
      position: absolute;
      left: 20px;
      transform: translateX(-50%);
      top: -35px;
      background-color: ${orange};
      color: white;
      text-align: center;
      font-size: .7em;
      padding: 2px 5px;
      border-radius: 2px;
      opacity: 0;
      transition-duration: 0.3s;
      z-index: 10000;
    }

    &:hover {
      &:before {
        opacity: 1;
        top: -30px;
      }
    }
  }

  .contacticon {
    position: relative;
    display: block;
    padding: 10px;
    height: 40px;
    width: 40px;
    margin-right: 20px;
    color: ${orange}
    border: 1px solid #ddd;
    cursor: pointer;
    transition-duration: 0.3s;

    &:hover {
      background-color: ${orange}
      color: white;
      border: 1px solid ${orange};
    }
  }

  &>div {
    h3, p {
      margin: 0;
    }
  }

  &:not(:last-child) {
    margin-bottom: 20px
  }
`

const ContactNotes = styled.i`
  text-align: center;
  font-size: .8em;
`

const ContactData = (props) => {
  return (
    <ContactBlock>
      <ContactDataItem>
        <div className="contacticonholder">
          <FontAwesomeIcon
            onClick={() => {navigator.clipboard.writeText('+49-176-45734734')}}
            className="contacticon"
            icon={faPhoneAlt} />
        </div>
        <div>
          <h3>Phone</h3>
          <p>+49-176-45734734</p>
        </div>
      </ContactDataItem>
      <ContactDataItem>
        <div className="contacticonholder">
          <FontAwesomeIcon
            onClick={() => {navigator.clipboard.writeText('sylvaindepardieu78@gmail.com')}}
            className="contacticon"
            icon={faEnvelope} />
        </div>
        <div>
          <h3>Email</h3>
          <p>sylvaindepardieu78@gmail.com</p>
        </div>
      </ContactDataItem>
      <ContactDataItem>
        <div className="contacticonholder">
          <FontAwesomeIcon
            onClick={() => {navigator.clipboard.writeText('Langenfelder Damm 70, 22525 Hamburg')}}
            className="contacticon"
            icon={faMap} />
        </div>
        <div>
          <h3>Address</h3>
          <p>Langenfelder Damm 70, 22525&nbsp;Hamburg</p>
        </div>
      </ContactDataItem>
      <ContactNotes>I can read and answer to your messages in French, English and German</ContactNotes>
    </ContactBlock>
  )
}

export default ContactData

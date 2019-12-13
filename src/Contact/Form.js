import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import * as emailjs from 'emailjs-com'

import { styles } from '../UI'

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const {
  uiblocks: { ContactBlock },
  constants: { orange, mobile_width }
} = styles;

const InputContainer = styled.div`
  input, textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    transition: all 0.4s ease;
    margin-bottom: 15px;
    font-size: 0.9em;
    outline: 0;

    &:focus, :hover {
      border: 1px solid ${orange};
    }
  }

  button {
    outline: 0;
  }

  textarea {
    resize: none;
  }

  button {
    background-color: ${orange};
    color: white;
    border-width: 0;
    text-transform: uppercase;
    padding: 10px 30px;
    font-size: 1em;
    border-radius: 5px;
    cursor: pointer;

    svg {
      margin-right: 10px
    }
  }
`

const InputArea = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 48%;
  }

  @media screen and (max-width: ${mobile_width}) {
    display: block;

    input {
      width: 100%;
    }
  }
`

class Form extends Component {
  state = {
    fullName: '',
    email: '',
    subject: 'New message on your portfolio!',
    message: '',
    mailSent: false,
    error: null
  }

  inputChangedHandler = (event, inputId) => {
    this.setState({
      ...this.state,
      [inputId]: event.target.value
    })

    console.log(this.state)
  }

  submitForm = (e) => {
    e.preventDefault()
    const { fullName, email, subject, message } = this.state
    let templateParams = {
      subject: subject,
      fullName: fullName,
      email: email,
      message: message,
     }
     emailjs.send(
      'gmail',
      'template_PXb3Lseb',
       templateParams,
      'user_VBUL2jv26ddnjdtaeBnDx'
     )
     this.resetForm()
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  render() {
    return (
      <ContactBlock>
        <InputContainer>
          <InputArea>
            <input
              onChange={(event) => this.inputChangedHandler(event, 'fullName')}
              placeholder="Full Name" />
            <input
              onChange={(event) => this.inputChangedHandler(event, 'email')}
              placeholder="Your Email" />
          </InputArea>
          <textarea
            onChange={(event) => this.inputChangedHandler(event, 'message')}
            rows="6"
            placeholder="Your Message"></textarea>
          <button onClick={(event) => this.submitForm(event)}><FontAwesomeIcon icon={faPaperPlane} color="white" />Submit</button>
        </InputContainer>
      </ContactBlock>
    )
  }
}

export default Form

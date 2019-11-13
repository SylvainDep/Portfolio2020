import React from 'react'
import styled from 'styled-components'

import { styles } from '../UI'

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const {
  uiblocks: { ContactBlock },
  constants: { orange }
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

    &:focus, :hover {
      border: 1px solid ${orange};
    }
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
`

const Form = (props) => {
  return (
    <ContactBlock>
      <InputContainer>
        <InputArea>
          <input placeholder="Full Name" />
          <input placeholder="Your Email" />
        </InputArea>
        <textarea rows="6" placeholder="Type Your Message Here"></textarea>
        <button><FontAwesomeIcon icon={faPaperPlane} color="white" />Submit</button>
      </InputContainer>
    </ContactBlock>
  )
}

export default Form

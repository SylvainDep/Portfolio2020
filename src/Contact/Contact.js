import React, { Component } from 'react'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components'

import { styles } from '../UI'

import SectionHeader from '../UI/shared/SectionHeader'
import ContactContainer from './ContactContainer'
import ContactBG from '../assets/img/clients-bg.jpg'

const {
  uiblocks: { ContentBlock, ContentArea, Grid },
  constants: { orange, mobile_width }
} = styles;

const ContactBackground = styled.div`
  background: repeating-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3) 2px,
    rgba(0, 0, 0, 0.4) 2px,
    rgba(0, 0, 0, 0.4) 4px
  ), url(${ContactBG}) no-repeat center center;
  background-size: cover;
  height: 350px;
  width: 100%;
  position: absolute;
  padding-top: 120px;
  bottom: -180px;
  border-top: 3px solid ${orange};
  display: flex;
  align-items: flex-end

  ${Grid} {
    max-width: 800px;
    margin: auto;
  }
`

const Partner = styled.a`
  max-width: 100%;
  display: block;

  img {
    max-width: 80%;
    max-height: 80px;
    opacity: .7;
    margin: auto
  }

  @media screen and (max-width: ${mobile_width}) {
    width: 100%;
    margin: 10px 0;

    img {
      display: block;
      margin: auto;
      height: 50px;
    }
  }
`

class Contact extends Component {
  render() {
    return (
      <ContentBlock id="contact" section contact>
        <ContentArea>
          <SectionHeader
            icon={faStar}
            title="Get in touch!"
            text="If you want to know more about me, my work or if youʼre a Nigerian prince who wants to offer me a lot of money, feel free to contact me." />
          <ContactContainer />
        </ContentArea>
        <ContactBackground>
          <ContentArea>
            <Grid>
              <Partner href="https://malignec.transilien.com/" target="_blank">
                <img src={require('../assets/img/sncf.png')} alt="SNCF" />
              </Partner>
              <Partner href="https://www.jimdo.com/fr/" target="_blank">
                <img src={require('../assets/img/jimdo_bw.png')} alt="Jimdo" />
              </Partner>
              <Partner href="https://sendesignal.de/" target="_blank">
                <img src={require('../assets/img/sendesignal-bw.png')} alt="Sendesignal" />
              </Partner>
            </Grid>
          </ContentArea>
        </ContactBackground>
      </ContentBlock>
    )
  }
}

export default Contact

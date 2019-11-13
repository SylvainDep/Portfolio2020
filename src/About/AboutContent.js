import React from 'react'
import styled from 'styled-components'
import { styles } from '../UI'
import { faGithub, faXing, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const {
  uiblocks: { Grid },
  elements: { Badge, SocialLinks }
} = styles;

const AboutContentContainer = styled.div`
  padding-left: 10px;

  h2 {
    margin-top: 0
  }
`

const ProfilePicture = styled.div`
  flex-basis: 200px;
  margin-top: 5px;
  margin-right: 20px;

  img {
    width: 100%;
  }
`
const ProfileContent = styled.div`
  flex-basis: calc(100% - 220px);
`

const AboutContent = (props) => {
  return (
    <AboutContentContainer>
      <h2>About me</h2>
      <div>
        <Grid vertical="flex-start">
          <ProfilePicture>
            <img src={require('../assets/img/profile.jpg')} alt="profile" />
          </ProfilePicture>
          <ProfileContent>
            <p>I’M A WEB DEVELOPPER from France living in Hamburg (Germany), where I work as Frontend Developper at Sendesignal. With a background in SEO and Language Studies, my strength lies in website development, optimization and scaling.</p>
            <p>If you want to know more about me, my work or if youʼre a Nigerian prince who wants to offer me a lot of money, feel free to contact me on sylvaindepardieu78@gnail.com.</p>
            <SocialLinks>
              <Grid justify="flex-start">
                <Badge size="30px"><FontAwesomeIcon icon={faLinkedin} /></Badge>
                <Badge size="30px"><FontAwesomeIcon icon={faXing} /></Badge>
                <Badge size="30px"><FontAwesomeIcon icon={faGithub} /></Badge>
                <Badge size="30px"><FontAwesomeIcon icon={faEnvelope} /></Badge>
              </Grid>
            </SocialLinks>
          </ProfileContent>
        </Grid>
      </div>
    </AboutContentContainer>
  )
}

export default AboutContent

import React from 'react'
import styled from 'styled-components'
import { styles } from '../UI'
import { faGithub, faXing, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img from '../assets/img/profile3.jpg';

const {
  constants: { mobile_width },
  uiblocks: { Grid },
  elements: { Badge, SocialLinks }
} = styles;

const AboutContentContainer = styled.div`
  padding-left: 10px;

  h2 {
    margin-top: 0

    @media screen and (max-width: ${mobile_width}) {
      text-align: center;

      &:after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`

const ProfilePicture = styled.div`
  flex-basis: 160px;
  margin-top: 5px;
  margin-right: 20px;
  height: 160px;
  background: url(${img}) right bottom;
  background-size: cover;

  @media screen and (max-width: ${mobile_width}) {
    margin-right: 0;
    height: 160px;
    width: 160px;
    max-width: 100%;
    margin: 0 auto 20px;
  }
`
const ProfileContent = styled.div`
  flex-basis: calc(100% - 200px);
`

const AboutContent = (props) => {
  return (
    <AboutContentContainer>
      <h2>About me</h2>
      <Grid vertical="flex-start" responsive>
        <ProfilePicture />
        <ProfileContent>
          <p><b>I’M A WEB DEVELOPER</b> from France living in Hamburg (Germany), where I work as Frontend Developer at Sendesignal. With a background in SEO, content management and Language Studies, I have developped my skills in Frontend development and loved it ever since.</p>
          <p>I particularly enjoy the feeling of bringing a paper project to life, and making it usable and scalable to see it evolve and meet both owners and final user wishes. This leads me to consider all the aspects of a project in details from the beginning, and to come up with a solution to all of them.</p>
          <SocialLinks>
            <Grid justify="flex-start">
              <a href="https://www.linkedin.com/in/sylvaindepardieu/" target="_blank">
                <Badge size="30px">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Badge>
              </a>
              <a href="https://www.xing.com/profile/Sylvain_Depardieu" target="_blank">
                <Badge size="30px">
                  <FontAwesomeIcon icon={faXing} />
                </Badge>
              </a>
              <a href="https://github.com/SylvainDep" target="_blank">
                <Badge size="30px">
                  <FontAwesomeIcon icon={faGithub} />
                </Badge>
              </a>
              <a href="mailto:sylvaindepardieu78@gmail.com" target="_blank">
                <Badge size="30px">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Badge>
              </a>
            </Grid>
          </SocialLinks>
        </ProfileContent>
      </Grid>
    </AboutContentContainer>
  )
}

export default AboutContent

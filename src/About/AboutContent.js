import React from 'react'
import styled from 'styled-components'
import { styles } from '../UI'
import { fab } from '@fortawesome/free-brands-svg-icons'
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
            <img src={require('../assets/img/profile.jpg')}/>
          </ProfilePicture>
          <ProfileContent>
            <p>Welcome to my website. sit amet, consectetur adipiscing elit. Ut a lectus eu leo faucibus aliquam. Suspendisse eleifend fringilla nibh. Praesent ut luctus dolor. Suspendisse a rutrum arcu. Aliquam erat volutpat. Phasellus lobortis erat vitae fringilla malesuada. Fusce semper purus suscipit ultricies tincidunt. Nulla eget turpis ac leo euismod pharetra at nec diam. Etiam id purus lacus. Suspendisse ligula nulla, cursus non lacinia tincidunt, elementum eu sapien. Morbi mollis congue fringilla. Vivamus ac sagittis nunc.</p>
            <p>Welcome to my website. sit amet, consectetur adipiscing elit. Ut a lectus eu leo faucibus aliquam. Suspendisse eleifend fringilla nibh. Praesent ut luctus dolor. Suspendisse a rutrum arcu. Aliquam erat volutpat. Phasellus lobortis erat vitae fringilla malesuada. Fusce semper</p>
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

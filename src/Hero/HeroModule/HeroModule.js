import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from '../../UI'

const {
  uiblocks: { Grid, ContentArea },
  elements: { Button },
  constants: { orange, mobile_width }
} = styles;

const popText = keyframes`
  to {
    visibility: visible;
  }
`;

const fillText = keyframes`
  0% {
    width: 0%;
    left: 0;
    right: unset;
  }
  33% {
    width: 100%;
    left: 0;
    right: unset;
  }
  67% {
    width: 100%;
    left: unset;
    right: 0;
  }
  100% {
    width: 0%;
    left: unset;
    right: 0;
  }
`;

const MainTitle = styled.h1`
  margin: 15px 0;

  & span {
    position: relative;
    font-size: 1.5em;
    visibility: hidden;
    animation: 0s linear 1s forwards ${popText} ;

    &:after {
      content: "";
      visibility: visible;
      position: absolute;
      height: 100%;
      background-color: ${orange};
      top: 0;
      animation: ${fillText} 2s linear;
    }
  }

  @media screen and (max-width: ${mobile_width}) {
    font-size: 1.3em;
  }
`

const SubTitle = styled.h2`
  & span {
    position: relative;
    margin: 15px 0;
    font-size: 1.5em;
    visibility: hidden;
    animation: 1s linear 2s forwards ${popText} ;

    &:after {
      content: "";
      visibility: visible;
      position: absolute;
      height: 100%;
      background-color: ${orange};
      top: 0;
      animation: ${fillText} 2s linear 1s;
    }
  }

  @media screen and (max-width: ${mobile_width}) {
    font-size: .7em;
  }
`

class HeroModule extends Component {
  render() {
    return (
      <ContentArea>
        <MainTitle><span>Hey, I'm Sylvain,</span></MainTitle>
        <SubTitle><span>a creative front&#8209;end web developer</span></SubTitle>
        <Grid justify="flex-start">
          <Button onClick={() => this.scrollHandler("contact")} margin="0px" primary><FontAwesomeIcon className="contacticon" icon={faRocket}/>Hire Me</Button>
          {/* <Button onClick={() => this.scrollHandler("projects")} secondary><FontAwesomeIcon className="contacticon" icon={faBriefcase}/>My Projects</Button> */}
        </Grid>
        <div id="about_anchor"></div>
      </ContentArea>
    )
  }
}

export default HeroModule

import React, { Component } from 'react'
import styled from 'styled-components'
import { faRocket, faBriefcase, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SmoothScrolling from "../../UI/shared/SmoothScrolling";

import { styles } from '../../UI'

const {
  uiblocks: { Grid, ContentArea },
  elements: { Button }
} = styles;

const SubTitle = styled.span`
  display: block;
  margin: 15px 0;
  font-size: 1.5em;
`

const ButtonDown = styled.div`
  border: 2px solid white;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
  font-size: 1.4em;
  cursor: pointer;

  .hero_chevron {
    display: block;
  }

  .hero_chevron.first {
    animation-delay: 0.2s;
    transform: translateY(4px);
    animation-name: bounceChevron1;
    animation-duration:1.4s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
  }

  .hero_chevron.second {
    transform: translateY(-3px);
    animation-name: bounceChevron2;
    animation-duration:1.4s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
  }

  @keyframes bounceChevron1 {
    0% {opacity: 1; transform: translateY(4px) scale(1);}
    25%{opacity: 0; transform:translateY(10px) scale(0.9);}
    26%{opacity: 0; transform:translateY(-10px) scale(0.9);}
    55% {opacity: 1; transform: translateY(4px) scale(1);}
  }

  @keyframes bounceChevron2 {
    0% {opacity: 1; transform: translateY(-3px) scale(1);}
    25%{opacity: 0; transform:translateY(10px) scale(0.9);}
    26%{opacity: 0; transform:translateY(-10px) scale(0.9);}
    55% {opacity: 1; transform: translateY(-3px) scale(1);}
  }
`

class HeroModule extends Component {
  scrollHandler = (anchor) => {
    SmoothScrolling.scrollTo(anchor);
  }

  render() {
    return (
      <ContentArea>
        <h1>Hey, my name is Sylvain,</h1>
        <SubTitle>I am a creative webdeveloper</SubTitle>
        <Grid justify="center">
          <Button onClick={() => this.scrollHandler("contact")} primary><FontAwesomeIcon className="contacticon" icon={faRocket}/>Hire Me</Button>
          <Button onClick={() => this.scrollHandler("projects")} secondary><FontAwesomeIcon className="contacticon" icon={faBriefcase}/>My Projects</Button>
        </Grid>
        <ButtonDown onClick={() => this.scrollHandler("about_anchor")}>
          <FontAwesomeIcon className="hero_chevron first" icon={faChevronDown}/>
          <FontAwesomeIcon className="hero_chevron second" icon={faChevronDown}/>
        </ButtonDown>
        <div id="about_anchor"></div>
      </ContentArea>
    )
  }
}

export default HeroModule

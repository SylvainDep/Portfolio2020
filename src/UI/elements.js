import styled from 'styled-components';

import {
  dark_grey,
  orange
} from "./constants";

const Button = styled.a`
  background-color: ${props => props.primary ? orange : 'white' };
  color: ${props => props.primary ? 'white' : dark_grey };
  padding: 10px 20px;
  margin: ${props => props.margin ? props.margin : '10px' };
  border-radius: 2px;
  cursor: pointer;
  transition-duration: 0.3s;

  svg {
    margin-right: 10px;
    transition: transform 0.3s;
  }

  &:hover {
    background-color: ${orange};
    color: white;

    svg {
      transform: scale(1.3);
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
  }
`

const Badge = styled.div`
  width: ${props => props.size ? props.size : '20px' };
  height: ${props => props.size ? props.size : '20px' };
  background-color: ${props => props.focus ? orange : 'white' };
  color: ${props => props.focus ? 'white' : dark_grey };
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${orange};
    color: white;
  }
`

const SocialLinks = styled.div`
  margin: 20px 10px 10px 0;

  & a {
    margin-right: 10px
  }
`

export default {
  Button,
  Badge,
  SocialLinks
}

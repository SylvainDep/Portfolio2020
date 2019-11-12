import styled from 'styled-components';

import {
  dark_grey,
  orange
} from "./constants";

const Button = styled.a`
  background-color: ${props => props.primary ? orange : 'white' };
  color: ${props => props.primary ? 'white' : dark_grey };
  padding: 13px 35px;
  margin: 10px;
  border-radius: 5px;
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
`

const SocialLinks = styled.div`
  margin: 20px 10px 10px 0;

  & ${Badge} {
    margin-right: 10px
  }
`

export default {
  Button,
  Badge,
  SocialLinks
}

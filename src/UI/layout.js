import styled from 'styled-components';

import {
  dark_grey,
  orange
} from "./constants";

const Fixed = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
`

const ContentBlock = styled.div`
  width: 100vw;
  background-color: ${props => props.background ? props.background : 'white' };
  color: ${props => props.color ? props.color : '#666' };
  padding: ${props => props.section ? '50px 0' : '0'};

  h1, h2, h3 {
    color: ${props => props.color ? props.color : dark_grey };
  }
`

const ContentArea = styled.div`
  background-color: ${props => props.background ? props.background : 'transparent' };
  margin: auto;
  width: 1170px;
  max-width: 100%;
  padding: 0 10px;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justify ? props.justify : 'space-between' };
  align-items: ${props => props.vertical ? props.vertical : 'center' };
  height: 100%;
  width: 100%;
`

const ContactBlock = styled.div`
  width: 49%;
  padding: 15px;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
`

export default {
  Fixed,
  ContentBlock,
  ContentArea,
  Grid,
  ContactBlock
}

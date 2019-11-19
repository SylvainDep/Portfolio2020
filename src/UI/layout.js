import styled from 'styled-components';

import {
  dark_grey,
  mobile_width
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
  position: relative;
  margin-bottom: ${props => props.contact ? '180px' : '0'};

  h1, h2, h3 {
    color: ${props => props.color ? props.color : dark_grey };
  }
`

const CustomContentBlock = styled.div`
  width: 100vw;
  background: url(${props => props.bgImg}) no-repeat center center;
  background-size: cover;
  color: ${props => props.color ? props.color : '#666' };
  padding: ${props => props.section ? '50px 10px' : '0'};

  h1, h2, h3 {
    color: ${props => props.color ? props.color : dark_grey };
  }
`

const ContentArea = styled.div`
  background-color: ${props => props.background ? props.background : 'transparent' };
  margin: auto;
  width: 1170px;
  max-width: 100%;
  padding: ${props => props.section ? '30px' : '0 10px'};
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justify ? props.justify : 'space-between' };
  align-items: ${props => props.vertical ? props.vertical : 'center' };
  height: 100%;
  width: 100%;


  @media screen and (max-width: ${mobile_width}) {
    ${props => props.responsive ? 'display: block' : ''}
  }
`

const ContactBlock = styled.div`
  flex-basis: 49%;
  padding: 15px;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  z-index: 5;
  position: relative;

  @media screen and (max-width: ${mobile_width}) {
    margin: 20px 0;
  }
`

export default {
  Fixed,
  ContentBlock,
  CustomContentBlock,
  ContentArea,
  Grid,
  ContactBlock
}

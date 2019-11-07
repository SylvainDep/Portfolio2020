import styled from 'styled-components';

const Fixed = styled.div`
  position: fixed;
  top: 0;
`

const ContentBlock = styled.div`
  width: 100vw;
  background-color: ${props => props.background ? props.background : 'white' };
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
  justify-content: ${props => props.justify ? props.justify : 'space-between' };
  align-items: center;
  height: 100%;
  width: 100%;
  color: white;
`

export default {
  Fixed,
  ContentBlock,
  ContentArea,
  Grid
}

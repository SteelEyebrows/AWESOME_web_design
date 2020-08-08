import styled, { keyframes } from 'styled-components';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const RotateContainer =styled.div`
  width:200px;
  height:200px;
  background-color: #000;
  font-family: 'Luckiest Guy', cursive;
  font-size: 10px;
  transform-box: fill-box;
  transform-origin: center;
  animation: ${rotate} 10s linear infinite;
  svg{
    background-color: #000;
    path {
        fill: transparent;
      }
      
      text {
        fill: #FF9800;
      }
  }
`

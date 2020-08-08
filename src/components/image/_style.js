import styled, { keyframes } from 'styled-components';


export const ImageContainer =styled.div`
  position:absolute;
  width:100%;
  height:100vh;
  background-color: grey;
  .imageA{
      position:absolute;
      top:0px;
      left:20%;
      width:250px;
      height:250px;
      background-color: pink;
      z-index:4;
  }
  .imageB{
      position:absolute;
      bottom:0px;
      right:20%;
      width:250px;
      height:250px;
      background-color: pink;
      z-index:4;
  }
`

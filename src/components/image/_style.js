import styled, { keyframes } from 'styled-components';


export const ImageContainer =styled.div`
  position:absolute;
  width:100%;
  height:100vh;
  background-color: #fff;
  .imageA{
      position:absolute;
      top:0px;
      left:20%;
      width:25%;
      height:0%;
      object-fit: cover;
      background-color: pink;
      z-index:4;
  }
  .imageB{
      position:absolute;
      bottom:0px;
      right:10%;
      width:25%;
      height:0%;
      object-fit: cover;
      background-color: pink;
      z-index:4;
  }
`

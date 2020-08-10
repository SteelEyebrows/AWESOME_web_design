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
      background-color: pink;
      z-index:4;
      background-image:url( ${props=>props.backgroundA});
      background-size: cover;
      overflow:hidden;
      .bannerA{
        position:absolute;
        width:100%;
        height:100%;
        background-color: red;
        z-index:3;
        clip-path:circle(0px);
      }
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
      background-image:url( ${props=>props.backgroundB});
      background-size: cover;
      overflow:hidden;

      .bannerB{
        position:absolute;
        width:100%;
        height:100%;
        background-color: red;
        z-index:3;
        clip-path:circle(0px);
      }
  }
`

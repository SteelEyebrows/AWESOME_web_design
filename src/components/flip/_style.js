import styled, { keyframes } from 'styled-components';


export const FlipContainer =styled.div`
  width:100%;
  position: absolute;
  bottom:200px; 

  .flip{
    display:flex;
    width:50%;
    height:auto;
    overflow:hidden;
    margin:20px;
    background-color: rgba(0,0,0,0);
    z-index:5;

    .card{
      font-family: 'GmarketSansBold';
      font-size:4em;
      width:auto;
      height:auto;
      padding:5px;

    }
 }
`

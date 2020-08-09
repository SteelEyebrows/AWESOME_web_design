import styled, { keyframes } from 'styled-components';


export const CircleContainer =styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .circle {
    position: absolute;
    top:30%;
    right:30%;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    transition: transform 1s cubic-bezier(0.5, 0.01, 0, 0.08), opacity 0s;
    -webkit-transition: transform 1s cubic-bezier(0.5, 0.01, 0, 0.08), opacity 0s;
    -moz-transition: transform 1s cubic-bezier(0.5, 0.01, 0, 0.08), opacity 0s;
    -o-transition: transform 1s cubic-bezier(0.5, 0.01, 0, 0.08), opacity 0s;
  }

.circle.first {
  background: #ff948d;
  z-index:0;
}

.circle.second {
  transition-delay: 0.5s;
  background: #fff;
  opacity: 0;
  z-index:0;
}

.circle.third {
    transition-delay: 0.5s;
    background: #ff948d;
    opacity: 0;
    z-index:1;
}
`

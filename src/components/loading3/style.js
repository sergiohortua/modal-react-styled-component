import styled, { keyframes } from "styled-components";

export const spin1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(360deg);
  }
  30% {
    transform: rotate(370deg);
  }
  35% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const spin2 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(-180deg);
  }
  35% {
    transform: rotate(-190deg);
  }
  40% {
    transform: rotate(-180deg);
  }
  78% {
    transform: rotate(-180deg);
  }
  95% {
    transform: rotate(-360deg);
  }
  98% {
    transform: rotate(-370deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;
export const spin3 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  27% {
    transform: rotate(0deg);  
  }
  40% {
    transform: rotate(180deg);
  }
  45% {
    transform: rotate(190deg);
  }
  50% {
    transform: rotate(180deg);
  }
  62% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(360deg);
  }
  80% {
    transform: rotate(370deg);
  }
  85% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const spin4 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  38% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(-360deg);
  }
  65% {
    transform: rotate(-370deg);
  }
  75% {
    transform: rotate(-360deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;
export const Container = styled.div`
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;
export const Dash = styled.div`
  margin: 0 15px;
  width: 35px;
  height: 15px;
  border-radius: 8px;
  background: #FF2CBD;
  box-shadow: 0 0 10px 0 #FECDFF;
`;
export const Uno = styled(Dash)`
 margin-right: -18px;
  transform-origin: center left;
  animation: ${spin1} 3s linear infinite;
`
export const Dos = styled(Dash)`
 transform-origin: center right;
  animation: ${spin2} 3s linear infinite;
  animation-delay: .2s;
`
export const Tres = styled(Dash)`
  transform-origin: center right;
  animation: ${spin3} 3s linear infinite;
  animation-delay: .3s;
`
export const Cuatro = styled(Dash)`
 transform-origin: center right;
  animation: ${spin4} 3s linear infinite;
  animation-delay: .4s;
`


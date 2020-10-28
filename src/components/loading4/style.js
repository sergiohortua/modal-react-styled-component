import styled, { keyframes } from "styled-components";

export const LoaderAnime = keyframes`
    0%   { transform: scale(0.0); }
	40%  { transform: scale(1.0); }
	80%  { transform: scale(1.0); }
	100% { transform: scale(0.0); }
`;
export const Loader = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 2px;
  width: 100px;
  height: 100px;
`;
export const Square = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: tomato;
  transform: scale(0);
  transform-origin: center center;
  animation: ${LoaderAnime} 2s infinite linear;
  &:nth-of-type(7) {
  }
  &:nth-of-type(1),
  &:nth-of-type(5),
  &:nth-of-type(9) {
    animation-delay: 0.5s;
  }

  &:nth-of-type(4),
  &:nth-of-type(8) {
    animation-delay: 0.3s;
  }

  &:nth-of-type(2),
  &:nth-of-type(6) {
    animation-delay: 0.7s;
  }

  &:nth-of-type(3) {
    animation-delay: 0.9s;
  }
`;

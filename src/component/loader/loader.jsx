import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  position: relative;
  width: em(40);
  margin: 20% auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    position: absolute;
    opacity: 0;
    height: 30px;
    width: 35px;
    transform: rotate(225deg);
    animation-iteration-count: infinite;
    animation-name: orbit;
    animation-duration: 5s;

    &:after {
      content: "";
      position: absolute;
      width: 0.4em;
      height: 0.4em;
      border-radius: 50%;
      background: black;
    }

    &:nth-of-type(2) {
      animation-delay: 240ms;
    }
    &:nth-of-type(3) {
      animation-delay: 500ms;
    }
    &:nth-of-type(4) {
      animation-delay: 740ms;
    }
    &:nth-of-type(5) {
      animation-delay: 980ms;
    }
  }

  @keyframes orbit {
    0% {
      transform: rotate(225deg);
      opacity: 1;
      animation-timing-function: ease-out;
    }

    7% {
      transform: rotate(345deg);
      animation-timing-function: linear;
    }

    30% {
      transform: rotate(455deg);
      animation-timing-function: ease-in-out;
    }

    39% {
      transform: rotate(690deg);
      animation-timing-function: linear;
    }

    70% {
      transform: rotate(815deg);
      opacity: 1;
      animation-timing-function: ease-out;
    }

    75% {
      transform: rotate(945deg);
      animation-timing-function: ease-out;
    }

    76% {
      transform: rotate(945deg);
      opacity: 0;
    }
    100% {
      transform: rotate(945deg);
      opacity: 0;
    }
  }
`;

const Loader = () => {
  return (
    <LoadingWrapper>
      <span />
      <span />
      <span />
      <span />
      <span />
    </LoadingWrapper>
  );
};

export default Loader;

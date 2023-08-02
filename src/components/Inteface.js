import React from 'react'
import styled, { keyframes } from 'styled-components'
import Interface from '../assets/untils/interface.png'

const InterfaceDiv = styled.div`
  display: none;
  position: absolute;
  cursor: pointer;

  @media (min-width: 768px) {
    display: block;
    top: 5%;
    left: 90%;
  }
  @media (min-width: 992px) {
    top: 10%;
  }

  @media (min-width: 1200px) {
    top: 8%;
    left: 85%;
  }

  @media (min-width: 1400px) {
    top: 10%;
  }

  @media (min-width: 1600px) {
    left: 85%;
  }

  @media (min-width: 2000px) {
    left: 78%;
  }

  @media (min-width: 2560px) {
    top: 18%;
    left: 71%;
  }
`

const shakeAnimation = keyframes`
0% {
  transform: rotate(-20deg) translateX(-2px) translateY(-2px);
}
25% {
  transform: rotate(20deg) translateX(2px) translateY(2px);
}
50% {
  transform: rotate(-20deg) translateX(-2px) translateY(-2px);
}
75% {
  transform: rotate(20deg) translateX(2px) translateY(2px);
}
100% {
  transform: rotate(-20deg) translateX(-2px) translateY(-2px);
}
`

const CoverInterface = styled.img`
  transform: rotate(-20deg);
  transform-origin: center;
  animation-duration: 400ms;
  animation-fill-mode: forwards;
  animation-iteration-count: 5;
  ${InterfaceDiv}:hover & {
    animation-name: ${shakeAnimation};
  }
  width: 100%;
  @media (min-width: 992px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 75%;
  }

  @media (min-width: 1600px) {
    width: 70%;
  }

  @media (min-width: 2000px) {
    width: 65%;
  }

  @media (min-width: 2560px) {
    width: 50%;
  }
`
function Inteface() {
  return (
    <React.Fragment>
      <InterfaceDiv className="col-1">
        <CoverInterface src={Interface} alt="interface" />
      </InterfaceDiv>
    </React.Fragment>
  )
}

export default Inteface

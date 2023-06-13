import React from 'react'
import styled, { keyframes } from 'styled-components'
import Interface from '../assets/interface.png'

function Inteface() {
  const InterfaceDiv = styled.div`
    position: absolute;
    top: 20%;
    left: 83%;
  `
  const shakeAnimation = keyframes`
  0% {
    transform: rotate(20deg) translateX(-2px) translateY(-2px);
  }
  25% {
    transform: rotate(20deg) translateX(2px) translateY(2px);
  }
  50% {
    transform: rotate(20deg) translateX(-2px) translateY(-2px);
  }
  75% {
    transform: rotate(20deg) translateX(2px) translateY(2px);
  }
  100% {
    transform: rotate(20deg) translateX(-2px) translateY(-2px);
  }
`

  const CoverInterface = styled.img`
    transform: rotate(20deg);
    width: 75%;
    transform-origin: center;
    animation-duration: 400ms;
    animation-fill-mode: forwards;
    animation-iteration-count: 5;
    ${InterfaceDiv}:hover & {
      animation-name: ${shakeAnimation};
    }
  `
  return (
    <React.Fragment>
      <InterfaceDiv className="col-1">
        <CoverInterface src={Interface} alt="interface" />
      </InterfaceDiv>
    </React.Fragment>
  )
}

export default Inteface

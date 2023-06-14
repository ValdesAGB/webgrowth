import React from 'react'
import fusee from '../assets/fusee.png'
import styled, { keyframes } from 'styled-components'

function Fusee() {
  const FuseeDivContainer = styled.div`
    position: absolute;

    border-radius: 50%;
    @media (min-width: 768px) {
      top: 50%;
      left: 0%;
      width: 120px;
      height: 120px;
    }

    @media (min-width: 1024px) {
      background-color: #121234;
      top: 10%;
      left: -7%;
      width: 150px;
      height: 150px;
    }

    @media (min-width: 1360px) {
      width: 120px;
      height: 120px;
      left: 8%;
    }

    @media (min-width: 1400px) {
      background-color: transparent;
      width: 150px;
      height: 150px;
    }
    @media (min-width: 2560px) {
      width: 200px;
      height: 200px;
      top: 10%;
      left: 20%;
    }
  `
  const FuseeDiv = styled.div`
    position: relative;
    position: relative;
    top: 15%;
    left: 49%;
    @media (min-width: 1360px) {
      top: 5%;
      left: 20%;
    }
    @media (min-width: 2560px) {
      top: 3%;
      left: 22%;
    }
    @media (min-width: 1360px) {
      top: 5%;
      left: 20%;
    }
    @media (min-width: 2560px) {
      top: 3%;
      left: 22%;
    }
  `
  const CoverFusee = styled.img`
    width: 60%;
    transition: transform 500ms;
    ${FuseeDivContainer}:hover & {
      transform: translateX(10px) translateY(-10px);
    }
    @media (min-width: 1360px) {
      width: 80%;
    }
    @media (min-width: 2560px) {
      width: 80%;
      ${FuseeDivContainer}:hover & {
        transform: translateX(20px) translateY(-20px);
      }
    }
    @media (min-width: 1360px) {
      width: 80%;
    }
    @media (min-width: 2560px) {
      width: 80%;
      ${FuseeDivContainer}:hover & {
        transform: translateX(20px) translateY(-20px);
      }
    }
  `
  return (
    <React.Fragment>
      <FuseeDivContainer className="d-none d-md-block">
        <FuseeDiv>
          <CoverFusee src={fusee} alt="fusee" />
        </FuseeDiv>
      </FuseeDivContainer>
    </React.Fragment>
  )
}

export default Fusee

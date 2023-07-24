import React from 'react'
import fusee from '../assets/untils/fusee.png'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const FuseeDivContainer = styled.div`
  display: none;
  position: absolute;
  cursor: pointer;
  border-radius: 50%;

  @media (min-width: 768px) {
    display: block;
    top: 0%;
    left: -10%;
    width: 150px;
    height: 150px;
  }

  @media (min-width: 992px) {
    background-color: ${colors.main};
    top: 5%;
    left: -7%;
    width: 140px;
    height: 140px;
  }

  @media (min-width: 1200px) {
    left: 5%;
    width: 120px;
    height: 120px;
  }

  @media (min-width: 1600px) {
    left: 5%;
  }

  @media (min-width: 2000px) {
    top: 10%;
    left: 14%;
  }

  @media (min-width: 2560px) {
    width: 150px;
    height: 150px;
    top: 10%;
    left: 22%;
  }
`
const FuseeDiv = styled.div`
  position: relative;
  top: 15%;
  left: 49%;

  @media (min-width: 992px) {
    top: 12%;
    left: 25%;
  }

  @media (min-width: 1200px) {
    top: 5%;
    left: 5%;
  }

  @media (min-width: 1400px) {
    top: 3%;
    left: 3%;
  }

  @media (min-width: 1600px) {
    top: 5%;
    left: 5%;
  }
`
const CoverFusee = styled.img`
  transition: transform 500ms;

  width: 60%;

  @media (min-width: 1200px) {
    width: 80%;
  }

  ${FuseeDivContainer}:hover & {
    transform: translateX(10px) translateY(-10px);
  }

  @media (min-width: 1400px) {
    ${FuseeDivContainer}:hover & {
      transform: translateX(20px) translateY(-20px);
    }
  }
`

function Fusee() {
  return (
    <React.Fragment>
      <FuseeDivContainer>
        <FuseeDiv>
          <CoverFusee src={fusee} alt="fusee" />
        </FuseeDiv>
      </FuseeDivContainer>
    </React.Fragment>
  )
}

export default Fusee

import React from 'react'
import styled from 'styled-components'
import idee from '../assets/untils/idee.png'
import lampe from '../assets/untils/lampe.png'

const LampeDivContainer = styled.div`
  display: none;
  position: absolute;
  cursor: pointer;

  @media (min-width: 768px) {
    display: block;
    top: 78%;
    left: 80%;
  }

  @media (min-width: 992px) {
    top: 72%;
  }

  @media (min-width: 1200px) {
    left: 82%;
  }

  @media (min-width: 2000px) {
    left: 60%;
  }

  @media (min-width: 2560px) {
    top: 60%;
    left: 50%;
  }
`
const LampeDiv = styled.div`
  position: relative;
`

const CoverLampe = styled.img`
  position: relative;

  left: ${(props) => (props.leftSide === true ? '15%' : '-15%')};
  width: 25%;

  @media (min-width: 992px) {
    left: ${(props) => (props.leftSide === true ? '12%' : '-12%')};
  }

  @media (min-width: 1200px) {
    left: ${(props) => (props.leftSide === true ? '10%' : '-10%')};
    width: 23%;
  }

  @media (min-width: 2000px) {
    left: ${(props) => (props.leftSide === true ? '5%' : '-5%')};
    width: 10%;
  }

  @media (min-width: 2560px) {
    width: 8%;
    left: ${(props) => (props.leftSide === true ? '4%' : '-4%')};
  }
`

const CoverIdee = styled.img`
  position: relative;
  top: -30px;
  left: 0%;
  width: 50%;

  transition: transform 0.5s;
  @media (max-width: 1999px) {
    ${LampeDiv}:hover & {
      transform: translateY(-10px);
    }
  }

  @media (min-width: 992px) {
    top: -40px;
  }

  @media (min-width: 1200px) {
    width: 45%;
  }

  @media (min-width: 2000px) {
    top: -60px;
    width: 20%;
  }

  @media (min-width: 2560px) {
    top: -80px;
    width: 15%;
  }
`

function Lampe() {
  return (
    <React.Fragment>
      <LampeDivContainer>
        <LampeDiv>
          <CoverLampe leftSide={true} src={lampe} alt="idee" />

          <CoverIdee src={idee} alt="idee" />

          <CoverLampe src={lampe} alt="idee" />
        </LampeDiv>
      </LampeDivContainer>
    </React.Fragment>
  )
}

export default Lampe

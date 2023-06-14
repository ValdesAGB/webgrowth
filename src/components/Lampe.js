import React from 'react'
import styled from 'styled-components'
import idee from '../assets/idee.png'
import lampe from '../assets/lampe.png'
function Lampe() {
  const LampeDivContainer = styled.div`
    position: absolute;
    top: 80%;
    left: 85%;
    @media (min-width: 768px) {
      top: 85%;
      left: 80%;
    }

    @media (min-width: 1024px) {
      left: 75%;
    }

    @media (min-width: 2560px) {
      left: 68%;
    }
  `
  const LampeDiv = styled.div`
    position: relative;
  `

  const CoverLampe = styled.img`
    position: relative;
    top: -30px;
    left: ${(props) => (props.leftSide === true ? '10%' : '-10%')};
    width: 25%;
    @media (min-width: 1024px) {
      width: 22%;
    }
    @media (min-width: 1360px) {
      width: 18%;
    }
    @media (min-width: 2560px) {
      width: 10%;
      top: 0px;
      left: ${(props) => (props.leftSide === true ? '25%' : '-25%')};
    }
  `

  const CoverIdee = styled.img`
    position: relative;
    top: -70px;
    left: 0%;
    width: 50%;
    @media (min-width: 1024px) {
      width: 40%;
    }
    @media (min-width: 1360px) {
      width: 35%;
    }
    @media (min-width: 2560px) {
      width: 20%;
    }
  `
  return (
    <React.Fragment>
      <LampeDivContainer className="d-none d-md-block">
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

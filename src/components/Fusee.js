import React from 'react'
import fusee from '../assets/fusee.png'
import styled from 'styled-components'

function Fusee() {
  const FuseeDivContainer = styled.div`
    top: 10%;
    left: -7%;
    position: absolute;
    background-color: #121234;
    width: 190px;
    height: 190px;
    border-radius: 50%;
  `
  const FuseeDiv = styled.div`
    top: 15%;
    left: 49%;
    position: relative;
  `
  const CoverFusee = styled.img`
    width: 60%;
    transition: transform 500ms;
    ${FuseeDiv}:hover & {
      transform: translateX(10px) translateY(-10px);
    }
  `
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

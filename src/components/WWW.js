import React from 'react'
import styled from 'styled-components'
import www from '../assets/untils/www.png'

const WWWDiv = styled.div`
  display: none;
  position: absolute;
  cursor: pointer;
  top: 80%;
  left: 5%;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 992px) {
    top: 75%;
  }

  @media (min-width: 2000px) {
    top: 70%;
    left: 13%;
  }

  @media (min-width: 2560px) {
    left: 20%;
  }
`
const CoverWWW = styled.img`
  transform: rotate(20deg);
  transition: transform 1s cubic-bezier(1, 0, 0.06, 1);
  ${WWWDiv}:hover & {
    transform: rotate(2turn);
  }

  width: 100%;

  @media (min-width: 992px) {
    width: 80%;
  }

  @media (min-width: 1400px) {
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

function WWW() {
  return (
    <React.Fragment>
      <WWWDiv className="col-1">
        <CoverWWW src={www} alt="www" />
      </WWWDiv>
    </React.Fragment>
  )
}

export default WWW

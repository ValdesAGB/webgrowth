import React from 'react'
import styled from 'styled-components'
import www from '../assets/www.png'

function WWW() {
  const WWWDiv = styled.div`
    position: absolute;
    top: 70%;
    left: 10%;
    @media (min-width: 768px) {
      top: 75%;
      left: 5%;
    }

    @media (min-width: 1024px) {
      top: 75%;
      left: 10%;
    }

    @media (min-width: 2560px) {
      top: 80%;
      left: 25%;
    }
    @media (min-width: 768px) {
      top: 75%;
      left: 5%;
    }

    @media (min-width: 1024px) {
      top: 75%;
      left: 10%;
    }

    @media (min-width: 2560px) {
      top: 80%;
      left: 25%;
    }
  `
  const CoverWWW = styled.img`
    transform: rotate(-20deg);
    width: 75%;
    transition: transform 1s;
    ${WWWDiv}:hover & {
      transform: rotate(0deg);
    }
  `
  return (
    <React.Fragment>
      <WWWDiv className="col-md-2 col-lg-1 d-none d-lg-block">
        <CoverWWW src={www} alt="www" />
      </WWWDiv>
    </React.Fragment>
  )
}

export default WWW

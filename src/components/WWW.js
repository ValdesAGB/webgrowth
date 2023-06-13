import React from 'react'
import styled from 'styled-components'
import www from '../assets/www.png'

function WWW() {
  const WWWDiv = styled.div`
    position: absolute;
    top: 70%;
    left: 10%;
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
      <WWWDiv className="col-1">
        <CoverWWW src={www} alt="www" />
      </WWWDiv>
    </React.Fragment>
  )
}

export default WWW

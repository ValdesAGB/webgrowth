import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const SloganStyled = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`

const BrandLink = styled.a`
  text-decoration: none;
  color: white;
`

const Brand = styled.img`
  width: 50%;
  margin-bottom: 2%;
`

const Slog = styled.h6`
  font-style: italic;

  font-size: 0.9em;
  font-weight: 300;

  @media (min-width: 992px) {
    font-size: 1.1em;
  }
  @media (min-width: 1200px) {
    font-size: 0.9em;
  }
`
function Slogan() {
  return (
    <React.Fragment>
      <SloganStyled className="col col-xl-4">
        <BrandLink href="/">
          <Brand src={logo} alt="webgrowth-logo" />
          <Slog> Votre " web growth " commence ici. 🚀✨</Slog>
        </BrandLink>
      </SloganStyled>
    </React.Fragment>
  )
}

export default Slogan

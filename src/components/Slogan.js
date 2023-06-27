import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

function Slogan() {
  const SloganStyled = styled.div``

  const BrandLink = styled.a``

  const Brand = styled.img`
    width: 50%;
    margin-bottom: 2%;
  `

  const Slog = styled.h6`
    font-style: italic;
    @media (min-width: 320px) {
      font-size: 0.9em;
      font-weight: 300;
    }
    @media (min-width: 1024px) {
      font-size: 1.1em;
    }
    @media (min-width: 1360px) {
      font-size: 0.9em;
    }
  `
  return (
    <React.Fragment>
      <SloganStyled className="col-md col-xl-4 d-none d-md-block justify-content-start">
        <BrandLink href="#">
          <Brand src={logo} alt="webgrowth-logo" className="" />
        </BrandLink>
        <Slog> Votre " web growth " commence ici. 🚀✨</Slog>
      </SloganStyled>
    </React.Fragment>
  )
}

export default Slogan

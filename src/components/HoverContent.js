import React from 'react'
import styled from 'styled-components'
import { rdv } from '../data'

function HoverContent({ id, paragraph }) {
  const Button = styled.a`
    color: #121234;
    background-color: #ffce07;
    border: none;
    padding: 2% 4% 2% 4%;
    border-radius: 10px;
    font-weight: 500;
    text-decoration: none;
    margin-top: 5%;
    &:hover {
      background-color: #ffce07;
    }
    &:active {
      background-color: #ffce07;
    }
    &.disabled {
      pointer-events: none; /* Empêche les interactions avec le bouton */
      opacity: 0.6; /* Opacité réduite pour indiquer que le bouton est désactivé */
    }
  `

  const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 400;
    text-align: justify;
    @media (min-width: 320px) {
      font-size: 0.9em;
    }
    @media (min-width: 1024px) {
      font-size: 1.1em;
    }
    @media (min-width: 1440px) {
      font-size: 1.3em;
    }
    @media (min-width: 2560px) {
      font-size: 1.5em;
    }
  `

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <Paragraph className=" col-12">{paragraph}</Paragraph>

        <Button
          className={`col-md-10 col-lg-8 text-center  ${
            id === 'commerce' ? 'disabled' : ''
          }`}
          href={rdv}
          target="_blank"
        >
          Obtenir un devis personnalisé
        </Button>
      </div>
    </React.Fragment>
  )
}

export default HoverContent

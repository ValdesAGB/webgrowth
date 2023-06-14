import React from 'react'
import styled from 'styled-components'

function HoverContent({ paragraph }) {
  const Button = styled.a`
    color: #121234;
    background-color: #ffce07;
    border: none;
    padding: 2% 4% 2% 4%;
    border-radius: 10px;
    font-weight: 500;
    text-decoration: none;
    margin-top: 10%;
    &:hover {
      background-color: #ffce07;
    }
    &:active {
      background-color: #ffce07;
    }
  `

  const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 400;
    text-align: justify;
  `

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <Paragraph className=" col-12">{paragraph}</Paragraph>

        <Button
          className="col-md-10 col-lg-8 text-center"
          href="https://calendly.com/webgrowthservice/call-de-decouverte"
          target="_blank"
        >
          Obtenir un devis personnalisé
        </Button>
      </div>
    </React.Fragment>
  )
}

export default HoverContent

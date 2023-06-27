import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function BottomComponents() {
  const Header = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;

    @media (min-width: 320px) {
      margin-top: 15%;
      font-size: 20px;
    }
    @media (min-width: 375px) {
      margin-top: 10%;
      font-size: 24px;
    }
    @media (min-width: 1024px) {
      margin-top: 5%;
    }
    @media (min-width: 1440px) {
      margin-top: 5%;
    }
  `

  const SubTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    @media (min-width: 320px) {
      margin: 8% 0 10% 0;
    }
    @media (min-width: 375px) {
      margin: 5% 0 8% 0;
    }
    @media (min-width: 768px) {
      margin: 2% 0 4% 0;
    }
    @media (min-width: 1024px) {
      margin: 2% 0 2% 0;
    }
    @media (min-width: 1440px) {
      margin: 1% 0 2% 0;
    }
  `

  const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 24px;
  `
  return (
    <React.Fragment>
      <section>
        <div className="container text-center">
          <Header>Alors prêt à se lancer ?</Header>
          <SubTitle>Obtenez votre devis personnalisé dès à présent.</SubTitle>
          <div className="row justify-content-center">
            <Button col={'col-md-6 col-lg-3'} />
          </div>
          <div className="row justify-content-center mt-4">
            <Paragraph className=" col-lg-8">
              Faites le premier pas vers la réalisation de votre site web en
              nous contactant dès maintenant.!
            </Paragraph>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default BottomComponents

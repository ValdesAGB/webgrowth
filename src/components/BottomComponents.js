import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function BottomComponents() {
  const Header = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin-top: 5%;
  `

  const SubTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    margin: 1% 0 2% 0;
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
          <Header>Alors Prêt à vous lancer ?</Header>
          <SubTitle>Obtenez votre devis personnalisé dès à présent.</SubTitle>
          <div className="row justify-content-center">
            <Button col={'col-3'} />
          </div>
          <div className="row justify-content-center mt-4">
            <Paragraph className="col-8">
              Faites le premier pas vers la réalisation de votre site web en
              nous contactant aujourd'hui.
            </Paragraph>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default BottomComponents

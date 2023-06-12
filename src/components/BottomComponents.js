import React from 'react'
import styled from 'styled-components'

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
  const Devis = styled.button`
    color: #121234;
    background-color: #ffce07;
    &:hover {
      background-color: #ffce07;
    }
  `

  const Call = styled.button`
    color: #121234;
    border: solid 1px #666666;
    &:hover {
      border: solid 1px #666666;
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
          <Header>Alors Prêt à vous lancer ?</Header>
          <SubTitle>Obtenez votre devis personnalisé dès à présent.</SubTitle>
          <div className="row justify-content-center">
            <div className="col-3 row">
              <Devis className="btn col-12 mb-3">Devis personnalisé</Devis>
              <Call className="btn col-12 mb-3">Réserver un appel gratuit</Call>
            </div>
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

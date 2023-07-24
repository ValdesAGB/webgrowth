import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { polices } from '../untils/polices'

const BottomComponentsSection = styled.section`
  padding-bottom: 5%;

  @media (min-width: 576px) {
    padding-bottom: 10%;
  }

  @media (min-width: 768px) {
    padding-bottom: 5%;
  }

  @media (min-width: 1200px) {
    padding-bottom: 1%;
  }
`

const Container = styled.div`
  text-align: center;
`

const Header = styled.h1`
  font-family: ${polices.second};
  font-weight: bold;

  font-size: 20px;

  @media (min-width: 576px) {
    font-size: 24px;
  }
`

const SubTitle = styled.h2`
  font-family: ${polices.second};
  font-weight: 300;
  font-size: 18px;

  margin-top: 8%;
  margin-bottom: 10%;

  @media (min-width: 576px) {
    margin-top: 5%;
    margin-bottom: 8%;
  }
  @media (min-width: 768px) {
    margin-top: 2%;
    margin-bottom: 4%;
  }
  @media (min-width: 1200px) {
    margin: 2% 0;
  }
`

const ParagraphContainer = styled.div`
  margin-top: 1rem;
`

const Paragraph = styled.p`
  font-family: ${polices.second};
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
`
function BottomComponents() {
  return (
    <React.Fragment>
      <BottomComponentsSection>
        <Container className="container">
          <Header>Alors prêt à se lancer ?</Header>
          <SubTitle>Obtenez votre devis personnalisé dès à présent.</SubTitle>
          <div className="row justify-content-center">
            <Button col={'col-md-6 col-lg-4 col-xxl-3'} />
          </div>
          <ParagraphContainer className="row justify-content-center">
            <Paragraph className="col-lg-8 col-xxl-6">
              Faites le premier pas vers la réalisation de votre site web en
              nous contactant dès maintenant.!
            </Paragraph>
          </ParagraphContainer>
        </Container>
      </BottomComponentsSection>
    </React.Fragment>
  )
}

export default BottomComponents

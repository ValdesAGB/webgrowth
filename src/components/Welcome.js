import React from 'react'
import Button from './Button'
import styled, { keyframes } from 'styled-components'
import Decoration from './Decoration'
import { polices } from '../untils/polices'

const fadeInDown = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}

to {
  opacity: 1;
  transform: none;
}
`

const fadeInUp = keyframes`
from {
  opacity: 0;
  transform: translateY(20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`

const WelcomeSection = styled.section`
  position: relative;
  padding: 5% 0;

  @media (min-width: 576px) {
    padding-bottom: 10%;
  }

  @media (min-width: 768px) {
    padding: 5% 0;
  }
`

const Container = styled.div`
  text-align: center;
`

const UpperTitle = styled.h4`
  font-family: ${polices.second};
  font-size: 15px;
  font-weight: 400;
  font-style: italic;
  animation: ${fadeInDown} 1.8s ease-in forwards;
`

const MainTitle = styled.h1`
  font-family: ${polices.second};

  font-weight: 600;

  animation: ${fadeInDown} 2s forwards;
  margin: 10% 0;
  font-size: 3em;

  @media (min-width: 576px) {
    margin: 5% 0;
  }

  @media (min-width: 768px) {
    animation: ${fadeInDown} 1.5s linear forwards;
  }

  @media (min-width: 992px) {
    margin: 2% 0;
  }
`

const SubTitle = styled.h3`
  font-family: ${polices.second};
  font-size: 17px;
  font-weight: 300;

  animation: ${fadeInUp} 1s linear forwards;

  @media (min-width: 768px) {
    animation: ${fadeInDown} 1s linear forwards;
  }
`

const Bold = styled.span`
  font-weight: 500;
`

const ButtonDiv = styled.div`
  animation: ${fadeInUp} 1s linear forwards;
`

function Welcome() {
  return (
    <React.Fragment>
      <WelcomeSection>
        <Container className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <UpperTitle>
                Parce que vous avez besoin de visibilité et de crédibilité pour
                grandir...
              </UpperTitle>
            </div>
            <div className="col-md-10 col-lg-8">
              <MainTitle>
                Nous réalisons LE site web sur mesure pour votre PME.
              </MainTitle>
            </div>
            <div className="col-md-9 col-lg-7">
              <SubTitle>
                Renforcez votre présence en ligne avec un site web
                <Bold> attractif</Bold> et
                <Bold> dynamique</Bold> pour saisir toutes les
                <Bold> opportunités à votre portée</Bold>.
              </SubTitle>
            </div>
            <div className="row justify-content-center">
              <ButtonDiv className="col-md-10 col-lg-6">
                <div className="row justify-content-center">
                  <Button col={'col-11 col-md-6 mt-4'} />
                </div>
              </ButtonDiv>
            </div>
          </div>
          <Decoration />
        </Container>
      </WelcomeSection>
    </React.Fragment>
  )
}

export default Welcome
/* <Decoration />*/

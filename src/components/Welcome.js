import React from 'react'
import Button from './Button'
import styled, { keyframes } from 'styled-components'
import Inteface from './Inteface'
import WWW from './WWW'
import Fusee from './Fusee'
import Lampe from './Lampe'

function Welcome() {
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
    padding: 5% 0 2% 0;
    @media (min-width: 1360px) {
      margin-bottom: 2%;
    }

    @media (min-width: 2560px) {
      margin-bottom: 4%;
    }
  `
  const UpperTitle = styled.h4`
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 400;
    font-style: italic;
    animation: ${fadeInDown} 1.8s ease-in forwards;
  `

  const MainTitle = styled.h1`
    font-family: 'Roboto', sans-serif;

    font-weight: 600;

    @media (min-width: 320px) {
      margin: 10% 0 10% 0;
      font-size: 3em;
    }

    @media (min-width: 768px) {
      margin: 5% 0 5% 0;
    }

    @media (min-width: 1024px) {
      margin: 2% 0 2% 0;
      font-size: 3em;
    }
    @media (min-width: 320px) {
      animation: ${fadeInDown} 2s forwards;
    }

    @media (min-width: 768px) {
      animation: ${fadeInDown} 1.5s linear forwards;
    }
  `

  const SubTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    font-weight: 300;

    @media (min-width: 320px) {
      animation: ${fadeInUp} 1s linear forwards;
    }

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

  return (
    <React.Fragment>
      <WelcomeSection>
        <div className="container text-center">
          <div className="row justify-content-center ">
            <div className="col-md-7">
              <UpperTitle>
                Parce que votre PME a besoin de visibilité et de crédibilité
                pour grandir...
              </UpperTitle>
            </div>
            <div className="col-md-10 col-lg-8">
              <MainTitle>
                Nous réalisons des sites web sur mesure pour votre PME.
              </MainTitle>
            </div>
            <div className="col-md-9 col-lg-7">
              <SubTitle>
                Renforcer votre présence en ligne avec un site web
                <Bold> attractif</Bold> et <Bold>dynamique</Bold> pour saisir
                des
                <Bold> opportunités commerciales.</Bold>
              </SubTitle>
            </div>
            <div className=" row  justify-content-center">
              <ButtonDiv className="col-md-10 col-lg-6 row justify-content-center">
                <Button col={'col-11 col-md-6 mt-4'} />
              </ButtonDiv>
            </div>
          </div>
        </div>

        <Inteface />
        <WWW />
        <Fusee />
        <Lampe />
      </WelcomeSection>
    </React.Fragment>
  )
}

export default Welcome
/**            <CoverLampe leftSide={true} src={lampe} alt="idee" />

            <CoverLampe src={lampe} alt="idee" />
 */

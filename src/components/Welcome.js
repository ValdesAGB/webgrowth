import React from 'react'
import Button from './Button'
import styled, { keyframes } from 'styled-components'
import idee from '../assets/idee.png'
import lampe from '../assets/lampe.png'
import Inteface from './Inteface'
import WWW from './WWW'
import Fusee from './Fusee'

function Welcome() {
  const WelcomeSection = styled.section`
    position: relative;
    padding: 5% 0 2% 0;
  `
  const UpperTitle = styled.h4`
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 400;
    font-style: italic;
  `

  const MainTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 600;
    margin: 5% 0 5% 0;
  `

  const SubTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    font-weight: 300;
  `

  const Bold = styled.span`
    font-weight: 500;
  `

  const LampeDivContainer = styled.div`
    position: absolute;
    top: 80%;
    left: 85%;
  `
  const LampeDiv = styled.div`
    position: relative;
  `

  const CoverLampe = styled.img`
    position: relative;
    top: -30px;
    left: ${(props) => (props.leftSide === true ? '10%' : '-10%')};
    width: 25%;
  `

  const CoverIdee = styled.img`
    position: relative;
    top: -70px;
    left: 0%;
    width: 50%;
  `
  return (
    <React.Fragment>
      <WelcomeSection>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-7">
              <UpperTitle>
                Parce que votre PME a besoin de visibilité et de crédibilité
                pour grandir...
              </UpperTitle>
            </div>
            <div className="col-8">
              <MainTitle>
                Nous réalisons des sites web sur mesure pour votre PME.
              </MainTitle>
            </div>
            <div className="col-7">
              <SubTitle>
                Renforcer votre présence en ligne avec un site web
                <Bold> attractif</Bold> et <Bold>dynamique</Bold> pour saisir
                des
                <Bold> opportunités commerciales.</Bold>
              </SubTitle>
            </div>
            <div className=" row  justify-content-center">
              <div className="col-6 row justify-content-center">
                <Button col={'col-6 mt-4'} />
              </div>
            </div>
          </div>
        </div>

        <Inteface />
        <WWW />
        <Fusee />
        <LampeDivContainer>
          <LampeDiv>
            <CoverLampe leftSide={true} src={lampe} alt="idee" />

            <CoverIdee src={idee} alt="idee" />
            <CoverLampe src={lampe} alt="idee" />
          </LampeDiv>
        </LampeDivContainer>
      </WelcomeSection>
    </React.Fragment>
  )
}

export default Welcome
/**            <CoverLampe leftSide={true} src={lampe} alt="idee" />

            <CoverLampe src={lampe} alt="idee" />
 */

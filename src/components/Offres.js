import React from 'react'
import { offresElements } from '../data'
import styled from 'styled-components'
import OffreMd from './OffreMd'
import OffresSm from './OffresSm'
import { polices } from '../untils/polices'

const OffreSection = styled.section`
  padding-top: 5%;
  padding-bottom: 5%;

  @media (min-width: 576px) {
    padding-bottom: 10%;
  }

  @media (min-width: 768px) {
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

const TitleContainer = styled.div`
  margin-bottom: 10%;

  @media (min-width: 768px) {
    margin-bottom: 5%;
  }
`

const Header = styled.h1`
  font-family: ${polices.second};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`

const SubTitle = styled.h2`
  font-family: ${polices.second};
  font-weight: 300;
  font-size: 18px;
  text-align: center;
`

const OffresContainer = styled.div`
  margin-bottom: 30px;
  position: relative;
`
function Offres() {
  return (
    <React.Fragment>
      <OffreSection id="offers">
        <div className="container">
          <TitleContainer>
            <Header>Nos Offres</Header>
            <SubTitle>Nos meilleures offres pour vous. 🎊</SubTitle>
          </TitleContainer>
          {offresElements.map(({ id, offre, cover, right, text }) => (
            <OffresContainer key={id} className="row justify-content-center">
              <OffreMd
                id={id}
                side={right}
                offre={offre}
                cover={cover}
                paragraph={text}
                OffresContainer={OffresContainer}
              />
              <OffresSm id={id} offre={offre} paragraph={text} />
            </OffresContainer>
          ))}
        </div>
      </OffreSection>
    </React.Fragment>
  )
}

export default Offres

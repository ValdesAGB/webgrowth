import React from 'react'
import { offresElements } from '../data'
import styled from 'styled-components'

import OffreMd from './OffreMd'
import OffresSm from './OffresSm'

function Offres() {
  const para = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. `

  const TitleContainer = styled.div`
    margin: 10% 0 5% 0;
  `

  const Header = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 24px;
  `

  const SubTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
  `

  const OffresContainer = styled.div`
    margin-bottom: 30px;
    position: relative;
  `

  return (
    <React.Fragment>
      <section id="offers">
        <div className="container">
          <TitleContainer className="row justify-content-center">
            <Header className="col-md-6 text-center">Nos Offres</Header>
            <SubTitle className="col-md-7 text-center">
              Nos meilleurs offres pour vous. 🎊
            </SubTitle>
          </TitleContainer>
          {offresElements.map(({ id, offre, cover, right, text }) => (
            <OffresContainer key={id} className="row">
              <OffreMd
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
      </section>
    </React.Fragment>
  )
}

export default Offres

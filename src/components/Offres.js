import React from 'react'
import { offresElements } from '../data'
import styled from 'styled-components'
import HoverContent from './HoverContent'

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

  const Offre = styled.div`
    background-color: ${(props) =>
      props.side !== true ? '#121234' : '#11121E'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffce07;
    cursor: pointer;
    z-index: 2;
  `

  const CoverContainer = styled.div`
    position: relative;
  `

  const Cover = styled.img`
    position: relative;
    z-index: -2;
  `

  const Hover = styled.div`
    background-color: rgba(204, 204, 203, 0.9);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;
    padding: 0 10% 0 10%;
    z-index: 0;
    transform: ${(props) =>
      props.sides !== true ? ' translateX(-100%)' : ' translateX(100%)'};
    transition: transform 2s;
    ${OffresContainer}:hover & {
      transform: ${(props) =>
        props.sides !== true ? 'translateX(0%)' : ' translateX(0%)'};
    }

    @media (min-width: 768px) {
      padding: 10%;
    }

    @media (min-width: 1360px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `

  const Icone = styled.i`
    font-size: 2em;
    margin: ${(props) => (props.side !== true ? '0 0 0 5%' : '0 5% 0 0')};
  `

  return (
    <React.Fragment>
      <section>
        <div className="container">
          <TitleContainer className="row justify-content-center">
            <Header className="col-6 text-center">Nos Offres</Header>
            <SubTitle className="col-7 text-center">
              Nos meilleurs offres pour vous. 🎊
            </SubTitle>
          </TitleContainer>
          {offresElements.map(({ id, offre, cover, right }) => (
            <OffresContainer key={id} className="row">
              {!right ? (
                <>
                  <Offre side={right} className="col">
                    <h1 className="text-center">{offre}</h1>
                    <Icone
                      side={right}
                      className="bi bi-arrow-right-circle-fill"
                    />
                  </Offre>
                  <CoverContainer className="col ">
                    <Cover src={cover} alt={offre} className="w-100" />
                    <Hover sides={right}>
                      <HoverContent paragraph={para} />
                    </Hover>
                  </CoverContainer>
                </>
              ) : (
                <>
                  <CoverContainer className="col ">
                    <Cover src={cover} alt={offre} className="w-100" />
                    <Hover sides={right}>
                      <HoverContent paragraph={para} />
                    </Hover>
                  </CoverContainer>
                  <Offre side={right} className="col">
                    <Icone
                      side={right}
                      className="bi bi-arrow-left-circle-fill"
                    />
                    <h1 className="text-center">{offre}</h1>
                  </Offre>
                </>
              )}
            </OffresContainer>
          ))}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Offres

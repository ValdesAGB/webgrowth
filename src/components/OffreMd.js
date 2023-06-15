import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import HoverContent from './HoverContent'

function OffreMd({ side, offre, cover, paragraph, OffresContainer }) {
  const ScrollbarStyles = createGlobalStyle`
  /* Barre de défilement personnalisée */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #121234;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #121234;
  }
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
    overflow-y: scroll;
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

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #121234;
      border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #121234;
    }
  `

  const Icone = styled.i`
    font-size: 2em;
    margin: ${(props) => (props.side !== true ? '0 0 0 5%' : '0 5% 0 0')};
  `
  return (
    <React.Fragment>
      {!side ? (
        <>
          <Offre side={side} className="col d-none d-md-flex">
            <h1 className="text-center">{offre}</h1>
            <Icone side={side} className="bi bi-arrow-right-circle-fill" />
          </Offre>
          <CoverContainer className="col d-none d-md-flex ">
            <Cover src={cover} alt={offre} className="w-100" />
            <Hover sides={side}>
              <HoverContent paragraph={paragraph} />
            </Hover>
          </CoverContainer>
        </>
      ) : (
        <>
          <CoverContainer className="col  d-none d-md-flex">
            <Cover src={cover} alt={offre} className="w-100" />
            <Hover sides={side}>
              <HoverContent paragraph={paragraph} />
            </Hover>
          </CoverContainer>
          <Offre side={side} className="col d-none d-md-flex">
            <Icone side={side} className="bi bi-arrow-left-circle-fill" />
            <h1 className="text-center">{offre}</h1>
          </Offre>
        </>
      )}
    </React.Fragment>
  )
}

export default OffreMd

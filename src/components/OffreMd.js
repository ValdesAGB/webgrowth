import React from 'react'
import styled from 'styled-components'
import HoverContent from './HoverContent'
import { colors } from '../untils/colors'

const Offre = styled.div`
  background-color: ${(props) =>
    props.side !== true ? colors.main : colors.tertiary};
  color: ${colors.second};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;

  display: none;

  @media (min-width: 992px) {
    display: flex;
  }

  h1 {
    text-align: center;
  }
`

const CoverContainer = styled.div`
  position: relative;

  display: none;

  @media (min-width: 992px) {
    display: flex;
  }
`

const Cover = styled.img`
  position: relative;
  z-index: 0;
  width: 100%;
`

function OffreMd({ id, side, offre, cover, paragraph, OffresContainer }) {
  const Hover = styled.div`
    background-color: ${colors.offreMdHoverBgColor};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;

    transform: ${(props) =>
      props.sides !== true ? ' translateX(-100%)' : ' translateX(100%)'};
    transition: transform 2s;

    ${OffresContainer}:hover & {
      transform: ${(props) =>
        props.sides !== true ? 'translateX(0%)' : ' translateX(0%)'};
    }
  `

  const Icone = styled.i`
    font-size: 2em;
    margin: 0 5%;

    transition: transform 0.5s;

    ${OffresContainer}:hover & {
      transform: ${(props) =>
        props.side !== true ? 'translateX(10px)' : ' translateX(-10px)'};
    }
  `
  return (
    <React.Fragment>
      {!side ? (
        <>
          <Offre side={side} className="col">
            <h1>{id === 'commerce' ? offre + ' (coming soon 🚀)' : offre}</h1>
            <Icone side={side} className="bi bi-arrow-right-circle-fill" />
          </Offre>
          <CoverContainer className="col">
            <Cover src={cover} alt={offre} />
            <Hover sides={side}>
              <HoverContent id={id} paragraph={paragraph} />
            </Hover>
          </CoverContainer>
        </>
      ) : (
        <>
          <CoverContainer className="col">
            <Cover src={cover} alt={offre} />
            <Hover sides={side}>
              <HoverContent id={id} paragraph={paragraph} />
            </Hover>
          </CoverContainer>
          <Offre side={side} className="col">
            <Icone side={side} className="bi bi-arrow-left-circle-fill" />
            <h1>{offre}</h1>
          </Offre>
        </>
      )}
    </React.Fragment>
  )
}

export default OffreMd

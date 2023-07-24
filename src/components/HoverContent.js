import React from 'react'
import styled from 'styled-components'
import { rdv } from '../data'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Container = styled.div`
  height: 100%;
  text-align: center;
`

const Paragraph = styled.p`
  font-family: ${polices.second};

  text-align: justify;
  overflow: auto;
  padding: 3%;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.webkitScrollbarTrackBgColor};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.tertiary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.tertiary};
  }

  max-height: 75%;

  @media (min-width: 1200px) {
    max-height: 79%;
  }
`

const Button = styled.a`
  font-family: ${polices.second};
  color: ${colors.main};
  background-color: ${colors.second};
  border: none;
  padding: 2% 4%;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;

  transition: all 300ms;

  &:hover {
    transform: scale(0.95);
  }

  &:focus {
    background-color: ${colors.second};
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.6;
  }
`

function HoverContent({ id, paragraph }) {
  return (
    <React.Fragment>
      <Container>
        <Paragraph>{paragraph}</Paragraph>
        <Button
          className={`${id === 'commerce' ? 'disabled' : ''}`}
          href={rdv}
          target="_blank"
        >
          Obtenir un devis personnalisé
        </Button>
      </Container>
    </React.Fragment>
  )
}

export default HoverContent

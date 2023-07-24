import React from 'react'
import styled from 'styled-components'
import { rdv } from '../data'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const OffreContainer = styled.div`
  background-color: ${colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`

const Offre = styled.div`
  color: ${colors.second};
  padding: 2% 0;
  font-family: ${polices.second};
  font-weight: 500;

  @media (min-width: 768px) {
    font-family: ${polices.main};
    font-weight: 600;
  }
`

const Content = styled.div`
  padding-bottom: 5%;
  height: 300px;

  @media (min-width: 576px) {
    text-align: center;
  }
`

const Paragraph = styled.p`
  padding-top: 5%;
  padding-bottom: 2%;
  color: white;
  border-top: solid 1px red;
  margin-bottom: 20px;
  font-family: ${polices.noSerif};
  font-size: 0.9em;
  overflow: auto;

  height: 85%;

  @media (min-width: 576px) {
    height: 88%;
  }
`

const Button = styled.a`
  color: ${colors.main};
  background-color: ${colors.second};
  border: none;
  padding: 2% 4% 3% 4%;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    background-color: ${colors.second};
  }
  &:focus {
    background-color: ${colors.second};
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.6;
  }
`

const Icone = styled.i`
  color: ${colors.second};
`

function OffresSm({ id, offre, paragraph }) {
  return (
    <React.Fragment>
      <OffreContainer className=" col-md-11 navbar navbar-expand-lg">
        <div className="container">
          <Offre
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
          >
            {id === 'commerce' ? offre + ' (coming soon 🚀)' : offre}
          </Offre>

          <Icone
            className="navbar-toggler bi bi-plus"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />

          <Content className="collapse navbar-collapse" id={id}>
            <Paragraph>{paragraph}</Paragraph>

            <Button
              className={`col-md-10 col-lg-8 ${
                id === 'commerce' ? 'disabled' : ''
              }`}
              href={rdv}
              target="_blank"
            >
              Obtenir un devis personnalisé
            </Button>
          </Content>
        </div>
      </OffreContainer>
    </React.Fragment>
  )
}

export default OffresSm

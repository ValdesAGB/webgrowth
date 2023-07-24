import React from 'react'
import styled from 'styled-components'
import { WebGrowth } from '../data'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const HowSection = styled.section`
  padding: 2%;
  cursor: pointer;
  border-radius: 20px;
  background-color: white;
  transition: background-color 500ms 0.2s, box-shadow 600ms;
  &:hover {
    background-color: ${colors.second};
    box-shadow: 0px 0px 10px ${colors.second};
  }

  @media (max-width: 767px) {
    margin: 10% 0;
  }

  @media (min-width: 768px) {
    margin: 5% 0;
  }

  @media (min-width: 992px) {
    margin: 0 2%;
  }
`

const Header = styled.h3`
  font-weigth: bold;
  font-size: 22px;
  font-family: ${polices.second};
  border-radius: 20px;
  margin-bottom: 5%;
  padding: 5%;
  color: white;
  background-color: ${colors.main};
  transition: background-color 500ms, color 800ms;
  ${HowSection}:hover & {
    background-color: white;
    color: black;
  }
`

const Paragraph = styled.p`
  font-weight: medium;
  font-size: 14px;
  line-height: 30px;
  font-family: ${polices.second};
`

const Gras = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: black;
  font-family: ${polices.second};
`

function How() {
  return (
    <React.Fragment>
      <HowSection className="col-12 col-sm-9 col-md-7 col-lg">
        <Header>Comment 👀</Header>

        <div>
          <Paragraph>
            {WebGrowth()} offre un service <Gras>All in One</Gras> pour
            accompagner nos clients à chaque étape de leur projet de
            développement web. De la <Gras>consultation initiale</Gras> à la{' '}
            <Gras>réalisation complète</Gras>, notre{' '}
            <Gras>équipe expérimentée</Gras> crée des solutions personnalisées
            en utilisant les{' '}
            <Gras>technologies les plus avancées de l’industrie</Gras>. Nous
            nous engageons à collaborer étroitement avec nos clients, en
            fournissant des mises à jour régulières et en apportant des
            ajustements selon leurs besoins.
          </Paragraph>
        </div>
      </HowSection>
    </React.Fragment>
  )
}

export default How

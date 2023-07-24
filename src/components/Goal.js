import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const GoalSection = styled.section`
  padding: 2%;
  cursor: pointer;
  border-radius: 20px;
  background-color: white;
  transition: background-color 500ms 0.2s, box-shadow 600ms;
  &:hover {
    background-color: ${colors.second};
    box-shadow: 0px 0px 10px ${colors.second};
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
  ${GoalSection}:hover & {
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
`

function Goal() {
  return (
    <React.Fragment>
      <GoalSection className="col-12 col-sm-9 col-md-7 col-lg">
        <Header>Objectif 🎉</Header>

        <div>
          <Paragraph>
            Notre <Gras>objectif</Gras> est de fournir des solutions web de
            <Gras> haute qualité</Gras>, répondant aux besoins spécifiques de
            nos clients. Nous mettons l'accent sur l'utilisation des dernières
            technologies et des meilleures pratiques du secteur pour garantir
            des <Gras>résultats performants</Gras> et <Gras>esthétiques</Gras>.
            Grâce à une collaboration étroite et un accompagnement personnalisé,
            nous visons à offrir une expérience fluide et satisfaisante, en
            réalisant les projets de nos clients selon leurs exigences
            spécifiques.
          </Paragraph>
        </div>
      </GoalSection>
    </React.Fragment>
  )
}

export default Goal

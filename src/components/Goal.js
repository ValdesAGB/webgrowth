import React from 'react'
import styled from 'styled-components'

function Goal() {
  const GoalSection = styled.section`
    background-color: white;
    padding: 2%;
    border-radius: 20px;
    transition: background-color 500ms, box-shadow 600ms;
    &:hover {
      background-color: #ffce07;
      box-shadow: 0px 0px 10px #ffce07;
      cursor: pointer;
    }
  `
  const Header = styled.h3`
    font-weigth: bold;
    font-size: 22px;
    margin-bottom: 10%;
    border-radius: 20px;
    color: white;
    background-color: #121234;
    padding: 5%;
    transition: background-color 500ms, color 800ms;
    ${GoalSection}:hover & {
      background-color: white;
      color: black;
    }
    @media (min-width: 768px) {
      margin-bottom: 4%;
      padding: 3%;
    }
    @media (min-width: 1024px) {
      margin-bottom: 4%;
      padding: 5%;
    }
  `

  const Paragraph = styled.p`
    font-weight: medium;
    font-size: 14px;
    line-height: 30px;
  `

  const Gras = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: black;
  `
  return (
    <React.Fragment>
      <GoalSection className="col-12 col-lg">
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

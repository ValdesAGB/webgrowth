import React from 'react'
import styled from 'styled-components'
import { WebGrowth } from '../data'

function How() {
  const HowSection = styled.section`
    background-color: white;
    padding: 2%;
    border-radius: 20px;

    transition: background-color 500ms, box-shadow 600ms;
    &:hover {
      background-color: #ffce07;
      box-shadow: 0px 0px 10px #ffce07;
      cursor: pointer;
    }
    @media (min-width: 320px) {
      margin: 5% 0 5% 0;
    }

    @media (min-width: 992px) {
      margin: 0 2% 0 2%;
    }
  `

  const Header = styled.h3`
    font-weigth: bold;
    font-size: 22px;
    border-radius: 20px;
    color: white;
    background-color: #121234;
    padding: 5%;
    transition: background-color 500ms, color 800ms;
    ${HowSection}:hover & {
      background-color: white;
      color: black;
    }
    margin-bottom: 10%;
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
      <HowSection className="col-12 col-lg">
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

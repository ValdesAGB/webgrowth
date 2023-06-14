import React from 'react'
import styled from 'styled-components'

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

    @media (min-width: 1024px) {
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
    line-height: 40px;
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
            Avec son service <Gras>All in One</Gras>, <Gras>WebGrowth</Gras>{' '}
            vous offre un service complet ayant pour but de vous fournir un
            produit fini de votre projet tout en garantissant votre{' '}
            <Gras>satisfaction à 100%</Gras>. Cela dans le but de vous permettre
            de vous consacrer entièrement sur les autres tâches les plus
            importantes pour vous.
          </Paragraph>
        </div>
      </HowSection>
    </React.Fragment>
  )
}

export default How

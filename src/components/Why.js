import React from 'react'
import { whyElements } from '../data'
import styled from 'styled-components'

function Why() {
  const WhySection = styled.section`
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
    ${WhySection}:hover & {
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
  `

  const Pourcentage = styled.span`
    font-weight: bold;
    font-size: 16px;
    color: black;
  `
  return (
    <WhySection className="col-12 col-lg">
      <Header>Pourquoi ❓</Header>

      <div>
        {whyElements.map(({ number, text }) => (
          <Paragraph key={number}>
            <Pourcentage>+{number}%</Pourcentage> {text}
          </Paragraph>
        ))}
      </div>
    </WhySection>
  )
}

export default Why

import React from 'react'
import { whyElements } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const WhySection = styled.section`
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
  ${WhySection}:hover & {
    background-color: white;
    color: black;
  }
`

const Paragraph = styled.p`
  font-weight: medium;
  font-size: 14px;
  font-family: ${polices.second};
`

const Pourcentage = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: black;
  font-family: ${polices.second};
`

function Why() {
  return (
    <WhySection className="col-12 col-sm-9 col-md-7 col-lg">
      <Header>Pourquoi ❓</Header>

      <div>
        {whyElements.map(({ number, text }) => (
          <Paragraph key={number}>
            <Pourcentage>Plus de {number}%</Pourcentage> {text}
            {number === 83 && <Pourcentage>période post-covid.</Pourcentage>}
          </Paragraph>
        ))}
      </div>
    </WhySection>
  )
}

export default Why

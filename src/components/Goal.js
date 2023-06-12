import React from 'react'
import styled from 'styled-components'

function Goal() {
  const GoalSection = styled.section`
    background-color: white;
    padding: 2%;
    border-radius: 2%;
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
      <GoalSection className="col">
        <Header>Objectif 🎉</Header>
        <div>
          <Paragraph>
            Notre <Gras>objectif</Gras> chez WebGrowth est de nous assurer que
            cet investissement que vous réalisez pour votre projet soit le plus
            rentable possible pour votre image de marque, votre présence en
            ligne et votre audience grâce à un site internet{' '}
            <Gras>ergonomique, fluide et unique</Gras>.
          </Paragraph>
        </div>
      </GoalSection>
    </React.Fragment>
  )
}

export default Goal

import React from 'react'
import styled from 'styled-components'
import Achievements from './Achievements'
import { polices } from '../untils/polices'

const AchievementsSections = styled.section`
  padding-top: 15%;
  padding-bottom: 15%;

  @media (min-width: 576px) {
    padding-bottom: 10%;
  }

  @media (min-width: 768px) {
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .container {
    text-align: center;
  }
`
const Header = styled.h1`
  font-family: ${polices.second};
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10%;

  @media (min-width: 768px) {
    margin-bottom: 5%;
  }
`

function LatestAchievements() {
  return (
    <React.Fragment>
      <AchievementsSections id="achievements">
        <div>
          <div className="container">
            <Header>Nos Dernières Réalisations</Header>
            <div>
              <Achievements />
            </div>
          </div>
        </div>
      </AchievementsSections>
    </React.Fragment>
  )
}

export default LatestAchievements

import React from 'react'
import styled from 'styled-components'
import Achievements from './Achievements'

function LatestAchievements() {
  const AchievementsSections = styled.section`
    @media (min-width: 320px) {
      margin: 20% 0 20% 0;
    }

    @media (min-width: 768px) {
      margin: 10% 0 10% 0;
    }
    @media (min-width: 1024px) {
      margin: 10% 0 0% 0;
    }
  `
  const Header = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 24px;

    @media (min-width: 320px) {
      margin-bottom: 10%;
    }
    @media (min-width: 768px) {
      margin-bottom: 5%;
    }
  `

  return (
    <React.Fragment>
      <AchievementsSections id="achievements">
        <div>
          <div className="container text-center">
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

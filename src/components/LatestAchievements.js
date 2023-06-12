import React from 'react'
import styled from 'styled-components'
import Achievements from './Achievements'

function LatestAchievements() {
  const AchievementsSections = styled.section`
    margin: 5% 0 5% 0;
  `
  const Header = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 5%;
  `
  return (
    <React.Fragment>
      <AchievementsSections>
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

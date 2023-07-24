import React from 'react'
import AchievementsGrid from './AchievementsGrid'
import AchievementsCard from './AchievementsCard'
import { archivementsElements, rdv } from '../data'

function Achievements() {
  return (
    <React.Fragment>
      <AchievementsGrid array={archivementsElements} rdv={rdv} />
      <AchievementsCard array={archivementsElements} rdv={rdv} />
    </React.Fragment>
  )
}

export default Achievements

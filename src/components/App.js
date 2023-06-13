import React from 'react'
import Reasons from './Reasons'
import LatestAchievements from './LatestAchievements'
import OperatedMode from './OperatedMode'
import Reviews from './Reviews'
import FAQ from './FAQ'
import BottomComponents from './BottomComponents'
import Footer from './Footer'
import Welcome from './Welcome'
import Offres from './Offres'

function App() {
  return (
    <React.Fragment>
      <main className="row">
        <Welcome />
        <Reasons />
        <LatestAchievements />
        <OperatedMode />
        <Offres />
        <Reviews />
        <FAQ />
        <BottomComponents />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App

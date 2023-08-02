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
import Header from './Header'
import styled from 'styled-components'

const Main = styled.main`
  margin-top: 125px;
  @media (min-width: 440px) {
    margin-top: 150px;
  }

  @media (min-width: 576px) {
    margin-top: 130px;
  }

  @media (min-width: 992px) {
    margin-top: 110px;
  }
`

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main
        className="row scrollspy-example"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="false"
        tabIndex="0"
      >
        <Welcome />
        <Reasons />
        <LatestAchievements />
        <OperatedMode />
        <Offres />
        <Reviews />
        <FAQ />
        <BottomComponents />
      </Main>
      <Footer />
    </React.Fragment>
  )
}

export default App

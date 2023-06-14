import React from 'react'
import styled from 'styled-components'

function Header() {
  const Navigation = styled.section`
    background-color: #121234;
    font-family: 'Roboto', sans-serif;
    color: white;
    @media (min-width: 320px) {
      padding: 8% 0 8% 0;
      margin-bottom: 3%;
    }

    @media (min-width: 425px) {
      padding: 5% 0 5% 0;
      margin-bottom: 2%;
    }
    @media (min-width: 768px) {
      padding: 3% 0 3% 0;
      margin-bottom: 1%;
    }
    @media (min-width: 1360px) {
      padding: 2% 0 2% 0;
      margin-bottom: 1%;
    }

    @media (min-width: 1360px) {
      margin-bottom: 0%;
    }
  `
  return (
    <React.Fragment>
      <Navigation className="row text-center">
        <h1>HEADER</h1>
      </Navigation>
    </React.Fragment>
  )
}

export default Header

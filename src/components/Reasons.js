import React from 'react'
import Why from './Why'
import How from './How'
import Goal from './Goal'
import styled from 'styled-components'

function Reasons() {
  const ReasonsSection = styled.section`
    background-color: #121234;
    font-family: 'Roboto', sans-serif;
    @media (min-width: 320px) {
      padding-top: 10%;
      padding-bottom: 10%;
    }

    @media (min-width: 768px) {
      padding-top: 2%;
      padding-bottom: 2%;
    }
  `
  return (
    <React.Fragment>
      <ReasonsSection>
        <div>
          <div className="container ">
            <div className="row text-center">
              <Why />
              <How />
              <Goal />
            </div>
          </div>
        </div>
      </ReasonsSection>
    </React.Fragment>
  )
}

export default Reasons

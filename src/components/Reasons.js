import React from 'react'
import Why from './Why'
import How from './How'
import Goal from './Goal'
import styled from 'styled-components'

function Reasons() {
  const ReasonsSection = styled.section`
    background-color: #121234;
    font-family: 'Roboto', sans-serif;
    padding: 2% 0 2% 0;
  `
  return (
    <React.Fragment>
      <ReasonsSection>
        <div>
          <div className="container">
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

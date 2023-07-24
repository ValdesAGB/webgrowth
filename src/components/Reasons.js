import React from 'react'
import Why from './Why'
import How from './How'
import Goal from './Goal'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const ReasonsSection = styled.section`
  background-color: ${colors.main};
  font-family: ${polices.second};

  padding-top: 15%;
  padding-bottom: 15%;

  @media (min-width: 576px) {
    padding-bottom: 10%;
  }

  @media (min-width: 768px) {
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

function Reasons() {
  return (
    <React.Fragment>
      <ReasonsSection>
        <div>
          <div className="container ">
            <div className="row justify-content-center text-center">
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

import React from 'react'
import styled from 'styled-components'
import { rdv } from '../data'
import { colors } from '../untils/colors'

const Devis = styled.a`
  color: ${colors.main};
  background-color: ${colors.second};
  padding: 4%;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: ${colors.second};
  }
  &:focus {
    background-color: ${colors.second};
  }
  font-weight: 500;
  margin-bottom: 0.75rem;
`

const Call = styled.a`
  color: ${colors.main};
  border: solid 1px ${colors.callBtnBorderColor};
  background-color: transparent;
  padding: 4%;
  border-radius: 5px;
  text-decoration: none;
  transition: color 0.6s 0.2s, background-color 0.6s;
  &:hover {
    background-color: ${colors.main};
    color: white;
    border: solid 1px ${colors.callBtnBorderColor};
  }
  font-weight: 500;
`

function Button({ col }) {
  return (
    <React.Fragment>
      <div className={` ${col}`}>
        <div className="row">
          <Devis className=" col-12" href={rdv} target="_blank">
            Devis personnalisé
          </Devis>
          <Call className=" col-12" href={rdv} target="_blank">
            Réserver un appel gratuit
          </Call>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Button

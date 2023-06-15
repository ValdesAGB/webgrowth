import React from 'react'
import styled from 'styled-components'
import { rdv } from '../data'

function Button({ col }) {
  const Devis = styled.a`
    color: #121234;
    background-color: #ffce07;
    border: none;
    padding: 4%;
    border-radius: 5px;
    text-decoration: none;
    &:hover {
      background-color: #ffce07;
    }
    &:active {
      background-color: #ffce07;
    }
    font-weight: 500;
  `

  const Call = styled.a`
    color: #121234;
    border: solid 1px #666666;
    background-color: transparent;
    padding: 3%;
    border-radius: 5px;
    text-decoration: none;
    &:hover {
      border: solid 1px #666666;
    }
    font-weight: 500;
  `
  return (
    <React.Fragment>
      <div className={`row ${col}`}>
        <Devis className=" col-12 mb-3" href={rdv} target="_blank">
          Devis personnalisé
        </Devis>
        <Call className=" col-12 mb-3" href={rdv} target="_blank">
          Réserver un appel gratuit
        </Call>
      </div>
    </React.Fragment>
  )
}

export default Button

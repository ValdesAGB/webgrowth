import React from 'react'
import { archivementsElements } from '../data'
import styled from 'styled-components'

function Achievements() {
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 32.33% 32.33% 33.33%;
    gap: 10px;
  `
  const GridElements = styled.div`
    position: relative;

    grid-column: ${(props) =>
      props.ids === 'legal'
        ? ' 1 / 3'
        : props.ids === 'rano'
        ? '3/5'
        : props.ids === 'lana'
        ? '1/3'
        : props.ids === 'carla'
        ? '3/5'
        : props.ids === 'myfreeworks'
        ? '1/3'
        : '3/5'};
  `

  const Hover = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    ${GridElements}:hover & {
      background-color: rgba(0, 0, 0, 0.4);
    }
  `
  return (
    <React.Fragment>
      <Grid>
        {archivementsElements.map(({ id, cover }) => (
          <GridElements ids={id} key={id} className=" align-items-center">
            <img src={cover} alt={id} className="w-100" />
            <Hover />
          </GridElements>
        ))}
      </Grid>
    </React.Fragment>
  )
}

export default Achievements

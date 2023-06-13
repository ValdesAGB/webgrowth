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
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateX(-10%);
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;

    ${GridElements}:hover & {
      background-color: rgba(0, 0, 0, 0.4);
      opacity: 1;
      transform: translateX(0%);
    }
  `

  const Paragraph = styled.p`
    color: white;
    text-align: justify;
    padding: 0 10% 0 10%;
  `
  return (
    <React.Fragment>
      <Grid>
        {archivementsElements.map(({ id, cover }) => (
          <GridElements ids={id} key={id} className=" align-items-center">
            <img src={cover} alt={id} className="w-100" />
            <Hover>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Paragraph>
            </Hover>
          </GridElements>
        ))}
      </Grid>
    </React.Fragment>
  )
}

export default Achievements

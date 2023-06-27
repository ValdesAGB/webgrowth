import React from 'react'
import styled from 'styled-components'
import { archivementsElements, rdv } from '../data'

function AchievementsGrid() {
  const Grid = styled.div`
    display: grid;
    @media (min-width: 320px) {
      grid-template-columns: 100%;
      grid-template-rows: auto;
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);

      gap: 10px;
    }
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

    @media (min-width: 320px) {
      grid-column: 1/2;
      margin-bottom: 5%;
    }

    @media (min-width: 1024px) {
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

      margin-bottom: 2%;
    }
  `

  const Hover = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
    max-height: 100%;
    overflow-y: scroll;
    transform: translateX(-10%);
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #11121e;
      border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #11121e;
    }
    ${GridElements}:hover & {
      background-color: rgba(0, 0, 0, 0.85);
      opacity: 1;
      transform: translateX(0%);
    }

    @media (max-width: 1360px) {
      overflow: scroll;
    }
    @media (min-width: 320px) {
      padding: 5%;
    }
    @media (min-width: 1360px) {
      padding: 0;
    }
  `

  const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: white;
    text-align: justify;

    @media (min-width: 320px) {
      padding: 2%;
    }
    @media (min-width: 1360px) {
      padding: 5% 5% 2% 5%;
    }
  `
  const GetButton = styled.a`
    font-family: 'Roboto', sans-serif;
    background-color: #121234;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 400;
    padding: 2%;
    text-decoration: none;
  `

  const ViewProjet = styled.a`
    font-family: 'Roboto', sans-serif;
    background-color: #ffce07;
    border: none;
    border-radius: 5px;
    color: black;
    font-weight: 500;
    padding: 2%;
    text-decoration: none;

    @media (min-width: 320px) {
      margin-bottom: 5%;
    }

    @media (min-width: 768px) {
      margin-bottom: 0%;
      margin-right: 5%;
    }
  `

  return (
    <React.Fragment>
      <div className="d-none d-md-block">
        <Grid>
          {archivementsElements.map(({ id, description, cover, href }) => (
            <GridElements ids={id} key={id} className=" align-items-center ">
              <img src={cover} alt={id} className="w-100" />
              <Hover>
                <Paragraph>{description}</Paragraph>
                <div className="row justify-content-center align-items-center mx-1 mb-3">
                  <ViewProjet
                    href={href}
                    target="_blank"
                    className="col-6 col-md-3"
                  >
                    Voir le projet
                  </ViewProjet>
                  <GetButton
                    href={rdv}
                    target="_blank"
                    className="col-11 col-md-5 col-lg-7 col-xl-6 col-xxl-5"
                  >
                    Obtenez le votre dès maintenant
                  </GetButton>
                </div>
              </Hover>
            </GridElements>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default AchievementsGrid

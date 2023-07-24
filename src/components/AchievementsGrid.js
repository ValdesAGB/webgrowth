import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Container = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`

const GridElements = styled.div`
  position: relative;
  cursor: pointer;

  grid-column: span 4;
  margin-bottom: 5%;

  @media (min-width: 1200px) {
    grid-column: span 2;
    margin-bottom: 2%;
  }

  img {
    width: 100%;
  }
`

const Hover = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 400ms 0.2s, transform 400ms;
  ${GridElements}:hover & {
    background-color: ${colors.lastAchivementsGridsHoverBgColor};
    opacity: 1;
    transform: translateX(0);
  }
`

const Paragraph = styled.p`
  font-family: ${polices.second};
  font-weight: 300;
  color: white;
  text-align: justify;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.webkitScrollbarTrackBgColor};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.tertiary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.tertiary};
  }

  max-height: 78%;
  padding: 2%;

  @media (min-width: 1200px) {
    max-height: 72%;
    padding: 3% 4%;
  }
`
const GetButton = styled.a`
  font-family: ${polices.second};
  background-color: ${colors.main};
  color: white;
  font-weight: 500;
  padding: 2%;
  text-decoration: none;
`

const ViewProjet = styled.a`
  font-family: ${polices.second};
  background-color: ${colors.second};
  color: black;
  font-weight: 500;
  padding: 2%;
  text-decoration: none;
`

function AchievementsGrid({ array, rdv }) {
  return (
    <React.Fragment>
      <Container>
        <Grid>
          {array.map(({ id, description, cover, href }) => (
            <GridElements key={id}>
              <img src={cover} alt={id} />
              <Hover>
                <Paragraph>{description}</Paragraph>
                <div className="row justify-content-center ">
                  <ViewProjet href={href} target="_blank" className="col-lg-3">
                    Voir le projet
                  </ViewProjet>
                  <GetButton
                    href={rdv}
                    target="_blank"
                    className="col-lg-4 col-xl-6 col-xxl-5 offset-lg-1"
                  >
                    Obtenez le votre dès maintenant
                  </GetButton>
                </div>
              </Hover>
            </GridElements>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default AchievementsGrid

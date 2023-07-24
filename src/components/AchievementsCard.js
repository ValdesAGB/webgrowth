import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Container = styled.div`
  padding: 0;
  @media (min-width: 992px) {
    display: none;
  }
`

const Image = styled.img`
  width: 100%;
  border-radius: 0;
`

const CardContent = styled.div`
  border: none;
  background-color: ${colors.tertiary};
  color: white;
`

const Paragraph = styled.p`
  text-align: justify;
  font-family: ${polices.second};
  max-height: 200px;
  font-weight: 300;
  overflow: auto;
`

const ViewProjet = styled.a`
  font-family: ${polices.second};
  background-color: ${colors.second};
  border: none;
  color: black;
  font-weight: 500;
  padding: 2%;
  text-decoration: none;

  margin-bottom: 5%;

  @media (min-width: 768px) {
    margin-bottom: 0%;
  }
`

const GetButton = styled.a`
  font-family: ${polices.second};
  background-color: ${colors.main};
  border: none;
  color: white;
  font-weight: 400;
  padding: 2%;
  text-decoration: none;
`

const ReadMoreIcone = styled.i`
  position: absolute;
  top: 2%;
  left: 80%;
  font-size: 1.2em;
  color: ${colors.second};
  background-color: ${colors.main};
  padding: 1% 7%;
  box-shadow: 0px 0px 10px ${colors.main};
`

function AchievementsCard({ array, rdv }) {
  const [readMore, setReadMore] = useState(null)

  const Card = styled.div`
    border: none;
    padding: 0;
    position: relative;

    margin-bottom: ${(props) =>
      props.lastElement === 'e-bookyo' ? '0' : '15%'};

    @media (min-width: 576px) {
      margin-bottom: ${(props) =>
        props.lastElement === 'e-bookyo' ? '0' : '10%'};
    }

    @media (min-width: 768px) {
      margin-bottom: ${(props) =>
        props.lastElement === 'e-bookyo' ? '0' : '8%'};
    }
  `
  return (
    <React.Fragment>
      <Container className="row justify-content-center">
        {array.map(({ id, description, cover, href }) => (
          <Card className="card col-md-10" key={id} lastElement={id}>
            <Image src={cover} alt={id} className="card-img-top" />
            {readMore === id && (
              <CardContent className="card-body">
                <Paragraph className="card-text">{description}</Paragraph>
                <div className="row justify-content-center">
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
                    className="col-11 col-md-6 offset-md-1"
                  >
                    Obtenez le votre dès maintenant
                  </GetButton>
                </div>
              </CardContent>
            )}

            <ReadMoreIcone
              className={`row  bi bi-${
                readMore === id ? 'dash' : 'bi bi-plus-lg'
              }`}
              onClick={() => setReadMore(readMore === id ? null : id)}
            />
          </Card>
        ))}
      </Container>
    </React.Fragment>
  )
}

export default AchievementsCard

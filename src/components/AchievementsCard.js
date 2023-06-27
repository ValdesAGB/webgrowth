import React, { useState } from 'react'
import { archivementsElements, rdv } from '../data'
import styled from 'styled-components'

function AchievementsCard() {
  const [readMore, setReadMore] = useState(null)

  const Card = styled.div`
    border: ${!readMore && 'none'};
    margin-bottom: 15%;
    padding: 0;
    position: relative;
  `

  const CardContent = styled.div`
    border: none;
    background-color: #11121e;
    color: white;
  `

  const Image = styled.img`
    width: 100%;
    border-radius: 0;
  `

  const Paragraph = styled.p`
    text-align: justify;
    font-family: 'Montserrat;', sans-serif;
    max-height: 200px;
    overflow: scroll;
  `

  const ReadMoreIcone = styled.i`
    position: absolute;
    top: 2%;
    left: 80%;
    font-size: 1.2em;
    color: #ffce07;
    font-weight: 800;
    padding: 1% 7% 1% 7%;
    background-color: #121234;
    box-shadow: 1px 1px 10px #121234;
    border-radius: 5px;
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
      <div className="row p-0 d-md-none">
        {archivementsElements.map(({ id, description, cover, href }) => (
          <Card className="card" key={id}>
            <Image src={cover} alt={id} className="card-img-top w-100" />
            {readMore === id && (
              <CardContent className="card-body">
                <Paragraph className="card-text">{description}</Paragraph>
                <div className="row justify-content-center align-items-center">
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
      </div>
    </React.Fragment>
  )
}

export default AchievementsCard

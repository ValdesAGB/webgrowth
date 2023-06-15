import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { rdv } from '../data'

function OffresSm({ id, offre, paragraph }) {
  /* const [isContentOpen, setIsContentOpen] = useState(false)
  const paragraphRef = useRef(null)

  const toggleContent = (state) => {
    setIsContentOpen(state)
  }*/

  const OffreContainer = styled.div`
    background-color: #121234;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `

  const Offre = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #ffce07;
    padding: 2% 0 2% 0;
    font-weight: 500;
  `

  const Content = styled.div`
    margin-bottom: 5%;
  `

  const Paragraph = styled.p`
    padding-top: 5%;
    color: white;
    border-top: solid 1px red;
    margin-bottom: 20px;
    font-family: 'Montserrat;', sans-serif;
    font-size: 0.9em;
  `

  const Button = styled.a`
    color: #121234;
    background-color: #ffce07;
    border: none;
    padding: 2% 4% 2% 4%;
    border-radius: 5px;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      background-color: #ffce07;
    }
    &:active {
      background-color: #ffce07;
    }
  `

  const Icone = styled.i`
    color: #ffce07;
  `

  /*useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Ratio de visibilité du paragraphe dans la fenêtre d'affichage
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          toggleContent(true)
        } else {
          toggleContent(false)
        }
      })
    }, options)

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current)
    }

    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current)
      }
    }
  }, [])*/

  return (
    <React.Fragment>
      <OffreContainer className="navbar navbar-expand-lg d-md-none">
        <div className="container">
          <Offre
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
          >
            {offre}
          </Offre>

          <Icone
            className="navbar-toggler bi bi-plus"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />

          <Content className="collapse navbar-collapse" id={id}>
            <Paragraph>{paragraph}</Paragraph>
            <Button
              className="col-md-10 col-lg-8 text-center"
              href={rdv}
              target="_blank"
            >
              Obtenir un devis personnalisé
            </Button>
          </Content>
        </div>
      </OffreContainer>
    </React.Fragment>
  )
}

export default OffresSm
/** <Paragraph ref={paragraphRef}>{para}</Paragraph> */

import React from 'react'
import { footerElements } from '../data'
import styled from 'styled-components'

function Contact() {
  const ContactStyled = styled.div`
    @media (min-width: 320px) {
      margin: 5% 0;
    }
    @media (min-width: 768px) {
      margin: 2% 0;
    }
  `

  const Data = styled.div`
    color: #ffce07;
  `

  const Link = styled.a`
    color: white;
    text-decoration: none;
    @media (min-width: 320px) {
      font-size: 1em;
    }
    @media (min-width: 375px) {
      font-size: 1.1em;
    }
    @media (min-width: 1024px) {
      font-size: 1.3em;
    }
    @media (min-width: 1200px) {
      font-size: 1em;
    }
  `
  const Icone = styled.i`
    font-size: 1.2em;
  `
  return (
    <React.Fragment>
      <ContactStyled className="col-md row justify-content-md-end">
        {footerElements.map(({ id, title, icone, data, user }) => (
          <Data id={id} key={id} className={`col-xl-5`}>
            <Icone className={`bi ${icone}`} /> :{' '}
            <span>
              <Link
                target="_blank"
                href={`${
                  id === '2'
                    ? `mailto:${data}`
                    : id === '3' || id === '4'
                    ? data
                    : 'https://wa.me/22953827259'
                }`}
              >
                {user ? user : data}
              </Link>
            </span>
          </Data>
        ))}
      </ContactStyled>
    </React.Fragment>
  )
}

export default Contact

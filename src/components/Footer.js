import React from 'react'
import styled from 'styled-components'
import { footerElements } from '../data'

function Footer() {
  const FooterSection = styled.section`
    background-color: #121234;
    font-family: 'Roboto', sans-serif;
    color: white;
    padding: 2% 0 2% 0;
    font-size: 14px;
  `

  const Data = styled.div`
    margin-left: ${(props) => (props.id === '2' ? '10%' : 0)};
    color: #ffce07;
    font-style: italic;
    @media (min-width: 320px) {
      margin: 2% 0 2% 0;
    }
    @media (min-width: 1360px) {
      font-size: 1.3em;
    }
  `

  const Link = styled.a`
    color: white;
    text-decoration: none;
    font-style: normal;
    @media (min-width: 320px) {
      font-size: 1.1em;
    }

    @media (min-width: 728px) {
      font-size: 1em;
    }
  `
  const Icone = styled.i`
    font-size: 1.2em;
  `
  return (
    <React.Fragment>
      <FooterSection className="row">
        <div>
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-12 row justify-content-center ">
                {footerElements.map(({ id, title, icone, data }) => (
                  <Data
                    id={id}
                    key={id}
                    className="col-md-5 col-lg-4  col-xl-4 "
                  >
                    <span className="d-none d-md-block">
                      {title}{' '}
                      {id === '2' ? (
                        <Link href={`mailto:${data}`}>{data}</Link>
                      ) : (
                        <Link
                          href={`https://wa.me/22953827259`}
                          target="_blank"
                        >
                          {data}
                        </Link>
                      )}
                    </span>

                    <span className=" d-md-none">
                      <Icone className={`bi ${icone}`} /> :{' '}
                      {id === '2' ? (
                        <Link href={`mailto:${data}`}>{data}</Link>
                      ) : (
                        <Link
                          href={`https://wa.me/22953827259`}
                          target="_blank"
                        >
                          {data}
                        </Link>
                      )}
                    </span>
                  </Data>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FooterSection>
    </React.Fragment>
  )
}

export default Footer

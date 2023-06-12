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

  const Data = styled.span`
    margin-left: ${(props) => (props.id === '2' ? '10%' : 0)};
    color: #ffce07;
    font-style: italic;
  `

  const Link = styled.a`
    color: white;
    text-decoration: none;
    font-style: normal;
  `
  return (
    <React.Fragment>
      <FooterSection className="row">
        <div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6">
                {footerElements.map(({ id, title, data }) => (
                  <Data id={id}>
                    {title}{' '}
                    {id === '2' ? (
                      <Link href={`mailto:${data}`}>{data}</Link>
                    ) : (
                      <Link href={`tel:${data}`}>{data}</Link>
                    )}
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

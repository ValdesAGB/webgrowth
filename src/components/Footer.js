import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'
import Slogan from './Slogan'

function Footer() {
  const FooterSection = styled.section`
    background-color: #121234;
    font-family: 'Roboto', sans-serif;
    color: white;

    font-size: 14px;
  `

  const Container = styled.div`
    justify-items: center;
    align-items: center;
  `

  return (
    <React.Fragment>
      <FooterSection className="row">
        <div>
          <div className="container text-center">
            <div className="row justify-content-center align-items-center">
              <Container className="col-12 row">
                <Slogan />

                <Contact />
              </Container>
            </div>
          </div>
        </div>
      </FooterSection>
    </React.Fragment>
  )
}

export default Footer

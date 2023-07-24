import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'
import Slogan from './Slogan'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const FooterSection = styled.section`
  background-color: ${colors.main};
  font-family: ${polices.second};
  color: white;
  font-size: 14px;
`

const Container = styled.div`
  text-align: center;
`

const Content = styled.div`
  justify-items: center;
  align-items: center;
`
function Footer() {
  return (
    <React.Fragment>
      <FooterSection className="row">
        <div>
          <Container className="container">
            <div className="row justify-content-center align-items-center">
              <Content className="col-12 row">
                <Slogan />

                <Contact />
              </Content>
            </div>
          </Container>
        </div>
      </FooterSection>
    </React.Fragment>
  )
}

export default Footer

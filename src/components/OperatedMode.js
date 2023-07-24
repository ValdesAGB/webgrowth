import React from 'react'
import { operatedModeElements } from '../data'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const OperatedSection = styled.div`
  padding: 5% 0;

  @media (min-width: 576px) {
    padding-bottom: 10%;
  }

  @media (min-width: 768px) {
    padding: 5% 0;
  }
`

const Container = styled.div`
  text-align: center;
`

const Header = styled.h1`
  font-family: ${polices.second};
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 5%;
`

const OperatedDiv = styled.div`
  @media (max-width: 991px) {
    background-color: transparent;
    border-radius: 0;
  }

  background-color: ${colors.OperatedDivBgColor};
  border-radius: 20px;
  @media (min-width: 992px) {
    padding: 5% 2%;
  }
`

const OperatedContainer = styled.div`
  cursor: pointer;
  @media (min-width: 992px) {
    padding: ${(props) => props.elem !== '05' && '5%'};
    border-left: ${(props) =>
      props.elem === '01' || props.elem === '03' || props.elem === '05'
        ? 0
        : 'solid 1px white'};

    border-bottom: ${(props) =>
      props.elem === '01' || props.elem === '02' ? 'solid 1px white' : 0};

    border-top: ${(props) => (props.elem === '05' ? 'solid 1px white' : 0)};
    margin-top: ${(props) => props.elem === '05' && '2%'};
  }
`

const Operated = styled.div`
  margin: 30px 0;
`

const PuceDiv = styled.div`
  margin-bottom: 5%;
`

const Puce = styled.div`
  color: white;
  font-family: ${polices.main};
  font-weight: 600;
  font-size: 35px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s;
  ${Operated}:hover & {
    transform: translateY(-15px);
  }
  background-color: ${(props) =>
    props.id === '01' || props.id === '03' || props.id === '05'
      ? colors.main
      : colors.second};

  @media (min-width: 992px) {
    background-color: ${(props) =>
      props.id === '01' || props.id === '04' || props.id === '05'
        ? colors.main
        : colors.second};
  }
`
const Title = styled.h2`
  font-family: ${polices.second};
  font-weight: bold;
  font-size: 24px;
`

const Paragraph = styled.p`
  font-family: ${polices.second};
  font-size: 14px;
  span {
    font-weight: bold;
  }
`

const VerticalSeparetor = styled.div`
  @media (min-width: 992px) {
    display: none !important;
  }
`

const VerticalLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  border-right: dashed 2px #121234;
`

function OperatedMode() {
  return (
    <React.Fragment>
      <OperatedSection>
        <div>
          <Container className="container">
            <Header>Notre Mode de Fonctionnement</Header>
            <div className="row justify-content-center">
              <OperatedDiv className="col-lg-8">
                <div className="row justify-content-center">
                  {operatedModeElements.map(({ id, title, paragraph }) => (
                    <OperatedContainer
                      key={id}
                      elem={id}
                      className={`col-12  col-sm-10 col-md-8 col-lg-${
                        id !== '05' ? '6' : '10'
                      } `}
                    >
                      <Operated>
                        <PuceDiv className="row justify-content-center">
                          <Puce id={id}>{id}</Puce>
                        </PuceDiv>
                        <Title>{title}</Title>
                        <Paragraph>
                          {paragraph}{' '}
                          {id === '01' ? (
                            <span>satisfaction totale.</span>
                          ) : (
                            id === '05' && <span>18 mois.</span>
                          )}
                        </Paragraph>
                      </Operated>
                      {id !== '05' && (
                        <VerticalSeparetor>
                          <div>
                            <div className="row justify-content-center">
                              <div className="col-1 px-5">
                                <VerticalLine />
                              </div>
                            </div>
                          </div>
                        </VerticalSeparetor>
                      )}
                    </OperatedContainer>
                  ))}
                </div>
              </OperatedDiv>
            </div>
          </Container>
        </div>
      </OperatedSection>
    </React.Fragment>
  )
}

export default OperatedMode

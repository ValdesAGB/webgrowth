import React from 'react'
import { operatedModeElements } from '../data'
import styled from 'styled-components'

function OperatedMode() {
  const Header = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin: 7% 0 5% 0;
  `

  const OperatedDiv = styled.div`
    background-color: #d9d9d9;
    border-radius: 5%;
    padding: 5% 2% 0 2%;
  `

  const OperatedContainer = styled.div`
    border: solid 1px white;
    padding: 5%;
    border-bottom: ${(props) =>
      (props.elem === '03' || props.elem === '04' || props.elem === '05') && 0};
    border-top: ${(props) =>
      (props.elem === '01' ||
        props.elem === '02' ||
        props.elem === '03' ||
        props.elem === '04') &&
      0};
    border-left: ${(props) =>
      (props.elem === '01' ||
        props.elem === '02' ||
        props.elem === '03' ||
        props.elem === '04' ||
        props.elem === '05') &&
      0};
    border-right: ${(props) =>
      (props.elem === '02' || props.elem === '04' || props.elem === '05') && 0};
    margin: ${(props) => props.elem === '05' && '5% 0 0 0'};
    padding-top: ${(props) => props.elem === '05' && '5%'};
  `

  const PuceDiv = styled.div`
    margin: 0 0 5% 0;
  `

  const Puce = styled.div`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 35px;
    background-color: ${(props) =>
      props.id === '01' || props.id === '04' || props.id === '05'
        ? '#121234'
        : '#FFCE07'};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 24px;
  `

  const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: regular;
    font-size: 14px;
  `
  return (
    <React.Fragment>
      <section>
        <div>
          <div className="container  text-center">
            <Header>Notre Mode de Fonctionnement</Header>
            <div className="row justify-content-center">
              <OperatedDiv className="col-8 row justify-content-center">
                {operatedModeElements.map(({ id, title, paragraph }) => (
                  <OperatedContainer
                    key={id}
                    elem={id}
                    className={`col-${id !== '05' ? '6' : '10'}`}
                  >
                    <PuceDiv className="row justify-content-center">
                      <Puce id={id}>{id}</Puce>
                    </PuceDiv>
                    <Title>{title}</Title>
                    <Paragraph>
                      {paragraph}{' '}
                      {id === '01' && (
                        <span className="fw-bold">satisfaction à 100%.</span>
                      )}
                    </Paragraph>
                  </OperatedContainer>
                ))}
              </OperatedDiv>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default OperatedMode

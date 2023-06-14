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
    @media (max-width: 425px) {
      background-color: transparent;
    }
    border-radius: 20px;

    padding: 5% 2% 0 2%;
  `

  const OperatedContainer = styled.div`
    cursor: pointer;
    padding: 5%;
    @media (min-width: 320px) {
      border: 0;
    }
    padding-top: ${(props) => props.elem === '05' && '5%'};
    @media (min-width: 768px) {
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

  const PuceDiv = styled.div`
    margin: 0 0 5% 0;
  `

  const Puce = styled.div`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 35px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 320px) {
      background-color: ${(props) =>
        props.id === '01' || props.id === '03' || props.id === '05'
          ? '#121234'
          : '#FFCE07'};
    }

    @media (min-width: 728px) {
      background-color: ${(props) =>
        props.id === '01' || props.id === '04' || props.id === '05'
          ? '#121234'
          : '#FFCE07'};

      transition: transform 1s;

      ${OperatedContainer}:hover & {
        transform: translateY(-20px);
      }
    }
  `
  const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    @media (min-width: 320px) {
      font-size: 19px;
    }
    @media (min-width: 320px) {
      font-size: 24px;
    }
  `

  const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: regular;
    font-size: 14px;
  `
  const VerticalLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    border-right: dashed 2px #121234;
  `
  return (
    <React.Fragment>
      <section>
        <div>
          <div className="container  text-center">
            <Header>Notre Mode de Fonctionnement</Header>
            <div className="row justify-content-center">
              <OperatedDiv className="col-lg-8 row justify-content-center">
                {operatedModeElements.map(({ id, title, paragraph }) => (
                  <OperatedContainer
                    key={id}
                    elem={id}
                    className={`col-md-${id !== '05' ? '6' : '10'} `}
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
                    {id !== '05' && (
                      <div className="row justify-content-center d-md-none">
                        <div className="col-1">
                          <VerticalLine />
                        </div>
                      </div>
                    )}
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

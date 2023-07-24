import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { faqElements } from '../data'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const slideDown = keyframes`
  0% {
    opacity: 0;
    max-height: 0;
  }
  100% {
    opacity: 1;
    max-height: 500px;
   
  }
`

const slideUp = keyframes`
  0% {
    opacity: 1;
    max-height: 1000px;
  }
  100% {
    opacity: 0;
    max-height: 0;
  }
`

const FAQSection = styled.section`
  padding-top: 15%;
  padding-bottom: 15%;

  @media (min-width: 576px) {
    padding-bottom: 10%;
  }

  @media (min-width: 768px) {
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

const Header = styled.h1`
  font-family: ${polices.second};
  font-weight: bold;
  font-size: 24px;
  margin: 7% 0;
  text-align: center;
  margin-bottom: 10%;

  @media (min-width: 768px) {
    margin-bottom: 5%;
  }
`

const Container = styled.div`
  text-align: center;
  position: relative;
  margin: 5% 0;
  @media (min-width: 768px) {
    margin: 3% 0;
  }
`

const Question = styled.div`
  font-family: ${polices.second};
  background-color: ${colors.tertiary};
  cursor: pointer;
  position: relative;
  z-index: 1;
  padding: 0 5%;
`

const IconeDiv = styled.div`
  color: white;
`

const QuestionButton = styled.p`
  font-weight: 400;
  font-size: 0.95em;
  color: white;
  padding: 2% 0.5% 0 0.5%;
`

const AnswerContainer = styled.div`
  position: relative;
  z-index: 0;
  background-color: ${colors.main};
  color: white;
  text-align: justify;

  animation: ${(props) => (props.active ? slideDown : slideUp)} 0.5s forwards;

  border-radius: 5px;

  top: -10px;
  padding-top: ${(props) => (props.active ? '5%' : 0)};
  max-height: ${(props) => (props.active ? '500px' : '0')};
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.webkitScrollbarTrackBgColor};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.tertiary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.tertiary};
  }
`

const Answer = styled.div`
  font-family: ${polices.noSerif};
  margin-top: 5px;
  margin-bottom: 5%;
`
function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <React.Fragment>
      <FAQSection id="faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <Header>Questions fréquemment posés</Header>
              {faqElements.map((item, index) => (
                <Container key={index}>
                  <Question
                    className="row align-items-center"
                    onClick={() => toggleQuestion(index)}
                  >
                    <QuestionButton className="col">
                      {item.question}
                    </QuestionButton>
                    <IconeDiv className="col-1">
                      <i
                        className={`bi ${
                          activeIndex === index
                            ? 'bi-caret-up-fill'
                            : 'bi-caret-down-fill'
                        }`}
                      />
                    </IconeDiv>
                  </Question>
                  <AnswerContainer
                    active={activeIndex === index}
                    className="row"
                  >
                    <Answer>{item.answer}</Answer>
                  </AnswerContainer>
                </Container>
              ))}
            </div>
          </div>
        </div>
      </FAQSection>
    </React.Fragment>
  )
}

export default FAQ

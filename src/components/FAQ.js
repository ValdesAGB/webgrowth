import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { faqElements } from '../data'

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

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }
  const Header = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin: 7% 0 7% 0;
    @media (min-width: 320px) {
      margin: 10% 0 10% 0;
    }
  `

  return (
    <React.Fragment>
      <FAQSection>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <Header>Questions fréquemment posés</Header>
              {faqElements.map((item, index) => (
                <DivAll key={index}>
                  <Question
                    className="row align-items-center"
                    onClick={() => toggleQuestion(index)}
                  >
                    <QuestionButton className="col">
                      {item.question}
                    </QuestionButton>
                    <IconeDiv className="col-1">
                      <Icone
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
                </DivAll>
              ))}
            </div>
          </div>
        </div>
      </FAQSection>
    </React.Fragment>
  )
}

const FAQSection = styled.section`
  margin: 5% 0 2% 0;
  @media (min-width: 1440px) {
    margin: 2% 0 2% 0;
  }
`
const DivAll = styled.div`
  position: relative;
  margin: 7% 0 7% 0;
  @media (min-width: 768px) {
    margin: 2% 0 2% 0;
  }
`

const IconeDiv = styled.div`
  color: white;
`

const Icone = styled.i`
  transform: rotate(180deg);
  transition: transform 0.3s ease;
`

const Question = styled.div`
  background-color: #11121e;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  @media (min-width: 320px) {
    padding: 0 5% 0 5%;
  }
`

const QuestionButton = styled.p`
  font-weight: 400;
  font-size: 0.95em;
  color: white;
  padding: 2% 0.5% 0 0.5%;
`

const AnswerContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: #121234;
  color: white;
  text-align: justify;
  opacity: ${(props) => (props.active ? 1 : 0)};
  animation: ${(props) => (props.active ? slideDown : slideUp)} 0.5s forwards;
  margin-bottom: 2%;
  border-radius: 10px;
  @media (min-width: 320px) {
    top: -10px;
    padding: ${(props) => (props.active ? '10% 0% 0% 0%' : 0)};
    max-height: ${(props) => (props.active ? '500px' : '0')};
    overflow-y: scroll;
  }
  @media (min-width: 375px) {
    padding: ${(props) => (props.active ? '5% 0% 0% 0%' : 0)};
  }
`

const Answer = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-top: 5px;
  margin-bottom: 6%;
  font-weight: 300;
`

export default FAQ

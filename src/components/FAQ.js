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
    max-height: 1000px;
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
  `

  return (
    <React.Fragment>
      <FAQSection>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-6">
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
`
const DivAll = styled.div`
  position: relative;
`

const IconeDiv = styled.div`
  color: white;
`

const Icone = styled.i`
  transform: rotate(180deg);
  transition: transform 0.3s ease;
`

const Question = styled.div`
  background-color: #121234;
  border-radius: 5px;
  cursor: pointer;
`

const QuestionButton = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: white;
  padding: 2% 2% 0 2%;
`

const AnswerContainer = styled.div`
  position: relative;
  top: -20px;
  z-index: -1;
  background-color: #cccccb;
  text-align: justify;
  opacity: ${(props) => (props.active ? 1 : 0)};
  max-height: ${(props) => (props.active ? '1000px' : '0')};
  overflow: hidden;
  animation: ${(props) => (props.active ? slideDown : slideUp)} 0.5s forwards;
  padding: ${(props) => (props.active ? '5% 2% 2% 2%' : 0)};
  margin-bottom: 2%;
  border-radius: 10px;
`

const Answer = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-top: 5px;
  margin-bottom: 6%;
`

export default FAQ

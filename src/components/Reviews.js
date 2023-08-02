import React from 'react'
import styled from 'styled-components'
import { reviewsElements } from '../data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
      },
    },
  ],
}

const ReviewSection = styled.section`
  text-align: center;
  padding: 5% 0;

  @media (min-width: 576px) {
    padding-bottom: 10%;
  }

  @media (min-width: 768px) {
    padding: 5% 0;
  }
`

const Header = styled.h1`
  font-family: ${polices.second};
  font-weight: bold;
  font-size: 24px;
  text-align: center;

  margin-bottom: 10%;

  @media (min-width: 768px) {
    margin-bottom: 5%;
  }
`

const SliderComponent = styled(Slider)`
  &:active {
    border: none;
  }

  &:focus: {
    border: none;
  }
`

const ReviewContainer = styled.div`
  padding: 0 5%;
  &:active {
    border: none;
  }

  &:focus: {
    border: none;
  }
`
const ReviewContent = styled.div`
  background-color: ${colors.second};
  font-size: 14px;
  border-radius: 30px;
  padding: 5%;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
    border: none;
  }

  &:focus: {
    border: none;
  }

  .row {
    padding: 0 0.5rem;
    font-family: ${polices.second};
  }
`

const Review = styled.p`
  font-style: italic;
  font-family: ${polices.second};
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.main};
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.main};
  }

  height: 150px;

  @media (min-width: 768px) {
    height: 110px;
  }

  @media (min-width: 992px) {
    height: 150px;
  }
`

const CoverContainer = styled.div`
  padding: 0;
`

const Name = styled.h5`
  font-weight: 500;

  font-size: 1em;

  @media (min-width: 768px) {
    font-size: 1.1em;
  }
`

const Fonction = styled.h6`
  font-weight: 300;

  font-size: 0.9em;

  @media (min-width: 768px) {
    font-size: 1.1em;
  }
`

const Cover = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;

  @media (min-width: 576px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 992px) {
    width: 150px;
    height: 150px;
  }

  @media (min-width: 1200px) {
    width: 100px;
    height: 100px;
  }
`

function Reviews() {
  return (
    <React.Fragment>
      <ReviewSection id="reviews">
        <div className="container">
          <Header>Ils nous ont fait confiance...</Header>

          <SliderComponent {...settings}>
            {reviewsElements.map(({ id, review, name, fonction, cover }) => (
              <ReviewContainer key={id}>
                <ReviewContent>
                  <Review>"{review}"</Review>
                  <div className="row align-items-center">
                    <CoverContainer className="col-5 col-sm-4 col-md-3">
                      <Cover src={cover} alt={id} />
                    </CoverContainer>
                    <div className="col">
                      <Name>{name}</Name>
                      <Fonction>{fonction}</Fonction>
                    </div>
                  </div>
                </ReviewContent>
              </ReviewContainer>
            ))}
          </SliderComponent>
        </div>
      </ReviewSection>
    </React.Fragment>
  )
}

export default Reviews

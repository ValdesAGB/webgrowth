import React from 'react'
import styled from 'styled-components'
import { reviewsElements } from '../data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Reviews() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  }

  const HeaderContainer = styled.div`
    @media (min-width: 320px) {
      margin-bottom: 10%;
    }
    @media (min-width: 768px) {
      margin-bottom: 5%;
    }
    @media (min-width: 768px) {
      margin-bottom: 2%;
    }
  `
  const Header = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin-top: 10%;
  `

  const ReviewDiv = styled.div`
    border-radius: 30px;
    background-color: #ffce07;
    font-size: 14px;
    padding: 5%;
    margin: 5%;
  `

  const Name = styled.h5`
    font-weight: 500;

    @media (min-width: 320px) {
      font-size: 0.9em;
    }
    @media (min-width: 425px) {
      font-size: 1.1em;
    }
  `

  const Fonction = styled.h6`
    font-weight: 400;
    @media (min-width: 320px) {
      font-size: 0.9em;
    }
    @media (min-width: 425px) {
      font-size: 1.1em;
    }
  `

  const Cover = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
  `

  const Review = styled.p`
    font-style: italic;
  `
  return (
    <React.Fragment>
      <section className="text-center" id="reviews">
        <div>
          <div className="container ">
            <HeaderContainer className="row justify-content-center ">
              <Header className="col-12 col-md-6 ">
                Ils nous ont fait confiance...
              </Header>
            </HeaderContainer>

            <Slider {...settings}>
              {reviewsElements.map(({ id, review, name, fonction, cover }) => (
                <div key={id}>
                  <ReviewDiv>
                    <Review>"{review}"</Review>
                    <div className="row align-items-center">
                      <div className="col-5 col-md-4 col-lg-3">
                        <Cover src={cover} alt={id} />
                      </div>
                      <div className="col">
                        <Name>{name}</Name>
                        <Fonction>{fonction}</Fonction>
                      </div>
                    </div>
                  </ReviewDiv>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Reviews

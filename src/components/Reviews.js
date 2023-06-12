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
  }

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
    font-size: 14px;
  `

  const Fonction = styled.h6`
    font-weight: 400;
    font-size: 14px;
  `

  const Cover = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
  `
  return (
    <React.Fragment>
      <section className="text-center">
        <div>
          <div className="container">
            <div className="row justify-content-center">
              <Header className="col-6">
                Encore hésitant ? Découvrez ce que nos clients pensent de nous !
              </Header>
            </div>

            <Slider {...settings}>
              {reviewsElements.map(({ id, review, name, fonction, cover }) => (
                <div key={id} className="col-4">
                  <ReviewDiv className="">
                    <p>{review}</p>
                    <div className="row align-items-center">
                      <div className="col-1">
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
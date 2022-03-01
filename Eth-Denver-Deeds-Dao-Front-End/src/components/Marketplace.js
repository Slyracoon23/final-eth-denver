import React from 'react';
import styled from "styled-components";
import { breakpoint, device } from '../constants/breakpoints';
import Slider from "react-slick";
import { primaryColor, primaryDarkColor, primaryHoverColor, gray, black } from '../constants/theme';

const Team = () => {
  const slide_img = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
  };

  return (
    <>
      <SectionA>
        <ContentWrapper>
          <h2>Marketplace</h2>
          <SliderWrapper>
            <Slider {...settings}>
              {slide_img.map((s, idx) => (
                <div key={idx}>
                  <div className="slide-wrapper">
                    <img src={s} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
          </SliderWrapper>
        </ContentWrapper>
      </SectionA>
      <SectionBlack>
        <ContentWrapper>
          <CardsWrapper>
          {slide_img.map((s, idx) => (
            <div key={idx} className="card">
              <div><img src={s} alt="" /></div>
              <p>Description of an awesome product.</p>
              <div className="button-wrapper"><button><span>99$</span></button></div>
            </div>
          ))}
          </CardsWrapper>
        </ContentWrapper>
      </SectionBlack>
    </>
    
  )
}

const SectionBlack = styled.div`
  background: ${black};
  padding: 40px 40px 70px 40px;
`;

const CardsWrapper = styled.div`
  display: flex;
  margin: 60px -20px 0 -20px;
  flex-wrap: wrap;

  .card {
    padding: 12px;
    background: linear-gradient(0, #30363a, ${black});
    border-radius: 4px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 12px;
    margin: 12px;
    max-width: 220px;
    box-shadow: 0 0 0 2px ${primaryColor};

    div {
      display: flex;
      justify-content: center;
      
      img {
        width: 90px;
      }
    }

    p {
      margin-top: 16px;
      font-size: 13px;
      color: ${primaryDarkColor};
    }

    .button-wrapper {
      display: flex;
      align-items: center;
      margin-top: 16px;

      button {
        border-radius: 4px;
        color: white;
        height: 32px;
        width: 120px;
        background: ${primaryColor};
        cursor: pointer;
        position: relative;

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          border-radius: 2px;
          height: 100%;
          content: '';
          background: transparent;
          transition: all 0.3s ease;
        }

        span {
          position: relative;
        }

        &:hover {
          &::before {
            width: 100%;
            background: ${primaryHoverColor};
          }
        }
      }
    }
  }
`;

const SliderWrapper = styled.div`
  max-width: 60%;
  margin: 0 auto;

  .slide-wrapper {
    display: flex;
    justify-content: center;

    img {
      max-width: 60%;
    }
  }

  .slick-next, .slick-prev {
    width: unset;
    height: unset;

    &::before {
      font-size: 40px;
      font-family: sans-serif;
      color: ${primaryColor};
    }
  }

  .slick-prev:before {
    content: '‹';
  }

  .slick-next:before {
    content: '›';
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;

  ${breakpoint(device.lg)} {
    max-width: 665px;
  }
`;

const SectionA = styled.div`
  min-height: 100px;
  padding: 40px 40px 70px 40px;
  color: ${black};
`;


export default Team;
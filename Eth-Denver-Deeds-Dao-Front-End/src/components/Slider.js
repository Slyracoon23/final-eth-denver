import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import { primaryColor, primaryDarkColor, primaryHoverColor, gray, black } from '../constants/theme';

const Slider = ({images}) => {
  const defaultImages = [
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
    <SliderWrapper>
      <Slider {...settings}>
        {(images || defaultImages).map((s, idx) => (
          <div key={idx}>
            <div className="slide-wrapper">
              <img src={s} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
  max-width: 60%;
  margin: 0 auto;

  .slide-wrapper {
    display: flex;
    justify-content: center;

    img {
      max-width: 60%;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(6px);
      padding: 20px;
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


export default Slider;
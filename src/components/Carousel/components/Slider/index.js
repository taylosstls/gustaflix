/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import prevArrow from '../../../../assets/img/prev.svg';
import nextArrow from '../../../../assets/img/next.svg';

const Container = styled.ul`
  padding: 0;
  margin: 0;

  .slick-prev {
    border-bottom-left-radius: 8px;
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
  }

  .slick-next {
    background: linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
  }

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 2px;
    bottom: 6px;
    margin: auto;
    width: 50px;
    height: calc(100% - 8px);
    padding: 0 13px;
    transition: all .3s;
    transform: initial;

    &:hover {
      background-color: rgba(0,0,0, .8);
    }

    &:before {
      content: '';
      transition: all .3s;
      width: 20px;
      height: 38px;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
    }
  }

  .slick-prev {
    left: 2px;
    &:before {
      background-image: url(${prevArrow});
    }
  }


  .slick-next {
    right: 0;
    &:before {
      background-image: url(${nextArrow});
    }
  }

  .slick-disabled {
    opacity: 0;
  }
`;

export const SliderItem = styled.li`
  margin-right: 15px;
  img {
    margin: 15px;
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => {

  return (
    <Container>
      <SlickSlider {...{
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
};

export default Slider;

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Imgstyle } from './slider.style';
import Slideimg from './slide';

const ImageSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3500,
  };
  return (
    <>
      <Imgstyle>
        <div className=" container tag">
          <h1 className="heading-secondary ">Food Gallery</h1>
        </div>
        <div className="container slider-box">
          <Slider {...settings}>
            {Slideimg.map((item) => (
              <div key={item.id}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </Slider>
        </div>
      </Imgstyle>
    </>
  );
};
export default ImageSlider;
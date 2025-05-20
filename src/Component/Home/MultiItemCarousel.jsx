import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeel } from './TopMeel';
import CarouselItem from './CarouselItem';
function MultiItemCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false
  };
  return (
    <div>
        <Slider{...settings}>
          {topMeel.map((item)=>(
            <CarouselItem image={item.image} titel={item.titel } />
          ))}

        </Slider>
      
    </div>
  )
}

export default MultiItemCarousel

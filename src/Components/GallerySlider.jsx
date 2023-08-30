'use client'
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

import Img1 from '../Images/Gallery1.svg';
import Img2 from '../Images/Gallery2.svg';
import Img3 from '../Images/Gallery3.svg';
import Img4 from '../Images/Gallery4.svg';

export const GallerySlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider {...settings} className='w-[45%]'>
        <div>
        <Image alt="" src={Img1}/>
        </div>
        <div>
        <Image alt="" src={Img2}/>
        </div>
        <div>
        <Image alt="" src={Img3}/>
        </div>
        <div>
        <Image alt="" src={Img4}/>
        </div>
    </Slider>
  )
}

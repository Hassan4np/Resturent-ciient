import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import p1 from "../../../assets/assets/home/slide1.jpg"
import p2 from "../../../assets/assets/home/slide2.jpg"
import p3 from "../../../assets/assets/home/slide3.jpg"
import p4 from "../../../assets/assets/home/slide4.jpg"
import p5 from "../../../assets/assets/home/slide5.jpg"

const Swipers = () => {
    return (
        <div className='py-10'>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={p1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p5} alt="" /></SwiperSlide>
  
       
      </Swiper>
        </div>
    );
};

export default Swipers;
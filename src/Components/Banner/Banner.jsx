import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BannerImages from "./BannerImage.json";

const Banner = () => {
  return (
    <div>
      <Swiper slidesPerView={1}>
        {BannerImages.map((items, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={items.image} alt="kfc banners" width="100%" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;

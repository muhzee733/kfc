import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ExploreMenu.css";
import ProductMenu from "../../Category.json";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="browse-container">
      <Swiper spaceBetween={50} slidesPerView={5}>
        {ProductMenu?.map((item) => {
          return (
            <>
              <SwiperSlide key={item.cate_id}>
                <Link to={`/menu/${item.cate_id}`}>
                  <div className="browser-design">
                    <div className="brows-items">
                      <img src={item.category_image} alt={item.category_name} />
                      <h6 className="details-design">{item.category_name}</h6>
                      <span></span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              ;
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Menu;

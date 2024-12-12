import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import rs from "./reviewContents.module.scss";
import reviews from "../../data/review.json";

export default function ReviewContents() {
  return (
    <div className={`${rs.reviewContents} mt120 mb120`}>
      <h2 className="kr-h2 mb26 mw">소비자의 생생한 이용후기</h2>
      <div className={rs.swiperwarpper}>
      <Swiper
        className={rs.swiper}
        loop={true}         
        modules={[Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}  
        centeredSlides={true} 
        spaceBetween={24}      
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index} className={rs.swiperSlide}>
            
              <div className={rs.mainImg}>
                <img
                  src={item.userImg}
                  style={{ borderRadius: "8px" }}
                  alt={item.image_alt}
                />
              </div>
              <div className="d-flex">
                <div className={rs.contentsbox}>
                  <div className={`${rs.text} kr-body`}>{item.userReview}</div>
                  <div className="kr-h5 ms-2">{item.userId}</div>
                </div>
                <div>
                  <div className={rs.smallpicture}>
                    <img
                      src={item.image_url}
                      className="img-fluid"
                      alt={`${item.userId}의 리뷰 이미지`}
                    />
                  </div>
                  <p className={`${rs.productName} kr-body`}>{item.name}</p>
                </div>
            
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}

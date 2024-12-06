import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import rs from "./reviewContents.module.scss";
import reviews from "../../data/review.json";

export default function ReviewContents() {
  return (
    <div className={`${rs.reviewContents} mt120 mb120`}>
      <h2 className="kr_h2 mb26 mw">소비자의 생생한 이용후기</h2>

      <Swiper className={rs.swiper}
        loop={false}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={false}
        breakpoints={{
          300: {
            slidesPerView: 1.2,
            spaceBetween: 10, 
          },

          500: {
            slidesPerView: 1.2,
            spaceBetween: 10, 
          },
   
          550:{
            slidesPerView: 1.2,
            spaceBetween: 10, 
          },
          800: {
            slidesPerView: 2, 
            spaceBetween: 10, 
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 10,  
          },
          1650: {
            slidesPerView: 4.6, 
          },
        }}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={rs.wrapper}>
              <div className={rs.mainImg}>
                {/* 메인 이미지 */}
                <img
                  src={item.userImg}
                  className=""
                  style={{ borderRadius: "8px" }}
                  alt={item.image_alt}
                />
              </div>

              <div className="d-flex">
                {/* 리뷰 내용 및 유저 아이디*/}
                <div className={rs.contentsbox}>
                  <div className={`${rs.text} kr-body`}>{item.userReview}</div>
                  <div className="kr-h5 ms-2">{item.userId}</div>
                </div>

                {/* 제품 썸네일 및 제품 이름 */}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

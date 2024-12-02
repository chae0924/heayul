import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import CustomerReview from "./CustomerReviews";
import rs from "./reviewContents.module.scss";

export default function ReviewContents() {
  return (
    <div className={`${rs.reviewContents} mt120 mb120`}>
      <h2 className="kr_h2 mb26 mw">새로운 상품이 왔어요!</h2>
      <Swiper
        loop={false}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={false}
        // pagination={{ clickable: false}}
        breakpoints={{
          800: {
            slidesPerView: 1.2,
            spaceBetween: 10, 
          },
          1024: {
            slidesPerView: 4.6, 
            spaceBetween: 0,
          },
        }}
      >

        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
